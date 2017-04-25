## Emoji Text Replacements

Emoji keyboard shortcuts as macOS text replacements.
Inspired by [@fredbenenson](https://twitter.com/fredbenenson) and [@anildash](https://twitter.com/anildash).

![Keyboard system pref pane](https://cloud.githubusercontent.com/assets/50809/25370483/f75636f2-293f-11e7-93ec-349446099e3a.png)

## Installation

To install:

1. Backup your current text replacements by [following Apple's directions](https://support.apple.com/en-us/HT204006)
2. [Download this plist file](https://raw.githubusercontent.com/tashian/emoji-text-replacements/master/dist/emoji.plist) and drag it into the Text Replacements list in the Keyboard prefs pane shown above.
3. Enjoy your new emoji text subtitutions.

## Building

To build from scratch, clone this repo and run:

```
npm install
npm run build
```

This will write out a `dist/emoji.plist` based on [emojis-list](https://github.com/Kikobeats/emojis-list) and [emojis-keywords](https://github.com/Kikobeats/emojis-keywords).
