<template>
  <v-app id="app">
    <div id="title">Bug Reporter</div>
    <div id="container">
      <div id="item1" class="widget">
        Trends
        <ChartContainer/>
      </div>
      <div id="item2" class="widget">
        Report Types
        <SelectionControl/>
      </div>
      <div class="break"></div>
      <div id="item3" class="widget">
        <DataTable/>
      </div>
    </div>
  </v-app>
</template>

<script>
import DataTable from './components/DataTable';
import SelectionControl from './components/SelectionControl';
import ChartContainer from './components/ChartContainer';

export default {
  name: 'App',

  components: {
    DataTable,
    SelectionControl,
    ChartContainer,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap');

html {
  --scrollbarBG: #202129;
  --thumbBG: #f3c940;
}

body {
  background-color: #000000;
  margin: 0;
}

#title {
  color:  #f3c940;
  font-size: 2em;
  font-family: 'Rajdhani', sans-serif;
  text-align: left;
  margin-left: 80px;
  margin-right: 80px;
  margin-top: 40px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fffcd1;
  background-color: #202129;

}

#container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
  margin: 0px 80px 80px 80px;
}

.widget {
  text-align: left;
  font-family: 'Rajdhani', sans-serif;
  font-size: 1.2em;
  padding: 10px;
  border: 1px solid #f3c940;
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

/*Customize Scrollbar*/
body::-webkit-scrollbar {
  width: 8px;
}
body {
  scrollbar-width: thin;
  scrollbar-color: var(--thumbBG) var(--scrollbarBG);
}
body::-webkit-scrollbar-track {
  background: var(--scrollbarBG);
}
body::-webkit-scrollbar-thumb {
  background-color: var(--thumbBG) ;
  border-radius: 6px;
  border: 3px solid var(--scrollbarBG);
}
</style>
