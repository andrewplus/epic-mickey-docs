---
layout: default
title: Subtitles
---

# Subtitles

## Overview

Subtitles are used to display text on the screen during [cutscene videos](cutscene-files) in Epic Mickey. They are stored *.sub files and are automatically loaded by the game when a cutscene with the same name and the *.bik file extension is played. For example, if "test.bik" is played, "test.sub" will be loaded by the game. Subtitles are also sometimes referred to as "sub files".

## Editing

### [BlueThinner Lite](./tools/bluethinner-lite)

Open the subtitles.pak file in BlueThinner Lite and open any *.sub file. The subtitle file will be displayed in the editor in XML format. Each subtitle has a dialog key that corresponds to a line in the language's [dictionary file](dictionary). You can edit the subtitle's contents and save the changes back to the packfile. In EM1, the start and end times are stored in number of frames (1/30th of a second). In EM2, the start and end times are stored in seconds.