<template>
    <div v-if="isShow" class="notice">
        标题：{{title}}
        内容：{{message}}
    </div>
</template>
<script>
export default({
    name:'Notice',
    data(){
        return{
            title:'组件化设计',
            message:'你学会了吗',
            duration:1000,
            isShow:false
        };
    },
    methods:{

    },
    mounted(){
        this.isShow=true;
        setTimeout(()=>{
            this.isShow=false
        },this.duration)
    }
})
</script>
<style lang="less" scoped>
    .notice{
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        margin: auto;
    }
</style>
