<template>
  <v-card class="mx-auto">
    <v-list shaped>
      <v-list-item-group multiple>
        <template v-for="(item, i) in items">
          <v-divider v-if="!item" :key="`divider-${i}`"></v-divider>

          <v-list-item
            v-else
            :key="`item-${i}`"
            :value="item"
            active-class="amber--text text--accent-1"
            v-on:click="updateTypeList(item)"
          >
            <template v-slot:default="{ active }">
              <v-list-item-content>
                <v-list-item-title v-text="item"></v-list-item-title>
              </v-list-item-content>

              <v-list-item-action>
                <v-checkbox
                  :input-value="active"
                  color="amber accent-4"
                  v-on:click="updateTypeList(item)"
                ></v-checkbox>
              </v-list-item-action>
            </template>
          </v-list-item>
        </template>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    items: ["Crash", "MemoryLeak", "NullReference", "Undefined", "VertexShader"],
    reportTypes: [],
  }),

  methods: {
    updateTypeList: function (type) {
      // Disabling multiselect for now
      /*let index = this.reportTypes.indexOf(type);
          if (index > -1) {
            this.reportTypes.splice(index, 1);
          }
          else {
            this.reportTypes.push(type);
          }
          console.log(this.reportTypes);

          this.$root.$emit('ChartContainer', this.reportTypes);
          */

      // Only allowing one type at a time until chart api method is improved
      this.reportTypes.pop();
      this.reportTypes.push(type);
      console.log(this.reportTypes);

      this.$root.$emit("ChartContainer", this.reportTypes);
    },
  },
};
</script>