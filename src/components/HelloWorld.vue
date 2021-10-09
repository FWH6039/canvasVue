<template>
  <div >
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <div v-on:click="ddd">Installedssssssssssssssss CLI Plugins</div>
    
  </div>
</template>

<script>
// import bus from '../main.js'
export default {
  name: 'HelloWorld',
  props: {
    msg: Number,
  },
  mounted(){
    console.log(this.foo)
    //  bus.$on('book',(phone)=>{
    //   console.log(phone)
    //   alert(phone)
    // })
  },
  methods:{
    ddd(){
      // this.props.runs()
      // console.log('ssssssssssssssss')
      this.$emit('runs',{name:'ddd',age:50})
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
