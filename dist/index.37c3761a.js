var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},t={},u=n.parcelRequireca33;null==u&&((u=function(n){if(n in e)return e[n].exports;if(n in t){var u=t[n];delete t[n];var r={id:n,exports:{}};return e[n]=r,u.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+n+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(n,e){t[n]=e},n.parcelRequireca33=u),u.register("2GQSR",(function(n,e){var t;t=function(n){n.easing.jswing=n.easing.swing;var e=Math.pow,t=Math.sqrt,u=Math.sin,r=Math.cos,i=Math.PI,a=1.70158,o=1.525*a,c=a+1,f=2*i/3,s=2*i/4.5;function d(n){var e=7.5625,t=2.75;return n<1/t?e*n*n:n<2/t?e*(n-=1.5/t)*n+.75:n<2.5/t?e*(n-=2.25/t)*n+.9375:e*(n-=2.625/t)*n+.984375}n.extend(n.easing,{def:"easeOutQuad",swing:function(e){return n.easing[n.easing.def](e)},easeInQuad:function(n){return n*n},easeOutQuad:function(n){return 1-(1-n)*(1-n)},easeInOutQuad:function(n){return n<.5?2*n*n:1-e(-2*n+2,2)/2},easeInCubic:function(n){return n*n*n},easeOutCubic:function(n){return 1-e(1-n,3)},easeInOutCubic:function(n){return n<.5?4*n*n*n:1-e(-2*n+2,3)/2},easeInQuart:function(n){return n*n*n*n},easeOutQuart:function(n){return 1-e(1-n,4)},easeInOutQuart:function(n){return n<.5?8*n*n*n*n:1-e(-2*n+2,4)/2},easeInQuint:function(n){return n*n*n*n*n},easeOutQuint:function(n){return 1-e(1-n,5)},easeInOutQuint:function(n){return n<.5?16*n*n*n*n*n:1-e(-2*n+2,5)/2},easeInSine:function(n){return 1-r(n*i/2)},easeOutSine:function(n){return u(n*i/2)},easeInOutSine:function(n){return-(r(i*n)-1)/2},easeInExpo:function(n){return 0===n?0:e(2,10*n-10)},easeOutExpo:function(n){return 1===n?1:1-e(2,-10*n)},easeInOutExpo:function(n){return 0===n?0:1===n?1:n<.5?e(2,20*n-10)/2:(2-e(2,-20*n+10))/2},easeInCirc:function(n){return 1-t(1-e(n,2))},easeOutCirc:function(n){return t(1-e(n-1,2))},easeInOutCirc:function(n){return n<.5?(1-t(1-e(2*n,2)))/2:(t(1-e(-2*n+2,2))+1)/2},easeInElastic:function(n){return 0===n?0:1===n?1:-e(2,10*n-10)*u((10*n-10.75)*f)},easeOutElastic:function(n){return 0===n?0:1===n?1:e(2,-10*n)*u((10*n-.75)*f)+1},easeInOutElastic:function(n){return 0===n?0:1===n?1:n<.5?-e(2,20*n-10)*u((20*n-11.125)*s)/2:e(2,-20*n+10)*u((20*n-11.125)*s)/2+1},easeInBack:function(n){return c*n*n*n-a*n*n},easeOutBack:function(n){return 1+c*e(n-1,3)+a*e(n-1,2)},easeInOutBack:function(n){return n<.5?e(2*n,2)*(7.189819*n-o)/2:(e(2*n-2,2)*((o+1)*(2*n-2)+o)+2)/2},easeInBounce:function(n){return 1-d(1-n)},easeOutBounce:d,easeInOutBounce:function(n){return n<.5?(1-d(1-2*n))/2:(1+d(2*n-1))/2}})},"function"==typeof define&&define.amd?define(["jquery"],(function(n){return t(n)})):"object"==typeof n.exports?t(u("gXvYu")):t(jQuery)})),u("2GQSR");
//# sourceMappingURL=index.37c3761a.js.map