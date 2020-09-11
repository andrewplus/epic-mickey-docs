const mixinsDatabase = [
    {
        "name": "Easy mode",
        "description": "Gives Mickey five of each sketch, abilities, and unlimited Paint/Thinner.",
        "mixin": [
            {
                "key": "PlayerEnableAllAbilities",
                "value": "true"
            },
            {
                "key": "PlayerInfiniteAmmo",
                "value": "true"
            }
        ]
    },
    {
        "name": "Half-speed rendering",
        "description": "Runs the game in slooooww mooootion.",
        "mixin": [
            {
                "key": "LockedFrameRate",
                "value": "0.0"
            },
            {
                "key": "LockedFrameRatePAL",
                "value": "0.0"
            }
        ]
    },
    {
        "name": "Bloom",
        "description": "Bloom shader properties. Initially set to the game defaults. To disable boom entirely, disable RenderBloomTweak.",
        "mixin": [
            {
                "key": "RenderBloomTweak",
                "value": "true"
            },
            {
                "key": "RenderBloomThresholdR",
                "value": "100"
            },
            {
                "key": "RenderBloomThresholdG",
                "value": "100"
            },
            {
                "key": "RenderBloomThresholdB",
                "value": "100"
            },
            {
                "key": "RenderBloomOffsetScale",
                "value": "1.783"
            },
            {
                "key": "RenderBloomScaleR",
                "value": "0"
            },
            {
                "key": "RenderBloomScaleG",
                "value": "0"
            },
            {
                "key": "RenderBloomScaleB",
                "value": "0"
            },
            {
                "key": "RenderBloomWeight0",
                "value": "30"
            },
            {
                "key": "RenderBloomWeight1",
                "value": "40"
            },
            {
                "key": "RenderBloomWeight2",
                "value": "50"
            },
            {
                "key": "RenderBloomWeight3",
                "value": "60"
            },
            {
                "key": "RenderBloomWeight4",
                "value": "50"
            },
            {
                "key": "RenderBloomWeight5",
                "value": "40"
            },
            {
                "key": "RenderBloomWeight6",
                "value": "30"
            }
        ]
    },
    {
        "name": "VFilter",
        "description": "An adjustable brightness filter. To set it back to default, disable RenderVFilterWeightEnable.",
        "mixin": [
            {
                "key": "RenderVFilterWeightEnable",
                "value": "true"
            },
            {
                "key": "RenderVFilterWeightTop",
                "value": "8"
            },
            {
                "key": "RenderVFilterWeightMiddle",
                "value": "48"
            },
            {
                "key": "RenderVFilterWeightBottom",
                "value": "8"
            }
        ]
    },
    {
        "name": "White void",
        "description": "Makes the void white. Can be useful for test levels; especially mickey_arcade.level.",
        "mixin": [
            {
                "key": "RenderBackgroundColorR",
                "value": "225.0"
            },
            {
                "key": "RenderBackgroundColorG",
                "value": "225.0"
            },
            {
                "key": "RenderBackgroundColorB",
                "value": "225.0"
            }
        ]
    },
    {
        "name": "Big ears",
        "description": "Gives Mickey comically big ears.",
        "mixin": [
            {
                "key": "MickeyEar_Right_Scale_X",
                "value": "2.12"
            },
            {
                "key": "MickeyEar_Right_Scale_Y",
                "value": "2.5"
            },
            {
                "key": "MickeyEar_Right_Scale_Z",
                "value": "2.5"
            },
            {
                "key": "MickeyEar_Left_Scale_X",
                "value": "2"
            },
            {
                "key": "MickeyEar_Left_Scale_Y",
                "value": "2.5"
            },
            {
                "key": "MickeyEar_Left_Scale_Z",
                "value": "2.5"
            }
        ]
    },
]

function mixinOverlay() {
    const mixinsContent = document.querySelector(".overlay-mixins .content");
    mixinsContent.innerHTML = returnMixinListHTML(mixinsDatabase);
    mixinsContent.scrollTop = 0;
    // event listeners
    document.querySelectorAll(".overlay .overlay-item").forEach(function(element) {
        element.addEventListener("click", function() {
            mixinClicked(mixinsDatabase[element.dataset.index].mixin);
        });
    });
}

function returnMixinListHTML(database) {
    let output = "";
    database.forEach(function(item, index) {
        const name = item.name;
        const description = item.description;
        const mixin = item.mixin;
        output = output + '<div class="overlay-item" data-index="'+index+'"><div class="name">'+name+'</div><div class="description">'+description+'</div></div>';
    });
    return output;
}

function mixinClicked(mixin) {
    const newEditor = editor.concat(mixin);
    editor = newEditor;
    console.log(mixin);
    updateEditor();
    editorToMemory();
    closeOverlay();
}