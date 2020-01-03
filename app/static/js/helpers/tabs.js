
    "use strict";
var tab; 
var tabContent;


$(document).ready(function() {
    tabContent=document.getElementsByClassName('tabs-content');
    tab=document.getElementsByClassName('tab');
   
    hideTabsContent(1);
    });
  


$(document).on('click',function (event) {
    var target=event.target;
    if (target.className=='tab') {
       for (var i=0; i<tab.length; i++) {
           if (target == tab[i]) {
               
               
               showTabsContent(i);
               break;
           }
       }
    }
})

function hideTabsContent(a) {
    for (var i=a; i<tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add("hide");
        tab[i].classList.remove('active')
       
       
    }
}

function showTabsContent(b){
    if (tabContent[b].classList.contains('hide')) {
        hideTabsContent(0);
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
        tab[b].classList.add('active')
    }
}
