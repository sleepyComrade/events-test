import { Block } from "./block";

export class BlocksWrap {
  el;
  list: Block[];
  onClick: (index: number) => void;
  constructor(parent: HTMLElement, btnQty: number, blockQty: number) {
    this.el = document.createElement("div");
    this.el.className = "blocks-wrap";
    parent.append(this.el);
    this.list = [];

    for (let i = 0; i < blockQty; i++) {
      const block = new Block(this.el, btnQty);
      this.list.push(block);
    }

    this.list.forEach((el) => {
      el.onClick = (index) => {
        this.onClick(index);
      };
    });
  }

  setState(states: boolean []) {
    this.list.forEach((el) => {
      el.setState(states);
    });
  }
}
