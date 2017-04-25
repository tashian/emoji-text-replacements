function escapeXML(str) {
    return str.replace(/&/g, '&amp;')
               .replace(/</g, '&lt;')
               .replace(/>/g, '&gt;')
               .replace(/"/g, '&quot;')
               .replace(/'/g, '&apos;');
}

const emoji_keywords = require('emojis-keywords');
const emoji_list = require('emojis-list');
const fs = require('fs');
const _ = require('lodash');
var all_emojis = _.zip(emoji_keywords, emoji_list);

var obvious_additions = [
    ["D:", "😧"],
    [":'(", "😢"],
    ["=)", "😃"],
    ["=-)", "😃"],
    [":D", "😄"],
    [":-D", "😄"],
    [";)", "😉"],
    [";-)", "😉"],
    [":o", "😮"],
    [":-o", "😮"],
    [":)", "🙂"],
    [":-)", "🙂"],
    ["(:", "🙂"],
    [";P", "😜"],
    [";-P", "😜"],
    [";p", "😜"],
    [";-p", "😜"],
    [":P", "😛"],
    [":-P", "😛"],
    [":p", "😛"],
    [":-p", "😛"]
]

all_emojis = all_emojis.concat(obvious_additions);

var xml = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<array>`;

_.each(all_emojis, function(emoji) {
    xml += `
    <dict>
        <key>phrase</key>
        <string>` + emoji[1] + `</string>
        <key>shortcut</key>
        <string>` + escapeXML(emoji[0]) + `</string>
    </dict>`
})

xml += `
</array>
</plist>`;

fs.writeFile('dist/emoji.plist', xml, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
})

