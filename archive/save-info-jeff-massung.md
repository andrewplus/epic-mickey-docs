---
layout: default
title: Save File Information from Jeff Massung
---

# Save File Information from Jeff Massung

On 07/04/2019, Nukatha#2306 from the [Epic Mickey Wiki Discord](https://discord.epicmickey.wiki) posted the following email response from Jeff Massung, one of the senior programmers of Epic Mickey. It is a reply to a question regarding recoving a [softlocked OsTown save file](/ostown-softlock-save-fix).

## Email body

>Wow, been a long time since I thought about Epic Mickey. And, yes, the save game system was one of the many areas that I worked on. Sadly, I don't know how much help I'll end up being; it was a long time ago, and - as you'll soon discover - what was stored wasn't really up to me. But, I'll pass along what information I can that may help you (and anyone else) out. 
>
>Please don't curse me if some of this information is a little off, but it's what I remember. :-)
>
>First, it will probably help to know, roughly, how EM saves worked under-the-hood. All the levels were scripted using Lua. If you've ripped the ISO, then you should have the level files (most likely .pak files, but I don't remember). I can't remember if the Lua files were out on their own or part of the pak files. I want to say that the pak files are nothing special, though, and either just a simple gzipped file or a header (detailing what files are in the pak and their byte offset) + gzipped files that would have been compressed with zlib.
>
>Next, the save format, while I don't remember the specific details, was designed for multiple designers/systems to write stuff to without stepping on each others' toes. It uses a basic "chunked" format (read: name, info, size, data, where data might contain child chunks).
>At save time, there would be a set list of systems that would each get called with a save game "writer" object. The system would give itself a unique ID (4 bytes) and then start writing whatever it wanted to it. This would generally be a series of typed values, where type would be a 1-byte value indicating what type it was and then what followed the type would be dependent on the type. For example, a 0 might = 32-bit INT and the next 4 bytes would be the value written. One of the types would have been "binary data" and the next 4 bytes would have indicated the size of the data, followed by the bytes for that data. Those would have always been unique to whatever system they came from (e.g. one system probably saved out what was painted/thinned) and it'd be doubtful that the author even remembers the format.
>
>Given the above, one of the systems in question would have been the Lua scripting for level design. This would have probably had a 4-byte code like SCPT, and I also believe there was a special chunk just for Mickey (MICK). These sections of the save should be quite easy to find (I've done so already!). What's helpful about these is that the code that would write the save data would have been saving out Lua tables/variables that would be fairly straight-forward.
>For example, you should be able to see PLAYERSPAWNLOC in the there, followed by 12 or 16 bytes that would have represented &lt;X, Y, Z &#91;,W&#93;&gt; and PLAYERSPAWNROT that would likely be a quaternion. You should also see HEALTH and MAXHEALTH (feel free to have fun with those!). All the names should be null-terminated, and all ints/floats - I believe - are forced onto a 4-byte boundary. I don't remember if they are little or big endian, but are most likely whatever format is native to the Wii (I'd guess little).
>
>Okay, given all that - and the bug described - most likely what you're wanting to do is change the "choice" made with the pirate machine (I don't remember that, TBH). If that happens to be saved anywhere, it's likely in the script section. But, I doubt that it is. From what I recall, most minute choices weren't saved as opposed to their downstream effects getting saved. For example, choosing X might lead you to get an extra health, and what's saved is the increase in max health, but not that you chose X. The designers were pretty choosy about what they saved.
>As the thread you linked is about collectibles, I'd note there is a COLL section in the save file, which may be about collectibles?
>
>The only other section that would be worth checking out would be GLOB (global variables?). These wouldn't be named, there'd be a TON of them, they would essentially be a large list of 4-byte values. You could try flipping some of those and see what changes. Next the end of the GLOB section is another section for QUESTDATA. This, again, is just going to be a ton of binary data with no context, but it's much smaller. You may be able to swizzle some of those values around and see what happens.
>Most likely your best bet is going to be finding the place in the save file that says what level to load and pick a different one. That's likely right at the beginning. You can ignore all the "bogus" bytes after the level name, as most likely 256 bytes were reserved for the level name and everything after the null is ignored (and any extra bytes you see that look like a level name are just the remnants of past saves). The levels should be complete paths found in the ISO/PAK files, and you can probably just do "levels/MickeyJunk.level" (or whatever it is) and be done with it.
>
>Assuming you successfully do that, you may also need to modify the PLAYERSPAWNPOS so it's somewhere legit. The easiest way to do that - I'd think - would be to get someone else to save the game in that level and send you the 16 bytes following that spot in the save file and you can overwrite yours with them.
