---
layout: default
title: Levels
---

# Levels

Levels are the separate areas that the Mickey launcher can load.

## How to load levels

Epic Mickey has a property called "ShowDevLevelLoad" in ConfigFiles.ini that is assumed add an option to access a level select screen on the game's menu like it does on the PC version of Epic Mickey 2. Sadly, toggling this option causes no changes to take effect and there is no known method of getting this to work, so a more roundabout method must be used to load levels.

### Softmodded Wii Console

A tool exists that can easily create Riivolution patches for Epic Mickey. It can be used to generate custom cmdline.txt files, so instead of booting into the menu, the game will instead boot into the specified level. It is completely web based, so no programs are required to be installed. The Riivolution homebrew app, an SD card reader, and an SD card are required. The tool can be found [here](./tools/cmdline/).

### Dolphin

The cmdline.txt file can be modified manually with a text editor such as Notepad and reinserted into the game. The first value (everything before '-csg') defines the level path that the Epic Mickey launcher will load first. Alternatively, there is a tool for generating cmdline.txt files which can be found [here](./tools/cmdline/). For help with modifying the file and reinserting it into the game, consult the [Modifying Game Files](./modifying-game-files) page.

## Files

All level data is stored inside [pak files](./pak-files) located the packfiles directory of the game's root.

### .level files

.Level files don't contain the level assets themselves, but rather, information about the level used to tell the launcher where to find the level assets and what resources are needed to load it. They can easily be viewed in a text editor. Below is a sample .level file:

**Levels/TL_MiniHub.Level**

``` ini
name = Tomorrowland
folder = Tomorrowland
loading_screen_texture = LoadingScreens/Postcard_TC_Notilus_Room.dds
shared = Environments/ThePark/TomorrowLand/GSA/TL_Shared.gsa
initial = stream_5
author = Evan Boehler
```

### .part files

These files are typically found in subfolders inside /Levels. They're similar to .level files in formatting and can also be viewed in a text editor. They seem to include resources for smaller areas within levels and tend to have paths to .gsa files and soundbanks. Below is a sample .part file:

**Levels/Tomorrowland/stream_21.part**

``` java
// gsas:
environments/thepark/tomorrowland/gsa/tl_minihub_airlock3.gsa
environments/thepark/tomorrowland/gsa/tl_minihub_airlock3_visit_1.gsa

// audio:
animatronicfodder.bnk
beetleworxcrawler.bnk
global.bnk
gremlin.bnk
lvl_fx_tc_tch.bnk
lvl_fx_tc_tcs_01.bnk
lvl_fx_tomorrowcity.bnk
prefab_pressureplate_tv.bnk
spatter.bnk
```

### GSA and .bin files
GSA files are referenced all over Epic Mickey's files, but you'd have a hard time finding them anywhere. This is because GSA files are cooked into .bin files during compilation. They tend to be found in the Environments and Palettes folder. The files are similar to scene formats found in other game engines, where they either contain part of a level or a template for an object. Since these files are mostly binary, there is no known way to open or modify these. The launcher can open all correctly formatted GSA files, though since they are usually meant to be loaded in unison with other GSA files through a .level file, you might find some oddities or bugs. Since lighting is usually specified in the .level file, it is likely the loaded GSA will be missing lighting as well.

<img src="/site-images/gsa-file.png" class="article-image">
