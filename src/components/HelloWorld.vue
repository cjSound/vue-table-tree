<template>
	<div class="hello">
		<h1 @click="test">{{ msg }}</h1>
		<table-tree v-if="bigdata.length>0" :data-list="bigdata"   :name="'displayName'" 
			:expanded="'isExpanded'"
			:childrenNum="'childrenNum'"
			:closed="'closed'"
			:left='10' :page="pageNum" @pagechange="pageChange"
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
			pageNum:10,
			widths:[40,20,20,20],
			saveList:''
		}
	},
	methods: {
		pageChange(info){
			console.log('分页改变了',info);
			var key =info.keys.join('-');
			console.log(this.saveList,key)
			var list =this.saveList[key].slice((info.pageIndex-1)*this.pageNum,info.pageIndex*this.pageNum);
			var item =this.getinfo(info.keys,this.bigdata);
			this.$set(item,'children',list);	
			
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
		},
		keyset(arr,keys,values){
			for(var i in values){
				if(values[i].children!=null  &&values[i].children.length>0){
					if(values[i].children.length>this.pageNum){
						var num =0,nowList=values[i].children;
						arr.push({key:keys.concat(i),value:values[i].children});
						values[i].children=nowList.slice(0,this.pageNum);
					}else{
						var k =keys.concat(i);
						this.keyset(arr,k,values[i].children);
					}
				}
			}
		},
		getinfo(key,item){
			var keys =[].concat(key);
			var index =keys.splice(0,1)[0];
			if(keys.length>0){
				return this.getinfo(keys,item[index].children);
			}else{
				return  item[index];
			}
		},
		keySetChild(arr){
			
			var index =0;
			var inttime =setInterval(()=>{
				console.log(index,arr.length)
				if(index>=arr.length){
					clearInterval(inttime);
				}else{
					console.log(index,arr[index].key,new Date().getTime())
					var item =getinfo(arr[index].key,this.bigdata);
					if(item.children==null  || item.children.length==0){
						this.$set(item,'children',arr[index].value);	
					}else{
						item.children.push(arr[index].value);
					}
					console.log(index,arr[index].value,item,new Date().getTime());
					index++;
				}
			},2000);
		}
  },
  mounted(){
	  
	  var arr =[];
	  this.keyset(arr,[],bigdata);
	  
		this.bigdata=bigdata;
		var map ={};
		for(var i =0;i<arr.length;i++){
			map[arr[i].key.join('-')]=arr[i].value;
		}
		this.saveList =map;
		console.log(this.saveList ,this.bigdata)


	
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
