<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>

          <div slot="header">Send a message</div>
          <v-card>
            <v-card-text>
              <v-form @submit.prevent="login">
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
                        @keyup.enter.native="login"
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn @click.native="login" color="primary">Login</v-btn>
                    <v-btn @click.native="signup" color="primary">Signup</v-btn>
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
export default class Login extends Vue {
  username = "";
  password = "";
  show_password = false;
  user = this.$gun.user();

  login() {
    this.user.auth(this.username, this.password);
  }

  signup() {
    this.user.create(this.username, this.password);
  }

  checkLoggedIn(): boolean {
    if (this.user.is) {
      this.$router.push("/");
      return true;
    }
    return false;
  }

  mounted() {
    this.checkLoggedIn();
    this.$gun.on("auth", () => this.$router.push("/"));
  }
}
</script>
