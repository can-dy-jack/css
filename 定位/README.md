# css定位
## 基础布局
基础布局通常使用div+css布局。:smile: 
1. 水平居中：
```css
div{
    text-align: center;
}
```
2. 垂直居中有四种方案：
    1. 设置父元素为table样式,并指定确切高度，子元素为table-cell，，vertical-align属性为middle。
    ```css
    .father{
        display: table;
        text-align: center;
        width: 100%;
        height: 200px;
    }
    .son{
        display: table-cell;
        vertical-align: middle;
    }
    ```  
    2. 设置文字的高度与列高一样。
    3. 设置display为box，box-align为center和box-pack为center。
    > 需要考虑兼容问题。  
    ```css
    .father{
        width: 100%;
        height: 200px;
        text-align: center;
        /* google,android,edge... */
        display: -webkit-box;
        -webkit-box-align: center;
        -webkit-box-pack: center;
        /* fixfox */
        display: -moz-box;
        -moz-box-align: center;
        -moz-box-pack: center;
    }
    ```
    4. 设置父元素为相对定位，子元素为绝对定位。
    ```css
    .father{
        position: relative;
        width: 100%;
        height: 200px;
    }
    .son{
        position: absolute;
        top: 50%;left: 50%;
        transform: translate(-50%,-50%);
    }
    ```

## flex布局
flexible box 弹性布局，是W3C标准新方案。可快速搭建响应式布局，flex已成为主流布局方案。  
```css
div{
    dispaly: flex;
}
```
父元素设置为flex，成为flex容器。其下子元素成为容器成员。  
flex布局基本依靠容器和轴（主轴，交叉轴）。
### 容器属性
1. flex-direction。设置容器主轴方向,有四个属性：
    - row - 从下到上
    - row-reverse - 从下到上
    - column - 从左到右
    - column-reverse - 从右到左
2. flex-wrap，决定容器成员排列方式。
   1. nowrap - 不换行，默认
   2. wrap - 换行，第一行在上方
   3. wrap-reverse - 换行，第一行在下方
3. flex-flow，是上面两个属性的缩写。
    语法：
    ```css
    div{
        flex-flow: <flex-direction> || <flex-wrap>
    }
    ```
4. justify-content,决定容器成员在容器主轴上的对齐方式，共有五个属性值。
   1. flex-start - 居左对齐，默认
   2. flex-end - 居右对齐
   3. **center - 居中对齐**
   4. space-between - 居两侧对齐
   5. space-around - 居两侧对齐，相较于两侧有距离，且距离为容器成员间间隔的一半。
5. align-items，决定容器成员在容器交叉轴（属性1设置了主轴，与主轴垂直的轴）上的对齐方式，有5个属性。
   1. flex-start - 居交叉轴起始点对齐
   2. flex-end - 居交叉轴结束点对齐
   3. **center - 居交叉轴中部点对齐**
   4. baseline - 以首行文字的基线对齐
   5. stretch - 拉伸至于容器高度一致，默认
6. align-content，决定容器在**多根轴线**上的对齐方式。
   1. flex-start - 居交叉轴起始点对齐
   2. flex-end - 居交叉轴结束点对齐
   3. **center - 居交叉轴中部点对齐**
   4. stretch - 轴线占满整个交叉轴，默认 
   5. space-between - 居交叉轴两端对齐
   6. space-around - 居交叉轴两端对齐，相较于两侧有距离，且距离为容器成员间间隔的一半。

### 容器成员的属性
1. order属性，决定容器成员的排列顺序，值小的排在前面，值为integer型。
2. flex-grow属性，决定项目的放大比例。
3. flex-shrink属性，决定项目的缩小比例。
4. flex-basis属性，决定容器成员的基准大小。
5. flex属性，是2，3，4三个属性的缩写。
6. align-self属性，决定单个容器成员的对齐方式。该属性会覆盖父元素的align-items属性，且属性值与align-items一致。

> note:  
> 使用Flex布局后，float、clear和vertical-align属性会失效。

## Grid布局
又称网格布局，，将页面划分为网格，设置行和列。有单元格和网格线。  
更详细的介绍，参考:link:[阮一峰的博客](http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)。
1. 基本实现  
```css
div{
    diplay: grid;
    /* diplay: inline-grid; 行内grid布局 */
    /* 
    指定 行高、列宽  单位为 px 或 %
    3x3(三个100px*100px单元格): 
    repeat()函数可简化重复的数。
    */
    grid-template-rows: 100px 100px 100px;
    grid-template-rows: 100px 100px 100px;
}
```
2. auto-fill关键字，用于自动填充单元格。
3. fr关键词，调节比例关系。


