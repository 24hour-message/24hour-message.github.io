var skipCookie = getCookie("SKIPHOMEPAGECOOKIE");
if (skipCookie && skipCookie === "MEMBERCOOKIE") {
  $(".member-only").show();
} else {
  $(".nonmember-only").show();
}

function getCookie(name) {
  if (document.cookie.length > 0) {
    var start = document.cookie.indexOf(name + "=");
    if (start != -1) {
      start = start + name.length + 1;
      var end = document.cookie.indexOf(";", start);
      if (end == -1) end = document.cookie.length;
      return unescape(document.cookie.substring(start, end))
    }
  }
  return ""
}

+function(t){"use strict";function e(e){return this.each(function(){var i=t(this),o=i.data("bs.alert");o||i.data("bs.alert",o=new n(this)),"string"==typeof e&&o[e].call(i)})}var i='[data-dismiss="alert"]',n=function(e){t(e).on("click",i,this.close)};n.VERSION="3.3.7",n.TRANSITION_DURATION=150,n.prototype.close=function(e){function i(){a.detach().trigger("closed.bs.alert").remove()}var o=t(this),s=o.attr("data-target");s||(s=o.attr("href"),s=s&&s.replace(/.*(?=#[^\s]*$)/,""));var a=t("#"===s?[]:s);e&&e.preventDefault(),a.length||(a=o.closest(".alert")),a.trigger(e=t.Event("close.bs.alert")),e.isDefaultPrevented()||(a.removeClass("in"),t.support.transition&&a.hasClass("fade")?a.one("bsTransitionEnd",i).emulateTransitionEnd(n.TRANSITION_DURATION):i())};var o=t.fn.alert;t.fn.alert=e,t.fn.alert.Constructor=n,t.fn.alert.noConflict=function(){return t.fn.alert=o,this},t(document).on("click.bs.alert.data-api",i,n.prototype.close)}(jQuery),+function(t){"use strict";function e(e,n){return this.each(function(){var o=t(this),s=o.data("bs.modal"),a=t.extend({},i.DEFAULTS,o.data(),"object"==typeof e&&e);s||o.data("bs.modal",s=new i(this,a)),"string"==typeof e?s[e](n):a.show&&s.show(n)})}var i=function(e,i){this.options=i,this.$body=t(document.body),this.$element=t(e),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,t.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};i.VERSION="3.3.7",i.TRANSITION_DURATION=300,i.BACKDROP_TRANSITION_DURATION=150,i.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},i.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},i.prototype.show=function(e){var n=this,o=t.Event("show.bs.modal",{relatedTarget:e});this.$element.trigger(o),this.isShown||o.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',t.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){n.$element.one("mouseup.dismiss.bs.modal",function(e){t(e.target).is(n.$element)&&(n.ignoreBackdropClick=!0)})}),this.backdrop(function(){var o=t.support.transition&&n.$element.hasClass("fade");n.$element.parent().length||n.$element.appendTo(n.$body),n.$element.show().scrollTop(0),n.adjustDialog(),o&&n.$element[0].offsetWidth,n.$element.addClass("in"),n.enforceFocus();var s=t.Event("shown.bs.modal",{relatedTarget:e});o?n.$dialog.one("bsTransitionEnd",function(){n.$element.trigger("focus").trigger(s)}).emulateTransitionEnd(i.TRANSITION_DURATION):n.$element.trigger("focus").trigger(s)}))},i.prototype.hide=function(e){e&&e.preventDefault(),e=t.Event("hide.bs.modal"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),t(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),t.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",t.proxy(this.hideModal,this)).emulateTransitionEnd(i.TRANSITION_DURATION):this.hideModal())},i.prototype.enforceFocus=function(){t(document).off("focusin.bs.modal").on("focusin.bs.modal",t.proxy(function(t){document===t.target||this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},i.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",t.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},i.prototype.resize=function(){this.isShown?t(window).on("resize.bs.modal",t.proxy(this.handleUpdate,this)):t(window).off("resize.bs.modal")},i.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$body.removeClass("modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")})},i.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},i.prototype.backdrop=function(e){var n=this,o=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var s=t.support.transition&&o;if(this.$backdrop=t(document.createElement("div")).addClass("modal-backdrop "+o).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",t.proxy(function(t){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),s&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!e)return;s?this.$backdrop.one("bsTransitionEnd",e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION):e()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var a=function(){n.removeBackdrop(),e&&e()};t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",a).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION):a()}else e&&e()},i.prototype.handleUpdate=function(){this.adjustDialog()},i.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},i.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},i.prototype.checkScrollbar=function(){var t=window.innerWidth;if(!t){var e=document.documentElement.getBoundingClientRect();t=e.right-Math.abs(e.left)}this.bodyIsOverflowing=document.body.clientWidth<t,this.scrollbarWidth=this.measureScrollbar()},i.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",t+this.scrollbarWidth)},i.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},i.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var n=t.fn.modal;t.fn.modal=e,t.fn.modal.Constructor=i,t.fn.modal.noConflict=function(){return t.fn.modal=n,this},t(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(i){var n=t(this),o=n.attr("href"),s=t(n.attr("data-target")||o&&o.replace(/.*(?=#[^\s]+$)/,"")),a=s.data("bs.modal")?"toggle":t.extend({remote:!/#/.test(o)&&o},s.data(),n.data());n.is("a")&&i.preventDefault(),s.one("show.bs.modal",function(t){t.isDefaultPrevented()||s.one("hidden.bs.modal",function(){n.is(":visible")&&n.trigger("focus")})}),e.call(s,a,this)})}(jQuery),+function(t){"use strict";function e(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(void 0!==t.style[i])return{end:e[i]};return!1}t.fn.emulateTransitionEnd=function(e){var i=!1,n=this;t(this).one("bsTransitionEnd",function(){i=!0});var o=function(){i||t(n).trigger(t.support.transition.end)};return setTimeout(o,e),this},t(function(){t.support.transition=e(),t.support.transition&&(t.event.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(e){if(t(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}})})}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var n=t(this),o=n.data("bs.tab");o||n.data("bs.tab",o=new i(this)),"string"==typeof e&&o[e]()})}var i=function(e){this.element=t(e)};i.VERSION="3.3.7",i.TRANSITION_DURATION=150,i.prototype.show=function(){var e=this.element,i=e.closest("ul:not(.dropdown-menu)"),n=e.data("target");if(n||(n=e.attr("href"),n=n&&n.replace(/.*(?=#[^\s]*$)/,"")),!e.parent("li").hasClass("active")){var o=i.find(".active:last a"),s=t.Event("hide.bs.tab",{relatedTarget:e[0]}),a=t.Event("show.bs.tab",{relatedTarget:o[0]});if(o.trigger(s),e.trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){var r=t(n);this.activate(e.closest("li"),i),this.activate(r,r.parent(),function(){o.trigger({type:"hidden.bs.tab",relatedTarget:e[0]}),e.trigger({type:"shown.bs.tab",relatedTarget:o[0]})})}}},i.prototype.activate=function(e,n,o){function s(){a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),r?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu").length&&e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),o&&o()}var a=n.find("> .active"),r=o&&t.support.transition&&(a.length&&a.hasClass("fade")||!!n.find("> .fade").length);a.length&&r?a.one("bsTransitionEnd",s).emulateTransitionEnd(i.TRANSITION_DURATION):s(),a.removeClass("in")};var n=t.fn.tab;t.fn.tab=e,t.fn.tab.Constructor=i,t.fn.tab.noConflict=function(){return t.fn.tab=n,this};var o=function(i){i.preventDefault(),e.call(t(this),"show")};t(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',o).on("click.bs.tab.data-api",'[data-toggle="pill"]',o)}(jQuery);

"use strict";

$(document).ready(function() {
  //get all elements will open a video modal on click based on specific attribute
  var $modals = $("*[data-video-modal]"),
    $modalElem,
    $this,
    iframeString,
    activeHash = window.location.hash.replace("#", ""),
    hashVideo;

  for (var i = 0; i < $modals.length; i += 1) {
    var $el = $($modals[i]);
    if (!$el.attr("data-video-modal")) {
      $el.remove();
    }

    var linkUrl = $el.attr("data-video-modal");

    if (linkUrl.indexOf("youtube.com/embed/") > -1) {
      linkUrl = "//www.youtube.com/watch?v=" + linkUrl.split("/embed/")[1];
    }

    if ($el.hasClass("video-modal-cont")) {
      $el.html('<a href="' + linkUrl + '">' + $el.html() + "</a>");
      $el.append(
        '<img class="youtube-play-btn gray-play-btn" src="/etc/designs/24-hour-fitness/images/youtube-gray-icon.png" alt=""><img class="youtube-play-btn red-play-btn" src="/etc/designs/24-hour-fitness/images/youtube-red-icon.png" alt="">'
      );
    } else if ($el.find("a").length) {
      $el.find("a").attr("href", linkUrl);
    }
    $el.find("a").on("click", function(event) {
      event.preventDefault();
    });
  }

  //Bind click for all elements
  $modals.on("click", function() {
    showModal($(this), true);
  });

  function createModalHtml() {
    $modalElem = $("<div />", {
      id: "video-modal",
      class: "modal fade",
      attr: {
        tabindex: "-1",
        role: "dialog",
        "data-keyboard": true
      }
    });
    $modalElem.append(
      '<div class="modal-content video-container-24"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><img src="/etc/designs/24-hour-fitness/images/close.png" alt="" /></button><div class="embed-responsive embed-responsive-4by3"></div></div>'
    );
    //add to dom
    $(".container-24").append($modalElem);

    //remove video content after modal is hide
    $modalElem.on("hide.bs.modal", function() {
      $(".embed-responsive", $modalElem).empty();
      window.location.hash = "";
    });

    $modalElem.on("show.bs.modal", function() {
      //Time out temporarily added shown event from bootstrap modal supposed to wait until the element is render but not working for some reason.
      setTimeout(function() {
        $modalElem.focus();
      }, 500);
    });
  }
  createModalHtml();

  //get elements with hash attr that matches current tag
  var $deepLinkVideo = [];
  if (activeHash && window.location.pathname.indexOf("Website/Club/") > -1) {
    $deepLinkVideo = $("[data-hash=" + activeHash + "]");
  }

  //if there hash of a video matches location display it
  if ($deepLinkVideo.length === 1) {
    showModal($deepLinkVideo, false);
  } else if ($deepLinkVideo.length > 1) {
    console.warn(
      "Videos should have a unique hash to be activated with linking"
    );
  }

  //function to display a modal
  function showModal($currentEl, updateHash) {
    var hash = $currentEl.attr("data-hash"),
      url = $currentEl
        .attr("data-video-modal")
        .replace("http://", "//")
        .replace("https://", "//");

    if ($currentEl.attr("data-object")) {
      //the source to load is not a url youtube video just put URL in an iframe
      iframeString =
        '<iframe class="embed-responsive-item" src="' + url + '">"</iframe>';
    } else {
      //youtube video clean url from params
      if (url.indexOf("youtube") > -1 && url.indexOf("?") > -1) {
        url = url.split("?")[0];
      }
      iframeString =
        '<iframe class="embed-responsive-item" src="' +
        url +
        '?autoplay=1&showinfo=0"></iframe>';
    }
    $modalElem.find(".embed-responsive").html(iframeString);
    $modalElem.modal("show");

    //update hash
    if (hash && updateHash) {
      window.location.hash = hash;
    }
  }
});

$(document).ready(function() {
  var ieVersion = (function() {
    var undef,
      v = 3,
            div = document.createElement('div'),
            all = div.getElementsByTagName('i');
    while (
            div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
            all[0]
    );
    return v > 4 ? v : undef;
    }());

    var size, color, $container, $loader, buildFunction,
    typesSize = ['small', 'regular', 'large'], typesColor = ['black', 'white'],
    defaults = {
        size: 'regular',
        color: 'black'
    };

  //pick gift or sprite deppending on browser
  if (ieVersion && ieVersion < 9) {
    buildFunction = buildGift;
  } else {
    buildFunction = buildSprite;
  }

  function appendLoader24(options) {
    if (options.container) {
      $container = $(options.container);

      var config = $.extend({}, defaults, options);

      //validate customization options
      if (typesSize.indexOf(options.size) === -1) {
        config.size = defaults.size;
                console.info('Loader type not valid size returned');
      }

      if (typesColor.indexOf(options.color) === -1) {
        config.color = defaults.color;
                console.info('Loader type not valid color returned');
      }

      //insert loader
      $container.append(buildFunction(config));
      return $loader;

    } else {
            console.info('Container param should be provided for loader-24');
    }
  }

  function buildGift(config) {
    var template = $(
      '<div class="loader-container-' +
        config.size +
        '-gif"><div class="loader-' +
        config.size +
        '-gif-24"><img src="/etc/designs/24-hour-fitness/images/loader-' +
        config.size +
        "-" +
        config.color +
        '.gif" alt=""></div></div>'
    );
    return template;
  }

  function buildSprite(config) {
    var template = $(
      '<div class="loader-container-' +
        config.size +
        '"><div class="loader-' +
        config.size +
        '-24"><img src="/etc/designs/24-hour-fitness/images/loader-' +
        config.size +
        "-" +
        config.color +
        '-sprites.png" alt=""></div></div>'
    );
    return template;
  }

  //expose private method to generate loaders
  window.appendLoader24 = appendLoader24;
});

(function() {
    $.support.cors = true;
    var gymsLibrary = function() {
      // this.URL = "/ClubInformation/rest/v1/Gyms";
      this.URL = "https://www.24hourfitness.com/Website/ClubLocation/";

      this.findAll = function(successCallback, failCallback) {
        $.getJSON(this.URL, function(data) {
          var clubs = parseClubs(data);
          successCallback(clubs);
        }).fail(function() {
          failCallback();
        });
      };

      this.findByLocation = function(loc, successCallback, failCallback) {
        $.getJSON(this.URL + "?location=" + loc, function(data) {
          var clubs = parseClubs(data);
          successCallback(clubs);
        }).fail(function() {
          failCallback();
        });
      };

      this.findByLatLong = function(lat, long, successCallback, failCallback) {
        $.getJSON(this.URL + "?latitude=" + lat + "&longitude=" + long, function(
          data
        ) {
          var clubs = parseClubs(data);
          successCallback(clubs);
        }).fail(function() {
          failCallback();
        });
      };

      this.findByIp = function(successCallback, failCallback) {
        // ?ip=174.46.232.2
        // ?location=Fremont,CA&radius=25.0
        // ?clubId=00024
        $.getJSON(this.URL + "?ip", function(data) {
          if (data.valid) {
            var clubs = parseClubs(data);
            successCallback(clubs);
          } else {
            failCallback();
          }
        }).fail(function(data) {
          failCallback();
        });
      };

      this.findByHTML5Location = function(successCallback, failCallback) {
        // console.log('findByHTML5Location called');
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            function(loc) {
              Gyms.findByLatLong(
                loc.coords.latitude,
                loc.coords.longitude,
                successCallback,
                failCallback
              );
            },
            function() {
              failCallback();
            }
          );
        } else {
          failCallback();
        }
      };

      this.findGym = function(clubNumber, successCallback, failCallback) {
        $.getJSON(this.URL + "?clubId=" + clubNumber, function(data) {
          var clubs = parseClubs(data);
          successCallback(clubs);
        }).fail(function() {
          failCallback();
        });
      };

      function parseClubs(responseData) {
        if (responseData.errorMessage) {
          // do nothing with the error
        } else {
          if (responseData.groupClubs.length) {
            return responseData.groupClubs;
          }
        }
        return;
      }
    };

    //Library initialization
    var Gyms = (window.Gyms = new gymsLibrary());
  })();

/**
 * Owl Carousel v2.2.1
 * Copyright 2013-2017 David Deutsch
 * Licensed under  ()
 */
/**
 * Owl carousel
 * @version 2.1.6
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
;(function($, window, document, undefined) {

	/**
	 * Creates a carousel.
	 * @class The Owl Carousel.
	 * @public
	 * @param {HTMLElement|jQuery} element - The element to create the carousel for.
	 * @param {Object} [options] - The options
	 */
	function Owl(element, options) {

		/**
		 * Current settings for the carousel.
		 * @public
		 */
		this.settings = null;

		/**
		 * Current options set by the caller including defaults.
		 * @public
		 */
		this.options = $.extend({}, Owl.Defaults, options);

		/**
		 * Plugin element.
		 * @public
		 */
		this.$element = $(element);

		/**
		 * Proxied event handlers.
		 * @protected
		 */
		this._handlers = {};

		/**
		 * References to the running plugins of this carousel.
		 * @protected
		 */
		this._plugins = {};

		/**
		 * Currently suppressed events to prevent them from beeing retriggered.
		 * @protected
		 */
		this._supress = {};

		/**
		 * Absolute current position.
		 * @protected
		 */
		this._current = null;

		/**
		 * Animation speed in milliseconds.
		 * @protected
		 */
		this._speed = null;

		/**
		 * Coordinates of all items in pixel.
		 * @todo The name of this member is missleading.
		 * @protected
		 */
		this._coordinates = [];

		/**
		 * Current breakpoint.
		 * @todo Real media queries would be nice.
		 * @protected
		 */
		this._breakpoint = null;

		/**
		 * Current width of the plugin element.
		 */
		this._width = null;

		/**
		 * All real items.
		 * @protected
		 */
		this._items = [];

		/**
		 * All cloned items.
		 * @protected
		 */
		this._clones = [];

		/**
		 * Merge values of all items.
		 * @todo Maybe this could be part of a plugin.
		 * @protected
		 */
		this._mergers = [];

		/**
		 * Widths of all items.
		 */
		this._widths = [];

		/**
		 * Invalidated parts within the update process.
		 * @protected
		 */
		this._invalidated = {};

		/**
		 * Ordered list of workers for the update process.
		 * @protected
		 */
		this._pipe = [];

		/**
		 * Current state information for the drag operation.
		 * @todo #261
		 * @protected
		 */
		this._drag = {
			time: null,
			target: null,
			pointer: null,
			stage: {
				start: null,
				current: null
			},
			direction: null
		};

		/**
		 * Current state information and their tags.
		 * @type {Object}
		 * @protected
		 */
		this._states = {
			current: {},
			tags: {
				'initializing': [ 'busy' ],
				'animating': [ 'busy' ],
				'dragging': [ 'interacting' ]
			}
		};

		$.each([ 'onResize', 'onThrottledResize' ], $.proxy(function(i, handler) {
			this._handlers[handler] = $.proxy(this[handler], this);
		}, this));

		$.each(Owl.Plugins, $.proxy(function(key, plugin) {
			this._plugins[key.charAt(0).toLowerCase() + key.slice(1)]
				= new plugin(this);
		}, this));

		$.each(Owl.Workers, $.proxy(function(priority, worker) {
			this._pipe.push({
				'filter': worker.filter,
				'run': $.proxy(worker.run, this)
			});
		}, this));

		this.setup();
		this.initialize();
	}

	/**
	 * Default options for the carousel.
	 * @public
	 */
	Owl.Defaults = {
		items: 3,
		loop: false,
		center: false,
		rewind: false,

		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		freeDrag: false,

		margin: 0,
		stagePadding: 0,

		merge: false,
		mergeFit: true,
		autoWidth: false,

		startPosition: 0,
		rtl: false,

		smartSpeed: 250,
		fluidSpeed: false,
		dragEndSpeed: false,

		responsive: {},
		responsiveRefreshRate: 200,
		responsiveBaseElement: window,

		fallbackEasing: 'swing',

		info: false,

		nestedItemSelector: false,
		itemElement: 'div',
		stageElement: 'div',

		refreshClass: 'owl-refresh',
		loadedClass: 'owl-loaded',
		loadingClass: 'owl-loading',
		rtlClass: 'owl-rtl',
		responsiveClass: 'owl-responsive',
		dragClass: 'owl-drag',
		itemClass: 'owl-item',
		stageClass: 'owl-stage',
		stageOuterClass: 'owl-stage-outer',
		grabClass: 'owl-grab'
	};

	/**
	 * Enumeration for width.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Width = {
		Default: 'default',
		Inner: 'inner',
		Outer: 'outer'
	};

	/**
	 * Enumeration for types.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Type = {
		Event: 'event',
		State: 'state'
	};

	/**
	 * Contains all registered plugins.
	 * @public
	 */
	Owl.Plugins = {};

	/**
	 * List of workers involved in the update process.
	 */
	Owl.Workers = [ {
		filter: [ 'width', 'settings' ],
		run: function() {
			this._width = this.$element.width();
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current = this._items && this._items[this.relative(this._current)];
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			this.$stage.children('.cloned').remove();
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var margin = this.settings.margin || '',
				grid = !this.settings.autoWidth,
				rtl = this.settings.rtl,
				css = {
					'width': 'auto',
					'margin-left': rtl ? margin : '',
					'margin-right': rtl ? '' : margin
				};

			!grid && this.$stage.children().css(css);

			cache.css = css;
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
				merge = null,
				iterator = this._items.length,
				grid = !this.settings.autoWidth,
				widths = [];

			cache.items = {
				merge: false,
				width: width
			};

			while (iterator--) {
				merge = this._mergers[iterator];
				merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;

				cache.items.merge = merge > 1 || cache.items.merge;

				widths[iterator] = !grid ? this._items[iterator].width() : width * merge;
			}

			this._widths = widths;
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			var clones = [],
				items = this._items,
				settings = this.settings,
				// TODO: Should be computed from number of min width items in stage
				view = Math.max(settings.items * 2, 4),
				size = Math.ceil(items.length / 2) * 2,
				repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0,
				append = '',
				prepend = '';

			repeat /= 2;

			while (repeat--) {
				// Switch to only using appended clones
				clones.push(this.normalize(clones.length / 2, true));
				append = append + items[clones[clones.length - 1]][0].outerHTML;
				clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
				prepend = items[clones[clones.length - 1]][0].outerHTML + prepend;
			}

			this._clones = clones;

			$(append).addClass('cloned').appendTo(this.$stage);
			$(prepend).addClass('cloned').prependTo(this.$stage);
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var rtl = this.settings.rtl ? 1 : -1,
				size = this._clones.length + this._items.length,
				iterator = -1,
				previous = 0,
				current = 0,
				coordinates = [];

			while (++iterator < size) {
				previous = coordinates[iterator - 1] || 0;
				current = this._widths[this.relative(iterator)] + this.settings.margin;
				coordinates.push(previous + current * rtl);
			}

			this._coordinates = coordinates;
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var padding = this.settings.stagePadding,
				coordinates = this._coordinates,
				css = {
					'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
					'padding-left': padding || '',
					'padding-right': padding || ''
				};

			this.$stage.css(css);
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var iterator = this._coordinates.length,
				grid = !this.settings.autoWidth,
				items = this.$stage.children();

			if (grid && cache.items.merge) {
				while (iterator--) {
					cache.css.width = this._widths[this.relative(iterator)];
					items.eq(iterator).css(cache.css);
				}
			} else if (grid) {
				cache.css.width = cache.items.width;
				items.css(cache.css);
			}
		}
	}, {
		filter: [ 'items' ],
		run: function() {
			this._coordinates.length < 1 && this.$stage.removeAttr('style');
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current = cache.current ? this.$stage.children().index(cache.current) : 0;
			cache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current));
			this.reset(cache.current);
		}
	}, {
		filter: [ 'position' ],
		run: function() {
			this.animate(this.coordinates(this._current));
		}
	}, {
		filter: [ 'width', 'position', 'items', 'settings' ],
		run: function() {
			var rtl = this.settings.rtl ? 1 : -1,
				padding = this.settings.stagePadding * 2,
				begin = this.coordinates(this.current()) + padding,
				end = begin + this.width() * rtl,
				inner, outer, matches = [], i, n;

			for (i = 0, n = this._coordinates.length; i < n; i++) {
				inner = this._coordinates[i - 1] || 0;
				outer = Math.abs(this._coordinates[i]) + padding * rtl;

				if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end)))
					|| (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
					matches.push(i);
				}
			}

			this.$stage.children('.active').removeClass('active');
			this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass('active');

			if (this.settings.center) {
				this.$stage.children('.center').removeClass('center');
				this.$stage.children().eq(this.current()).addClass('center');
			}
		}
	} ];

	/**
	 * Initializes the carousel.
	 * @protected
	 */
	Owl.prototype.initialize = function() {
		this.enter('initializing');
		this.trigger('initialize');

		this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);

		if (this.settings.autoWidth && !this.is('pre-loading')) {
			var imgs, nestedSelector, width;
			imgs = this.$element.find('img');
			nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
			width = this.$element.children(nestedSelector).width();

			if (imgs.length && width <= 0) {
				this.preloadAutoWidthImages(imgs);
			}
		}

		this.$element.addClass(this.options.loadingClass);

		// create stage
		this.$stage = $('<' + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>')
			.wrap('<div class="' + this.settings.stageOuterClass + '"/>');

		// append stage
		this.$element.append(this.$stage.parent());

		// append content
		this.replace(this.$element.children().not(this.$stage.parent()));

		// check visibility
		if (this.$element.is(':visible')) {
			// update view
			this.refresh();
		} else {
			// invalidate width
			this.invalidate('width');
		}

		this.$element
			.removeClass(this.options.loadingClass)
			.addClass(this.options.loadedClass);

		// register event handlers
		this.registerEventHandlers();

		this.leave('initializing');
		this.trigger('initialized');
	};

	/**
	 * Setups the current settings.
	 * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
	 * @todo Support for media queries by using `matchMedia` would be nice.
	 * @public
	 */
	Owl.prototype.setup = function() {
		var viewport = this.viewport(),
			overwrites = this.options.responsive,
			match = -1,
			settings = null;

		if (!overwrites) {
			settings = $.extend({}, this.options);
		} else {
			$.each(overwrites, function(breakpoint) {
				if (breakpoint <= viewport && breakpoint > match) {
					match = Number(breakpoint);
				}
			});

			settings = $.extend({}, this.options, overwrites[match]);
			if (typeof settings.stagePadding === 'function') {
				settings.stagePadding = settings.stagePadding();
			}
			delete settings.responsive;

			// responsive class
			if (settings.responsiveClass) {
				this.$element.attr('class',
					this.$element.attr('class').replace(new RegExp('(' + this.options.responsiveClass + '-)\\S+\\s', 'g'), '$1' + match)
				);
			}
		}

		this.trigger('change', { property: { name: 'settings', value: settings } });
		this._breakpoint = match;
		this.settings = settings;
		this.invalidate('settings');
		this.trigger('changed', { property: { name: 'settings', value: this.settings } });
	};

	/**
	 * Updates option logic if necessery.
	 * @protected
	 */
	Owl.prototype.optionsLogic = function() {
		if (this.settings.autoWidth) {
			this.settings.stagePadding = false;
			this.settings.merge = false;
		}
	};

	/**
	 * Prepares an item before add.
	 * @todo Rename event parameter `content` to `item`.
	 * @protected
	 * @returns {jQuery|HTMLElement} - The item container.
	 */
	Owl.prototype.prepare = function(item) {
		var event = this.trigger('prepare', { content: item });

		if (!event.data) {
			event.data = $('<' + this.settings.itemElement + '/>')
				.addClass(this.options.itemClass).append(item)
		}

		this.trigger('prepared', { content: event.data });

		return event.data;
	};

	/**
	 * Updates the view.
	 * @public
	 */
	Owl.prototype.update = function() {
		var i = 0,
			n = this._pipe.length,
			filter = $.proxy(function(p) { return this[p] }, this._invalidated),
			cache = {};

		while (i < n) {
			if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
				this._pipe[i].run(cache);
			}
			i++;
		}

		this._invalidated = {};

		!this.is('valid') && this.enter('valid');
	};

	/**
	 * Gets the width of the view.
	 * @public
	 * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
	 * @returns {Number} - The width of the view in pixel.
	 */
	Owl.prototype.width = function(dimension) {
		dimension = dimension || Owl.Width.Default;
		switch (dimension) {
			case Owl.Width.Inner:
			case Owl.Width.Outer:
				return this._width;
			default:
				return this._width - this.settings.stagePadding * 2 + this.settings.margin;
		}
	};

	/**
	 * Refreshes the carousel primarily for adaptive purposes.
	 * @public
	 */
	Owl.prototype.refresh = function() {
		this.enter('refreshing');
		this.trigger('refresh');

		this.setup();

		this.optionsLogic();

		this.$element.addClass(this.options.refreshClass);

		this.update();

		this.$element.removeClass(this.options.refreshClass);

		this.leave('refreshing');
		this.trigger('refreshed');
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onThrottledResize = function() {
		window.clearTimeout(this.resizeTimer);
		this.resizeTimer = window.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onResize = function() {
		if (!this._items.length) {
			return false;
		}

		if (this._width === this.$element.width()) {
			return false;
		}

		if (!this.$element.is(':visible')) {
			return false;
		}

		this.enter('resizing');

		if (this.trigger('resize').isDefaultPrevented()) {
			this.leave('resizing');
			return false;
		}

		this.invalidate('width');

		this.refresh();

		this.leave('resizing');
		this.trigger('resized');
	};

	/**
	 * Registers event handlers.
	 * @todo Check `msPointerEnabled`
	 * @todo #261
	 * @protected
	 */
	Owl.prototype.registerEventHandlers = function() {
		if ($.support.transition) {
			this.$stage.on($.support.transition.end + '.owl.core', $.proxy(this.onTransitionEnd, this));
		}

		if (this.settings.responsive !== false) {
			this.on(window, 'resize', this._handlers.onThrottledResize);
		}

		if (this.settings.mouseDrag) {
			this.$element.addClass(this.options.dragClass);
			this.$stage.on('mousedown.owl.core', $.proxy(this.onDragStart, this));
			this.$stage.on('dragstart.owl.core selectstart.owl.core', function() { return false });
		}

		if (this.settings.touchDrag){
			this.$stage.on('touchstart.owl.core', $.proxy(this.onDragStart, this));
			this.$stage.on('touchcancel.owl.core', $.proxy(this.onDragEnd, this));
		}
	};

	/**
	 * Handles `touchstart` and `mousedown` events.
	 * @todo Horizontal swipe threshold as option
	 * @todo #261
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragStart = function(event) {
		var stage = null;

		if (event.which === 3) {
			return;
		}

		if ($.support.transform) {
			stage = this.$stage.css('transform').replace(/.*\(|\)| /g, '').split(',');
			stage = {
				x: stage[stage.length === 16 ? 12 : 4],
				y: stage[stage.length === 16 ? 13 : 5]
			};
		} else {
			stage = this.$stage.position();
			stage = {
				x: this.settings.rtl ?
					stage.left + this.$stage.width() - this.width() + this.settings.margin :
					stage.left,
				y: stage.top
			};
		}

		if (this.is('animating')) {
			$.support.transform ? this.animate(stage.x) : this.$stage.stop()
			this.invalidate('position');
		}

		this.$element.toggleClass(this.options.grabClass, event.type === 'mousedown');

		this.speed(0);

		this._drag.time = new Date().getTime();
		this._drag.target = $(event.target);
		this._drag.stage.start = stage;
		this._drag.stage.current = stage;
		this._drag.pointer = this.pointer(event);

		$(document).on('mouseup.owl.core touchend.owl.core', $.proxy(this.onDragEnd, this));

		$(document).one('mousemove.owl.core touchmove.owl.core', $.proxy(function(event) {
			var delta = this.difference(this._drag.pointer, this.pointer(event));

			$(document).on('mousemove.owl.core touchmove.owl.core', $.proxy(this.onDragMove, this));

			if (Math.abs(delta.x) < Math.abs(delta.y) && this.is('valid')) {
				return;
			}

			event.preventDefault();

			this.enter('dragging');
			this.trigger('drag');
		}, this));
	};

	/**
	 * Handles the `touchmove` and `mousemove` events.
	 * @todo #261
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragMove = function(event) {
		var minimum = null,
			maximum = null,
			pull = null,
			delta = this.difference(this._drag.pointer, this.pointer(event)),
			stage = this.difference(this._drag.stage.start, delta);

		if (!this.is('dragging')) {
			return;
		}

		event.preventDefault();

		if (this.settings.loop) {
			minimum = this.coordinates(this.minimum());
			maximum = this.coordinates(this.maximum() + 1) - minimum;
			stage.x = (((stage.x - minimum) % maximum + maximum) % maximum) + minimum;
		} else {
			minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
			maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
			pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
			stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
		}

		this._drag.stage.current = stage;

		this.animate(stage.x);
	};

	/**
	 * Handles the `touchend` and `mouseup` events.
	 * @todo #261
	 * @todo Threshold for click event
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragEnd = function(event) {
		var delta = this.difference(this._drag.pointer, this.pointer(event)),
			stage = this._drag.stage.current,
			direction = delta.x > 0 ^ this.settings.rtl ? 'left' : 'right';

		$(document).off('.owl.core');

		this.$element.removeClass(this.options.grabClass);

		if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
			this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
			this.current(this.closest(stage.x, delta.x !== 0 ? direction : this._drag.direction));
			this.invalidate('position');
			this.update();

			this._drag.direction = direction;

			if (Math.abs(delta.x) > 3 || new Date().getTime() - this._drag.time > 300) {
				this._drag.target.one('click.owl.core', function() { return false; });
			}
		}

		if (!this.is('dragging')) {
			return;
		}

		this.leave('dragging');
		this.trigger('dragged');
	};

	/**
	 * Gets absolute position of the closest item for a coordinate.
	 * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
	 * @protected
	 * @param {Number} coordinate - The coordinate in pixel.
	 * @param {String} direction - The direction to check for the closest item. Ether `left` or `right`.
	 * @return {Number} - The absolute position of the closest item.
	 */
	Owl.prototype.closest = function(coordinate, direction) {
		var position = -1,
			pull = 30,
			width = this.width(),
			coordinates = this.coordinates();

		if (!this.settings.freeDrag) {
			// check closest item
			$.each(coordinates, $.proxy(function(index, value) {
				// on a left pull, check on current index
				if (direction === 'left' && coordinate > value - pull && coordinate < value + pull) {
					position = index;
				// on a right pull, check on previous index
				// to do so, subtract width from value and set position = index + 1
				} else if (direction === 'right' && coordinate > value - width - pull && coordinate < value - width + pull) {
					position = index + 1;
				} else if (this.op(coordinate, '<', value)
					&& this.op(coordinate, '>', coordinates[index + 1] || value - width)) {
					position = direction === 'left' ? index + 1 : index;
				}
				return position === -1;
			}, this));
		}

		if (!this.settings.loop) {
			// non loop boundries
			if (this.op(coordinate, '>', coordinates[this.minimum()])) {
				position = coordinate = this.minimum();
			} else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
				position = coordinate = this.maximum();
			}
		}

		return position;
	};

	/**
	 * Animates the stage.
	 * @todo #270
	 * @public
	 * @param {Number} coordinate - The coordinate in pixels.
	 */
	Owl.prototype.animate = function(coordinate) {
		var animate = this.speed() > 0;

		this.is('animating') && this.onTransitionEnd();

		if (animate) {
			this.enter('animating');
			this.trigger('translate');
		}

		if ($.support.transform3d && $.support.transition) {
			this.$stage.css({
				transform: 'translate3d(' + coordinate + 'px,0px,0px)',
				transition: (this.speed() / 1000) + 's'
			});
		} else if (animate) {
			this.$stage.animate({
				left: coordinate + 'px'
			}, this.speed(), this.settings.fallbackEasing, $.proxy(this.onTransitionEnd, this));
		} else {
			this.$stage.css({
				left: coordinate + 'px'
			});
		}
	};

	/**
	 * Checks whether the carousel is in a specific state or not.
	 * @param {String} state - The state to check.
	 * @returns {Boolean} - The flag which indicates if the carousel is busy.
	 */
	Owl.prototype.is = function(state) {
		return this._states.current[state] && this._states.current[state] > 0;
	};

	/**
	 * Sets the absolute position of the current item.
	 * @public
	 * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
	 * @returns {Number} - The absolute position of the current item.
	 */
	Owl.prototype.current = function(position) {
		if (position === undefined) {
			return this._current;
		}

		if (this._items.length === 0) {
			return undefined;
		}

		position = this.normalize(position);

		if (this._current !== position) {
			var event = this.trigger('change', { property: { name: 'position', value: position } });

			if (event.data !== undefined) {
				position = this.normalize(event.data);
			}

			this._current = position;

			this.invalidate('position');

			this.trigger('changed', { property: { name: 'position', value: this._current } });
		}

		return this._current;
	};

	/**
	 * Invalidates the given part of the update routine.
	 * @param {String} [part] - The part to invalidate.
	 * @returns {Array.<String>} - The invalidated parts.
	 */
	Owl.prototype.invalidate = function(part) {
		if ($.type(part) === 'string') {
			this._invalidated[part] = true;
			this.is('valid') && this.leave('valid');
		}
		return $.map(this._invalidated, function(v, i) { return i });
	};

	/**
	 * Resets the absolute position of the current item.
	 * @public
	 * @param {Number} position - The absolute position of the new item.
	 */
	Owl.prototype.reset = function(position) {
		position = this.normalize(position);

		if (position === undefined) {
			return;
		}

		this._speed = 0;
		this._current = position;

		this.suppress([ 'translate', 'translated' ]);

		this.animate(this.coordinates(position));

		this.release([ 'translate', 'translated' ]);
	};

	/**
	 * Normalizes an absolute or a relative position of an item.
	 * @public
	 * @param {Number} position - The absolute or relative position to normalize.
	 * @param {Boolean} [relative=false] - Whether the given position is relative or not.
	 * @returns {Number} - The normalized position.
	 */
	Owl.prototype.normalize = function(position, relative) {
		var n = this._items.length,
			m = relative ? 0 : this._clones.length;

		if (!this.isNumeric(position) || n < 1) {
			position = undefined;
		} else if (position < 0 || position >= n + m) {
			position = ((position - m / 2) % n + n) % n + m / 2;
		}

		return position;
	};

	/**
	 * Converts an absolute position of an item into a relative one.
	 * @public
	 * @param {Number} position - The absolute position to convert.
	 * @returns {Number} - The converted position.
	 */
	Owl.prototype.relative = function(position) {
		position -= this._clones.length / 2;
		return this.normalize(position, true);
	};

	/**
	 * Gets the maximum position for the current item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.maximum = function(relative) {
		var settings = this.settings,
			maximum = this._coordinates.length,
			iterator,
			reciprocalItemsWidth,
			elementWidth;

		if (settings.loop) {
			maximum = this._clones.length / 2 + this._items.length - 1;
		} else if (settings.autoWidth || settings.merge) {
			iterator = this._items.length;
			reciprocalItemsWidth = this._items[--iterator].width();
			elementWidth = this.$element.width();
			while (iterator--) {
				reciprocalItemsWidth += this._items[iterator].width() + this.settings.margin;
				if (reciprocalItemsWidth > elementWidth) {
					break;
				}
			}
			maximum = iterator + 1;
		} else if (settings.center) {
			maximum = this._items.length - 1;
		} else {
			maximum = this._items.length - settings.items;
		}

		if (relative) {
			maximum -= this._clones.length / 2;
		}

		return Math.max(maximum, 0);
	};

	/**
	 * Gets the minimum position for the current item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.minimum = function(relative) {
		return relative ? 0 : this._clones.length / 2;
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.items = function(position) {
		if (position === undefined) {
			return this._items.slice();
		}

		position = this.normalize(position, true);
		return this._items[position];
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.mergers = function(position) {
		if (position === undefined) {
			return this._mergers.slice();
		}

		position = this.normalize(position, true);
		return this._mergers[position];
	};

	/**
	 * Gets the absolute positions of clones for an item.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
	 */
	Owl.prototype.clones = function(position) {
		var odd = this._clones.length / 2,
			even = odd + this._items.length,
			map = function(index) { return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2 };

		if (position === undefined) {
			return $.map(this._clones, function(v, i) { return map(i) });
		}

		return $.map(this._clones, function(v, i) { return v === position ? map(i) : null });
	};

	/**
	 * Sets the current animation speed.
	 * @public
	 * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
	 * @returns {Number} - The current animation speed in milliseconds.
	 */
	Owl.prototype.speed = function(speed) {
		if (speed !== undefined) {
			this._speed = speed;
		}

		return this._speed;
	};

	/**
	 * Gets the coordinate of an item.
	 * @todo The name of this method is missleanding.
	 * @public
	 * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
	 * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
	 */
	Owl.prototype.coordinates = function(position) {
		var multiplier = 1,
			newPosition = position - 1,
			coordinate;

		if (position === undefined) {
			return $.map(this._coordinates, $.proxy(function(coordinate, index) {
				return this.coordinates(index);
			}, this));
		}

		if (this.settings.center) {
			if (this.settings.rtl) {
				multiplier = -1;
				newPosition = position + 1;
			}

			coordinate = this._coordinates[position];
			coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
		} else {
			coordinate = this._coordinates[newPosition] || 0;
		}

		coordinate = Math.ceil(coordinate);

		return coordinate;
	};

	/**
	 * Calculates the speed for a translation.
	 * @protected
	 * @param {Number} from - The absolute position of the start item.
	 * @param {Number} to - The absolute position of the target item.
	 * @param {Number} [factor=undefined] - The time factor in milliseconds.
	 * @returns {Number} - The time in milliseconds for the translation.
	 */
	Owl.prototype.duration = function(from, to, factor) {
		if (factor === 0) {
			return 0;
		}

		return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
	};

	/**
	 * Slides to the specified item.
	 * @public
	 * @param {Number} position - The position of the item.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.to = function(position, speed) {
		var current = this.current(),
			revert = null,
			distance = position - this.relative(current),
			direction = (distance > 0) - (distance < 0),
			items = this._items.length,
			minimum = this.minimum(),
			maximum = this.maximum();

		if (this.settings.loop) {
			if (!this.settings.rewind && Math.abs(distance) > items / 2) {
				distance += direction * -1 * items;
			}

			position = current + distance;
			revert = ((position - minimum) % items + items) % items + minimum;

			if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
				current = revert - distance;
				position = revert;
				this.reset(current);
			}
		} else if (this.settings.rewind) {
			maximum += 1;
			position = (position % maximum + maximum) % maximum;
		} else {
			position = Math.max(minimum, Math.min(maximum, position));
		}

		this.speed(this.duration(current, position, speed));
		this.current(position);

		if (this.$element.is(':visible')) {
			this.update();
		}
	};

	/**
	 * Slides to the next item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.next = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) + 1, speed);
	};

	/**
	 * Slides to the previous item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.prev = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) - 1, speed);
	};

	/**
	 * Handles the end of an animation.
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onTransitionEnd = function(event) {

		// if css2 animation then event object is undefined
		if (event !== undefined) {
			event.stopPropagation();

			// Catch only owl-stage transitionEnd event
			if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
				return false;
			}
		}

		this.leave('animating');
		this.trigger('translated');
	};

	/**
	 * Gets viewport width.
	 * @protected
	 * @return {Number} - The width in pixel.
	 */
	Owl.prototype.viewport = function() {
		var width;
		if (this.options.responsiveBaseElement !== window) {
			width = $(this.options.responsiveBaseElement).width();
		} else if (window.innerWidth) {
			width = window.innerWidth;
		} else if (document.documentElement && document.documentElement.clientWidth) {
			width = document.documentElement.clientWidth;
		} else {
			console.warn('Can not detect viewport width.');
		}
		return width;
	};

	/**
	 * Replaces the current content.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The new content.
	 */
	Owl.prototype.replace = function(content) {
		this.$stage.empty();
		this._items = [];

		if (content) {
			content = (content instanceof jQuery) ? content : $(content);
		}

		if (this.settings.nestedItemSelector) {
			content = content.find('.' + this.settings.nestedItemSelector);
		}

		content.filter(function() {
			return this.nodeType === 1;
		}).each($.proxy(function(index, item) {
			item = this.prepare(item);
			this.$stage.append(item);
			this._items.push(item);
			this._mergers.push(item.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		}, this));

		this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);

		this.invalidate('items');
	};

	/**
	 * Adds an item.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The item content to add.
	 * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
	 */
	Owl.prototype.add = function(content, position) {
		var current = this.relative(this._current);

		position = position === undefined ? this._items.length : this.normalize(position, true);
		content = content instanceof jQuery ? content : $(content);

		this.trigger('add', { content: content, position: position });

		content = this.prepare(content);

		if (this._items.length === 0 || position === this._items.length) {
			this._items.length === 0 && this.$stage.append(content);
			this._items.length !== 0 && this._items[position - 1].after(content);
			this._items.push(content);
			this._mergers.push(content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		} else {
			this._items[position].before(content);
			this._items.splice(position, 0, content);
			this._mergers.splice(position, 0, content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		}

		this._items[current] && this.reset(this._items[current].index());

		this.invalidate('items');

		this.trigger('added', { content: content, position: position });
	};

	/**
	 * Removes an item by its position.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {Number} position - The relative position of the item to remove.
	 */
	Owl.prototype.remove = function(position) {
		position = this.normalize(position, true);

		if (position === undefined) {
			return;
		}

		this.trigger('remove', { content: this._items[position], position: position });

		this._items[position].remove();
		this._items.splice(position, 1);
		this._mergers.splice(position, 1);

		this.invalidate('items');

		this.trigger('removed', { content: null, position: position });
	};

	/**
	 * Preloads images with auto width.
	 * @todo Replace by a more generic approach
	 * @protected
	 */
	Owl.prototype.preloadAutoWidthImages = function(images) {
		images.each($.proxy(function(i, element) {
			this.enter('pre-loading');
			element = $(element);
			$(new Image()).one('load', $.proxy(function(e) {
				element.attr('src', e.target.src);
				element.css('opacity', 1);
				this.leave('pre-loading');
				!this.is('pre-loading') && !this.is('initializing') && this.refresh();
			}, this)).attr('src', element.attr('src') || element.attr('data-src') || element.attr('data-src-retina'));
		}, this));
	};

	/**
	 * Destroys the carousel.
	 * @public
	 */
	Owl.prototype.destroy = function() {

		this.$element.off('.owl.core');
		this.$stage.off('.owl.core');
		$(document).off('.owl.core');

		if (this.settings.responsive !== false) {
			window.clearTimeout(this.resizeTimer);
			this.off(window, 'resize', this._handlers.onThrottledResize);
		}

		for (var i in this._plugins) {
			this._plugins[i].destroy();
		}

		this.$stage.children('.cloned').remove();

		this.$stage.unwrap();
		this.$stage.children().contents().unwrap();
		this.$stage.children().unwrap();

		this.$element
			.removeClass(this.options.refreshClass)
			.removeClass(this.options.loadingClass)
			.removeClass(this.options.loadedClass)
			.removeClass(this.options.rtlClass)
			.removeClass(this.options.dragClass)
			.removeClass(this.options.grabClass)
			.attr('class', this.$element.attr('class').replace(new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'), ''))
			.removeData('owl.carousel');
	};

	/**
	 * Operators to calculate right-to-left and left-to-right.
	 * @protected
	 * @param {Number} [a] - The left side operand.
	 * @param {String} [o] - The operator.
	 * @param {Number} [b] - The right side operand.
	 */
	Owl.prototype.op = function(a, o, b) {
		var rtl = this.settings.rtl;
		switch (o) {
			case '<':
				return rtl ? a > b : a < b;
			case '>':
				return rtl ? a < b : a > b;
			case '>=':
				return rtl ? a <= b : a >= b;
			case '<=':
				return rtl ? a >= b : a <= b;
			default:
				break;
		}
	};

	/**
	 * Attaches to an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The event handler to attach.
	 * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
	 */
	Owl.prototype.on = function(element, event, listener, capture) {
		if (element.addEventListener) {
			element.addEventListener(event, listener, capture);
		} else if (element.attachEvent) {
			element.attachEvent('on' + event, listener);
		}
	};

	/**
	 * Detaches from an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The attached event handler to detach.
	 * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
	 */
	Owl.prototype.off = function(element, event, listener, capture) {
		if (element.removeEventListener) {
			element.removeEventListener(event, listener, capture);
		} else if (element.detachEvent) {
			element.detachEvent('on' + event, listener);
		}
	};

	/**
	 * Triggers a public event.
	 * @todo Remove `status`, `relatedTarget` should be used instead.
	 * @protected
	 * @param {String} name - The event name.
	 * @param {*} [data=null] - The event data.
	 * @param {String} [namespace=carousel] - The event namespace.
	 * @param {String} [state] - The state which is associated with the event.
	 * @param {Boolean} [enter=false] - Indicates if the call enters the specified state or not.
	 * @returns {Event} - The event arguments.
	 */
	Owl.prototype.trigger = function(name, data, namespace, state, enter) {
		var status = {
			item: { count: this._items.length, index: this.current() }
		}, handler = $.camelCase(
			$.grep([ 'on', name, namespace ], function(v) { return v })
				.join('-').toLowerCase()
		), event = $.Event(
			[ name, 'owl', namespace || 'carousel' ].join('.').toLowerCase(),
			$.extend({ relatedTarget: this }, status, data)
		);

		if (!this._supress[name]) {
			$.each(this._plugins, function(name, plugin) {
				if (plugin.onTrigger) {
					plugin.onTrigger(event);
				}
			});

			this.register({ type: Owl.Type.Event, name: name });
			this.$element.trigger(event);

			if (this.settings && typeof this.settings[handler] === 'function') {
				this.settings[handler].call(this, event);
			}
		}

		return event;
	};

	/**
	 * Enters a state.
	 * @param name - The state name.
	 */
	Owl.prototype.enter = function(name) {
		$.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
			if (this._states.current[name] === undefined) {
				this._states.current[name] = 0;
			}

			this._states.current[name]++;
		}, this));
	};

	/**
	 * Leaves a state.
	 * @param name - The state name.
	 */
	Owl.prototype.leave = function(name) {
		$.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
			this._states.current[name]--;
		}, this));
	};

	/**
	 * Registers an event or state.
	 * @public
	 * @param {Object} object - The event or state to register.
	 */
	Owl.prototype.register = function(object) {
		if (object.type === Owl.Type.Event) {
			if (!$.event.special[object.name]) {
				$.event.special[object.name] = {};
			}

			if (!$.event.special[object.name].owl) {
				var _default = $.event.special[object.name]._default;
				$.event.special[object.name]._default = function(e) {
					if (_default && _default.apply && (!e.namespace || e.namespace.indexOf('owl') === -1)) {
						return _default.apply(this, arguments);
					}
					return e.namespace && e.namespace.indexOf('owl') > -1;
				};
				$.event.special[object.name].owl = true;
			}
		} else if (object.type === Owl.Type.State) {
			if (!this._states.tags[object.name]) {
				this._states.tags[object.name] = object.tags;
			} else {
				this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
			}

			this._states.tags[object.name] = $.grep(this._states.tags[object.name], $.proxy(function(tag, i) {
				return $.inArray(tag, this._states.tags[object.name]) === i;
			}, this));
		}
	};

	/**
	 * Suppresses events.
	 * @protected
	 * @param {Array.<String>} events - The events to suppress.
	 */
	Owl.prototype.suppress = function(events) {
		$.each(events, $.proxy(function(index, event) {
			this._supress[event] = true;
		}, this));
	};

	/**
	 * Releases suppressed events.
	 * @protected
	 * @param {Array.<String>} events - The events to release.
	 */
	Owl.prototype.release = function(events) {
		$.each(events, $.proxy(function(index, event) {
			delete this._supress[event];
		}, this));
	};

	/**
	 * Gets unified pointer coordinates from event.
	 * @todo #261
	 * @protected
	 * @param {Event} - The `mousedown` or `touchstart` event.
	 * @returns {Object} - Contains `x` and `y` coordinates of current pointer position.
	 */
	Owl.prototype.pointer = function(event) {
		var result = { x: null, y: null };

		event = event.originalEvent || event || window.event;

		event = event.touches && event.touches.length ?
			event.touches[0] : event.changedTouches && event.changedTouches.length ?
				event.changedTouches[0] : event;

		if (event.pageX) {
			result.x = event.pageX;
			result.y = event.pageY;
		} else {
			result.x = event.clientX;
			result.y = event.clientY;
		}

		return result;
	};

	/**
	 * Determines if the input is a Number or something that can be coerced to a Number
	 * @protected
	 * @param {Number|String|Object|Array|Boolean|RegExp|Function|Symbol} - The input to be tested
	 * @returns {Boolean} - An indication if the input is a Number or can be coerced to a Number
	 */
	Owl.prototype.isNumeric = function(number) {
		return !isNaN(parseFloat(number));
	};

	/**
	 * Gets the difference of two vectors.
	 * @todo #261
	 * @protected
	 * @param {Object} - The first vector.
	 * @param {Object} - The second vector.
	 * @returns {Object} - The difference.
	 */
	Owl.prototype.difference = function(first, second) {
		return {
			x: first.x - second.x,
			y: first.y - second.y
		};
	};

	/**
	 * The jQuery Plugin for the Owl Carousel
	 * @todo Navigation plugin `next` and `prev`
	 * @public
	 */
	$.fn.owlCarousel = function(option) {
		var args = Array.prototype.slice.call(arguments, 1);

		return this.each(function() {
			var $this = $(this),
				data = $this.data('owl.carousel');

			if (!data) {
				data = new Owl(this, typeof option == 'object' && option);
				$this.data('owl.carousel', data);

				$.each([
					'next', 'prev', 'to', 'destroy', 'refresh', 'replace', 'add', 'remove'
				], function(i, event) {
					data.register({ type: Owl.Type.Event, name: event });
					data.$element.on(event + '.owl.carousel.core', $.proxy(function(e) {
						if (e.namespace && e.relatedTarget !== this) {
							this.suppress([ event ]);
							data[event].apply(this, [].slice.call(arguments, 1));
							this.release([ event ]);
						}
					}, data));
				});
			}

			if (typeof option == 'string' && option.charAt(0) !== '_') {
				data[option].apply(data, args);
			}
		});
	};

	/**
	 * The constructor for the jQuery Plugin
	 * @public
	 */
	$.fn.owlCarousel.Constructor = Owl;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoRefresh Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the auto refresh plugin.
	 * @class The Auto Refresh Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var AutoRefresh = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Refresh interval.
		 * @protected
		 * @type {number}
		 */
		this._interval = null;

		/**
		 * Whether the element is currently visible or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._visible = null;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoRefresh) {
					this.watch();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoRefresh.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	AutoRefresh.Defaults = {
		autoRefresh: true,
		autoRefreshInterval: 500
	};

	/**
	 * Watches the element.
	 */
	AutoRefresh.prototype.watch = function() {
		if (this._interval) {
			return;
		}

		this._visible = this._core.$element.is(':visible');
		this._interval = window.setInterval($.proxy(this.refresh, this), this._core.settings.autoRefreshInterval);
	};

	/**
	 * Refreshes the element.
	 */
	AutoRefresh.prototype.refresh = function() {
		if (this._core.$element.is(':visible') === this._visible) {
			return;
		}

		this._visible = !this._visible;

		this._core.$element.toggleClass('owl-hidden', !this._visible);

		this._visible && (this._core.invalidate('width') && this._core.refresh());
	};

	/**
	 * Destroys the plugin.
	 */
	AutoRefresh.prototype.destroy = function() {
		var handler, property;

		window.clearInterval(this._interval);

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh;

})(window.Zepto || window.jQuery, window, document);

/**
 * Lazy Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the lazy plugin.
	 * @class The Lazy Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Lazy = function(carousel) {

		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Already loaded items.
		 * @protected
		 * @type {Array.<jQuery>}
		 */
		this._loaded = [];

		/**
		 * Event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel change.owl.carousel resized.owl.carousel': $.proxy(function(e) {
				if (!e.namespace) {
					return;
				}

				if (!this._core.settings || !this._core.settings.lazyLoad) {
					return;
				}

				if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
					var settings = this._core.settings,
						n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
						i = ((settings.center && n * -1) || 0),
						position = (e.property && e.property.value !== undefined ? e.property.value : this._core.current()) + i,
						clones = this._core.clones().length,
						load = $.proxy(function(i, v) { this.load(v) }, this);

					while (i++ < n) {
						this.load(clones / 2 + this._core.relative(position));
						clones && $.each(this._core.clones(this._core.relative(position)), load);
						position++;
					}
				}
			}, this)
		};

		// set the default options
		this._core.options = $.extend({}, Lazy.Defaults, this._core.options);

		// register event handler
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Lazy.Defaults = {
		lazyLoad: false
	};

	/**
	 * Loads all resources of an item at the specified position.
	 * @param {Number} position - The absolute position of the item.
	 * @protected
	 */
	Lazy.prototype.load = function(position) {
		var $item = this._core.$stage.children().eq(position),
			$elements = $item && $item.find('.owl-lazy');

		if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
			return;
		}

		$elements.each($.proxy(function(index, element) {
			var $element = $(element), image,
				url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src');

			this._core.trigger('load', { element: $element, url: url }, 'lazy');

			if ($element.is('img')) {
				$element.one('load.owl.lazy', $.proxy(function() {
					$element.css('opacity', 1);
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this)).attr('src', url);
			} else {
				image = new Image();
				image.onload = $.proxy(function() {
					$element.css({
						'background-image': 'url("' + url + '")',
						'opacity': '1'
					});
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this);
				image.src = url;
			}
		}, this));

		this._loaded.push($item.get(0));
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Lazy.prototype.destroy = function() {
		var handler, property;

		for (handler in this.handlers) {
			this._core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoHeight Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the auto height plugin.
	 * @class The Auto Height Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var AutoHeight = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight) {
					this.update();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight && e.property.name == 'position'){
					this.update();
				}
			}, this),
			'loaded.owl.lazy': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight
					&& e.element.closest('.' + this._core.settings.itemClass).index() === this._core.current()) {
					this.update();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	AutoHeight.Defaults = {
		autoHeight: false,
		autoHeightClass: 'owl-height'
	};

	/**
	 * Updates the view.
	 */
	AutoHeight.prototype.update = function() {
		var start = this._core._current,
			end = start + this._core.settings.items,
			visible = this._core.$stage.children().toArray().slice(start, end),
			heights = [],
			maxheight = 0;

		$.each(visible, function(index, item) {
			heights.push($(item).height());
		});

		maxheight = Math.max.apply(null, heights);

		this._core.$stage.parent()
			.height(maxheight)
			.addClass(this._core.settings.autoHeightClass);
	};

	AutoHeight.prototype.destroy = function() {
		var handler, property;

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;

})(window.Zepto || window.jQuery, window, document);

/**
 * Video Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the video plugin.
	 * @class The Video Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Video = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Cache all video URLs.
		 * @protected
		 * @type {Object}
		 */
		this._videos = {};

		/**
		 * Current playing item.
		 * @protected
		 * @type {jQuery}
		 */
		this._playing = null;

		/**
		 * All event handlers.
		 * @todo The cloned content removale is too late
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					this._core.register({ type: 'state', name: 'playing', tags: [ 'interacting' ] });
				}
			}, this),
			'resize.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.video && this.isInFullScreen()) {
					e.preventDefault();
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.is('resizing')) {
					this._core.$stage.find('.cloned .owl-video-frame').remove();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'position' && this._playing) {
					this.stop();
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				if (!e.namespace) {
					return;
				}

				var $element = $(e.content).find('.owl-video');

				if ($element.length) {
					$element.css('display', 'none');
					this.fetch($element, $(e.content));
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Video.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);

		this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function(e) {
			this.play(e);
		}, this));
	};

	/**
	 * Default options.
	 * @public
	 */
	Video.Defaults = {
		video: false,
		videoHeight: false,
		videoWidth: false
	};

	/**
	 * Gets the video ID and the type (YouTube/Vimeo/vzaar only).
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {jQuery} item - The item containing the video.
	 */
	Video.prototype.fetch = function(target, item) {
			var type = (function() {
					if (target.attr('data-vimeo-id')) {
						return 'vimeo';
					} else if (target.attr('data-vzaar-id')) {
						return 'vzaar'
					} else {
						return 'youtube';
					}
				})(),
				id = target.attr('data-vimeo-id') || target.attr('data-youtube-id') || target.attr('data-vzaar-id'),
				width = target.attr('data-width') || this._core.settings.videoWidth,
				height = target.attr('data-height') || this._core.settings.videoHeight,
				url = target.attr('href');

		if (url) {

			/*
					Parses the id's out of the following urls (and probably more):
					https://www.youtube.com/watch?v=:id
					https://youtu.be/:id
					https://vimeo.com/:id
					https://vimeo.com/channels/:channel/:id
					https://vimeo.com/groups/:group/videos/:id
					https://app.vzaar.com/videos/:id

					Visual example: https://regexper.com/#(http%3A%7Chttps%3A%7C)%5C%2F%5C%2F(player.%7Cwww.%7Capp.)%3F(vimeo%5C.com%7Cyoutu(be%5C.com%7C%5C.be%7Cbe%5C.googleapis%5C.com)%7Cvzaar%5C.com)%5C%2F(video%5C%2F%7Cvideos%5C%2F%7Cembed%5C%2F%7Cchannels%5C%2F.%2B%5C%2F%7Cgroups%5C%2F.%2B%5C%2F%7Cwatch%5C%3Fv%3D%7Cv%5C%2F)%3F(%5BA-Za-z0-9._%25-%5D*)(%5C%26%5CS%2B)%3F
			*/

			id = url.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);

			if (id[3].indexOf('youtu') > -1) {
				type = 'youtube';
			} else if (id[3].indexOf('vimeo') > -1) {
				type = 'vimeo';
			} else if (id[3].indexOf('vzaar') > -1) {
				type = 'vzaar';
			} else {
				throw new Error('Video URL not supported.');
			}
			id = id[6];
		} else {
			throw new Error('Missing video URL.');
		}

		this._videos[url] = {
			type: type,
			id: id,
			width: width,
			height: height
		};

		item.attr('data-video', url);

		this.thumbnail(target, this._videos[url]);
	};

	/**
	 * Creates video thumbnail.
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {Object} info - The video info object.
	 * @see `fetch`
	 */
	Video.prototype.thumbnail = function(target, video) {
		var tnLink,
			icon,
			path,
			dimensions = video.width && video.height ? 'style="width:' + video.width + 'px;height:' + video.height + 'px;"' : '',
			customTn = target.find('img'),
			srcType = 'src',
			lazyClass = '',
			settings = this._core.settings,
			create = function(path) {
				icon = '<div class="owl-video-play-icon"></div>';

				if (settings.lazyLoad) {
					tnLink = '<div class="owl-video-tn ' + lazyClass + '" ' + srcType + '="' + path + '"></div>';
				} else {
					tnLink = '<div class="owl-video-tn" style="opacity:1;background-image:url(' + path + ')"></div>';
				}
				target.after(tnLink);
				target.after(icon);
			};

		// wrap video content into owl-video-wrapper div
		target.wrap('<div class="owl-video-wrapper"' + dimensions + '></div>');

		if (this._core.settings.lazyLoad) {
			srcType = 'data-src';
			lazyClass = 'owl-lazy';
		}

		// custom thumbnail
		if (customTn.length) {
			create(customTn.attr(srcType));
			customTn.remove();
			return false;
		}

		if (video.type === 'youtube') {
			path = "//img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
			create(path);
		} else if (video.type === 'vimeo') {
			$.ajax({
				type: 'GET',
				url: '//vimeo.com/api/v2/video/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function(data) {
					path = data[0].thumbnail_large;
					create(path);
				}
			});
		} else if (video.type === 'vzaar') {
			$.ajax({
				type: 'GET',
				url: '//vzaar.com/api/videos/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function(data) {
					path = data.framegrab_url;
					create(path);
				}
			});
		}
	};

	/**
	 * Stops the current video.
	 * @public
	 */
	Video.prototype.stop = function() {
		this._core.trigger('stop', null, 'video');
		this._playing.find('.owl-video-frame').remove();
		this._playing.removeClass('owl-video-playing');
		this._playing = null;
		this._core.leave('playing');
		this._core.trigger('stopped', null, 'video');
	};

	/**
	 * Starts the current video.
	 * @public
	 * @param {Event} event - The event arguments.
	 */
	Video.prototype.play = function(event) {
		var target = $(event.target),
			item = target.closest('.' + this._core.settings.itemClass),
			video = this._videos[item.attr('data-video')],
			width = video.width || '100%',
			height = video.height || this._core.$stage.height(),
			html;

		if (this._playing) {
			return;
		}

		this._core.enter('playing');
		this._core.trigger('play', null, 'video');

		item = this._core.items(this._core.relative(item.index()));

		this._core.reset(item.index());

		if (video.type === 'youtube') {
			html = '<iframe width="' + width + '" height="' + height + '" src="//www.youtube.com/embed/' +
				video.id + '?autoplay=1&rel=0&v=' + video.id + '" frameborder="0" allowfullscreen></iframe>';
		} else if (video.type === 'vimeo') {
			html = '<iframe src="//player.vimeo.com/video/' + video.id +
				'?autoplay=1" width="' + width + '" height="' + height +
				'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
		} else if (video.type === 'vzaar') {
			html = '<iframe frameborder="0"' + 'height="' + height + '"' + 'width="' + width +
				'" allowfullscreen mozallowfullscreen webkitAllowFullScreen ' +
				'src="//view.vzaar.com/' + video.id + '/player?autoplay=true"></iframe>';
		}

		$('<div class="owl-video-frame">' + html + '</div>').insertAfter(item.find('.owl-video'));

		this._playing = item.addClass('owl-video-playing');
	};

	/**
	 * Checks whether an video is currently in full screen mode or not.
	 * @todo Bad style because looks like a readonly method but changes members.
	 * @protected
	 * @returns {Boolean}
	 */
	Video.prototype.isInFullScreen = function() {
		var element = document.fullscreenElement || document.mozFullScreenElement ||
				document.webkitFullscreenElement;

		return element && $(element).parent().hasClass('owl-video-frame');
	};

	/**
	 * Destroys the plugin.
	 */
	Video.prototype.destroy = function() {
		var handler, property;

		this._core.$element.off('click.owl.video');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Video = Video;

})(window.Zepto || window.jQuery, window, document);

/**
 * Animate Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the animate plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Animate = function(scope) {
		this.core = scope;
		this.core.options = $.extend({}, Animate.Defaults, this.core.options);
		this.swapping = true;
		this.previous = undefined;
		this.next = undefined;

		this.handlers = {
			'change.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name == 'position') {
					this.previous = this.core.current();
					this.next = e.property.value;
				}
			}, this),
			'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					this.swapping = e.type == 'translated';
				}
			}, this),
			'translate.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
					this.swap();
				}
			}, this)
		};

		this.core.$element.on(this.handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Animate.Defaults = {
		animateOut: false,
		animateIn: false
	};

	/**
	 * Toggles the animation classes whenever an translations starts.
	 * @protected
	 * @returns {Boolean|undefined}
	 */
	Animate.prototype.swap = function() {

		if (this.core.settings.items !== 1) {
			return;
		}

		if (!$.support.animation || !$.support.transition) {
			return;
		}

		this.core.speed(0);

		var left,
			clear = $.proxy(this.clear, this),
			previous = this.core.$stage.children().eq(this.previous),
			next = this.core.$stage.children().eq(this.next),
			incoming = this.core.settings.animateIn,
			outgoing = this.core.settings.animateOut;

		if (this.core.current() === this.previous) {
			return;
		}

		if (outgoing) {
			left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
			previous.one($.support.animation.end, clear)
				.css( { 'left': left + 'px' } )
				.addClass('animated owl-animated-out')
				.addClass(outgoing);
		}

		if (incoming) {
			next.one($.support.animation.end, clear)
				.addClass('animated owl-animated-in')
				.addClass(incoming);
		}
	};

	Animate.prototype.clear = function(e) {
		$(e.target).css( { 'left': '' } )
			.removeClass('animated owl-animated-out owl-animated-in')
			.removeClass(this.core.settings.animateIn)
			.removeClass(this.core.settings.animateOut);
		this.core.onTransitionEnd();
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Animate.prototype.destroy = function() {
		var handler, property;

		for (handler in this.handlers) {
			this.core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Animate = Animate;

})(window.Zepto || window.jQuery, window, document);

/**
 * Autoplay Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the autoplay plugin.
	 * @class The Autoplay Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Autoplay = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * The autoplay timeout.
		 * @type {Timeout}
		 */
		this._timeout = null;

		/**
		 * Indicates whenever the autoplay is paused.
		 * @type {Boolean}
		 */
		this._paused = false;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'settings') {
					if (this._core.settings.autoplay) {
						this.play();
					} else {
						this.stop();
					}
				} else if (e.namespace && e.property.name === 'position') {
					//console.log('play?', e);
					if (this._core.settings.autoplay) {
						this._setAutoPlayInterval();
					}
				}
			}, this),
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoplay) {
					this.play();
				}
			}, this),
			'play.owl.autoplay': $.proxy(function(e, t, s) {
				if (e.namespace) {
					this.play(t, s);
				}
			}, this),
			'stop.owl.autoplay': $.proxy(function(e) {
				if (e.namespace) {
					this.stop();
				}
			}, this),
			'mouseover.owl.autoplay': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.pause();
				}
			}, this),
			'mouseleave.owl.autoplay': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.play();
				}
			}, this),
			'touchstart.owl.core': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.pause();
				}
			}, this),
			'touchend.owl.core': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause) {
					this.play();
				}
			}, this)
		};

		// register event handlers
		this._core.$element.on(this._handlers);

		// set default options
		this._core.options = $.extend({}, Autoplay.Defaults, this._core.options);
	};

	/**
	 * Default options.
	 * @public
	 */
	Autoplay.Defaults = {
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		autoplaySpeed: false
	};

	/**
	 * Starts the autoplay.
	 * @public
	 * @param {Number} [timeout] - The interval before the next animation starts.
	 * @param {Number} [speed] - The animation speed for the animations.
	 */
	Autoplay.prototype.play = function(timeout, speed) {
		this._paused = false;

		if (this._core.is('rotating')) {
			return;
		}

		this._core.enter('rotating');

		this._setAutoPlayInterval();
	};

	/**
	 * Gets a new timeout
	 * @private
	 * @param {Number} [timeout] - The interval before the next animation starts.
	 * @param {Number} [speed] - The animation speed for the animations.
	 * @return {Timeout}
	 */
	Autoplay.prototype._getNextTimeout = function(timeout, speed) {
		if ( this._timeout ) {
			window.clearTimeout(this._timeout);
		}
		return window.setTimeout($.proxy(function() {
			if (this._paused || this._core.is('busy') || this._core.is('interacting') || document.hidden) {
				return;
			}
			this._core.next(speed || this._core.settings.autoplaySpeed);
		}, this), timeout || this._core.settings.autoplayTimeout);
	};

	/**
	 * Sets autoplay in motion.
	 * @private
	 */
	Autoplay.prototype._setAutoPlayInterval = function() {
		this._timeout = this._getNextTimeout();
	};

	/**
	 * Stops the autoplay.
	 * @public
	 */
	Autoplay.prototype.stop = function() {
		if (!this._core.is('rotating')) {
			return;
		}

		window.clearTimeout(this._timeout);
		this._core.leave('rotating');
	};

	/**
	 * Stops the autoplay.
	 * @public
	 */
	Autoplay.prototype.pause = function() {
		if (!this._core.is('rotating')) {
			return;
		}

		this._paused = true;
	};

	/**
	 * Destroys the plugin.
	 */
	Autoplay.prototype.destroy = function() {
		var handler, property;

		this.stop();

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;

})(window.Zepto || window.jQuery, window, document);

/**
 * Navigation Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
	'use strict';

	/**
	 * Creates the navigation plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} carousel - The Owl Carousel.
	 */
	var Navigation = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Indicates whether the plugin is initialized or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._initialized = false;

		/**
		 * The current paging indexes.
		 * @protected
		 * @type {Array}
		 */
		this._pages = [];

		/**
		 * All DOM elements of the user interface.
		 * @protected
		 * @type {Object}
		 */
		this._controls = {};

		/**
		 * Markup for an indicator.
		 * @protected
		 * @type {Array.<String>}
		 */
		this._templates = [];

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * Overridden methods of the carousel.
		 * @protected
		 * @type {Object}
		 */
		this._overrides = {
			next: this._core.next,
			prev: this._core.prev,
			to: this._core.to
		};

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'prepared.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.push('<div class="' + this._core.settings.dotClass + '">' +
						$(e.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot') + '</div>');
				}
			}, this),
			'added.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.splice(e.position, 0, this._templates.pop());
				}
			}, this),
			'remove.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.splice(e.position, 1);
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name == 'position') {
					this.draw();
				}
			}, this),
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && !this._initialized) {
					this._core.trigger('initialize', null, 'navigation');
					this.initialize();
					this.update();
					this.draw();
					this._initialized = true;
					this._core.trigger('initialized', null, 'navigation');
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._initialized) {
					this._core.trigger('refresh', null, 'navigation');
					this.update();
					this.draw();
					this._core.trigger('refreshed', null, 'navigation');
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Navigation.Defaults, this._core.options);

		// register event handlers
		this.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 * @todo Rename `slideBy` to `navBy`
	 */
	Navigation.Defaults = {
		nav: false,
		navText: [ 'prev', 'next' ],
		navSpeed: false,
		navElement: 'div',
		navContainer: false,
		navContainerClass: 'owl-nav',
		navClass: [ 'owl-prev', 'owl-next' ],
		slideBy: 1,
		dotClass: 'owl-dot',
		dotsClass: 'owl-dots',
		dots: true,
		dotsEach: false,
		dotsData: false,
		dotsSpeed: false,
		dotsContainer: false
	};

	/**
	 * Initializes the layout of the plugin and extends the carousel.
	 * @protected
	 */
	Navigation.prototype.initialize = function() {
		var override,
			settings = this._core.settings;

		// create DOM structure for relative navigation
		this._controls.$relative = (settings.navContainer ? $(settings.navContainer)
			: $('<div>').addClass(settings.navContainerClass).appendTo(this.$element)).addClass('disabled');

		this._controls.$previous = $('<' + settings.navElement + '>')
			.addClass(settings.navClass[0])
			.html(settings.navText[0])
			.prependTo(this._controls.$relative)
			.on('click', $.proxy(function(e) {
				this.prev(settings.navSpeed);
			}, this));
		this._controls.$next = $('<' + settings.navElement + '>')
			.addClass(settings.navClass[1])
			.html(settings.navText[1])
			.appendTo(this._controls.$relative)
			.on('click', $.proxy(function(e) {
				this.next(settings.navSpeed);
			}, this));

		// create DOM structure for absolute navigation
		if (!settings.dotsData) {
			this._templates = [ $('<div>')
				.addClass(settings.dotClass)
				.append($('<span>'))
				.prop('outerHTML') ];
		}

		this._controls.$absolute = (settings.dotsContainer ? $(settings.dotsContainer)
			: $('<div>').addClass(settings.dotsClass).appendTo(this.$element)).addClass('disabled');

		this._controls.$absolute.on('click', 'div', $.proxy(function(e) {
			var index = $(e.target).parent().is(this._controls.$absolute)
				? $(e.target).index() : $(e.target).parent().index();

			e.preventDefault();

			this.to(index, settings.dotsSpeed);
		}, this));

		// override public methods of the carousel
		for (override in this._overrides) {
			this._core[override] = $.proxy(this[override], this);
		}
	};

	/**
	 * Destroys the plugin.
	 * @protected
	 */
	Navigation.prototype.destroy = function() {
		var handler, control, property, override;

		for (handler in this._handlers) {
			this.$element.off(handler, this._handlers[handler]);
		}
		for (control in this._controls) {
			this._controls[control].remove();
		}
		for (override in this.overides) {
			this._core[override] = this._overrides[override];
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	/**
	 * Updates the internal state.
	 * @protected
	 */
	Navigation.prototype.update = function() {
		var i, j, k,
			lower = this._core.clones().length / 2,
			upper = lower + this._core.items().length,
			maximum = this._core.maximum(true),
			settings = this._core.settings,
			size = settings.center || settings.autoWidth || settings.dotsData
				? 1 : settings.dotsEach || settings.items;

		if (settings.slideBy !== 'page') {
			settings.slideBy = Math.min(settings.slideBy, settings.items);
		}

		if (settings.dots || settings.slideBy == 'page') {
			this._pages = [];

			for (i = lower, j = 0, k = 0; i < upper; i++) {
				if (j >= size || j === 0) {
					this._pages.push({
						start: Math.min(maximum, i - lower),
						end: i - lower + size - 1
					});
					if (Math.min(maximum, i - lower) === maximum) {
						break;
					}
					j = 0, ++k;
				}
				j += this._core.mergers(this._core.relative(i));
			}
		}
	};

	/**
	 * Draws the user interface.
	 * @todo The option `dotsData` wont work.
	 * @protected
	 */
	Navigation.prototype.draw = function() {
		var difference,
			settings = this._core.settings,
			disabled = this._core.items().length <= settings.items,
			index = this._core.relative(this._core.current()),
			loop = settings.loop || settings.rewind;

		this._controls.$relative.toggleClass('disabled', !settings.nav || disabled);

		if (settings.nav) {
			this._controls.$previous.toggleClass('disabled', !loop && index <= this._core.minimum(true));
			this._controls.$next.toggleClass('disabled', !loop && index >= this._core.maximum(true));
		}

		this._controls.$absolute.toggleClass('disabled', !settings.dots || disabled);

		if (settings.dots) {
			difference = this._pages.length - this._controls.$absolute.children().length;

			if (settings.dotsData && difference !== 0) {
				this._controls.$absolute.html(this._templates.join(''));
			} else if (difference > 0) {
				this._controls.$absolute.append(new Array(difference + 1).join(this._templates[0]));
			} else if (difference < 0) {
				this._controls.$absolute.children().slice(difference).remove();
			}

			this._controls.$absolute.find('.active').removeClass('active');
			this._controls.$absolute.children().eq($.inArray(this.current(), this._pages)).addClass('active');
		}
	};

	/**
	 * Extends event data.
	 * @protected
	 * @param {Event} event - The event object which gets thrown.
	 */
	Navigation.prototype.onTrigger = function(event) {
		var settings = this._core.settings;

		event.page = {
			index: $.inArray(this.current(), this._pages),
			count: this._pages.length,
			size: settings && (settings.center || settings.autoWidth || settings.dotsData
				? 1 : settings.dotsEach || settings.items)
		};
	};

	/**
	 * Gets the current page position of the carousel.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.current = function() {
		var current = this._core.relative(this._core.current());
		return $.grep(this._pages, $.proxy(function(page, index) {
			return page.start <= current && page.end >= current;
		}, this)).pop();
	};

	/**
	 * Gets the current succesor/predecessor position.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.getPosition = function(successor) {
		var position, length,
			settings = this._core.settings;

		if (settings.slideBy == 'page') {
			position = $.inArray(this.current(), this._pages);
			length = this._pages.length;
			successor ? ++position : --position;
			position = this._pages[((position % length) + length) % length].start;
		} else {
			position = this._core.relative(this._core.current());
			length = this._core.items().length;
			successor ? position += settings.slideBy : position -= settings.slideBy;
		}

		return position;
	};

	/**
	 * Slides to the next item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.next = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
	};

	/**
	 * Slides to the previous item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.prev = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
	};

	/**
	 * Slides to the specified item or page.
	 * @public
	 * @param {Number} position - The position of the item or page.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
	 */
	Navigation.prototype.to = function(position, speed, standard) {
		var length;

		if (!standard && this._pages.length) {
			length = this._pages.length;
			$.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
		} else {
			$.proxy(this._overrides.to, this._core)(position, speed);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;

})(window.Zepto || window.jQuery, window, document);

/**
 * Hash Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
	'use strict';

	/**
	 * Creates the hash plugin.
	 * @class The Hash Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Hash = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Hash index for the items.
		 * @protected
		 * @type {Object}
		 */
		this._hashes = {};

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.startPosition === 'URLHash') {
					$(window).trigger('hashchange.owl.navigation');
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					var hash = $(e.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash');

					if (!hash) {
						return;
					}

					this._hashes[hash] = e.content;
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'position') {
					var current = this._core.items(this._core.relative(this._core.current())),
						hash = $.map(this._hashes, function(item, hash) {
							return item === current ? hash : null;
						}).join();

					if (!hash || window.location.hash.slice(1) === hash) {
						return;
					}

					window.location.hash = hash;
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Hash.Defaults, this._core.options);

		// register the event handlers
		this.$element.on(this._handlers);

		// register event listener for hash navigation
		$(window).on('hashchange.owl.navigation', $.proxy(function(e) {
			var hash = window.location.hash.substring(1),
				items = this._core.$stage.children(),
				position = this._hashes[hash] && items.index(this._hashes[hash]);

			if (position === undefined || position === this._core.current()) {
				return;
			}

			this._core.to(this._core.relative(position), false, true);
		}, this));
	};

	/**
	 * Default options.
	 * @public
	 */
	Hash.Defaults = {
		URLhashListener: false
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Hash.prototype.destroy = function() {
		var handler, property;

		$(window).off('hashchange.owl.navigation');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Hash = Hash;

})(window.Zepto || window.jQuery, window, document);

/**
 * Support Plugin
 *
 * @version 2.1.0
 * @author Vivid Planet Software GmbH
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	var style = $('<support>').get(0).style,
		prefixes = 'Webkit Moz O ms'.split(' '),
		events = {
			transition: {
				end: {
					WebkitTransition: 'webkitTransitionEnd',
					MozTransition: 'transitionend',
					OTransition: 'oTransitionEnd',
					transition: 'transitionend'
				}
			},
			animation: {
				end: {
					WebkitAnimation: 'webkitAnimationEnd',
					MozAnimation: 'animationend',
					OAnimation: 'oAnimationEnd',
					animation: 'animationend'
				}
			}
		},
		tests = {
			csstransforms: function() {
				return !!test('transform');
			},
			csstransforms3d: function() {
				return !!test('perspective');
			},
			csstransitions: function() {
				return !!test('transition');
			},
			cssanimations: function() {
				return !!test('animation');
			}
		};

	function test(property, prefixed) {
		var result = false,
			upper = property.charAt(0).toUpperCase() + property.slice(1);

		$.each((property + ' ' + prefixes.join(upper + ' ') + upper).split(' '), function(i, property) {
			if (style[property] !== undefined) {
				result = prefixed ? property : true;
				return false;
			}
		});

		return result;
	}

	function prefixed(property) {
		return test(property, true);
	}

	if (tests.csstransitions()) {
		/* jshint -W053 */
		$.support.transition = new String(prefixed('transition'))
		$.support.transition.end = events.transition.end[ $.support.transition ];
	}

	if (tests.cssanimations()) {
		/* jshint -W053 */
		$.support.animation = new String(prefixed('animation'))
		$.support.animation.end = events.animation.end[ $.support.animation ];
	}

	if (tests.csstransforms()) {
		/* jshint -W053 */
		$.support.transform = new String(prefixed('transform'));
		$.support.transform3d = tests.csstransforms3d();
	}

})(window.Zepto || window.jQuery, window, document);

/*!
 * jQuery Validation Plugin v1.19.0
 *
 * https://jqueryvalidation.org/
 *
 * Copyright (c) 2018 Jörn Zaefferer
 * Released under the MIT license
 */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( ["jquery"], factory );
	} else if (typeof module === "object" && module.exports) {
		module.exports = factory( require( "jquery" ) );
	} else {
		factory( jQuery );
	}
}(function( $ ) {

$.extend( $.fn, {

	// https://jqueryvalidation.org/validate/
	validate: function( options ) {

		// If nothing is selected, return nothing; can't chain anyway
		if ( !this.length ) {
			if ( options && options.debug && window.console ) {
				console.warn( "Nothing selected, can't validate, returning nothing." );
			}
			return;
		}

		// Check if a validator for this form was already created
		var validator = $.data( this[ 0 ], "validator" );
		if ( validator ) {
			return validator;
		}

		// Add novalidate tag if HTML5.
		this.attr( "novalidate", "novalidate" );

		validator = new $.validator( options, this[ 0 ] );
		$.data( this[ 0 ], "validator", validator );

		if ( validator.settings.onsubmit ) {

			this.on( "click.validate", ":submit", function( event ) {

				// Track the used submit button to properly handle scripted
				// submits later.
				validator.submitButton = event.currentTarget;

				// Allow suppressing validation by adding a cancel class to the submit button
				if ( $( this ).hasClass( "cancel" ) ) {
					validator.cancelSubmit = true;
				}

				// Allow suppressing validation by adding the html5 formnovalidate attribute to the submit button
				if ( $( this ).attr( "formnovalidate" ) !== undefined ) {
					validator.cancelSubmit = true;
				}
			} );

			// Validate the form on submit
			this.on( "submit.validate", function( event ) {
				if ( validator.settings.debug ) {

					// Prevent form submit to be able to see console output
					event.preventDefault();
				}

				function handle() {
					var hidden, result;

					// Insert a hidden input as a replacement for the missing submit button
					// The hidden input is inserted in two cases:
					//   - A user defined a `submitHandler`
					//   - There was a pending request due to `remote` method and `stopRequest()`
					//     was called to submit the form in case it's valid
					if ( validator.submitButton && ( validator.settings.submitHandler || validator.formSubmitted ) ) {
						hidden = $( "<input type='hidden'/>" )
							.attr( "name", validator.submitButton.name )
							.val( $( validator.submitButton ).val() )
							.appendTo( validator.currentForm );
					}

					if ( validator.settings.submitHandler && !validator.settings.debug ) {
						result = validator.settings.submitHandler.call( validator, validator.currentForm, event );
						if ( hidden ) {

							// And clean up afterwards; thanks to no-block-scope, hidden can be referenced
							hidden.remove();
						}
						if ( result !== undefined ) {
							return result;
						}
						return false;
					}
					return true;
				}

				// Prevent submit for invalid forms or custom submit handlers
				if ( validator.cancelSubmit ) {
					validator.cancelSubmit = false;
					return handle();
				}
				if ( validator.form() ) {
					if ( validator.pendingRequest ) {
						validator.formSubmitted = true;
						return false;
					}
					return handle();
				} else {
					validator.focusInvalid();
					return false;
				}
			} );
		}

		return validator;
	},

	// https://jqueryvalidation.org/valid/
	valid: function() {
		var valid, validator, errorList;

		if ( $( this[ 0 ] ).is( "form" ) ) {
			valid = this.validate().form();
		} else {
			errorList = [];
			valid = true;
			validator = $( this[ 0 ].form ).validate();
			this.each( function() {
				valid = validator.element( this ) && valid;
				if ( !valid ) {
					errorList = errorList.concat( validator.errorList );
				}
			} );
			validator.errorList = errorList;
		}
		return valid;
	},

	// https://jqueryvalidation.org/rules/
	rules: function( command, argument ) {
		var element = this[ 0 ],
			isContentEditable = typeof this.attr( "contenteditable" ) !== "undefined" && this.attr( "contenteditable" ) !== "false",
			settings, staticRules, existingRules, data, param, filtered;

		// If nothing is selected, return empty object; can't chain anyway
		if ( element == null ) {
			return;
		}

		if ( !element.form && isContentEditable ) {
			element.form = this.closest( "form" )[ 0 ];
			element.name = this.attr( "name" );
		}

		if ( element.form == null ) {
			return;
		}

		if ( command ) {
			settings = $.data( element.form, "validator" ).settings;
			staticRules = settings.rules;
			existingRules = $.validator.staticRules( element );
			switch ( command ) {
			case "add":
				$.extend( existingRules, $.validator.normalizeRule( argument ) );

				// Remove messages from rules, but allow them to be set separately
				delete existingRules.messages;
				staticRules[ element.name ] = existingRules;
				if ( argument.messages ) {
					settings.messages[ element.name ] = $.extend( settings.messages[ element.name ], argument.messages );
				}
				break;
			case "remove":
				if ( !argument ) {
					delete staticRules[ element.name ];
					return existingRules;
				}
				filtered = {};
				$.each( argument.split( /\s/ ), function( index, method ) {
					filtered[ method ] = existingRules[ method ];
					delete existingRules[ method ];
				} );
				return filtered;
			}
		}

		data = $.validator.normalizeRules(
		$.extend(
			{},
			$.validator.classRules( element ),
			$.validator.attributeRules( element ),
			$.validator.dataRules( element ),
			$.validator.staticRules( element )
		), element );

		// Make sure required is at front
		if ( data.required ) {
			param = data.required;
			delete data.required;
			data = $.extend( { required: param }, data );
		}

		// Make sure remote is at back
		if ( data.remote ) {
			param = data.remote;
			delete data.remote;
			data = $.extend( data, { remote: param } );
		}

		return data;
	}
} );

// Custom selectors
$.extend( $.expr.pseudos || $.expr[ ":" ], {		// '|| $.expr[ ":" ]' here enables backwards compatibility to jQuery 1.7. Can be removed when dropping jQ 1.7.x support

	// https://jqueryvalidation.org/blank-selector/
	blank: function( a ) {
		return !$.trim( "" + $( a ).val() );
	},

	// https://jqueryvalidation.org/filled-selector/
	filled: function( a ) {
		var val = $( a ).val();
		return val !== null && !!$.trim( "" + val );
	},

	// https://jqueryvalidation.org/unchecked-selector/
	unchecked: function( a ) {
		return !$( a ).prop( "checked" );
	}
} );

// Constructor for validator
$.validator = function( options, form ) {
	this.settings = $.extend( true, {}, $.validator.defaults, options );
	this.currentForm = form;
	this.init();
};

// https://jqueryvalidation.org/jQuery.validator.format/
$.validator.format = function( source, params ) {
	if ( arguments.length === 1 ) {
		return function() {
			var args = $.makeArray( arguments );
			args.unshift( source );
			return $.validator.format.apply( this, args );
		};
	}
	if ( params === undefined ) {
		return source;
	}
	if ( arguments.length > 2 && params.constructor !== Array  ) {
		params = $.makeArray( arguments ).slice( 1 );
	}
	if ( params.constructor !== Array ) {
		params = [ params ];
	}
	$.each( params, function( i, n ) {
		source = source.replace( new RegExp( "\\{" + i + "\\}", "g" ), function() {
			return n;
		} );
	} );
	return source;
};

$.extend( $.validator, {

	defaults: {
		messages: {},
		groups: {},
		rules: {},
		errorClass: "error",
		pendingClass: "pending",
		validClass: "valid",
		errorElement: "label",
		focusCleanup: false,
		focusInvalid: true,
		errorContainer: $( [] ),
		errorLabelContainer: $( [] ),
		onsubmit: true,
		ignore: ":hidden",
		ignoreTitle: false,
		onfocusin: function( element ) {
			this.lastActive = element;

			// Hide error label and remove error class on focus if enabled
			if ( this.settings.focusCleanup ) {
				if ( this.settings.unhighlight ) {
					this.settings.unhighlight.call( this, element, this.settings.errorClass, this.settings.validClass );
				}
				this.hideThese( this.errorsFor( element ) );
			}
		},
		onfocusout: function( element ) {
			if ( !this.checkable( element ) && ( element.name in this.submitted || !this.optional( element ) ) ) {
				this.element( element );
			}
		},
		onkeyup: function( element, event ) {

			// Avoid revalidate the field when pressing one of the following keys
			// Shift       => 16
			// Ctrl        => 17
			// Alt         => 18
			// Caps lock   => 20
			// End         => 35
			// Home        => 36
			// Left arrow  => 37
			// Up arrow    => 38
			// Right arrow => 39
			// Down arrow  => 40
			// Insert      => 45
			// Num lock    => 144
			// AltGr key   => 225
			var excludedKeys = [
				16, 17, 18, 20, 35, 36, 37,
				38, 39, 40, 45, 144, 225
			];

			if ( event.which === 9 && this.elementValue( element ) === "" || $.inArray( event.keyCode, excludedKeys ) !== -1 ) {
				return;
			} else if ( element.name in this.submitted || element.name in this.invalid ) {
				this.element( element );
			}
		},
		onclick: function( element ) {

			// Click on selects, radiobuttons and checkboxes
			if ( element.name in this.submitted ) {
				this.element( element );

			// Or option elements, check parent select in that case
			} else if ( element.parentNode.name in this.submitted ) {
				this.element( element.parentNode );
			}
		},
		highlight: function( element, errorClass, validClass ) {
			if ( element.type === "radio" ) {
				this.findByName( element.name ).addClass( errorClass ).removeClass( validClass );
			} else {
				$( element ).addClass( errorClass ).removeClass( validClass );
			}
		},
		unhighlight: function( element, errorClass, validClass ) {
			if ( element.type === "radio" ) {
				this.findByName( element.name ).removeClass( errorClass ).addClass( validClass );
			} else {
				$( element ).removeClass( errorClass ).addClass( validClass );
			}
		}
	},

	// https://jqueryvalidation.org/jQuery.validator.setDefaults/
	setDefaults: function( settings ) {
		$.extend( $.validator.defaults, settings );
	},

	messages: {
		required: "This field is required.",
		remote: "Please fix this field.",
		email: "Please enter a valid email address.",
		url: "Please enter a valid URL.",
		date: "Please enter a valid date.",
		dateISO: "Please enter a valid date (ISO).",
		number: "Please enter a valid number.",
		digits: "Please enter only digits.",
		equalTo: "Please enter the same value again.",
		maxlength: $.validator.format( "Please enter no more than {0} characters." ),
		minlength: $.validator.format( "Please enter at least {0} characters." ),
		rangelength: $.validator.format( "Please enter a value between {0} and {1} characters long." ),
		range: $.validator.format( "Please enter a value between {0} and {1}." ),
		max: $.validator.format( "Please enter a value less than or equal to {0}." ),
		min: $.validator.format( "Please enter a value greater than or equal to {0}." ),
		step: $.validator.format( "Please enter a multiple of {0}." )
	},

	autoCreateRanges: false,

	prototype: {

		init: function() {
			this.labelContainer = $( this.settings.errorLabelContainer );
			this.errorContext = this.labelContainer.length && this.labelContainer || $( this.currentForm );
			this.containers = $( this.settings.errorContainer ).add( this.settings.errorLabelContainer );
			this.submitted = {};
			this.valueCache = {};
			this.pendingRequest = 0;
			this.pending = {};
			this.invalid = {};
			this.reset();

			var currentForm = this.currentForm,
				groups = ( this.groups = {} ),
				rules;
			$.each( this.settings.groups, function( key, value ) {
				if ( typeof value === "string" ) {
					value = value.split( /\s/ );
				}
				$.each( value, function( index, name ) {
					groups[ name ] = key;
				} );
			} );
			rules = this.settings.rules;
			$.each( rules, function( key, value ) {
				rules[ key ] = $.validator.normalizeRule( value );
			} );

			function delegate( event ) {
				var isContentEditable = typeof $( this ).attr( "contenteditable" ) !== "undefined" && $( this ).attr( "contenteditable" ) !== "false";

				// Set form expando on contenteditable
				if ( !this.form && isContentEditable ) {
					this.form = $( this ).closest( "form" )[ 0 ];
					this.name = $( this ).attr( "name" );
				}

				// Ignore the element if it belongs to another form. This will happen mainly
				// when setting the `form` attribute of an input to the id of another form.
				if ( currentForm !== this.form ) {
					return;
				}

				var validator = $.data( this.form, "validator" ),
					eventType = "on" + event.type.replace( /^validate/, "" ),
					settings = validator.settings;
				if ( settings[ eventType ] && !$( this ).is( settings.ignore ) ) {
					settings[ eventType ].call( validator, this, event );
				}
			}

			$( this.currentForm )
				.on( "focusin.validate focusout.validate keyup.validate",
					":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], " +
					"[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], " +
					"[type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], " +
					"[type='radio'], [type='checkbox'], [contenteditable], [type='button']", delegate )

				// Support: Chrome, oldIE
				// "select" is provided as event.target when clicking a option
				.on( "click.validate", "select, option, [type='radio'], [type='checkbox']", delegate );

			if ( this.settings.invalidHandler ) {
				$( this.currentForm ).on( "invalid-form.validate", this.settings.invalidHandler );
			}
		},

		// https://jqueryvalidation.org/Validator.form/
		form: function() {
			this.checkForm();
			$.extend( this.submitted, this.errorMap );
			this.invalid = $.extend( {}, this.errorMap );
			if ( !this.valid() ) {
				$( this.currentForm ).triggerHandler( "invalid-form", [ this ] );
			}
			this.showErrors();
			return this.valid();
		},

		checkForm: function() {
			this.prepareForm();
			for ( var i = 0, elements = ( this.currentElements = this.elements() ); elements[ i ]; i++ ) {
				this.check( elements[ i ] );
			}
			return this.valid();
		},

		// https://jqueryvalidation.org/Validator.element/
		element: function( element ) {
			var cleanElement = this.clean( element ),
				checkElement = this.validationTargetFor( cleanElement ),
				v = this,
				result = true,
				rs, group;

			if ( checkElement === undefined ) {
				delete this.invalid[ cleanElement.name ];
			} else {
				this.prepareElement( checkElement );
				this.currentElements = $( checkElement );

				// If this element is grouped, then validate all group elements already
				// containing a value
				group = this.groups[ checkElement.name ];
				if ( group ) {
					$.each( this.groups, function( name, testgroup ) {
						if ( testgroup === group && name !== checkElement.name ) {
							cleanElement = v.validationTargetFor( v.clean( v.findByName( name ) ) );
							if ( cleanElement && cleanElement.name in v.invalid ) {
								v.currentElements.push( cleanElement );
								result = v.check( cleanElement ) && result;
							}
						}
					} );
				}

				rs = this.check( checkElement ) !== false;
				result = result && rs;
				if ( rs ) {
					this.invalid[ checkElement.name ] = false;
				} else {
					this.invalid[ checkElement.name ] = true;
				}

				if ( !this.numberOfInvalids() ) {

					// Hide error containers on last error
					this.toHide = this.toHide.add( this.containers );
				}
				this.showErrors();

				// Add aria-invalid status for screen readers
				$( element ).attr( "aria-invalid", !rs );
			}

			return result;
		},

		// https://jqueryvalidation.org/Validator.showErrors/
		showErrors: function( errors ) {
			if ( errors ) {
				var validator = this;

				// Add items to error list and map
				$.extend( this.errorMap, errors );
				this.errorList = $.map( this.errorMap, function( message, name ) {
					return {
						message: message,
						element: validator.findByName( name )[ 0 ]
					};
				} );

				// Remove items from success list
				this.successList = $.grep( this.successList, function( element ) {
					return !( element.name in errors );
				} );
			}
			if ( this.settings.showErrors ) {
				this.settings.showErrors.call( this, this.errorMap, this.errorList );
			} else {
				this.defaultShowErrors();
			}
		},

		// https://jqueryvalidation.org/Validator.resetForm/
		resetForm: function() {
			if ( $.fn.resetForm ) {
				$( this.currentForm ).resetForm();
			}
			this.invalid = {};
			this.submitted = {};
			this.prepareForm();
			this.hideErrors();
			var elements = this.elements()
				.removeData( "previousValue" )
				.removeAttr( "aria-invalid" );

			this.resetElements( elements );
		},

		resetElements: function( elements ) {
			var i;

			if ( this.settings.unhighlight ) {
				for ( i = 0; elements[ i ]; i++ ) {
					this.settings.unhighlight.call( this, elements[ i ],
						this.settings.errorClass, "" );
					this.findByName( elements[ i ].name ).removeClass( this.settings.validClass );
				}
			} else {
				elements
					.removeClass( this.settings.errorClass )
					.removeClass( this.settings.validClass );
			}
		},

		numberOfInvalids: function() {
			return this.objectLength( this.invalid );
		},

		objectLength: function( obj ) {
			/* jshint unused: false */
			var count = 0,
				i;
			for ( i in obj ) {

				// This check allows counting elements with empty error
				// message as invalid elements
				if ( obj[ i ] !== undefined && obj[ i ] !== null && obj[ i ] !== false ) {
					count++;
				}
			}
			return count;
		},

		hideErrors: function() {
			this.hideThese( this.toHide );
		},

		hideThese: function( errors ) {
			errors.not( this.containers ).text( "" );
			this.addWrapper( errors ).hide();
		},

		valid: function() {
			return this.size() === 0;
		},

		size: function() {
			return this.errorList.length;
		},

		focusInvalid: function() {
			if ( this.settings.focusInvalid ) {
				try {
					$( this.findLastActive() || this.errorList.length && this.errorList[ 0 ].element || [] )
					.filter( ":visible" )
					.focus()

					// Manually trigger focusin event; without it, focusin handler isn't called, findLastActive won't have anything to find
					.trigger( "focusin" );
				} catch ( e ) {

					// Ignore IE throwing errors when focusing hidden elements
				}
			}
		},

		findLastActive: function() {
			var lastActive = this.lastActive;
			return lastActive && $.grep( this.errorList, function( n ) {
				return n.element.name === lastActive.name;
			} ).length === 1 && lastActive;
		},

		elements: function() {
			var validator = this,
				rulesCache = {};

			// Select all valid inputs inside the form (no submit or reset buttons)
			return $( this.currentForm )
			.find( "input, select, textarea, [contenteditable]" )
			.not( ":submit, :reset, :image, :disabled" )
			.not( this.settings.ignore )
			.filter( function() {
				var name = this.name || $( this ).attr( "name" ); // For contenteditable
				var isContentEditable = typeof $( this ).attr( "contenteditable" ) !== "undefined" && $( this ).attr( "contenteditable" ) !== "false";

				if ( !name && validator.settings.debug && window.console ) {
					console.error( "%o has no name assigned", this );
				}

				// Set form expando on contenteditable
				if ( isContentEditable ) {
					this.form = $( this ).closest( "form" )[ 0 ];
					this.name = name;
				}

				// Ignore elements that belong to other/nested forms
				if ( this.form !== validator.currentForm ) {
					return false;
				}

				// Select only the first element for each name, and only those with rules specified
				if ( name in rulesCache || !validator.objectLength( $( this ).rules() ) ) {
					return false;
				}

				rulesCache[ name ] = true;
				return true;
			} );
		},

		clean: function( selector ) {
			return $( selector )[ 0 ];
		},

		errors: function() {
			var errorClass = this.settings.errorClass.split( " " ).join( "." );
			return $( this.settings.errorElement + "." + errorClass, this.errorContext );
		},

		resetInternals: function() {
			this.successList = [];
			this.errorList = [];
			this.errorMap = {};
			this.toShow = $( [] );
			this.toHide = $( [] );
		},

		reset: function() {
			this.resetInternals();
			this.currentElements = $( [] );
		},

		prepareForm: function() {
			this.reset();
			this.toHide = this.errors().add( this.containers );
		},

		prepareElement: function( element ) {
			this.reset();
			this.toHide = this.errorsFor( element );
		},

		elementValue: function( element ) {
			var $element = $( element ),
				type = element.type,
				isContentEditable = typeof $element.attr( "contenteditable" ) !== "undefined" && $element.attr( "contenteditable" ) !== "false",
				val, idx;

			if ( type === "radio" || type === "checkbox" ) {
				return this.findByName( element.name ).filter( ":checked" ).val();
			} else if ( type === "number" && typeof element.validity !== "undefined" ) {
				return element.validity.badInput ? "NaN" : $element.val();
			}

			if ( isContentEditable ) {
				val = $element.text();
			} else {
				val = $element.val();
			}

			if ( type === "file" ) {

				// Modern browser (chrome & safari)
				if ( val.substr( 0, 12 ) === "C:\\fakepath\\" ) {
					return val.substr( 12 );
				}

				// Legacy browsers
				// Unix-based path
				idx = val.lastIndexOf( "/" );
				if ( idx >= 0 ) {
					return val.substr( idx + 1 );
				}

				// Windows-based path
				idx = val.lastIndexOf( "\\" );
				if ( idx >= 0 ) {
					return val.substr( idx + 1 );
				}

				// Just the file name
				return val;
			}

			if ( typeof val === "string" ) {
				return val.replace( /\r/g, "" );
			}
			return val;
		},

		check: function( element ) {
			element = this.validationTargetFor( this.clean( element ) );

			var rules = $( element ).rules(),
				rulesCount = $.map( rules, function( n, i ) {
					return i;
				} ).length,
				dependencyMismatch = false,
				val = this.elementValue( element ),
				result, method, rule, normalizer;

			// Prioritize the local normalizer defined for this element over the global one
			// if the former exists, otherwise user the global one in case it exists.
			if ( typeof rules.normalizer === "function" ) {
				normalizer = rules.normalizer;
			} else if (	typeof this.settings.normalizer === "function" ) {
				normalizer = this.settings.normalizer;
			}

			// If normalizer is defined, then call it to retreive the changed value instead
			// of using the real one.
			// Note that `this` in the normalizer is `element`.
			if ( normalizer ) {
				val = normalizer.call( element, val );

				// Delete the normalizer from rules to avoid treating it as a pre-defined method.
				delete rules.normalizer;
			}

			for ( method in rules ) {
				rule = { method: method, parameters: rules[ method ] };
				try {
					result = $.validator.methods[ method ].call( this, val, element, rule.parameters );

					// If a method indicates that the field is optional and therefore valid,
					// don't mark it as valid when there are no other rules
					if ( result === "dependency-mismatch" && rulesCount === 1 ) {
						dependencyMismatch = true;
						continue;
					}
					dependencyMismatch = false;

					if ( result === "pending" ) {
						this.toHide = this.toHide.not( this.errorsFor( element ) );
						return;
					}

					if ( !result ) {
						this.formatAndAdd( element, rule );
						return false;
					}
				} catch ( e ) {
					if ( this.settings.debug && window.console ) {
						console.log( "Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.", e );
					}
					if ( e instanceof TypeError ) {
						e.message += ".  Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.";
					}

					throw e;
				}
			}
			if ( dependencyMismatch ) {
				return;
			}
			if ( this.objectLength( rules ) ) {
				this.successList.push( element );
			}
			return true;
		},

		// Return the custom message for the given element and validation method
		// specified in the element's HTML5 data attribute
		// return the generic message if present and no method specific message is present
		customDataMessage: function( element, method ) {
			return $( element ).data( "msg" + method.charAt( 0 ).toUpperCase() +
				method.substring( 1 ).toLowerCase() ) || $( element ).data( "msg" );
		},

		// Return the custom message for the given element name and validation method
		customMessage: function( name, method ) {
			var m = this.settings.messages[ name ];
			return m && ( m.constructor === String ? m : m[ method ] );
		},

		// Return the first defined argument, allowing empty strings
		findDefined: function() {
			for ( var i = 0; i < arguments.length; i++ ) {
				if ( arguments[ i ] !== undefined ) {
					return arguments[ i ];
				}
			}
			return undefined;
		},

		// The second parameter 'rule' used to be a string, and extended to an object literal
		// of the following form:
		// rule = {
		//     method: "method name",
		//     parameters: "the given method parameters"
		// }
		//
		// The old behavior still supported, kept to maintain backward compatibility with
		// old code, and will be removed in the next major release.
		defaultMessage: function( element, rule ) {
			if ( typeof rule === "string" ) {
				rule = { method: rule };
			}

			var message = this.findDefined(
					this.customMessage( element.name, rule.method ),
					this.customDataMessage( element, rule.method ),

					// 'title' is never undefined, so handle empty string as undefined
					!this.settings.ignoreTitle && element.title || undefined,
					$.validator.messages[ rule.method ],
					"<strong>Warning: No message defined for " + element.name + "</strong>"
				),
				theregex = /\$?\{(\d+)\}/g;
			if ( typeof message === "function" ) {
				message = message.call( this, rule.parameters, element );
			} else if ( theregex.test( message ) ) {
				message = $.validator.format( message.replace( theregex, "{$1}" ), rule.parameters );
			}

			return message;
		},

		formatAndAdd: function( element, rule ) {
			var message = this.defaultMessage( element, rule );

			this.errorList.push( {
				message: message,
				element: element,
				method: rule.method
			} );

			this.errorMap[ element.name ] = message;
			this.submitted[ element.name ] = message;
		},

		addWrapper: function( toToggle ) {
			if ( this.settings.wrapper ) {
				toToggle = toToggle.add( toToggle.parent( this.settings.wrapper ) );
			}
			return toToggle;
		},

		defaultShowErrors: function() {
			var i, elements, error;
			for ( i = 0; this.errorList[ i ]; i++ ) {
				error = this.errorList[ i ];
				if ( this.settings.highlight ) {
					this.settings.highlight.call( this, error.element, this.settings.errorClass, this.settings.validClass );
				}
				this.showLabel( error.element, error.message );
			}
			if ( this.errorList.length ) {
				this.toShow = this.toShow.add( this.containers );
			}
			if ( this.settings.success ) {
				for ( i = 0; this.successList[ i ]; i++ ) {
					this.showLabel( this.successList[ i ] );
				}
			}
			if ( this.settings.unhighlight ) {
				for ( i = 0, elements = this.validElements(); elements[ i ]; i++ ) {
					this.settings.unhighlight.call( this, elements[ i ], this.settings.errorClass, this.settings.validClass );
				}
			}
			this.toHide = this.toHide.not( this.toShow );
			this.hideErrors();
			this.addWrapper( this.toShow ).show();
		},

		validElements: function() {
			return this.currentElements.not( this.invalidElements() );
		},

		invalidElements: function() {
			return $( this.errorList ).map( function() {
				return this.element;
			} );
		},

		showLabel: function( element, message ) {
			var place, group, errorID, v,
				error = this.errorsFor( element ),
				elementID = this.idOrName( element ),
				describedBy = $( element ).attr( "aria-describedby" );

			if ( error.length ) {

				// Refresh error/success class
				error.removeClass( this.settings.validClass ).addClass( this.settings.errorClass );

				// Replace message on existing label
				error.html( message );
			} else {

				// Create error element
				error = $( "<" + this.settings.errorElement + ">" )
					.attr( "id", elementID + "-error" )
					.addClass( this.settings.errorClass )
					.html( message || "" );

				// Maintain reference to the element to be placed into the DOM
				place = error;
				if ( this.settings.wrapper ) {

					// Make sure the element is visible, even in IE
					// actually showing the wrapped element is handled elsewhere
					place = error.hide().show().wrap( "<" + this.settings.wrapper + "/>" ).parent();
				}
				if ( this.labelContainer.length ) {
					this.labelContainer.append( place );
				} else if ( this.settings.errorPlacement ) {
					this.settings.errorPlacement.call( this, place, $( element ) );
				} else {
					place.insertAfter( element );
				}

				// Link error back to the element
				if ( error.is( "label" ) ) {

					// If the error is a label, then associate using 'for'
					error.attr( "for", elementID );

					// If the element is not a child of an associated label, then it's necessary
					// to explicitly apply aria-describedby
				} else if ( error.parents( "label[for='" + this.escapeCssMeta( elementID ) + "']" ).length === 0 ) {
					errorID = error.attr( "id" );

					// Respect existing non-error aria-describedby
					if ( !describedBy ) {
						describedBy = errorID;
					} else if ( !describedBy.match( new RegExp( "\\b" + this.escapeCssMeta( errorID ) + "\\b" ) ) ) {

						// Add to end of list if not already present
						describedBy += " " + errorID;
					}
					$( element ).attr( "aria-describedby", describedBy );

					// If this element is grouped, then assign to all elements in the same group
					group = this.groups[ element.name ];
					if ( group ) {
						v = this;
						$.each( v.groups, function( name, testgroup ) {
							if ( testgroup === group ) {
								$( "[name='" + v.escapeCssMeta( name ) + "']", v.currentForm )
									.attr( "aria-describedby", error.attr( "id" ) );
							}
						} );
					}
				}
			}
			if ( !message && this.settings.success ) {
				error.text( "" );
				if ( typeof this.settings.success === "string" ) {
					error.addClass( this.settings.success );
				} else {
					this.settings.success( error, element );
				}
			}
			this.toShow = this.toShow.add( error );
		},

		errorsFor: function( element ) {
			var name = this.escapeCssMeta( this.idOrName( element ) ),
				describer = $( element ).attr( "aria-describedby" ),
				selector = "label[for='" + name + "'], label[for='" + name + "'] *";

			// 'aria-describedby' should directly reference the error element
			if ( describer ) {
				selector = selector + ", #" + this.escapeCssMeta( describer )
					.replace( /\s+/g, ", #" );
			}

			return this
				.errors()
				.filter( selector );
		},

		// See https://api.jquery.com/category/selectors/, for CSS
		// meta-characters that should be escaped in order to be used with JQuery
		// as a literal part of a name/id or any selector.
		escapeCssMeta: function( string ) {
			return string.replace( /([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1" );
		},

		idOrName: function( element ) {
			return this.groups[ element.name ] || ( this.checkable( element ) ? element.name : element.id || element.name );
		},

		validationTargetFor: function( element ) {

			// If radio/checkbox, validate first element in group instead
			if ( this.checkable( element ) ) {
				element = this.findByName( element.name );
			}

			// Always apply ignore filter
			return $( element ).not( this.settings.ignore )[ 0 ];
		},

		checkable: function( element ) {
			return ( /radio|checkbox/i ).test( element.type );
		},

		findByName: function( name ) {
			return $( this.currentForm ).find( "[name='" + this.escapeCssMeta( name ) + "']" );
		},

		getLength: function( value, element ) {
			switch ( element.nodeName.toLowerCase() ) {
			case "select":
				return $( "option:selected", element ).length;
			case "input":
				if ( this.checkable( element ) ) {
					return this.findByName( element.name ).filter( ":checked" ).length;
				}
			}
			return value.length;
		},

		depend: function( param, element ) {
			return this.dependTypes[ typeof param ] ? this.dependTypes[ typeof param ]( param, element ) : true;
		},

		dependTypes: {
			"boolean": function( param ) {
				return param;
			},
			"string": function( param, element ) {
				return !!$( param, element.form ).length;
			},
			"function": function( param, element ) {
				return param( element );
			}
		},

		optional: function( element ) {
			var val = this.elementValue( element );
			return !$.validator.methods.required.call( this, val, element ) && "dependency-mismatch";
		},

		startRequest: function( element ) {
			if ( !this.pending[ element.name ] ) {
				this.pendingRequest++;
				$( element ).addClass( this.settings.pendingClass );
				this.pending[ element.name ] = true;
			}
		},

		stopRequest: function( element, valid ) {
			this.pendingRequest--;

			// Sometimes synchronization fails, make sure pendingRequest is never < 0
			if ( this.pendingRequest < 0 ) {
				this.pendingRequest = 0;
			}
			delete this.pending[ element.name ];
			$( element ).removeClass( this.settings.pendingClass );
			if ( valid && this.pendingRequest === 0 && this.formSubmitted && this.form() ) {
				$( this.currentForm ).submit();

				// Remove the hidden input that was used as a replacement for the
				// missing submit button. The hidden input is added by `handle()`
				// to ensure that the value of the used submit button is passed on
				// for scripted submits triggered by this method
				if ( this.submitButton ) {
					$( "input:hidden[name='" + this.submitButton.name + "']", this.currentForm ).remove();
				}

				this.formSubmitted = false;
			} else if ( !valid && this.pendingRequest === 0 && this.formSubmitted ) {
				$( this.currentForm ).triggerHandler( "invalid-form", [ this ] );
				this.formSubmitted = false;
			}
		},

		previousValue: function( element, method ) {
			method = typeof method === "string" && method || "remote";

			return $.data( element, "previousValue" ) || $.data( element, "previousValue", {
				old: null,
				valid: true,
				message: this.defaultMessage( element, { method: method } )
			} );
		},

		// Cleans up all forms and elements, removes validator-specific events
		destroy: function() {
			this.resetForm();

			$( this.currentForm )
				.off( ".validate" )
				.removeData( "validator" )
				.find( ".validate-equalTo-blur" )
					.off( ".validate-equalTo" )
					.removeClass( "validate-equalTo-blur" )
				.find( ".validate-lessThan-blur" )
					.off( ".validate-lessThan" )
					.removeClass( "validate-lessThan-blur" )
				.find( ".validate-lessThanEqual-blur" )
					.off( ".validate-lessThanEqual" )
					.removeClass( "validate-lessThanEqual-blur" )
				.find( ".validate-greaterThanEqual-blur" )
					.off( ".validate-greaterThanEqual" )
					.removeClass( "validate-greaterThanEqual-blur" )
				.find( ".validate-greaterThan-blur" )
					.off( ".validate-greaterThan" )
					.removeClass( "validate-greaterThan-blur" );
		}

	},

	classRuleSettings: {
		required: { required: true },
		email: { email: true },
		url: { url: true },
		date: { date: true },
		dateISO: { dateISO: true },
		number: { number: true },
		digits: { digits: true },
		creditcard: { creditcard: true }
	},

	addClassRules: function( className, rules ) {
		if ( className.constructor === String ) {
			this.classRuleSettings[ className ] = rules;
		} else {
			$.extend( this.classRuleSettings, className );
		}
	},

	classRules: function( element ) {
		var rules = {},
			classes = $( element ).attr( "class" );

		if ( classes ) {
			$.each( classes.split( " " ), function() {
				if ( this in $.validator.classRuleSettings ) {
					$.extend( rules, $.validator.classRuleSettings[ this ] );
				}
			} );
		}
		return rules;
	},

	normalizeAttributeRule: function( rules, type, method, value ) {

		// Convert the value to a number for number inputs, and for text for backwards compability
		// allows type="date" and others to be compared as strings
		if ( /min|max|step/.test( method ) && ( type === null || /number|range|text/.test( type ) ) ) {
			value = Number( value );

			// Support Opera Mini, which returns NaN for undefined minlength
			if ( isNaN( value ) ) {
				value = undefined;
			}
		}

		if ( value || value === 0 ) {
			rules[ method ] = value;
		} else if ( type === method && type !== "range" ) {

			// Exception: the jquery validate 'range' method
			// does not test for the html5 'range' type
			rules[ method ] = true;
		}
	},

	attributeRules: function( element ) {
		var rules = {},
			$element = $( element ),
			type = element.getAttribute( "type" ),
			method, value;

		for ( method in $.validator.methods ) {

			// Support for <input required> in both html5 and older browsers
			if ( method === "required" ) {
				value = element.getAttribute( method );

				// Some browsers return an empty string for the required attribute
				// and non-HTML5 browsers might have required="" markup
				if ( value === "" ) {
					value = true;
				}

				// Force non-HTML5 browsers to return bool
				value = !!value;
			} else {
				value = $element.attr( method );
			}

			this.normalizeAttributeRule( rules, type, method, value );
		}

		// 'maxlength' may be returned as -1, 2147483647 ( IE ) and 524288 ( safari ) for text inputs
		if ( rules.maxlength && /-1|2147483647|524288/.test( rules.maxlength ) ) {
			delete rules.maxlength;
		}

		return rules;
	},

	dataRules: function( element ) {
		var rules = {},
			$element = $( element ),
			type = element.getAttribute( "type" ),
			method, value;

		for ( method in $.validator.methods ) {
			value = $element.data( "rule" + method.charAt( 0 ).toUpperCase() + method.substring( 1 ).toLowerCase() );

			// Cast empty attributes like `data-rule-required` to `true`
			if ( value === "" ) {
				value = true;
			}

			this.normalizeAttributeRule( rules, type, method, value );
		}
		return rules;
	},

	staticRules: function( element ) {
		var rules = {},
			validator = $.data( element.form, "validator" );

		if ( validator.settings.rules ) {
			rules = $.validator.normalizeRule( validator.settings.rules[ element.name ] ) || {};
		}
		return rules;
	},

	normalizeRules: function( rules, element ) {

		// Handle dependency check
		$.each( rules, function( prop, val ) {

			// Ignore rule when param is explicitly false, eg. required:false
			if ( val === false ) {
				delete rules[ prop ];
				return;
			}
			if ( val.param || val.depends ) {
				var keepRule = true;
				switch ( typeof val.depends ) {
				case "string":
					keepRule = !!$( val.depends, element.form ).length;
					break;
				case "function":
					keepRule = val.depends.call( element, element );
					break;
				}
				if ( keepRule ) {
					rules[ prop ] = val.param !== undefined ? val.param : true;
				} else {
					$.data( element.form, "validator" ).resetElements( $( element ) );
					delete rules[ prop ];
				}
			}
		} );

		// Evaluate parameters
		$.each( rules, function( rule, parameter ) {
			rules[ rule ] = $.isFunction( parameter ) && rule !== "normalizer" ? parameter( element ) : parameter;
		} );

		// Clean number parameters
		$.each( [ "minlength", "maxlength" ], function() {
			if ( rules[ this ] ) {
				rules[ this ] = Number( rules[ this ] );
			}
		} );
		$.each( [ "rangelength", "range" ], function() {
			var parts;
			if ( rules[ this ] ) {
				if ( $.isArray( rules[ this ] ) ) {
					rules[ this ] = [ Number( rules[ this ][ 0 ] ), Number( rules[ this ][ 1 ] ) ];
				} else if ( typeof rules[ this ] === "string" ) {
					parts = rules[ this ].replace( /[\[\]]/g, "" ).split( /[\s,]+/ );
					rules[ this ] = [ Number( parts[ 0 ] ), Number( parts[ 1 ] ) ];
				}
			}
		} );

		if ( $.validator.autoCreateRanges ) {

			// Auto-create ranges
			if ( rules.min != null && rules.max != null ) {
				rules.range = [ rules.min, rules.max ];
				delete rules.min;
				delete rules.max;
			}
			if ( rules.minlength != null && rules.maxlength != null ) {
				rules.rangelength = [ rules.minlength, rules.maxlength ];
				delete rules.minlength;
				delete rules.maxlength;
			}
		}

		return rules;
	},

	// Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
	normalizeRule: function( data ) {
		if ( typeof data === "string" ) {
			var transformed = {};
			$.each( data.split( /\s/ ), function() {
				transformed[ this ] = true;
			} );
			data = transformed;
		}
		return data;
	},

	// https://jqueryvalidation.org/jQuery.validator.addMethod/
	addMethod: function( name, method, message ) {
		$.validator.methods[ name ] = method;
		$.validator.messages[ name ] = message !== undefined ? message : $.validator.messages[ name ];
		if ( method.length < 3 ) {
			$.validator.addClassRules( name, $.validator.normalizeRule( name ) );
		}
	},

	// https://jqueryvalidation.org/jQuery.validator.methods/
	methods: {

		// https://jqueryvalidation.org/required-method/
		required: function( value, element, param ) {

			// Check if dependency is met
			if ( !this.depend( param, element ) ) {
				return "dependency-mismatch";
			}
			if ( element.nodeName.toLowerCase() === "select" ) {

				// Could be an array for select-multiple or a string, both are fine this way
				var val = $( element ).val();
				return val && val.length > 0;
			}
			if ( this.checkable( element ) ) {
				return this.getLength( value, element ) > 0;
			}
			return value !== undefined && value !== null && value.length > 0;
		},

		// https://jqueryvalidation.org/email-method/
		email: function( value, element ) {

			// From https://html.spec.whatwg.org/multipage/forms.html#valid-e-mail-address
			// Retrieved 2014-01-14
			// If you have a problem with this implementation, report a bug against the above spec
			// Or use custom methods to implement your own email validation
			return this.optional( element ) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test( value );
		},

		// https://jqueryvalidation.org/url-method/
		url: function( value, element ) {

			// Copyright (c) 2010-2013 Diego Perini, MIT licensed
			// https://gist.github.com/dperini/729294
			// see also https://mathiasbynens.be/demo/url-regex
			// modified to allow protocol-relative URLs
			return this.optional( element ) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test( value );
		},

		// https://jqueryvalidation.org/date-method/
		date: ( function() {
			var called = false;

			return function( value, element ) {
				if ( !called ) {
					called = true;
					if ( this.settings.debug && window.console ) {
						console.warn(
							"The `date` method is deprecated and will be removed in version '2.0.0'.\n" +
							"Please don't use it, since it relies on the Date constructor, which\n" +
							"behaves very differently across browsers and locales. Use `dateISO`\n" +
							"instead or one of the locale specific methods in `localizations/`\n" +
							"and `additional-methods.js`."
						);
					}
				}

				return this.optional( element ) || !/Invalid|NaN/.test( new Date( value ).toString() );
			};
		}() ),

		// https://jqueryvalidation.org/dateISO-method/
		dateISO: function( value, element ) {
			return this.optional( element ) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test( value );
		},

		// https://jqueryvalidation.org/number-method/
		number: function( value, element ) {
			return this.optional( element ) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test( value );
		},

		// https://jqueryvalidation.org/digits-method/
		digits: function( value, element ) {
			return this.optional( element ) || /^\d+$/.test( value );
		},

		// https://jqueryvalidation.org/minlength-method/
		minlength: function( value, element, param ) {
			var length = $.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || length >= param;
		},

		// https://jqueryvalidation.org/maxlength-method/
		maxlength: function( value, element, param ) {
			var length = $.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || length <= param;
		},

		// https://jqueryvalidation.org/rangelength-method/
		rangelength: function( value, element, param ) {
			var length = $.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || ( length >= param[ 0 ] && length <= param[ 1 ] );
		},

		// https://jqueryvalidation.org/min-method/
		min: function( value, element, param ) {
			return this.optional( element ) || value >= param;
		},

		// https://jqueryvalidation.org/max-method/
		max: function( value, element, param ) {
			return this.optional( element ) || value <= param;
		},

		// https://jqueryvalidation.org/range-method/
		range: function( value, element, param ) {
			return this.optional( element ) || ( value >= param[ 0 ] && value <= param[ 1 ] );
		},

		// https://jqueryvalidation.org/step-method/
		step: function( value, element, param ) {
			var type = $( element ).attr( "type" ),
				errorMessage = "Step attribute on input type " + type + " is not supported.",
				supportedTypes = [ "text", "number", "range" ],
				re = new RegExp( "\\b" + type + "\\b" ),
				notSupported = type && !re.test( supportedTypes.join() ),
				decimalPlaces = function( num ) {
					var match = ( "" + num ).match( /(?:\.(\d+))?$/ );
					if ( !match ) {
						return 0;
					}

					// Number of digits right of decimal point.
					return match[ 1 ] ? match[ 1 ].length : 0;
				},
				toInt = function( num ) {
					return Math.round( num * Math.pow( 10, decimals ) );
				},
				valid = true,
				decimals;

			// Works only for text, number and range input types
			// TODO find a way to support input types date, datetime, datetime-local, month, time and week
			if ( notSupported ) {
				throw new Error( errorMessage );
			}

			decimals = decimalPlaces( param );

			// Value can't have too many decimals
			if ( decimalPlaces( value ) > decimals || toInt( value ) % toInt( param ) !== 0 ) {
				valid = false;
			}

			return this.optional( element ) || valid;
		},

		// https://jqueryvalidation.org/equalTo-method/
		equalTo: function( value, element, param ) {

			// Bind to the blur event of the target in order to revalidate whenever the target field is updated
			var target = $( param );
			if ( this.settings.onfocusout && target.not( ".validate-equalTo-blur" ).length ) {
				target.addClass( "validate-equalTo-blur" ).on( "blur.validate-equalTo", function() {
					$( element ).valid();
				} );
			}
			return value === target.val();
		},

		// https://jqueryvalidation.org/remote-method/
		remote: function( value, element, param, method ) {
			if ( this.optional( element ) ) {
				return "dependency-mismatch";
			}

			method = typeof method === "string" && method || "remote";

			var previous = this.previousValue( element, method ),
				validator, data, optionDataString;

			if ( !this.settings.messages[ element.name ] ) {
				this.settings.messages[ element.name ] = {};
			}
			previous.originalMessage = previous.originalMessage || this.settings.messages[ element.name ][ method ];
			this.settings.messages[ element.name ][ method ] = previous.message;

			param = typeof param === "string" && { url: param } || param;
			optionDataString = $.param( $.extend( { data: value }, param.data ) );
			if ( previous.old === optionDataString ) {
				return previous.valid;
			}

			previous.old = optionDataString;
			validator = this;
			this.startRequest( element );
			data = {};
			data[ element.name ] = value;
			$.ajax( $.extend( true, {
				mode: "abort",
				port: "validate" + element.name,
				dataType: "json",
				data: data,
				context: validator.currentForm,
				success: function( response ) {
					var valid = response === true || response === "true",
						errors, message, submitted;

					validator.settings.messages[ element.name ][ method ] = previous.originalMessage;
					if ( valid ) {
						submitted = validator.formSubmitted;
						validator.resetInternals();
						validator.toHide = validator.errorsFor( element );
						validator.formSubmitted = submitted;
						validator.successList.push( element );
						validator.invalid[ element.name ] = false;
						validator.showErrors();
					} else {
						errors = {};
						message = response || validator.defaultMessage( element, { method: method, parameters: value } );
						errors[ element.name ] = previous.message = message;
						validator.invalid[ element.name ] = true;
						validator.showErrors( errors );
					}
					previous.valid = valid;
					validator.stopRequest( element, valid );
				}
			}, param ) );
			return "pending";
		}
	}

} );

// Ajax mode: abort
// usage: $.ajax({ mode: "abort"[, port: "uniqueport"]});
// if mode:"abort" is used, the previous request on that port (port can be undefined) is aborted via XMLHttpRequest.abort()

var pendingRequests = {},
	ajax;

// Use a prefilter if available (1.5+)
if ( $.ajaxPrefilter ) {
	$.ajaxPrefilter( function( settings, _, xhr ) {
		var port = settings.port;
		if ( settings.mode === "abort" ) {
			if ( pendingRequests[ port ] ) {
				pendingRequests[ port ].abort();
			}
			pendingRequests[ port ] = xhr;
		}
	} );
} else {

	// Proxy ajax
	ajax = $.ajax;
	$.ajax = function( settings ) {
		var mode = ( "mode" in settings ? settings : $.ajaxSettings ).mode,
			port = ( "port" in settings ? settings : $.ajaxSettings ).port;
		if ( mode === "abort" ) {
			if ( pendingRequests[ port ] ) {
				pendingRequests[ port ].abort();
			}
			pendingRequests[ port ] = ajax.apply( this, arguments );
			return pendingRequests[ port ];
		}
		return ajax.apply( this, arguments );
	};
}
return $;
}));
/*! jquery.cookie v1.4.1 | MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?a(require("jquery")):a(jQuery)}(function(a){function b(a){return h.raw?a:encodeURIComponent(a)}function c(a){return h.raw?a:decodeURIComponent(a)}function d(a){return b(h.json?JSON.stringify(a):String(a))}function e(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return a=decodeURIComponent(a.replace(g," ")),h.json?JSON.parse(a):a}catch(b){}}function f(b,c){var d=h.raw?b:e(b);return a.isFunction(c)?c(d):d}var g=/\+/g,h=a.cookie=function(e,g,i){if(void 0!==g&&!a.isFunction(g)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setTime(+k+864e5*j)}return document.cookie=[b(e),"=",d(g),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=e?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;o>n;n++){var p=m[n].split("="),q=c(p.shift()),r=p.join("=");if(e&&e===q){l=f(r,g);break}e||void 0===(r=f(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return void 0===a.cookie(b)?!1:(a.cookie(b,"",a.extend({},c,{expires:-1})),!a.cookie(b))}});
var TwentyFour_Hour_Fitness=function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=113)}([,,function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var c,l=[],u=!1,f=-1;function d(){u&&c&&(u=!1,c.length?l=c.concat(l):f=-1,l.length&&p())}function p(){if(!u){var e=a(d);u=!0;for(var t=l.length;t;){for(c=l,l=[];++f<t;)c&&c[f].run();f=-1,t=l.length}c=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new h(e,t)),1!==l.length||u||a(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},,function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);n(114);var r,i={};(r=n(115)).keys().forEach(function(e){return i[e]=r(e)})},function(e,t,n){},function(e,t,n){var r={"./components/club/club01-club-nav/webpack.module/index.js":116,"./components/club/club04-club-hero/webpack.module/index.js":118,"./components/club/club05-club-intro/webpack.module/index.js":120,"./components/club/club06-gym-photo-carousel/webpack.module/index.js":123,"./components/club/club07-club-features-container/webpack.module/index.js":126,"./components/club/club08-club-hours/webpack.module/index.js":128,"./components/club/club10-club-alert-box/webpack.module/index.js":131,"./components/content/404-component/webpack.module/index.js":133,"./components/content/buy-training/webpack.module/index.js":135,"./components/content/c01-home-hero/webpack.module/index.js":137,"./components/content/c02-cta-ribbon/webpack.module/index.js":140,"./components/content/c03-find-your-gym/webpack.module/index.js":144,"./components/content/c04-cta-banner/webpack.module/index.js":147,"./components/content/c05-square-ad/webpack.module/index.js":149,"./components/content/c06-headline/webpack.module/index.js":152,"./components/content/corporate/webpack.module/index.js":154,"./components/content/costco/webpack.module/index.js":157,"./components/content/fitness-class-instructors/webpack.module/index.js":160,"./components/content/login/webpack.module/index.js":163,"./components/content/personal-trainers-city/webpack.module/index.js":166,"./components/content/personal-trainers-club/webpack.module/index.js":169,"./components/content/personal-trainers-trainer/webpack.module/index.js":172,"./components/content/personal-trainers/webpack.module/index.js":175,"./components/content/sample-component/webpack.module/index.js":178,"./components/content/title/webpack.module/index.js":179,"./components/page/alternative-base-page/webpack.module/index.js":181,"./components/page/base-page/webpack.module/index.js":184,"./components/universal/u01-global-header/webpack.module/index.js":187,"./components/universal/u02-global-footer/webpack.module/index.js":195};function i(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=o,e.exports=i,i.id=115},function(e,t,n){"use strict";n.r(t);n(117)},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(119)},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(121),n(122)},function(e,t,n){},function(e,t){var n=$(".amenities").children().sort(function(e,t){return e.innerHTML.trim()<t.innerHTML.trim()?-1:e.innerHTML.trim()>t.innerHTML.trim()?1:0});$(".club01-club-nav").length>0&&$("a[href='#overview_amenities']").on("click",function(){$(".amenities").slideDown(),$(".fees-text ").fadeIn(),$(".see-more-amenities-link .fa-chevron-right").addClass("hidden"),$(".see-more-amenities-link .fa-chevron-down").removeClass("hidden")}),$(".amenities").empty().prepend(n),$(".see-more-amenities-link").on("click",function(){$(this).find(".fa-chevron-right").hasClass("hidden")?($(".amenities").slideUp(),$(".fees-text ").fadeOut()):($(".amenities").slideDown(),$(".fees-text ").fadeIn()),$(this).find(".fa-chevron-right, .fa-chevron-down").toggleClass("hidden")})},function(e,t,n){"use strict";n.r(t);n(124),n(125)},function(e,t,n){},function(e,t){$(document).ready(function(){$("#image-reel").owlCarousel({nav:!0,dots:!1,responsive:{0:{items:1},700:{items:2},1400:{items:3},1600:{items:4}}});var e=$("#hd-gallery .thumbs-container img");e.length&&(e.css("width",98/e.length+"%"),function(){var e=new window.Image,t=$("#hd-gallery .loader-element"),n=$("#hd-gallery .hd-image-container"),r=$("#hd-gallery .thumbs-container img"),i=0;function o(e){t.show();var o=new Image;o.src=r[e].src,o.addEventListener("load",function(){$(r[i]).removeClass("active"),i=e,n.html(this),t.hide(),$(r[e]).addClass("active")},!1)}window.appendLoader24({container:".loader-element",size:"regular",color:"white"}),e.addEventListener("load",function(){n.append(e),$(r[0]).addClass("active"),r.on("click",function(){var e=$(this),n=r.index(e);t.show(),o(n)}),$("#hd-gallery .gallery-arrows").on("click",function(){var e=$(this);e.hasClass("prev-image-button")&&i>0&&o(i-1),e.hasClass("next-image-button")&&i<$("#hd-gallery .thumbs-container img").length-1&&o(i+1)})},!1),e.src=r[0].src}())})},function(e,t,n){"use strict";n.r(t);n(127)},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(129),n(130)},function(e,t,n){},function(e,t){$(document).ready(function(){var e=!0;window.matchMedia("(min-width: 768px)").matches&&(e=!1),$(window).on("resize",function(){e=!window.matchMedia("(min-width: 768px)").matches,function(){var t,n;if(e){if($(".club-hours-amenities").children().length)for(t=$(".club-hours-amenities").children(),n=0;n<t.length;n+=1){var r=$("#tab-"+$(t[n]).prop("id").replace("-details",""));r.after(t[n])}}else if(!$(".club-hours-amenities").children().length)for(t=$(".club-hours-categories .hours-container"),n=0;n<t.length;n+=1)$(".club-hours-amenities").append(t[n])}()});var t=!1;$(".club-hours-categories .amenity-tab").on("click",function(n){var r,i,o,s;if(t)return null;if(t=!0,r=$(n.target).hasClass("amenity-tab")?$(n.target):$(n.target).parent(".amenity-tab"),i=$("#"+r.prop("id").replace("tab-","")+"-details"),o=$(".amenity-tab.active"),s=$("#"+o.prop("id").replace("tab-","")+"-details"),r.prop("id")===o.prop("id"))return t=!1,null;r.addClass("active"),r.find(".fa-angle-down").addClass("fa-angle-up").removeClass("fa-angle-down");if("tab-kids-club"===r.prop("id")?'"Kids Club Hours"':"tab-club-hours"===r.prop("id")?'"Club Hours"':"tab-lap-pool"===r.prop("id")&&'"Pool Hours"',o.removeClass("active"),o.find(".fa-angle-up").addClass("fa-angle-down").removeClass("fa-angle-up"),e){var a=$(".single-schedule-text",s);a.length&&a.fadeOut(),s.slideUp("slow",function(){i.slideDown("slow",function(){t=!1,(a=$(".single-schedule-text",i)).length&&a.fadeIn()})})}else s.fadeOut("slow",function(){i.fadeIn("slow",function(){t=!1})})});for(var n,r,i,o=$(".club-hours-container table"),s=0;s<o.length;s+=1){n=$(o[s]).find("tr");for(var a=0;a<n.length;a+=1)r=$(n[a]),(i=$(n[a+1])).html()&&r.find("td")[0].innerHTML===i.find("td")[0].innerHTML&&(r.append(i.find("td")[1]),i.remove())}})},function(e,t,n){"use strict";n.r(t);n(132)},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(134)},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(136)},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(138),n(139)},function(e,t,n){},function(e,t){$(document).ready(function(){window.appendLoader24({container:"#loader-large-black",size:"large",color:"black"});var e={nextSlide:function(){e.slideFromRight(e.currentSlideIndex+1)},goToSlide:function(t){t!=e.currentSlideIndex&&(t>e.currentSlideIndex?e.slideFromRight(t):e.slideFromLeft(t))},slideSpeed:1e3*$(".slider-v2").data("slideSpeed"),slideFromLeft:function(t){e.removeClicks();var n=n=t<0?e.slideCount-1:t,r=$(".slide-info>div").eq(e.currentSlideIndex),i=$(".slide-picture>div").eq(e.currentSlideIndex),o=$(".slide-info>div").eq(n),s=$(".slide-picture>div").eq(n);r.css({right:"auto",left:0}),r.animate({left:"100%"},{duration:e.animationSpeed,queue:!0}),o.css({right:"100%",left:"auto"}),o.animate({right:"0%"},{duration:e.animationSpeed,queue:!0}),i.css({right:"auto"}),i.animate({left:"100%"},{duration:e.animationSpeed,queue:!0}),s.css({left:"auto",right:"100%"}),s.animate({right:0},{duration:e.animationSpeed,queue:!0}),e.currentSlideIndex=n,e.updatePages(),setTimeout(e.addClicks,1e3)},slideFromRight:function(t){e.removeClicks();var n=n=t>e.slideCount-1?0:t,r=$(".slide-info>div").eq(e.currentSlideIndex),i=$(".slide-picture>div").eq(e.currentSlideIndex),o=$(".slide-info>div").eq(n),s=$(".slide-picture>div").eq(n);r.css({left:"auto",right:"0%"}),r.animate({right:"100%"},e.animationSpeed),o.css({left:"100%"}),o.animate({left:"0%"},e.animationSpeed),i.css({left:"auto"}),i.animate({right:"100%"},e.animationSpeed),s.css({left:"100%",right:"auto"}),s.animate({left:"0%"},e.animationSpeed),e.currentSlideIndex=n,e.updatePages(),setTimeout(e.addClicks,1e3)},updatePages:function(){var t=$(".page");t.removeClass("active");var n=t.get(e.currentSlideIndex);$(n).addClass("active")},addClicks:function(){$(".previous").on("click",function(){clearInterval(e.slideTimer),e.slideFromLeft(e.currentSlideIndex-1)}),$(".next").on("click",function(){clearInterval(e.slideTimer),e.slideFromRight(e.currentSlideIndex+1)}),$(".page").on("click",function(){clearInterval(e.slideTimer),e.goToSlide($(this).index())}),$(".slider-button-control").on("click",function(){var t=$(this);t.hasClass("playing")?(t.removeClass("playing").addClass("onPause"),e.pause()):(t.removeClass("onPause").addClass("playing"),e.play())})},removeClicks:function(){$(".previous").off(),$(".next").off(),$(".page").off(),$(".slider-button-control").off()},pause:function(){clearInterval(e.slideTimer)},play:function(){e.slideFromRight(e.currentSlideIndex+1),e.slideTimer=setInterval(e.nextSlide,e.slideSpeed)}};!function(){var t=$(".slide-picture > div"),n=$(".slide-info > div");if(t.length===n.length){for(var r=0;r<t.length;r++){var i=$(t[r]);document.body.clientWidth>=767?i.css({"background-image":"url("+i.data("largeImage")+")"}):i.css({"background-image":"url("+i.data("smallImage")+")"})}!function(){e.slideCount=$(".slider-v2 .slide-picture > div").length,e.currentSlideIndex=0,e.animationSpeed=1e3;for(var t=0;t<e.slideCount;t++)$(".pages").append('<div class="page"></div>');var n=$(".slide-info-box-container");n.find(".nav").remove(),n.find(".slider-controls").remove(),e.addClicks(),e.updatePages()}(),$(".legal-link").on("click",function(){clearInterval(e.slideTimer),$(".long-legal").show()}),$(".long-legal").on("click",function(){$(".long-legal").hide()})}else console.warn("Hero backgrounds array does not match content slides length")}()})},function(e,t,n){"use strict";n.r(t);n(141),n(142),n(143)},function(e,t,n){},function(e,t){var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e){function t(e,t){var n=e.getTime();return e.setMonth(e.getMonth()+t),Math.round((e.getTime()-n)/864e5)}function r(e){var t=e.getTime(),n=new Date(t);return n.setMonth(e.getMonth()+1),Math.round((n.getTime()-t)/864e5)}function i(e,t){if(t=t instanceof Date||null!==t&&isFinite(t)?new Date(+t):new Date,!e)return t;var n=+e.value||0;return n?(t.setTime(t.getTime()+n),t):((n=+e.milliseconds||0)&&t.setMilliseconds(t.getMilliseconds()+n),(n=+e.seconds||0)&&t.setSeconds(t.getSeconds()+n),(n=+e.minutes||0)&&t.setMinutes(t.getMinutes()+n),(n=+e.hours||0)&&t.setHours(t.getHours()+n),(n=+e.weeks||0)&&(n*=7),(n+=+e.days||0)&&t.setDate(t.getDate()+n),(n=+e.months||0)&&t.setMonth(t.getMonth()+n),(n=+e.millennia||0)&&(n*=10),(n+=+e.centuries||0)&&(n*=10),(n+=+e.decades||0)&&(n*=10),(n+=+e.years||0)&&t.setFullYear(t.getFullYear()+n),t)}function o(e,t){return v(e)+(1===e?u[t]:f[t])}function s(){}function a(e,t,n,i,o,s){if(0<=e[n]&&(t+=e[n],delete e[n]),1>=(t/=o)+1)return 0;if(0<=e[i]){switch(e[i]=+(e[i]+t).toFixed(s),i){case"seconds":if(60!==e.seconds||isNaN(e.minutes))break;e.minutes++,e.seconds=0;case"minutes":if(60!==e.minutes||isNaN(e.hours))break;e.hours++,e.minutes=0;case"hours":if(24!==e.hours||isNaN(e.days))break;e.days++,e.hours=0;case"days":if(7!==e.days||isNaN(e.weeks))break;e.weeks++,e.days=0;case"weeks":if(e.weeks!==r(e.refMonth)/7||isNaN(e.months))break;e.months++,e.weeks=0;case"months":if(12!==e.months||isNaN(e.years))break;e.years++,e.months=0;case"years":if(10!==e.years||isNaN(e.decades))break;e.decades++,e.years=0;case"decades":if(10!==e.decades||isNaN(e.centuries))break;e.centuries++,e.decades=0;case"centuries":if(10!==e.centuries||isNaN(e.millennia))break;e.millennia++,e.centuries=0}return 0}return t}function c(e,n,i,o,s,c){var l=new Date;e.start=n=n||l,e.end=i=i||l,e.units=o,e.value=i.getTime()-n.getTime(),0>e.value&&(l=i,i=n,n=l),e.refMonth=new Date(n.getFullYear(),n.getMonth(),15,12,0,0);try{var u;for(e.millennia=0,e.centuries=0,e.decades=0,e.years=i.getFullYear()-n.getFullYear(),e.months=i.getMonth()-n.getMonth(),e.weeks=0,e.days=i.getDate()-n.getDate(),e.hours=i.getHours()-n.getHours(),e.minutes=i.getMinutes()-n.getMinutes(),e.seconds=i.getSeconds()-n.getSeconds(),e.milliseconds=i.getMilliseconds()-n.getMilliseconds(),0>e.milliseconds?(u=_(-e.milliseconds/1e3),e.seconds-=u,e.milliseconds+=1e3*u):1e3<=e.milliseconds&&(e.seconds+=g(e.milliseconds/1e3),e.milliseconds%=1e3),0>e.seconds?(u=_(-e.seconds/60),e.minutes-=u,e.seconds+=60*u):60<=e.seconds&&(e.minutes+=g(e.seconds/60),e.seconds%=60),0>e.minutes?(u=_(-e.minutes/60),e.hours-=u,e.minutes+=60*u):60<=e.minutes&&(e.hours+=g(e.minutes/60),e.minutes%=60),0>e.hours?(u=_(-e.hours/24),e.days-=u,e.hours+=24*u):24<=e.hours&&(e.days+=g(e.hours/24),e.hours%=24);0>e.days;)e.months--,e.days+=t(e.refMonth,1);if(7<=e.days&&(e.weeks+=g(e.days/7),e.days%=7),0>e.months?(u=_(-e.months/12),e.years-=u,e.months+=12*u):12<=e.months&&(e.years+=g(e.months/12),e.months%=12),10<=e.years&&(e.decades+=g(e.years/10),e.years%=10,10<=e.decades&&(e.centuries+=g(e.decades/10),e.decades%=10,10<=e.centuries&&(e.millennia+=g(e.centuries/10),e.centuries%=10))),n=0,!(1024&o)||n>=s?(e.centuries+=10*e.millennia,delete e.millennia):e.millennia&&n++,!(512&o)||n>=s?(e.decades+=10*e.centuries,delete e.centuries):e.centuries&&n++,!(256&o)||n>=s?(e.years+=10*e.decades,delete e.decades):e.decades&&n++,!(128&o)||n>=s?(e.months+=12*e.years,delete e.years):e.years&&n++,!(64&o)||n>=s?(e.months&&(e.days+=t(e.refMonth,e.months)),delete e.months,7<=e.days&&(e.weeks+=g(e.days/7),e.days%=7)):e.months&&n++,!(32&o)||n>=s?(e.days+=7*e.weeks,delete e.weeks):e.weeks&&n++,!(16&o)||n>=s?(e.hours+=24*e.days,delete e.days):e.days&&n++,!(8&o)||n>=s?(e.minutes+=60*e.hours,delete e.hours):e.hours&&n++,!(4&o)||n>=s?(e.seconds+=60*e.minutes,delete e.minutes):e.minutes&&n++,!(2&o)||n>=s?(e.milliseconds+=1e3*e.seconds,delete e.seconds):e.seconds&&n++,!(1&o)||n>=s){var f=a(e,0,"milliseconds","seconds",1e3,c);if(f&&(f=a(e,f,"seconds","minutes",60,c))&&(f=a(e,f,"minutes","hours",60,c))&&(f=a(e,f,"hours","days",24,c))&&(f=a(e,f,"days","weeks",7,c))&&(f=a(e,f,"weeks","months",r(e.refMonth)/7,c))){o=f;var d=e.refMonth,p=d.getTime(),h=new Date(p);if(h.setFullYear(d.getFullYear()+1),(f=a(e,o,"months","years",Math.round((h.getTime()-p)/864e5)/r(e.refMonth),c))&&(f=a(e,f,"years","decades",10,c))&&(f=a(e,f,"decades","centuries",10,c))&&(f=a(e,f,"centuries","millennia",10,c)))throw Error("Fractional unit overflow")}}}finally{delete e.refMonth}return e}function l(e,t,r,o,a){var l;r=+r||222,o=0<o?o:NaN,a=0<a?20>a?Math.round(a):20:0;var u=null;"function"==typeof e?(l=e,e=null):e instanceof Date||(null!==e&&isFinite(e)?e=new Date(+e):("object"===(void 0===u?"undefined":n(u))&&(u=e),e=null));var f=null;if("function"==typeof t?(l=t,t=null):t instanceof Date||(null!==t&&isFinite(t)?t=new Date(+t):("object"===(void 0===t?"undefined":n(t))&&(f=t),t=null)),u&&(e=i(u,t)),f&&(t=i(f,e)),!e&&!t)return new s;if(!l)return c(new s,e,t,r,o,a);var d;u=1&r?1e3/30:2&r?1e3:4&r?6e4:8&r?36e5:16&r?864e5:6048e5;return(f=function(){l(c(new s,e,t,r,o,a),d)})(),d=setInterval(f,u)}var u,f,d,p,h,m,v,y,_=Math.ceil,g=Math.floor;s.prototype.toString=function(e){var t=y(this),n=t.length;return n?1===n?t[0]:(e=d+t.pop(),t.join(p)+e):e?""+e:h},s.prototype.toHTML=function(e,t){e=e||"span";var n=y(this),r=n.length;if(!r)return(t=t||h)?"<"+e+">"+t+"</"+e+">":t;for(var i=0;i<r;i++)n[i]="<"+e+">"+n[i]+"</"+e+">";return 1===r?n[0]:(r=d+n.pop(),n.join(p)+r)},s.prototype.addTo=function(e){return i(this,e)},y=function(e){var t=[],n=e.millennia;return n&&t.push(m(n,10)),(n=e.centuries)&&t.push(m(n,9)),(n=e.decades)&&t.push(m(n,8)),(n=e.years)&&t.push(m(n,7)),(n=e.months)&&t.push(m(n,6)),(n=e.weeks)&&t.push(m(n,5)),(n=e.days)&&t.push(m(n,4)),(n=e.hours)&&t.push(m(n,3)),(n=e.minutes)&&t.push(m(n,2)),(n=e.seconds)&&t.push(m(n,1)),(n=e.milliseconds)&&t.push(m(n,0)),t},l.MILLISECONDS=1,l.SECONDS=2,l.MINUTES=4,l.HOURS=8,l.DAYS=16,l.WEEKS=32,l.MONTHS=64,l.YEARS=128,l.DECADES=256,l.CENTURIES=512,l.MILLENNIA=1024,l.DEFAULTS=222,l.ALL=2047;var b=l.setFormat=function(e){if(e){if("singular"in e||"plural"in e){var t=e.singular||[];t.split&&(t=t.split("|"));var n=e.plural||[];n.split&&(n=n.split("|"));for(var r=0;10>=r;r++)u[r]=t[r]||u[r],f[r]=n[r]||f[r]}"string"==typeof e.last&&(d=e.last),"string"==typeof e.delim&&(p=e.delim),"string"==typeof e.empty&&(h=e.empty),"function"==typeof e.formatNumber&&(v=e.formatNumber),"function"==typeof e.formatter&&(m=e.formatter)}},w=l.resetFormat=function(){u=" millisecond; second; minute; hour; day; week; month; year; decade; century; millennium".split(";"),f=" milliseconds; seconds; minutes; hours; days; weeks; months; years; decades; centuries; millennia".split(";"),d=" and ",p=", ",h="",v=function(e){return e},m=o};l.setLabels=function(e,t,n,r,i,o,s){b({singular:e,plural:t,last:n,delim:r,empty:i,formatNumber:o,formatter:s})},l.resetLabels=w,w(),e&&e.exports?e.exports=l:"function"==typeof window.define&&void 0!==window.define.amd&&window.define("countdown",[],function(){return l})}(e)},function(e,t){$(document).ready(function(){var e=$("[data-feature=countDown]"),t=(new Date).getTimezoneOffset()/60;e.each(function(e,n){var r=$(n),i=r.attr("data-event-date"),o=new Date(i);o.setHours(o.getHours()+t),countdown(new Date(o),function(e){var t=e.toString().replace(/(day+?)(s\b|\b)/g,"d").replace(/(hour+?)(s\b|\b)/g,"h").replace(/(minute+?)(s\b|\b)/g,"m").replace(/(second+?)(s\b|\b)/g,"s").replace("and",",").replace(/ /g,"").replace(/,/g," : ");r.text(t)})})})},function(e,t,n){"use strict";n.r(t);n(145),n(146)},function(e,t,n){},function(e,t){$(document).ready(function(){function e(e){if(e.length){var t=[];t=e[0].clubs;var n=parseInt(t[0].clubNumber,10);$(".club-geo").html($(".club-geo-template").html());var r=$(".featured .club img");$(r).attr("src","//www.24hourfitness.com/images/clubs/club_slideshows/"+n+"/album1/large/image1.jpg"),$(".featured .club .club-details h2").html(t[0].name),$(".featured .club .club-details h3").html(t[0].type+" Gym"),$(".featured .club").wrap('<a href="/Website/Club/'+t[0].clubNumber+'"></a>');for(var i=$(".other ul li img"),o=$(".other ul li .club-details h2"),s=$(".other ul li .club-details h3"),a=$(".other ul li"),c=0;c<i.length;c++){var l=i[c];n=parseInt(t[c+1].clubNumber,10),$(l).attr("src","//www.24hourfitness.com/images/clubs/club_slideshows/"+n+"/album1/large/image1.jpg"),$(o[c]).html(t[c+1].name);var u=t[c+1].type.replace("SuperSport","Super Sport").replace("UltraSport","Ultra Sport");$(s[c]).html(u+" Gym"),$(a[c]).html('<a href="/Website/Club/'+t[c+1].clubNumber+'">'+$(a[c]).html()+"</a>")}$(".geo-loading").is(":visible")&&$(".geo-loading").fadeOut(function(){$(".club-geo").fadeIn()})}}function t(){$(".geo-loading").is(":visible")&&$(".geo-loading").fadeOut(function(){$(".club-geo").fadeIn()})}window.appendLoader24({container:"#loader-large-black",size:"large",color:"black"}),$(".show-club-geo").on("click",function(){$(".options li").removeClass("active"),$(".show-club-geo").addClass("active"),$(".group-x,.geo-loading,.personal-training").hide(),$(".club-geo").show()}),$(".search-current-location").on("click",function(n){n.preventDefault(),$(".club-geo").fadeOut(function(){$(".geo-loading").fadeIn(function(){window.Gyms.findByHTML5Location(e,t)})})}),$(window).width()<767?t():window.Gyms.findByIp(e,t)})},function(e,t,n){"use strict";n.r(t);n(148)},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(150),n(151)},function(e,t,n){},function(e,t){var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};$(document).ready(function(){(function(){var e,t,r,i="https://www.24hourfitness.com",o="ba-simple-proxy.php",s="https://adretriever.clubcom.com/Image.aspx?c=",a="&w=315&h415=&t=0";function c(t){if("object"===(void 0===t?"undefined":n(t))&&"string"==typeof t.contents&&""!==t.contents)try{var i=t.contents.replace(/\\"/,/\\\\/);(e=JSON.parse(i)).length?function(){var t,n;for(r=$("#clubcom-ads-container"),t=0;t<e.length;t+=1)n="string"==typeof e[t].AdvertiserWebAddress&&""!==e[t].AdvertiserWebAddress.trim()?'<div class="clubcom-info-link"><a href="//'+e[t].AdvertiserWebAddress+'" target="_blank">'+e[t].AdvertiserWebAddress+"</a></div>":"",r.append('<div class="clubcom-item"><div class="clubcom-img-container" style="background-image:url('+s.replace("http:","")+e[t].ContentID+a+')"></div><div class="clubcom-info"><span class="clubcom-info-name">'+e[t].AdvertiserName+"</span>"+n+'<div class="clubcom-info-phone mobile"><a href="tel:'+e[t].PhoneNumber+'">'+e[t].PhoneNumber+"</a></div></div></div>");r.owlCarousel({nav:!0,autoHeight:!0,responsive:{0:{items:1},400:{items:2},900:{items:3},1600:{items:4},2000:{items:5}}})}():l()}catch(e){l()}else l()}function l(){$("#club-ads-tab, #clubcom-container").remove()}return $(".spotlight-container").owlCarousel({responsive:{0:{items:1},800:{items:2}}}),{init:function(){"object"===n(window.clubInfo)&&(t=window.clubInfo.clubId,$.ajax({url:i+"/utility/"+o,cache:!1,data:{url:"https://api.clubcom.com/WSGroupX.svc/GetVenueLocalAds?customerkey="+t},dataType:"json",success:c,error:l}))}}})().init()})},function(e,t,n){"use strict";n.r(t);n(153)},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(155),n(156)},function(e,t,n){},function(e,t){$().ready(function(){var e=$("#corporateLandingPageForm"),t=$("#corporateCode"),n=e.find(".link-button-24");e.validate({rules:{corporateCode:{required:!0,maxlength:16}},messages:{corporateCode:{required:"Enter a Corporate Code",maxlength:"Corporate code must be 16 characters. Please try again."}}}),t.on("blur keyup",function(){e.valid()?n.prop("disabled",!1):n.prop("disabled","disabled")}),e.on("submit",function(e){e.preventDefault();var n,r=$.trim(t.val()),i=(n=window.location.hostname).indexOf("webdev")>-1?"https://api-dev.24hourfitness.com":n.indexOf("webqa")>-1?"https://api-qa.24hourfitness.com":n.indexOf("webtrn")>-1?"https://api-trn.24hourfitness.com":n.indexOf("www.24hourfitness.com")>-1?"https://api.24hourfitness.com":"https://api-dev.24hourfitness.com";$("#errorMessage").hide(),$("#wait").show(),r=r.toUpperCase(),console.log("corporateCode: "+r),-1==r.indexOf("CORP")&&(r=r.concat("CORP"),console.log("corporateCode plus CORP: "+r)),$.ajax({headers:{"Content-Type":"application/json"},url:i+"/sales/v2/corporate/"+r,type:"GET",data:"",datatype:"json"}).done(function(e){var t=e.corporateId;$.ajax({headers:{"Content-Type":"application/json"},url:i+"/sales/v2/corporate-exclusion/"+t,type:"GET",data:"",datatype:"json"}).done(function(e){e.corporateId;$("#wait").hide(),window.location.href="/health_clubs/find-a-gym/?type=sales&flow=POS&corporateId="+r}).fail(function(e){$("#wait").hide(),$("#errorMessage").html("<p>Please visit the club to redeem this corporate ID.</p>"),$("#errorMessage").show()})}).fail(function(e){$("#wait").hide(),$("#errorMessage").html("<p>Corporate ID does not exist.</p>"),$("#errorMessage").show()})})})},function(e,t,n){"use strict";n.r(t);n(158),n(159)},function(e,t,n){},function(e,t){$().ready(function(){var e=$("#costcoLandingPageForm"),t=$("#costcoCode"),n=e.find(".link-button-24");e.validate({rules:{costcoCode:{required:!0,maxlength:16}},messages:{costcoCode:{required:"Enter a Costco Code",maxlength:"Promo code must be 16 characters. Please try again."}}}),t.on("blur keyup",function(){e.valid()?n.prop("disabled",!1):n.prop("disabled","disabled")}),e.on("submit",function(e){e.preventDefault();var n,r=$.trim(t.val()),i=(n=window.location.hostname).indexOf("webdev")>-1?"https://api-dev.24hourfitness.com":n.indexOf("webqa")>-1?"https://api-qa.24hourfitness.com":n.indexOf("webtrn")>-1?"https://api-trn.24hourfitness.com":n.indexOf("www.24hourfitness.com")>-1?"https://api.24hourfitness.com":"https://api-dev.24hourfitness.com";$("#errorMessage").hide(),$("#wait").show(),$.ajax({headers:{"Content-Type":"application/json"},url:i+"/sales/v2/costco",type:"POST",data:'{"clubNumber": "00024","salesTiming": "POS","salesChannel": "Online","customerType": "Primary","productType": "Membership","certificateCode": "'+r+'"}',datatype:"json"}).done(function(e){if(null==e.error){var t=e.pricedProducts[0].access__c,n="";"Sport"==t&&(n="sport"),"SuperSport"!=t&&"Super-Sport"!=t||(n="supersport"),""!=n&&($("#wait").hide(),window.location.href="/health_clubs/find-a-gym/?type=sales&flow=POS_CT&accessLevel="+n+"&certificateId="+r)}else $("#wait").hide(),$("#errorMessage").show()}).fail(function(e){$("#wait").hide(),$("#errorMessage").show()})})})},function(e,t,n){"use strict";n.r(t);n(161),n(162)},function(e,t,n){},function(e,t){$().ready(function(){})},function(e,t,n){"use strict";n.r(t);n(164),n(165)},function(e,t,n){},function(e,t){$().ready(function(){var e=$("#loginLandingPageForm"),t=$("#user"),n=$("#password"),r=$("#loginButton"),i=$("#flowParam"),o=$("#birthday-errors");if(null!=$.cookie("securityToken")&&null!=$.cookie("isZuoraMember")&&null!=$.cookie("loggedInUserName")&&("-1"!=$(location).attr("pathname").indexOf("sales/buy_personal_training")||"-1"!=$(location).attr("pathname").indexOf("sales/add_services")||"-1"!=$(location).attr("pathname").indexOf("sales/upgrade_membership")||"-1"!=$(location).attr("pathname").indexOf("sales/add_friends_and_family"))){var s=h();$.ajax({headers:{securityToken:$.cookie("securityToken")},url:s+"/account/users/"+$.cookie("loggedInUserName"),type:"GET",data:"",datatype:"json"}).done(function(e,t,n){var r=e.memberships[0].number,o="M2";"true"==$.cookie("isZuoraMember")&&(o="Zuora"),"-1"!=$(location).attr("pathname").indexOf("sales/add_friends_and_family")?window.location.href="/sales-redirect/salesredirect.html?availability=web&flow="+$.trim(i.val())+"&memberId="+r+"&system="+o:window.location.href="/health_clubs/find-a-gym/?type=sales&flow="+$.trim(i.val())+"&memberId="+r+"&system="+o}).fail(function(e){})}var a=$("#code"),c=$("#birthdayButton"),l=$("#change-form"),u=$("#back-form"),f=$("#birthday-form");if(null!=$.cookie("securityToken")&&null!=$.cookie("isZuoraMember")&&null!=$.cookie("membershipNumber")&&("-1"!=$(location).attr("pathname").indexOf("sales/buy_personal_training")||"-1"!=$(location).attr("pathname").indexOf("sales/add_services")||"-1"!=$(location).attr("pathname").indexOf("sales/upgrade_membership")||"-1"!=$(location).attr("pathname").indexOf("sales/add_friends_and_family"))){s=h();var d=$.cookie("membershipNumber"),p="M2";"true"==$.cookie("isZuoraMember")&&(p="Zuora"),""!=d&&("-1"!=$(location).attr("pathname").indexOf("sales/add_friends_and_family")?window.location.href="/sales-redirect/salesredirect.html?availability=web&flow="+$.trim(i.val())+"&memberId="+d+"&system="+p:window.location.href="/health_clubs/find-a-gym/?type=sales&flow="+$.trim(i.val())+"&memberId="+d+"&system="+p)}function h(){var e=window.location.hostname;return e.indexOf("webdev")>-1?"https://api-dev.24hourfitness.com":e.indexOf("webqa")>-1?"https://api-qa.24hourfitness.com":e.indexOf("webtrn")>-1?"https://api-trn.24hourfitness.com":e.indexOf("www.24hourfitness.com")>-1?"https://api.24hourfitness.com":"https://api-dev.24hourfitness.com"}$("#code").on("focus",function(){$("#code-label").addClass("focus-label")}),$("#code").on("focusout",function(){""!=$("#code").val()||$("#code-label").removeClass("focus-label")}),a.on("blur keyup",function(){f.valid()?c.prop("disabled",!1):c.prop("disabled","disabled")}),l.on("click",function(t){t.preventDefault(),f.hide(),$("#birthdayErrorMessage").hide(),$("#birthdayNetworkMessage").hide(),$("#birthdayMonthError").hide(),$("#birthdayDayError").hide(),$("#birthdayYearError").hide(),$("#birthdayAgeError").hide(),e.fadeToggle()}),u.on("click",function(t){t.preventDefault(),e.hide(),f.fadeToggle()}),f.validate({rules:{code:{required:!0},birthday:{required:!0}},messages:{code:{required:"Enter a Code"},birthday:{required:"Enter a birthday"}}}),f.on("submit",function(e){e.preventDefault();var t=$("#month-drop select").val(),n=$("#day-drop select").val(),r=$("#year-drop select").val(),i=new Date(r,t-1,n),s=new Date,c=Math.floor((s-i)/315576e5),l=$.trim(a.val());n<10&&(n="0"+n),t<10&&(t="0"+t);var u=$.trim(r+"-"+t+"-"+n);console.log("birthday: "+u);var f=h();o.find($(".error")).hide(),"Month"==t?o.find($("#birthdayMonthError")).show():"Day"==n?o.find($("#birthdayDayError")).show():"Year"==r?o.find($("#birthdayYearError")).show():c>=12?(o.find($(".error")).hide(),$("#birthdayErrorMessage").hide(),$("#birthdayNetworkMessage").hide(),$("#wait").show(),$.ajax({headers:{"Content-Type":"application/json"},url:f+"/account/users/login",type:"POST",data:'{"memberIdentifier":"'+l+'","birthDate": "'+u+'"}',datatype:"json"}).done(function(e,t,n){var r=new Date;r.setTime(r.getTime()+12e5),console.log("data.username: "+e);var i=e.username,o=n.getResponseHeader("security-token"),s=n.getResponseHeader("isZuoraMember"),a="";console.log("username: "+i),""==i?(console.log("path 1"),$.ajax({headers:{"Content-Type":"application/json",securityToken:o},url:f+"/account/members/validate",type:"POST",data:'{"memberIdentifier":"'+l+'","birthday": "'+u+'"}',datatype:"json"}).done(function(e,t,n){a=e.memberships[e.memberships.length-1].number,console.log("membership number 1: "+a),$.cookie("securityToken",o,{expires:r,path:"/"}),null!=s&&"true"==s?$.cookie("isZuoraMember","true",{expires:r,path:"/"}):$.cookie("isZuoraMember","false",{expires:r,path:"/"}),$.cookie("membershipNumber",a,{expires:r,path:"/"}),$("#wait").hide(),location.reload()}).fail(function(e){$("#wait").hide(),$("#birthdayNetworkMessage").show()})):(console.log("path 2"),$.ajax({headers:{securityToken:o},url:f+"/account/users/"+i,type:"GET",data:"",datatype:"json"}).done(function(e,t,n){a=e.memberships[e.memberships.length-1].number,console.log("membership number 2: "+a),$.cookie("securityToken",o,{expires:r,path:"/"}),null!=s&&"true"==s?$.cookie("isZuoraMember","true",{expires:r,path:"/"}):$.cookie("isZuoraMember","false",{expires:r,path:"/"}),$.cookie("membershipNumber",a,{expires:r,path:"/"}),$("#wait").hide(),location.reload()}).fail(function(e){$("#wait").hide(),$("#birthdayNetworkMessage").show()}))}).fail(function(e){$("#wait").hide(),o.find($(".error")).hide(),$("#birthdayErrorMessage").show()})):(o.find($(".error")).hide(),o.find($("#birthdayAgeError")).show())}),$("#createNewAccount").on("click",function(){$.cookie("my_account_redirect",$(location).attr("pathname"),{path:"/"})}),$("#user").on("focus",function(){$("#user-label").addClass("focus-label")}),$("#user").on("focusout",function(){""!=$("#user").val()||$("#user-label").removeClass("focus-label")}),$("#password").on("focus",function(){$("#password-label").addClass("focus-label")}),$("#password").on("focusout",function(){""!=$("#password").val()||$("#password-label").removeClass("focus-label")}),null!=$.cookie("loggedInUserName")?($("#user-label").addClass("focus-label"),t.val($.cookie("loggedInUserName"))):$("#user-label").removeClass("focus-label"),e.validate({rules:{user:{required:!0},password:{required:!0}},messages:{user:{required:"Enter a User Name"},password:{required:"Enter a Password"}}}),t.on("blur keyup",function(){e.valid()?r.prop("disabled",!1):r.prop("disabled","disabled")}),n.on("blur keyup",function(){e.valid()?r.prop("disabled",!1):r.prop("disabled","disabled")}),e.on("submit",function(e){e.preventDefault();var r=$.trim(t.val()),i=$.trim(n.val()),o=h();$("#errorMessage").hide(),$("#wait").show(),$.ajax({headers:{"Content-Type":"application/json"},url:o+"/account/users/login",type:"POST",data:'{"username":"'+r+'","password": "'+i+'"}',datatype:"json"}).done(function(e,t,n){var r=new Date;r.setTime(r.getTime()+12e5);var i=e.username,o=n.getResponseHeader("security-token"),s=n.getResponseHeader("isZuoraMember");$.cookie("securityToken",o,{expires:r,path:"/"}),null!=s&&"true"==s?$.cookie("isZuoraMember","true",{expires:r,path:"/"}):$.cookie("isZuoraMember","false",{expires:r,path:"/"}),null!=$("input[type=checkbox][name=rememberme]:checked").val()&&"true"==$("input[type=checkbox][name=rememberme]:checked").val()?$.cookie("loggedInUserName",i,{expires:30,path:"/"}):$.cookie("loggedInUserName",i,{expires:r,path:"/"}),$("#wait").hide(),location.reload()}).fail(function(e){$("#wait").hide(),$("#errorMessage").show()})});for(var m=(new Date).getFullYear(),v=$("<select><option>Year</option>"),y=12;y<=110;y++){var _=m-y;$("<option>",{value:_,text:_}).appendTo(v)}v.appendTo("#year-drop"),$("#user").on("focus",function(){$("#user-label").addClass("focus-label")}),$("#user").on("focusout",function(){""!=$("#user").val()||$("#user-label").removeClass("focus-label")}),$("#password").on("focus",function(){$("#password-label").addClass("focus-label")}),$("#password").on("focusout",function(){""!=$("#password").val()||$("#password-label").removeClass("focus-label")});l=$("#change-form"),f=$("#birthday-form");var g,b,w,k,C,T,x=$("#login-form");for(l.on("click",function(e){e.preventDefault(),f.hide(),x.fadeToggle()}),g=document.getElementsByClassName("custom-select"),y=0;y<g.length;y++){for(w=g[y].getElementsByTagName("select")[0],(k=document.createElement("DIV")).setAttribute("class","select-selected"),k.innerHTML=w.options[w.selectedIndex].innerHTML,g[y].appendChild(k),(C=document.createElement("DIV")).setAttribute("class","select-items select-hide"),b=1;b<w.length;b++)(T=document.createElement("DIV")).innerHTML=w.options[b].innerHTML,T.addEventListener("click",function(e){var t,n,r,i,o;for(i=this.parentNode.parentNode.getElementsByTagName("select")[0],o=this.parentNode.previousSibling,n=0;n<i.length;n++)if(i.options[n].innerHTML==this.innerHTML){for(i.selectedIndex=n,o.innerHTML=this.innerHTML,t=this.parentNode.getElementsByClassName("same-as-selected"),r=0;r<t.length;r++)t[r].removeAttribute("class");this.setAttribute("class","same-as-selected");break}o.click()}),C.appendChild(T);g[y].appendChild(C),k.addEventListener("click",function(e){e.stopPropagation(),j(this),this.nextSibling.classList.toggle("select-hide"),this.classList.toggle("select-arrow-active")})}function j(e){var t,n,r,i=[];for(t=document.getElementsByClassName("select-items"),n=document.getElementsByClassName("select-selected"),r=0;r<n.length;r++)e==n[r]?i.push(r):n[r].classList.remove("select-arrow-active");for(r=0;r<t.length;r++)i.indexOf(r)&&t[r].classList.add("select-hide")}document.addEventListener("click",j)})},function(e,t,n){"use strict";n.r(t);n(167),n(168)},function(e,t,n){},function(e,t){$().ready(function(){})},function(e,t,n){"use strict";n.r(t);n(170),n(171)},function(e,t,n){},function(e,t){$().ready(function(){})},function(e,t,n){"use strict";n.r(t);n(173),n(174)},function(e,t,n){},function(e,t){$().ready(function(){})},function(e,t,n){"use strict";n.r(t);n(176),n(177)},function(e,t,n){},function(e,t){$().ready(function(){})},function(e,t){},function(e,t,n){"use strict";n.r(t);n(180)},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(182),n(183)},function(e,t,n){},function(e,t){$(".button-top").find("a").on("click",function(e){e.preventDefault();var t=$(this).attr("href");$("html, body").animate({scrollTop:$(t).offset().top},"slow")});$(window).on("scroll",function(){var e=$(".container-24").height();$(window).scrollTop()>=350&&e>=1e3?$(".button-top").fadeIn(1e3):$(".button-top").fadeOut()})},function(e,t,n){"use strict";n.r(t);n(185),n(186)},function(e,t,n){},function(e,t){$(".button-top").find("a").on("click",function(e){e.preventDefault();var t=$(this).attr("href");$("html, body").animate({scrollTop:$(t).offset().top},"slow")});$(window).on("scroll",function(){var e=$(".container-24").height();$(window).scrollTop()>=350&&e>=1e3?$(".button-top").fadeIn(1e3):$(".button-top").fadeOut()})},function(e,t,n){"use strict";n.r(t);n(188),n(189),n(190),n(193),n(194)},function(e,t,n){},function(e,t){!function(e){"use strict";if(!e.fetch){var t={searchParams:"URLSearchParams"in e,iterable:"Symbol"in e&&"iterator"in Symbol,blob:"FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in e,arrayBuffer:"ArrayBuffer"in e};if(t.arrayBuffer)var n=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],r=function(e){return e&&DataView.prototype.isPrototypeOf(e)},i=ArrayBuffer.isView||function(e){return e&&n.indexOf(Object.prototype.toString.call(e))>-1};u.prototype.append=function(e,t){e=a(e),t=c(t);var n=this.map[e];this.map[e]=n?n+","+t:t},u.prototype.delete=function(e){delete this.map[a(e)]},u.prototype.get=function(e){return e=a(e),this.has(e)?this.map[e]:null},u.prototype.has=function(e){return this.map.hasOwnProperty(a(e))},u.prototype.set=function(e,t){this.map[a(e)]=c(t)},u.prototype.forEach=function(e,t){for(var n in this.map)this.map.hasOwnProperty(n)&&e.call(t,this.map[n],n,this)},u.prototype.keys=function(){var e=[];return this.forEach(function(t,n){e.push(n)}),l(e)},u.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),l(e)},u.prototype.entries=function(){var e=[];return this.forEach(function(t,n){e.push([n,t])}),l(e)},t.iterable&&(u.prototype[Symbol.iterator]=u.prototype.entries);var o=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];v.prototype.clone=function(){return new v(this,{body:this._bodyInit})},m.call(v.prototype),m.call(_.prototype),_.prototype.clone=function(){return new _(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new u(this.headers),url:this.url})},_.error=function(){var e=new _(null,{status:0,statusText:""});return e.type="error",e};var s=[301,302,303,307,308];_.redirect=function(e,t){if(-1===s.indexOf(t))throw new RangeError("Invalid status code");return new _(null,{status:t,headers:{location:e}})},e.Headers=u,e.Request=v,e.Response=_,e.fetch=function(e,n){return new Promise(function(r,i){var o=new v(e,n),s=new XMLHttpRequest;s.onload=function(){var e,t,n={status:s.status,statusText:s.statusText,headers:(e=s.getAllResponseHeaders()||"",t=new u,e.split(/\r?\n/).forEach(function(e){var n=e.split(":"),r=n.shift().trim();if(r){var i=n.join(":").trim();t.append(r,i)}}),t)};n.url="responseURL"in s?s.responseURL:n.headers.get("X-Request-URL");var i="response"in s?s.response:s.responseText;r(new _(i,n))},s.onerror=function(){i(new TypeError("Network request failed"))},s.ontimeout=function(){i(new TypeError("Network request failed"))},s.open(o.method,o.url,!0),"include"===o.credentials&&(s.withCredentials=!0),"responseType"in s&&t.blob&&(s.responseType="blob"),o.headers.forEach(function(e,t){s.setRequestHeader(t,e)}),s.send(void 0===o._bodyInit?null:o._bodyInit)})},e.fetch.polyfill=!0}function a(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function c(e){return"string"!=typeof e&&(e=String(e)),e}function l(e){var n={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return t.iterable&&(n[Symbol.iterator]=function(){return n}),n}function u(e){this.map={},e instanceof u?e.forEach(function(e,t){this.append(t,e)},this):Array.isArray(e)?e.forEach(function(e){this.append(e[0],e[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function f(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function d(e){return new Promise(function(t,n){e.onload=function(){t(e.result)},e.onerror=function(){n(e.error)}})}function p(e){var t=new FileReader,n=d(t);return t.readAsArrayBuffer(e),n}function h(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function m(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e,e)if("string"==typeof e)this._bodyText=e;else if(t.blob&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(t.formData&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(t.searchParams&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else if(t.arrayBuffer&&t.blob&&r(e))this._bodyArrayBuffer=h(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!t.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(e)&&!i(e))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=h(e)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):t.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},t.blob&&(this.blob=function(){var e=f(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?f(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(p)}),this.text=function(){var e,t,n,r=f(this);if(r)return r;if(this._bodyBlob)return e=this._bodyBlob,t=new FileReader,n=d(t),t.readAsText(e),n;if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),n=new Array(t.length),r=0;r<t.length;r++)n[r]=String.fromCharCode(t[r]);return n.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},t.formData&&(this.formData=function(){return this.text().then(y)}),this.json=function(){return this.text().then(JSON.parse)},this}function v(e,t){var n,r,i=(t=t||{}).body;if(e instanceof v){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new u(e.headers)),this.method=e.method,this.mode=e.mode,i||null==e._bodyInit||(i=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"omit",!t.headers&&this.headers||(this.headers=new u(t.headers)),this.method=(n=t.method||this.method||"GET",r=n.toUpperCase(),o.indexOf(r)>-1?r:n),this.mode=t.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&i)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(i)}function y(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var n=e.split("="),r=n.shift().replace(/\+/g," "),i=n.join("=").replace(/\+/g," ");t.append(decodeURIComponent(r),decodeURIComponent(i))}}),t}function _(e,t){t||(t={}),this.type="default",this.status="status"in t?t.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new u(t.headers),this.url=t.url||"",this._initBody(e)}}("undefined"!=typeof self?self:this)},function(e,t,n){(function(n,r,i){var o,s,a,c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l;l=function(){var e,t,o;return function e(t,n,r){function i(s,a){if(!n[s]){if(!t[s]){var c="function"==typeof _dereq_&&_dereq_;if(!a&&c)return c(s,!0);if(o)return o(s,!0);var l=new Error("Cannot find module '"+s+"'");throw l.code="MODULE_NOT_FOUND",l}var u=n[s]={exports:{}};t[s][0].call(u.exports,function(e){var n=t[s][1][e];return i(n||e)},u,u.exports,e,t,n,r)}return n[s].exports}for(var o="function"==typeof _dereq_&&_dereq_,s=0;s<r.length;s++)i(r[s]);return i}({1:[function(e,t,n){"use strict";t.exports=function(e){var t=e._SomePromiseArray;function n(e){var n=new t(e),r=n.promise();return n.setHowMany(1),n.setUnwrap(),n.init(),r}e.any=function(e){return n(e)},e.prototype.any=function(){return n(this)}}},{}],2:[function(e,t,r){"use strict";var i;try{throw new Error}catch(e){i=e}var o=e("./schedule"),s=e("./queue"),a=e("./util");function c(){this._customScheduler=!1,this._isTickUsed=!1,this._lateQueue=new s(16),this._normalQueue=new s(16),this._haveDrainedQueues=!1,this._trampolineEnabled=!0;var e=this;this.drainQueues=function(){e._drainQueues()},this._schedule=o}function l(e,t,n){this._lateQueue.push(e,t,n),this._queueTick()}function u(e,t,n){this._normalQueue.push(e,t,n),this._queueTick()}function f(e){this._normalQueue._pushOne(e),this._queueTick()}function d(e){for(;e.length()>0;)p(e)}function p(e){var t=e.shift();if("function"!=typeof t)t._settlePromises();else{var n=e.shift(),r=e.shift();t.call(n,r)}}c.prototype.setScheduler=function(e){var t=this._schedule;return this._schedule=e,this._customScheduler=!0,t},c.prototype.hasCustomScheduler=function(){return this._customScheduler},c.prototype.enableTrampoline=function(){this._trampolineEnabled=!0},c.prototype.disableTrampolineIfNecessary=function(){a.hasDevTools&&(this._trampolineEnabled=!1)},c.prototype.haveItemsQueued=function(){return this._isTickUsed||this._haveDrainedQueues},c.prototype.fatalError=function(e,t){t?(n.stderr.write("Fatal "+(e instanceof Error?e.stack:e)+"\n"),n.exit(2)):this.throwLater(e)},c.prototype.throwLater=function(e,t){if(1===arguments.length&&(t=e,e=function(){throw t}),"undefined"!=typeof setTimeout)setTimeout(function(){e(t)},0);else try{this._schedule(function(){e(t)})}catch(e){throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n")}},a.hasDevTools?(c.prototype.invokeLater=function(e,t,n){this._trampolineEnabled?l.call(this,e,t,n):this._schedule(function(){setTimeout(function(){e.call(t,n)},100)})},c.prototype.invoke=function(e,t,n){this._trampolineEnabled?u.call(this,e,t,n):this._schedule(function(){e.call(t,n)})},c.prototype.settlePromises=function(e){this._trampolineEnabled?f.call(this,e):this._schedule(function(){e._settlePromises()})}):(c.prototype.invokeLater=l,c.prototype.invoke=u,c.prototype.settlePromises=f),c.prototype._drainQueues=function(){d(this._normalQueue),this._reset(),this._haveDrainedQueues=!0,d(this._lateQueue)},c.prototype._queueTick=function(){this._isTickUsed||(this._isTickUsed=!0,this._schedule(this.drainQueues))},c.prototype._reset=function(){this._isTickUsed=!1},t.exports=c,t.exports.firstLineError=i},{"./queue":26,"./schedule":29,"./util":36}],3:[function(e,t,n){"use strict";t.exports=function(e,t,n,r){var i=!1,o=function(e,t){this._reject(t)},s=function(e,t){t.promiseRejectionQueued=!0,t.bindingPromise._then(o,o,null,this,e)},a=function(e,t){0==(50397184&this._bitField)&&this._resolveCallback(t.target)},c=function(e,t){t.promiseRejectionQueued||this._reject(e)};e.prototype.bind=function(o){i||(i=!0,e.prototype._propagateFrom=r.propagateFromFunction(),e.prototype._boundValue=r.boundValueFunction());var l=n(o),u=new e(t);u._propagateFrom(this,1);var f=this._target();if(u._setBoundTo(l),l instanceof e){var d={promiseRejectionQueued:!1,promise:u,target:f,bindingPromise:l};f._then(t,s,void 0,u,d),l._then(a,c,void 0,u,d),u._setOnCancel(l)}else u._resolveCallback(f);return u},e.prototype._setBoundTo=function(e){void 0!==e?(this._bitField=2097152|this._bitField,this._boundTo=e):this._bitField=-2097153&this._bitField},e.prototype._isBound=function(){return 2097152==(2097152&this._bitField)},e.bind=function(t,n){return e.resolve(n).bind(t)}}},{}],4:[function(e,t,n){"use strict";var r;"undefined"!=typeof Promise&&(r=Promise);var i=e("./promise")();i.noConflict=function(){try{Promise===i&&(Promise=r)}catch(e){}return i},t.exports=i},{"./promise":22}],5:[function(e,t,n){"use strict";var r=Object.create;if(r){var i=r(null),o=r(null);i[" size"]=o[" size"]=0}t.exports=function(t){var n=e("./util"),r=n.canEvaluate;n.isIdentifier;function i(e){return function(e,r){var i;if(null!=e&&(i=e[r]),"function"!=typeof i){var o="Object "+n.classString(e)+" has no method '"+n.toString(r)+"'";throw new t.TypeError(o)}return i}(e,this.pop()).apply(e,this)}function o(e){return e[this]}function s(e){var t=+this;return t<0&&(t=Math.max(0,t+e.length)),e[t]}t.prototype.call=function(e){var t=[].slice.call(arguments,1);return t.push(e),this._then(i,void 0,void 0,t,void 0)},t.prototype.get=function(e){var t;if("number"==typeof e)t=s;else if(r){var n=(void 0)(e);t=null!==n?n:o}else t=o;return this._then(t,void 0,void 0,e,void 0)}}},{"./util":36}],6:[function(e,t,n){"use strict";t.exports=function(t,n,r,i){var o=e("./util"),s=o.tryCatch,a=o.errorObj,c=t._async;t.prototype.break=t.prototype.cancel=function(){if(!i.cancellation())return this._warn("cancellation is disabled");for(var e=this,t=e;e._isCancellable();){if(!e._cancelBy(t)){t._isFollowing()?t._followee().cancel():t._cancelBranched();break}var n=e._cancellationParent;if(null==n||!n._isCancellable()){e._isFollowing()?e._followee().cancel():e._cancelBranched();break}e._isFollowing()&&e._followee().cancel(),e._setWillBeCancelled(),t=e,e=n}},t.prototype._branchHasCancelled=function(){this._branchesRemainingToCancel--},t.prototype._enoughBranchesHaveCancelled=function(){return void 0===this._branchesRemainingToCancel||this._branchesRemainingToCancel<=0},t.prototype._cancelBy=function(e){return e===this?(this._branchesRemainingToCancel=0,this._invokeOnCancel(),!0):(this._branchHasCancelled(),!!this._enoughBranchesHaveCancelled()&&(this._invokeOnCancel(),!0))},t.prototype._cancelBranched=function(){this._enoughBranchesHaveCancelled()&&this._cancel()},t.prototype._cancel=function(){this._isCancellable()&&(this._setCancelled(),c.invoke(this._cancelPromises,this,void 0))},t.prototype._cancelPromises=function(){this._length()>0&&this._settlePromises()},t.prototype._unsetOnCancel=function(){this._onCancelField=void 0},t.prototype._isCancellable=function(){return this.isPending()&&!this._isCancelled()},t.prototype.isCancellable=function(){return this.isPending()&&!this.isCancelled()},t.prototype._doInvokeOnCancel=function(e,t){if(o.isArray(e))for(var n=0;n<e.length;++n)this._doInvokeOnCancel(e[n],t);else if(void 0!==e)if("function"==typeof e){if(!t){var r=s(e).call(this._boundValue());r===a&&(this._attachExtraTrace(r.e),c.throwLater(r.e))}}else e._resultCancelled(this)},t.prototype._invokeOnCancel=function(){var e=this._onCancel();this._unsetOnCancel(),c.invoke(this._doInvokeOnCancel,this,e)},t.prototype._invokeInternalOnCancel=function(){this._isCancellable()&&(this._doInvokeOnCancel(this._onCancel(),!0),this._unsetOnCancel())},t.prototype._resultCancelled=function(){this.cancel()}}},{"./util":36}],7:[function(e,t,n){"use strict";t.exports=function(t){var n=e("./util"),r=e("./es5").keys,i=n.tryCatch,o=n.errorObj;return function(e,s,a){return function(c){var l=a._boundValue();e:for(var u=0;u<e.length;++u){var f=e[u];if(f===Error||null!=f&&f.prototype instanceof Error){if(c instanceof f)return i(s).call(l,c)}else if("function"==typeof f){var d=i(f).call(l,c);if(d===o)return d;if(d)return i(s).call(l,c)}else if(n.isObject(c)){for(var p=r(f),h=0;h<p.length;++h){var m=p[h];if(f[m]!=c[m])continue e}return i(s).call(l,c)}}return t}}}},{"./es5":13,"./util":36}],8:[function(e,t,n){"use strict";t.exports=function(e){var t=!1,n=[];function r(){this._trace=new r.CapturedTrace(i())}function i(){var e=n.length-1;if(e>=0)return n[e]}return e.prototype._promiseCreated=function(){},e.prototype._pushContext=function(){},e.prototype._popContext=function(){return null},e._peekContext=e.prototype._peekContext=function(){},r.prototype._pushContext=function(){void 0!==this._trace&&(this._trace._promiseCreated=null,n.push(this._trace))},r.prototype._popContext=function(){if(void 0!==this._trace){var e=n.pop(),t=e._promiseCreated;return e._promiseCreated=null,t}return null},r.CapturedTrace=null,r.create=function(){if(t)return new r},r.deactivateLongStackTraces=function(){},r.activateLongStackTraces=function(){var n=e.prototype._pushContext,o=e.prototype._popContext,s=e._peekContext,a=e.prototype._peekContext,c=e.prototype._promiseCreated;r.deactivateLongStackTraces=function(){e.prototype._pushContext=n,e.prototype._popContext=o,e._peekContext=s,e.prototype._peekContext=a,e.prototype._promiseCreated=c,t=!1},t=!0,e.prototype._pushContext=r.prototype._pushContext,e.prototype._popContext=r.prototype._popContext,e._peekContext=e.prototype._peekContext=i,e.prototype._promiseCreated=function(){var e=this._peekContext();e&&null==e._promiseCreated&&(e._promiseCreated=this)}},r}},{}],9:[function(e,t,r){"use strict";t.exports=function(t,r){var i,o,s,a=t._getDomain,l=t._async,u=e("./errors").Warning,f=e("./util"),d=e("./es5"),p=f.canAttachTrace,h=/[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/,m=/\((?:timers\.js):\d+:\d+\)/,v=/[\/<\(](.+?):(\d+):(\d+)\)?\s*$/,y=null,_=null,g=!1,b=!(0==f.env("BLUEBIRD_DEBUG")),w=!(0==f.env("BLUEBIRD_WARNINGS")||!b&&!f.env("BLUEBIRD_WARNINGS")),k=!(0==f.env("BLUEBIRD_LONG_STACK_TRACES")||!b&&!f.env("BLUEBIRD_LONG_STACK_TRACES")),$=0!=f.env("BLUEBIRD_W_FORGOTTEN_RETURN")&&(w||!!f.env("BLUEBIRD_W_FORGOTTEN_RETURN"));t.prototype.suppressUnhandledRejections=function(){var e=this._target();e._bitField=-1048577&e._bitField|524288},t.prototype._ensurePossibleRejectionHandled=function(){if(0==(524288&this._bitField)){this._setRejectionIsUnhandled();var e=this;setTimeout(function(){e._notifyUnhandledRejection()},1)}},t.prototype._notifyUnhandledRejectionIsHandled=function(){z("rejectionHandled",i,void 0,this)},t.prototype._setReturnedNonUndefined=function(){this._bitField=268435456|this._bitField},t.prototype._returnedNonUndefined=function(){return 0!=(268435456&this._bitField)},t.prototype._notifyUnhandledRejection=function(){if(this._isRejectionUnhandled()){var e=this._settledValue();this._setUnhandledRejectionIsNotified(),z("unhandledRejection",o,e,this)}},t.prototype._setUnhandledRejectionIsNotified=function(){this._bitField=262144|this._bitField},t.prototype._unsetUnhandledRejectionIsNotified=function(){this._bitField=-262145&this._bitField},t.prototype._isUnhandledRejectionNotified=function(){return(262144&this._bitField)>0},t.prototype._setRejectionIsUnhandled=function(){this._bitField=1048576|this._bitField},t.prototype._unsetRejectionIsUnhandled=function(){this._bitField=-1048577&this._bitField,this._isUnhandledRejectionNotified()&&(this._unsetUnhandledRejectionIsNotified(),this._notifyUnhandledRejectionIsHandled())},t.prototype._isRejectionUnhandled=function(){return(1048576&this._bitField)>0},t.prototype._warn=function(e,t,n){return H(e,t,n||this)},t.onPossiblyUnhandledRejection=function(e){var t=a();o="function"==typeof e?null===t?e:f.domainBind(t,e):void 0},t.onUnhandledRejectionHandled=function(e){var t=a();i="function"==typeof e?null===t?e:f.domainBind(t,e):void 0};var C=function(){};t.longStackTraces=function(){if(l.haveItemsQueued()&&!ee.longStackTraces)throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n");if(!ee.longStackTraces&&Q()){var e=t.prototype._captureStackTrace,n=t.prototype._attachExtraTrace,i=t.prototype._dereferenceTrace;ee.longStackTraces=!0,C=function(){if(l.haveItemsQueued()&&!ee.longStackTraces)throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n");t.prototype._captureStackTrace=e,t.prototype._attachExtraTrace=n,t.prototype._dereferenceTrace=i,r.deactivateLongStackTraces(),l.enableTrampoline(),ee.longStackTraces=!1},t.prototype._captureStackTrace=L,t.prototype._attachExtraTrace=U,t.prototype._dereferenceTrace=B,r.activateLongStackTraces(),l.disableTrampolineIfNecessary()}},t.hasLongStackTraces=function(){return ee.longStackTraces&&Q()};var T=function(){try{if("function"==typeof CustomEvent){var e=new CustomEvent("CustomEvent");return f.global.dispatchEvent(e),function(e,t){var n={detail:t,cancelable:!0};d.defineProperty(n,"promise",{value:t.promise}),d.defineProperty(n,"reason",{value:t.reason});var r=new CustomEvent(e.toLowerCase(),n);return!f.global.dispatchEvent(r)}}if("function"==typeof Event){e=new Event("CustomEvent");return f.global.dispatchEvent(e),function(e,t){var n=new Event(e.toLowerCase(),{cancelable:!0});return n.detail=t,d.defineProperty(n,"promise",{value:t.promise}),d.defineProperty(n,"reason",{value:t.reason}),!f.global.dispatchEvent(n)}}return(e=document.createEvent("CustomEvent")).initCustomEvent("testingtheevent",!1,!0,{}),f.global.dispatchEvent(e),function(e,t){var n=document.createEvent("CustomEvent");return n.initCustomEvent(e.toLowerCase(),!1,!0,t),!f.global.dispatchEvent(n)}}catch(e){}return function(){return!1}}(),x=f.isNode?function(){return n.emit.apply(n,arguments)}:f.global?function(e){var t="on"+e.toLowerCase(),n=f.global[t];return!!n&&(n.apply(f.global,[].slice.call(arguments,1)),!0)}:function(){return!1};function j(e,t){return{promise:t}}var E={promiseCreated:j,promiseFulfilled:j,promiseRejected:j,promiseResolved:j,promiseCancelled:j,promiseChained:function(e,t,n){return{promise:t,child:n}},warning:function(e,t){return{warning:t}},unhandledRejection:function(e,t,n){return{reason:t,promise:n}},rejectionHandled:j},S=function(e){var t=!1;try{t=x.apply(null,arguments)}catch(e){l.throwLater(e),t=!0}var n=!1;try{n=T(e,E[e].apply(null,arguments))}catch(e){l.throwLater(e),n=!0}return n||t};function F(){return!1}function P(e,t,n){var r=this;try{e(t,n,function(e){if("function"!=typeof e)throw new TypeError("onCancel must be a function, got: "+f.toString(e));r._attachCancellationCallback(e)})}catch(e){return e}}function O(e){if(!this._isCancellable())return this;var t=this._onCancel();void 0!==t?f.isArray(t)?t.push(e):this._setOnCancel([t,e]):this._setOnCancel(e)}function A(){return this._onCancelField}function R(e){this._onCancelField=e}function I(){this._cancellationParent=void 0,this._onCancelField=void 0}function M(e,t){if(0!=(1&t)){this._cancellationParent=e;var n=e._branchesRemainingToCancel;void 0===n&&(n=0),e._branchesRemainingToCancel=n+1}0!=(2&t)&&e._isBound()&&this._setBoundTo(e._boundTo)}t.config=function(e){if("longStackTraces"in(e=Object(e))&&(e.longStackTraces?t.longStackTraces():!e.longStackTraces&&t.hasLongStackTraces()&&C()),"warnings"in e){var n=e.warnings;ee.warnings=!!n,$=ee.warnings,f.isObject(n)&&"wForgottenReturn"in n&&($=!!n.wForgottenReturn)}if("cancellation"in e&&e.cancellation&&!ee.cancellation){if(l.haveItemsQueued())throw new Error("cannot enable cancellation after promises are in use");t.prototype._clearCancellationData=I,t.prototype._propagateFrom=M,t.prototype._onCancel=A,t.prototype._setOnCancel=R,t.prototype._attachCancellationCallback=O,t.prototype._execute=P,D=M,ee.cancellation=!0}return"monitoring"in e&&(e.monitoring&&!ee.monitoring?(ee.monitoring=!0,t.prototype._fireEvent=S):!e.monitoring&&ee.monitoring&&(ee.monitoring=!1,t.prototype._fireEvent=F)),t},t.prototype._fireEvent=F,t.prototype._execute=function(e,t,n){try{e(t,n)}catch(e){return e}},t.prototype._onCancel=function(){},t.prototype._setOnCancel=function(e){},t.prototype._attachCancellationCallback=function(e){},t.prototype._captureStackTrace=function(){},t.prototype._attachExtraTrace=function(){},t.prototype._dereferenceTrace=function(){},t.prototype._clearCancellationData=function(){},t.prototype._propagateFrom=function(e,t){};var D=function(e,t){0!=(2&t)&&e._isBound()&&this._setBoundTo(e._boundTo)};function N(){var e=this._boundTo;return void 0!==e&&e instanceof t?e.isFulfilled()?e.value():void 0:e}function L(){this._trace=new J(this._peekContext())}function U(e,t){if(p(e)){var n=this._trace;if(void 0!==n&&t&&(n=n._parent),void 0!==n)n.attachExtraTrace(e);else if(!e.__stackCleaned__){var r=V(e);f.notEnumerableProp(e,"stack",r.message+"\n"+r.stack.join("\n")),f.notEnumerableProp(e,"__stackCleaned__",!0)}}}function B(){this._trace=void 0}function H(e,n,r){if(ee.warnings){var i,o=new u(e);if(n)r._attachExtraTrace(o);else if(ee.longStackTraces&&(i=t._peekContext()))i.attachExtraTrace(o);else{var s=V(o);o.stack=s.message+"\n"+s.stack.join("\n")}S("warning",o)||G(o,"",!0)}}function q(e){for(var t=[],n=0;n<e.length;++n){var r=e[n],i="    (No stack trace)"===r||y.test(r),o=i&&Z(r);i&&!o&&(g&&" "!==r.charAt(0)&&(r="    "+r),t.push(r))}return t}function V(e){var t=e.stack,n=e.toString();return t="string"==typeof t&&t.length>0?function(e){for(var t=e.stack.replace(/\s+$/g,"").split("\n"),n=0;n<t.length;++n){var r=t[n];if("    (No stack trace)"===r||y.test(r))break}return n>0&&"SyntaxError"!=e.name&&(t=t.slice(n)),t}(e):["    (No stack trace)"],{message:n,stack:"SyntaxError"==e.name?t:q(t)}}function G(e,t,n){if("undefined"!=typeof console){var r;if(f.isObject(e)){var i=e.stack;r=t+_(i,e)}else r=t+String(e);"function"==typeof s?s(r,n):"function"!=typeof console.log&&"object"!==c(console.log)||console.log(r)}}function z(e,t,n,r){var i=!1;try{"function"==typeof t&&(i=!0,"rejectionHandled"===e?t(r):t(n,r))}catch(e){l.throwLater(e)}"unhandledRejection"===e?S(e,n,r)||i||G(n,"Unhandled rejection "):S(e,r)}function W(e){var t;if("function"==typeof e)t="[function "+(e.name||"anonymous")+"]";else{t=e&&"function"==typeof e.toString?e.toString():f.toString(e);if(/\[object [a-zA-Z0-9$_]+\]/.test(t))try{t=JSON.stringify(e)}catch(e){}0===t.length&&(t="(empty array)")}return"(<"+function(e){if(e.length<41)return e;return e.substr(0,38)+"..."}(t)+">, no stack trace)"}function Q(){return"function"==typeof K}var Z=function(){return!1},X=/[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;function Y(e){var t=e.match(X);if(t)return{fileName:t[1],line:parseInt(t[2],10)}}function J(e){this._parent=e,this._promisesCreated=0;var t=this._length=1+(void 0===e?0:e._length);K(this,J),t>32&&this.uncycle()}f.inherits(J,Error),r.CapturedTrace=J,J.prototype.uncycle=function(){var e=this._length;if(!(e<2)){for(var t=[],n={},r=0,i=this;void 0!==i;++r)t.push(i),i=i._parent;for(r=(e=this._length=r)-1;r>=0;--r){var o=t[r].stack;void 0===n[o]&&(n[o]=r)}for(r=0;r<e;++r){var s=n[t[r].stack];if(void 0!==s&&s!==r){s>0&&(t[s-1]._parent=void 0,t[s-1]._length=1),t[r]._parent=void 0,t[r]._length=1;var a=r>0?t[r-1]:this;s<e-1?(a._parent=t[s+1],a._parent.uncycle(),a._length=a._parent._length+1):(a._parent=void 0,a._length=1);for(var c=a._length+1,l=r-2;l>=0;--l)t[l]._length=c,c++;return}}}},J.prototype.attachExtraTrace=function(e){if(!e.__stackCleaned__){this.uncycle();for(var t=V(e),n=t.message,r=[t.stack],i=this;void 0!==i;)r.push(q(i.stack.split("\n"))),i=i._parent;!function(e){for(var t=e[0],n=1;n<e.length;++n){for(var r=e[n],i=t.length-1,o=t[i],s=-1,a=r.length-1;a>=0;--a)if(r[a]===o){s=a;break}for(a=s;a>=0;--a){var c=r[a];if(t[i]!==c)break;t.pop(),i--}t=r}}(r),function(e){for(var t=0;t<e.length;++t)(0===e[t].length||t+1<e.length&&e[t][0]===e[t+1][0])&&(e.splice(t,1),t--)}(r),f.notEnumerableProp(e,"stack",function(e,t){for(var n=0;n<t.length-1;++n)t[n].push("From previous event:"),t[n]=t[n].join("\n");return n<t.length&&(t[n]=t[n].join("\n")),e+"\n"+t.join("\n")}(n,r)),f.notEnumerableProp(e,"__stackCleaned__",!0)}};var K=function(){var e=/^\s*at\s*/,t=function(e,t){return"string"==typeof e?e:void 0!==t.name&&void 0!==t.message?t.toString():W(t)};if("number"==typeof Error.stackTraceLimit&&"function"==typeof Error.captureStackTrace){Error.stackTraceLimit+=6,y=e,_=t;var n=Error.captureStackTrace;return Z=function(e){return h.test(e)},function(e,t){Error.stackTraceLimit+=6,n(e,t),Error.stackTraceLimit-=6}}var r,i=new Error;if("string"==typeof i.stack&&i.stack.split("\n")[0].indexOf("stackDetection@")>=0)return y=/@/,_=t,g=!0,function(e){e.stack=(new Error).stack};try{throw new Error}catch(e){r="stack"in e}return"stack"in i||!r||"number"!=typeof Error.stackTraceLimit?(_=function(e,t){return"string"==typeof e?e:"object"!==(void 0===t?"undefined":c(t))&&"function"!=typeof t||void 0===t.name||void 0===t.message?W(t):t.toString()},null):(y=e,_=t,function(e){Error.stackTraceLimit+=6;try{throw new Error}catch(t){e.stack=t.stack}Error.stackTraceLimit-=6})}();"undefined"!=typeof console&&void 0!==console.warn&&(s=function(e){console.warn(e)},f.isNode&&n.stderr.isTTY?s=function(e,t){var n=t?"[33m":"[31m";console.warn(n+e+"[0m\n")}:f.isNode||"string"!=typeof(new Error).stack||(s=function(e,t){console.warn("%c"+e,t?"color: darkorange":"color: red")}));var ee={warnings:w,longStackTraces:!1,cancellation:!1,monitoring:!1};return k&&t.longStackTraces(),{longStackTraces:function(){return ee.longStackTraces},warnings:function(){return ee.warnings},cancellation:function(){return ee.cancellation},monitoring:function(){return ee.monitoring},propagateFromFunction:function(){return D},boundValueFunction:function(){return N},checkForgottenReturns:function(e,t,n,r,i){if(void 0===e&&null!==t&&$){if(void 0!==i&&i._returnedNonUndefined())return;if(0==(65535&r._bitField))return;n&&(n+=" ");var o="",s="";if(t._trace){for(var a=t._trace.stack.split("\n"),c=q(a),l=c.length-1;l>=0;--l){var u=c[l];if(!m.test(u)){var f=u.match(v);f&&(o="at "+f[1]+":"+f[2]+":"+f[3]+" ");break}}if(c.length>0){var d=c[0];for(l=0;l<a.length;++l)if(a[l]===d){l>0&&(s="\n"+a[l-1]);break}}}var p="a promise was created in a "+n+"handler "+o+"but was not returned from it, see http://goo.gl/rRqMUw"+s;r._warn(p,!0,t)}},setBounds:function(e,t){if(Q()){for(var n,r,i=(e.stack||"").split("\n"),o=(t.stack||"").split("\n"),s=-1,a=-1,c=0;c<i.length;++c)if(l=Y(i[c])){n=l.fileName,s=l.line;break}for(c=0;c<o.length;++c){var l;if(l=Y(o[c])){r=l.fileName,a=l.line;break}}s<0||a<0||!n||!r||n!==r||s>=a||(Z=function(e){if(h.test(e))return!0;var t=Y(e);return!!(t&&t.fileName===n&&s<=t.line&&t.line<=a)})}},warn:H,deprecated:function(e,t){var n=e+" is deprecated and will be removed in a future version.";return t&&(n+=" Use "+t+" instead."),H(n)},CapturedTrace:J,fireDomEvent:T,fireGlobalEvent:x}}},{"./errors":12,"./es5":13,"./util":36}],10:[function(e,t,n){"use strict";t.exports=function(e){function t(){return this.value}function n(){throw this.reason}e.prototype.return=e.prototype.thenReturn=function(n){return n instanceof e&&n.suppressUnhandledRejections(),this._then(t,void 0,void 0,{value:n},void 0)},e.prototype.throw=e.prototype.thenThrow=function(e){return this._then(n,void 0,void 0,{reason:e},void 0)},e.prototype.catchThrow=function(e){if(arguments.length<=1)return this._then(void 0,n,void 0,{reason:e},void 0);var t=arguments[1];return this.caught(e,function(){throw t})},e.prototype.catchReturn=function(n){if(arguments.length<=1)return n instanceof e&&n.suppressUnhandledRejections(),this._then(void 0,t,void 0,{value:n},void 0);var r=arguments[1];r instanceof e&&r.suppressUnhandledRejections();return this.caught(n,function(){return r})}}},{}],11:[function(e,t,n){"use strict";t.exports=function(e,t){var n=e.reduce,r=e.all;function i(){return r(this)}e.prototype.each=function(e){return n(this,e,t,0)._then(i,void 0,void 0,this,void 0)},e.prototype.mapSeries=function(e){return n(this,e,t,t)},e.each=function(e,r){return n(e,r,t,0)._then(i,void 0,void 0,e,void 0)},e.mapSeries=function(e,r){return n(e,r,t,t)}}},{}],12:[function(e,t,n){"use strict";var r,i,o=e("./es5"),s=o.freeze,a=e("./util"),c=a.inherits,l=a.notEnumerableProp;function u(e,t){function n(r){if(!(this instanceof n))return new n(r);l(this,"message","string"==typeof r?r:t),l(this,"name",e),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):Error.call(this)}return c(n,Error),n}var f=u("Warning","warning"),d=u("CancellationError","cancellation error"),p=u("TimeoutError","timeout error"),h=u("AggregateError","aggregate error");try{r=TypeError,i=RangeError}catch(e){r=u("TypeError","type error"),i=u("RangeError","range error")}for(var m="join pop push shift unshift slice filter forEach some every map indexOf lastIndexOf reduce reduceRight sort reverse".split(" "),v=0;v<m.length;++v)"function"==typeof Array.prototype[m[v]]&&(h.prototype[m[v]]=Array.prototype[m[v]]);o.defineProperty(h.prototype,"length",{value:0,configurable:!1,writable:!0,enumerable:!0}),h.prototype.isOperational=!0;var y=0;function _(e){if(!(this instanceof _))return new _(e);l(this,"name","OperationalError"),l(this,"message",e),this.cause=e,this.isOperational=!0,e instanceof Error?(l(this,"message",e.message),l(this,"stack",e.stack)):Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}h.prototype.toString=function(){var e=Array(4*y+1).join(" "),t="\n"+e+"AggregateError of:\n";y++,e=Array(4*y+1).join(" ");for(var n=0;n<this.length;++n){for(var r=this[n]===this?"[Circular AggregateError]":this[n]+"",i=r.split("\n"),o=0;o<i.length;++o)i[o]=e+i[o];t+=(r=i.join("\n"))+"\n"}return y--,t},c(_,Error);var g=Error.__BluebirdErrorTypes__;g||(g=s({CancellationError:d,TimeoutError:p,OperationalError:_,RejectionError:_,AggregateError:h}),o.defineProperty(Error,"__BluebirdErrorTypes__",{value:g,writable:!1,enumerable:!1,configurable:!1})),t.exports={Error:Error,TypeError:r,RangeError:i,CancellationError:g.CancellationError,OperationalError:g.OperationalError,TimeoutError:g.TimeoutError,AggregateError:g.AggregateError,Warning:f}},{"./es5":13,"./util":36}],13:[function(e,t,n){var r=function(){"use strict";return void 0===this}();if(r)t.exports={freeze:Object.freeze,defineProperty:Object.defineProperty,getDescriptor:Object.getOwnPropertyDescriptor,keys:Object.keys,names:Object.getOwnPropertyNames,getPrototypeOf:Object.getPrototypeOf,isArray:Array.isArray,isES5:r,propertyIsWritable:function(e,t){var n=Object.getOwnPropertyDescriptor(e,t);return!(n&&!n.writable&&!n.set)}};else{var i={}.hasOwnProperty,o={}.toString,s={}.constructor.prototype,a=function(e){var t=[];for(var n in e)i.call(e,n)&&t.push(n);return t};t.exports={isArray:function(e){try{return"[object Array]"===o.call(e)}catch(e){return!1}},keys:a,names:a,defineProperty:function(e,t,n){return e[t]=n.value,e},getDescriptor:function(e,t){return{value:e[t]}},freeze:function(e){return e},getPrototypeOf:function(e){try{return Object(e).constructor.prototype}catch(e){return s}},isES5:r,propertyIsWritable:function(){return!0}}}},{}],14:[function(e,t,n){"use strict";t.exports=function(e,t){var n=e.map;e.prototype.filter=function(e,r){return n(this,e,r,t)},e.filter=function(e,r,i){return n(e,r,i,t)}}},{}],15:[function(e,t,n){"use strict";t.exports=function(t,n,r){var i=e("./util"),o=t.CancellationError,s=i.errorObj,a=e("./catch_filter")(r);function c(e,t,n){this.promise=e,this.type=t,this.handler=n,this.called=!1,this.cancelPromise=null}function l(e){this.finallyHandler=e}function u(e,t){return null!=e.cancelPromise&&(arguments.length>1?e.cancelPromise._reject(t):e.cancelPromise._cancel(),e.cancelPromise=null,!0)}function f(){return p.call(this,this.promise._target()._settledValue())}function d(e){if(!u(this,e))return s.e=e,s}function p(e){var i=this.promise,a=this.handler;if(!this.called){this.called=!0;var c=this.isFinallyHandler()?a.call(i._boundValue()):a.call(i._boundValue(),e);if(c===r)return c;if(void 0!==c){i._setReturnedNonUndefined();var p=n(c,i);if(p instanceof t){if(null!=this.cancelPromise){if(p._isCancelled()){var h=new o("late cancellation observer");return i._attachExtraTrace(h),s.e=h,s}p.isPending()&&p._attachCancellationCallback(new l(this))}return p._then(f,d,void 0,this,void 0)}}}return i.isRejected()?(u(this),s.e=e,s):(u(this),e)}return c.prototype.isFinallyHandler=function(){return 0===this.type},l.prototype._resultCancelled=function(){u(this.finallyHandler)},t.prototype._passThrough=function(e,t,n,r){return"function"!=typeof e?this.then():this._then(n,r,void 0,new c(this,t,e),void 0)},t.prototype.lastly=t.prototype.finally=function(e){return this._passThrough(e,0,p,p)},t.prototype.tap=function(e){return this._passThrough(e,1,p)},t.prototype.tapCatch=function(e){var n=arguments.length;if(1===n)return this._passThrough(e,1,void 0,p);var r,o=new Array(n-1),s=0;for(r=0;r<n-1;++r){var c=arguments[r];if(!i.isObject(c))return t.reject(new TypeError("tapCatch statement predicate: expecting an object but got "+i.classString(c)));o[s++]=c}o.length=s;var l=arguments[r];return this._passThrough(a(o,l,this),1,void 0,p)},c}},{"./catch_filter":7,"./util":36}],16:[function(e,t,n){"use strict";t.exports=function(t,n,r,i,o,s){var a=e("./errors").TypeError,c=e("./util"),l=c.errorObj,u=c.tryCatch,f=[];function d(e,n,i,o){if(s.cancellation()){var a=new t(r),c=this._finallyPromise=new t(r);this._promise=a.lastly(function(){return c}),a._captureStackTrace(),a._setOnCancel(this)}else{(this._promise=new t(r))._captureStackTrace()}this._stack=o,this._generatorFunction=e,this._receiver=n,this._generator=void 0,this._yieldHandlers="function"==typeof i?[i].concat(f):f,this._yieldedPromise=null,this._cancellationPhase=!1}c.inherits(d,o),d.prototype._isResolved=function(){return null===this._promise},d.prototype._cleanup=function(){this._promise=this._generator=null,s.cancellation()&&null!==this._finallyPromise&&(this._finallyPromise._fulfill(),this._finallyPromise=null)},d.prototype._promiseCancelled=function(){if(!this._isResolved()){var e;if(void 0!==this._generator.return)this._promise._pushContext(),e=u(this._generator.return).call(this._generator,void 0),this._promise._popContext();else{var n=new t.CancellationError("generator .return() sentinel");t.coroutine.returnSentinel=n,this._promise._attachExtraTrace(n),this._promise._pushContext(),e=u(this._generator.throw).call(this._generator,n),this._promise._popContext()}this._cancellationPhase=!0,this._yieldedPromise=null,this._continue(e)}},d.prototype._promiseFulfilled=function(e){this._yieldedPromise=null,this._promise._pushContext();var t=u(this._generator.next).call(this._generator,e);this._promise._popContext(),this._continue(t)},d.prototype._promiseRejected=function(e){this._yieldedPromise=null,this._promise._attachExtraTrace(e),this._promise._pushContext();var t=u(this._generator.throw).call(this._generator,e);this._promise._popContext(),this._continue(t)},d.prototype._resultCancelled=function(){if(this._yieldedPromise instanceof t){var e=this._yieldedPromise;this._yieldedPromise=null,e.cancel()}},d.prototype.promise=function(){return this._promise},d.prototype._run=function(){this._generator=this._generatorFunction.call(this._receiver),this._receiver=this._generatorFunction=void 0,this._promiseFulfilled(void 0)},d.prototype._continue=function(e){var n=this._promise;if(e===l)return this._cleanup(),this._cancellationPhase?n.cancel():n._rejectCallback(e.e,!1);var r=e.value;if(!0===e.done)return this._cleanup(),this._cancellationPhase?n.cancel():n._resolveCallback(r);var o=i(r,this._promise);if(o instanceof t||null!==(o=function(e,n,r){for(var o=0;o<n.length;++o){r._pushContext();var s=u(n[o])(e);if(r._popContext(),s===l){r._pushContext();var a=t.reject(l.e);return r._popContext(),a}var c=i(s,r);if(c instanceof t)return c}return null}(o,this._yieldHandlers,this._promise))){var s=(o=o._target())._bitField;0==(50397184&s)?(this._yieldedPromise=o,o._proxy(this,null)):0!=(33554432&s)?t._async.invoke(this._promiseFulfilled,this,o._value()):0!=(16777216&s)?t._async.invoke(this._promiseRejected,this,o._reason()):this._promiseCancelled()}else this._promiseRejected(new a("A value %s was yielded that could not be treated as a promise\n\n    See http://goo.gl/MqrFmX\n\n".replace("%s",String(r))+"From coroutine:\n"+this._stack.split("\n").slice(1,-7).join("\n")))},t.coroutine=function(e,t){if("function"!=typeof e)throw new a("generatorFunction must be a function\n\n    See http://goo.gl/MqrFmX\n");var n=Object(t).yieldHandler,r=d,i=(new Error).stack;return function(){var t=e.apply(this,arguments),o=new r(void 0,void 0,n,i),s=o.promise();return o._generator=t,o._promiseFulfilled(void 0),s}},t.coroutine.addYieldHandler=function(e){if("function"!=typeof e)throw new a("expecting a function but got "+c.classString(e));f.push(e)},t.spawn=function(e){if(s.deprecated("Promise.spawn()","Promise.coroutine()"),"function"!=typeof e)return n("generatorFunction must be a function\n\n    See http://goo.gl/MqrFmX\n");var r=new d(e,this),i=r.promise();return r._run(t.spawn),i}}},{"./errors":12,"./util":36}],17:[function(e,t,n){"use strict";t.exports=function(t,n,r,i,o,s){var a=e("./util");a.canEvaluate,a.tryCatch,a.errorObj;t.join=function(){var e,t=arguments.length-1;t>0&&"function"==typeof arguments[t]&&(e=arguments[t]);var r=[].slice.call(arguments);e&&r.pop();var i=new n(r).promise();return void 0!==e?i.spread(e):i}}},{"./util":36}],18:[function(e,t,n){"use strict";t.exports=function(t,n,r,i,o,s){var a=t._getDomain,l=e("./util"),u=l.tryCatch,f=l.errorObj,d=t._async;function p(e,t,n,r){this.constructor$(e),this._promise._captureStackTrace();var i=a();this._callback=null===i?t:l.domainBind(i,t),this._preservedValues=r===o?new Array(this.length()):null,this._limit=n,this._inFlight=0,this._queue=[],d.invoke(this._asyncInit,this,void 0)}function h(e,n,i,o){if("function"!=typeof n)return r("expecting a function but got "+l.classString(n));var s=0;if(void 0!==i){if("object"!==(void 0===i?"undefined":c(i))||null===i)return t.reject(new TypeError("options argument must be an object but it is "+l.classString(i)));if("number"!=typeof i.concurrency)return t.reject(new TypeError("'concurrency' must be a number but it is "+l.classString(i.concurrency)));s=i.concurrency}return new p(e,n,s="number"==typeof s&&isFinite(s)&&s>=1?s:0,o).promise()}l.inherits(p,n),p.prototype._asyncInit=function(){this._init$(void 0,-2)},p.prototype._init=function(){},p.prototype._promiseFulfilled=function(e,n){var r=this._values,o=this.length(),a=this._preservedValues,c=this._limit;if(n<0){if(r[n=-1*n-1]=e,c>=1&&(this._inFlight--,this._drainQueue(),this._isResolved()))return!0}else{if(c>=1&&this._inFlight>=c)return r[n]=e,this._queue.push(n),!1;null!==a&&(a[n]=e);var l=this._promise,d=this._callback,p=l._boundValue();l._pushContext();var h=u(d).call(p,e,n,o),m=l._popContext();if(s.checkForgottenReturns(h,m,null!==a?"Promise.filter":"Promise.map",l),h===f)return this._reject(h.e),!0;var v=i(h,this._promise);if(v instanceof t){var y=(v=v._target())._bitField;if(0==(50397184&y))return c>=1&&this._inFlight++,r[n]=v,v._proxy(this,-1*(n+1)),!1;if(0==(33554432&y))return 0!=(16777216&y)?(this._reject(v._reason()),!0):(this._cancel(),!0);h=v._value()}r[n]=h}return++this._totalResolved>=o&&(null!==a?this._filter(r,a):this._resolve(r),!0)},p.prototype._drainQueue=function(){for(var e=this._queue,t=this._limit,n=this._values;e.length>0&&this._inFlight<t;){if(this._isResolved())return;var r=e.pop();this._promiseFulfilled(n[r],r)}},p.prototype._filter=function(e,t){for(var n=t.length,r=new Array(n),i=0,o=0;o<n;++o)e[o]&&(r[i++]=t[o]);r.length=i,this._resolve(r)},p.prototype.preservedValues=function(){return this._preservedValues},t.prototype.map=function(e,t){return h(this,e,t,null)},t.map=function(e,t,n,r){return h(e,t,n,r)}}},{"./util":36}],19:[function(e,t,n){"use strict";t.exports=function(t,n,r,i,o){var s=e("./util"),a=s.tryCatch;t.method=function(e){if("function"!=typeof e)throw new t.TypeError("expecting a function but got "+s.classString(e));return function(){var r=new t(n);r._captureStackTrace(),r._pushContext();var i=a(e).apply(this,arguments),s=r._popContext();return o.checkForgottenReturns(i,s,"Promise.method",r),r._resolveFromSyncValue(i),r}},t.attempt=t.try=function(e){if("function"!=typeof e)return i("expecting a function but got "+s.classString(e));var r,c=new t(n);if(c._captureStackTrace(),c._pushContext(),arguments.length>1){o.deprecated("calling Promise.try with more than 1 argument");var l=arguments[1],u=arguments[2];r=s.isArray(l)?a(e).apply(u,l):a(e).call(u,l)}else r=a(e)();var f=c._popContext();return o.checkForgottenReturns(r,f,"Promise.try",c),c._resolveFromSyncValue(r),c},t.prototype._resolveFromSyncValue=function(e){e===s.errorObj?this._rejectCallback(e.e,!1):this._resolveCallback(e,!0)}}},{"./util":36}],20:[function(e,t,n){"use strict";var r=e("./util"),i=r.maybeWrapAsError,o=e("./errors").OperationalError,s=e("./es5");var a=/^(?:name|message|stack|cause)$/;function c(e){var t;if(function(e){return e instanceof Error&&s.getPrototypeOf(e)===Error.prototype}(e)){(t=new o(e)).name=e.name,t.message=e.message,t.stack=e.stack;for(var n=s.keys(e),i=0;i<n.length;++i){var c=n[i];a.test(c)||(t[c]=e[c])}return t}return r.markAsOriginatingFromRejection(e),e}t.exports=function(e,t){return function(n,r){if(null!==e){if(n){var o=c(i(n));e._attachExtraTrace(o),e._reject(o)}else if(t){var s=[].slice.call(arguments,1);e._fulfill(s)}else e._fulfill(r);e=null}}}},{"./errors":12,"./es5":13,"./util":36}],21:[function(e,t,n){"use strict";t.exports=function(t){var n=e("./util"),r=t._async,i=n.tryCatch,o=n.errorObj;function s(e,t){if(!n.isArray(e))return a.call(this,e,t);var s=i(t).apply(this._boundValue(),[null].concat(e));s===o&&r.throwLater(s.e)}function a(e,t){var n=this._boundValue(),s=void 0===e?i(t).call(n,null):i(t).call(n,null,e);s===o&&r.throwLater(s.e)}function c(e,t){if(!e){var n=new Error(e+"");n.cause=e,e=n}var s=i(t).call(this._boundValue(),e);s===o&&r.throwLater(s.e)}t.prototype.asCallback=t.prototype.nodeify=function(e,t){if("function"==typeof e){var n=a;void 0!==t&&Object(t).spread&&(n=s),this._then(n,c,void 0,this,e)}return this}}},{"./util":36}],22:[function(e,t,r){"use strict";t.exports=function(){var r=function(){return new h("circular promise resolution chain\n\n    See http://goo.gl/MqrFmX\n")},i=function(){return new S.PromiseInspection(this._target())},o=function(e){return S.reject(new h(e))};function s(){}var a,c={},l=e("./util");a=l.isNode?function(){var e=n.domain;return void 0===e&&(e=null),e}:function(){return null},l.notEnumerableProp(S,"_getDomain",a);var u=e("./es5"),f=e("./async"),d=new f;u.defineProperty(S,"_async",{value:d});var p=e("./errors"),h=S.TypeError=p.TypeError;S.RangeError=p.RangeError;var m=S.CancellationError=p.CancellationError;S.TimeoutError=p.TimeoutError,S.OperationalError=p.OperationalError,S.RejectionError=p.OperationalError,S.AggregateError=p.AggregateError;var v=function(){},y={},_={},g=e("./thenables")(S,v),b=e("./promise_array")(S,v,g,o,s),w=e("./context")(S),k=w.create,$=e("./debuggability")(S,w),C=($.CapturedTrace,e("./finally")(S,g,_)),T=e("./catch_filter")(_),x=e("./nodeback"),j=l.errorObj,E=l.tryCatch;function S(e){e!==v&&function(e,t){if(null==e||e.constructor!==S)throw new h("the promise constructor cannot be invoked directly\n\n    See http://goo.gl/MqrFmX\n");if("function"!=typeof t)throw new h("expecting a function but got "+l.classString(t))}(this,e),this._bitField=0,this._fulfillmentHandler0=void 0,this._rejectionHandler0=void 0,this._promise0=void 0,this._receiver0=void 0,this._resolveFromExecutor(e),this._promiseCreated(),this._fireEvent("promiseCreated",this)}function F(e){this.promise._resolveCallback(e)}function P(e){this.promise._rejectCallback(e,!1)}function O(e){var t=new S(v);t._fulfillmentHandler0=e,t._rejectionHandler0=e,t._promise0=e,t._receiver0=e}return S.prototype.toString=function(){return"[object Promise]"},S.prototype.caught=S.prototype.catch=function(e){var t=arguments.length;if(t>1){var n,r=new Array(t-1),i=0;for(n=0;n<t-1;++n){var s=arguments[n];if(!l.isObject(s))return o("Catch statement predicate: expecting an object but got "+l.classString(s));r[i++]=s}if(r.length=i,"function"!=typeof(e=arguments[n]))throw new h("The last argument to .catch() must be a function, got "+l.toString(e));return this.then(void 0,T(r,e,this))}return this.then(void 0,e)},S.prototype.reflect=function(){return this._then(i,i,void 0,this,void 0)},S.prototype.then=function(e,t){if($.warnings()&&arguments.length>0&&"function"!=typeof e&&"function"!=typeof t){var n=".then() only accepts functions but was passed: "+l.classString(e);arguments.length>1&&(n+=", "+l.classString(t)),this._warn(n)}return this._then(e,t,void 0,void 0,void 0)},S.prototype.done=function(e,t){this._then(e,t,void 0,void 0,void 0)._setIsFinal()},S.prototype.spread=function(e){return"function"!=typeof e?o("expecting a function but got "+l.classString(e)):this.all()._then(e,void 0,void 0,y,void 0)},S.prototype.toJSON=function(){var e={isFulfilled:!1,isRejected:!1,fulfillmentValue:void 0,rejectionReason:void 0};return this.isFulfilled()?(e.fulfillmentValue=this.value(),e.isFulfilled=!0):this.isRejected()&&(e.rejectionReason=this.reason(),e.isRejected=!0),e},S.prototype.all=function(){return arguments.length>0&&this._warn(".all() was passed arguments but it does not take any"),new b(this).promise()},S.prototype.error=function(e){return this.caught(l.originatesFromRejection,e)},S.getNewLibraryCopy=t.exports,S.is=function(e){return e instanceof S},S.fromNode=S.fromCallback=function(e){var t=new S(v);t._captureStackTrace();var n=arguments.length>1&&!!Object(arguments[1]).multiArgs,r=E(e)(x(t,n));return r===j&&t._rejectCallback(r.e,!0),t._isFateSealed()||t._setAsyncGuaranteed(),t},S.all=function(e){return new b(e).promise()},S.cast=function(e){var t=g(e);return t instanceof S||((t=new S(v))._captureStackTrace(),t._setFulfilled(),t._rejectionHandler0=e),t},S.resolve=S.fulfilled=S.cast,S.reject=S.rejected=function(e){var t=new S(v);return t._captureStackTrace(),t._rejectCallback(e,!0),t},S.setScheduler=function(e){if("function"!=typeof e)throw new h("expecting a function but got "+l.classString(e));return d.setScheduler(e)},S.prototype._then=function(e,t,n,r,i){var o=void 0!==i,s=o?i:new S(v),c=this._target(),u=c._bitField;o||(s._propagateFrom(this,3),s._captureStackTrace(),void 0===r&&0!=(2097152&this._bitField)&&(r=0!=(50397184&u)?this._boundValue():c===this?void 0:this._boundTo),this._fireEvent("promiseChained",this,s));var f=a();if(0!=(50397184&u)){var p,h,y=c._settlePromiseCtx;0!=(33554432&u)?(h=c._rejectionHandler0,p=e):0!=(16777216&u)?(h=c._fulfillmentHandler0,p=t,c._unsetRejectionIsUnhandled()):(y=c._settlePromiseLateCancellationObserver,h=new m("late cancellation observer"),c._attachExtraTrace(h),p=t),d.invoke(y,c,{handler:null===f?p:"function"==typeof p&&l.domainBind(f,p),promise:s,receiver:r,value:h})}else c._addCallbacks(e,t,s,r,f);return s},S.prototype._length=function(){return 65535&this._bitField},S.prototype._isFateSealed=function(){return 0!=(117506048&this._bitField)},S.prototype._isFollowing=function(){return 67108864==(67108864&this._bitField)},S.prototype._setLength=function(e){this._bitField=-65536&this._bitField|65535&e},S.prototype._setFulfilled=function(){this._bitField=33554432|this._bitField,this._fireEvent("promiseFulfilled",this)},S.prototype._setRejected=function(){this._bitField=16777216|this._bitField,this._fireEvent("promiseRejected",this)},S.prototype._setFollowing=function(){this._bitField=67108864|this._bitField,this._fireEvent("promiseResolved",this)},S.prototype._setIsFinal=function(){this._bitField=4194304|this._bitField},S.prototype._isFinal=function(){return(4194304&this._bitField)>0},S.prototype._unsetCancelled=function(){this._bitField=-65537&this._bitField},S.prototype._setCancelled=function(){this._bitField=65536|this._bitField,this._fireEvent("promiseCancelled",this)},S.prototype._setWillBeCancelled=function(){this._bitField=8388608|this._bitField},S.prototype._setAsyncGuaranteed=function(){d.hasCustomScheduler()||(this._bitField=134217728|this._bitField)},S.prototype._receiverAt=function(e){var t=0===e?this._receiver0:this[4*e-4+3];if(t!==c)return void 0===t&&this._isBound()?this._boundValue():t},S.prototype._promiseAt=function(e){return this[4*e-4+2]},S.prototype._fulfillmentHandlerAt=function(e){return this[4*e-4+0]},S.prototype._rejectionHandlerAt=function(e){return this[4*e-4+1]},S.prototype._boundValue=function(){},S.prototype._migrateCallback0=function(e){e._bitField;var t=e._fulfillmentHandler0,n=e._rejectionHandler0,r=e._promise0,i=e._receiverAt(0);void 0===i&&(i=c),this._addCallbacks(t,n,r,i,null)},S.prototype._migrateCallbackAt=function(e,t){var n=e._fulfillmentHandlerAt(t),r=e._rejectionHandlerAt(t),i=e._promiseAt(t),o=e._receiverAt(t);void 0===o&&(o=c),this._addCallbacks(n,r,i,o,null)},S.prototype._addCallbacks=function(e,t,n,r,i){var o=this._length();if(o>=65531&&(o=0,this._setLength(0)),0===o)this._promise0=n,this._receiver0=r,"function"==typeof e&&(this._fulfillmentHandler0=null===i?e:l.domainBind(i,e)),"function"==typeof t&&(this._rejectionHandler0=null===i?t:l.domainBind(i,t));else{var s=4*o-4;this[s+2]=n,this[s+3]=r,"function"==typeof e&&(this[s+0]=null===i?e:l.domainBind(i,e)),"function"==typeof t&&(this[s+1]=null===i?t:l.domainBind(i,t))}return this._setLength(o+1),o},S.prototype._proxy=function(e,t){this._addCallbacks(void 0,void 0,t,e,null)},S.prototype._resolveCallback=function(e,t){if(0==(117506048&this._bitField)){if(e===this)return this._rejectCallback(r(),!1);var n=g(e,this);if(!(n instanceof S))return this._fulfill(e);t&&this._propagateFrom(n,2);var i=n._target();if(i!==this){var o=i._bitField;if(0==(50397184&o)){var s=this._length();s>0&&i._migrateCallback0(this);for(var a=1;a<s;++a)i._migrateCallbackAt(this,a);this._setFollowing(),this._setLength(0),this._setFollowee(i)}else if(0!=(33554432&o))this._fulfill(i._value());else if(0!=(16777216&o))this._reject(i._reason());else{var c=new m("late cancellation observer");i._attachExtraTrace(c),this._reject(c)}}else this._reject(r())}},S.prototype._rejectCallback=function(e,t,n){var r=l.ensureErrorObject(e),i=r===e;if(!i&&!n&&$.warnings()){var o="a promise was rejected with a non-error: "+l.classString(e);this._warn(o,!0)}this._attachExtraTrace(r,!!t&&i),this._reject(e)},S.prototype._resolveFromExecutor=function(e){if(e!==v){var t=this;this._captureStackTrace(),this._pushContext();var n=!0,r=this._execute(e,function(e){t._resolveCallback(e)},function(e){t._rejectCallback(e,n)});n=!1,this._popContext(),void 0!==r&&t._rejectCallback(r,!0)}},S.prototype._settlePromiseFromHandler=function(e,t,n,r){var i=r._bitField;if(0==(65536&i)){var o;r._pushContext(),t===y?n&&"number"==typeof n.length?o=E(e).apply(this._boundValue(),n):(o=j).e=new h("cannot .spread() a non-array: "+l.classString(n)):o=E(e).call(t,n);var s=r._popContext();0==(65536&(i=r._bitField))&&(o===_?r._reject(n):o===j?r._rejectCallback(o.e,!1):($.checkForgottenReturns(o,s,"",r,this),r._resolveCallback(o)))}},S.prototype._target=function(){for(var e=this;e._isFollowing();)e=e._followee();return e},S.prototype._followee=function(){return this._rejectionHandler0},S.prototype._setFollowee=function(e){this._rejectionHandler0=e},S.prototype._settlePromise=function(e,t,n,r){var o=e instanceof S,a=this._bitField,c=0!=(134217728&a);0!=(65536&a)?(o&&e._invokeInternalOnCancel(),n instanceof C&&n.isFinallyHandler()?(n.cancelPromise=e,E(t).call(n,r)===j&&e._reject(j.e)):t===i?e._fulfill(i.call(n)):n instanceof s?n._promiseCancelled(e):o||e instanceof b?e._cancel():n.cancel()):"function"==typeof t?o?(c&&e._setAsyncGuaranteed(),this._settlePromiseFromHandler(t,n,r,e)):t.call(n,r,e):n instanceof s?n._isResolved()||(0!=(33554432&a)?n._promiseFulfilled(r,e):n._promiseRejected(r,e)):o&&(c&&e._setAsyncGuaranteed(),0!=(33554432&a)?e._fulfill(r):e._reject(r))},S.prototype._settlePromiseLateCancellationObserver=function(e){var t=e.handler,n=e.promise,r=e.receiver,i=e.value;"function"==typeof t?n instanceof S?this._settlePromiseFromHandler(t,r,i,n):t.call(r,i,n):n instanceof S&&n._reject(i)},S.prototype._settlePromiseCtx=function(e){this._settlePromise(e.promise,e.handler,e.receiver,e.value)},S.prototype._settlePromise0=function(e,t,n){var r=this._promise0,i=this._receiverAt(0);this._promise0=void 0,this._receiver0=void 0,this._settlePromise(r,e,i,t)},S.prototype._clearCallbackDataAtIndex=function(e){var t=4*e-4;this[t+2]=this[t+3]=this[t+0]=this[t+1]=void 0},S.prototype._fulfill=function(e){var t=this._bitField;if(!((117506048&t)>>>16)){if(e===this){var n=r();return this._attachExtraTrace(n),this._reject(n)}this._setFulfilled(),this._rejectionHandler0=e,(65535&t)>0&&(0!=(134217728&t)?this._settlePromises():d.settlePromises(this),this._dereferenceTrace())}},S.prototype._reject=function(e){var t=this._bitField;if(!((117506048&t)>>>16)){if(this._setRejected(),this._fulfillmentHandler0=e,this._isFinal())return d.fatalError(e,l.isNode);(65535&t)>0?d.settlePromises(this):this._ensurePossibleRejectionHandled()}},S.prototype._fulfillPromises=function(e,t){for(var n=1;n<e;n++){var r=this._fulfillmentHandlerAt(n),i=this._promiseAt(n),o=this._receiverAt(n);this._clearCallbackDataAtIndex(n),this._settlePromise(i,r,o,t)}},S.prototype._rejectPromises=function(e,t){for(var n=1;n<e;n++){var r=this._rejectionHandlerAt(n),i=this._promiseAt(n),o=this._receiverAt(n);this._clearCallbackDataAtIndex(n),this._settlePromise(i,r,o,t)}},S.prototype._settlePromises=function(){var e=this._bitField,t=65535&e;if(t>0){if(0!=(16842752&e)){var n=this._fulfillmentHandler0;this._settlePromise0(this._rejectionHandler0,n,e),this._rejectPromises(t,n)}else{var r=this._rejectionHandler0;this._settlePromise0(this._fulfillmentHandler0,r,e),this._fulfillPromises(t,r)}this._setLength(0)}this._clearCancellationData()},S.prototype._settledValue=function(){var e=this._bitField;return 0!=(33554432&e)?this._rejectionHandler0:0!=(16777216&e)?this._fulfillmentHandler0:void 0},"undefined"!=typeof Symbol&&Symbol.toStringTag&&u.defineProperty(S.prototype,Symbol.toStringTag,{get:function(){return"Object"}}),S.defer=S.pending=function(){return $.deprecated("Promise.defer","new Promise"),{promise:new S(v),resolve:F,reject:P}},l.notEnumerableProp(S,"_makeSelfResolutionError",r),e("./method")(S,v,g,o,$),e("./bind")(S,v,g,$),e("./cancel")(S,b,o,$),e("./direct_resolve")(S),e("./synchronous_inspection")(S),e("./join")(S,b,g,v,d,a),S.Promise=S,S.version="3.5.5",e("./call_get.js")(S),e("./generators.js")(S,o,v,g,s,$),e("./map.js")(S,b,o,g,v,$),e("./nodeify.js")(S),e("./promisify.js")(S,v),e("./props.js")(S,b,g,o),e("./race.js")(S,v,g,o),e("./reduce.js")(S,b,o,g,v,$),e("./settle.js")(S,b,$),e("./some.js")(S,b,o),e("./timers.js")(S,v,$),e("./using.js")(S,o,g,k,v,$),e("./any.js")(S),e("./each.js")(S,v),e("./filter.js")(S,v),l.toFastProperties(S),l.toFastProperties(S.prototype),O({a:1}),O({b:2}),O({c:3}),O(1),O(function(){}),O(void 0),O(!1),O(new S(v)),$.setBounds(f.firstLineError,l.lastLineError),S}},{"./any.js":1,"./async":2,"./bind":3,"./call_get.js":5,"./cancel":6,"./catch_filter":7,"./context":8,"./debuggability":9,"./direct_resolve":10,"./each.js":11,"./errors":12,"./es5":13,"./filter.js":14,"./finally":15,"./generators.js":16,"./join":17,"./map.js":18,"./method":19,"./nodeback":20,"./nodeify.js":21,"./promise_array":23,"./promisify.js":24,"./props.js":25,"./race.js":27,"./reduce.js":28,"./settle.js":30,"./some.js":31,"./synchronous_inspection":32,"./thenables":33,"./timers.js":34,"./using.js":35,"./util":36}],23:[function(e,t,n){"use strict";t.exports=function(t,n,r,i,o){var s=e("./util");s.isArray;function a(e){var r=this._promise=new t(n);e instanceof t&&r._propagateFrom(e,3),r._setOnCancel(this),this._values=e,this._length=0,this._totalResolved=0,this._init(void 0,-2)}return s.inherits(a,o),a.prototype.length=function(){return this._length},a.prototype.promise=function(){return this._promise},a.prototype._init=function e(n,o){var a=r(this._values,this._promise);if(a instanceof t){var c=(a=a._target())._bitField;if(this._values=a,0==(50397184&c))return this._promise._setAsyncGuaranteed(),a._then(e,this._reject,void 0,this,o);if(0==(33554432&c))return 0!=(16777216&c)?this._reject(a._reason()):this._cancel();a=a._value()}if(null!==(a=s.asArray(a)))0!==a.length?this._iterate(a):-5===o?this._resolveEmptyArray():this._resolve(function(e){switch(e){case-2:return[];case-3:return{};case-6:return new Map}}(o));else{var l=i("expecting an array or an iterable object but got "+s.classString(a)).reason();this._promise._rejectCallback(l,!1)}},a.prototype._iterate=function(e){var n=this.getActualLength(e.length);this._length=n,this._values=this.shouldCopyValues()?new Array(n):this._values;for(var i=this._promise,o=!1,s=null,a=0;a<n;++a){var c=r(e[a],i);s=c instanceof t?(c=c._target())._bitField:null,o?null!==s&&c.suppressUnhandledRejections():null!==s?0==(50397184&s)?(c._proxy(this,a),this._values[a]=c):o=0!=(33554432&s)?this._promiseFulfilled(c._value(),a):0!=(16777216&s)?this._promiseRejected(c._reason(),a):this._promiseCancelled(a):o=this._promiseFulfilled(c,a)}o||i._setAsyncGuaranteed()},a.prototype._isResolved=function(){return null===this._values},a.prototype._resolve=function(e){this._values=null,this._promise._fulfill(e)},a.prototype._cancel=function(){!this._isResolved()&&this._promise._isCancellable()&&(this._values=null,this._promise._cancel())},a.prototype._reject=function(e){this._values=null,this._promise._rejectCallback(e,!1)},a.prototype._promiseFulfilled=function(e,t){return this._values[t]=e,++this._totalResolved>=this._length&&(this._resolve(this._values),!0)},a.prototype._promiseCancelled=function(){return this._cancel(),!0},a.prototype._promiseRejected=function(e){return this._totalResolved++,this._reject(e),!0},a.prototype._resultCancelled=function(){if(!this._isResolved()){var e=this._values;if(this._cancel(),e instanceof t)e.cancel();else for(var n=0;n<e.length;++n)e[n]instanceof t&&e[n].cancel()}},a.prototype.shouldCopyValues=function(){return!0},a.prototype.getActualLength=function(e){return e},a}},{"./util":36}],24:[function(e,t,n){"use strict";t.exports=function(t,n){var r={},i=e("./util"),o=e("./nodeback"),s=i.withAppended,a=i.maybeWrapAsError,l=i.canEvaluate,u=e("./errors").TypeError,f={__isPromisified__:!0},d=new RegExp("^(?:"+["arity","length","name","arguments","caller","callee","prototype","__isPromisified__"].join("|")+")$"),p=function(e){return i.isIdentifier(e)&&"_"!==e.charAt(0)&&"constructor"!==e};function h(e){return!d.test(e)}function m(e){try{return!0===e.__isPromisified__}catch(e){return!1}}function v(e,t,n){var r=i.getDataPropertyOrDefault(e,t+n,f);return!!r&&m(r)}function y(e,t,n,r){for(var o=i.inheritedDataKeys(e),s=[],a=0;a<o.length;++a){var c=o[a],l=e[c],f=r===p||p(c,l,e);"function"!=typeof l||m(l)||v(e,c,t)||!r(c,l,e,f)||s.push(c,l)}return function(e,t,n){for(var r=0;r<e.length;r+=2){var i=e[r];if(n.test(i))for(var o=i.replace(n,""),s=0;s<e.length;s+=2)if(e[s]===o)throw new u("Cannot promisify an API that has normal methods with '%s'-suffix\n\n    See http://goo.gl/MqrFmX\n".replace("%s",t))}}(s,t,n),s}var _=function(e){return e.replace(/([$])/,"\\$")};var g=l?void 0:function(e,c,l,u,f,d){var p=function(){return this}(),h=e;function m(){var i=c;c===r&&(i=this);var l=new t(n);l._captureStackTrace();var u="string"==typeof h&&this!==p?this[h]:e,f=o(l,d);try{u.apply(i,s(arguments,f))}catch(e){l._rejectCallback(a(e),!0,!0)}return l._isFateSealed()||l._setAsyncGuaranteed(),l}return"string"==typeof h&&(e=u),i.notEnumerableProp(m,"__isPromisified__",!0),m};function b(e,t,n,o,s){for(var a=new RegExp(_(t)+"$"),c=y(e,t,a,n),l=0,u=c.length;l<u;l+=2){var f=c[l],d=c[l+1],p=f+t;if(o===g)e[p]=g(f,r,f,d,t,s);else{var h=o(d,function(){return g(f,r,f,d,t,s)});i.notEnumerableProp(h,"__isPromisified__",!0),e[p]=h}}return i.toFastProperties(e),e}t.promisify=function(e,t){if("function"!=typeof e)throw new u("expecting a function but got "+i.classString(e));if(m(e))return e;var n=function(e,t,n){return g(e,t,void 0,e,null,n)}(e,void 0===(t=Object(t)).context?r:t.context,!!t.multiArgs);return i.copyDescriptors(e,n,h),n},t.promisifyAll=function(e,t){if("function"!=typeof e&&"object"!==(void 0===e?"undefined":c(e)))throw new u("the target of promisifyAll must be an object or a function\n\n    See http://goo.gl/MqrFmX\n");var n=!!(t=Object(t)).multiArgs,r=t.suffix;"string"!=typeof r&&(r="Async");var o=t.filter;"function"!=typeof o&&(o=p);var s=t.promisifier;if("function"!=typeof s&&(s=g),!i.isIdentifier(r))throw new RangeError("suffix must be a valid identifier\n\n    See http://goo.gl/MqrFmX\n");for(var a=i.inheritedDataKeys(e),l=0;l<a.length;++l){var f=e[a[l]];"constructor"!==a[l]&&i.isClass(f)&&(b(f.prototype,r,o,s,n),b(f,r,o,s,n))}return b(e,r,o,s,n)}}},{"./errors":12,"./nodeback":20,"./util":36}],25:[function(e,t,n){"use strict";t.exports=function(t,n,r,i){var o,s=e("./util"),a=s.isObject,c=e("./es5");"function"==typeof Map&&(o=Map);var l=function(){var e=0,t=0;function n(n,r){this[e]=n,this[e+t]=r,e++}return function(r){t=r.size,e=0;var i=new Array(2*r.size);return r.forEach(n,i),i}}();function u(e){var t,n=!1;if(void 0!==o&&e instanceof o)t=l(e),n=!0;else{var r=c.keys(e),i=r.length;t=new Array(2*i);for(var s=0;s<i;++s){var a=r[s];t[s]=e[a],t[s+i]=a}}this.constructor$(t),this._isMap=n,this._init$(void 0,n?-6:-3)}function f(e){var n,o=r(e);return a(o)?(n=o instanceof t?o._then(t.props,void 0,void 0,void 0,void 0):new u(o).promise(),o instanceof t&&n._propagateFrom(o,2),n):i("cannot await properties of a non-object\n\n    See http://goo.gl/MqrFmX\n")}s.inherits(u,n),u.prototype._init=function(){},u.prototype._promiseFulfilled=function(e,t){if(this._values[t]=e,++this._totalResolved>=this._length){var n;if(this._isMap)n=function(e){for(var t=new o,n=e.length/2|0,r=0;r<n;++r){var i=e[n+r],s=e[r];t.set(i,s)}return t}(this._values);else{n={};for(var r=this.length(),i=0,s=this.length();i<s;++i)n[this._values[i+r]]=this._values[i]}return this._resolve(n),!0}return!1},u.prototype.shouldCopyValues=function(){return!1},u.prototype.getActualLength=function(e){return e>>1},t.prototype.props=function(){return f(this)},t.props=function(e){return f(e)}}},{"./es5":13,"./util":36}],26:[function(e,t,n){"use strict";function r(e){this._capacity=e,this._length=0,this._front=0}r.prototype._willBeOverCapacity=function(e){return this._capacity<e},r.prototype._pushOne=function(e){var t=this.length();this._checkCapacity(t+1),this[this._front+t&this._capacity-1]=e,this._length=t+1},r.prototype.push=function(e,t,n){var r=this.length()+3;if(this._willBeOverCapacity(r))return this._pushOne(e),this._pushOne(t),void this._pushOne(n);var i=this._front+r-3;this._checkCapacity(r);var o=this._capacity-1;this[i+0&o]=e,this[i+1&o]=t,this[i+2&o]=n,this._length=r},r.prototype.shift=function(){var e=this._front,t=this[e];return this[e]=void 0,this._front=e+1&this._capacity-1,this._length--,t},r.prototype.length=function(){return this._length},r.prototype._checkCapacity=function(e){this._capacity<e&&this._resizeTo(this._capacity<<1)},r.prototype._resizeTo=function(e){var t=this._capacity;this._capacity=e,function(e,t,n,r,i){for(var o=0;o<i;++o)n[o+r]=e[o+t],e[o+t]=void 0}(this,0,this,t,this._front+this._length&t-1)},t.exports=r},{}],27:[function(e,t,n){"use strict";t.exports=function(t,n,r,i){var o=e("./util"),s=function(e){return e.then(function(t){return a(t,e)})};function a(e,a){var c=r(e);if(c instanceof t)return s(c);if(null===(e=o.asArray(e)))return i("expecting an array or an iterable object but got "+o.classString(e));var l=new t(n);void 0!==a&&l._propagateFrom(a,3);for(var u=l._fulfill,f=l._reject,d=0,p=e.length;d<p;++d){var h=e[d];(void 0!==h||d in e)&&t.cast(h)._then(u,f,void 0,l,null)}return l}t.race=function(e){return a(e,void 0)},t.prototype.race=function(){return a(this,void 0)}}},{"./util":36}],28:[function(e,t,n){"use strict";t.exports=function(t,n,r,i,o,s){var a=t._getDomain,c=e("./util"),l=c.tryCatch;function u(e,n,r,i){this.constructor$(e);var s=a();this._fn=null===s?n:c.domainBind(s,n),void 0!==r&&(r=t.resolve(r))._attachCancellationCallback(this),this._initialValue=r,this._currentCancellable=null,this._eachValues=i===o?Array(this._length):0===i?null:void 0,this._promise._captureStackTrace(),this._init$(void 0,-5)}function f(e,t){this.isFulfilled()?t._resolve(e):t._reject(e)}function d(e,t,n,i){return"function"!=typeof t?r("expecting a function but got "+c.classString(t)):new u(e,t,n,i).promise()}function p(e){this.accum=e,this.array._gotAccum(e);var n=i(this.value,this.array._promise);return n instanceof t?(this.array._currentCancellable=n,n._then(h,void 0,void 0,this,void 0)):h.call(this,n)}function h(e){var n,r=this.array,i=r._promise,o=l(r._fn);i._pushContext(),(n=void 0!==r._eachValues?o.call(i._boundValue(),e,this.index,this.length):o.call(i._boundValue(),this.accum,e,this.index,this.length))instanceof t&&(r._currentCancellable=n);var a=i._popContext();return s.checkForgottenReturns(n,a,void 0!==r._eachValues?"Promise.each":"Promise.reduce",i),n}c.inherits(u,n),u.prototype._gotAccum=function(e){void 0!==this._eachValues&&null!==this._eachValues&&e!==o&&this._eachValues.push(e)},u.prototype._eachComplete=function(e){return null!==this._eachValues&&this._eachValues.push(e),this._eachValues},u.prototype._init=function(){},u.prototype._resolveEmptyArray=function(){this._resolve(void 0!==this._eachValues?this._eachValues:this._initialValue)},u.prototype.shouldCopyValues=function(){return!1},u.prototype._resolve=function(e){this._promise._resolveCallback(e),this._values=null},u.prototype._resultCancelled=function(e){if(e===this._initialValue)return this._cancel();this._isResolved()||(this._resultCancelled$(),this._currentCancellable instanceof t&&this._currentCancellable.cancel(),this._initialValue instanceof t&&this._initialValue.cancel())},u.prototype._iterate=function(e){var n,r;this._values=e;var i=e.length;if(void 0!==this._initialValue?(n=this._initialValue,r=0):(n=t.resolve(e[0]),r=1),this._currentCancellable=n,!n.isRejected())for(;r<i;++r){var o={accum:null,value:e[r],index:r,length:i,array:this};n=n._then(p,void 0,void 0,o,void 0)}void 0!==this._eachValues&&(n=n._then(this._eachComplete,void 0,void 0,this,void 0)),n._then(f,f,void 0,n,this)},t.prototype.reduce=function(e,t){return d(this,e,t,null)},t.reduce=function(e,t,n,r){return d(e,t,n,r)}}},{"./util":36}],29:[function(e,t,o){"use strict";var s,a=e("./util"),c=a.getNativePromise();if(a.isNode&&"undefined"==typeof MutationObserver){var l=r.setImmediate,u=n.nextTick;s=a.isRecentNode?function(e){l.call(r,e)}:function(e){u.call(n,e)}}else if("function"==typeof c&&"function"==typeof c.resolve){var f=c.resolve();s=function(e){f.then(e)}}else s="undefined"!=typeof MutationObserver&&("undefined"==typeof window||!window.navigator||!window.navigator.standalone&&!window.cordova)&&"classList"in document.documentElement?function(){var e=document.createElement("div"),t={attributes:!0},n=!1,r=document.createElement("div");new MutationObserver(function(){e.classList.toggle("foo"),n=!1}).observe(r,t);return function(i){var o=new MutationObserver(function(){o.disconnect(),i()});o.observe(e,t),n||(n=!0,r.classList.toggle("foo"))}}():void 0!==i?function(e){i(e)}:"undefined"!=typeof setTimeout?function(e){setTimeout(e,0)}:function(){throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n")};t.exports=s},{"./util":36}],30:[function(e,t,n){"use strict";t.exports=function(t,n,r){var i=t.PromiseInspection;function o(e){this.constructor$(e)}e("./util").inherits(o,n),o.prototype._promiseResolved=function(e,t){return this._values[e]=t,++this._totalResolved>=this._length&&(this._resolve(this._values),!0)},o.prototype._promiseFulfilled=function(e,t){var n=new i;return n._bitField=33554432,n._settledValueField=e,this._promiseResolved(t,n)},o.prototype._promiseRejected=function(e,t){var n=new i;return n._bitField=16777216,n._settledValueField=e,this._promiseResolved(t,n)},t.settle=function(e){return r.deprecated(".settle()",".reflect()"),new o(e).promise()},t.prototype.settle=function(){return t.settle(this)}}},{"./util":36}],31:[function(e,t,n){"use strict";t.exports=function(t,n,r){var i=e("./util"),o=e("./errors").RangeError,s=e("./errors").AggregateError,a=i.isArray,c={};function l(e){this.constructor$(e),this._howMany=0,this._unwrap=!1,this._initialized=!1}function u(e,t){if((0|t)!==t||t<0)return r("expecting a positive integer\n\n    See http://goo.gl/MqrFmX\n");var n=new l(e),i=n.promise();return n.setHowMany(t),n.init(),i}i.inherits(l,n),l.prototype._init=function(){if(this._initialized)if(0!==this._howMany){this._init$(void 0,-5);var e=a(this._values);!this._isResolved()&&e&&this._howMany>this._canPossiblyFulfill()&&this._reject(this._getRangeError(this.length()))}else this._resolve([])},l.prototype.init=function(){this._initialized=!0,this._init()},l.prototype.setUnwrap=function(){this._unwrap=!0},l.prototype.howMany=function(){return this._howMany},l.prototype.setHowMany=function(e){this._howMany=e},l.prototype._promiseFulfilled=function(e){return this._addFulfilled(e),this._fulfilled()===this.howMany()&&(this._values.length=this.howMany(),1===this.howMany()&&this._unwrap?this._resolve(this._values[0]):this._resolve(this._values),!0)},l.prototype._promiseRejected=function(e){return this._addRejected(e),this._checkOutcome()},l.prototype._promiseCancelled=function(){return this._values instanceof t||null==this._values?this._cancel():(this._addRejected(c),this._checkOutcome())},l.prototype._checkOutcome=function(){if(this.howMany()>this._canPossiblyFulfill()){for(var e=new s,t=this.length();t<this._values.length;++t)this._values[t]!==c&&e.push(this._values[t]);return e.length>0?this._reject(e):this._cancel(),!0}return!1},l.prototype._fulfilled=function(){return this._totalResolved},l.prototype._rejected=function(){return this._values.length-this.length()},l.prototype._addRejected=function(e){this._values.push(e)},l.prototype._addFulfilled=function(e){this._values[this._totalResolved++]=e},l.prototype._canPossiblyFulfill=function(){return this.length()-this._rejected()},l.prototype._getRangeError=function(e){var t="Input array must contain at least "+this._howMany+" items but contains only "+e+" items";return new o(t)},l.prototype._resolveEmptyArray=function(){this._reject(this._getRangeError(0))},t.some=function(e,t){return u(e,t)},t.prototype.some=function(e){return u(this,e)},t._SomePromiseArray=l}},{"./errors":12,"./util":36}],32:[function(e,t,n){"use strict";t.exports=function(e){function t(e){void 0!==e?(e=e._target(),this._bitField=e._bitField,this._settledValueField=e._isFateSealed()?e._settledValue():void 0):(this._bitField=0,this._settledValueField=void 0)}t.prototype._settledValue=function(){return this._settledValueField};var n=t.prototype.value=function(){if(!this.isFulfilled())throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\n\n    See http://goo.gl/MqrFmX\n");return this._settledValue()},r=t.prototype.error=t.prototype.reason=function(){if(!this.isRejected())throw new TypeError("cannot get rejection reason of a non-rejected promise\n\n    See http://goo.gl/MqrFmX\n");return this._settledValue()},i=t.prototype.isFulfilled=function(){return 0!=(33554432&this._bitField)},o=t.prototype.isRejected=function(){return 0!=(16777216&this._bitField)},s=t.prototype.isPending=function(){return 0==(50397184&this._bitField)},a=t.prototype.isResolved=function(){return 0!=(50331648&this._bitField)};t.prototype.isCancelled=function(){return 0!=(8454144&this._bitField)},e.prototype.__isCancelled=function(){return 65536==(65536&this._bitField)},e.prototype._isCancelled=function(){return this._target().__isCancelled()},e.prototype.isCancelled=function(){return 0!=(8454144&this._target()._bitField)},e.prototype.isPending=function(){return s.call(this._target())},e.prototype.isRejected=function(){return o.call(this._target())},e.prototype.isFulfilled=function(){return i.call(this._target())},e.prototype.isResolved=function(){return a.call(this._target())},e.prototype.value=function(){return n.call(this._target())},e.prototype.reason=function(){var e=this._target();return e._unsetRejectionIsUnhandled(),r.call(e)},e.prototype._value=function(){return this._settledValue()},e.prototype._reason=function(){return this._unsetRejectionIsUnhandled(),this._settledValue()},e.PromiseInspection=t}},{}],33:[function(e,t,n){"use strict";t.exports=function(t,n){var r=e("./util"),i=r.errorObj,o=r.isObject;var s={}.hasOwnProperty;return function(e,a){if(o(e)){if(e instanceof t)return e;var c=function(e){try{return function(e){return e.then}(e)}catch(e){return i.e=e,i}}(e);if(c===i){a&&a._pushContext();var l=t.reject(c.e);return a&&a._popContext(),l}if("function"==typeof c)return function(e){try{return s.call(e,"_promise0")}catch(e){return!1}}(e)?(l=new t(n),e._then(l._fulfill,l._reject,void 0,l,null),l):function(e,o,s){var a=new t(n),c=a;s&&s._pushContext(),a._captureStackTrace(),s&&s._popContext();var l=!0,u=r.tryCatch(o).call(e,function(e){a&&(a._resolveCallback(e),a=null)},function(e){a&&(a._rejectCallback(e,l,!0),a=null)});return l=!1,a&&u===i&&(a._rejectCallback(u.e,!0,!0),a=null),c}(e,c,a)}return e}}},{"./util":36}],34:[function(e,t,n){"use strict";t.exports=function(t,n,r){var i=e("./util"),o=t.TimeoutError;function s(e){this.handle=e}s.prototype._resultCancelled=function(){clearTimeout(this.handle)};var a=function(e){return c(+this).thenReturn(e)},c=t.delay=function(e,i){var o,c;return void 0!==i?(o=t.resolve(i)._then(a,null,null,e,void 0),r.cancellation()&&i instanceof t&&o._setOnCancel(i)):(o=new t(n),c=setTimeout(function(){o._fulfill()},+e),r.cancellation()&&o._setOnCancel(new s(c)),o._captureStackTrace()),o._setAsyncGuaranteed(),o};t.prototype.delay=function(e){return c(e,this)};function l(e){return clearTimeout(this.handle),e}function u(e){throw clearTimeout(this.handle),e}t.prototype.timeout=function(e,t){var n,a;e=+e;var c=new s(setTimeout(function(){n.isPending()&&function(e,t,n){var r;r="string"!=typeof t?t instanceof Error?t:new o("operation timed out"):new o(t),i.markAsOriginatingFromRejection(r),e._attachExtraTrace(r),e._reject(r),null!=n&&n.cancel()}(n,t,a)},e));return r.cancellation()?(a=this.then(),(n=a._then(l,u,void 0,c,void 0))._setOnCancel(c)):n=this._then(l,u,void 0,c,void 0),n}}},{"./util":36}],35:[function(e,t,n){"use strict";t.exports=function(t,n,r,i,o,s){var a=e("./util"),c=e("./errors").TypeError,l=e("./util").inherits,u=a.errorObj,f=a.tryCatch,d={};function p(e){setTimeout(function(){throw e},0)}function h(e,n){var i=0,s=e.length,a=new t(o);return function o(){if(i>=s)return a._fulfill();var c=function(e){var t=r(e);return t!==e&&"function"==typeof e._isDisposable&&"function"==typeof e._getDisposer&&e._isDisposable()&&t._setDisposable(e._getDisposer()),t}(e[i++]);if(c instanceof t&&c._isDisposable()){try{c=r(c._getDisposer().tryDispose(n),e.promise)}catch(e){return p(e)}if(c instanceof t)return c._then(o,p,null,null,null)}o()}(),a}function m(e,t,n){this._data=e,this._promise=t,this._context=n}function v(e,t,n){this.constructor$(e,t,n)}function y(e){return m.isDisposer(e)?(this.resources[this.index]._setDisposable(e),e.promise()):e}function _(e){this.length=e,this.promise=null,this[e-1]=null}m.prototype.data=function(){return this._data},m.prototype.promise=function(){return this._promise},m.prototype.resource=function(){return this.promise().isFulfilled()?this.promise().value():d},m.prototype.tryDispose=function(e){var t=this.resource(),n=this._context;void 0!==n&&n._pushContext();var r=t!==d?this.doDispose(t,e):null;return void 0!==n&&n._popContext(),this._promise._unsetDisposable(),this._data=null,r},m.isDisposer=function(e){return null!=e&&"function"==typeof e.resource&&"function"==typeof e.tryDispose},l(v,m),v.prototype.doDispose=function(e,t){return this.data().call(e,e,t)},_.prototype._resultCancelled=function(){for(var e=this.length,n=0;n<e;++n){var r=this[n];r instanceof t&&r.cancel()}},t.using=function(){var e=arguments.length;if(e<2)return n("you must pass at least 2 arguments to Promise.using");var i,o=arguments[e-1];if("function"!=typeof o)return n("expecting a function but got "+a.classString(o));var c=!0;2===e&&Array.isArray(arguments[0])?(e=(i=arguments[0]).length,c=!1):(i=arguments,e--);for(var l=new _(e),d=0;d<e;++d){var p=i[d];if(m.isDisposer(p)){var v=p;(p=p.promise())._setDisposable(v)}else{var g=r(p);g instanceof t&&(p=g._then(y,null,null,{resources:l,index:d},void 0))}l[d]=p}var b=new Array(l.length);for(d=0;d<b.length;++d)b[d]=t.resolve(l[d]).reflect();var w=t.all(b).then(function(e){for(var t=0;t<e.length;++t){var n=e[t];if(n.isRejected())return u.e=n.error(),u;if(!n.isFulfilled())return void w.cancel();e[t]=n.value()}k._pushContext(),o=f(o);var r=c?o.apply(void 0,e):o(e),i=k._popContext();return s.checkForgottenReturns(r,i,"Promise.using",k),r}),k=w.lastly(function(){var e=new t.PromiseInspection(w);return h(l,e)});return l.promise=k,k._setOnCancel(l),k},t.prototype._setDisposable=function(e){this._bitField=131072|this._bitField,this._disposer=e},t.prototype._isDisposable=function(){return(131072&this._bitField)>0},t.prototype._getDisposer=function(){return this._disposer},t.prototype._unsetDisposable=function(){this._bitField=-131073&this._bitField,this._disposer=void 0},t.prototype.disposer=function(e){if("function"==typeof e)return new v(e,this,i());throw new c}}},{"./errors":12,"./util":36}],36:[function(e,t,i){"use strict";var o=e("./es5"),s="undefined"==typeof navigator,a={e:{}},l,u="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==r?r:void 0!==this?this:null;function f(){try{var e=l;return l=null,e.apply(this,arguments)}catch(e){return a.e=e,a}}function d(e){return l=e,f}var p=function(e,t){var n={}.hasOwnProperty;function r(){for(var r in this.constructor=e,this.constructor$=t,t.prototype)n.call(t.prototype,r)&&"$"!==r.charAt(r.length-1)&&(this[r+"$"]=t.prototype[r])}return r.prototype=t.prototype,e.prototype=new r,e.prototype};function h(e){return null==e||!0===e||!1===e||"string"==typeof e||"number"==typeof e}function m(e){return"function"==typeof e||"object"===(void 0===e?"undefined":c(e))&&null!==e}function v(e){return h(e)?new Error(E(e)):e}function y(e,t){var n,r=e.length,i=new Array(r+1);for(n=0;n<r;++n)i[n]=e[n];return i[n]=t,i}function _(e,t,n){if(!o.isES5)return{}.hasOwnProperty.call(e,t)?e[t]:void 0;var r=Object.getOwnPropertyDescriptor(e,t);return null!=r?null==r.get&&null==r.set?r.value:n:void 0}function g(e,t,n){if(h(e))return e;var r={value:n,configurable:!0,enumerable:!1,writable:!0};return o.defineProperty(e,t,r),e}function b(e){throw e}var w=function(){var e=[Array.prototype,Object.prototype,Function.prototype],t=function(t){for(var n=0;n<e.length;++n)if(e[n]===t)return!0;return!1};if(o.isES5){var n=Object.getOwnPropertyNames;return function(e){for(var r=[],i=Object.create(null);null!=e&&!t(e);){var s;try{s=n(e)}catch(e){return r}for(var a=0;a<s.length;++a){var c=s[a];if(!i[c]){i[c]=!0;var l=Object.getOwnPropertyDescriptor(e,c);null!=l&&null==l.get&&null==l.set&&r.push(c)}}e=o.getPrototypeOf(e)}return r}}var r={}.hasOwnProperty;return function(n){if(t(n))return[];var i=[];e:for(var o in n)if(r.call(n,o))i.push(o);else{for(var s=0;s<e.length;++s)if(r.call(e[s],o))continue e;i.push(o)}return i}}(),k=/this\s*\.\s*\S+\s*=/;function $(e){try{if("function"==typeof e){var t=o.names(e.prototype),n=o.isES5&&t.length>1,r=t.length>0&&!(1===t.length&&"constructor"===t[0]),i=k.test(e+"")&&o.names(e).length>0;if(n||r||i)return!0}return!1}catch(e){return!1}}function C(e){function t(){}t.prototype=e;var n=new t;function r(){return c(n.foo)}return r(),r(),e}var T=/^[a-z$_][a-z$_0-9]*$/i;function x(e){return T.test(e)}function j(e,t,n){for(var r=new Array(e),i=0;i<e;++i)r[i]=t+i+n;return r}function E(e){try{return e+""}catch(e){return"[no string representation]"}}function S(e){return e instanceof Error||null!==e&&"object"===(void 0===e?"undefined":c(e))&&"string"==typeof e.message&&"string"==typeof e.name}function F(e){try{g(e,"isOperational",!0)}catch(e){}}function P(e){return null!=e&&(e instanceof Error.__BluebirdErrorTypes__.OperationalError||!0===e.isOperational)}function O(e){return S(e)&&o.propertyIsWritable(e,"stack")}var A="stack"in new Error?function(e){return O(e)?e:new Error(E(e))}:function(e){if(O(e))return e;try{throw new Error(E(e))}catch(e){return e}};function R(e){return{}.toString.call(e)}function I(e,t,n){for(var r=o.names(e),i=0;i<r.length;++i){var s=r[i];if(n(s))try{o.defineProperty(t,s,o.getDescriptor(e,s))}catch(e){}}}var M=function(e){return o.isArray(e)?e:null};if("undefined"!=typeof Symbol&&Symbol.iterator){var D="function"==typeof Array.from?function(e){return Array.from(e)}:function(e){for(var t,n=[],r=e[Symbol.iterator]();!(t=r.next()).done;)n.push(t.value);return n};M=function(e){return o.isArray(e)?e:null!=e&&"function"==typeof e[Symbol.iterator]?D(e):null}}var N=void 0!==n&&"[object process]"===R(n).toLowerCase(),L=void 0!==n&&void 0!==n.env;function U(e){return L?n.env[e]:void 0}function B(){if("function"==typeof Promise)try{var e=new Promise(function(){});if("[object Promise]"==={}.toString.call(e))return Promise}catch(e){}}function H(e,t){return e.bind(t)}var q={isClass:$,isIdentifier:x,inheritedDataKeys:w,getDataPropertyOrDefault:_,thrower:b,isArray:o.isArray,asArray:M,notEnumerableProp:g,isPrimitive:h,isObject:m,isError:S,canEvaluate:s,errorObj:a,tryCatch:d,inherits:p,withAppended:y,maybeWrapAsError:v,toFastProperties:C,filledRange:j,toString:E,canAttachTrace:O,ensureErrorObject:A,originatesFromRejection:P,markAsOriginatingFromRejection:F,classString:R,copyDescriptors:I,hasDevTools:"undefined"!=typeof chrome&&chrome&&"function"==typeof chrome.loadTimes,isNode:N,hasEnvVariables:L,env:U,global:u,getNativePromise:B,domainBind:H},V;q.isRecentNode=q.isNode&&(n.versions&&n.versions.node?V=n.versions.node.split(".").map(Number):n.version&&(V=n.version.split(".").map(Number)),0===V[0]&&V[1]>10||V[0]>0),q.isNode&&q.toFastProperties(n);try{throw new Error}catch(e){q.lastLineError=e}t.exports=q},{"./es5":13}]},{},[4])(4)},"object"==c(t)&&void 0!==e?e.exports=l():(s=[],void 0===(a="function"==typeof(o=l)?o.apply(t,s):o)||(e.exports=a)),"undefined"!=typeof window&&null!==window?window.P=window.Promise:"undefined"!=typeof self&&null!==self&&(self.P=self.Promise)}).call(this,n(2),n(4),n(191).setImmediate)},function(e,t,n){(function(e){var r=void 0!==e&&e||"undefined"!=typeof self&&self||window,i=Function.prototype.apply;function o(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new o(i.call(setTimeout,r,arguments),clearTimeout)},t.setInterval=function(){return new o(i.call(setInterval,r,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(r,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n(192),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n(4))},function(e,t,n){(function(e,t){!function(e,n){"use strict";if(!e.setImmediate){var r,i,o,s,a,c=1,l={},u=!1,f=e.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(e);d=d&&d.setTimeout?d:e,"[object process]"==={}.toString.call(e.process)?r=function(e){t.nextTick(function(){h(e)})}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?e.MessageChannel?((o=new MessageChannel).port1.onmessage=function(e){h(e.data)},r=function(e){o.port2.postMessage(e)}):f&&"onreadystatechange"in f.createElement("script")?(i=f.documentElement,r=function(e){var t=f.createElement("script");t.onreadystatechange=function(){h(e),t.onreadystatechange=null,i.removeChild(t),t=null},i.appendChild(t)}):r=function(e){setTimeout(h,0,e)}:(s="setImmediate$"+Math.random()+"$",a=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(s)&&h(+t.data.slice(s.length))},e.addEventListener?e.addEventListener("message",a,!1):e.attachEvent("onmessage",a),r=function(t){e.postMessage(s+t,"*")}),d.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var i={callback:e,args:t};return l[c]=i,r(c),c++},d.clearImmediate=p}function p(e){delete l[e]}function h(e){if(u)setTimeout(h,0,e);else{var t=l[e];if(t){u=!0;try{!function(e){var t=e.callback,r=e.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(n,r)}}(t)}finally{p(e),u=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n(4),n(2))},function(e,t){},function(e,t){$(document).ready(function(){if(!window.nav24){var e=function(){$('.activeLink[href="#gym-membership"]').addClass("skip-button skip-navigation"),$('.activeLink[href="#page-content"]').addClass("skip-button skip-content"),$('.activeLink[href="#footer-24"]').addClass("skip-button skip-footer")},t=function(){l.toggleClass("height-full"),$(".header-24").slideToggle(),$("#menu-icon-mobile").toggleClass("open")},n=function(e){if(h=null==navigator.userAgent.match(/iPad/i)?0:1,e.matches){var n=function(e){e.preventDefault()};$("#form-container").appendTo("#form-des2"),$(".member-login a").on("click",n),$(".nav-element-title a").on("click",n),m||(r=$(".accordion-element"),i=$("#myAccount-section"),o=$(".my-account a"),console.log("binded"),r.on("click",function(){$(this).hasClass("opened")?($(this).find(".nav-panel").slideUp(),r.removeClass("opened"),i.removeClass("opened")):(r.removeClass("opened"),i.removeClass("opened"),$(".nav-panel").slideUp(),$(this).addClass("opened").find(".nav-panel").slideDown())}),i.on("click",function(){r.removeClass("opened"),r.find(".nav-panel").slideUp(),$(this).addClass("opened").find(".nav-panel").slideDown()}),o.on("click",function(){t(),console.log("menuaction")}),m=!0),void 0!==u&&u.removeClass("fixed")}else $("#form-container").appendTo("#form-des1"),void 0!==u&&($(window).on("scroll",v),$("li a",$("#menu-24")).off(),$("#myAccount-section").on("mouseover",function(){$(".nav-panel",this).css("display","block")}).on("mouseout",function(e){$(e.target).is("input")||$(".nav-panel",this).css("display","none")}));var r,i,o;$(window).on("scroll",d)},r=function(){$(window).scrollTop()>=350&&o.addClass("sticky-24go")},i=$("#sticky-24go-live");["/health_clubs/find-a-gym/","/sales24","/membership/free-pass/","/myaccount/","/personaltraining/"].forEach(function(e){window.location.href.indexOf(e)>-1&&i.remove()});var o=$("#live-cont");$(".close-24go"),$(".maximize-24go");i.on("click",function(){o.show(),o.find(".iframe-cont").html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/live_stream?channel=UCokTHyQ5VQM1F4lWkiM_0rQ&rel=0&autoplay=1&modestbranding=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> <div class="close-24go"> <i class="fa fa-times"></i> </div><div class="maximize-24go"> <i class="fa fa-window-maximize"></i> </div> ')}),$(document).on("keydown",function(e){"Escape"==e.key&&o.hide().find(".iframe-cont").html("")}),$("body").on("click",".close-24go",function(){o.hide().find(".iframe-cont").html("")}),$("body").on("click",".maximize-24go",function(){o.removeClass("sticky-24go")}),r(),$(window).on("scroll",r),$(".searchBox").on("keydown",function(e){9==(e.keyCode||e.which)&&(e.preventDefault(),$("#at-search-button").trigger("focus"))});var s=$(".header-background");if(s.length&&!$(".navigation-24").length&&$("#wrapper").length){$('<div class="after-menu"><div>').insertAfter(".header-background"),s.addClass("navigation-24");var a=$("#temp1-24").detach(),c=$("#temp2-24").detach();$(".navigation-support").remove(),s.append('<div class="cont-header-24"><div class="header-24"></div></div>'),s.find(".header-24").append(a,c),$(".after-menu").css("margin-bottom","35px"),e(),setTimeout(function(){e()},2e3)}$("#page-content").length||($(".container-24").length?$(".container-24").attr("id","page-content"):$(".grid-container").length?$(".grid-container").attr("id","page-content"):$("#content")&&$(".skip-button.skip-content").attr("href","#content")),setTimeout(function(){$('.skip-button[href="#gym-membership"]').attr("href",window.location.href+"#gym-membership"),$('.skip-button[href="#page-content"]').attr("href",window.location.href+"#page-content"),$('.skip-button[href="#content"]').attr("href",window.location.href+"#content"),$('.skip-button[href="#footer-24"]').attr("href",window.location.href+"#footer-24")},4e3),"function"==typeof getCookie&&getCookie("securityToken")&&""!==getCookie("securityToken").trim()&&"0"!==getCookie("securityToken")?($(".my-account").show(),$(".myAccount-panel").addClass("logged"),$(".sign-in").hide()):($(".sign-in").show(),$(".myAccount-panel").removeClass("logged"),$(".my-account").hide()),"function"==typeof getCookie&&getCookie("rememberMe")&&$("#login-info-usrname").val(getCookie("rememberMe")),setTimeout(function(){var e=$(".main-nav-link"),t=$(".searchForm-team1");e.on("focus",function(){e.parents("li").removeClass("active"),$(this).parents("li").addClass("active")}),$(".main-nav-element").last().find("a").last().on("focusout",function(){e.parents("li").removeClass("active")}),$(".account-logout a").on("focusout",function(){$(".account-menu").removeClass("active")}),$(document).on("click",function(){e.parents("li").removeClass("active"),$(".account-menu").removeClass("active"),t.removeClass("active-form")})},0),(C=$('<div class="button-top"><a href="#after-menu"><i class="fa fa-angle-up" aria-hidden="true"></i></a></div>')).find("a").on("click",function(e){e.preventDefault();var t=$(this).attr("href");$("html, body").animate({scrollTop:$(t).offset().top},"slow")}),$(".container-24").append(C),y=$(".cont-header-24"),_=$("#sli_search_1"),$("#signInTop"),g=$("#at-search-button"),b=$("#search-icon"),w=$(".searchForm-team1"),k=$(".member-login"),$(".logo-link").on("focus",function(e){y.removeClass("fixed")}),k.on("focus",function(){$(".account-menu").addClass("active")}),b.on("click",function(e){e.stopPropagation(),w.toggleClass("active-form")}),g.on("click",function(e){e.stopPropagation()}),_.on("click",function(e){e.stopPropagation()}),_.on("focus",function(e){w.addClass("active-form")}),g.on("focus",function(e){console.log("oih")}),g.on("focusout",function(e){w.removeClass("active-form")}),$(".toggleSearch-temp2").on("click",function(e){e.stopPropagation(),$(".icon-search").toggleClass("search-open"),$(".sub-search").toggleClass("sub-search-open")}),function(){var e=!1,t=($(".locations-panel"),$("#club-finder-form")),n=t.find(".link-button-24"),r=$(".js-reset-results"),i=$(".notifications-area"),o=$(".navigation-24 .nearest-club");function s(s,c){if(e=!1,n.removeClass("loading-club"),s){var l=Handlebars.compile($("#club-template").html()),u=s.groupClubs[0].clubs[0],f={classNType:function(e){"SuperSport"===e?e="Super-Sport":"UltraSport"===e&&(e="Ultra-Sport");return e}(u.type),linkURL:"/Website/Club/"+u.clubNumber,phoneNumber:u.phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/,"($1) $2-$3"),clubImgUrl:"/images/clubs/club_slideshows/"+parseInt(u.clubNumber,10)+"/album1/large/image1.jpg",clubClassesLink:"/utility/classes/?clubid="+u.clubNumber,clubTrainersLink:"/training/trainer_finder/clubs/index.html?sourceApp=AMP24&clubid="+u.clubNumber,clubNearLink:"/health_clubs/find-a-gym/#"+u.address.zip,fullAddress:u.address.street+", "+u.address.city+", "+u.address.state+" "+u.address.zip};r.show(),i.text("").hide(),t.hide();var d=$.extend(u,f);o.html(l(d))}else a("We couldn't find any club with the location provided, please try again with a different search criteria")}function a(e){i.show().find("span").text(e),setTimeout(c,1e4)}function c(){i.hide().find("span").text("")}t.on("submit",function(r){r.preventDefault();var i=t.find("input").val();i.replace(/ /g,"").length&&!e?(e=!0,n.addClass("loading-club"),$.get("/Website/ClubLocation/?maxClubs=1&location="+i).done(function(e){s(e),function(e){sessionStorage&&sessionStorage.setItem("navNearestClub",JSON.stringify(e))}(e)}).fail(function(e){s(null,e)})):a("We couldn't find any club with the location provided, please try again with a different search criteria")}),r.on("click",function(){o.empty(),t.show(),$(this).hide(),sessionStorage&&sessionStorage.removeItem("navNearestClub")}),t.find("input").on("click",c);var l=function(){var e=null;if(sessionStorage)try{e=JSON.parse(sessionStorage.getItem("navNearestClub"))}catch(e){console.log(e)}return e}();l&&s(l)}(),setTimeout(function(){var e,t,n=$(".life24-panel"),r=n.find(".newest-article");try{var i=JSON.parse(localStorage["24Life"]).data.data;i.length&&(e=["<h4>Recent article</h4>",'<div class="article-img">','<img src="'+(t=i[0]).enclosure.$.url.replace("http:","")+'" alt="'+t.title+'">',"</div>",'<div class="article-info">','<div class="article-title">'+t.title+"</div>",'<div class="article-txt">'+$(t.description)[0].textContent+"</div>",'<div class="link-button-24">','<a target="_blank" href="'+t.link+'">Read Article</a>',"</div>","</div>"].join(""),r.html(e),n.addClass("life-24-collapsed"))}catch(e){}},5e3);var l=$(".cont-header-24");$("#menu-icon-mobile").on("click",function(){t()});var u=$(".cont-header-24"),f=$(".links-nav-bar");u.length||(u=$("#wrapper"));u.offset().top;var d=function(){var e=$(".container-24").height();$(window).scrollTop()>=350&&e>=1e3?$(".button-top").fadeIn(1e3):$(".button-top").fadeOut()},p=window.matchMedia("(max-width: 1120px)"),h=0,m=!1;p.addListener(n),window.onresize=function(){n(p)};var v=function(){$(window).scrollTop()>=350&&0==h?(u.addClass("fixed"),f.addClass("fixed-sub")):(u.removeClass("fixed"),f.removeClass("fixed-sub"))};n(p),$(".logout").on("click",function(e){e.preventDefault(),"Member Logout"===$(this).text()&&(document.cookie="securityToken=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/fitperks"),document.cookie="securityToken=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT; ",document.cookie="isZuoraMember=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT; ",document.cookie="isMigratedMember=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="loggedInUserName=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT; ",window.location.pathname="/login.html"}),$("#ma-nav-login").on("submit",function(e){e.preventDefault(),$("#ma-nav-login .fa-spinner").css("display","inline-block");var t=$("#login-info-usrname").val(),n=$("#login-info-passwrd").val();if(t&&n){var r=window.location.hostname.split(".")[0];fetch("https://"+{webdev:"api-dev",webqa:"api-qa",webtrn:"api-qa",www:"api"}[r]+".24hourfitness.com/account/users/login",{method:"post",headers:{"Content-Type":"application/json;=UTF-8"},body:JSON.stringify({username:t,password:n})}).then(function(e){if($("#ma-nav-login .fa-spinner").css("display","inline-block"),!e.ok)throw new Error(response.status);var n=new Date;n.setTime(n.getTime()+12e5);var r="; expires="+n.toUTCString();if(document.cookie="loggedInUserName="+t+r+";path=/ ; domain=.24hourfitness.com;",document.cookie="securityToken="+e.headers.get("security-token")+r+";path=/ ;",document.cookie="isZuoraMember="+e.headers.get("isZuoraMember")+r+";path=/ ;",document.cookie="isMigratedMember="+e.headers.get("isMigratedMember")+r+";path=/ ;",window.location.pathname="/myaccount/profile.html",$("#remember-me").is(":checked")){var i=new Date;i.setTime(i.getTime()+31536e6);var o="; expires="+i.toUTCString();document.cookie="rememberMe="+t+o+";path=/ ;"}}).catch(function(e){$("#login-error span").html("Incorrect username or password. Please try again."),$("#login-error").css("display","block"),$("#ma-nav-login .fa-spinner").hide(),console.log("Login failed",e)})}else $("#login-error span").html("Please enter all the fields."),$("#login-error").css("display","block"),$("#ma-nav-login .fa-spinner").hide(),console.log("please enter all the fields")}),$(".social-login").on("click",function(e){e.preventDefault();var t=$(this).data("social"),n=window.location.origin+"/login.html/",r=window.location.hostname.split(".")[0],i="https://24-hour-fitness-"+{webdev:"dev",webqa:"qa",webtrn:"trn",www:"www"}[r]+".rpxnow.com/",o=i+t+"/start?language=en-US&token_url="+n+"&display=display&applicationId="+{www:"cghedimdlnkkadpekaij",webtrn:"jdccmgcpcepkglddabjn",webqa:"nkclbmoalgfpgaejgnjf",webdev:"acndlophiljpajjdjejn"}[r];window.addEventListener("message",function(e){var t=e.data||null;if(e.origin!==i||"string"!=typeof e.data||0!==t.indexOf("jainrainTkn="))var n=t.split("janrainTkn=")[1];n?function(e){var t=window.location.hostname.split(".")[0];fetch("https://"+{webdev:"api-dev",webqa:"api-qa",webtrn:"api-qa",www:"api"}[t]+".24hourfitness.com/account/users/login",{method:"post",headers:{"Content-Type":"application/json;=UTF-8"},body:JSON.stringify({socialSecurityToken:e})}).then(function(e){console.log(e);var t=new Date;t.setTime(t.getTime()+12e5);var n="; expires="+t.toUTCString();document.cookie="securityToken="+e.headers.get("security-token")+n+";path=/ ; ",document.cookie="isZuoraMember="+e.headers.get("isZuoraMember")+n+";path=/ ; ",document.cookie="isMigratedMember="+e.headers.get("isMigratedMember")+n+";path=/ ; ",window.location.pathname="/myaccount/profile.html"}).catch(function(e){console.log("Login failed",e)})}(n):n=null}),window.open(o,"socialLogin","chrome=yes,dependent=1,height=500,location=0,menubar=0,status=0,personalbar=0,toolbar=0,width=600")}),$("#close-alert-sign").on("click",function(e){e.preventDefault(),$("#login-error").css("display","none")}),window.nav24=!0}var y,_,g,b,w,k,C}),$(function(){$("#at-search-button").on("click",function(e){$("#sli_search_1").is(":visible")||(e.preventDefault(),document.getElementById("sli_search_1").style.display="inline-block")})})},function(e,t,n){"use strict";n.r(t);n(196),n(197)},function(e,t,n){},function(e,t){$(document).ready(function(){$(".flip").on("click",function(){var e=$(".menu-toggle",this),t=$(this).next(".item-links");window.matchMedia("(max-width: 767px)").matches&&(t.hasClass("item-open")?(t.slideUp(),t.removeClass("item-open"),e.removeClass("open")):($(".menu-toggle").removeClass("open"),$(".item-links").removeClass("item-open"),$(".item-links").slideUp("item-open"),t.addClass("item-open"),e.addClass("open"),t.slideDown()))}),$("[data-current-year]").html((new Date).getFullYear())})}]);
