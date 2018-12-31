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
                    <v-text-field label="Username" v-model="username"></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      v-model="password"
                      :append-icon="show_password ? 'visibility_off' : 'visibility'"
                      :type="show_password ? 'text' : 'password'"
                      name="input-10-1"
                      label="Normal with hint text"
                      hint="At least 8 characters"
                      counter
                      @click:append="show_password = !show_password"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn @click="login" color="primary">Login</v-btn>
                  <v-btn @click="signup" color="primary">Signup</v-btn>
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
import { Vue, Component, Prop } from 'vue-property-decorator';

const Gun = require('gun');
require('gun/sea');

const gun = Gun();

const user = gun.user();

@Component({})
export default class Post extends Vue {
  username = '';
  password = '';
  show_password = false;

  login() {
    user
      .auth(this.username, this.password)
      .then((user: any) => {
        console.log('user', user);
      })
      .catch((error: any) => {
        console.log('error', error);
      });
  }

  signup() {
    user
      .create(this.username, this.password)
      .then((user: any) => {
        console.log(user);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }

  mounted() {
    console.log(location);
  }
}
</script>
