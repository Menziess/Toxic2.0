<template>

  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>

        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Peer Chat 2</v-toolbar-title>
          </v-toolbar>

          <div slot="header">Send a message</div>
          <v-card>
            <v-card-text>
              <v-container fluid>
                <v-layout row>
                  <v-flex xs12>
                    <v-list two-line>
                      <template v-for="item in items">
                        {{ item }}
                      </template>
                    </v-list>
                    <v-text-field
                      v-model="text"
                      box
                      single-line
                      label="Message"></v-text-field>
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
import { setTimeout } from "timers";
const Peer = require("peerjs");

@Component({})
export default class Chat2 extends Vue {
  // Step 1: create peer with random id
  peer = new Peer();

  // Step 2: this is the id of the room we are connecting to
  room = "StefanSchenkRoom";

  // Step 3: create connection variable
  conn = this.peer.connect(this.room);
  items = [];
  text = "";

  mounted() {
    console.log("Step 1: Connecting to room if it exists");
    this.handleConnection(this.conn);
    setTimeout(() => {
      if (!this.conn.open) {
        console.log("\tNot open yet");
        this.createRoom();
      }
    }, 2000);
  }

  createRoom() {
    console.log("Step 2: Creating room");
    this.peer = new Peer(this.room);
    this.peer.on("connect", (conn: any) => {
      this.conn = conn;
      this.handleConnection(this.conn);
    });
  }

  handleConnection(conn: any) {
    console.log("\tHandling connection");
    this.conn.on("open", () => {
      console.log("\tConnection open");
      this.conn.on("data", (data: any) => {
        console.log("\tReceiving data");
        console.log(data);
      });
    });
    this.conn.on("error", (error: any) => console.error("ERROR", error));
  }

  send() {
    if (this.conn.open && this.text.length) {
      console.log("\tSending data");
      this.conn.send(this.peer.id + ": " + this.text);
      this.text = "";
    }
  }
}
</script>

<style>
</style>
