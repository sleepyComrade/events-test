import { BlocksWrap } from "./blocks-wrap";
export class App {
  el
  btnState: boolean [];
  btnQty: number = 7;
  blockQty: number = 6;
  constructor(parent: HTMLElement) {
    this.el = document.createElement('div');
    this.el.className = 'main-wrap';
    parent.append(this.el);
    this.btnState = [];
    for (let i = 0; i < this.btnQty; i++) {
      this.btnState.push(false);
    }

    const blocks = new BlocksWrap(this.el, this.btnQty, this.blockQty);

    blocks.onClick = (index) => {
      this.btnState[index] = !this.btnState[index];
      blocks.setState(this.btnState);
    }
  }
}