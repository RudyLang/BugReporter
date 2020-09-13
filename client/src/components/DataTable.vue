<template>
  <v-card>
    <v-card-title>
    Reports
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="reports"
      :search="search"
      :items-per-page="5"
    ></v-data-table>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        reports: [],
        search: '',
        headers: [
          {
            text: 'Type',
            align: 'start',
            sortable: true,
            value: 'type',
          },
          { text: 'Comments', value: 'comment' },
          { text: 'Timestamp', value: 'timestamp' },
        ],
      }
    },
    async created() {
      try {
        let res = await this.$http({
          url: 'http://localhost:3000/reports',
          method: 'get',
          timeout: 8000,
          headers: {
            'Content-Type': 'application/json',
          }
        });
        if(res.status == 200){
            console.log(res.status);
        }
        this.reports = res.data;    
        return res.data;
      }
      catch (err) {
        console.error(err);
      }
    },
  }
</script>