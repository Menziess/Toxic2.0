<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>

          <v-flex xs12 sm8 md4>
            <Chat></Chat>
            <!-- <Chat></Chat> -->
          </v-flex>

        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import * as SimplePeer from "simple-peer";
import { Vue, Component, Prop } from "vue-property-decorator";
import Chat from "./Chat.vue";

@Component({
  components: {
    Chat
  }
})
export default class App extends Vue {}
</script>
