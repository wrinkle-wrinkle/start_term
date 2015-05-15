# start_term
a retro terminal startpage

This is a chrome extension to replace the new tab page with a retro style terminal page.

## features
- current time
- geolocated weather information (with links to yahoo weather)
- system information
- list of editable links (all of which are clickable)
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

### Resources
This project uses [VT220-mod-font](https://github.com/lalo/VT220-mod-font)

The weather is grabbed using [simpleWeather](https://github.com/monkeecreate/jquery.simpleWeather/)
