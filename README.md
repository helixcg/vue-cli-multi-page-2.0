
这一次我们基于`vuejs2+webpack2+vuxui2`

 1. 全局统一使用的模块`Lib.js`库
 2. 支持字体图标
 3. 构建时，增加对css打包的支持
 4. 提取公共模块
 5. 多页面可使用vue-router2路由
 6. 可自定义页面模块名，例如 http:// localhost:8091/`views`/home/list.html，`views`就是我们线上的模块名，1.0版只能固定的
 7. 支持二级目录，便于归类，1.0版本暂时仅支持一级目录
 8. 模块下静态文件可直接调用
 9. 发送ajax请求，使用`axios`库，简单封装了一个库，为了减少学习成本，封装参数基本与`JQ ajax`一致，如果不需要可直接删除
 10. 整合了vue最流行的UI框架，`vuxui2.x`
 11. 基于`webpack2`
 13. 支持`Less`css预处理
 14. 获取多页面的url参数的方法
 15. 全局注册vue全局过滤器的方法

本地默认访问端口为8091，需要更改的童鞋请到项目目录文件`config/index.js`修改。


## 目录结构
```
webpack
 |---build
 |---src
     |---assets    #资源
     |---css/common.css  #css
     |---font/    #字体图标
     |---js/common.js    #自己定义的全局通用事件
     |---js/conf.js    #项目的配置
     |---js/Lib.js    #暴露接口给组件调用
     |---js/vueFilter.js    #注册vue的全局过滤器
 |---components 组件
     |---Button.vue  按钮组件
     |---hb-head.vue  head组件
|---views    #各个页面模块，模块名可以自定义哦！
     |---home    #一级目录
        |---list    #二级目录
             |---list.html
             |---list.js
             |---listApp.vue
     |---vuxDemo    #一级目录
        |---button    #二级目录
             |---button.html
             |---button.js
             |---buttonApp.vue
        |---calendar    #二级目录
             |---calendar.html
             |---calendar.js
             |---calendarApp.vue
......

  ```
此次2.0版本也优化也可以自定义模块的名称

例如 http:// localhost:8091/`views`/home/list.html，`views`就是我们线上的模块名，如需修改请到项目目录文件config/index.js修改`moduleName`参数，修改这里的配置的同时，也要同时重命名`/src/views`的这个文件夹名称，是否会报错的。

  从目录结构上，各种组件、页面模块、资源等都按类新建了文件夹，方便我们储存文件。其实我们所有的文件，最主要都是放在`views`文件夹里，以文件夹名为html的名称。
例如

``` stylus
|---vuxDemo    一级目录
 |---button    二级目录
   |---button.html
   |---button.js
   |---buttonApp.vue
```

```

在`view`里二级文件夹，一个文件夹就是一个html，`js``vue``html` 都统一放在当前文件夹里，当然你也可以继续放其他的资源，例如css、图片等，webpack会打包到当前模块里。

还有一点要注意的，所有的目录都要求为二级，不能一个目录下为一级，另一个目录下有二级。

## Lib.js库使用


```
import Lib from 'assets/js/Lib';
```

```
在`Lib.js`的`M`、`C`都是事件调用简写。例如我们现在想调用APP的名称，在`.vue`里可以这么写

``` bash
import Lib from 'assets/js/Lib';
Lib.C.appname;  #蓝橙绿
```
只需要在`*.vue`里导入`import Lib from 'assets/js/Lib';'`，就可以使用全局模块了。
当然你还可以在Lib做一些程序判断，例如权限判断等。

## 公共模块
我们通常会把常用的库都打包成公共模块，`CommonsChunkPlugin` 插件，是一个可选的用于建立一个独立文件(又称作 chunk)的功能，这个文件包括多个入口 chunk 的公共模块。最终合成的文件能够在最开始的时候加载一次，便存起来到缓存中供后续使用。这个带来速度上的提升，因为浏览器会迅速将公共的代码从缓存中取出来，而不是每次访问一个新页面时，再去加载一个更大的文件。

不同的项目，使用到的插件库数量有所不同，我们可以调整`minChunks`以达到公共模块的大小，文件路径为`/build/webpack.prod.conf.js`，cart+F查找`minChunks`参数，`minChunks: 4` 意思代表为至少被4个页面引用了，就打包进入公共模块，具体的使用方法，可以再详细了解`webpack`中文文档。http://www.css88.com/doc/webpack2/plugins/commons-chunk-plugin/

## 存在问题
1、多页面可以使用vue-router路由，但是无法使用按需加载，即懒加载，研究过在多页面的路由里按需加载，

