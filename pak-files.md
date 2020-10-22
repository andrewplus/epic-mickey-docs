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

Currently, there is no known way to modify PAK file contents, repackage them, and reinsert them into the game.

## Notes

* Tests have shown that the game can access user-inserted PAK files. When wm_whiteroom.pak, a PAK file only found in the Japanese version of the game, is moved into the packfiles folder of the American release, the wm_whiteroom level contained in the PAK file loads just fine.
