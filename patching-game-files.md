---
layout: default
title: Patching Game Files
---

# Patching Game Files

The files of Epic Mickey can be modified and played in Dolphin or on a modded Wii console. Below are some guides on manipulating the files. There are other ways to go about this, but these are the suggested methods. The following instructions only apply to Windows users.

**Note:** This article assumes that you already possess a legally-obtained copy of Epic Mickey.

## Ripping the game

If you have a Wii console with Homebrew and a copy of the game, you can extract the game to a hard drive. To learn how to mod your Wii, click [here](http://wii.guide/). If you've already done that and you want to create a backup of your game, click [here](https://wii.guide/usbloadergx) for more info on using USB Loader GX. 

## Converting WBFS to ISO

If you backed up your game disc using the above method, you will likely find a WBFS file in the "wbfs" folder on the hard drive that you connected to your Wii console. In some cases, you may prefer to have it in the ISO format. To convert the file, use [WiiBackupManager](http://www.wiibackupmanager.co.uk/downloads.html). 

## For Dolphin users

### Method 1: Extract all files (recommended)

Before using this method, ensure you're using the latest version of Dolphin.

1. Make sure Dolphin is set up to search the folder of your ISO/WBFS file. To do this, click the Config icon on the top bar, click the Paths tab and click Add. <img src="/site-images/add-paths.png" class="article-image">
2. In Dolphin, right-click the game, click Properties and click the Filesystem tab.
3. Right-click Disc and click 'Extract Entire Disc...'. Extract it to somewhere on your PC. <img src="/site-images/extract-disc.png" class="article-image">
4. Now you'll need to add your extracted game. Repeat step 1, but this time, navigate to the location where you extracted the game and add the DATA\\sys\\ folder. 
5. You can now freely edit any of the files in DATA\\files\\. 

**Note:** When opening the game in Dolphin, make sure you select the extracted copy that you made and not the ISO. The extracted copy should be the one that shows up as 0.00B in size.

### Method 2: Extract all files with WIT

Before using this method, ensure you're using the latest version of Dolphin. This method utilizes the command line. Method 1 is recommended if you aren't sure how to use the command line.

1. [Download Wiimms ISO Tools](https://wit.wiimm.de/download.html).
2. Run the installer.
3. Navigate to the location of your ISO/WBFS. In the address bar, type `cmd`. <img src="/site-images/open-cmd.gif" class="article-image">
4. Type `wit extract {NAME} {DIRECTORY}`, where `{NAME}` is the name of your ISO/WBFS and `{DIRECTORY}` is the directory you want to extract it to.
5. Make sure Dolphin is set up to search the folder of your extracted directory. To do this, click the Config icon on the top bar, click the Paths tab and click Add. Navigate to the location where you extracted the game and add the sys\\ folder. <img src="/site-images/add-paths.png" class="article-image">

### Method 3: WiiScrubber

This method is cumbersome for editing multiple game files, can ruin your game ISO, and can only be used to edit files, not add new ones. Method 1 is recommended if you can spare the hard drive space. Backing up your ISO file is recommended. 

1. Ensure you have an ISO file of Epic Mickey. If you have a WBFS file or something else, convert it with [WiiBackupManager](http://www.wiibackupmanager.co.uk/downloads.html).
2. [Download WiiScrubber](https://web.archive.org/web/20190314161505/http://gbatemp.net/downloads/%5B4838%5DWiiscrubber140Kit.rar).
3. Extract the downloaded RAR file using 7zip or WinRAR.
4. **If your ISO is already open in Dolphin, exit the emulation before proceeding.**
5. Navigate to the folder that you extracted WiiScrubber to and open *WIIScrubber.exe*.
6. Click the Load ISO button in the top left corner and open your Epic Mickey ISO file. <img src="/site-images/load-iso.png" class="article-image">
7. Right-click on the file you would like to edit and click Extract. Choose a location on your PC to extract to. <img src="/site-images/extract-wiiscrubber.png" class="article-image">
8. Edit the file in your program of choice. Once you're done, right-click on the file in WiiScrubber again, but this time, click Replace and select your edited file.
9. Once WiiScrubber is finished modifying your ISO file, **make sure to close WiiScrubber before playing the game in Dolphin**. Dolphin cannot load the ISO while the file is open in another program.
10. Open your now-modified ISO in Dolphin

## For Wii homebrew users

Section coming soon.
