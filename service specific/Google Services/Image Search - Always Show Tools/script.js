// ==UserScript==
// @name         Always Show Google Image Search Tools
// @namespace    https://github.com/mcat-ee/userscripts/
// @version      0.1
// @description  Show 'search tools' for every Google Image Search query
// @author       You
// @match        https://www.google.com/search?*&tbm=isch*
// @icon         https://www.google.com/s2/favicons?domain=google.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var toolsButtonSearchResults = document.getElementsByClassName("PNyWAd ZXJQ7c") //Find the tools button (TODO: improve by searching for button text)
    if(toolsButtonSearchResults.length == 1) { // Check that only one result was returned (avoiding undefined behaviour where more than one option is returned)
        var buttonDiv = toolsButtonSearchResults[0];
        buttonDiv.click();
    }

})();
