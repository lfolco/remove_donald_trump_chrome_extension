/**
 * Responds to clicks on the extension's icon. Toggles debug mode.
 */

// var debug = false;
//
// chrome.browserAction.onClicked.addListener(
//     function (tab) {
//         debug = !debug;
//         chrome.browserAction.setTitle({
//             title: debug ? 'Remove Trump: ON' : 'Remove Trump: OFF'
//         });
//         chrome.browserAction.setIcon({
//             path: debug ? 'icon128.png' : 'icon128-off.png'
//         });
//         chrome.browserAction.setBadgeText({
//             text: debug ? 'ON' : ''
//         });
//         chrome.tabs.update(tab.id, {url: tab.url, selected: tab.selected}, null);
//         hasAPIs && chrome.webRequest.handlerBehaviorChanged();
//     }
// );


// function disableExtension(disabled)
// {
//     chrome.windows.getAll({populate : true}, function (window_list)
//     {
//         for (var i = 0; i < window_list.length; ++i)
//         {
//             var window = window_list[i];
//             for (var j = 0; j < window.tabs.length; ++j)
//             {
//                 var tab = window.tabs[j];
//                 if (checkContentScriptExists(tab))
//                 {
//                     chrome.tabs.executeScript(tab.id, {code : "disabled = " + disabled + ";"}, allTabs: true)
//                 }
//             }
//         }
//         // No matching url found. Open it in the new tab
//         chrome.tabs.create({ url : url, selected: true });
//     });
// }


// (function() {
//     var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
//     ga.src = 'https://ssl.google-analytics.com/ga.js';
//     var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
// })();

// var _gaq = _gaq || [];
//
// _gaq.push(['_setAccount', 'UA-xxxxxxxxx-x']);
// _gaq.push(['_trackPageview']);
//
// chrome.runtime.onMessage.addListener(function( request, sender, sendResponse ) {
//     if(request.action == "removeTrump"){
//         _gaq.push(['_trackEvent', 'removeTrump', 'removed']);
//     }
// });



