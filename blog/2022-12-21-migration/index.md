---
slug: migration
title: Migration from Fandom
authors: [brandon]
tags: [wiki, meta]
---

Moved us from [Fandom](https://lemurian-adventure-guild.fandom.com/wiki/Lemurian_Adventure_Guild_Wiki) due to its user unfriendlyness and poor UX through spammy UI.

---

[Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog).

Simply add Markdown files (or folders) to the `blog` directory.

Regular blog authors can be added to `authors.yml`.

The blog post date can be extracted from filenames, such as:

- `2019-05-30-welcome.md`
- `2019-05-30-welcome/index.md`

A blog post folder can be convenient to co-locate blog post images:

![Docusaurus Plushie](./docusaurus-plushie-banner.jpeg)

The blog supports tags as well!

**And if you don't want a blog**: just delete this directory, and use `blog: false` in your Docusaurus config.
