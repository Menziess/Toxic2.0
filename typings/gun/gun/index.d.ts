declare module 'gun/gun' {
  export let root: any;
  export default class Gun {
    get(key: string): any;
    user(...args: any[]): any;
  }
}
