---
layout: default
title: Levels
---

# Levels

## In *Epic Mickey*

### Overview

Levels are the separate areas that the Mickey launcher can load. They use the *.level file extension and are referenced by the game's launcher. Levels are made up of [part files](./part-files), which contain references to [scene files](./scenes) and soundbanks.

### Editing

#### [BlueThinner Lite](./tools/bluethinner-lite)

Open levels.pak in BlueThinner Lite and open any .level file. The level will be displayed in the editor in text format. You can edit the shared scene, loading screen texture, author, name, initial part file, and name of the folder containing the part files.

##### Example
**Levels/TL_MiniHub.Level**
```ini
name = Tomorrowland
folder = Tomorrowland
loading_screen_texture = LoadingScreens/Postcard_TC_Notilus_Room.dds
shared = Environments/ThePark/TomorrowLand/GSA/TL_Shared.gsa
initial = stream_5
author = Evan Boehler
```

### How to load levels
Epic Mickey has a property called "ShowDevLevelLoad" in ConfigFiles.ini that is assumed add an option to access a level select screen on the game's menu like it does on the PC version of Epic Mickey 2. Sadly, toggling this option causes no changes to take effect and there is no known method of getting this to work, so a more roundabout method must be used to load levels.

#### Softmodded Wii Console
A tool exists that can easily create Riivolution patches for Epic Mickey. It can be used to generate custom cmdline.txt files, so instead of booting into the menu, the game will instead boot into the specified level. It is completely web based, so no programs are required to be installed. The Riivolution homebrew app, an SD card reader, and an SD card are required. The tool can be found [here](./tools/cmdline/).

#### Dolphin
The cmdline.txt file can be modified manually with a text editor such as Notepad and reinserted into the game. The first value (everything before '-csg') defines the level path that the Epic Mickey launcher will load first. Alternatively, there is a tool for generating cmdline.txt files which can be found [here](./tools/cmdline/). For help with modifying the file and reinserting it into the game, consult the [Modifying Game Files](./modifying-game-files) page.

### *.gsa and *.bin files
These files, commonly and incorrectly referred to as "levels", are [scene files](scenes) that contain entities, components, and properties. A collection of scene files forms a level. They can be viewed and edited with BlueThinner Lite.

## In *Epic Mickey 2: The Power of Two*

### Overview

Levels in Epic Mickey 2 are stored in the levels.pak file. They use the *.lvl file extension and are presumably similar to the levels in the first game, though are compiled into a binary format. As these files have not yet been reverse engineered, there is no known way to edit them.