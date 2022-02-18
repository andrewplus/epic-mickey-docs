---
layout: default
title: Lua Files
---

# Lua Files

Lua files containing level scripting for Epic Mickey can be found in the [pak files](./pak-files). To access them, extract all the pak files and navigate to Environments/_Shared/Scripts/. They need to be decompiled to be made readable.

## Decompiling
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

## Editing
Please note that this will only work with the first Epic Mickey game.

There is currently no known way to recompile decompiled Lua files and have them work in game, so you must edit the compiled code with the Lua VM Instructions language. Keep in mind that editing compiled Lua files is no simple task.

If you just want to edit some values to true or false, here is a chart that you can use on a compiled lua file with a hex editor:

<img src="//user-images.githubusercontent.com/83473579/143671322-2b82000d-4197-4fd0-8a1f-3941120b0512.png" class="article-image">

*Opcode is the hex value of the operator*

Deeper documentation on the subject can be found [here](http://underpop.free.fr/l/lua/docs/a-no-frills-introduction-to-lua-5.1-vm-instructions.pdf). 
