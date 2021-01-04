<template>
  <div class="home">
    <submit-home :width=width />
  </div>
</template>

<script>
import SubmitHome from '@/components/Charts/submit-home'

export default {
  components: {
    SubmitHome,
  },
  data () {
    return{
      width: '70%',
    }
  }
}
</script>

<style>
.home{
  margin-top: 10px;
  margin-left: 120px;
  overflow: hidden;
  position: relative;
}

</style>