## 流光按钮
### 为什么元素height:100%不起作用？
浏览器不计算内容的高度，除非内容超出了视窗范围(导致滚动条出现)。或者你给整个页面设置一个绝对高度。否则，浏览器就会简单的让内容往下堆砌，页面的高度根本就无需考虑。  
当你让一个元素的高度设定为百分比高度时，无法根据获取父元素的高度，也就无法计算自己的高度。换句话说，父元素的高度只是一个缺省值：height: auto;。当你要求浏览器根据这样一个缺省值来计算百分比高度时，只能得到undefined的结果。也就是一个null值，浏览器不会对这个值有任何的反应。  

### 如何让元素自适应，充满整个屏幕？
- 将父级添加height:100%
  - >父级元素 - body,html{height: 100%;}
- 将元素绝对定位
  - >position: absolute;left: 0;top: 0;  
    height: 100%;

### 实现元素居中方法

1. 绝对`定位`法
```css
position: absolute;
top:50%;left:50%;
transform: translate(-50%,-50%);
```
利用绝对定位使元素top:50%; left:50%;时，是以左上角为原点定位，所以实现的是左上角为原点居中，因为元素自身有一定的高度和宽度，所以元素本身并不居中。  
transform：translate(-50%，-50%):向上（X轴）向左（Y轴）移动自身长宽的50%，使元素位于中心。

2. flex`布局`
```css
display: flex;
justify-content: center; // 水平居中
align-items: center; // 垂直居中
```
3. margin + 行高
```css
line-height: xx px; //和父元素高度一致即可垂直居中
text-align: center;
```

### js
```html
<a href="javascript:;"></a>
```
点击后是不会跳转的，一般用于开发时页面还未完成