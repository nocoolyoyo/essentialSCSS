//页面节点插入设备类型标识设置设备类型
;(function(win) {
    var doc = win.document;
    var docEl = doc.documentElement;

    var ua = navigator.userAgent;
    var isMobile = /mobile/gi.test(ua);
    var isIOS = /ipad|iphone|mac/gi.test(ua);
    var isAndroid  = /android/gi.test(ua);

    var clientType = 'web';

    if(isMobile && isIOS) {
        clientType = 'ios';
    }else  if(isMobile && isAndroid) {
        clientType = 'android';
    }else {
        clientType = 'web';
    }

    docEl.setAttribute('data-client', clientType);

})(window);