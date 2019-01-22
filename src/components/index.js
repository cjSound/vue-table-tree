import Vue from "vue";
import TableTree from './table-tree';
const VuePlug = {
    // ResponsiveGridLayout,
    TableTree
}


Object.keys(VuePlug).forEach(name => {
    Vue.component(name, VuePlug[name]);
    if (typeof window !== 'undefined' && window.Vue) {
        window.Vue.use(VuePlug[name]);
    }
});

export default TableTree;