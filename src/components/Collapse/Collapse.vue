<template>
    <div >
        <slot></slot>
    </div>
</template>
<script>
export default {
    // name:'MCollapse',
    props:{
        value:{
            type: Array,
        }
    },
    provide(){
        return {
            collapsedd:this
        }
    },
    computed:{
        
    },
    methods:{
        
    },
}
</script>
<style lang="less" scoped>

</style>