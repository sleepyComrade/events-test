import { BlocksWrap } from "./blocks-wrap";

export class App {
  el
  constructor(parent: HTMLElement) {
    this.el = document.createElement('div');
    this.el.className = 'main-wrap';
    parent.append(this.el);

    const blocks = new BlocksWrap(this.el);
    blocks.onClick = () => {
        blocks.onSignal();
    }
  }
}