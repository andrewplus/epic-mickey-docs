---
layout: default
title: HKX and GSA file information
---

# HKX and GSA file information

>The hx* files are Havok data. Some may be animation, but there may also just be physics data as well. I don’t remember.
>
>The _wii extension is nothing special, it was just a way for us to identify which crunched assets were for the Wii vs. the PC. For example, an artist would create an asset like “mickey.whatever” and then it’d be run through our asset cruncher, which would produce “mickey.whatever_wii” and “mickey.whatever_pc”. The only differences that might exist between the two files would be things like:
>
>Byte ordering (little vs. big endian), but I don’t remember which byte ordering the Wii had; they may have been the same?
>Size of an int (32 vs. 64 bit).
>The PC version may have contained extra data for debugging. For example, when connecting with the Havok debugger.
>
>Generally, speaking, though, you should be able to treat the any .foo_wii file as a .foo file.
>
>So, Epic Mickey was built on the Gamebryo engine (http://www.gamebryo.com/). It used GSA as it’s level format. I remember that when I came on board the project, that format was incredibly bloated (it was plain XML) and it would take several minutes to load the most basic of levels and anything moderately complex wouldn’t fit into memory.
>
>To fix this, there were several things done. We built a custom “convert GSA to binary” format and loader. IIRC, Gamebryo produced a fix later, but I don’t remember if we used it. You might be able to just load the GSA files within the Gamebryo level editor as-is, but I don’t know. If you can’t, then what you may do is inspect the file “knowing” that it is just XML, but in a binary format for incredibly fast loading. It would not be any defined binary XML that adheres to any RFC, though. I truly don’t remember the format much, but it would likely be something along the lines of…
>
>1 byte = length of tag name, followed by N bytes + null terminator
>1 byte = number of attributes
>N attributes, of which each attribute is defined as
>Null terminated string (attribute name)
>Null terminated string (attribute value)
>1 byte = number of child tags
>N child tags, recursively defined the same way as above
>
>The possibly deviations from the above that we might have done would have been things like:
>
>Inner text of the tags being included in the above. But from what I can recall, none of the XML had inner text; attributes were used for everything.
>Tag names and attribute names would have been highly reused/shared. And there wouldn’t have been very many of them. So instead of duplicating them repeatedly, it’s possible we chunked them all up at the beginning (or end) of the file, and the 1 byte “length of tag name” would have instead been something like “2 byte offset from start of file of null terminated string”. Something like:
>
>-- start of file –
>
>0000 <2-byte size of common string/header block>
>
>0002 object\0
>
>0009 id\0
>
>000c name\0
>
>0011 child\0
>
>…
>
>// 2 or 4-byte aligned start of body
>
>01a0 00 02  (“object” tag)
>
>01a2 00 01  (one attribute)
>
>01a4 00 09  (“id” attribute)
>
>01a6 26  (36 decimal, length of value, not including null terminator)
>
>01a7 “54947df8-0e9e-4471-a2f9-9af509fb5889\0”
>
>// 2-byte aligned offset
>
>01cd 00 01  (number of child tags)
>
>…
>
>-- end of file –
>
>The key thing to note here is that the level was loaded into memory and then kept there. All strings just pointed back to the loaded file (hence why the null terminators were kept in the file).
>
>Anyway, I don’t know if that’s how the GSA files you are seeing are formatted, but the above – or something close to it – is what I worked on within the first couple weeks of joining the team so the levels would fit in memory and load very fast. But I can’t remember if they stayed that way or not. Sorry.
>
>Good luck, let me know how it goes! And I’ll ping another friend and see if he remembers what format the GSA files ended up as, but he was a designer on the game, so I’m not sure he’ll know.”