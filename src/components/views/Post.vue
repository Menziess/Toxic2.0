<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Peer Chat 3</v-toolbar-title>
          </v-toolbar>

          <div slot="header">Send a message</div>
          <v-card>
            <v-card-text>
              <v-container fluid>
                <v-layout row>
                  <v-flex xs12>
                    <v-list class="items">
                      <v-list-tile v-for="item in items" :key="item.id">
                        <v-list-tile-content>
                          <v-list-tile-title v-html="item.sender"></v-list-tile-title>
                          <v-list-tile-sub-title v-html="item.text"></v-list-tile-sub-title>
                        </v-list-tile-content>
                      </v-list-tile>
                    </v-list>

                    <v-text-field
                      v-model="text"
                      @keyup.enter="send"
                      box
                      single-line
                      placeholder="Message"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn @click="send" color="primary">Send</v-btn>
                </v-card-actions>
              </v-container>
            </v-card-text>
          </v-card>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import VueGun from "vue-gun";
// import Gun from "gun/gun";
// const Gun = require("gun");
// require("gun/sea");

// const gun = Gun();

// const user = gun.user();
const vm = new Vue();

interface item {
  id: number;
  text: String;
  sender: String;
}

@Component({})
export default class Post extends Vue {
  room = "StefanSchenkRoom";
  items: item[] = [];
  text = "";

  send() {
    if (this.text.length) {
      console.log("\tSending data: ", this.text);
      const item = {
        id: Date.now(),
        text: this.text,
        sender: "asdfasdf"
      };

      const vm = new Vue();
      console.log(vm.$gun);

      this.$gun.get("m").put(item);

      this.$gun.get("m").on((data: any, key: any) => {
        console.info("gun data", data);
        this.items.push(data);
      });
      this.text = "";
    }
  }

  mounted() {
    console.log(location);
    // tslint:disable-next-line
    // @ts-ignore
    if (!this.$gun.user.is) {
      this.$router.push("/login");
    }
  }
}
</script>

<style scoped>
.items {
  max-height: 40vh;
  overflow-y: auto;
}
</style>
