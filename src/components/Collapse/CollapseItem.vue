<template>
    <div class="collapse-item">
        <div class="header">
            <h4>{{title}}</h4>
        </div>
        <div class="wrap" >
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    // name:'CollapseItem',
    data(){
        return{
           
        }
    },
    props:{
        title:{
            type: String
        },
        name:{
            type:[String,Number],
        }
    },
    mounted(){
        console.log(this.name)
        var arr=this.$parent.value;
        console.log(  arr[0])

    },
    computed:{
       isShow(){
           
           return this.$parent.value.indexof(this.name) > -1;
       }     
    },
    methods:{
        
    },
    inject:['collapse'],
}
</script>
<style lang="less" scoped>

</style>