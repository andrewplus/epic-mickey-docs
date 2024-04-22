---
layout: default
title: Part Files
---

# Part Files

## Overview

Part files are the smallest unit of level data in Epic Mickey. They use the *.part file extension and are referenced by [levels](./levels). Part files contain references to [scene files](./scenes) and soundbanks. They are also sometimes referred to as "streams" or "stream files".

## Editing

### [BlueThinner Lite](./tools/bluethinner-lite)

Open levels.pak in BlueThinner Lite and open any *.part file. The part file will be displayed in the editor in text format. You can insert a path to a valid scene file or soundbank in the file. Comments are allowed and use the `//` syntax.

#### Example

**Levels/Tomorrowland/stream_21.part**
```
// gsas:
environments/thepark/tomorrowland/gsa/tl_minihub_airlock3.gsa
environments/thepark/tomorrowland/gsa/tl_minihub_airlock3_visit_1.gsa

// audio:
animatronicfodder.bnk
beetleworxcrawler.bnk
global.bnk
gremlin.bnk
lvl_fx_tc_tch.bnk
lvl_fx_tc_tcs_01.bnk
lvl_fx_tomorrowcity.bnk
prefab_pressureplate_tv.bnk
spatter.bnk
```