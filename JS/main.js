// var client_name
// var total_result = 0;

// // First task (Welcome to the website) it will take the user name and add a paragraph about him
// function welcome() {
//     client_name = prompt("Hello, Welcome ..? what is your name?");
//     if (client_name != null)
//         alert("okay, welcome " + client_name + ".. now let's enojy :)");
//     if (client_name != null && client_name!="") {
//         document.getElementsByClassName('user-info')[0].style.display = "inline";
//         document.getElementsByClassName('info-for-image')[1].textContent = "Here you can find some informations about " +
//             client_name + " , on the left side you can see your pricture :) Also, you got  "+total_result+" /6";
//     }
// }

// // Second task will play Yes/No game and add the result to the html too 
// function Lab02() {
//     var Questions = ["Is Amman the capital of Joradn?", "Do you think my name is Baraa?", "1 + 2 is 4?", "The cat have 2 legs and 2 hands?", "Baraa is a female name only :)"];
//     var Answers = [true, true, false, true, false];
//     var res = [];

//     alert("YES/NO questions, 5 of them will be asked to you and the result will be shown at the end. ");
//     for (var i = 0; i < Questions.length; i++) {
//         res[i] = confirm(Questions[i]);
//         if (res[i] === Answers[i]) {
//             total_result++;
//             var next_ques = i + 1;
//             alert("good job, you have " + total_result + " points now.. let's go to question " + next_ques);
//         }
//         else
//             alert("WRONG! :/"); 
//     }
//     alert("Your final result is " + total_result + "/5 :)");
//     console.log(client_name);

// }

// // This is a Guess Game asks about my month of birth 
// function Lab03_a(){
//     my_month=3;
//     numberOfTries =0; 
//     alert("Guess Game, 4 attemps , choose a number from 1-12 to know in which month i was born :) Let us start ....");

//     for(var i=0;i<4;i++){
//         var answer = prompt("Choose a number between (1-12)");
//         numberOfTries++;
//         // input check :)
//         while(!Number(answer) || answer>12 || answer<1){
//             answer = prompt("please, NUMBER between 1-12");
//         }

//         // processing 
//         answer = my_month - answer;

//         if(answer==0){
//             alert("You did it :) from the "+numberOfTries+" try.");
//             return true;
//         }
//         else if(answer>0){
//             if(answer > 2)
//                 alert("Nah, too low");
//             else
//                 alert("so close");
//         }
//         else{
//             if(Math.abs(answer) > 2)
//                 alert("Nah, too high");
//             else
//                 alert("so close");
//         }
//     }
//     alert("bad");
// }

// //This is also a guess game, multiple answers one ...
// function Lab03_b(){
//     var lab_question = " I have 3 brothers ,can you guess the name for one of them?";
//     var answers_for_lab03 = ["bahaa","alaa","mustafa"];

//     alert("Guess the answer fo this question, i have three you have 6 attempts:) lets go");
//     var answer = prompt(lab_question);
//     var j = 1; 

//     for(j;j<6;j++){
//         for(var i=0;i<3;i++)
//             if(answers_for_lab03[i]===answer.toLocaleLowerCase())
//                 {
//                     alert("good job, you did it from the"+j +" try");
//                     return true;
//                 }
//         alert("Wrong! you still have"+ (6-j) + " attemps..");
//         answer = prompt(lab_question);
//     }   
//     alert("BAAAAAAAAAAAAAAAAAAAAD, the answers are :- "+answers_for_lab03);

// }

// welcome();
// Lab02();
// Lab03_a();
// Lab03_b();

// function (n) {
//     "use strict";
//     var t = function () { };
//     t.prototype.initTooltipPlugin = function () { n.fn.tooltip && n('[data-toggle="tooltip"]').tooltip() }, t.prototype.initPopoverPlugin = function () { n.fn.popover && n('[data-toggle="popover"]').popover() }, t.prototype.initToastPlugin = function () { n.fn.toast && n('[data-toggle="toast"]').toast() }, t.prototype.initSlimScrollPlugin = function () { n.fn.slimScroll && n(".slimscroll").slimScroll({ height: "auto", position: "right", size: "8px", touchScrollStep: 20, color: "#9ea5ab" }) }, t.prototype.initFormValidation = function () { n(".needs-validation").on("submit", function (t) { return n(this).addClass("was-validated"), !1 !== n(this)[0].checkValidity() || (t.preventDefault(), t.stopPropagation(), !1) }) }, t.prototype.initCustomModalPlugin = function () { n('[data-plugin="custommodal"]').on("click", function (t) { t.preventDefault(), new Custombox.modal({ content: { target: n(this).attr("href"), effect: n(this).attr("data-animation") }, overlay: { color: n(this).attr("data-overlayColor") } }).open() }) }, t.prototype.initCounterUp = function () { n(this).attr("data-delay") && n(this).attr("data-delay"), n(this).attr("data-time") && n(this).attr("data-time"); n('[data-plugin="counterup"]').each(function (t, i) { n(this).counterUp({ delay: 100, time: 1200 }) }) }, t.prototype.initPeityCharts = function () { n('[data-plugin="peity-pie"]').each(function (t, i) { var e = n(this).attr("data-colors") ? n(this).attr("data-colors").split(",") : [], a = n(this).attr("data-width") ? n(this).attr("data-width") : 20, o = n(this).attr("data-height") ? n(this).attr("data-height") : 20; n(this).peity("pie", { fill: e, width: a, height: o }) }), n('[data-plugin="peity-donut"]').each(function (t, i) { var e = n(this).attr("data-colors") ? n(this).attr("data-colors").split(",") : [], a = n(this).attr("data-width") ? n(this).attr("data-width") : 20, o = n(this).attr("data-height") ? n(this).attr("data-height") : 20; n(this).peity("donut", { fill: e, width: a, height: o }) }), n('[data-plugin="peity-donut-alt"]').each(function (t, i) { n(this).peity("donut") }), n('[data-plugin="peity-line"]').each(function (t, i) { n(this).peity("line", n(this).data()) }), n('[data-plugin="peity-bar"]').each(function (t, i) { var e = n(this).attr("data-colors") ? n(this).attr("data-colors").split(",") : [], a = n(this).attr("data-width") ? n(this).attr("data-width") : 20, o = n(this).attr("data-height") ? n(this).attr("data-height") : 20; n(this).peity("bar", { fill: e, width: a, height: o }) }) }, t.prototype.initKnob = function () { n('[data-plugin="knob"]').each(function (t, i) { n(this).knob() }) }, t.prototype.initTippyTooltips = function () { 0 < n('[data-plugin="tippy"]').length && tippy('[data-plugin="tippy"]') }, t.prototype.init = function () { this.initTooltipPlugin(), this.initPopoverPlugin(), this.initToastPlugin(), this.initSlimScrollPlugin(), this.initFormValidation(), this.initCustomModalPlugin(), this.initCounterUp(), this.initPeityCharts(), this.initKnob(), this.initTippyTooltips() }, n.Components = new t, n.Components.Constructor = t
// }(window.jQuery), function (o) { "use strict"; var t = function () { this.$body = o("body"), this.$portletIdentifier = ".card", this.$portletCloser = '.card a[data-toggle="remove"]', this.$portletRefresher = '.card a[data-toggle="reload"]' }; t.prototype.init = function () { var a = this; o(document).on("click", this.$portletCloser, function (t) { t.preventDefault(); var i = o(this).closest(a.$portletIdentifier), e = i.parent(); i.remove(), 0 == e.children().length && e.remove() }), o(document).on("click", this.$portletRefresher, function (t) { t.preventDefault(); var i = o(this).closest(a.$portletIdentifier); i.append('<div class="card-disabled"><div class="card-portlets-loader"><div class="spinner-border text-primary m-2" role="status"></div></div></div>'); var e = i.find(".card-disabled"); setTimeout(function () { e.fadeOut("fast", function () { e.remove() }) }, 500 + 5 * Math.random() * 300) }) }, o.Portlet = new t, o.Portlet.Constructor = t }(window.jQuery), function (e) { "use strict"; var t = function () { this.$body = e("body"), this.$window = e(window) }; t.prototype._resetSidebarScroll = function () { e(".slimscroll-menu").slimscroll({ height: "auto", position: "right", size: "8px", color: "#9ea5ab", wheelStep: 5, touchScrollStep: 20 }) }, t.prototype.initMenu = function () { var i = this; e(".button-menu-mobile").on("click", function (t) { t.preventDefault(), i.$body.toggleClass("sidebar-enable"), 768 <= i.$window.width() ? i.$body.toggleClass("enlarged") : i.$body.removeClass("enlarged"), i._resetSidebarScroll() }), i._resetSidebarScroll(), e(".right-bar-toggle").on("click", function (t) { e("body").toggleClass("right-bar-enabled") }), e(document).on("click", "body", function (t) { 0 < e(t.target).closest(".right-bar-toggle, .right-bar").length || 0 < e(t.target).closest(".left-side-menu, .side-nav").length || e(t.target).hasClass("button-menu-mobile") || 0 < e(t.target).closest(".button-menu-mobile").length || (e("body").removeClass("right-bar-enabled"), e("body").removeClass("sidebar-enable")) }), e(".navigation-menu a").each(function () { var t = window.location.href.split(/[?#]/)[0]; this.href == t && (e(this).addClass("active"), e(this).parent().addClass("active"), e(this).parent().parent().addClass("in"), e(this).parent().parent().prev().addClass("active"), e(this).parent().parent().parent().addClass("active"), e(this).parent().parent().parent().parent().addClass("in"), e(this).parent().parent().parent().parent().parent().addClass("active")) }), e(".navbar-toggle").on("click", function (t) { e(this).toggleClass("open"), e("#navigation").slideToggle(400) }), e(".navigation-menu>li").slice(-2).addClass("last-elements"), e('.navigation-menu li.has-submenu a[href="#"]').on("click", function (t) { e(window).width() < 992 && (t.preventDefault(), e(this).parent("li").toggleClass("open").find(".submenu:first").toggleClass("open")) }), e(window).on("load", function () { e("#status").fadeOut(), e("#preloader").delay(350).fadeOut("slow") }) }, t.prototype.init = function () { var i = this; e.Portlet.init(), this.initMenu(), e.Components.init(), i.$window.on("resize", function (t) { t.preventDefault(), i._resetSidebarScroll() }) }, e.App = new t, e.App.Constructor = t }(window.jQuery), function (t) { "use strict"; window.jQuery.App.init() }(), Waves.init();
// //# sourceMappingURL=app.min.js.map

// console.log(n);
'use strict';
function fun() {
  //this is my test baraa for pair programming.
  alert('i love you ');
}

fun();