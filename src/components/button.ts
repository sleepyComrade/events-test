export class Button {
  el
  onClick: () => void;
  constructor(parent:HTMLElement) {
    this.el = document.createElement('button');
    this.el.className = 'button';
    parent.append(this.el);

    this.el.onclick = () => {
      this.onClick();
    }
  }

  setState(state: boolean) {
    if (state) {
      this.el.classList.add('painted-button');
    } else {
      this.el.classList.remove('painted-button');
    }
  }
}