/**
 * zPop 1.0.0
 * Copyright 2017-07-07 @quefangfang(阙方方)
 * mail: 347522986@qq.com
 * rely: none
 */

(function () {

  'use strict';
  var instance = null;
  var	zTip = function(params) {
    if (!(this instanceof zTip)) return new zTip(params);
    var defaults = {
      msg:'提示信息',
      type:'success',
      time:1000
    };
    params = params || {};

    for (var def in defaults) {
      if (typeof params[def] === 'undefined') {
        params[def] = defaults[def];
      }
    }
    var z = this;
    z.params = params;
    z.elementDom = document.createElement("div");
    z.elementDom.className = "modal-custom-box";
    z.elementDom.innerHTML = '<span class="modal-custom-text '+z.params.type+'">'+z.params.msg+'</span>';
    if(!instance){
      document.body.appendChild(z.elementDom);
      instance = true;
      setTimeout(function(){
        document.body.removeChild(z.elementDom);
        instance = false;
      },z.params.time);
    }
  };
  window.zTip = zTip;
})();

/*===========================
 zPop AMD Export
 ===========================*/
if (typeof(module) !== 'undefined')
{
  module.exports = window.zTip;
}
else if (typeof define === 'function' && define.amd) {
  define([], function() {
    'use strict';
    return window.zTip;
  });
}
