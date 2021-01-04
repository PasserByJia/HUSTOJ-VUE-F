<template>
  <div class="navbar">
    <el-menu  class="navbar-menu" mode="horizontal"  text-color = "#000000" >
      <el-menu-item >HUSTOJ</el-menu-item>
      <el-menu-item index="2"><i class="el-icon-question"></i>常见问答</el-menu-item>
      <el-menu-item index="3"><i class="el-icon-s-claim"></i>问题</el-menu-item>
      <el-menu-item index="4"><i class="el-icon-s-grid"></i>来源/分类</el-menu-item>
      <el-menu-item index="5"><i class="el-icon-video-play"></i>状态</el-menu-item>
      <el-menu-item index="6"><i class="el-icon-medal"></i>排名</el-menu-item>
      <el-menu-item index="7"><i class="el-icon-trophy"></i>竞赛&作业</el-menu-item>
      <!-- 此处样式参考 vue-element-admin 项目中是 navbar头像框实现 -->
      <div class="navbar-right-group">
        <!-- 语言选择 还未进行国际化的工作先隐藏 -->
        <!--<div class="navbar-right-group-item hover-effect" >
          <lang-select class="navbar-right-group-item" /> 
        </div>-->
        <el-dropdown class="navbar-avatar navbar-right-group-item hover-effect" trigger="click">
          <div class="avatar-wrapper">
              <img src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80" class="user-avatar">
              <i class="el-icon-caret-bottom" />
          </div>
          <el-dropdown-menu slot="dropdown">
            <router-link to="/profile/index">
              <el-dropdown-item>Profile</el-dropdown-item>
            </router-link>
            <router-link to="/">
              <el-dropdown-item>Dashboard</el-dropdown-item>
            </router-link>
            <a target="_blank" href="https://github.com/PanJiaChen/vue-element-admin/">
              <el-dropdown-item>Github</el-dropdown-item>
            </a>
            <a target="_blank" href="https://panjiachen.github.io/vue-element-admin-site/#/">
              <el-dropdown-item>Docs</el-dropdown-item>
            </a>
            <el-dropdown-item divided @click.native="logout">
              <span style="display:block;">Log Out</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-menu>
  </div>
</template>

<script>
import LangSelect from '@/components/LangSelect'
  export default {
    name: 'Navbar',
    components: {
      LangSelect,
    },
  }
</script>

<style  lang="scss" scoped>
.navbar {
  height: 60px;
  overflow: hidden;
  position: relative;
  background:#ffffff;
  box-shadow: 0px 2px 0px 0px rgba(0,21,41,.08);
  .navbar-menu{
    background-color: #ffffff;
    .el-menu-item{
       font-size: 16px;
    }
    .navbar-right-group{
      float: right; //控制整体右侧菜单组靠右的实现
      height: 100%;
      line-height: 50px;
      &:focus {
        outline: none;
      }
      .navbar-right-group-item{
        display: inline-block;
        padding: 0 8px;
        height: 100%;
        font-size: 18px;
        color: #5a5e66;
        vertical-align: text-bottom;
        &.hover-effect { //鼠标悬浮变色的设置
          cursor: pointer;
          transition: background .3s;
          &:hover {
            background: #ffffff
          }
        }
      }
      .navbar-avatar {
        margin-right: 30px;
        .avatar-wrapper { 
          margin-top: 10px;
          position: relative;
          .user-avatar {
            cursor: pointer;
            width: 40px;
            height: 40px;
            border-radius: 10px;
          }
          .el-icon-caret-bottom {
            cursor: pointer;
            position: absolute;
            right: -20px;
            top: 25px;
            font-size: 12px;
          }
        }
      }
    }
  }  
        
}
</style>