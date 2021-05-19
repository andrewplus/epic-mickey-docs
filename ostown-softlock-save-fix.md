# OsTown Softlock Save Fix

<div style="background-color: #fbfb90e0; border: 1px solid #9d8524; padding: 15px;color:black">If you are experiencing this or any other softlock in Epic Mickey, but are <strong>not comfortable with fixing the issue yourself or installing homebrew on your Wii</strong>, please join the [Epic Mickey Wiki Discord server](https://discord.epicmickey.wiki) and describe the issue you are facing. Someone will guide you through uploading your save so they can diagnose and repair it for you. Please have a [Wii-compatible SD card](https://www.nintendo.co.uk/Support/Wii/Usage/SD-Cards/Identifying-Compatible-SD-Cards/Identifying-Compatible-SD-Cards-239900.html) and a computer with a card reader handy.</div>

There is an exploit for speedrunning that skips the Shadow Blot fight and the Battle of OsTown in Epic Mickey called the *[Shadow Blot Skip](https://www.youtube.com/watch?v=Gkl3jxxvxqQ)*. When executed, Mickey is put directly into the Battle of Mean Street after skipping a portion of the game. Upon defeating the Bloticles in Mean Street, you can typically either go to Ventureland to continue fighting the Blot or revisit OsTown. However, since the Shadow Blot Skip entirely skips the Battle of OsTown, going there confuses the game, resulting in an unescapable black screen after exiting the Thru the Mirror projector. Exiting to the menu and reloading the save sends Mickey back to the beginning of Thru the Mirror, essentially making the game softlocked, as OsTown will continue to not work properly.

Though most speedrunners know to avoid OsTown after executing the Shadow Blot skip, unsuspecting players occasionally encounter this bug by accident and ruin their save files. This page provides a guide for recovering broken save files by changing the projector screen direction to send Mickey back to Mean Street.

## Guide for Dolphin players
For this, you will need the [Global Editor](tools/global-editor) program. This has not been tested on all regional versions. Always back up your saves before modifying them.

1. Right click Epic Mickey in the Dolphin game list and click __Open Wii Save Folder__.
2. In the Global Editor, click __File__, __Open...__, then navigate to the Wii save folder from step 1. Open the appropriate .dat file for your save slot. If you are unsure of which to open, consult the image below.<img src="/site-images/save-legend.png" class="article-image">
3. Click the __2dDirection__ item at the top of the Globals list and type 00 in the __New value__ field.
4. Save the change (Ctrl+S) and close the Global Editor.
5. Launch Epic Mickey in Dolphin. Upon loading your file, you should now be starting from the opposite end of Thru the Mirror. Proceed to Mean Street, then enter the Ventureland projector to proceed through the game.

__NOTE:__ Do not enter the OsTown projector again, as this will put you right back to where you started.

## Note for Wii players
Consult the [save files page](./save-files) for information on editing Wii saves, then follow steps 2-4 in the *Guide for Dolphin players* section above. This process is more advanced and either requires a softmodded Wii or Dolphin with an Epic Mickey rom. If you're stuck would prefer not to install homebrew on your Wii, leave a message in the [Discord server](https://discord.epicmickey.wiki) and someone will help you send your save file and have it patched.