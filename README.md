# start_term
a retro terminal startpage

This is a chrome extension to replace the new tab page with a retro style terminal page.

## features
- current time
- geolocated weather information (with links to yahoo weather)
- system information
- list of editable links (all of which are clickable)
- links are stored in google sync and so everything will be the same from whatever computer you are on
- most recent history
- search for google and youtube

## Search and Edits
By default, at the bottom of the page it says 'input@google.com'.
This is a dropdown box with the options to search google/youtube or edit the links.
Next to the $ is a input box to enter your search or the edit string.

## Editing the links
- In order to edit links you need to first choose edit@startterm from the dropdown.
- Then you need to enter a JSON format string.
- ex: {"pid": "1", "cat": "Category", "site": "SiteName", "url": "https://www.mysite.com"}
- The pid can only be 1-10
- If you make a mistake in entering the string, it will show a popup with a reminder of what to enter.

## Packing as Chrome Extension
This start page depends on permissions given through chrome extensions.
You can load the code as a package by going to chrome://extensions/, making sure that Developer mode is checked at the top.
Then you can either load the entire directory as an unpacked extension by clicking on Load unpackaged extension.
Or you can pack the extension by clicking on Pack extension.

### Resources
This project uses [VT220-mod-font](https://github.com/lalo/VT220-mod-font)

The weather is grabbed using [simpleWeather](https://github.com/monkeecreate/jquery.simpleWeather/)
