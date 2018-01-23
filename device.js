//页面节点插入设备类型标识设置设备类型
;(function(win) {
    var doc = win.document;
    var docEl = doc.documentElement;
    var ua = navigator.userAgent;

    var _getClientType = function(){
        if(/mobile/gi.test(ua))
            return 'mobile'
        return 'pc'
    }

    var _getCilentOS = function () {
        if(/ipad|iphone|mac/gi.test(ua))
            return 'ios'
        if( /android/gi.test(ua))
            return 'android'
        return 'windows'
    }

    docEl.setAttribute('data-client', _getClientType());
    docEl.setAttribute('data-os', _getCilentOS());
})(window);