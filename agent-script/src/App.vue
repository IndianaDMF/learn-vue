<template>
  <div id="app">
    <div class="header">
      <img class="img" alt="logo" src="./assets/clippy.png">
    </div>
    <div id="nav" class="menu">
      <router-link to="/">Welcome</router-link> |
      <router-link to="/intro">Intro</router-link>
    </div>
    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <div class="content">
    <SideBar class="sidebar"/>
      <router-view/>
    </div>
    <div class="footer">
    </div>
  </div>
</template>

<script>
import SideBar from './sidebar/SideBar.vue';

export default {
  name: 'app',
  components: {
    SideBar,
  },
};
</script>


<style>
.img {
  width: 50px;
  height: auto;
}
.content {
  width: auto;
  overflow: hidden;
}
.sidebar {
  float: left;
  width: 250px;
  background-color: #e5e5e5;
  height: 100vh;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav{
  display:inline-block;
    background-color:#5597b4;
    box-shadow:0 1px 1px #ccc;
    border-radius:2px;
    width: 100vh;
}
#nav a{
    display:inline-block;
    padding: 18px 30px;
    color:#fff !important;
    font-weight:bold;
    font-size:16px;
    text-decoration:none !important;
    line-height:1;
    text-transform: uppercase;
    background-color:transparent;

    -webkit-transition:background-color 0.25s;
    -moz-transition:background-color 0.25s;
    transition:background-color 0.25s;
}
</style>
