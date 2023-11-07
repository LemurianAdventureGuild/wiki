# Avrae

:::note Out of Character
Avrae is the internal and external will of the universe. Pray they take pity on you.
:::

[Avrae](https://avrae.io/) is a Discord bot for D&D used to roll dice and ability checks in the Lemurian Discord server.

## Setting up

Use ```!import [dndbeyond character hyperlink]``` where the [dndbeyond character hyperlink] is your DNDBeyond character's share hyperlink. This loads your character into Avrae. Once the character is imported, you can use avrae commands. 

Below is an example of where the share link is. 
![Avrae_Example](/img/rules/Discord_Rules/avrae_share_example.png)

You can do ```!rollstats``` to roll stats for a new character. Refer to [the multiple characters page](../multiple_characters) for more information.

## Common Rolls

- ```!char [character name]``` changes your active character to [character name]. This requires loading your characters before hand
- ```!update``` updates your character with their latest stats from DNDBeyond
- ```!roll 1d20``` rolls 1d20 sided die.
- ```!roll 1d20 -b 2``` rolls 1d20 and adds +2
- ```!roll 2d20kl1``` rolls 2d20 and keeps the lowest 1. `kl` stands for "Keep Lower"
- ```!roll 3d20kh2 -b 2``` rolls 3d20, keeps the highest 2 and adds +2. `kh` stands for "Keep Higher"
- ```!check strength``` rolls a strength check
- ```!check charisma -rr 3``` rolls 3 charisma checks
- ```!check charisma -rr 3 -b 2``` rolls 3 charisma checks with a +2 bonus
- ```!check performance adv``` rolls a performance check with advantage
- ```!check stealth dis``` rolls a stealth check with disadvantage
- ```!save charisma``` rolls a charisma saving throw
- ```!attack``` brings up the list of all attacks you can do with your currently loaded character. 

:::tip 
"Avrae is fair and just."
:::
