
// init blacklist
// var blacklist = [];// global array
// blacklist.push("trump");
//
// // get additional settings from chrome storage
// chrome.storage.local.get({
//     blockPence: false,
//     blockFarage: false,
//     blockLePen: false,
//     blockWilders: false
//   }, function(items) {
// 	  if (items.blockPence){
// 		  blacklist.push("mike pence");
// 	  }
// 	  if (items.blockFarage){
// 		  blacklist.push("farage");
// 	  }
// 	  if (items.blockLePen){
// 		  blacklist.push("le pen");
// 	  }
// 	  if (items.blockWilders){
// 		  blacklist.push("wilders");
// 	  }
//
// 	  document.addEventListener('DOMContentLoaded', makanow(theKittens), false);
//
//   });

(function () {
    var blacklist = [
        'trump',
        'breitbart',
        'Steve_Bannon',
        'Mike Pence',
        'Mitch McConnel',
        'Paul Ryan',
        'Sean Spicer',
        'Rex Tillerson',
        'Steven Mnuchin',
        'James Mattis',
        'John Kelly',
        'Jeff Sessions',
        'Ben Carson',
        'Sonny Perdue',
        'Elaine Chao',
        'Tom Price',
        'Rick Perry',
        'Andrew Puzder',
        'Betsy DeVos',
        'Ryan Zinke',
        'Wilbur Ross',
        'David Shulkin',
        'Kellyanne Conway',
        'Reince Priebus',
        'republicans',
        'congress',
        'the senate',
        'freedom caucus'
    ];

    var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            var newNodes = mutation.addedNodes;
            if (newNodes !== null) {
                // define nodes to check; these are facebook-specific class names
                var nodes = document.querySelectorAll('.userContentWrapper, .userContent, ._5pcr, ._5pbx, ._1bar, ._5my2, ._4qjp, ._2kg4, ._5pco, ._52c6, ._5pbx, ._3x-2, .mtm');
                // loop through nodes
                for (var ii = 0, nn = nodes.length; ii < nn; ii++) {
                    // get node content in lower case
                    var text = nodes[ii] ? nodes[ii].textContent.toLowerCase() : '';
                    if (text !== undefined) {
                        // loop through the blacklist
                        for (var i = 0; i < blacklist.length; i++) {
                            // compare the text of the node to the blacklist entry
                            if (text.toLowerCase().indexOf(blacklist[i].toLowerCase()) > 0 && nodes[ii].style.display != 'none') {
                                nodes[ii].style.display = 'none';
                                break;
                            }
                        }
                    }
                }

            }
        });
    });

    observer.observe(document, {
        childList: true,
        subtree: true,
        attributes: false,
        characterData: false
    });

})();
