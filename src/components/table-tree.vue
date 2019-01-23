<template>
    <div class="table-tree">
        <div class="tab-row table-tree-header" v-if="widthArray.length>0">
            <div class="row-item" :style="{'width':widthArray[0]+'%'}">  {{title}}</div>
            <div class="row-item" v-for="(item,index) in titleArray" :style="{'width':widthArray[index+1]+'%'}">{{item}}</div>
        </div>
        <table-body  v-if="open" class="tabody" :pid="rootKey" :slotMap ="$scopedSlots"  :dataList="dataList" 
            :width-array="widthArray" :childenname="childenname" :left="left" :step="left"
            :keys="keys"
            :id="id" :name="name" :parentKey="parentKey">
        </table-body>
    </div>
</template>

<script>
import store from './store'
import tableBody from  './table-body'
export default {
    components:{tableBody},
    store,
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
        page:{
            type:Number,
            default:10
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
        childenname:{
            type:String,
            default:'children'
        },
        //是否有默认展开配置 需要则去查找
        expanded:{
            type:String,
            default:''
        },
        widths:{
            type:Array,
            default:function(){
                return [];
            }
        },
        dataList:{
            type:Array,
            default:function(){
                return  []
            }
        }
    },
    data(){
        return {
            widthArray:[],
            titleArray:[],
            open:false,
            keys:[]
        }
    },
    methods:{
        initConfig(){
            this.$store.commit('setPageNum',this.page);
            this.$store.commit('setLeft',this.left);
            this.$store.commit('setName',this.name);
            this.$store.commit('setChildenname',this.childenname);
            this.$store.commit('setWidths',this.widths);
            this.$store.commit('setExpanded',this.expanded);
            
            this.open=true;
        }
    },
    mounted(){
        var _this =this ;
        var slots   =this.$scopedSlots;
        this.titleArray =Object.keys(slots);
        this.$nextTick(()=>{
            if(this.widths.length==0){
                var num =this.titleArray.length+1;
                var arr =[];
                for(var i =0;i<num;i++){
                    this.widthArray.push(100/num);
                }
            }else{
                this.widthArray =this.widths;
            }
            this.initConfig();
        })
        
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
    .tab-row{
        background: #f5f7fa;
        overflow: hidden;
        width: 100%;
        .row-item{
            float: left;
            height: 47px;
        }
    }
    .ishidden{
        display: none;
    }
    .table-tree-header{
        color: #909399;
        font-weight: 500;
        .row-item{
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
    .tabody{
        .el-pagination{
            text-align: center;
        }
        .row-item{
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
        .tab-row{
            background: #f5f7fa;
        }
        .last-child{
            background: #ffffff;
        }
        .row-item:first-child{
            border-left: 1px solid #ebeef5;
            cursor: pointer;
            text-align: left;
        }
    }
}
</style>
