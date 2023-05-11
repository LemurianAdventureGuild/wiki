# Lemurian Adventure Guild

GitHub Pages website for D&D 5e group. <https://lemurianadventureguild.github.io/wiki/>

## How to Contribute
1. Create a Github account
2. Be here in the [the Github UI for this repository](https://github.com/LemurianAdventureGuild/wiki)! You should be able to do this all through a browser.
3. Create a new branch for your changes. Use the dropdown in the top right to create a new branch with a descriptive name. 

![Screenshot 2023-05-11 at 10 15 01 AM](https://github.com/LemurianAdventureGuild/wiki/assets/1022875/4a7abde9-85ca-4e02-8709-26f5ea997db2)

4. **If you are creating a new page**, find the appropriate folder in `docs` for your new page, and click Add Page. The filename should end with `.md`.
* `docs/player_characters` for your player characters
* `docs/npcs` for any interesting NPCs (there are some subfolders within here you can use if they make sense)
* `docs/house_rules` for rules for our Guild
* `docs/archives` for any other archival texts/details (stories, legends, records, etc)
5. **If you are editing an existing page**, find that page by navigating the `docs` folder, and click the pencil icon.

![Screenshot 2023-05-11 at 10 28 11 AM](https://github.com/LemurianAdventureGuild/wiki/assets/1022875/39547319-b577-4013-bfdd-33597c8614e4)

6. When you are done editing, commit your changes.
7. Return to the [main page](https://github.com/LemurianAdventureGuild/wiki) and create a Pull Request. Provide light details about what is changing and why.

![Screenshot 2023-05-11 at 10 28 45 AM](https://github.com/LemurianAdventureGuild/wiki/assets/1022875/cb8ba4fd-1036-43c5-a193-f56ca0568308)

8. Let folks know in the `#archives` channel on the Lemurian Guild Discord server. 
9. Your changes will be reviewed and added to the site shortly!

## Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```shell
$ yarn
```

### Local Development

```shell
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```shell
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Deployment is done automatically through GitHub Actions CI.
