#Install
1. Download the extension file [harvest-chrome-extension.crx](https://github.com/blackrobot/harvest-chosen/raw/master/harvest-chrome-extension.crx).
2. Open your extensions tab by clicking the menu button, and selecting
   `Tools` > `Extensions`. Or just copy and paste this link into a new
   tab: `chrome://chrome/extensions/`
3. Drag and drop the downloaded extension into the tab window, and you should
   see a message which says "Drop to install".
4. Click the "Add" button on the confirmation window.
5. Sign into your Harvest account by going to
   `http://<organization name>.harvestapp.com` and then submit any bugs
   you find on the [issues page](https://github.com/blackrobot/harvest-chosen/issues).

# Why?
This Chrome extension adds the Chosen plugin to `<select>` dropdowns on
*.harvestapp.com. When you have hundreds of projects, with a few
sub-options each, the `<select>` fields will get unwieldy. What's most
odd about this is that Harvest actually develops the [Chosen
plugin](http://harvesthq.github.com/chosen/), but
doesn't use it on their own site. What gives? 

I'm sure there are lots of bugs, I tried to fix anything I could find,
which were mostly with the CSS. Also, because Harvest's stylesheets were
overriding the packaged `chosen.css`, all of the selectors in the
javascript and css file have been prefixed with "hrvst-chzn". Also, support
for optgroup searching is enabled which comes from
[this branch of the plugin](https://github.com/harvesthq/chosen/tree/search_improvements).

Have fun!
