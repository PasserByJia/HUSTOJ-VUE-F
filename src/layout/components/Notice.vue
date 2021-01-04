<template>
  <div class="notice">
      <el-carousel height="30px" direction="vertical" :autoplay="true" indicator-position="none">
        <el-carousel-item v-for="item in 10" :key="item">
            <h3 class="medium">公告栏{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
 .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 30px;
    margin: 0;
  }
  .notice{
    height: 30px;
    overflow: hidden;
    position: relative;
    background: #f9f9f9;
    margin-top: 10px;
    box-shadow: 0 1px 4px rgba(0,21,41,.08);
  }
</style>