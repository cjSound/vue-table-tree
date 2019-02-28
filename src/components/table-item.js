import { mapGetters }   from 'vuex'
import tableBody from  './table-body' 
export default {
    components:{tableBody},
    computed:{
        ...mapGetters(['pageNum','expanded','childenname','name','childrenNum']),
    },
    props: {
        slotMap:{
            type:Object,
            default:function(){
                return {}
            }
        },
        item: {
            required: true
        },
        index:{
            required:true
        },
        left:{
            type:Number,
            default:5
        },
        step:{
            required:true
        },
        itemArray: {
            type: Array,
            default: function () {
                return []
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
    watch:{
        item:{
            handler:function(newVal,oldVal){
                // console.log('item ',newVal[this.name],newVal,this.oldChildLength,newVal[this.childenname])
                if(newVal[this.childenname]!=null &&
                    (this.oldChildLength !=newVal[this.childenname].length)){
                    this.watchChange =false;
                    this.$nextTick(()=>{
                        this.watchChange =true;
                    })
                }
            },
            deep:true
        },
        plugItem:{
            handler:function(newVal){
                if(newVal.closed){
                    this.open =false;
                }
            },
            deep:true
        },
    },
    data(){
        return {
            open:false,
            plugItem:{
                closed:false
            },
            keyArray:[],
            watchChange:true,
            oldChildLength:''
        }
    },
    render(h) {
        this.keyArray=this.keys.concat(this.index);
        const key =this.name;
        const item =this.item;
        const slotMap =this.slotMap;
        const widthArray =this.widthArray;
        const keys =this.keys.concat(this.index);
        const closed=this.plugItem;
        
        this.oldChildLength= item.children==null?0:item.children.length;
        // console.log(keys,item.displayName,this.item)
        // console.log(2,this.open,this.item.id,this.item.displayName)
        console.log('段耗时', item[this.name],keys,this.open,new Date().getTime());
        // return(
        //     <div>fdsfdsfsdf</div>
        // )
        return (
            <div>
                <div class={{'tab-row':true,'last-child':item.children==null || item.children.length ==0}}>
                    <div class="row-item"  onClick={() => this.showTog()} style={{'width':widthArray[0]+'%'}}  >
                        <span style={{'padding-left':this.left+'px'}}></span>
                        {
                            item.children==null || item.children.length ==0 ?<span>&nbsp;</span>:
                            <span  class={{
                                'icon iconfont':true,
                                'icon-xiajiantou':this.open,
                                'icon-youjiantou':!this.open
                            }}>
                            </span>
                        }
                        
                        {item[key]}{item.showItem}{this.open}
                    </div>
                    {Object.keys(slotMap).map((i,index)=>{
                        return (
                            <div class="row-item" style={{'width':widthArray[index+1]+'%'}}>{slotMap[i]({item,keys,closed})}</div>
                        )
                    })}
                </div>
                {
                    ( this.watchChange &&this.open && item.children!=null && item.children.length) >0? 
                    <tableBody  class={{'tabody':true,'ishidden':!this.open}}   slotMap ={this.slotMap}  
                        dataList={item.children}
                        pageTotal={item[this.childrenNum]}
                        width-array={this.widthArray}
                        step={this.step } left={this.left+this.step}
                        keys={keys} >
                    </tableBody> : ''
                }
            </div>
        )
        
    },
    created(){
        if(this.expanded!=''){
            // this.open= this.item[this.expanded]?true:false;
        }
        console.log('created',this.open);
        if(this.item[this.childenname]==null){
            this.$set(this.item,this.childenname,[]);
        }
        this.oldChildLength=this.item[this.childenname].length;
    },
    methods:{
        showTog(){
            if(!this.plugItem.closed){
                this.open=!this.open;
            }
        }
    }
}