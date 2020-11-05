# Lua Files

Lua files containing scripting for Epic Mickey can be found in the [pak files](./pak-files). To access them, extract all the pak files and navigate to Environments/_Shared/Scripts/. They need to be decompiled to be made readable.

## Decompiling
These steps are for Windows. Please note that this will only work with the first Epic Mickey game.
1. Ensure your computer has [Java](https://java.com/en/download/) installed, as it will be needed to run the decompiler.
2. Download [unluac](https://sourceforge.net/projects/unluac/files/unluacv1.2.2.zip/download). Make sure to use version 1.2.2 as it produces the most readable code. Extract unluac.jar to a working folder.
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