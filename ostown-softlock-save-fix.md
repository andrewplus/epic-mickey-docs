# OsTown Softlock Save Fix

There is an exploit for speedrunning that skips the Shadow Blot fight and the Battle of OsTown in Epic Mickey called the *[Shadow Blot Skip](https://www.youtube.com/watch?v=Gkl3jxxvxqQ)*. When executed, Mickey is put directly into the Battle of Mean Street after skipping a portion of the game. Upon defeating the Bloticles in Mean Street, you can typically either go to Ventureland to continue fighting the Blot or revisit OsTown. However, since the Shadow Blot Skip entirely skips the Battle of OsTown, going there confuses the game, resulting in an unescapable black screen after exiting the Thru the Mirror projector. Exiting to the menu and reloading the save sends Mickey back to the beginning of Thru the Mirror, essentially making the game softlocked, as OsTown will continue to not work properly.

Though most speedrunners know to avoid OsTown after executing the Shadow Blot skip, unsuspecting players occasionally encounter this bug by accident and ruin their save files. This page provides a guide for recovering broken save files by changing the projector screen direction to send Mickey back to Mean Street.

## Procedure

### Dolphin players
For this, you will need a [HxD](https://mh-nexus.de/en/hxd/) (recommended) or another hex editor.

1. Right click Epic Mickey in the Dolphin game list and click __Open Wii Save Folder__.
2. Open the appropriate .dat file with HxD. If you are unsure of which to open, consult the image below.<img src="/site-images/save-legend.png" class="article-image">
3. In HxD, click __Search__ and select __Go to...__.<img src="/site-images/goto.png" class="article-image">
4. Type "__35D__" in the text field and leave all the other settings as their defaults. Click __OK__.
5. Your text cursor should now be at index 0x35D. Type "00" to replace the "01" (no need to backspace anything).<img src="/site-images/edited-byte.png" class="article-image">
6. Save the file (Ctrl+S) and close HxD. 
7. Launch Epic Mickey in Dolphin. You should now be starting from the opposite end of Thru the Mirror. Proceed to Mean Street, then enter the Ventureland projector to continue playing the game.

__NOTE:__ Do not enter the OsTown projector again, as this will put you right back to where you started.

### Wii players
This section is coming soon. If you are desperate to have your save fixed, [make a request on the Epic Mickey Wiki Discord server](https://discord.epicmickey.wiki) and I'll see what I can do.