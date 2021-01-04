<template>
  <div class="home">
    <el-container>
      <el-main>
        <submit-home :width=width />
        <contribution class="contribution" :data="data" :year="2021" :rectWidth="20" :rectHeight="20" :fontSize="12" :click="click" monthText="zh-cn"/>
      </el-main>
      <el-aside width="400px">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>卡片名称</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </div>
          <div v-for="o in 30" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
import SubmitHome from '@/components/Charts/submit-home'
import Contribution from '@/components/Contribution'

export default {
  components: {
    SubmitHome,
    Contribution
  },
  data () {
    return{
      width: '100%',
      data: {
        '2019-1-1':6,
        '2019-1-2':1,
        '2019-1-3':2,
        '2019-2-2':23,
        '2019-2-3':13,
        '2019-2-4':7,
        '2019-4-1':6,
        '2019-4-2':1,
        '2019-5-3':2,
        '2019-6-2':23,
        '2019-6-3':13,
        '2019-6-4':7,
        '2019-12-20':3,
        '2019-12-21':0,
        '2019-12-22':9,
        '2019-12-23':5
      }
    }
  },
  methods:{
    click(date){
      console.log(date)
    }
  }
}
</script>

<style lang="scss" scoped>
.home{
  //margin-top: 10px;
  margin-left: 5%;
  margin-right: 5%;
  overflow: hidden;
  position: relative;
  vertical-align: middle;
}
.contribution{
  margin-top: 20px;
  width: 100%;
  height: 200px;
  background-color: #ffffff;
  vertical-align: middle;
}

.el-aside {
  margin-top: 20px;
  // background-color: #D3DCE6;
  // color: #333;
  // text-align: center;
  // line-height: 200px;
}
</style>