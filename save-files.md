---
layout: default
title: Save Files
---

# Save Files

Save files are binary files used to store progress in Epic Mickey. Before making any edits, you should create backups to avoid losing data. This article uses research of the North American release; others may vary.

## Accessing save files

### Dolphin

Open Dolphin, right-click Epic Mickey in your game list, and click *Open Wii Save Folder*.

### Wii

Save files can be copied from a Wii to an SD card [using the built-in save manager](https://en-americas-support.nintendo.com/app/answers/detail/a_id/2720/~/how-to-copy-save-data-to-an-sd-card), but they will be encrypted .bin files. These can be decrypted using Dolphin with an Epic Mickey rom or with [FE100](https://wiibrew.org/wiki/FE100). With a softmodded Wii, save files can be easily extracted and re-inserted using [SaveGame Manager GX](https://wiibrew.org/wiki/SaveGame_Manager_GX).

## Save chunks

This section will be expanded as more information becomes known.

### GAME (0x0-0x31E)

The GAME chunk holds the level path, checkpoint, default interior, and pause menu map, among other information. This information is null terminated, so the extra characters from previous saves can be ignored/overwritten.

### GLOB (0x320-~0x4113, size defined in GDMARRAYSIZE)

The GLOB chunk holds global values, set by the [Lua scripts](./lua-files) and the Apprentice dialogue/quest system. Many of these are booleans (0x00 or 0x01) and are progress/choice-related. Each value is 4 bytes long, though only one of the bytes seems to set the value; the purpose of the other three is unknown. Using ApprenticeGlobalState.bsq, a table of globals and their values has been made and can be downloaded [here](./downloads/GlobalOffsets.csv). Additionally, there is a Windows GUI application which can be downloaded [here](./tools/global-editor).
