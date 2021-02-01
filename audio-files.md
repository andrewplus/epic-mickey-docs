# Audio Files

Epic Mickey contains many audio files of varying filetypes, located in the Audio folder. If you don't yet have access to the game's filesystem, consult the [Modifying Game Files](./modifying-game-files) page.

## Automatic method (recommended)

The easiest way to browse through the Epic Mickey audio files is by using the *[Epic Mickey Renaming and Conversion Tool](./tools/batch-audio-tool)*, written by RampantLeaf. It goes through all the game's audio files, renames them properly, and converts them to common formats that can be opened in VLC. Be sure to follow the instructions in the readme file.

## Manual method

There are four types of files in Audio\Wii that contain audio. Most of these files are at the root of this folder, though certain audio that varies by game language (Yen Sid's narration, etc.) can be found in Audio\Wii\Localize. Note that using the conversion methods below does not rename the files to their correct names.

### BNK

BNK files are not individual audio files, but soundbanks containing several smaller files inside. They can be extracted using Foobar2000 with a Wwise audio converter plugin or [Ravioli Game Tools](http://www.scampers.org/steve/sms/other.htm).

To extract them using Ravioli, simply download the Ravioli Game Tools zip file, extract it, and run RExtractor.exe. Choose one or several BNK files, set an output folder, and click Start to begin the extraction.

### WAV

Despite having the common WAV file extension, these files cannot be read by regular audio programs. They can be converted to normal WAV files with either [vgmstream](https://github.com/losnoco/vgmstream/releases) (command line) or [Looping Audio Converter](https://github.com/libertyernie/LoopingAudioConverter/releases) (GUI). Below is the command for converting WAV files with vgmstream (make sure you're running in the directory of test.exe):

```
test.exe -i -o <output>.wav <input>.wav
```

### OGG

Like the WAV files, these are not typical OGG audio files readable by VLC like you'd expect. To be read, they must first be converted with [ww2ogg](https://github.com/hcs64/ww2ogg/releases) or [Looping Audio Converter](https://github.com/libertyernie/LoopingAudioConverter/releases). Below is the command for converting OGG files with ww2ogg (make sure you're running in the directory of ww2ogg.exe and packed_codebooks.bin).

```
ww2ogg.exe <input>.ogg -o <output>.ogg
```

### WEM
These files are only found within BNK files. They can be converted to WAV using [vgmstream](https://github.com/losnoco/vgmstream/releases). Below is the command for converting WEM files with vgmstream (make sure you're running in the directory of test.exe):

```
test.exe -i -o <output>.wav <input>.wem
```
