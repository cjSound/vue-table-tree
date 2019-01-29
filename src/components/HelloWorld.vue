<template>
	<div class="hello">
		<h1 @click="test">{{ msg }}</h1>
		<table-tree :data-list="dataList"   :name="'displayName'" :expanded="'isExpanded'"
			:left='10' :page="5" @pagechange="pageChange"
			   title="值" class="table">
			<div slot="类型"  slot-scope="{item}">{{item.displayType}}</div>
			<div slot="值" slot-scope="{item}">{{item.value}}</div>
			<div slot="操作" slot-scope="{item,keys}">
				<span @click="test(item,keys)">新增</span>
				<span @click="test(item,keys)">删除</span>
			</div>
		</table-tree>
	</div>
</template>

<script>
import { data ,data2} from './data.js'
import tableTree from './table-tree'

export default {
	name: 'HelloWorld',
	components: { tableTree },
	props: {
		msg: String,
	},
	data() {
		return {
      		dataList: data,
			// bigdata :data2,
			widths:[40,20,20,20]
		}
	},
	methods: {
		pageChange(keys){
			console.log('分页改变了',keys)
		},
		test(item,keys) {
			this.$set(this.dataList[0].children[0].children[0].children[2].children[0].children[0],'children',data2);
		}
  },
  mounted(){
    // var start =new Date().getTime();
    // var j=0;
    // var end ;
    // for(var i =0;i<data2.length;i++){
    //   j+=i;
    //   for(var j=0;j<40;j++){
    //     end =new Date().getTime();
    //   }
    // }
    // console.log(end -start,start,end)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
h3 {
	margin: 40px 0 0;
}
.table {
	width: 888px;
	margin: 0 auto;
}
</style>
