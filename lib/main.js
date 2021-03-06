// Import the page-mod API
var pageMod = require("sdk/page-mod");
// Import the self API
var self = require("sdk/self");

// Create a page mod
// It will run a script whenever a ".org" URL is loaded
// The script replaces the page contents with a message
pageMod.PageMod({
    include: "https://www.messenger.com/*",
    // contentScriptFile: self.data.url("my-script.js")
    contentScriptFile: [self.data.url("jquery-1.7.min.js"), self.data.url("my-script.js")]
});