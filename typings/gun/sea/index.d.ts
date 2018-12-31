declare module 'gun/sea' {
  export let root: any;
  export function signature(msg: string): void;
  export default function security(msg: string): void;
}
