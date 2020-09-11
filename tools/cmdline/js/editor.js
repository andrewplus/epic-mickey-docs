// GLOBALS
let editor = localStorage.getItem("editor") === null ? defaultPreset : JSON.parse(localStorage.getItem("editor"));;
let currentOverlay = "none";
const defaultLevel = "Levels/Main_Menu.level";
const requiredKeys = "-csg -binary -Set UseHostComm=false -wiiprofilermem 0 -nexusip 0.0.0.0 -Set StartInMainMenu=false -Set EnableRenderProfiling=false -Set HUDDisplaySafeFrame=false -Set WiiRemoteSleepTime=5 -Set OutOfMemoryBoxOfDoom=false -Set DisplayAIMemoryInfo=false -Set MaximizeJigsawAIMemory=false -Set ApprenticeSkip=false -Set ShowDevLevelLoad=false -Set AudioAllowSpillover=false";
const bootLevelMagicWord = "BOOT LEVEL";

// Allow only 0-9, periods, and minus signs on inputs
function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode === 45) {
        return true;
    }
    if (charCode !== 46 && charCode > 31 && charCode < 48 || charCode > 57) {
        return false;
    }
    return true;
}

// Message 
function message(contents, bgcolor) {
    document.querySelector("main").insertAdjacentHTML("beforeend", '<div class="message" style="background:'+bgcolor+'">'+contents+'</div>');
    setTimeout(function(){ document.querySelector(".message").remove() }, 2000);
}

// Close any open overlays
function closeOverlay() {
    document.querySelector(".overlay-mixins").classList.remove("show-flex");
    document.querySelector(".overlay-presets").classList.remove("show-flex");
    document.querySelector(".overlay-export").classList.remove("show-flex");
    document.querySelector(".darken").classList.remove("show");
}

// Check if the active element is an input field
function clickingField() {
    return document.activeElement.classList.contains("key") || document.activeElement.classList.contains("value");
}

////////////// Editor
// Refresh the editor using the data from the editor variable
function updateEditor() {
    const editorSelector = document.querySelector(".editor");
    editorSelector.innerHTML = "";
    // add items
    editor.forEach(function(item){
        editorSelector.insertAdjacentHTML("beforeend", returnItemHTML(item.key, item.value));
    });
    // event listeners for items
    const itemSelector = document.querySelectorAll(".item");
    itemSelector.forEach(function(element){
        // on input, run dictionary() and save the editor to the editor variable
        element.addEventListener("input", function() {
            editorToMemory();
            dictionary();
        });
        // on focus out, remove dictionary
        element.addEventListener("focusout", function() {
            removeDictionary();
        });
        // on focus in, run dictionary()
        element.addEventListener("focusin", function() {
            if (clickingField()) {
                dictionary();
            }
        });
        // on click, run dictionary()
        element.addEventListener("click", function() {
            // only run dictionary() if the user is clicking on an input
            if (clickingField()) {
                dictionary();
            }
        });
        // on click (remove button)
        element.querySelector(".remove").addEventListener("click", function() {
            removeItem(element);
            removeDictionary();
        });
    });
}

// Return the individual item HTML for the editor UI. Used primarily in updateEditor()
function returnItemHTML(key, value) {
    if (returnKeyType(key) === "number") {
        return '<div class="item"><div class="remove"></div><input class="key" value="'+key+'"><input type="number" class="value" value="'+value+'"></div>';
    } else {
        return '<div class="item"><div class="remove"></div><input class="key" value="'+key+'"><input class="value" value="'+value+'"></div>';
    }
}

// Save the editor keys and values to the editor variable
function editorToMemory() {
    let updatedEditor = [];
    const itemSelector = document.querySelectorAll(".item");
    itemSelector.forEach(function(element){
        let key = element.querySelector(".key").value;
        let value = element.querySelector(".value").value;
        updatedEditor.push(
            {
                "key": key,
                "value": value
            }
        );
    });
    editor = updatedEditor;
    localStorage.setItem("editor", JSON.stringify(editor));
}

// Add a new blank item to the editor UI. 
function newItem() {
    editor.push(
        {
            "key": "",
            "value": ""
        }
    );
    updateEditor();
    editorToMemory();
}

// Remove an item from the editor UI (accepts elements, not selectors!)
function removeItem(element) {
    element.remove();
    editorToMemory();
    updateEditor();
}

////////////// Dictionary
// Dictionary suggestions for input. This function shows and refreshest the list. It is removed with removeDictionary()
function dictionary() {
    const activeElement = document.activeElement;
    const key = activeElement.parentElement.querySelector(".key").value;
    const value = activeElement.parentElement.querySelector(".value").value;
    const currentlyEditing = activeElement.classList.contains("key") ? "key" : "value"; // whether the user is editing a key or a value (used for dictionary positioning)
    removeDictionary(); // remove any existing .dictionary elements
    if (returnDictionaryHTML(key, value, currentlyEditing) !== "") { // if there are no results, we don't need to show the dictionary
        // insert the dictionary below the appropriate field
        activeElement.parentElement.insertAdjacentHTML("beforeend", "<ul class='dictionary dictionary-" + currentlyEditing + "'>" + returnDictionaryHTML(key, value, currentlyEditing) + "</ul>");

        // give all of the dictionary results event listeners
        const dictionarySelector = document.querySelectorAll(".dictionary li");
        dictionarySelector.forEach(function(element) {
            element.addEventListener("mousedown", function() {
                dictionaryClicked(activeElement, element.dataset.value);
            });
        });

        // refresh simplebar scrollbar (needed because it's dynamic)
        const simpleBar = new SimpleBar(document.querySelector(".dictionary"));
        simpleBar.recalculate();
    }

    // update the input type of the value field depending on the value of the key field (see returnKeyType())
    if (returnKeyType(key) === "number") {
        // type="number"
        activeElement.parentElement.querySelector(".value").type = "number";
        activeElement.parentElement.querySelector(".value").setAttribute("onkeypress", "return isNumberKey(event)")
    } else {
        // type="text"
        activeElement.parentElement.querySelector(".value").type = "text";
        activeElement.parentElement.querySelector(".value").setAttribute("onkeypress", "return true")
    }
}

// Return the dictionary HTML used for dictionary()
// TODO: integrate this with returnKeyType() instead of doing the loops here
function returnDictionaryHTML(key, value, fieldType) {
    let output = "";
    if (key.length > 0) { // to prevent too many results for keys, we only show results after the first key press
        // key dictionaries
        if (fieldType === "key") {
            dictionaryDatabase.forEach(function(entry){
                if (entry.key.toLowerCase().includes(key.toLowerCase()) && entry.key.toLowerCase() !== key.toLowerCase()) {
                    output = output + returnDictionaryEntryHTML(entry.key);
                }
            });
        // value dictionaries
        } else if (fieldType === "value") {
            dictionaryDatabase.forEach(function(entry) {
                if (entry.key === key) {
                    if (entry.type === "boolean") { // booleans (simple true/false suggestion)
                        output = returnDictionaryEntryHTML("true") + returnDictionaryEntryHTML("false");
                    }
                    if (entry.type === "level" && key === bootLevelMagicWord) { // level suggestions
                        levelsDatabase.forEach(function(level) {
                            if (level.path.toLowerCase().includes(value.toLowerCase()) || level.name.toLowerCase().includes(value.toLowerCase())) {
                                output = output + returnLevelEntryHTML(level.path, level.name);
                            }
                        });
                    }
                }
            });
        }
    }
    return output;
}

// Return dictionary entry html
function returnDictionaryEntryHTML(text) {
    return "<li data-value='" + text + "'>" + text + "</li>";
}

// Return level entry HTML (different function because data-value and innerHTML are different)
function returnLevelEntryHTML(path, name) {
    return "<li data-value='" + path + "'>" + name + "</li>";
}

// Remove .dictionary
function removeDictionary() {
    if (document.querySelector(".dictionary")) { document.querySelector(".dictionary").remove(); }
}

// Handle dictionary result clicks
function dictionaryClicked(activeElement, value) { // needs to know the active input and replacement value
    activeElement.value = value; // set the field 
    removeDictionary();
    editorToMemory(); // save changes
}

// Return the value type expected for a key (for example, ShowDevLevelLoad expects a boolean)
function returnKeyType(key) {
    output = "string";
    for (let i = 0; i < dictionaryDatabase.length; i++) { // for loop used so we can break
        if (dictionaryDatabase[i].key === key) {
            output = dictionaryDatabase[i].type;
            break;
        }
    }
    return output;
}

// Generate a cmdline.txt file from the editor variable
// TODO: move into separate JS file (export.js or something idk)
function returnCmdline() {
    let cmdlineSets = "";
    let hasCustomLevel = false;
    let level = "";
    editor.forEach(function(item){
        let key = item.key;
        let value = item.value;
        if (key !== bootLevelMagicWord) {
            cmdlineSets = cmdlineSets + " -Set " + key + "=" + value;
        } else {
            hasCustomLevel = true;
            level = item.value;
        }
    });
    
    if (hasCustomLevel && level !== "") {
        return level + " " + "-csg -binary -Set UseHostComm=false -wiiprofilermem 0 -nexusip 0.0.0.0" + cmdlineSets + " -Set StartInMainMenu=false -Set EnableRenderProfiling=false -Set HUDDisplaySafeFrame=false -Set WiiRemoteSleepTime=5 -Set OutOfMemoryBoxOfDoom=false -Set DisplayAIMemoryInfo=false -Set MaximizeJigsawAIMemory=false -Set ApprenticeSkip=false -Set ShowDevLevelLoad=false -Set AudioAllowSpillover=false";
    } else {
        return defaultLevel + " " + "-csg -binary -Set UseHostComm=false -wiiprofilermem 0 -nexusip 0.0.0.0" + cmdlineSets + " -Set StartInMainMenu=false -Set EnableRenderProfiling=false -Set HUDDisplaySafeFrame=false -Set WiiRemoteSleepTime=5 -Set OutOfMemoryBoxOfDoom=false -Set DisplayAIMemoryInfo=false -Set MaximizeJigsawAIMemory=false -Set ApprenticeSkip=false -Set ShowDevLevelLoad=false -Set AudioAllowSpillover=false";
    }
}

////////////// Static element event listeners
// The functions for these event listeners should all be in different JS files (script tags should also be after editor.js)

// <div class="darken"></div>
document.querySelector(".darken").addEventListener("click", function() {
    closeOverlay();
});

// add option
document.querySelector(".option.add").addEventListener("click", function() {
    newItem();
});

// clear option
document.querySelector(".option.clear").addEventListener("click", function() {
    editor = [];
    updateEditor();
    editorToMemory();
});

// mixins option
document.querySelector(".option.mixin").addEventListener("click", function() {
    document.querySelector(".overlay-mixins").classList.add("show-flex");
    document.querySelector(".darken").classList.add("show");
    mixinOverlay();
});

// presets option
document.querySelector(".option.preset").addEventListener("click", function() {
    document.querySelector(".overlay-presets").classList.add("show-flex");
    document.querySelector(".darken").classList.add("show");
    presetOverlay();
});

// export option
document.querySelector(".option.export").addEventListener("click", function() {
    document.querySelector(".overlay-export").classList.add("show-flex");
    document.querySelector(".darken").classList.add("show");
    exportOverlay();
});

////////////// Initialize
updateEditor();