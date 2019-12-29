class MyElement {
  constructor(tag) {
    this.elem = document.createElement(tag);
  }

  get dom() {
    return this.elem;
  }

  attr(key, value) {
    this.elem.setAttribute(key, value);
    // You need the return this to chain methods ...
    return this;
  }

  addClass(className) {
    this.elem.classList.add(className.trim());
    return this;
  }

  text(innerHTML) {
    this.elem.innerHTML = innerHTML;
    return this;
  }

  append(parent) {
    (parent instanceof MyElement ? parent.dom : parent).appendChild(this.elem);
    return this;
  }

  appendChildren(input) {
    const children = Array.isArray(input) ? input : [input];
    children.forEach(child => this.elem.appendChild(
      (child instanceof MyElement ? child.dom : child)
    ));
    return this;
  }
}

function $(tag) {
  return new MyElement(tag);
}

export default $;
