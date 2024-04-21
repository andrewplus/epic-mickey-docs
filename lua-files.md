---
layout: default
title: Lua Files
---

# Lua Files

## In *Epic Mickey*

### Overview

Lua files containing level scripting for Epic Mickey can be found in the [pak files](./pak-files). These files must be compiled to be used in the game.

### Editing

#### [BlueThinner Lite](./tools/bluethinner-lite)

Open the packfile the desired script is located in and select the lua file. The script will be displayed in the editor in text format. You can edit the script's contents and save the changes back to the packfile.

### Mass Decompiling
These steps are for Windows. Please note that this will only work with the first Epic Mickey game.
1. Ensure your computer has [Java](https://java.com/en/download/) installed, as it will be needed to run the decompiler.
2. Download [unluac 2015_03_02](https://sourceforge.net/projects/unluac/files/Unstable/unluac_2015_03_02.jar/download). You can also experiment with other versions of unluac for slightly more readable results, but this version appears to produce the most complete output. Move unluac_2015_03_02.jar to a working folder and rename it to "unluac.jar".
3. Copy all the lua files that you would like to decompile into your working folder.
4. Create a folder titled "output" in your working folder.
5. Create a new text file in your working folder called "loop.bat". Paste in the following text and save:
```
for %%f in ("*.lua") do (
    java -jar unluac.jar "%%f" > "output\%%~nf.lua"
)
pause
```
6. Run loop.bat. Once it is finished, close the console window.
7. The decompiled lua files can now be found in the output folder.

## In *Epic Mickey 2: The Power of Two*

### Overview

Lua files containing level scripting for Epic Mickey 2 can be found in *.pak files for levels that use them. They use a custom bytecode format, and as such, there is no known way to decompile or edit them.

## Functions

Coming soon.