<template >
    <tbody>
        <table-item  v-for="(item,index) in childList" :key="index" :index="index" 
             :item ="item"  @showTog="showTog" v-if="item.showItem"
            >
        </table-item>
    </tbody>
</template>

<script>
import tableItem from './table-item.js'
export default {
    name:'table-body',
    props:{
        slotMap:{
            type:Object,
            default:function(){
                return {}
            }
        },
        pid:{
            required: true
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
        }
    },
    components:{tableItem},
    data(){
        return{
            childList:[],
            expanded:'',
            left:''
        }
    },
    methods:{
        init(){
            var parent = this.$parent;
            this.expanded  =parent.expanded;
            this.left =parent.left;
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
        showTog(index){
            var item =this.childList[index];
            if(item.open){
                for(var i =index+1;i<this.childList.length;i++){
                    if(this.childList[i].left>item.left){
                        this.childList[i].showItem =false;
                    }else{
                        break;
                    }
                }
                item.open=false;
            }else{
                if((index+1)<this.childList.length && item.left >=this.childList[index+1].left){
                    var list =this.getChild(item[this.id],item.left+this.left);
                    if(list.length>0){
                        var arrC =this.cloneObj(this.childList);
                        var array = arrC.splice(0,index+1).concat(list,arrC);
                        this.$set(this,'childList',array);    
                    }else{
                        this.$set(this.childList[index],'noChild',true);
                    }
                }else{
                    for(var i =index+1;i<this.childList.length;i++){
                        if(this.childList[i].left>item.left){
                            this.childList[i].showItem =true;
                        }else{
                            break;
                        }
                    }
                }
                this.childList[index].open=true;
            }
        },
        getChildList(){
            var list =this.getChild(this.pid);
            for(var i in list){
                list[i].left=0;
                this.childList.push(list[i]);
                if(this.expanded!='' && list[i][this.expanded]){
                    var lists =this.getChild(list[i][this.id]);
                    if(lists.length>0){
                        list[i].open=true;
                        for(var j in lists){
                            lists[j].left= list[i].left+this.left;
                            this.childList.push(lists[j]);
                        }
                    }
                    
                }
            }
        },
        pushChild(item,index){

        },
        getChild(pid,left){
            var list =[];
            for(var  i in this.dataList){
                if(this.dataList[i][this.parentKey] == pid){
                    var item = this.cloneObj(this.dataList[i]);
                    item.showItem =true;
                    if(left){
                        item.left= left;
                    }
                    list.push(item);
                }
            }
            return list;
        }
    },
    mounted(){
        this.init();
        this.getChildList();
    }
}
</script>

<style>

</style>
