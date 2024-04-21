---
layout: default
title: PAK Files
---

# PAK Files

## Overview

PAK Files (or packfiles, pack files) are package files that contain most of Epic Mickey's game assets, such as level data, scripts, and graphics. All of Epic Mickey's PAK files are located within the packfiles folder of the game's root.

## Editing

### [BlueThinner Lite](./tools/bluethinner-lite)

BlueThinner Lite is a tool that can be used to view and edit the contents of PAK files. It can be downloaded [here](https://github.com/abso1utezer0/BlueThinnerLite/releases/latest). To use BlueThinner Lite, simply open the desired PAK file and select the file you wish to view or edit. The file will be displayed in the editor in text format. You can edit the file's contents and save the changes back to the PAK file.

## Extracting PAK files
PAK files can be extracted using a tool called QuickBMS and a script written by xentax.com user [WRS](https://forum.xentax.com/memberlist.php?mode=viewprofile&u=16084&sid=503689d550d00946bccb0b78f084d38c). They can either all be extracted at once (recommended for convenience) or individually. The instructions are as follows:

1. Create a working folder somewhere on your PC. This will be used to contain all the required files.
2. Download [QuickBMS](http://aluigi.altervista.org/quickbms.htm) and put it in your working folder. This program will be used to extract the PAK file.
3. Download the Epic Mickey BMS script [here](https://rampantleaf.github.io/download/epic-mickey.bms) and place it in your working folder. [(CREDIT: WRS from zentax.com)](http://forum.xentax.com/viewtopic.php?f=10&t=5529)
4. Place the PAK file that you want to extract in your working folder. Your working folder should now look similar to the image below this guide.
5. Open QuickBMS.exe and follow the steps (select BMS script, select file, select output folder). I recommend creating a new folder for your files to be exported to. **(NOTE: To extract multiple or all of the PAK files, select them all when prompted by QuickBMS. If the program gets stuck on duplicate files, follow the instructions onscreen to tell it to *skip all future conflicts*.)**
6. If the files were extracted successfully, you can now close the BMS terminal and navigate to your output folder.

<img src="/site-images/pak-working-folder.png" class="article-image">