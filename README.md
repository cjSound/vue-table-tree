# vue-lazy-table-tree
<p align="center">
<a  href="https://www.npmjs.com/package/vue-lazy-table-tree" target="_blank"><img src="https://img.shields.io/npm/v/vue-lazy-table-tree.svg"/ ></a> 
<a href="https://vuejs.org/"><img src="https://img.shields.io/badge/vue-2.2.x-brightgreen.svg"/></a>
</p>
<p align="center">
<a  href="https://cjsound.github.io/vue-table-tree/demo/tree.html" target="_blank">演示地址</a> 
</p>


## Getting Started

### Installation

#### npm

    # install with npm    
	npm install vue-lazy-table-tree --save
    
Import the library

```javascript
    import TableTree from 'vue-lazy-table-tree';
```
Add to other Vue components 

 ```javascript
    export default {
        components: {
            TableTree             
        },
    // ... data, methods, mounted (), etc.
    }
    
```  
#### script 

    # 直接通过标签引用 具体可以参考demo/tree.html    
	<script src="./vue-lazy-table-tree.umd.min.js"></script>
    
[tree.html](https://cjsound.github.io/vue-table-tree/demo/tree.html).




```
<table-tree :data-list="dataList"   :name="'displayName'" :expanded="'isExpanded'"
    :left='10' :page="15"
        title="值" class="table">
    <div slot="类型"  slot-scope="{item}">{{item.displayType}}</div>
    <div slot="值" slot-scope="{item}">{{item.value}}</div>
    <div slot="操作" slot-scope="{item,keys}">
        <span @click="test(item,keys)">新增</span>
        <span @click="test(item,keys)">删除</span>
    </div>
</table-tree>
```
* **data-list**
    
    * type: `Array`
    * required: `true`

    对应的所以数据，参考demo.html
* **expanded**
    
    * type: `String`
    * required: `false`

    是否有默认展开配置字段，该字段内存true的时候 展开下级列表
* **parentKey**
    
    * type: `String`
    * default:`pid`

    父节点字段名称
* **name**
    
    * type: `String`
    * default:`name`

    展示的名称

* **left**
    
    * type: `Num`
    * default:`5`

    默认下级的偏移距离    




* **title**
    
    * type: `String`
    * default:`''`

    列表标题，Key这一列的表格名称   
### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```


### Customize configuration
See [demo展示](https://cjsound.github.io/vue-table-tree/demo/).
