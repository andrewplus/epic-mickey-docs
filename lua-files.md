# Lua Files

Lua files containing scripting for Epic Mickey can be found in the [pak files](./pak-files). To access them, extract all the pak files and navigate to Environments/_Shared/Scripts/. They need to be decompiled to be made readable.

## Decompiling
These steps are for Windows only.
1. Ensure your computer has [Java](https://java.com/en/download/) installed, as it will be needed to run the decompiler.
2. Download [unluac](https://sourceforge.net/projects/unluac/files/Unstable/unluac_2020_05_28.jar/download). Move it into a folder with all of your lua files and rename it to "uluac.jar".
3. Create a folder titled "output" in your working folder.
4. Create a new text file in your working folder called "loop.bat". Paste in the following text and save:
```
for %%f in (*.lua) do (
    java -jar unluac.jar "%%f" > "output\%%~nf.lua"
)
pause
```
5. Run loop.bat. Once it is finished, close the console window.
6. The decompiled lua files can now be found in the output folder.