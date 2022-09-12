import { Button } from "./button";

export class Block {
  el;
  list: Button[];
  onClick: (index: number) => void;
  constructor(parent: HTMLElement, btnQty: number) {
    this.el = document.createElement("div");
    this.el.className = "block-wrap";
    parent.append(this.el);
    this.list = [];

    for (let i = 0; i < btnQty; i++) {
      const btn = new Button(this.el);
      this.list.push(btn);
    }

    this.list.forEach((el, i) => {
      el.onClick = () => {
        this.onClick(i);
      };
    });
  }

  setState(states: boolean []) {
    this.list.forEach((el, i) => {
        el.setState(states[i]);
    });
  }
}
