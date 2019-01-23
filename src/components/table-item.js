import { mapGetters }   from 'vuex'
import tableBody from  './table-body' 
export default {
    components:{tableBody},
    computed:{
        ...mapGetters(['pageNum','expanded']),
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
        name:{
            type:String,
            default:'name'
        },
        childenname:{
            type:String,
            default:'children'
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
    data(){
        return {
            open:true,
            keyArray:[]
        }
    },
    render(h) {
        this.keyArray=this.keys.concat(this.index);
        const key =this.name;
        const item =this.item;
        const slotMap =this.slotMap;
        const widthArray =this.widthArray;
        const keys =this.keyArray;
        // console.log(2,this.open,this.item.id,this.item.displayName)
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
                        
                        {item[key]}{item.showItem}
                    </div>
                    {Object.keys(slotMap).map((i,index)=>{
                        return (
                            <div class="row-item" style={{'width':widthArray[index+1]+'%'}}>{slotMap[i]({item,keys})}</div>
                        )
                    })}
                </div>
                {
                    (  item.children!=null && item.children.length) >0? 
                    <tableBody  class={{'tabody':true,'ishidden':!this.open}} pid={this.rootKey} slotMap ={this.slotMap}  dataList={item.children} 
                        width-array={this.widthArray} childenname={this.childenname}
                        step={this.step } left={this.left+this.step}
                        keys={this.keyArray}
                        name={this.name}  >
                    </tableBody> : ''
                }
            </div>
        )
        
    },
    created(){
        if(this.expanded!=''){
            this.open= this.item[this.expanded]?true:false;
        }
    },
    methods:{
        showTog(){
            this.open=!this.open;
        }
    }
}