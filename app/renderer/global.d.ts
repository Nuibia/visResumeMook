declare module '*.jpg' {
  const jpg: string;
  export default jpg;
}
declare module '*.png' {
  const png: string;
  export default png;
}
declare interface Window {
  pdk: string;
}
declare module '*.less';

declare module TSRouter {
  export interface Item {
    url: string;
    key: string;
    text: string;
  }
}
