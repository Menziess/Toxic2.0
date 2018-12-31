import Vue from 'vue'

declare module 'vue/types/vue' {

  interface VueConstructor {
    // some more augmentation
  }

  interface Vue {
    $gun: object
  }

  export default function install(PluginFunction: any): never;
}
