# Configuration Files

Configuration files are text files that contain easily editable settings for the game. They can be found in Epic Mickey's root directory. Since they're not found inside pak files, they're easy to modify and reinsert into the game.

## Config file hierarchy
Thanks to Config.ini's comments and various testing we can get a good idea of the general order of precedence. It appears to be as follows, from highest precedence to lowest: `cmdline.txt -> ConfigFiles.ini -> ConfigOverride.ini -> default in-game values (MickeyF213923.213924.rel -> boot.dol)`

Config.ini is an older version of ConfigFiles.ini that doesn't make any changes to the game. It's unknown where cmdOptions.txt and LaunchOptions.txt fit into this.

## Main config files

### cmdline.txt

The basic launch settings for Epic Mickey. Uses the same value format ConfigFiles.ini (though they have to be defined with -Set), but unlike it, it defines the first level that the game loads at the beginning of the file. This file is very useful for [loading levels](./levels) at boot. Below is the default cmdline.txt:
```
Levels/Main_Menu.level -csg -binary -Set UseHostComm=false -Set UseHostCommScreenshots=false -Set PlayerDisplayLocation=false -wiiprofilermem 0 -nexusip 0.0.0.0 -Set PauseMenuEnabled=true -Set StartInMainMenu=false -Set WiiWristStrapShow=true -Set DisableAudio=false -Set RenderUseBatching=true -Set DisplayBuildVersionHUD=false -Set DisplayDebugTextHUD=false -Set ColorMipmapLevels=false -Set EnableRenderProfiling=false -Set UseDebugLineBatcher=false -Set DisableIGC=false -Set HUDDisplaySafeFrame=false -Set bShowHUD=true -Set PlayerEnableAllAbilities=false -Set SphericalHarmonicLightingDebug=false -Set WiiRemoteSleepTime=5 -Set DisplayDebugParticleText=false -Set UseSmallerDebugText=false -Set OutOfMemoryBoxOfDoom=false -Set DisplayAIMemoryInfo=false -Set MaximizeJigsawAIMemory=false -Set ApprenticeSkip=false -Set ShowDevLevelLoad=false -Set AudioAllowSpillover=false -Set GodModeOnPlayer=false
```
Three other versions of this file exist as well: '''cmdline_consumer.txt''', '''cmdline_finaldebug.txt''', and '''cmdline_localization.txt'''. Their differences from cmdline.txt are minimal and no obvious differences have been observed when switching them out. You can view them all and compare [here](https://tcrf.net/Epic_Mickey/Debug_Leftovers).

### ConfigFiles.ini
ConfigFiles.ini is the main config file. It is similar to cmdline.txt but is much more expansive and contains more than just launch options. This file is confirmed to have an effect on the game, but not all values are guaranteed to cause visible differences. Because of the size of the file, not all values have been tested individually. The default file can be viewed [here](https://pastebin.com/2Nmz8mwV).

### ConfigOverride.ini
Though this config doesn't exist in the files, it is called by the game at boot. As the name suggests, it overrides ConfigFiles.ini. If created in the same directory as ConfigFiles.ini, it will take precedence over any values that both files contain. 

### Config.ini
Appears to be an older version of ConfigFiles.ini. Though modifying it makes no changes to the actual game, it is an interesting remnant of the game's earlier phases and contains references to old enemy types and unused features. It's possible that it could contain some values that aren't in ConfigFiles.ini that the launcher may still accept.

### cmdOptions.txt
Only contains one setting. Seems to use the same syntax as cmdline.txt. This file is not read by the game, so changing or removing it does nothing. Unknown where this fits into the hierarchy.

```
-wiiprofilermem 0
```
 
### LaunchOptions.txt
This file allows you to define new command line options for the launcher without editing the launcher code. Not sure how it's used or if it actually changes anything. Full file [here](https://pastebin.com/6HK3ECMr).

## Other text files

### always_loaded.txt

List of pak files that are auto-loaded by the game at startup. Required for the game to boot.

```
; always loaded packfiles
;
; these packfiles are auto-loaded by the game at startup
; be careful what you put in here!
;

_dynamic.pak
globalscripts.pak
levels.pak
bsq.pak
collectibles.pak
hudeffects.pak
hudtextures.pak
MainMenuTextures.pak
pausemenu_base.pak
pausemenu_main.pak
pausemenu_map.pak
pausemenu_pins.pak
pausemenu_quests.pak
```
  
### BugWranglers.txt

An interesting list of bug testers with dates. Uncertain if this was used in the actual game engine or just for developers to reference.

```
//
// BugWranglers.txt - Scheduling for the bug wranglers
//

//
// Syntax:
//   One line per entry, with the label 1st and the date 2nd
//  This is a comment
# this is also a comment
//

// Syntax:
//   name, date [, date[,...]]
Adam Gabbert, 9-4-2010, 9-6-2010, 9-7-2010, 9-8-2010, 9-9-2010, 9-10-2010, 9-11-2010
Matt Baer,  9-5-2010
Jeff Massung, 6-28-2010
Jeff Grills, 6-24-2010
Pete Shelus, 6-15-2010
Eric Will, 4-20-2010
Sean West, 6-25-2010, 8-23-2010
Sean Barton, 6-4-2010

Alex Spivak, 0-0-0000
Andy Arizpe, 0-0-0000
Wendy White, 0-0-0000
Quoc Tran, 0-0-0000
Alex Duran, 0-0-0000
Travis Archer, 0-0-0000
Andrew Wright, 0-0-0000
Alex Ni, 0-0-0000
Dave Idemoto, 0-0-0000
Raven Stewart, 0-0-0000

// TODO: Add more programmers here

Tony Bratton, 7-27-2010
Gabe Farris, 5-28-2010
```
 
### CookExclusions.txt

Seems to be a list of strings in file paths to be omitted when "cooking" the game. It was likely used for building the game and it's all commented out, so there's likely not much that can be done with it.
```
//
// CookExclusions.txt - Exclude expressions for data cooking
//
// Each non-blank, non-comment line is a regular expression matching files that
// should be excluded from cooking.
//
// Examples:
//    _Old
//  This line will skip any files whose paths contain "_Old"
//

//_Old
//_Temp

// Making a change here to test the continuous integration for content.
```

### CountDownList.txt

Lists countdown dates for key dates that would have likely been included in the debug text overlay. Gives an interesting look into the game's timeline.

```
//
// CountDownList.txt - Tells the Mickey launcher the dates to which it should count down
//

//
// Syntax:
//   One line per entry, with the label 1st and the date 2nd
//  This is a comment
# this is also a comment
//
// Directives, i.e. properties that are used to guide the parse instead of being full data, start with $

// Enable the display if timers.
// Use $Disable to disable the display of all timers
$Enable

// Countdown values to display
// Demo, 9-9-2009
// Pre-Alpha, 1-18-2010
//E3 Content Lock, 4-19-2010
//E3 Demo Done, 5-10-2010
//88MB @ 30FPS, 5-17-2010
//Run from Disc, 6-14-2010
//E3 Show, 6-15-2010
//Alpha, 6-28-2010
//Final Integration, 7-26-2010
//Pre-Lot2, 8-20-2010
ZBR, 9-6-2010
1st Submit, 9-20-2010
RTM, 10-8-2010

// TODO: Add more timers here
```
 
### InputMapping\_Final.xml, InputMapping\_Debug.xml, InputMapping_Script.xml

Controller mapping for the game. Contains controls for PC input devices, likely used for development, and interestingly, Gamecube controls for certain actions. InputMapping_Final.xml is used by the game and can be changed, but remapping debug feature inputs doesn't seem to make them work. Haven't managed to get Gamecube controllers to work either.

### MapList.txt

A large list of early level file paths that don't actually exist in the game anymore. Contrary to what the comments say, this file isn't required to tell the Mickey launcher which levels to use, made obvious by the fact that the entire file is commented out. Full file accessible [here](https://pastebin.com/8CT9CJrd) for reference.

### MyMapList.txt

A blank file that "tells the cooker to cook a GSA even if it isn't in MapList.txt or a level file". It's pretty much empty.
```
//
// MyMapList.txt - Tells the cooker to cook a GSA even if it isn't in MapList.txt or a level file.
//

//
// Syntax:
//   One line per map, with the Menu text first, a comma, and the map name second
//   Empty lines are skipped and comments can start with // or #
// WARNING: Use "/" instead of "\" for map file names! This is the same as for cmdline.txt.
// Examples:
//  Super Cool Map I Made, Environments/MyMaps/SuperCoolMap.gsa
//  This is a comment
# this is also a comment
//
```

### NDEVSpyDefaults.txt
Related to the Nintendo Wii devkits. Obviously, this doesn't have any effect on the game.

```
//
// Default values, since defaults are not used when there are configuration files
//

"almost.*fatal",Orange
"critical.*error",Yellow
"(error)|(failed)",Red
"warning",Yellow
// "hard.*load",Orange

//
// Additional items
//

"could not find",Fuchsia
```

### Placeholder.txt

Empty file.

### PrivateMapList.txt

Another map list that also contains a bunch of unused maps that don't exist in the filesystem anymore. Mostly test level paths. Full file [here](https://pastebin.com/X1T4n0fp).

### SNames.txt

A bunch of random words and names. What this is for is anyone's guess. Full file [here](https://pastebin.com/J9SdJzUV).

### VERSIONDATA.TXT

Version data of the game.

```
213923.213924.213927
```
