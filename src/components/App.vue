<template>
  <v-app id="inspire">
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<style scoped>
</style>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  components: {
    // SomeImportedComponent
  }
})
export default class App extends Vue {}
</script>
