# Game Informer Demo Documentation

Below is documentation about the leftover Lua files from the demo presented to Game Informer for the November 2009 issue. Excerpts of code are provided to provide additional context. Some code may be paraphrased for simplicity.

# Demo.lua

## Notes

* There are lines of code referring to a library and catchable books. It seems to have links to Lonesome Manor.
```
Demo_Library = "Environments/HauntedMansion/GSA/HauntedMansion_ZoneE.gsa"
```
* Hero points are also referred to as "PaladinPoints" in the code.
* If Mickey leaves without rescuing the gremlins, he receives 25 scrapper points. Otherwise, he receives 25 hero points.
* After the level, an FMV cutscene plays named *fmv_outro_laboratory.bik*.
* After leaving the level, *Levels/Demo_GV_Start.level* is loaded.

## Characters

* Gremlin Gus
* Gremlin Jamface (green)
    * Most of the code refers to him as Gremlin Ted.
    * Would have fixed the mechanical arm if returned his wrench.
* Gremlin Barry (blue)
    * Most of the code refers to him as Gremlin Ghengis.

## Dialog boxes/UI text

<table class="article-table">
    <tbody>
        <tr>
            <th>
                <p>Trigger</p>
            </th>
            <th>
                <p>Text</p>
            </th>
        </tr>
        <tr>
            <td>
                <pre>
DemoLabBooksCaught == 2
                </pre>
            </td>
            <td>
                The Scrapper is aligned with the destructive force of Thinner. He is powerful and dangerous- a product of directness and the pursuit of bettering himself at all turns.&nbsp; He realizes that his needs are paramount and as such accumulates power quickly. His mastery of Thinner and thus destruction is unparalleled.
            </td>
        </tr>
        <tr>
            <td>
                <pre>
DemoLabBooksCaught == 1
                </pre>
            </td>
            <td>
                The Hero is influenced by the creative force of Paint. He is a builder and restorer and as such he draws allies to him that aid in his journey.&nbsp; In his striving to improve and uplift the world around him he also uplifts himself through acts of nobility and sacrifice.
            </td>
        </tr>
        <tr>
            <td>
                <pre>
PauseMenuObjectives()
                </pre>
            </td>
            <td>
                Mad Doctor's lab:
                <p>Rescue Gremlin Gus and escape the lab.</p>
            </td>
        </tr>
        <tr>
            <td>
                <pre>
DemoLab_MirrorRoom()
⤷ Demo_ExitTried == 1
                </pre>
            </td>
            <td>
                Leave the Mad Doctor's Lab?
                <ul>
                    <li>Yes</li>
                    <li>No</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <pre>
Demo_2DObject01()
                </pre>
            </td>
            <td rowspan="3">
                Goal:
                <p>Navigate the Clockworks to the Next Screen</p>
            </td>
        </tr>
        <tr>
            <td>
                <pre>
Demo_2DObject02()
                </pre>
            </td>
        </tr>
        <tr>
            <td>
                <pre>
Demo_2DObject03()
                </pre>
            </td>
        </tr>
    </tbody>
</table>
