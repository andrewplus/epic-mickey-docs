const presetsDatabase = [
    {
        "name": "Recommended settings",
        "description": "Basic recommended settings for users interested in booting into levels. PlayerEnableAllAbilities is required to use the brush and the spin move in custom boot levels.",
        "preset": [
            {
                "key": "BOOT LEVEL",
                "value": ""
            },
            {
                "key": "PlayerEnableAllAbilities",
                "value": "true"
            }
        ]
    },
    {
        "name": "Default settings",
        "description": "The settings when the editor is loaded for the first time.",
        "preset": [
            {
                "key": "BOOT LEVEL",
                "value": "Levels/Main_Menu.level"
            },
            {
                "key": "PlayerEnableAllAbilities",
                "value": "false"
            },
            {
                "key": "WiiRemoteSleepTime",
                "value": "5"
            }
        ]
    },
    {
        "name": "cmdline.txt",
        "description": "The default cmdline.txt file from the game.",
        "preset": [
            {
                "key": "BOOT LEVEL",
                "value": "Levels/Main_Menu.level"
            },
            {
                "key": "UseHostComm",
                "value": "false"
            },
            {
                "key": "UseHostCommScreenshots",
                "value": "false"
            },
            {
                "key": "PlayerDisplayLocation",
                "value": "false"
            },
            {
                "key": "PauseMenuEnabled",
                "value": "true"
            },
            {
                "key": "StartInMainMenu",
                "value": "false"
            },
            {
                "key": "WiiWristStrapShow",
                "value": "true"
            },
            {
                "key": "DisableAudio",
                "value": "false"
            },
            {
                "key": "RenderUseBatching",
                "value": "true"
            },
            {
                "key": "DisplayBuildVersionHUD",
                "value": "false"
            },
            {
                "key": "DisplayDebugTextHUD",
                "value": "false"
            },
            {
                "key": "ColorMipmapLevels",
                "value": "false"
            },
            {
                "key": "EnableRenderProfiling",
                "value": "false"
            },
            {
                "key": "UseDebugLineBatcher",
                "value": "false"
            },
            {
                "key": "DisableIGC",
                "value": "false"
            },
            {
                "key": "HUDDisplaySafeFrame",
                "value": "false"
            },
            {
                "key": "bShowHUD",
                "value": "true"
            },
            {
                "key": "PlayerEnableAllAbilities",
                "value": "false"
            },
            {
                "key": "SphericalHarmonicLightingDebug",
                "value": "false"
            },
            {
                "key": "WiiRemoteSleepTime",
                "value": "5"
            },
            {
                "key": "DisplayDebugParticleText",
                "value": "false"
            },
            {
                "key": "UseSmallerDebugText",
                "value": "false"
            },
            {
                "key": "OutOfMemoryBoxOfDoom",
                "value": "false"
            },
            {
                "key": "DisplayAIMemoryInfo",
                "value": "false"
            },
            {
                "key": "MaximizeJigsawAIMemory",
                "value": "false"
            },
            {
                "key": "ApprenticeSkip",
                "value": "false"
            },
            {
                "key": "ShowDevLevelLoad",
                "value": "false"
            },
            {
                "key": "AudioAllowSpillover",
                "value": "false"
            },
            {
                "key": "GodModeOnPlayer",
                "value": "false"
            }
        ]
    }
]

function presetOverlay() {
    const mixinsContent = document.querySelector(".overlay-presets .content");
    mixinsContent.innerHTML = returnPresetListHTML(presetsDatabase);
    mixinsContent.scrollTop = 0;
    // event listeners
    document.querySelectorAll(".overlay .overlay-item").forEach(function(element) {
        element.addEventListener("click", function() {
            presetClicked(presetsDatabase[element.dataset.index].preset);
        });
    });
}

function returnPresetListHTML(database) {
    let output = "";
    database.forEach(function(item, index) {
        const name = item.name;
        const description = item.description;
        const preset = item.preset;
        output = output + '<div class="overlay-item" data-index="'+index+'"><div class="name">'+name+'</div><div class="description">'+description+'</div></div>';
    });
    return output;
}

function presetClicked(preset) {
    editor = preset;
    console.log(preset);
    updateEditor();
    editorToMemory();
    closeOverlay();
}