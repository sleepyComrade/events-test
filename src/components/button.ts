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

  onSignal() {
      this.el.classList.toggle('painted-button');
  }
}