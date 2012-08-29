# Why?
This Chrome extension adds the Chosen plugin to `<select>` dropdowns on
*.harvestapp.com. When you have hundreds of projects, with a few
sub-options each, the `<select>` fields will get unwieldy. What's most
odd about this is that Harvest actually develops the [Chosen
plugin](http://harvesthq.github.com/chosen/), but
doesn't use it on their own site. What gives? 

I'm sure there are lots of bugs, I tried to fix anything I could find,
which were mostly CSS bugs. Also, because Harvest's stylesheets were
overriding the packaged chosen.css, all of the selectors in the
javascript and css file have been prefixed with "hrvst-chzn". Also,
support for optgroup searching is enabled as well.

Have fun!
