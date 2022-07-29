import { Component, Prop, h } from '@stencil/core';
import './my-component.css';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  render() {
    return (
      <div>
        <button class={'hover__me--btn'}>Hover me </button>
        <div class={'hover__me--comp'}>
          <p>hello I am invisible but if you hover the button you can see me </p>
        </div>
      </div>
    );
  }
}
