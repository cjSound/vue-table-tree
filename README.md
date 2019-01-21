# vue-table-tree

## Project setup1
```
<script src="./../dist/vue-table-tree.umd.min.js"></script>
详情见deme/tree.html
 [tree.html](https://cjsound.github.io/vue-table-tree/demo/tree.html).
```
## Project setup2
```

```


```
<table-tree class="table"   :data-list="dataList" :title="'keys'"
    :id="'id'" :name="'displayName'" :parent-key="'pid'" :root-key="''" :expanded="'isExpanded'">
    <div slot="类型" slot-scope="{item}">
        {{item.displayType}}
    </div>
    <div slot="值" slot-scope="{item}">
        {{item.value}}
    </div>
    <div slot="操作" slot-scope="{item}">
        <span @click="test(item)">编辑</span>
        <span @click="test(item)">删除</span>
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

* **rootKey**
    
    * type: `String`
    * default:`''`

    顶级Pid的值    

* **id**
    
    * type: `String`
    * default:`id`

    字段唯一id，对应的字段名

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
