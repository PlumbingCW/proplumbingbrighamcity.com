(function(){
var root=document.documentElement;
function lock(on){root.style.overflow=on?"hidden":"";}
var burger=document.querySelector(".burger"),drawer=document.getElementById("mob-drawer"),overlay=document.querySelector(".nv-overlay"),closeBtn=document.querySelector(".nv-close");
function openD(){root.classList.add("nv-open");lock(true);if(burger)burger.setAttribute("aria-expanded","true");if(drawer)drawer.setAttribute("aria-hidden","false");}
function closeD(){root.classList.remove("nv-open");lock(false);if(burger)burger.setAttribute("aria-expanded","false");if(drawer)drawer.setAttribute("aria-hidden","true");}
if(burger){burger.addEventListener("click",openD);}
if(closeBtn){closeBtn.addEventListener("click",closeD);}
if(overlay){overlay.addEventListener("click",closeD);}
document.addEventListener("keydown",function(e){if(e.key==="Escape")closeD();});
window.addEventListener("resize",function(){if(window.innerWidth>768)closeD();});
document.querySelectorAll(".nv-dtog").forEach(function(b){b.addEventListener("click",function(){var s=b.nextElementSibling;var o=s.classList.toggle("open");b.setAttribute("aria-expanded",o?"true":"false");});});
document.querySelectorAll(".faq-q").forEach(function(q){
 var a=q.nextElementSibling;
 q.addEventListener("click",function(){
  var open=q.getAttribute("aria-expanded")==="true";
  q.setAttribute("aria-expanded",open?"false":"true");
  a.style.maxHeight=open?"0px":a.scrollHeight+"px";
 });
});
document.querySelectorAll(".faq-q[aria-expanded='true']").forEach(function(q){q.nextElementSibling.style.maxHeight=q.nextElementSibling.scrollHeight+"px";});
})();
