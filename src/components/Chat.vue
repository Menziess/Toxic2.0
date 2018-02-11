<template>
  <div>

    <v-card class="elevation-12">
      <v-toolbar dark color="primary">
        <v-toolbar-title>Peer Chat</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <v-btn
            icon
            large
            @click="signal"
            slot="activator"
          >
            <v-icon large>code</v-icon>
          </v-btn>
          <span>Your address</span>
        </v-tooltip>
      </v-toolbar>

      <v-expansion-panel>
        <v-expansion-panel-content>
          <div slot="header">Enter your friends address to connect</div>
          <v-card>
            <v-card-text>
              <v-text-field
                v-model="friendAddress"
                box
                multi-line
                label="Paste your friends address"></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn @click="connect" color="primary">Connect</v-btn>
            </v-card-actions>
          </v-card>
        </v-expansion-panel-content>
        <v-expansion-panel-content >
          <div slot="header">Send messages!</div>
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
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-card>
  </div>
</template>

<script lang="ts">
import * as SimplePeer from "simple-peer";
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class Chat extends Vue {
  dialog: boolean = false;
  initiate: boolean = false;
  peer: SimplePeer.Instance = new SimplePeer({
    initiator: false,
    trickle: false
  });
  source: string = "https://github.com/Menziess/Toxic2.0";
  items: string[] = ["test"];
  address: string = "";
  friendAddress: string = "";
  text: string = "";

  signal() {
    if (this.initiate) return alert(this.address);
    this.initiate = !this.initiate;
    this.peer = new SimplePeer({
      initiator: this.initiate,
      trickle: false
    });
    this.attachListenersToPeer(this.peer);
  }

  send() {
    this.peer.send(this.text);
  }

  connect() {
    try {
      this.peer.signal(JSON.parse(this.friendAddress));
    } catch (e) {
      alert(e);
    }
  }

  attachListenersToPeer(peer: SimplePeer.Instance) {
    peer.on("signal", data => {
      this.address = JSON.stringify(data);
      alert(this.address);
    });
    peer.on("data", data => {
      this.items.push(data.toString());
    });
  }

  mounted() {
    this.peer = new SimplePeer({
      initiator: this.initiate,
      trickle: false
    });
    this.attachListenersToPeer(this.peer);
  }
}
</script>

<style>

</style>
