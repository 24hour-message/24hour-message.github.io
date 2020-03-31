/*
 Copyright 2016 SLI Systems v3.13.7
 Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
 @license Released under the MIT license http://jquery.org/license
 @param {Element} elem
 @return {string} the element text
 Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
 @license Released under the MIT license http://jquery.org/license
 @constructor
 @param {string} url URL to load script from
 Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
 @license Released under the MIT license http://jquery.org/license
*/
(function(h,k){function r(a){return function(b){var c=b.relatedTarget;c&&(this===c||this.contains(c))||a.call(this,b)}}function z(a){a.target||(a.target=a.srcElement||k);a.preventDefault||(a.preventDefault=function(){a.returnValue=!1});a.stopPropagation||(a.stopPropagation=function(){a.cancelBubble=!1});return a}function s(a){var b="",c=a.nodeType;if(1===c||9===c||11===c){if("string"===typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)b+=s(a)}else if(3===c||4===c)return a.nodeValue;
return b}function t(a){var b=!1,c=h.requestAnimationFrame||h.mozRequestAnimationFrame||h.webkitRequestAnimationFrame,d=function(){a();b=!1};return c?function(){b||(b=!0,c(d))}:function(){b||(b=!0,setTimeout(d,66))}}function A(a,b){for(var c=0,d=b.length;c<d;++c){var f=b[c].replace(B,"\\$1");""!==f&&(a=a.replace(new RegExp("(>|\\s)("+f+")(?=[^>]*<(?!/h2))","gi"),'$1<span class="highlight">$2</span>'))}return a}function u(a){return(a||"").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"").replace(/\s{2,}/g,
" ")}function C(a){for(var b=0,c,d=0,f=a.length;d<f;d++)c=a.charCodeAt(d),b=(b<<5)-b+c,b|=0;return b+""}function v(a,b){var c=this,d=k.head||k.getElementsByTagName("head")[0]||k.documentElement,f=this.script=k.createElement("script");f.async=!0;f.src=a;f.setAttribute("hash",b.lastRequest);f.onload=f.onreadystatechange=function(a,b){if(b||!f.readyState||/loaded|complete/.test(f.readyState))f.onload=f.onreadystatechange=null,f.parentNode&&f.parentNode.removeChild(f),c.script=null};d.appendChild(f)}
function w(a){if(a)this.init(a);else throw"need rich autocomplete settings";this.urls=[];var b=this.inputs=[],c=this.createElement();a=c.style;for(var d=k.querySelectorAll("[data-provide=rac]"),f=[],q=0,g=d.length;q<g;++q){var n=new x(d[q],this);b.push(n);n.isFixed&&f.push(n.el)}var p=this;e("#"+this.id).on("click",".sli_ac_suggestion, .sli_ac_product",function(a){setTimeout(p.selectCurrent.bind(p,a),50);return this.blockSubmit=!1}).on("click",".close-rac",function(){p.input._onClear()});k.addEventListener("focusout",
function(a){p.keepFocus=!0});l(c,"mouseleave",this.resetActive.bind(this));switch(this.width){case "auto":break;case "parent":this.resize=function(){this.position()};break;default:b=parseInt(this.width,10),"number"!==typeof b&&(b=this.defaults.width),a.width=b+"px"}var m=function(){this.resize&&this.resize();this.checkScreenSize()},m=m.bind(this);l(h,"resize",t(m));l(h,"orientationchange",m);f.length&&(this.fixed=f,l(h,"scroll",t(function(){var a=this.input;a&&this.isVisible&&this.fixed&&!(0>this.fixed.indexOf(a.el))&&
(0===a.el.offsetWidth?this.hide(a.el):m())}.bind(this))));this.checkDevice();this.checkScreenSize();"s"!==this.screenSize()&&"true"===this.behaviourOptions.showGreyText&&this._createSuggestionInput()}function x(a,b,c){this.el=a;this.autocomplete=b;c&&c.delay&&(this.delay=c.delay);a.setAttribute("autocomplete","off");this.isFixed="fixed"===a.getAttribute("data-sli-position");a.hasAttribute("data-sli-width")&&(this.width=a.getAttribute("data-sli-width"));var d=this._onBlur.bind(this),f=this.delay+300;
l(a,"blur",function(){setTimeout(d,f)});l(a,"focus",this._onFocus.bind(this));l(a,"keydown",this._onKeyDown.bind(this));h.opera&&opera.version&&(b=opera.version())&&11>b&&(a.onkeypress=this._onKeyPress.bind(this));l(a,"keyup",this._onKeyUp.bind(this));l(a,"compositionupdate",this._onCompositionUpdate.bind(this));l(a,"compositionend",this._onCompositionEnd.bind(this));l(a,"search",this._onClear.bind(this))}var e=h.jQuery,g=h.SLI=h.SLI||{},B=/([.*+?^=!:${}()|[\]\/\\])/g,y={productCount:"cnt",currencySymbol:"curr",
thumbSize:"thumb"};Function.prototype.bind||(Function.prototype.bind=function(a){function b(){}if("function"!==typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var c=[].slice,d=c.call(arguments,1),f=this,e=function(){return f.apply(this instanceof b?this:a||h,d.concat(c.call(arguments)))};b.prototype=this.prototype;e.prototype=new b;return e});var l=function(){if(Element.prototype.addEventListener){var a=k.documentElement;return"onmouseenter"in
a&&"onmouseleave"in a?function(a,c,d){a.addEventListener(c,d)}:function(a,c,d){"mouseenter"===c?(c="mouseover",d=r(d)):"mouseleave"===c&&(c="mouseout",d=r(d));a.addEventListener(c,d)}}return function(a,c,d){a.attachEvent("on"+c,function(c){d.call(a,z(c||h.event))})}}();v.prototype.abort=function(){var a=this.script;if(a)a.onload(void 0,!0)};w.prototype={id:"sli_autocomplete",tagName:"ul",activeClass:"sli_ac_active",dropdownClass:"sli_ac_dropdown",zIndex:3E4,width:"parent",base:"",params:"/search?ts=rac-data&w=",
defaults:{width:420},offsetLeft:0,offsetTop:0,align:"left",maxSearchLength:100,isVisible:!1,selector:"li li",focus:!1,currentSelected:-1,value:void 0,request:null,lastRequest:"",lastSuggestion:"",hoverTimeout:null,lastIndex:-1,input:null,size:null,resize:null,popular:null,localisation:{productLabel:"",noKeyword:"%label%",keywordNoScope:'%label% for "%keyword%"',keywordWithScope:'%label% for "%keyword%" in %scope%',paramsToSend:"language racLanguage noResultsText closeButtonText scopeSeparatorText logoUrl viewMore searchLabel productLabel currencySymbol".split(" ")},
breakpoints:{small:{maxWidth:767,value:"s"},other:{maxWidth:void 0,value:"o"}},valueStop:"",stopQuery:!1,init:function(a){var b,c;if(a.selector)this.selector=a.selector;else throw"selector not specified";(b=h.sli)&&b.global&&b.global.base&&(this.base=b.global.base);a.params&&(this.params=a.params);a.base&&(this.base=a.base.replace(/\/+$/,"")+this.params);this.behaviourOptions=e.extend({showProducts:!0},a.behaviourOptions);var d="tagName activeClass dropdownClass offsetLeft offsetTop width align maxSearchLength zIndex".split(" ");
b=0;for(c=d.length;b<c;++b){var f=d[b];f in a&&(this[f]=a[f])}"undefined"!==typeof a.localisation&&(this.localisation=e.extend(this.localisation,a.localisation));d=["onSelect","onShow","preRequest","postRequest","itemSelected"];b=0;for(c=d.length;b<c;++b)f=d[b],f in a&&"function"===typeof a[f]&&(this[f]=a[f]);this.trackCurPage()},createElement:function(){var a=this.el=k.createElement(this.tagName);a.id=this.id;a.className="rich";"true"===this.behaviourOptions.dynamic&&(a.className+=" dynamic");"right"===
this.behaviourOptions.suggestionAlign&&(a.className+=" right",this.align="right");this.behaviourOptions.suggestionCount||(this.behaviourOptions.suggestionCount=5);"undefined"===typeof this.behaviourOptions.productCount&&(this.behaviourOptions.productCount=4);"s"===this.screenSize()&&(this.behaviourOptions.suggestionCount=this.behaviourOptions.mobileSuggestionCount||2,this.behaviourOptions.searchInCount=this.behaviourOptions.mobileSearchInCount||2,this.behaviourOptions.productCount="undefined"!==typeof this.behaviourOptions.mobileProductCount&&
""!==this.behaviourOptions.mobileProductCount?this.behaviourOptions.mobileProductCount:4);"undefined"!==typeof this.behaviourOptions.productCount&&0===this.behaviourOptions.productCount&&(this.behaviourOptions.showProducts=!1);"undefined"===typeof this.behaviourOptions.inputContainer&&(this.behaviourOptions.inputContainer="form");var b=a.style;b.display="none";b.zIndex=this.zIndex;k.body.appendChild(a);return a},setInput:function(a){if(this.input!==a||this.fixed&&0<=this.fixed.indexOf(a.el))this.input=
a,this.resize&&this.resize()},position:function(){var a=this.input;if(a){this.stickToTop(e(a.el).closest(this.behaviourOptions.inputContainer));var a=a.el,b=e(a).closest(this.behaviourOptions.inputContainer),c=this.fixed&&0<=this.fixed.indexOf(a),d=k.documentElement,f=k.body,g=a.getBoundingClientRect(),l=g.top+a.offsetHeight+this.offsetTop,g=g.left+this.offsetLeft,n=this.el,p=e(n),m=n.style;c||(l+="undefined"!=typeof h.pageYOffset?h.pageYOffset:d.scrollTop?d.scrollTop:f.scrollTop?f.scrollTop:0,g+=
"undefined"!=typeof h.pageXOffset?h.pageXOffset:d.scrollLeft?d.scrollLeft:f.scrollLeft?f.scrollLeft:0);p.hasClass("is-full-width")||(d=parseInt(b.css("width")),this.isTwoColumnsLayout()&&("right"===this.align?(d=g+a.offsetWidth-50,d<a.offsetWidth?d=a.offsetWidth:g+=a.offsetWidth-n.offsetWidth):(d=f.offsetWidth-g-50,d<a.offsetWidth&&(d=a.offsetWidth))),m.width=d+"px");this.isStickToTop(b)?m.top=b.css("height"):m.top=l+"px";m.left=g+"px";m.position=c?"fixed":"absolute";this.hasTouch||(a=this.input.el,
this._setPositionUnder(e(a).siblings("input.suggested-word"),a));this.setCloseArea()}},_select:function(a){var b=this.items,c=this.currentSelected,d=b[a],f=e(d);this.currentSelected=a;c!==a&&0<=c&&c<b.length&&e(b[c]).removeClass(this.activeClass);f.addClass(this.activeClass);this._updateActiveSearchSuggestion(f);b=f.find("[data-suggested-term]");0<b.length&&(a=b.attr("data-suggested-term"),this.canShowDynamic()?(b=b.attr("data-suggested-facet"),c="skipTemplate=yes",b&&(c+="&af="+b),this.fireRequest(a,
c)):this._updateSuggestion(a));this.itemSelected&&this.itemSelected(d)},canShowDynamic:function(){return!this.hasTouch&&"true"===this.behaviourOptions.dynamic&&"s"!==this.screenSize()},isTwoColumnsLayout:function(){return this.canShowDynamic()||this.isTablet()},_updateActiveSearchSuggestion:function(a){this.canShowDynamic()?a.hasClass("sli_ac_suggestion")&&(e(".sli_ac_suggestion").removeClass("is-active"),a.addClass("is-active")):e(".sli_ac_suggestion").removeClass("is-active")},moveSelect:function(a){var b=
this.items.length-1;a=this.currentSelected+a;0>a?a=0:a>b&&(a=b);this._select(a)},next:function(){this.moveSelect(1)},prev:function(){this.moveSelect(-1)},pageDown:function(){this.moveSelect(10)},pageUp:function(){this.moveSelect(-10)},show:function(){var a=this.el,b;!this.isVisible&&this.onShow&&(b=this.onShow(a));!1!==b&&(a.style.display="block",this.isVisible=!0,this.input&&e(this.input.el).addClass(this.dropdownClass));a=e(".sli_ac_suggestions");if(this.isTwoColumnsLayout()){b=this.behaviourOptions.minHeight;
var c=e(".sli_ac_suggestions").css("height");if(!b||parseInt(b)<parseInt(c))b=c;e(".productList").css({"min-height":b});a.removeClass("is-hidden")}else e(".sli_ac_suggestion").length||a.removeClass("is-hidden").addClass("is-hidden");this.position()},setCloseArea:function(){var a=e(this.el),b=a.siblings(".sli-close-area"),c=this;b.length?b.removeClass("is-hidden"):(b=e('<div class="js-sli-close-area sli-close-area"></div>'),b.insertAfter(a),b.off("click").on("click",function(){c.input._onClear()}))},
hide:function(a){this.el.style.display="none";this.isVisible=!1;a&&(a=e(a.el),a.removeClass(this.dropdownClass),this._setSuggestionInput("",a),this.resetStickToTop(a.closest(this.behaviourOptions.inputContainer)))},selectCurrent:function(a){var b=this.currentSelected,c=this.input.el,d=c.value,f={};-1===b&&a&&(b=e(".sli_ac_suggestion").index(e(a.target)));if(-1===b){this.hide(this.input);if(!d||0===d.length||!d.trim())return!1;f.url=this.base.replace("ts=rac-data&","")+encodeURIComponent(d.trim());
"function"===typeof SliSearch?(SliSearch(this.input.el),this.hide(this.input)):e(this.input.el).closest("form").submit();return!0}a=this.urls[b]+"&asug="+encodeURIComponent(d.trim());f={url:a,query:d};0<=a.indexOf("rt=racsug")?f.type="suggestion":0<=a.indexOf("rt=racclick")?f.type="product":0<=a.indexOf("rt=racscope")&&(f.type="scope");this.onSelect&&(f=this.onSelect(f));if(!f)return!1;b=this.items[b];c&&b&&(b=b.getElementsByClassName?b.getElementsByClassName("sli_ac_sugg")[0]:b.querySelector(".sli_ac_sugg"))&&
(c.value=u(s(b)));this.hide(this.input);c=f.url+(f.url.match(/[#?]/)?"&":"?")+"apelog=yes";"product"!==f.type&&"undefined"!==typeof g&&"function"===typeof g.ajaxSearchSubmit?g.ajaxSearchSubmit(c):k.location=c;return!0},_mouseOver:function(a){var b=this.currentSelected;0>a||a===b||!this.isVisible||this._select(a)},_mouseOut:function(){this.resetActive()},stopRequest:function(){null!==this.request&&this.request.abort()},_createSuggestionInput:function(){var a=this._getInput();if(a&&a.el){var a=e(a.el),
b=a.siblings("input.suggested-word"),c=0===b.length;c&&(b=e('<input type="search" class="suggested-word" disabled />'));b.addClass(a.get(0).className);b.css({background:a.css("background"),"font-size":a.css("font-size"),padding:a.css("padding")});a.css("background","transparent");this._setPositionUnder(b,a);c&&b.insertAfter(a)}},_getInput:function(){if(this.input)return this.input;if(this.inputs&&this.inputs.length)return this.inputs[0]},_setPositionUnder:function(a,b){if(a.length&&b){b.length&&(b=
b[0]);var c=e(b);1>parseInt(c.css("z-index"))&&c.addClass("z-index-1");var d=b.getBoundingClientRect();a.css({height:d.height+"px",position:"absolute",width:d.width+"px","z-index":parseInt(c.css("z-index"))-1});"relative"===c.parent().css("position")?a.css({left:0,top:0}):(c=c.offset(),a.css({left:c.left,top:c.top}));return a}},_setSuggestionInput:function(a,b){if(!this.hasTouch){var c=this.placeholder=this.placeholder||b.attr("placeholder");a="s"===this.screenSize()?"":a;c=""===a?c:"";b.siblings("input.suggested-word").val(a);
b.attr("placeholder",c)}},_completeWord:function(a,b){if(0!==b.toLowerCase().indexOf(a.toLowerCase()))return"";var c=b.substring(a.length);if(""!==c){var d=a.match(/[A-Z]/g);d&&.5<d.length/a.length&&(c=c.toUpperCase())}return a+c},addRACData:function(a){var b=this;if(this.lastRequest===a.requested){if(""!==a.template){this.el.innerHTML=a.template;var c=jQuery(".sli_ac_suggestions ul").html();jQuery(".sli_ac_suggestions ul").html(A(c,this.input.el.value.trim().split(/\s+/)))}var d=e(this.el);Object.keys(a.content).forEach(function(b){d.find("."+
b).html(a.content[b])});"undefined"!==typeof a.suggestion&&""!==a.suggestion&&(this.lastSuggestion=a.suggestion.toLowerCase(),c=this._productSuggestionTitle(this.localisation.productLabel,this.lastSuggestion),e(".sli_ac_products .sli_ac_section").html(c));this.setHover();this.items=this.el.querySelectorAll(this.selector);this.urls=jQuery(this.selector).map(function(){return jQuery(this).find('a[data-role="main-link"]').attr("href")||jQuery(this).find("a").attr("href")});this.canShowDynamic()||(this.currentSelected=
-1);e(".sli_suggestion_arrow").on("click",function(a){a.stopPropagation();a=e(this).closest("li").find("[data-suggested-term]");a.length&&(e(b.input.el).focus().val(a.attr("data-suggested-term")),b.input._onChange(),b.keepFocus=!0)});this.displayRAC()}},setHover:function(){var a=this;if(this.canShowDynamic())e(".sli_ac_suggestions li").on("mouseover",function(b){b=b.target||b.srcElement;a.lastIndex=e(".sli_ac_suggestions li").index(e(b).closest("li"));a.hoverTimeout||(a.hoverTimeout=setTimeout(function(){h.clearTimeout(a.hoverTimeout);
a.hoverTimeout=null;a.currentSelected!==a.lastIndex&&a._mouseOver(a.lastIndex)},500))}),e(".sli_ac_product").on("mouseover",function(){var b=e(".sli_ac_suggestions li").length+e(".sli_ac_product").index(this);a._select(b);h.clearTimeout(a.hoverTimeout);a.hoverTimeout=null});else{var b=e(this.selector);b.off("mouseover").on("mouseover",function(){a._mouseOver(b.index(this))}).off("mouseout").on("mouseout",function(){a._mouseOut.bind(a)})}},hasRAC:function(){return"true"===this.behaviourOptions.showEmpty||
e(this.el).find(".productList").length&&this.input&&e(this.input.el).val().length},displayRAC:function(){if(g.rac.currentAjaxLocation&&g.rac.currentLocationWindow)if("undefined"!==typeof g.controller&&g.controller.getCurrentPage){if(g.rac.currentAjaxLocation!==g.controller.getCurrentPage()){this.stopRequest();this.lastRequest="";this.trackCurPage(500);return}}else{if(k.location.href!==g.rac.currentLocationWindow){this.stopRequest();this.lastRequest="";this.trackCurPage(500);return}}else this.trackCurPage();
this.hasRAC()&&(this._updateSuggestion(this.lastSuggestion),this.show(),e(".loader").removeClass("loading"),this.valueStop="",this.stopQuery=!1,this.isStickToTop(e(this.input.el).closest(this.behaviourOptions.inputContainer))&&h.scrollTo(0,1))},_updateSuggestion:function(a){var b=e(this.input.el),c=b.val(),d="";""!==c&&"undefined"!==typeof a&&""!==a&&(d=this._completeWord(c,a));this._setSuggestionInput(d,b)},doRequest:function(a){var b=this.valueStop||"";return a.length>this.maxSearchLength?!1:a===
this.value&&this.hasRAC()?(this.displayRAC(),!1):this.stopQuery&&a.length>b.length&&a.substr(0,b.length)==b?!1:!0},outOfFocus:function(a){this.keepFocus?this.keepFocus=!1:(this.focus=!1,this.hide(a),this.resetActive(),this.resetStickToTop(e(a.el).closest(this.behaviourOptions.inputContainer)))},_productSuggestionTitle:function(a,b){var c="",d=this.getScope(),c=d?this.localisation.keywordWithScope:"*"!==b?this.localisation.keywordNoScope:this.localisation.noKeyword;return c.replace(/\%label\%/,a).replace(/\%keyword\%/,
b).replace(/\%scope\%/,d)},getScope:function(){if(0<=this.currentSelected)return e(this.items[this.currentSelected]).find("[data-suggested-term]").find(".scope").text()},fireRequest:function(a,b){this.stopRequest();var c=a?a:this.value,d=this.base+encodeURIComponent(c)+"&rt=rac&dv="+this.size,f=this;e.each(this.behaviourOptions,function(a,b){"productLabel"===a&&(b=f._productSuggestionTitle(b,c),e(".sli_ac_products .sli_ac_section").html(b));a=y[a]||a;d+="&"+encodeURIComponent(a)+"="+encodeURIComponent(b)});
e.each(this.localisation.paramsToSend,function(a,b){"string"===typeof f.localisation[b]&&(d+="&"+encodeURIComponent(y[b]||b)+"="+encodeURIComponent(f.localisation[b]))});b&&(d+="&"+b);var d=this.preRequest?this.preRequest(d):d,g=C(d).toString(),d=d+("&requested="+g);g!==this.lastRequest?(this.lastRequest=g,e(".loader").addClass("loading"),this.request=new v(d,this)):this.displayRAC()},resetActive:function(){var a=this.currentSelected,b=this.items;0<=a&&a<b.length&&e(b[a]).removeClass(this.activeClass);
this.currentSelected=-1},valueChanged:function(a,b){this.setInput(a);this.doRequest(b)&&(this.value=b,0===b.length?(this.stopRequest(),this.hide(a),this.hasRAC()||this.resetStickToTop(e(a.el).closest(this.behaviourOptions.inputContainer))):(this.fireRequest(),this.resetActive()))},trackCurPage:function(a){var b=function(){"undefined"!==typeof g.controller&&g.controller.getCurrentPage&&(g.rac.currentAjaxLocation=g.controller.getCurrentPage());g.rac.currentLocationWindow=k.location.href};"number"===
typeof a?("undefined"!==typeof this.trackingPage&&clearTimeout(this.trackingPage),this.trackingPage=setTimeout(b,a)):b()},inFocus:function(a){this.resetActive();this.focus=!0;a!==this.input?(this.hide(this.input),this.setInput(a)):this.displayRAC();""!==this.input.el.value?this.fireRequest(this.input.el.value):""===this.input.el.value&&"true"===this.behaviourOptions.showEmpty&&this.fireRequest("*")},checkScreenSize:function(){var a=this.screenSize();a!==this.size&&(this.size=a,this.isVisible&&this.value&&
0<this.value.length&&this.fireRequest())},screenSize:function(){var a=this.breakpoints;return e(h).width()<a.small.maxWidth?a.small.value:a.other.value},resetStickToTop:function(a){this.isStickToTop(a)&&(e("body").removeClass("full-width"),e(this.el).removeClass("is-full-width"),a.removeClass("sticky sticky--full-width"),h.scrollTo(0,0))},isStickToTop:function(a){return a.is(".sticky, .sticky--full-width")},canStickToTop:function(){return this.hasTouch&&this.focus&&this.hasRAC()},stickToTop:function(a){!this.isStickToTop(a)&&
this.canStickToTop()&&(e(this.el).removeClass("is-full-width"),a.removeClass("sticky sticky--full-width"),"s"===this.screenSize()?(e("body").addClass("full-width"),e(this.el).addClass("is-full-width"),a.addClass("sticky--full-width")):a.addClass("sticky"),h.scrollTo(0,1))},isTablet:function(){return"s"!==this.screenSize()&&this.hasTouch},scrollToSearchBox:function(){if(this.input){this.resetStickToTop(e(this.input.el).closest(this.behaviourOptions.inputContainer));var a=k.body,b=this.input.el.getBoundingClientRect();
h.scrollTo(b.left+a.scrollLeft,b.top+a.scrollTop)}},checkDevice:function(){if(this.hasTouch="ontouchstart"in h||h.DocumentTouch&&k instanceof DocumentTouch)for(var a=[e("[data-provide=rac]").closest(this.behaviourOptions.inputContainer),e(this.el)],b=0,c=a.length;b<c;b++)a[b].hasClass("has-touch")||a[b].addClass("has-touch");a=/constructor/i.test(h.HTMLElement);b=e("body");a&&!b.hasClass("is-safari")&&b.addClass("is-safari")}};x.prototype={delay:150,isFixed:!1,lastValue:"",timeout:null,isCompositionEnd:!1,
blockSubmit:!1,_onChange:function(a){this._onFocus();a&&"string"===typeof a||(a=this.el.value);this.autocomplete.valueChanged(this,u(a))},_onBlur:function(){this.autocomplete.outOfFocus(this)},_onFocus:function(){this.autocomplete.inFocus(this)},_onKeyPress:function(){if(this.blockSubmit&&(this.blockSubmit=!1,this.autocomplete.isVisible))return!1},_onKeyDown:function(a){var b=this.el,c=this.autocomplete;c.focus=!0;this.blockSubmit=!1;switch(null!==a.which?a.which:null!==a.charCode?a.charCode:a.keyCode){case 38:a.preventDefault();
c.isVisible?c.prev():this._onChange();break;case 40:a.preventDefault();c.isVisible?c.next():this._onChange();break;case 33:a.preventDefault();c.isVisible?c.pageUp():this._onChange();break;case 34:a.preventDefault();c.isVisible?c.pageDown():this._onChange();break;case 37:case 39:break;case 35:case 9:a.preventDefault();(a=e(b).siblings("input.suggested-word").val())&&""!==a&&(e(b).val(a),this._onChange());break;case 13:a.preventDefault();if(c.selectCurrent())return this.blockSubmit=!1;c.stopRequest();
null!==this.timeout&&clearTimeout(this.timeout);this.lastValue=b.value;this.isCompositionEnd||c.hide(this);break;case 27:c.hide(this);break;default:c.resetActive(),clearTimeout(this.timeout)}this.lastValue=b.value},_onKeyUp:function(a){switch(null!==a.which?a.which:null!==a.charCode?a.charCode:a.keyCode){case 27:case 13:this.isCompositionEnd?this.isCompositionEnd=!1:this.autocomplete.hide(this);break;default:clearTimeout(this.timeout),this.el.value!==this.lastValue&&(this.timeout=setTimeout(this._onChange.bind(this),
this.delay))}},_onClear:function(a){this.hideKeyboard();this.autocomplete.keepFocus=!1;this._onBlur();a=e(".js-sli-close-area");a.length&&a.removeClass("is-hidden").addClass("is-hidden")},hideKeyboard:function(){if(this.autocomplete.hasTouch){var a=e(this.el);a.attr("readonly","readonly");setTimeout(function(){a.blur();a.removeAttr("readonly")},100)}},_onCompositionUpdate:function(a){a=a.data;a!==this.lastValue&&(clearTimeout(this.timeout),this.timeout=setTimeout(this._onChange.bind(this,a),this.delay))},
_onCompositionEnd:function(){this.isCompositionEnd=!0}};g.Autocomplete=w})(window,document);
