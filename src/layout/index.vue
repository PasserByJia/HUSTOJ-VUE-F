<template>
  <div  class="main-container">
    <navbar />
    <!-- <notice /> -->
    <main-win />
    <bottom />
  </div>
</template>

<script>
import  { Navbar,MainWin,Notice,Bottom } from './components'
  export default {
    name: 'Layout',
    components: {
      Navbar,
      MainWin,
      Notice,
      Bottom
    }
  }
</script>

<style  lang="scss" scoped>
.main-container{
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  min-height: 100%;
}
.main-win{
  flex: 1;
}
.bottom{
  flex: 0;
}
</style>