# Audio Files

Epic Mickey contains many audio files of varying filetypes. Initially, their filenames only consist of random strings of numbers and they are unreadable by most software, but they can be renamed and converted using a variety of software. If you need help accessing the audio files, consult the [Modifying Game Files](./modifying-game-files) page.

## Automatically convert, extract, and rename all files

The easiest way to browse through the Epic Mickey audio files is by using the *[Epic Mickey Renaming and Conversion Tool](./tools/batch-audio-tool)*. It goes through all audio files, renames them to the official readable names used by the game, and converts them to formats that can be opened in VLC. Simply download the zip file and closely follow the instructions in *_README.html*. The source code can be found in *_rename_and_convert.py.txt*.

**NOTE:** A small number of anti-virus software falsely identifies this tool as a trojan. If the executable is quarantined by Windows Defender, please download the latest [security intelligence update](https://www.microsoft.com/en-us/wdsi/definitions), which should have the program whitelisted. Check the [VirusTotal scan](https://www.virustotal.com/gui/file/4a06b4d3932a1edda64b32b3e6bbcaa5bd51d3949283b523cda0e55b65094d22/detection) for a list of anti-virus test results.

## Manually extract and convert files

There are four types of files in Audio\Wii\ that contain audio. Most of these files are at the root of this folder, though certain audio that varies by game language can be found in the Localize folder.

### BNK

BNK files are not individual audio files, but soundbanks containing several smaller files inside. They can be extracted using Foobar2000 with a Wwise audio converter plugin or [Ravioli Game Tools](http://www.scampers.org/steve/sms/other.htm).

To extract them using Ravioli, simply download the zip file, extract it, and run RExtractor.exe. Choose one or several BNK files, set an output folder, and click Start to begin the extraction.

### WAV

Despite having the common WAV file extension, these files cannot be read by common audio programs. They can be converted to normal WAV files with either [vgmstream](https://github.com/losnoco/vgmstream/releases) (command line) or [Looping Audio Converter](https://github.com/libertyernie/LoopingAudioConverter/releases) (GUI). Below is the command for converting WAV files with vgmstream (make sure you're running in the directory of test.exe):

```
test.exe -i -o <output>.wav <input>.wav
```

### OGG

Like the WAV files, these are not typical audio files readable by VLC like you'd expect. To be read, they must first be converted with [ww2ogg](https://github.com/hcs64/ww2ogg/releases) or [Looping Audio Converter](https://github.com/libertyernie/LoopingAudioConverter/releases). Below is the command for converting OGG files with ww2ogg (make sure you're running in the directory of ww2ogg.exe and packed_codebooks.bin).

```
ww2ogg.exe <input>.ogg -o <output>.ogg
```

### WEM
These files are only found within BNK files. These files can be converted to WAV using [vgmstream](https://github.com/losnoco/vgmstream/releases). Below is the command for converting WEM files with vgmstream (make sure you're running in the directory of test.exe):

```
test.exe -i -o <output>.wav <input>.wem
```
