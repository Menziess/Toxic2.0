import Vue from 'vue'
import Gun from 'gun/gun';

declare module 'vue/types/vue' {

  interface VueConstructor {
    // some more augmentation
  }

  interface Vue {
    $gun: Gun
  }

  // export default function install(PluginFunction: any): never;
}
