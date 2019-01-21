export default {
    props: {
        item: {
            required: true
        },
        index:{
            required:true
        },
        itemArray: {
            type: Array,
            default: function () {
                return []
            }
        },
    },
    data(){
        return {
            open:false
        }
    },
    render(h) {
        const parent = this.$parent;
        const key =parent.name;
        const item =this.item;
        const slotMap =parent.slotMap;
        return (
            <tr class={{'last-child':item.noChild}}>
                <td  onClick={() => this.showTog()}  >
                    <span style={{'padding-left':item.left+'px'}}></span>
                    {item.noChild?<span>&nbsp;</span>:
                    <span  class={{
                        'icon iconfont':true,
                        'icon-xiajiantou':item.open,
                        'icon-youjiantou':!item.open
                    }} 
                        ></span>}
                      
                    {item[key]}{item.showItem}
                </td>
                {Object.keys(slotMap).map((i)=>{
                    return (
                        <td>{slotMap[i]({item})}</td>
                    )
                })}
            </tr>
        )
        
    },
    methods:{
        showTog(){
            if(!this.item.noChild){
                this.$emit('showTog',this.index)
            }
        }
    }
}