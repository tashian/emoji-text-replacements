const emojis = require('emojis-keywords');
const emojis_list = require('emojis-list');
const fs = require('fs');
const _ = require('lodash');
const all_emojis = _.zip(emojis, emojis_list);

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
        <string>` + emoji[0] + `</string>
    </dict>`
})

xml += `</array>
</plist>`;

fs.writeFile('emoji.plist', xml, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
})

