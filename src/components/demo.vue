<template>
	<div class="hello">
		<h1 @click="test1">{{ msg }}</h1>
		<table-tree :data-list="dataList"   :name="'displayName'" :expanded="'isExpanded'"
			:left='10' :page="15"
			:parent-key="'pid'"  title="值" class="table">
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
import {tableTree} from './../../dist/vue-lazy-table-tree.common'
// import tableTree from 'vue-lazy-table-tree'
export default {
	name: 'HelloWorld',
	components: { tableTree },
	props: {
		msg: String,
	},
	data() {
		return {
      		dataList: bigdata,
			// bigdata :data2,
			widths:[40,20,20,20]
		}
	},
	methods: {
		test1(){
			var list =[{ "bitWidth": -1, "childrenNum": 0, "displayName": "U_read", "displayType": "int ", "id": "1.0.0.2.0.0.0", "isActiveUnionMember": false, "isDataNode": true, "isEnumConstant": true, "isEnumNode": false, "isExpanded": false, "isPointer": false, "isPointerChildren": false, "isUnionMember": false, "pid": "1.0.0.2.0.0", "realName": "U_read", "realType": "int", "value": "17", "valueEditable": true },
                        { "bitWidth": -1, "childrenNum": 0, "displayName": "U_write", "displayType": "int ", "id": "1.0.0.2.0.0.1", "isActiveUnionMember": false, "isDataNode": true, "isEnumConstant": true, "isEnumNode": false, "isExpanded": false, "isPointer": false, "isPointerChildren": false, "isUnionMember": false, "pid": "1.0.0.2.0.0", "realName": "U_write", "realType": "int", "value": "34", "valueEditable": true },
                        { "bitWidth": -1, "childrenNum": 0, "displayName": "U_verify", "displayType": "int ", "id": "1.0.0.2.0.0.2", "isActiveUnionMember": false, "isDataNode": true, "isEnumConstant": true, "isEnumNode": false, "isExpanded": false, "isPointer": false, "isPointerChildren": false, "isUnionMember": false, "pid": "1.0.0.2.0.0", "realName": "U_verify", "realType": "int", "value": "51", "valueEditable": true },
                        { "bitWidth": -1, "childrenNum": 0, "displayName": "U_read", "displayType": "int ", "id": "1.0.0.2.0.0.0", "isActiveUnionMember": false, "isDataNode": true, "isEnumConstant": true, "isEnumNode": false, "isExpanded": false, "isPointer": false, "isPointerChildren": false, "isUnionMember": false, "pid": "1.0.0.2.0.0", "realName": "U_read", "realType": "int", "value": "17", "valueEditable": true },
                        { "bitWidth": -1, "childrenNum": 0, "displayName": "U_write", "displayType": "int ", "id": "1.0.0.2.0.0.1", "isActiveUnionMember": false, "isDataNode": true, "isEnumConstant": true, "isEnumNode": false, "isExpanded": false, "isPointer": false, "isPointerChildren": false, "isUnionMember": false, "pid": "1.0.0.2.0.0", "realName": "U_write", "realType": "int", "value": "34", "valueEditable": true },
                        { "bitWidth": -1, "childrenNum": 0, "displayName": "U_verify", "displayType": "int ", "id": "1.0.0.2.0.0.2", "isActiveUnionMember": false, "isDataNode": true, "isEnumConstant": true, "isEnumNode": false, "isExpanded": false, "isPointer": false, "isPointerChildren": false, "isUnionMember": false, "pid": "1.0.0.2.0.0", "realName": "U_verify", "realType": "int", "value": "51", "valueEditable": true },
                        { "bitWidth": -1, "childrenNum": 0, "displayName": "U_read", "displayType": "int ", "id": "1.0.0.2.0.0.0", "isActiveUnionMember": false, "isDataNode": true, "isEnumConstant": true, "isEnumNode": false, "isExpanded": false, "isPointer": false, "isPointerChildren": false, "isUnionMember": false, "pid": "1.0.0.2.0.0", "realName": "U_read", "realType": "int", "value": "17", "valueEditable": true },
                        { "bitWidth": -1, "childrenNum": 0, "displayName": "U_write", "displayType": "int ", "id": "1.0.0.2.0.0.1", "isActiveUnionMember": false, "isDataNode": true, "isEnumConstant": true, "isEnumNode": false, "isExpanded": false, "isPointer": false, "isPointerChildren": false, "isUnionMember": false, "pid": "1.0.0.2.0.0", "realName": "U_write", "realType": "int", "value": "34", "valueEditable": true },
                        { "bitWidth": -1, "childrenNum": 0, "displayName": "U_verify", "displayType": "int ", "id": "1.0.0.2.0.0.2", "isActiveUnionMember": false, "isDataNode": true, "isEnumConstant": true, "isEnumNode": false, "isExpanded": false, "isPointer": false, "isPointerChildren": false, "isUnionMember": false, "pid": "1.0.0.2.0.0", "realName": "U_verify", "realType": "int", "value": "51", "valueEditable": true },
                        { "bitWidth": -1, "childrenNum": 0, "displayName": "U_read", "displayType": "int ", "id": "1.0.0.2.0.0.0", "isActiveUnionMember": false, "isDataNode": true, "isEnumConstant": true, "isEnumNode": false, "isExpanded": false, "isPointer": false, "isPointerChildren": false, "isUnionMember": false, "pid": "1.0.0.2.0.0", "realName": "U_read", "realType": "int", "value": "17", "valueEditable": true },
                        { "bitWidth": -1, "childrenNum": 0, "displayName": "U_read", "displayType": "int ", "id": "1.0.0.2.0.0.0", "isActiveUnionMember": false, "isDataNode": true, "isEnumConstant": true, "isEnumNode": false, "isExpanded": false, "isPointer": false, "isPointerChildren": false, "isUnionMember": false, "pid": "1.0.0.2.0.0", "realName": "U_read", "realType": "int", "value": "17", "valueEditable": true },
					]
					// this.dataList[0].children[0].children[0].children[2].children[0].children[0].children =list;
                    this.$set(this.dataList[0].children[0].children[0].children[2].children[0].children[0],'children',list);
		},
		test(item,keys) {
			alert(keys)
		}
  },
  mounted(){
  }
}
</script>

<style >
h3 {
	margin: 40px 0 0;
}
.table {
	width: 888px;
	margin: 0 auto;
}
</style>
