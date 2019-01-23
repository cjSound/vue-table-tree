<template >
    <div  v-if="pageNum>0">
        <div v-if="dataList.length<=pageNum" >
            <table-item  v-for="(item,index) in dataList" :key="index" :index="index" 
                :width-array="widthArray" :childenname="childenname" :name="name" :slotMap ="slotMap"
                :step="step" :left="left" :keys="keys"
                :item ="item"  >
            </table-item>
        </div>
        
        <div class="table-page" v-else> 
            <table-item  v-if="pageList.length>0" v-for="(item,index) in pageList" :key="index" :index="index" 
                :width-array="widthArray" :childenname="childenname" :name="name" :slotMap ="slotMap"
                :step="step" :left="left" :keys="keys"
                :item ="item"  >
            </table-item>

            <el-pagination
            :current-page.sync="pageIndex"
            :page-size="pageNum"
            @current-change="init"
            layout="total,prev, pager, next"
            :total="dataList.length">
            </el-pagination>
        </div>
    </div>
</template>

<script>
import {Pagination} from 'element-ui'
import tableItem from './table-item.js'
import { mapGetters }   from 'vuex'
import Vue from 'vue'
Vue.use(Pagination)

export default {
    name:'tableBody',
    computed:{
        ...mapGetters(['pageNum']),
    },
    created(){
    },
    props:{
        slotMap:{
            type:Object,
            default:function(){
                return {}
            }
        },
        left:{
            type:Number,
            default:5
        },
        step:{
            required:true
        },
        pid:{
            required: true
        },
        childenname:{
            type:String,
            default:'children'
        },
        id:{
            type:String,
            default:'id'
        },
        //根节点展示的父节点id
        rootKey:{
            type:String,
            default:''
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
        dataList:{
            type:Array,
            default:function(){
                return  []
            }
        },
        widthArray:{
            type:Array,
            default:function(){
                return  []
            }
        },
        keys:{
            type:Array,
            default:function(){
                return  []
            }
        },
    },
    components:{tableItem},
    data(){
        return{
            pageIndex:1,
            childList:[],
            pageList:[]
        }
    },
    methods:{
        init(num){
            var index =num==null?this.pageIndex:num;
            var page =this.pageNum;
            if(this.dataList.length>page){
                this.$nextTick(()=>{
                    var arr =[];
                    var start =(index-1) * page;
                    for(var i =0;i<page;i++){
                        if(start+i<this.dataList.length){
                            arr.push(this.cloneObj(this.dataList[start+i]));
                        }
                    }
                    this.$set(this,'pageList',arr);
                });
                

                // console.log('分页信息 ',this.pageList)
            }
        },
        cloneObj(obj) {
            var newObj = {};
            if (obj instanceof Array) {
                newObj = [];
            }
            for (var key in obj) {
                var val = obj[key];
                newObj[key] = (val!==null && typeof val === 'object') ? this.cloneObj(val) : val;
            }
            return newObj;
        },
    },
    mounted(){
        this.init();
    }
}
</script>

<style>

</style>
