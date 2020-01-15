
require.config({
    baseUrl: 'https://cdnjs.cloudflare.com/ajax/libs/', //设置模块的公共路径----cdn加载jquery
    paths: {
        'jquery': 'jquery/1.12.4/jquery.min',
        'jquerycookie': 'jquery-cookie/1.4.1/jquery.cookie.min',
        'jquerylazyload': 'jquery.lazyload/1.9.1/jquery.lazyload.min'
    }
});

require(['jquery', 'jquerycookie'], function () {
    // $.cookie('username', 'wangwu', {
    //     expires: 7
    // });
    // $.cookie('username', '', {
    //     expires: -1
    // });
    let targetpage = $('#currentpage').attr('target-page'); //script/index_module.js在html文件中去找
    if (targetpage) {
        require([targetpage], function (targetpage) {
            targetpage.init();
        });
    }
})