import { Block } from "./block";

export class BlocksWrap {
  el
  list: Block [];
  qty: number;
  onClick: () => void;
  onSignal: () => void;
  constructor(parent:HTMLElement) {
    this.el = document.createElement('div');
    this.el.className = 'blocks-wrap';
    parent.append(this.el);
    this.qty = 6;
    this.list = [];

    for (let i = 0; i < this.qty; i++) {
      const block = new Block(this.el);
      this.list.push(block);
    }

    this.list.forEach(el => {
      el.onClick = () => {
        this.onClick();
      }
    })

    this.onSignal = () => {
      this.list.forEach(el => {
        el.onSignal();
      })
    }
  }
}