<template>
    <div class="table-tree">
        <table cellspacing="0" cellpadding="0" border="0">
            <thead class="table-tree-header">
                <tr>
                    <th>{{title}}</th>
                    <th v-for="(item,index) in $scopedSlots" :key="index"> {{index}}</th>
                </tr>
            </thead>
            <table-body :pid="rootKey" :slotMap ="$scopedSlots"  :dataList="dataList" 
                :id="id" :name="name" :parentKey="parentKey">
            </table-body>
        </table>
    </div>
</template>

<script>

import tableBody from  './table-body'
export default {
    components:{tableBody},
    props:{
        //key展示的标题
        title:{
            type:String,
            default:''
        },
        //唯一id
        id:{
            type:String,
            default:'id'
        },
        //根节点展示的父节点id
        rootKey:{
            type:String,
            default:''
        },
        left:{
            type:Number,
            default:5
        },
        //展示的名称
        name:{
            type:String,
            default:'name'
        },
        //父节点字段名称
        parentKey:{
            type:String,
            default:'pid'
        },
        //是否有默认展开配置 需要则去查找
        expanded:{
            type:String,
            default:''
        },
        dataList:{
            type:Array,
            default:function(){
                return  []
            }
        }
    },
    methods:{

    },
    mounted(){
    }

}
</script>

<style lang="less">
@import "./../assets/iconfont.css";
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  cursor: pointer;
}
.table-tree{
    table{
        width: 100%;
    }
    tr{
        background: #f5f7fa;
    }
    .table-tree-header{
        color: #909399;
        font-weight: 500;
        th{
            white-space: nowrap;
            overflow: hidden;
            user-select: none;
            padding: 12px 0;
            min-width: 0;
            box-sizing: border-box;
            text-overflow: ellipsis;
            vertical-align: middle;
            position: relative;
            text-align: center;
            border-bottom: 1px solid #ebeef5;
            border-right: 1px solid #ebeef5;
            border-top: 1px solid #ebeef5;
        }
        th:first-child{
            border-left: 1px solid #ebeef5;
        }
    }
    tbody{
        td{
            border-bottom: 1px solid #ebeef5;
            border-right: 1px solid #ebeef5;
            padding: 12px 0;
            min-width: 0;
            box-sizing: border-box;
            text-overflow: ellipsis;
            vertical-align: middle;
            position: relative;
            text-align: center;
        }
        tr{
            background: #f5f7fa;
        }
        .last-child{
            background: #ffffff;
        }
        td:first-child{
            border-left: 1px solid #ebeef5;
            cursor: pointer;
            text-align: left;
        }
    }
}
</style>
