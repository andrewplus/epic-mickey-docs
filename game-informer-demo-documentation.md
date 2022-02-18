---
layout: default
title: Game Informer Demo Documentation
---

# Game Informer Demo Documentation

Below is documentation about the leftover Lua files from the demo presented to Game Informer for the November 2009 issue. Paraphrased excerpts of code are provided to provide additional context.

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

<div class="article-table">
    <table>
        <tbody>
            <tr>
                <th>
                    Trigger
                </th>
                <th>
                    Text
                </th>
            </tr>
            <tr>
                <td>
                    <pre>DemoLabBooksCaught == 2</pre>
                </td>
                <td>
                    The Scrapper is aligned with the destructive force of Thinner. He is powerful and dangerous- a product of directness and the pursuit of bettering himself at all turns.&nbsp; He realizes that his needs are paramount and as such accumulates power quickly. His mastery of Thinner and thus destruction is unparalleled.
                </td>
            </tr>
            <tr>
                <td>
                    <pre>DemoLabBooksCaught == 1</pre>
                </td>
                <td>
                    The Hero is influenced by the creative force of Paint. He is a builder and restorer and as such he draws allies to him that aid in his journey.&nbsp; In his striving to improve and uplift the world around him he also uplifts himself through acts of nobility and sacrifice.
                </td>
            </tr>
            <tr>
                <td>
                    <pre>PauseMenuObjectives()</pre>
                </td>
                <td>
                    Mad Doctor's lab:
                    <br>Rescue Gremlin Gus and escape the lab.
                </td>
            </tr>
            <tr>
                <td>
                    <pre>DemoLab_MirrorRoom()
    ⤷ Demo_ExitTried == 1</pre>
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
                    <pre>Demo_2DObject01()</pre>
                </td>
                <td rowspan="3">
                    Goal:
                    <br>Navigate the Clockworks to the Next Screen
                </td>
            </tr>
            <tr>
                <td>
                    <pre>Demo_2DObject02()</pre>
                </td>
            </tr>
            <tr>
                <td>
                    <pre>Demo_2DObject03()</pre>
                </td>
            </tr>
        </tbody>
    </table>
</div>

## Character dialogue

<div class="article-table">
    <table>
        <tbody>
            <tr>
                <th>
                    Speaker
                </th>
                <th>
                    Trigger
                </th>
                <th>
                    Text
                </th>
            </tr>
            <tr>
                <td>Gus</td>
                <td>
                    <pre>DemoLab_ColumnFall()
    ⤷ GusSaved == 1</pre>
                </td>
                <td>Oh, my!&nbsp; Well, just wreck the place, why don't ya?!</td>
            </tr>
            <tr>
                <td>Mickey</td>
                <td>
                    <pre>DemoLab_ColumnFall()
    ⤷ GusSaved == 0</pre>
                </td>
                <td>Ba-booooom!</td>
            </tr>
            <tr>
                <td rowspan="2">Gus</td>
                <td rowspan="2">
                    <pre>DemoLab_GusGreet()</pre>
                </td>
                <td>Hey! Hallooo down there! Up here!</td>
            </tr>
            <tr>
                <td>You have to help me get out! Quick, jump and spin-attack this cage! (Shake the remote.)</td>
            </tr>
            <tr>
                <td>Gus</td>
                <td>
                    <pre>DemoLab_GusThank()</pre>
                </td>
                <td>Thank you! I'm Gus Gremlin. The Mad Doctor captured me like he almost got you!</td>
            </tr>
            <tr>
                <td>Gus</td>
                <td>
                    <pre>DemoLab_GusThank()
    ⤷ TedSaved == 0 and GngSaved == 0</pre>
                </td>
                <td>My squad was trying to sabotage the Doctor's experiment. Two other gremlins are caged in this lab.</td>
            </tr>
            <tr>
                <td>Gus</td>
                <td>
                    <pre>DemoLab_GusThank()
    ⤷ TedSaved == 1 and GngSaved == 1</pre>
                </td>
                <td>My squad was trying to sabotage the Doctor's experiment. Thanks for saving them!</td>
            </tr>
            <tr>
                <td>Gus</td>
                <td>
                    <pre>DemoLab_GusThank()
    ⤷ TedSaved == 1 or GngSaved == 1</pre>
                </td>
                <td>My squad was trying to sabotage the Doctor's experiment. Looks like you've found one of them already.</td>
            </tr>
            <tr>
                <td rowspan="2">Gus</td>
                <td rowspan="2">
                    <pre>DemoLab_GusThank()
    ⤷ TedSaved == 0 and GngSaved == 0</pre>
                </td>
                <td>Look around, would you? Barry and Jamface have to be here somewhere!</td>
            </tr>
            <tr>
                <td>Try using Thinner to dissolve some walls. You can erase any wall that looks brightly colored, or you can paint blue sparkly stuff, but choose wisely...</td>
            </tr>
            <tr>
                <td rowspan="2">Gus</td>
                <td rowspan="2">
                    <pre>DemoLab_GusThank()
    ⤷ TedSaved == 1 or GngSaved == 1</pre>
                </td>
                <td>The other is bound to be here somewhere! Look around, would you?</td>
            </tr>
            <tr>
                <td>Try using Thinner to dissolve some walls. You can erase any wall that looks brightly colored, or you can paint blue sparkly stuff, but choose wisely...</td>
            </tr>
            <tr>
                <td>Gus</td>
                <td>
                    <pre>Demo_GusThankEnd()</pre>
                </td>
                <td>Anyhow, you need to get out of this place! I'll be waiting for you here at the exit. Good luck!</td>
            </tr>
            <tr>
                <td rowspan="2">Gus</td>
                <td rowspan="2">
                    <pre>Demo_GusHint()
    ⤷ Demo_ExitTried == 0</pre>
                </td>
                <td>Hey! What are you doing down there?</td>
            </tr>
            <tr>
                <td>Make your way up here, so we can skeedaddle!</td>
            </tr>
            <tr>
                <td>Gus</td>
                <td>
                    <pre>Demo_GusHintLite()
    ⤷ Demo_ExitTried == 0</pre>
                </td>
                <td>Quit messing around!</td>
            </tr>
            <tr>
                <td rowspan="2">Jamface</td>
                <td rowspan="2">
                    <pre>DemoLab_TedGreet()</pre>
                </td>
                <td>Gloryosky! I thought I'd never see anyone again! Help a poor gremlin!</td>
            </tr>
            <tr>
                <td>Help me out of here! Quick, jump and spin-attack this cage! (Shake the remote.)</td>
            </tr>
            <tr>
                <td>Jamface</td>
                <td>
                    <pre>DemoLab_TedThank()</pre>
                </td>
                <td>Thank you. I'm Jamface! I'm a gremlin! I wish I could repay your kindness.</td>
            </tr>
            <tr>
                <td>Jamface</td>
                <td>
                    <pre>DemoLab_TedThank()
    ⤷ Demo_ExitTried == 1</pre>
                </td>
                <td>Wait, did you find my wrench?! You DID! Give it here, then watch me fly!</td>
            </tr>
            <tr>
                <td>Jamface</td>
                <td>
                    <pre>DemoLab_TedThank()
    ⤷ Demo_ExitTried == 0</pre>
                </td>
                <td>I know! My wrench is around here somewhere. If you find it, I can fix that mechanical arm!</td>
            </tr>
            <tr>
                <td rowspan="2">Jamface</td>
                <td rowspan="2">
                    <pre>DemoLab_TedSpeak()
    ⤷ TedSaved == 1
    ⤷ Demo_HaveWrench == 0</pre>
                </td>
                <td>You might need to Paint in some Thinned parts of the lab, like stairs. They look blue and sparkly.</td>
            </tr>
            <tr>
                <td>You can Paint a target by pressing the B button, just like you would use Thinner.</td>
            </tr>
            <tr>
                <td>Jamface</td>
                <td>
                    <pre>DemoLab_TedSpeak()
    ⤷ TedSaved == 1
    ⤷ Demo_HaveWrench == 1</pre>
                </td>
                <td>Ah, you found my wrench! Now I can fix that mechanical arm for you!</td>
            </tr>
            <tr>
                <td>Jamface</td>
                <td>
                    <pre>Demo_TedFixesRobotArm()</pre>
                </td>
                <td>Now you can cross this arm to get to the ledge! Gotta fly - there's a battle shaping up! Goodbye!</td>
            </tr>
            <tr>
                <td rowspan="3">Barry</td>
                <td rowspan="3">
                    <pre>DemoLab_GhengisThank()</pre>
                </td>
                <td>Thank'ee kindly, sir! A caged gremlin is a sad critter.</td>
            </tr>
            <tr>
                <td>Don't suppose you're missing a wrench? Saw one behind the generator over there.&nbsp; It's the one with the big spinning wheel!</td>
            </tr>
            <tr>
                <td>And if you haven't rescued my buddy Jamface, please look around for him!</td>
            </tr>
            <tr>
                <td>Mickey</td>
                <td>
                    <pre>Demo_GetWrench()</pre>
                </td>
                <td>Hmm... a tiny wrench, fit for tiny hands.</td>
            </tr>
            <tr>
                <td>Gus</td>
                <td>
                    <pre>DemoLab_MirrorRoom()</pre>
                </td>
                <td>Whoa! That way leads out of this lab. You won't be able to return here.</td>
            </tr>
            <tr>
                <td>Gus</td>
                <td>
                    <pre>Demo_GusExitOutro()
    ⤷ Demo_ExitTried == 0
    ⤷ TedSaved == 0 and GngSaved == 0</pre>
                </td>
                <td>You sure you want to leave without freeing my two gremlin friends?</td>
            </tr>
            <tr>
                <td>Gus</td>
                <td>
                    <pre>Demo_GusExitOutro()
    ⤷ Demo_ExitTried == 0
    ⤷ TedSaved == 1 and GngSaved == 1</pre>
                </td>
                <td>You've freed both my gremlin friends, so I guess there's no reason to stay. Ready to go?</td>
            </tr>
            <tr>
                <td>Gus</td>
                <td>
                    <pre>Demo_GusExitOutro()
    ⤷ Demo_ExitTried == 0
    ⤷ TedSaved == 1 or GngSaved == 1</pre>
                </td>
                <td>You've only freed one of my two gremlin buddies. Are you sure you want to leave?</td>
            </tr>
            <tr>
                <td>Gus</td>
                <td>
                    <pre>Demo_GusExitOutro()
    ⤷ Demo_ExitTried == 1</pre>
                </td>
                <td>Are you sure you want to leave?</td>
            </tr>
            <tr>
                <td>Gus</td>
                <td>
                    <pre>Demo_GusExitOutro()
    ⤷ GetDialogResponse() == "Yes"</pre>
                </td>
                <td>Well, all right then. Let's get out of here!</td>
            </tr>
            <tr>
                <td>Mickey</td>
                <td>
                    <pre>Demo_DonaldSpeak()
    ⤷ Demo_DnldSpk() == 0</pre>
                </td>
                <td>What in the...</td>
            </tr>
            <tr>
                <td>Donald</td>
                <td>
                    <pre>Demo_DonaldSpeak()</pre>
                </td>
                <td>Thinking of escape, eh?&nbsp; Well, those Gremlin fellows can fix things, maybe even a magic projector!</td>
            </tr>
            <tr>
                <td>Jamface</td>
                <td>
                    <pre>Demo_ExitJamfaceSpeak()</pre>
                </td>
                <td>Thanks for rescuing me!</td>
            </tr>
            <tr>
                <td>Barry</td>
                <td>
                    <pre>Demo_ExitBarrySpeak()</pre>
                </td>
                <td>Good show!</td>
            </tr>
            <tr>
                <td>Mickey</td>
                <td>
                    <pre>DemoLab_UseMirror()</pre>
                </td>
                <td>Hmm... it doesn't seem to be working.&nbsp; Maybe that little fellow I saw earlier can help me out?</td>
            </tr>
        </tbody>
    </table>
</div>

# Demo_GV_isle1.lua

Coming soon.

# Demo_GV_isle2.lua

Coming soon.

# Demo_GV_isle3U.lua

Coming soon.

# Additional links

* [Lua file documentation](/lua-files)
* *[Oswaldiscool/Findings Sandbox](https://epicmickey.wiki/User:Oswaldiscool/Findings_Sandbox)* on [Epic Mickey Wiki](https://epicmickey.wiki)