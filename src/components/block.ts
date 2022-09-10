import { Button } from "./button";

export class Block {
  el
  list: Button [];
  qty: number;
  onClick: () => void;
  onSignal: () => void;
  constructor(parent: HTMLElement) {
    this.el = document.createElement('div');
    this.el.className = 'block-wrap';
    parent.append(this.el);
    this.qty = 7;
    this.list = [];

    for (let i = 0; i < this.qty; i++) {
      const btn = new Button(this.el);
      this.list.push(btn);
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