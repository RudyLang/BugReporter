<template>
  <div id="app">
    <div class="title">Bug Reporter</div>
    <div class="container">
      <div id="item1" class="widget">Item 1</div>
      <div id="item2" class="widget">Item 2</div>
      <div class="break"></div>
      <div id="item3" class="widget">Item 3</div>
      <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    </div>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap');

body {
  background-color: #000000;
  margin: 0;
}

.title {
  color:  #f3c940;
  font-size: 2em;
  font-family: 'Rajdhani', sans-serif;
  margin-top: -34px;
  text-align: left;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fffcd1;
  background-color: #202129;
  height: 90vh;
  width: 95vw;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
}

.widget {
  background-color: rgb(83, 35, 35);
  text-align: left;
  font-family: 'Rajdhani', sans-serif;
  font-size: 1.2em;
  padding: 10px;
  border: 1px solid #ffffff;
}

#item1 {
  flex-grow: 1;
}

#item2 {
  flex-grow: 1;
}

#item3 {
  flex-grow: 1;
}

.break {
  flex-basis: 100%;
  height: 0;
}
</style>
