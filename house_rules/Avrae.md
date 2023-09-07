# Avrae

:::note Out of Character
Avrae is the internal and external will of the universe. Pray they take pity on you.
:::

[Avrae](https://avrae.io/) is a Discord bot for D&D used to roll dice and ability checks in the Lemurian Discord server.

## Setting up

Use ```!import [dndbeyond character hyperlink]``` where the [dndbeyond character hyperlink] is your DNDBeyond character's share hyperlink. This loads your character into Avrae. Once the character is imported, you can use avrae commands. 

Below is an example of where the share link is. 
![Avrae_Example](/img/avrae_share_example.png)

You can do ```!rollstats``` to roll stats for a new character.

## Common Rolls

- ```!char [character name]``` changes your active character to [character name]. This requires loading your characters beforehand.
It will try to match from among your characters, so if your characters are `Bob` and `Faerun`, you can shorthand Faerun to `!char Fa`.
- ```!update``` updates your character with their latest stats from DNDBeyond
- ```!roll 1d20``` rolls a single 20 sided die.
- ```!roll 1d20 -b 2``` rolls a single 20 sided die +2
- ```!check strength``` rolls a strength check
- ```!check performance adv``` rolls a performance check with advantage
- ```!check stealth dis``` rolls a stealth check with disadvantage
- ```!save charisma``` rolls a charisma saving throw