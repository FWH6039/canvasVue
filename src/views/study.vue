<template>
  <div class="study">
    <div class="kuang">
      <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
        <el-form-item
          prop="email"
          label="邮箱"
          :rules="[
            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
          ]"
        >
          <el-input  v-model="dynamicValidateForm.email"></el-input>
        </el-form-item>
        <el-form-item
          v-for="(domain, index) in dynamicValidateForm.domains"
          :label="'域名' + index"
          :key="domain.key"
          :prop="'domains.' + index + '.value'"
          :rules="{
            required: true, message: '域名不能为空', trigger: 'blur'
          }"
        >
          <el-input v-model="domain.value"></el-input><el-button @click.prevent="removeDomain(domain)">删除</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
          <el-button @click="addDomain">新增域名</el-button>
          <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div>
      <div class="kuang">
        <el-button
          type="primary"
          @click="open1">
          可自动关闭
        </el-button>
        <el-button
          type="primary"
          @click="openself">
          自己的提示框
        </el-button>
      </div>
      <div class="kuang">
        <h1>TREE</h1>
        <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
        <m-tree :treeData='treeData' ></m-tree>
      </div>
      <div class="kuang">
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="一致性 Consistency" name="1">
            <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
            <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
          </el-collapse-item>
          <el-collapse-item title="反馈 Feedback" name="2">
            <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
            <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
          </el-collapse-item>
          <el-collapse-item title="效率 Efficiency" name="3">
            <div>简化流程：设计简洁直观的操作流程；</div>
            <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
            <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
          </el-collapse-item>
          <el-collapse-item title="可控 Controllability" name="4">
            <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
            <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
          </el-collapse-item>
        </el-collapse>
        <hr>
        <m-collapse :value="activeNames">
          <m-collapse-item title="一致性 Consistency" name="1">
            <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
            <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
          </m-collapse-item>
          <m-collapse-item title="反馈 Feedback" name="2">
            <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
            <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
          </m-collapse-item>
        </m-collapse>
      </div>
    </div>
    <Canvas></Canvas>
  </div>
</template>

<script>
// @ is an alias to /src
import Canvas from '@/components/canvas.vue';
import MTree from '@/components/tree/Tree.vue'
import MCollapse from '@/components/Collapse/Collapse.vue'
import MCollapseItem from '@/components/Collapse/CollapseItem.vue'
export default {
  name: 'Home',
  computed:{
    
  },
  data(){
    return{
      activeNames: ['1'],
      treeData:{
        label:'web全栈课程',
        children:[
          {
            label:'JS进阶+ES',
            children:[
              {label:'resolve和reject'},
              {
                label:'all()和race()',
                children:[
                  {label:'all()333和race()3333'},
                ]
              },
            ]
          },
          {
            label:'JS进阶+ES22',
            children:[
              {label:'resolve和reject22'},
              {label:'all()和race()22'},
            ]
          },
        ]
      },
      data:[{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
         defaultProps: {
          children: 'children',
          label: 'label'
        },
       dynamicValidateForm: {
          domains: [{
            value: ''
          }],
          email: ''
        }
    }
  },
  components: {
    Canvas,
    MTree,
    MCollapse,
    MCollapseItem
  },
  mounted(){
      
  },
  methods:{
    handleChange(val) {
        console.log(val);
      },
    handleNodeClick(data) {
        console.log(data);
      },
    openself(){
      this.$notice({
        title:'title传入',
        message:'message传入',
        duration:5000
      })
    },
      open1(){
        this.$notify({
          title:"Vue学习",
          message:"你学的如何呢？",
          position:'top-right',
          duration:5000,
        })
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
            // console.log(this.dynamicValidateForm.domains,'ssssssssssss')
          } else {
            // console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      removeDomain(item) {
        var index = this.dynamicValidateForm.domains.indexOf(item)
        if (index !== -1) {
          this.dynamicValidateForm.domains.splice(index, 1)
        }
      },
      addDomain() {
        this.dynamicValidateForm.domains.push({
          value: '',
          key: Date.now()
        });
      }
  }
}
</script>
<style scoped>
  .el-input{
    width: 200px;
    float: left;
  }
  .kuang{
    border: 2px saddlebrown solid;
    text-align: left;
    padding: 10px;
    margin: 10px;
  }
  
</style>
