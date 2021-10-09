<template>
    <div class="TreeDiv">
        <div @click="toggle">
            {{treeData.label}}
            <span v-if="isOpenFolder">[ {{open?'-':'+'}} ]</span>
        </div>
        <!-- 递归组件 -->
        <ul v-if="isOpenFolder" v-show="open">
            <item v-for='data in treeData.children' :treeData='data' :key='data.label'></item>
        </ul>
    </div>
</template>
<script>
export default {
    name:'Item',//name,对递归组件是必须的
    data(){
        return{
            open:false
        }
    },
    props:{
        treeData:{
            type:Object,
            require:true,
        },
    },
    computed:{
        isOpenFolder(){
            return this.treeData.children&&this.treeData.children.length
        }
    },
    methods:{
        toggle(){
            if(this.isOpenFolder){
                this.open=!this.open
            }
        }
    }
}
</script>
<style lang="less" scoped>

</style>