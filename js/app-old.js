$(function(){function e(){console.log("Running safariResize");var e=1;$("img").on("load",function(){if(e++,images=$("img"),e==$("img").length)for(var t=1;t<images.length;t++){var i=images[t].naturalHeight,n=images[t].naturalWidth,s=i/n,a=images[t].width/n,o=i*a,r=n*a;if("cover"!=$(images[t]).css("object-fit"))$(images[t]).css("height",o+"px");else if("cover"==$(images[t]).css("object-fit")&&$(images[t]).parent().hasClass("project-image-wrapper")){var l=$(images[t]).parent().height(),c=$(images[t]).parent().width(),d=l/o,u=c/r;newNewH=l*u,newNewW=c*d;var h=(newNewW-c)/2;$(images[t]).css("height",l+"px"),$(images[t]).css("width",newNewW+"px"),$(images[t]).css("max-height","2000px"),$(images[t]).css("max-width","2000px"),$(images[t]).css("position","relative"),$(images[t]).css("left","-"+h+"px")}else"cover"!=$(images[t]).css("object-fit")||$(images[t]).parent().hasClass("project-image-wrapper")||(newNewW=$(images[t]).width(),$(images[t]).css("width","100%"),newNewH=$(images[t]).width()*s,$(images[t]).css("height",newNewH+"px"),$(images[t]).css("max-height","2000px"),$(images[t]).css("max-width","2000px"),$(images[t]).css("position","relative"))}}),$(window).resize(function(){for(var e=1;e<images.length;e++){var t=images[e].naturalHeight,i=images[e].naturalWidth,n=t/i,s=$(images[e]).parent().width()/i,a=t*s;if("cover"!=$(images[e]).css("object-fit"))$(images[e]).parent().hasClass(employee)||$(images[e]).css("height",a+"px");else if("cover"==$(images[e]).css("object-fit")&&$(images[e]).parent().hasClass("project-image-wrapper")){var o=$(images[e]).parent().height(),r=$(images[e]).parent().width(),l=o/a,c=o/l,d=r*l;d<r&&(fixedRatio=r/d,d*=fixedRatio),$(images[e]).css("height",c+"px"),$(images[e]).css("width",d+"px"),$(images[e]).css("max-height","2000px"),$(images[e]).css("max-width","2000px"),$(images[e]).css("position","relative");var u;u=d>r?(r-d)/2:d<r?(d-r)/2:0,$(images[e]).css("left",u+"px")}else"cover"!=$(images[e]).css("object-fit")||$(images[e]).parent().hasClass("project-image-wrapper")||(d=$(images[e]).width(),c=$(images[e]).width()*n,$(images[e]).css("height",c+"px"),$(images[e]).css("width","100%"),$(images[e]).css("max-height","2000px"),$(images[e]).css("max-width","2000px"),$(images[e]).css("position","relative"))}})}function t(){$(".filter-drop").click(function(){var e=$(".filter-list");$(".project-filter i").toggleClass("rotate"),e.is(":hidden")?e.slideDown():e.slideUp(),$(".filter-list span").click(function(){var t=$(this).text();$(".project-filter i").removeClass("rotate"),$(".filter-active").text(t),e.is(":hidden")?e.slideDown():e.slideUp()})})}function i(){function e(){var e=$(window).scrollTop();a.length>0?i(e):t(e),c=e,l=!1}function t(e){c-e>d?n.removeClass("is-hidden"):e-c>d&&e>u&&n.addClass("is-hidden")}function i(e){var t=a.offset().top-s.height()-n.height();c>=e?e<t?(n.removeClass("is-hidden"),s.removeClass("fixed slide-up"),a.removeClass("secondary-nav-fixed")):c-e>d&&(n.removeClass("is-hidden"),s.removeClass("slide-up").addClass("fixed"),a.addClass("secondary-nav-fixed")):e>t+u?(n.addClass("is-hidden"),s.addClass("fixed slide-up"),a.addClass("secondary-nav-fixed")):e>t&&(n.removeClass("is-hidden"),s.addClass("fixed").removeClass("slide-up"),a.addClass("secondary-nav-fixed"))}console.log("Navigation script running");var n=$(".cd-auto-hide-header"),s=$(".cd-secondary-nav"),a=$(".sub-nav-hero"),o=n.height(),r=!1,l=!1,c=0,d=10,u=0;n.on("click",".nav-trigger",function(e){e.preventDefault(),r||($(this).parents(".csstransitions").length>=0&&(r=!0),n.toggleClass("nav-open"),$(".cd-navigation-wrapper").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){r=!1}))}),n.on("click","a",function(e){n.hasClass("nav-open")&&(n.toggleClass("nav-open"),r=!1)}),$(window).on("scroll",function(){l||n.hasClass("nav-open")||(l=!0,window.requestAnimationFrame?requestAnimationFrame(e):setTimeout(e,250))}),$(window).on("resize",function(){o=n.height()})}function n(){var e=$("#testimonials-l"),t=$("#testimonials-r"),i=document.getElementById("testimonials-ul").querySelectorAll("li").length,n=100*i+"%";$(".testimonials ul").css("width",n);var s=0;console.log(s),t.click(function(){if(s<i-1){s++;var e="-"+100*s+"%";$(".testimonials ul").animate({left:e},500),a()}}),e.click(function(){if(s>0){s--;var e="-"+100*s+"%";$(".testimonials ul").animate({left:e},500),a()}});var a=function(){0==s?(e.css("opacity","0.3"),e.css("cursor","default")):s==i-1?(t.css("opacity","0.3"),t.css("cursor","default")):(t.css("opacity","1"),t.css("cursor","pointer"),e.css("opacity","1"),e.css("cursor","pointer"))};a(),1==i&&$(".testimonials-control").css("display","none")}function s(){function e(){p.width(0),p.velocity({width:"100%"},v,e)}function t(e,t,i,n){e.removeClass("selected from-left from-right").addClass("is-moving").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){e.removeClass("is-moving")}),t.children("li").eq(n).addClass("selected from-right").prevAll().addClass("move-left"),r(e,t,n)}function i(e,t,i,n){e.removeClass("selected from-left from-right").addClass("is-moving").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){e.removeClass("is-moving")}),t.children("li").eq(n).addClass("selected from-left").removeClass("move-left").nextAll().removeClass("move-left"),r(e,t,n)}function n(e,t){var i=e.find(".selected");i.removeClass("selected"),e.find("li").eq(t).addClass("selected")}function s(e,t,i){e.hasClass("autoplay")&&(clearInterval(d),d=window.setInterval(function(){a(t)},i))}function a(e){g<e-1?(t(c.find(".selected"),c,h,g+1),g+=1):(i(c.find(".selected"),c,h,0),g=0),l(f,g+1),n(h,g)}function o(e){e.find(".cd-bg-video-wrapper").each(function(){var e=$(this);if(e.is(":visible")){var t=e.data("video"),i=$('<video loop><source src="'+t+'.mp4" type="video/mp4" /><source src="'+t+'.webm" type="video/webm" /></video>');i.appendTo(e),e.parent(".cd-bg-video.selected").length>0&&i.get(0).play()}})}function r(e,t,i){var n=e.find("video");n.length>0&&n.get(0).pause();var s=t.children("li").eq(i).find("video");s.length>0&&s.get(0).play()}function l(e,t){e.removeClassPrefix("item").addClass("item-"+t)}var c=$(".cd-hero-slider");if(c.length>0){var d,u=$(".cd-primary-nav"),h=$(".cd-slider-nav"),f=$(".cd-marker"),p=$(".progress-bar"),m=c.children("li").length,g=0,v=5e3;o(c),s(c,m,v),e(),u.on("click",function(e){$(e.target).is(".cd-primary-nav")&&$(this).children("ul").toggleClass("is-visible")}),h.on("click","li",function(e){e.preventDefault();var a=$(this);if(!a.hasClass("selected")){var o=a.index(),r=c.find("li.selected").index();r<o?t(c.find(".selected"),c,h,o):i(c.find(".selected"),c,h,o),g=o,n(h,o),l(f,o+1),s(c,m,v)}})}$.fn.removeClassPrefix=function(e){return this.each(function(t,i){var n=i.className.split(" ").filter(function(t){return 0!==t.lastIndexOf(e,0)});i.className=$.trim(n.join(" "))}),this}}function a(){function e(){!function(e){"use strict";function t(e,i){if(!(this instanceof t)){var n=new t(e,i);return n.open(),n}this.id=t.id++,this.setup(e,i),this.chainCallbacks(t._callbackChain)}function i(e,t){var i={};for(var n in e)n in t&&(i[n]=e[n],delete e[n]);return i}function n(e,t){var i={},n=new RegExp("^"+t+"([A-Z])(.*)");for(var s in e){var a=s.match(n);if(a){var o=(a[1]+a[2].replace(/([A-Z])/g,"-$1")).toLowerCase();i[o]=e[s]}}return i}if("undefined"==typeof e)return void("console"in window&&window.console.info("Too much lightness, Featherlight needs jQuery."));var s=[],a=function(t){return s=e.grep(s,function(e){return e!==t&&e.$instance.closest("body").length>0})},o={allowfullscreen:1,frameborder:1,height:1,longdesc:1,marginheight:1,marginwidth:1,name:1,referrerpolicy:1,scrolling:1,sandbox:1,src:1,srcdoc:1,width:1},r={keyup:"onKeyUp",resize:"onResize"},l=function(i){e.each(t.opened().reverse(),function(){return i.isDefaultPrevented()||!1!==this[r[i.type]](i)?void 0:(i.preventDefault(),i.stopPropagation(),!1)})},c=function(i){if(i!==t._globalHandlerInstalled){t._globalHandlerInstalled=i;var n=e.map(r,function(e,i){return i+"."+t.prototype.namespace}).join(" ");e(window)[i?"on":"off"](n,l)}};t.prototype={constructor:t,namespace:"featherlight",targetAttr:"data-featherlight",variant:null,resetCss:!1,background:null,openTrigger:"click",closeTrigger:"click",filter:null,root:"body",openSpeed:250,closeSpeed:250,closeOnClick:"anywhere",closeOnEsc:!0,closeIcon:"&#10005;",loading:"",persist:!1,otherClose:null,beforeOpen:e.noop,beforeContent:e.noop,beforeClose:e.noop,afterOpen:e.noop,afterContent:e.noop,afterClose:e.noop,onKeyUp:e.noop,onResize:e.noop,type:null,contentFilters:["jquery","image","html","ajax","iframe","text"],setup:function(t,i){"object"!=typeof t||t instanceof e!=0||i||(i=t,t=void 0);var n=e.extend(this,i,{target:t}),s=n.resetCss?n.namespace+"-reset":n.namespace,a=e(n.background||['<div class="'+s+"-loading "+s+'">','<div class="'+s+'-content">','<button class="'+s+"-close-icon "+n.namespace+'-close" aria-label="Close">',n.closeIcon,"</button>",'<div class="'+n.namespace+'-inner">'+n.loading+"</div>","</div>","</div>"].join("")),o="."+n.namespace+"-close"+(n.otherClose?","+n.otherClose:"");return n.$instance=a.clone().addClass(n.variant),n.$instance.on(n.closeTrigger+"."+n.namespace,function(t){var i=e(t.target);("background"===n.closeOnClick&&i.is("."+n.namespace)||"anywhere"===n.closeOnClick||i.closest(o).length)&&(n.close(t),t.preventDefault())}),this},getContent:function(){if(this.persist!==!1&&this.$content)return this.$content;var t=this,i=this.constructor.contentFilters,n=function(e){return t.$currentTarget&&t.$currentTarget.attr(e)},s=n(t.targetAttr),a=t.target||s||"",o=i[t.type];if(!o&&a in i&&(o=i[a],a=t.target&&s),a=a||n("href")||"",!o)for(var r in i)t[r]&&(o=i[r],a=t[r]);if(!o){var l=a;if(a=null,e.each(t.contentFilters,function(){return o=i[this],o.test&&(a=o.test(l)),!a&&o.regex&&l.match&&l.match(o.regex)&&(a=l),!a}),!a)return"console"in window&&window.console.error("Featherlight: no content filter found "+(l?' for "'+l+'"':" (no target specified)")),!1}return o.process.call(t,a)},setContent:function(t){var i=this;return t.is("iframe")&&i.$instance.addClass(i.namespace+"-iframe"),i.$instance.removeClass(i.namespace+"-loading"),i.$instance.find("."+i.namespace+"-inner").not(t).slice(1).remove().end().replaceWith(e.contains(i.$instance[0],t[0])?"":t),i.$content=t.addClass(i.namespace+"-inner"),i},open:function(t){var i=this;if(i.$instance.hide().appendTo(i.root),!(t&&t.isDefaultPrevented()||i.beforeOpen(t)===!1)){t&&t.preventDefault();var n=i.getContent();if(n)return s.push(i),c(!0),i.$instance.fadeIn(i.openSpeed),i.beforeContent(t),e.when(n).always(function(e){i.setContent(e),i.afterContent(t)}).then(i.$instance.promise()).done(function(){i.afterOpen(t)})}return i.$instance.detach(),e.Deferred().reject().promise()},close:function(t){var i=this,n=e.Deferred();return i.beforeClose(t)===!1?n.reject():(0===a(i).length&&c(!1),i.$instance.fadeOut(i.closeSpeed,function(){i.$instance.detach(),i.afterClose(t),n.resolve()})),n.promise()},resize:function(e,t){if(e&&t){this.$content.css("width","").css("height","");var i=Math.max(e/(parseInt(this.$content.parent().css("width"),10)-1),t/(parseInt(this.$content.parent().css("height"),10)-1));i>1&&(i=t/Math.floor(t/i),this.$content.css("width",""+e/i+"px").css("height",""+t/i+"px"))}},chainCallbacks:function(t){for(var i in t)this[i]=e.proxy(t[i],this,e.proxy(this[i],this))}},e.extend(t,{id:0,autoBind:"[data-featherlight]",defaults:t.prototype,contentFilters:{jquery:{regex:/^[#.]\w/,test:function(t){return t instanceof e&&t},process:function(t){return this.persist!==!1?e(t):e(t).clone(!0)}},image:{regex:/\.(png|jpg|jpeg|gif|tiff|bmp|svg)(\?\S*)?$/i,process:function(t){var i=this,n=e.Deferred(),s=new Image,a=e('<img src="'+t+'" alt="" class="'+i.namespace+'-image" />');return s.onload=function(){a.naturalWidth=s.width,a.naturalHeight=s.height,n.resolve(a)},s.onerror=function(){n.reject(a)},s.src=t,n.promise()}},html:{regex:/^\s*<[\w!][^<]*>/,process:function(t){return e(t)}},ajax:{regex:/./,process:function(t){var i=e.Deferred(),n=e("<div></div>").load(t,function(e,t){"error"!==t&&i.resolve(n.contents()),i.fail()});return i.promise()}},iframe:{process:function(t){var s=new e.Deferred,a=e("<iframe/>"),r=n(this,"iframe"),l=i(r,o);return a.hide().attr("src",t).attr(l).css(r).on("load",function(){s.resolve(a.show())}).appendTo(this.$instance.find("."+this.namespace+"-content")),s.promise()}},text:{process:function(t){return e("<div>",{text:t})}}},functionAttributes:["beforeOpen","afterOpen","beforeContent","afterContent","beforeClose","afterClose"],readElementConfig:function(t,i){var n=this,s=new RegExp("^data-"+i+"-(.*)"),a={};return t&&t.attributes&&e.each(t.attributes,function(){var t=this.name.match(s);if(t){var i=this.value,o=e.camelCase(t[1]);if(e.inArray(o,n.functionAttributes)>=0)i=new Function(i);else try{i=JSON.parse(i)}catch(e){}a[o]=i}}),a},extend:function(t,i){var n=function(){this.constructor=t};return n.prototype=this.prototype,t.prototype=new n,t.__super__=this.prototype,e.extend(t,this,i),t.defaults=t.prototype,t},attach:function(t,i,n){var s=this;"object"!=typeof i||i instanceof e!=0||n||(n=i,i=void 0),n=e.extend({},n);var a,o=n.namespace||s.defaults.namespace,r=e.extend({},s.defaults,s.readElementConfig(t[0],o),n),l=function(o){var l=e.extend({$source:t,$currentTarget:e(this)},s.readElementConfig(t[0],r.namespace),s.readElementConfig(this,r.namespace),n),c=a||e(this).data("featherlight-persisted")||new s(i,l);"shared"===c.persist?a=c:c.persist!==!1&&e(this).data("featherlight-persisted",c),l.$currentTarget.blur(),c.open(o)};return t.on(r.openTrigger+"."+r.namespace,r.filter,l),l},current:function(){var e=this.opened();return e[e.length-1]||null},opened:function(){var t=this;return a(),e.grep(s,function(e){return e instanceof t})},close:function(e){var t=this.current();return t?t.close(e):void 0},_onReady:function(){var t=this;t.autoBind&&(e(t.autoBind).each(function(){t.attach(e(this))}),e(document).on("click",t.autoBind,function(i){if(!i.isDefaultPrevented()){var n=t.attach(e(i.currentTarget));n(i)}}))},_callbackChain:{onKeyUp:function(t,i){return 27===i.keyCode?(this.closeOnEsc&&e.featherlight.close(i),!1):t(i)},beforeOpen:function(t,i){return this._previouslyActive=document.activeElement,this._$previouslyTabbable=e("a, input, select, textarea, iframe, button, iframe, [contentEditable=true]").not("[tabindex]").not(this.$instance.find("button")),this._$previouslyWithTabIndex=e("[tabindex]").not('[tabindex="-1"]'),this._previousWithTabIndices=this._$previouslyWithTabIndex.map(function(t,i){return e(i).attr("tabindex")}),this._$previouslyWithTabIndex.add(this._$previouslyTabbable).attr("tabindex",-1),document.activeElement.blur(),t(i)},afterClose:function(t,i){var n=t(i),s=this;return this._$previouslyTabbable.removeAttr("tabindex"),this._$previouslyWithTabIndex.each(function(t,i){e(i).attr("tabindex",s._previousWithTabIndices[t])}),this._previouslyActive.focus(),n},onResize:function(e,t){return this.resize(this.$content.naturalWidth,this.$content.naturalHeight),e(t)},afterContent:function(e,t){var i=e(t);return this.$instance.find("[autofocus]:not([disabled])").focus(),this.onResize(t),i}}}),e.featherlight=t,e.fn.featherlight=function(e,i){return t.attach(this,e,i),this},e(document).ready(function(){t._onReady()})}(jQuery)}function t(){console.log("Typing script running");var e=function(e,t){this.el=$(e),this.options=$.extend({},$.fn.typed.defaults,t),this.isInput=this.el.is("input"),this.attr=this.options.attr,this.showCursor=!this.isInput&&this.options.showCursor,this.elContent=this.attr?this.el.attr(this.attr):this.el.text(),this.contentType=this.options.contentType,this.typeSpeed=this.options.typeSpeed,this.startDelay=this.options.startDelay,this.backSpeed=this.options.backSpeed,this.backDelay=this.options.backDelay,this.stringsElement=this.options.stringsElement,this.strings=this.options.strings,this.strPos=0,this.arrayPos=0,this.stopNum=0,this.loop=this.options.loop,this.loopCount=this.options.loopCount,this.curLoop=0,this.stop=!1,this.cursorChar=this.options.cursorChar,this.shuffle=this.options.shuffle,this.sequence=[],this.build()};e.prototype={constructor:e,init:function(){var e=this;e.timeout=setTimeout(function(){for(var t=0;t<e.strings.length;++t)e.sequence[t]=t;e.shuffle&&(e.sequence=e.shuffleArray(e.sequence)),e.typewrite(e.strings[e.sequence[e.arrayPos]],e.strPos)},e.startDelay)},build:function(){var e=this;if(this.showCursor===!0&&(this.cursor=$('<span class="typed-cursor">'+this.cursorChar+"</span>"),this.el.after(this.cursor)),this.stringsElement){this.strings=[],this.stringsElement.hide(),console.log(this.stringsElement.children());var t=this.stringsElement.children();$.each(t,function(t,i){e.strings.push($(i).html())})}this.init()},typewrite:function(e,t){if(this.stop!==!0){var i=Math.round(70*Math.random())+this.typeSpeed,n=this;n.timeout=setTimeout(function(){var i=0,s=e.substr(t);if("^"===s.charAt(0)){var a=1;/^\^\d+/.test(s)&&(s=/\d+/.exec(s)[0],a+=s.length,i=parseInt(s)),e=e.substring(0,t)+e.substring(t+a)}if("html"===n.contentType){var o=e.substr(t).charAt(0);if("<"===o||"&"===o){var r="",l="";for(l="<"===o?">":";";e.substr(t+1).charAt(0)!==l&&(r+=e.substr(t).charAt(0),t++,!(t+1>e.length)););t++,r+=l}}n.timeout=setTimeout(function(){if(t===e.length){if(n.options.onStringTyped(n.arrayPos),n.arrayPos===n.strings.length-1&&(n.options.callback(),n.curLoop++,n.loop===!1||n.curLoop===n.loopCount))return;n.timeout=setTimeout(function(){n.backspace(e,t)},n.backDelay)}else{0===t&&n.options.preStringTyped(n.arrayPos);var i=e.substr(0,t+1);n.attr?n.el.attr(n.attr,i):n.isInput?n.el.val(i):"html"===n.contentType?n.el.html(i):n.el.text(i),t++,n.typewrite(e,t)}},i)},i)}},backspace:function(e,t){if(this.stop!==!0){var i=Math.round(70*Math.random())+this.backSpeed,n=this;n.timeout=setTimeout(function(){if("html"===n.contentType&&">"===e.substr(t).charAt(0)){for(var i="";"<"!==e.substr(t-1).charAt(0)&&(i-=e.substr(t).charAt(0),t--,!(t<0)););t--,i+="<"}var s=e.substr(0,t);n.attr?n.el.attr(n.attr,s):n.isInput?n.el.val(s):"html"===n.contentType?n.el.html(s):n.el.text(s),t>n.stopNum?(t--,n.backspace(e,t)):t<=n.stopNum&&(n.arrayPos++,n.arrayPos===n.strings.length?(n.arrayPos=0,n.shuffle&&(n.sequence=n.shuffleArray(n.sequence)),n.init()):n.typewrite(n.strings[n.sequence[n.arrayPos]],t))},i)}},shuffleArray:function(e){var t,i,n=e.length;if(n)for(;--n;)i=Math.floor(Math.random()*(n+1)),t=e[i],e[i]=e[n],e[n]=t;return e},reset:function(){var e=this;clearInterval(e.timeout);this.el.attr("id");this.el.empty(),"undefined"!=typeof this.cursor&&this.cursor.remove(),this.strPos=0,this.arrayPos=0,this.curLoop=0,this.options.resetCallback()}},$.fn.typed=function(t){return this.each(function(){var i=$(this),n=i.data("typed"),s="object"==typeof t&&t;n&&n.reset(),i.data("typed",n=new e(this,s)),"string"==typeof t&&n[t]()})},$.fn.typed.defaults={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,shuffle:!1,backDelay:500,loop:!1,loopCount:!1,showCursor:!0,cursorChar:"|",attr:null,contentType:"html",callback:function(){},preStringTyped:function(){},onStringTyped:function(){},resetCallback:function(){}}}function i(){console.log("Accordion script running");var e,t=document.getElementsByClassName("accordion");for(e=0;e<t.length;e++)t[e].onclick=function(){this.classList.toggle("active");var e=this.nextElementSibling;e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"}}function n(){function e(){t($(".headline.letters").find("b")),i($(".headline"))}function t(e){e.each(function(){var e=$(this),t=e.text().split(""),i=e.hasClass("is-visible");for(var n in t)e.parents(".rotate-2").length>0&&(t[n]="<em>"+t[n]+"</em>"),t[n]=i?'<i class="in">'+t[n]+"</i>":"<i>"+t[n]+"</i>";var s=t.join("");e.html(s).css("opacity",1)})}function i(e){var t=c;e.each(function(){var e=$(this);if(e.hasClass("loading-bar"))t=d,setTimeout(function(){e.find(".words-wrapper").addClass("is-loading")},u);else if(e.hasClass("clip")){var i=e.find(".words-wrapper"),s=i.width()+10;i.css("width",s)}else if(!e.hasClass("type")){var a=e.find(".words-wrapper b"),o=0;a.each(function(){var e=$(this).width();e>o&&(o=e)}),e.find(".words-wrapper").css("width",o)}setTimeout(function(){n(e.find(".is-visible").eq(0))},t)})}function n(e){var t=r(e);if(e.parents(".headline").hasClass("type")){var i=e.parent(".words-wrapper");i.addClass("selected").removeClass("waiting"),setTimeout(function(){i.removeClass("selected"),e.removeClass("is-visible").addClass("is-hidden").children("i").removeClass("in").addClass("out")},p),setTimeout(function(){s(t,f)},m)}else if(e.parents(".headline").hasClass("letters")){var v=e.children("i").length>=t.children("i").length;a(e.find("i").eq(0),e,v,h),o(t.find("i").eq(0),t,v,h)}else e.parents(".headline").hasClass("clip")?e.parents(".words-wrapper").animate({width:"2px"},g,function(){l(e,t),s(t)}):e.parents(".headline").hasClass("loading-bar")?(e.parents(".words-wrapper").removeClass("is-loading"),l(e,t),setTimeout(function(){n(t)},d),setTimeout(function(){e.parents(".words-wrapper").addClass("is-loading")},u)):(l(e,t),setTimeout(function(){n(t)},c))}function s(e,t){e.parents(".headline").hasClass("type")?(o(e.find("i").eq(0),e,!1,t),e.addClass("is-visible").removeClass("is-hidden")):e.parents(".headline").hasClass("clip")&&e.parents(".words-wrapper").animate({width:e.width()+10},g,function(){setTimeout(function(){n(e)},v)})}function a(e,t,i,s){if(e.removeClass("in").addClass("out"),e.is(":last-child")?i&&setTimeout(function(){n(r(t))},c):setTimeout(function(){a(e.next(),t,i,s)},s),e.is(":last-child")&&$("html").hasClass("no-csstransitions")){var o=r(t);l(t,o)}}function o(e,t,i,s){e.addClass("in").removeClass("out"),e.is(":last-child")?(t.parents(".headline").hasClass("type")&&setTimeout(function(){t.parents(".words-wrapper").addClass("waiting")},200),i||setTimeout(function(){n(t)},c)):setTimeout(function(){o(e.next(),t,i,s)},s)}function r(e){return e.is(":last-child")?e.parent().children().eq(0):e.next()}function l(e,t){e.removeClass("is-visible").addClass("is-hidden"),t.removeClass("is-hidden").addClass("is-visible")}console.log("Culture script running");var c=5e3,d=3800,u=d-3e3,h=50,f=150,p=500,m=p+800,g=600,v=1500;e()}function s(){console.log("Employees script running"),$.fn.imagesRotation=function(e){var t={images:[],dataAttr:"images",imgSelector:"img",interval:1e3,intervalFirst:500,callback:null},i=$.extend({},t,e),n=function(e){clearInterval(e.data("imagesRotaionTimeout")),e.removeData("imagesRotaionTimeout"),clearInterval(e.data("imagesRotaionInterval")),e.removeData("imagesRotaionInterval")},s=function(e){var t=i.images.length?i.images:e.data(i.dataAttr);return!!$.isArray(t)&&t},a=function(e){$(e).each(function(){$("<img/>")[0].src=this})},o=function(){var e=[];this.each(function(){var t=s($(this));t&&t.length>1&&e.push(t[1])}),a(e)};o.call(this),this.on("mouseenter.imagesRotation",function(){var e=$(this),t=i.imgSelector?$(i.imgSelector,e):null,o=s(e),r=o?o.length:null,l=function(){var n=e.data("imagesRotationIndex")||0,s=n+1<r?n+1:0,l=s+1<r?s+1:0;e.data("imagesRotationIndex",s),t&&t.length>0&&(t.is("img")?t.attr("src",o[s]):t.css("background-image","url("+o[s]+")")),i.callback&&i.callback(o[s]),a([o[l]])};if(r){n(e);var c=setTimeout(function(){l();var t=setInterval(l,i.interval);e.data("imagesRotaionInterval",t)},i.intervalFirst);e.data("imagesRotaionTimeout",c)}}).on("mouseleave.imagesRotation",function(){n($(this))}).on("imagesRotationRemove",function(){var e=$(this);e.off(".imagesRotation"),n(e)})},$.fn.imagesRotationRemove=function(){this.trigger("imagesRotationRemove")}}function a(){console.log("Video script running");var e=e||{};e={name:"fullScreenVideo",backgroundVideo:"kr5kajxq3j",backgroundVideoDiv:"#wistia_kr5kajxq3j",embedVideo:function(){var t={};Wistia.obj.merge(t,{plugin:{cropFill:{src:"//fast.wistia.com/labs/crop-fill/plugin.js"}}}),wistiaEmbed=Wistia.embed(e.backgroundVideo,t),wistiaEmbed.bind("play",function(){return wistiaEmbed.pause(),wistiaEmbed.time(0),$(e.backgroundVideoDiv).css("visibility","visible"),wistiaEmbed.play(),this.unbind})},fixTextPosition:function(){var e=$(window).width(),t=$(window).height();textWidth=$("#text").width(),textHeight=$("#text").height(),$("#video_container").css("width","100%").css("height",.65*t);var i=$("#video_container").height();$("#text").css("left",e/2-textWidth/2).css("top",i/2-textHeight/2)},fixVideoPosition:function(){}},$(document).ready(function(){e.fixTextPosition(),e.fixVideoPosition(),$("#text").delay(200).animate({opacity:1},650)}),$(window).resize(e.fixTextPosition),e.embedVideo()}function o(){function e(e,t){var i=document.getElementById("cd-zoom-in"),n=document.getElementById("cd-zoom-out");e.appendChild(i),e.appendChild(n),google.maps.event.addDomListener(i,"click",function(){t.setZoom(t.getZoom()+1)}),google.maps.event.addDomListener(n,"click",function(){t.setZoom(t.getZoom()-1)})}console.log("Map script running");var t=44.485759,i=-87.992912,n=14,s=navigator.userAgent.toLowerCase().indexOf("trident")>-1,a=s?"/img/contact/cd-icon-location.png":"/img/contact/cd-icon-location.svg",o="#2d313f",r=0,l=5,c=[{elementType:"labels",stylers:[{saturation:r}]},{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road.highway",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road.local",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"geometry.fill",stylers:[{hue:o},{visibility:"on"},{lightness:l},{saturation:r}]},{featureType:"poi",elementType:"geometry.fill",stylers:[{hue:o},{visibility:"on"},{lightness:l},{saturation:r}]},{featureType:"poi.government",elementType:"geometry.fill",stylers:[{hue:o},{visibility:"on"},{lightness:l},{saturation:r}]},{featureType:"poi.sport_complex",elementType:"geometry.fill",stylers:[{hue:o},{visibility:"on"},{lightness:l},{saturation:r}]},{featureType:"poi.attraction",elementType:"geometry.fill",stylers:[{hue:o},{visibility:"on"},{lightness:l},{saturation:r}]},{featureType:"poi.business",elementType:"geometry.fill",stylers:[{hue:o},{visibility:"on"},{lightness:l},{saturation:r}]},{featureType:"transit",elementType:"geometry.fill",stylers:[{hue:o},{visibility:"on"},{lightness:l},{saturation:r}]},{featureType:"transit.station",elementType:"geometry.fill",stylers:[{hue:o},{visibility:"on"},{lightness:l},{saturation:r}]},{featureType:"landscape",stylers:[{hue:o},{visibility:"on"},{lightness:l},{saturation:r}]},{featureType:"road",elementType:"geometry.fill",stylers:[{hue:o},{visibility:"on"},{lightness:l},{saturation:r}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{hue:"#baab84"},{visibility:"on"},{lightness:l},{saturation:r}]},{featureType:"water",elementType:"geometry",stylers:[{hue:o},{visibility:"on"},{lightness:l},{saturation:r}]}],d={center:new google.maps.LatLng(t,i),zoom:n,panControl:!1,zoomControl:!1,mapTypeControl:!1,streetViewControl:!1,mapTypeId:google.maps.MapTypeId.ROADMAP,scrollwheel:!1,styles:c},u=new google.maps.Map(document.getElementById("google-container"),d),h=(new google.maps.Marker({position:new google.maps.LatLng(t,i),map:u,visible:!0,icon:a}),document.createElement("div"));new e(h,u);u.controls[google.maps.ControlPosition.LEFT_TOP].push(h)}var r=$(location).attr("href");console.log("Main scripts running"),s(),$(".images-rotation").imagesRotation(),i(),e(),r.indexOf("agency")>=0&&a(),r.indexOf("culture")>=0&&n(),r.indexOf("contact")>=0&&(t(),o())}i(),objectFitImages(),init=function(){a();var e=$(location).attr("href");$("#homepage-flag").length>0&&(s(),n()),e.indexOf("culture")>=0&&s(),e.indexOf("contact")>=0&&$(".typed").typed({stringsElement:$(".typed-strings"),typeSpeed:10,backDelay:2e3,loop:!0}),e.indexOf("work")>=0&&($("#container").mixItUp({animation:{duration:1e3,effects:"fade translateY(10%)",easing:"cubic-bezier(0.645, 0.045, 0.355, 1)",nudge:!1,animateResizeContainer:!1}}),t())},ajaxLoad=function(e){window.scrollTo(0,0),$("a").off("click.myDisable"),init()},init();var o=function(e){$("#content").velocity("fadeOut",{visibility:"visible",display:"block",complete:function(){$("#content").load(e+" #content")}})};$(document).on("click","a",function(e){var t=$(this),i=t.attr("href"),n=t.text();if(loading=!0,i.indexOf(document.domain)>-1||i.indexOf(":")===-1)return history.pushState({url:i+"/",title:n},n,i),$("#container").mixItUp("destroy"),$("a").on("click.myDisable",function(){return!1}),o(i),"/"===i?document.title="Insight Creative, Inc.":document.title=n+" - Insight Creative, Inc.",!1}),$(document).ajaxComplete(function(){console.log("Ajax Loaded"),$("#content").velocity("reverse"),ajaxLoad();var t=$(location).attr("href");t.indexOf("contact")>=0&&$(".typed").typed({stringsElement:$(".typed-strings"),typeSpeed:10,backDelay:2e3,loop:!0}),t.indexOf("work")>=0&&$("#container").mixItUp({animation:{duration:1e3,effects:"fade translateY(10%)",easing:"cubic-bezier(0.645, 0.045, 0.355, 1)",nudge:!1,animateResizeContainer:!1}}),navigator.userAgent.indexOf("Safari")!=-1&&navigator.userAgent.indexOf("Chrome")==-1?e():navigator.userAgent.indexOf("iPad")!=-1&&navigator.userAgent.indexOf("Chrome")==-1&&e()}),$(window).on("popstate",function(e){var t=e.originalEvent.state;null!==t?($("#container").mixItUp("destroy"),document.title=t.title+" - Insight Creative, Inc.",o(t.url)):(document.title=title,$("#content").empty())})});