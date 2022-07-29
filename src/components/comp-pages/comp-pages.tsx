import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'comp-pages',
  styleUrl: 'comp-pages.css',
  shadow: true,
})
export class CompPages {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
