function Scale() {
    this.scale = document.querySelector('.scale'); //大盒子
    this.spic = document.querySelector('.spic'); //小图
    this.sf = document.querySelector('.sf'); //小放
    this.bf = document.querySelector('.bf'); //大放
    this.bpic = document.querySelector('.bpic'); //大图
}

Scale.prototype.init = function () {
    //1.鼠标经过小图，显示小放和大放
    this.scale.onmouseover = () => {
        this.sf.style.visibility = 'visible';
        this.bf.style.visibility = 'visible';


        //2.求小放的尺寸和比例
        this.sf.style.width = this.spic.offsetWidth * this.bf.offsetWidth / this.bpic.offsetWidth +
            'px';
        this.sf.style.height = this.spic.offsetHeight * this.bf.offsetHeight / this.bpic.offsetHeight +
            'px';

        //比例
        this.bili = this.bpic.offsetWidth / this.spic.offsetWidth;

        //3.小图添加鼠标移动事件
        this.spic.onmousemove = (ev) => {
            var ev = ev || window.event;
            let l = ev.clientX - this.scale.offsetLeft - this.sf.offsetWidth / 2;
            let t = ev.clientY - this.scale.offsetTop - this.sf.offsetHeight / 2;
            if (l < 0) {
                l = 0
            } else if (l >= this.spic.offsetWidth - this.sf.offsetWidth) {
                l = this.spic.offsetWidth - this.sf.offsetWidth - 2;
            }


            if (t < 0) {
                t = 0
            } else if (t >= this.spic.offsetHeight - this.sf.offsetHeight) {
                t = this.spic.offsetHeight - this.sf.offsetHeight - 2;
            }


            this.sf.style.left = l + 'px';
            this.sf.style.top = t + 'px';
            this.bpic.style.left = -l * this.bili + 'px';
            this.bpic.style.top = -t * this.bili + 'px';
        }
    };

    this.scale.onmouseout = () => {
        this.sf.style.visibility = 'hidden';
        this.bf.style.visibility = 'hidden';
    };
}


define([], function () {
    return {
        init: function () {
            new Scale().init();
        }
    }
});