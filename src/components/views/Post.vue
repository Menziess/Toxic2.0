<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Chat</v-toolbar-title>
          </v-toolbar>

          <div slot="header">Send a message</div>
          <v-card>
            <v-card-text>
              <v-form>
                <v-container fluid>
                  <v-layout row>
                    <v-flex xs12>
                      <v-list class="items">
                        <!-- <v-list-tile v-for="item in items" :key="item.id">
                          <v-list-tile-content>
                            <v-list-tile-title v-html="item.sender"></v-list-tile-title>
                            <v-list-tile-sub-title v-html="item.text"></v-list-tile-sub-title>
                          </v-list-tile-content>
                        </v-list-tile>-->
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
              </v-form>
            </v-card-text>
          </v-card>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class Post extends Vue {
  text = "";
  user = this.$gun.user();

  send() {
    if (!this.checkLoggedIn()) return;
    if (!this.text.length) return;
    this.say(this.text);
    this.text = "";
  }

  say(text: string) {
    this.user.get("said").set(text);
  }

  checkLoggedIn(): boolean {
    if (!this.user.is) {
      this.$router.push("/login");
      return false;
    }
    return true;
  }

  UI(say: any, id: any) {
    console.log(id, say);
  }

  mounted() {
    if (!this.checkLoggedIn()) return;
    this.$gun.on("auth", () => {
      this.user
        .get("said")
        .map()
        .once(this.UI);
    });
  }

  computed!: {
    items: {};
  };
}
</script>

<style scoped>
.items {
  max-height: 40vh;
  overflow-y: auto;
}
</style>
