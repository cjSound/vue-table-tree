<template>
	<div class="hello">
		<h1 @click="test">{{ msg }}</h1>
		<table-tree v-if="bigdata.length>0" :data-list="bigdata"   :name="'displayName'" :expanded="'isExpanded'"
			:closed="'closed'"
			:left='10' :page="10" @pagechange="pageChange"
			   title="值" class="table">
			<div slot="类型"  slot-scope="{item}">{{item.displayType}}</div>
			<div slot="值" slot-scope="{item}">{{item.value}}</div>
			<div slot="操作" slot-scope="{item,keys,closed}">
				<span @click="test(item,keys,closed)">新增</span>
				<span @click="test1(item,keys,closed)">删除</span>
			</div>
		</table-tree>
	</div>
</template>

<script>
import { data ,data2,data3} from './data.js'
import tableTree from './table-tree'

export default {
	name: 'HelloWorld',
	components: { tableTree },
	props: {
		msg: String,
	},
	data() {
		return {
      		// dataList: data,
			bigdata :[],
			widths:[40,20,20,20]
		}
	},
	methods: {
		pageChange(keys){
			console.log('分页改变了',keys)
		},
		transData(a, idStr, pidStr, chindrenStr){
			var r = [], hash = {}, id = idStr, pid = pidStr, children = chindrenStr, i = 0, j = 0, len = (a==undefined ? 0 :a.length);
			for(; i < len; i++){
				a[i].children = [];
				hash[a[i][id]] = a[i];
			}
			for(; j < len; j++){
				var aVal = a[j], hashVP = hash[aVal[pid]];
				if(hashVP&&aVal){
					!hashVP[children] && (hashVP[children] = []);
					hashVP[children].push(aVal);
				}else{
					r.push(aVal);
				}
			}
			return r;
		},
		test(item,keys,closed) {
			this.$set(this.dataList[0].children[0].children[0].children[2].children[0].children[0].children[1],'children',data2);
			// this.$set(this.dataList[0].children[0].children[0].children[0],'children',data2);
			// var item =this.dataList[0].children[0].children[1];
			// this.$set(this.dataList[0].children[0].children[1].children[0].children[0],'children',[data3]);
			console.log(item,keys);
			closed.closed =true;
			// this.$set(item,'children',item.children.concat(data2))
			// this.$set(this.dataList[0].children[0].children[1],'displayType','fadfs')
			// this.$set(this.dataList[0].children[0].children[1],'children',[])
			// console.log(this.dataList)
		},
		test1(item,keys,closed){
			closed.closed =false;
		}
  },
  mounted(){
	  console.log(bigdata)
	  this.bigdata =bigdata
	  console.log(this.bigdata)
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
