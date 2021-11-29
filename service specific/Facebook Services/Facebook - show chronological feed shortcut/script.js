// ==UserScript==
// @name         Add Chrono Feed Button
// @namespace    https://github.com/mcat-ee/
// @version      0.1
// @description  try to take over the world!
// @author       mcat-ee
// @match        https://www.facebook.com/*
// @icon         https://www.google.com/s2/favicons?domain=facebook.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setTimeout(() => {
        var navElements = document.querySelectorAll('[role="navigation"]')
        var navBar = navElements[0];
        var listEl = navBar.getElementsByTagName("ul")[0];
        var newElement = document.createElement("a");
        newElement.innerHTML = "Recent";
        newElement.style = "text-align: center; vertical-align: middle; height: 100%;";
        newElement.href = "https://www.facebook.com/?sk=h_chr";
        listEl.appendChild(newElement);
    }, 5000);
})();
