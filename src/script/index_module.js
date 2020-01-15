//面向对象实现实现banner中的轮播
class Lunbo {
    constructor() {
        this.piclist = $('.piclist');//大盒子
        this.pics = $('.piclist li'); //2张图片
        this.btns = $('.btnlist li'); //2个小按钮
        this.left = $('#left');//左键
        this.right = $('#right'); //右键    
        this.num = 0; //存储索引。
        this.timer = null;//存储定时器
        this.piclilength = this.pics.size();
    }

    init() {
        let _this = this;
        this.btns.on('mousemove', function () {//点按钮
            _this.num = $(this).index();
            _this.tabswitch();
        });
        this.right.on('click', function () {//点右键
            _this.num++;
            if (_this.num > _this.piclilength - 1) {
                _this.num = 0;
            }
            _this.tabswitch();
        });
        this.left.on('click', () => {//点左键
            this.num--;
            if (this.num < 0) {
                this.num = this.piclilength - 1;
            }
            this.tabswitch();
        });

        this.timer = setInterval(function () {//间隔定时器，每3s切换一次
            this.right.click();
        }, 3000);

        this.piclist.hover(() => {
            clearInterval(this.timer);
        }, () => {
            this.timer = setInterval(function () {
                clearInterval(this.timer);
                this.right.click();
            }, 3000);
        });

    }
    tabswitch() {//封装tabswitch功能
        this.btns.eq(this.num).addClass('active').siblings(this.btns).removeClass('active');
        this.pics.eq(this.num).addClass('show').siblings(this.btns).removeClass('show');

    }

}
// 渲染首页一部分页面
class render {
    constructor() {
        this.swipercontainer = $('.swiper-container');
    }
    init() {
        $.ajax({
            url: 'http://10.31.152.17/JS1912/lilyxiaoyuan/php/yougou.php',
            dataType: 'json'
        }).done((data) => {
          
            let $strhtml = '<div class="swiper-container"> ';
            $.each(data, function (index, value) {
                $strhtml += `
                <div class="swiper-sub-item">
                <div class="goods-img">
                   <a href="details.html?sid=${value.sid}" title="休闲 满帮鞋" class="">
                       <img src="${value.picurl1}" alt="休闲 满帮鞋">
                   </a>
                </div>
                <img src="${value.picurl2}" alt="百丽" class="logoimg">
                <p>
                    <a href="details.html?sid=${value.sid}" >
                    ${value.title}
                    </a>
                </p>
                <div class="price-wrap">
                  ￥<span>${value.price}</span>
                </div>
            </div>
                `;
            });
            $strhtml += ' </div>';
            this.swipercontainer.html($strhtml);
        });
    }

}

//定义模块
define([], function () {
    return {
        init: function () {

            new Lunbo().init();
            new render().init();
        }
    }
});