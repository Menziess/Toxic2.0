<!-- src/components/App.vue -->

<template>
	<div>
		<Navbar></Navbar>

		<div class="greeting">Hello {{name}}{{exclamationMarks}}</div>
		<button @click="decrement">-</button>
		<button @click="increment">+</button>
	</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Navbar from "./Nav.vue";

@Component({
  components: {
    Navbar
  }
})
export default class App extends Vue {
  name: String = "Stefan";
  enthusiasm: number = 1;

  increment() {
    this.enthusiasm++;
  }
  decrement() {
    if (this.enthusiasm > 1) {
      this.enthusiasm--;
    }
  }

  get exclamationMarks(): string {
    return Array(this.enthusiasm + 1).join("!");
  }
}
</script>

<style>
.greeting {
  font-size: 20px;
}
</style>
