---
layout: default
title: Home
body: home
---

This project aims to provide a collection of research and guides on the inner workings of Epic Mickey. Though most of the content on this site currently focuses on the first game, some of it will apply to the sequel as well.

<div class="home-grid">
<div markdown="1">

## Files
* [Configuration Files](./configuration-files)
* [Pak Files](./pak-files)
* [Audio Files](./audio-files)
* [Cutscene Files](./cutscene-files)
* [Subtitles](./subtitles)
* [Sequence Files](./bsq)
* [Dictionary Files](./dictionary-files)
* [Lua Files](./lua-files)
* [Save Files](./save-files)
* [Part Files](./part-files)
* [Scene Files](./scenes)
* [Levels](./levels)

</div>

<div markdown="1">

## Guides
* [Patching Game Files](./patching-game-files)
* [Loading Levels](./levels)
* [OsTown Softlock Save Fix](./ostown-softlock-save-fix)

</div>

<div markdown="1">

## Documentation
* [Test Levels](./test-levels)
* [Game Informer Demo Documentation](./game-informer-demo-documentation)

</div>

<div markdown="1">

## Archives
* [Save File Info (from Jeff Massung)](./archive/save-info-jeff-massung)
* [HKX and GSA file information](./archive/hkx-gsa-info)

</div>

<div markdown="1">

## Tools
* [BlueThinner Lite](./tools/bluethinner-lite)
* [Epic Mickey Config Editor](./tools/cmdline/)
* [Audio Renaming and Conversion Tool](./tools/batch-audio-tool)
* [Save Global Editor](./tools/global-editor)

</div>

<div markdown="1">

## Speedrunning
* [IL Save Files](./speedrunning/il-saves)

</div>
</div>

## Contributors

Suggestions and contributions are welcome via [GitHub pull request](https://github.com/andrewplus/epic-mickey-docs/pulls).

<!-- Contributors list (fetched asynchronously from the GitHub api) -->
<ul markdown="1" id="contributor-list"></ul>
<script async>
    fetch("https://api.github.com/repos/andrewplus/epic-mickey-docs/contributors")
        .then(response => response.json())
        .then(data => show_contributors(data));
    
    function show_contributors(contributors) {
        contributors.forEach(function(contributor) {
            var li = document.createElement("li");
            li.innerHTML = `<a href="${contributor.html_url}">${contributor.login}</a> (${contributor.contributions} commits)`;
            document.getElementById("contributor-list").appendChild(li);
        });
    }
</script>