// 1. 定义数据
var data = [
    {img: 1, h2: 'Creative', h3: 'DUET'},
    {img: 2, h2: 'Friendly', h3: 'DEVIL'},
    {img: 3, h2: 'Tranquilent', h3: 'COMPATRIOT'},
    {img: 4, h2: 'Insecure', h3: 'HUSSLER'},
    {img: 5, h2: 'Loving', h3: 'REBEL'},
    {img: 6, h2: 'Passionate', h3: 'SEEKER'},
    {img: 7, h2: 'Crazy', h3: 'FRIEND'}
];

// 2. 通用函数定义
var g = function (id) {
    if (id.substr(0, 1) == '.') {
        return document.getElementsByClassName(id.substr(1));
    }
    return document.getElementById(id);
};

// 3. 添加幻灯片操作（所有幻灯片及相应的按钮）
function addSliders() {
    // 3.1 获取模板
    // 3.1.1 清楚模板字符串前后的空格
    var tpl_main = g('template_main').innerHTML.replace(/^\s*/, '').replace(/\s*$/, '');
    var tpl_ctrl = g('template_ctrl').innerHTML.replace(/^\s*/, '').replace(/\s*$/, '');

    // 3.2 定义最终输出HTML的变量
    var out_main = [];
    var out_ctrl = [];

    // 3.3 遍历所有数据，构建最终输出的HTML
    for (var i in data) {
        var _html_main = tpl_main.replace(/{{index}}/g, data[i].img)
            .replace(/{{h2}}/g, data[i].h2)
            .replace(/{{h3}}/g, data[i].h3)
            .replace(/{{css}}/g, ['', 'main-i_right'][i % 2]);
        var _html_ctrl = tpl_ctrl.replace(/{{index}}/g, data[i].img);

        out_main.push(_html_main);
        out_ctrl.push(_html_ctrl);
    }

    // 3.4 将HTML写到对应的DOM里面
    g('template_main').innerHTML = out_main.join('');
    g('template_ctrl').innerHTML = out_ctrl.join('');

    // 7. 增加main_background
    g('template_main').innerHTML += tpl_main.replace(/{{index}}/g, '{{index}}')
        .replace(/{{h2}}/g, data[i].h2)
        .replace(/{{h3}}/g, data[i].h3);
    g('main_{{index}}').id = 'main_background';
}
// 5. 幻灯片切换
function switchSlider(n) {
    // 5.1 获得要展现的幻灯片的DOM元素及其对应的按钮的DOM元素
    var main = g('main_' + n);
    var ctrl = g('ctrl_' + n);

    // 5.2 获得所有的幻灯片及其按钮
    var clear_main = g('.main-i');
    var clear_ctrl = g('.ctrl-i');

    // 5.3 清楚所有幻灯片和按钮的active样式
    for (var j = 0; j < clear_ctrl.length; j++) {
        clear_main[j].className = clear_main[j].className.replace(' main-i_active', '');
        clear_ctrl[j].className = clear_ctrl[j].className.replace(' ctrl-i_active', '');
    }

    // 5.4 为当前控制按钮或幻灯片添加active样式
    main.className += ' main-i_active';
    ctrl.className += ' ctrl-i_active';

    // 7.2 切换时，复制上一张幻灯片到main_background中
    setTimeout(function () {
        g('main_background').innerHTML = main.innerHTML;
    }, 1000);
}

// 6. 动态调整图片的margin-top以使其垂直居中
function movePictures() {
    var pictures = g('.picture');
    for (var i = 0; i < pictures.length; i++) {
        pictures[i].style.marginTop = -1 * pictures[i].clientHeight / 2 + 'px';
    }
}


// 4. 定义什么时候处理幻灯片输出
window.onload = function () {
    addSliders();
    // 初始化
    switchSlider(1);
    setTimeout(movePictures, 100);
};











