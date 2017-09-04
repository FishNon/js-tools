Star Rating（星级评分）
====================

> 该集合中为【星级评分的实现】，通过面相对象的方法实现了选择星星进行评分；

## 1 实现：
* 简述：在该案例中主要应用了面向对象的方法，将其封装，提高可重用性，同时应用事件冒泡的原理，将评分的`onclick`、`onmouseover`、`onmouseout`事件绑定在所有LI元素的父级UL元素上，从而提高了性能，不用给每个LI元素都绑定三个事件；
* 展示：[点击查看](https://fishnon.github.io/js-tools/star-rating/index.html)