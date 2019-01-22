import store from './store'
import tableBody from  './table-body' 
export default {
    components:{tableBody},
    store,
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
    },
    data(){
        return {
            open:true,
            pageNum:10
        }
    },
    render(h) {
        this.pageNum =this.$store.state.pageNum;
        const key =this.name;
        const item =this.item;
        const slotMap =this.slotMap;
        const widthArray =this.widthArray;
        return (
            <div>
                <div class={{'tab-row':true,'last-child':item.children==null || item.children.length ==0}}>
                    <div class="row-item"  onClick={() => this.showTog()} style={{'width':widthArray[0]+'%'}}  >
                        <span style={{'padding-left':this.left+'px'}}></span>
                        {
                            item.children==null || item.children.length ==0 ?<span>&nbsp;</span>:
                            <span  class={{
                                'icon iconfont':true,
                                'icon-xiajiantou':item.open,
                                'icon-youjiantou':!item.open
                            }}>
                            </span>
                        }
                        
                        {item[key]}{item.showItem}
                    </div>
                    {Object.keys(slotMap).map((i,index)=>{
                        return (
                            <div class="row-item" style={{'width':widthArray[index+1]+'%'}}>{slotMap[i]({item})}</div>
                        )
                    })}
                </div>
                {
                    this.open && item.children!=null && item.children.length >0? 
                    <tableBody  class="tabody" pid={this.rootKey} slotMap ={this.slotMap}  dataList={item.children} 
                        width-array={this.widthArray} childenname={this.childenname}
                        step={this.step } left={this.left+this.step}
                        name={this.name}  >
                    </tableBody> : ''
                }
            </div>
        )
        
    },
    methods:{
        showTog(){
            this.open=!this.open;
        }
    }
}