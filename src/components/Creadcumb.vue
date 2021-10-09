<template>
    <div class="breadcrumb">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>{{title}}</el-breadcrumb-item>
          </el-breadcrumb>
          <!-- lte|小于等于    !|不等于   lt|等于    -->
    <!--[if lte IE 6]>
    这是IE6以下版本
  <![endif]-->
    </div>
</template>

<script>
export default {
  name: 'Breadcrumb',
  data(){
    return{
      title:null,
    }
  },
  watch:{
    $route(){
      this.getbreadcrumb()
    }
  },
  created(){
    this.getbreadcrumb()
  },
  methods:{
    getbreadcrumb(){
      console.log(this.$route)
      console.log(this.$route.matched)
      this.title=this.$route.name
      // console.log(this.$route)
    }
  }
  
}
</script>

<style scoped lang="less">
   
</style>
