---
layout: default
title: PAK Files
---

# PAK Files

PAK Files (or packfiles, pack files) are package files that contain most of Epic Mickey's game assets, such as level data, scripts, and graphics. All of Epic Mickey's PAK files are located within the packfiles folder of the game's root.

## Extracting PAK files
PAK files can be extracted using a tool called QuickBMS and a script written by xentax.com user [WRS](https://forum.xentax.com/memberlist.php?mode=viewprofile&u=16084&sid=503689d550d00946bccb0b78f084d38c). They can either all be extracted at once (recommended for convenience) or individually. The instructions are as follows:

1. Create a working folder somewhere on your PC. This will be used to contain all the required files.
2. Download [QuickBMS](http://aluigi.altervista.org/quickbms.htm) and put it in your working folder. This program will be used to extract the PAK file.
3. Download the Epic Mickey BMS script [here](https://rampantleaf.github.io/download/epic-mickey.bms) and place it in your working folder. [(CREDIT: WRS from zentax.com)](http://forum.xentax.com/viewtopic.php?f=10&t=5529)
4. Place the PAK file that you want to extract in your working folder. Your working folder should now look similar to the image below this guide.
5. Open QuickBMS.exe and follow the steps (select BMS script, select file, select output folder). I recommend creating a new folder for your files to be exported to. **(NOTE: To extract multiple or all of the PAK files, select them all when prompted by QuickBMS. If the program gets stuck on duplicate files, follow the instructions onscreen to tell it to *skip all future conflicts*.)**
6. If the files were extracted successfully, you can now close the BMS terminal and navigate to your output folder.

<img src="/site-images/pak-working-folder.png" class="article-image">

## Reinserting modified PAK files

***WARNING:*** **A modified file *cannot* be larger than the original file.**

QuickBMS can also reimport files into archives. Unfortunately, this means you must replace files and cannot create new ones. For instructions, here is an excerpt from [QuickBMS's instructions](https://aluigi.altervista.org/papers/quickbms.txt) (section 3).

>- Make a backup copy of the original archive!
>
>- Extract the files or only those you want to modify as
>  you do normally via the GUI (double-click on quickbms.exe) OR via
>  command-line like the following example:
>
>    `quickbms script.bms archive.pak output_folder`
>
>- Modify the extracted files leaving their size unchanged or
>  smaller than before.
>  I suggest to delete the files that have not been modified so that
>  the reimporting process will be faster and safer. In the folder
>  leave only the files you modified.
>  Remember that their size must be smaller/equal than the original!
>
>- Reimport the files in the archive via the GUI by clicking on the
>  file called "reimport2.bat" OR via command-line:
>
>    `quickbms -w -r -r script.bms archive.pak output_folder`
>
>- Test the game with the modified archive

**Make sure to always use "reimport2.bat", as "reimport.bat" doesn't work and "reimport3.bat" corrupts the file.**

## Notes

* Tests have shown that the game can access user-inserted PAK files. When wm_whiteroom.pak, a PAK file only found in the Japanese version of the game, is moved into the packfiles folder of the American release, the wm_whiteroom level contained in the PAK file loads just fine.
* Any PAK file not in the "packfiles" folder use a different, older format. They cannot currently be opened, but seem to use the same format seen in Quake (2).
