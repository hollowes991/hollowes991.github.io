/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_style_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__css_style_css__);



    
jQuery(document).ready(function($) {

    // Store the window width
    var windowWidth = $(window).width();

    // Resize Event
    $(window).resize(function(){

        // Check window width has actually changed and it's not just iOS triggering a resize event on scroll
        if ($(window).width() != windowWidth) {
            // Update the window width for next time
            windowWidth = $(window).width();

            // Do stuff here
            location.reload();

        }

        // Otherwise do nothing

    });

});
query();
function query(){
    const mq = window.matchMedia( "(max-width: 767px)" );
    
    if( mq.matches ){
        $('#contentWrapper').animate({
            scrollX: $("#contentWrapper").offset({left:0})
        });

        // Select all links with hashes
        $('a[href*="#"]')
            // Remove links that don't actually link to anything
            .not('[href="#"]')
            .not('[href="#0"]')
            .click(function(event) {
                // Close Navigation
                $("#menu.nav-bar").removeClass("active");
                // On-page links
                if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
                && 
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                let target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                    scrollTop: target.offset().top
                    }, 1000, function() {
                        // Callback after animation
                        // Must change focus!
                        let $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });    

    }else{
        $('#contentWrapper').animate({
            scrollX: $("#contentWrapper").offset({left:200})
        });


        $("#logo").on("click", function(e){
            $('#contentWrapper').animate({
                scrollX: $("#contentWrapper").offset({left:200})
            });  
            e.preventDefault();
        });
        $("#link_about, #about").on("click", function(e){
            $('#contentWrapper').animate({
                scrollX: $("#contentWrapper").offset({left:-605})
            });  
            e.preventDefault();
        });
        $("#link_skills, #skills").on("click", function(e){
            $('#contentWrapper').animate({
                scrollX: $("#contentWrapper").offset({left:-1410})
            });  
            e.preventDefault();
        });
        $("#link_experience, #experience").on("click", function(e){
            $('#contentWrapper').animate({
                scrollX: $("#contentWrapper").offset({left:-2215})
            });  
            e.preventDefault();
        });
        $("#link_portfolio, #portfolio").on("click", function(e){
            $('#contentWrapper').animate({
                scrollX: $("#contentWrapper").offset({left:-3020})
            });  
            e.preventDefault();
        });
        $("#link_contact, #contact").on("click", function(e){
            $('#contentWrapper').animate({
                scrollX: $("#contentWrapper").offset({left:-3825})
            });  
            e.preventDefault();
        });

    }

}

// loader animationa
function loaderSpinner() {
    $(window).on('load', function() {
        var loader = $('.loader');
        var wHeight = $(window).height();
        var wWidth = $(window).width();
        var i = 0;
        /*Center loader on half screen */
        loader.css({
            top: wHeight / 2 - 2.5,
            left: wWidth / 2 - 200
        })
      
    do{
        loader.animate({
        width: i
        },10)
        i+=3;
    } while(i <= 400)
    if(i === 402){
        loader.animate({
        left: 0,
        width: '100%'
        })
        loader.animate({
        top: '0',
        height: '100vh'
        })
    }
      
    /* This line hide loader and show content */
    setTimeout(function(){
        $('.container').css("opacity", "1");
        (loader).fadeOut("slow");
        /*Set time in milisec */
        },3000);
    });

}

loaderSpinner();
// block selection
$("#menu-control").on("click", function(){
    $("#menu.nav-bar").toggleClass("active");
})
$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay: true,
    autoplayHoverPause: true,
    smartSpeed: 750,
    items:1
})

// timeline 
const timeline = $('ul#timeline');
// create line
var line = document.createElement('div');
line.setAttribute('class', 'lead');
timeline.prepend(line);

$('#timeline li').prepend('<div class="dot"></div>').attr('class', 'zh-tw');

var maxHeight = $('.timeline-wrapper').height();
$('div.lead').css('height', maxHeight+15);



/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(2);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!./style.css", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!./style.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "*{ font-family: 'Graduate', cursive !important; outline: 0 !important; font-size: 14px;} ::-webkit-scrollbar, srollbar{display: none;}\r\n.zh-tw{font-family: \"\\5FAE\\8EDF\\6B63\\9ED1\\9AD4\" !important;}\r\nbody{ width: 100%; height: 100%; margin: 0; background: #000;}\r\n.loader{height: 10px;background-color: #fff;position: fixed; z-index: 999;}\r\n.logo{ margin: 30px 0; text-align: center;}\r\n.container{ overflow: hidden; opacity: 0;}\r\n#menu.nav-bar{ position: fixed; z-index: 99; background:#050401; width: 200px; left: 0px; height: 100%; overflow-y: auto;}\r\n#nav-pane ul{ list-style-type: none; padding: 0px !important; margin:0px !important;} #nav-pane ul li{ position: relative;} \r\n#nav-pane a{ margin: 0 30px; padding:10px 0; display: block; color: #fff; border-bottom:1px solid #d9d9d9; font-weight: 700; text-transform: uppercase; transition: all .3s;}\r\n#nav-pane a span{ font-size: 16px;}\r\n#nav-pane a:hover{ color: #D66853;}\r\n.external_links{margin: 50px 30px; text-align: center;}.external_links div{display: inline-block; margin-right: 15px;}.external_links a{color:#fff;}\r\n.contentWrapper{ position: absolute; left: 200px; right: 0px; height: 100%; overflow: hidden; transition: all 1.5s cubic-bezier(0.74, 0.25, 0.34, 0.82);}\r\n.content-wrapper{ position: relative; height: 100%; z-index: 97; overflow: hidden; width:807352px; background: #fff;}\r\n.slogan{ position: absolute; width: 500px; margin-top:65%; padding: 70px; z-index: 99; color: #fff;}\r\n.owl-carousel{ overflow: hidden;} .owl-dots{position: absolute; width:100%; top: 90vh; z-index: 999;}\r\n.content.photoCarousel{ overflow: hidden;}\r\n.content{ position: relative; width: 805px; height: 100%; float:left; overflow-y:auto;}\r\n.content:nth-child(3),.content:nth-child(5){ background: #f5f5f5;}\r\n.context{ width: 80%; padding: 48px;} .context .title{ text-transform: uppercase;} .title-line{ border-bottom: 6px solid #D66853; width: 70px;}\r\n.line{ border-bottom: 1px solid #d9d9d9; margin-bottom: 30px;}\r\n.mainContent, .self-info .title{ margin: 30px 0; font-family: \"\\5FAE\\8EDF\\6B63\\9ED1\\9AD4\" !important; font-size: 16px;}\r\n.skillbox{float: left; margin:0 15px;} .knowledge{ margin: 0 15px;}\r\n.clearfix{clear: both;}\r\n.portfolio a{ display: block; overflow: hidden; height: 500px; margin-bottom: 50px;}\r\n.portfolio a { transition: all .3s; z-index: 99;}\r\n.portfolio a:hover { opacity: .6;}\r\n#skill { \r\n    list-style: none;\r\n    font: 12px \"Helvetica Neue\", Arial, Helvetica, Geneva, sans-serif;\r\n    width: 296px;\r\n    margin: 50px auto 0;\r\n    position: relative;\r\n    line-height: 2em;\r\n    padding: 30px 0;\r\n}\r\n\r\n#skill li { \r\n    margin-bottom:50px; \r\n    background:#e9e5e2;\r\n    background-image: -webkit-gradient(linear, left top, left bottom, from(#e1ddd9), to(#e9e5e2));\r\n    background-image: -webkit-linear-gradient(top, #e1ddd9, #e9e5e2);\r\n    background-image: -moz-linear-gradient(top, #e1ddd9, #e9e5e2);\r\n    background-image: -ms-linear-gradient(top, #e1ddd9, #e9e5e2);\r\n    background-image: -o-linear-gradient(top, #e1ddd9, #e9e5e2);\r\n    background-image: linear-gradient(top, #e1ddd9, #e9e5e2);  \r\n    height:20px; \r\n    border-radius:10px; \r\n    -moz-box-shadow: 0 1px 0px #bebbb9 inset, 0 1px 0 #fcfcfc;\t \r\n    -webkit-box-shadow: 0 1px 0px #bebbb9 inset, 0 1px 0 #fcfcfc;\t \r\n    box-shadow: 0 1px 0px #bebbb9 inset, 0 1px 0 #fcfcfc;\t  \r\n}\r\n\r\n#skill li h5 { \r\n    position:relative; \r\n    top:-25px;\r\n}\r\n\r\n.bar { \r\n    height:18px; \r\n    margin:1px 2px;  \r\n    position:absolute;\r\n    border-radius:10px;\r\n    -moz-box-shadow: 0 1px 0px #fcfcfc inset, 0 1px 0 #bebbb9;\r\n    -webkit-box-shadow: 0 1px 0px #fcfcfc inset, 0 1px 0 #bebbb9;\t \r\n    box-shadow: 0 1px 0px #fcfcfc inset, 0 1px 0 #bebbb9;\t\t\r\n}\r\n\r\n.VueJs {\r\n    width:30%; \r\n    -moz-animation:graphic-design 2s ease-out;\r\n    -webkit-animation:graphic-design 2s ease-out;\r\n    background-color: #41b883;\r\n    background-image: -webkit-gradient(linear, left top, left bottom, from(#41b883), to(#35495e));\r\n    background-image: -webkit-linear-gradient(top, #41b883, #35495e);\r\n    background-image: -moz-linear-gradient(top, #41b883, #35495e);\r\n    background-image: -ms-linear-gradient(top, #41b883, #35495e);\r\n    background-image: -o-linear-gradient(top, #41b883, #35495e);\r\n    background-image: linear-gradient(top, #41b883, #35495e);\r\n}\r\n\r\n.html-css {\r\n    width:85%;\r\n    -moz-animation:html-css 2s ease-out;\r\n    -webkit-animation:html-css 2s ease-out;\r\n    background-color: #4b8dc4;\r\n    background-image: -webkit-gradient(linear, left top, left bottom, from(#4b8dc4), to(#3a73a8));\r\n    background-image: -webkit-linear-gradient(top, #4b8dc4, #3a73a8);\r\n    background-image: -moz-linear-gradient(top, #4b8dc4, #3a73a8);\r\n    background-image: -ms-linear-gradient(top, #4b8dc4, #3a73a8);\r\n    background-image: -o-linear-gradient(top, #4b8dc4, #3a73a8);\r\n    background-image: linear-gradient(top, #4b8dc4, #3a73a8);\r\n}\r\n\r\n.jquery {\r\n    width:65%;\r\n    -moz-animation:jquery 2s ease-out;\r\n    -webkit-animation:jquery 2s ease-out;\r\n    background-color: #f7df1e;\r\n    background-image: -webkit-gradient(linear, left top, left bottom, from(#f7df1e), to(#ebd111));\r\n    background-image: -webkit-linear-gradient(top, #f7df1e, #ebd111);\r\n    background-image: -moz-linear-gradient(top, #f7df1e, #ebd111);\r\n    background-image: -ms-linear-gradient(top, #f7df1e, #ebd111);\r\n    background-image: -o-linear-gradient(top, #f7df1e, #ebd111);\r\n    background-image: linear-gradient(top, #f7df1e, #ebd111);\r\n}\r\n\r\n.git {\r\n    width:30%;\r\n    -moz-animation:git 2s ease-out;\r\n    -webkit-animation:git 2s ease-out;\r\n    background-color: #f05033;\r\n    background-image: -webkit-gradient(linear, left top, left bottom, from(#f05033), to(#f05033));\r\n    background-image: -webkit-linear-gradient(top, #f05033, #f05033);\r\n    background-image: -moz-linear-gradient(top, #f05033, #f05033);\r\n    background-image: -ms-linear-gradient(top, #f05033, #f05033);\r\n    background-image: -o-linear-gradient(top, #f05033, #f05033);\r\n    background-image: linear-gradient(top, #f05033, #f05033)\t\r\n}\r\n\r\n.PHP{\r\n    width:30%;\r\n    -moz-animation:php 2s ease-out;\r\n    -webkit-animation:php 2s ease-out;\r\n    background-color: #777bb3;\r\n    background-image: -webkit-gradient(linear, left top, left bottom, from(#777bb3), to(#6569a1));\r\n    background-image: -webkit-linear-gradient(top, #777bb3, #6569a1);\r\n    background-image: -moz-linear-gradient(top, #777bb3, #6569a1);\r\n    background-image: -ms-linear-gradient(top, #777bb3, #6569a1);\r\n    background-image: -o-linear-gradient(top, #777bb3, #6569a1);\r\n    background-image: linear-gradient(top, #777bb3, #6569a1)\t\r\n}\r\n.NodeJs{\r\n    width:10%;\r\n    -moz-animation:nodejs 2s ease-out;\r\n    -webkit-animation:nodejs 2s ease-out;\r\n    background-color: #72a962;\r\n    background-image: -webkit-gradient(linear, left top, left bottom, from(#72a962), to(#3e863d));\r\n    background-image: -webkit-linear-gradient(top, #72a962, #3e863d);\r\n    background-image: -moz-linear-gradient(top, #72a962, #3e863d);\r\n    background-image: -ms-linear-gradient(top, #72a962, #3e863d);\r\n    background-image: -o-linear-gradient(top, #72a962, #3e863d);\r\n    background-image: linear-gradient(top, #72a962, #3e863d)\t\r\n}\r\n.MySQL{\r\n    width:50%;\r\n    -moz-animation:mysql 2s ease-out;\r\n    -webkit-animation:mysql 2s ease-out;\r\n    background-color: #66b3cc;\r\n    background-image: -webkit-gradient(linear, left top, left bottom, from(#66b3cc), to(#00618a));\r\n    background-image: -webkit-linear-gradient(top, #66b3cc, #00618a);\r\n    background-image: -moz-linear-gradient(top, #66b3cc, #00618a);\r\n    background-image: -ms-linear-gradient(top, #66b3cc, #00618a);\r\n    background-image: -o-linear-gradient(top, #66b3cc, #00618a);\r\n    background-image: linear-gradient(top, #66b3cc, #00618a)\t\r\n}\r\n@-moz-keyframes vuejs {0%  { width:0px;} 100%{ width:30%;}  }\r\n@-moz-keyframes html-css        { 0%  { width:0px;} 100%{ width:85%;}  }\r\n@-moz-keyframes jquery      { 0%  { width:0px;} 100%{ width:65%;}  }\r\n@-moz-keyframes git   { 0%  { width:0px;} 100%{ width:40%;}  }\r\n@-moz-keyframes php   { 0%  { width:0px;} 100%{ width:40%;}  }\r\n@-moz-keyframes nodejs   { 0%  { width:0px;} 100%{ width:10%;}  }\r\n@-moz-keyframes mysql   { 0%  { width:0px;} 100%{ width:50%;}  }\r\n\r\n\r\n@-webkit-keyframes vuejs       { 0%  { width:0px;} 100%{ width:30%;}  }\r\n@-webkit-keyframes html-css        { 0%  { width:0px;} 100%{ width:85%;}  }\r\n@-webkit-keyframes jquery      { 0%  { width:0px;} 100%{ width:65%;}  }\r\n@-webkit-keyframes git   { 0%  { width:0px;} 100%{ width:30%;}  }\r\n@-webkit-keyframes php   { 0%  { width:0px;} 100%{ width:30%;}  }\r\n@-webkit-keyframes nodejs   { 0%  { width:0px;} 100%{ width:10%;}  }\r\n@-webkit-keyframes mysql   { 0%  { width:0px;} 100%{ width:50%;}  }\r\n\r\n.timeline-wrapper,.skillbox{margin-top: 50px;}\r\n#timeline{list-style: none; width:100%; font-size: 1.5em}\r\n.lead{ width:0; position:absolute; border: 1px solid #aaaaaa;}\r\n#timeline > li{ margin-left:15px; height: 80px;}\r\nli > .dot{ width:10px; height:10px; border-radius:5px; background: #aaaaaa; border: 2px solid #fff; position: absolute; margin-left: -19px; margin-top: 10px;}\r\n\r\n@media screen and (min-width: 968px){ .context{ width: 100%;}}\r\n@media (max-width: 767px){\r\n    .container{ width: 100%; height: 100%;}\r\n    #menu.nav-bar{ display: block; width: 100%; height: 50px; overflow: hidden; padding: 50px 0 0 0; transition: all .5s; }\r\n    #menu.nav-bar.active{ height: 100%; background: rgba(0, 0, 0, 0.78);}\r\n    #navigation{ margin: 70px 0;}\r\n    .menu-control{ position: absolute; top:0; right:0; color: #fff; padding: 6px 15px;}\r\n    .menu-bar{ content: \"\"; display: block; width: 30px; height: 10px; position: relative; border-bottom: 3px solid #fff; transition: all .5s; top: 0px; right: 0px;}\r\n    #menu.nav-bar.active .menu-bar:nth-child(1){ transition: all .5s; transform: rotate(60deg); top:10px; right:-7px}\r\n    #menu.nav-bar.active .menu-bar:nth-child(2){ transition: all .5s; transform: rotate(60deg); top:0px; right:-7px}\r\n    #menu.nav-bar.active .menu-bar:nth-child(3){ transition: all .5s; transform: rotate(-60deg); top:-10px; }\r\n    .logo{ display: none;}\r\n    .contentWrapper{ position: relative; left: 0;}\r\n    .content-wrapper{ width: 100%; height: auto; overflow: hidden;}\r\n    .content{ float: none; width: 100%; border: 0;}\r\n    .context{ width: 100%; padding: 24px;}\r\n    .owl-stage-outer{ height: 480px;} .owl-dots{position: static; }\r\n    .portfolio a{ height: 150px;}\r\n}", ""]);

// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(5);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);