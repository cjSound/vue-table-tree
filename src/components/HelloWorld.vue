<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
     <tableTree class="table"   :dataList="dataList" :title="'keys'"
      :id="'id'" :name="'displayName'" :parentKey="'pid'" :rootKey="''" :expanded="'isExpanded'">
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
     </tableTree>
  </div>
</template>

<script>
import {data} from './data.js'
import tableTree from './table-tree'

export default {
  name: 'HelloWorld',
  components:{tableTree},
  props: {
    msg: String,
  },
  data(){
    return{
      dataList:data
    }
  },
  methods:{
    test(item){
      alert(item.displayName)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
h3 {
  margin: 40px 0 0;
}
.table{
  width: 888px;
  margin: 0 auto;
}
</style>
