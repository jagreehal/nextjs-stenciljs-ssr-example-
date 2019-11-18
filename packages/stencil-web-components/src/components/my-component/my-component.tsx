import { Component, Prop, h, State } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  scoped: true
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

  @Prop()
  initialCount: number;

  @State()
  count: number = this.initialCount || 100;
  async click() {
    console.log('click', this.count);
    this.count++;
  }

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return (
      <div>
        Hello, World! I'm {this.getText()}
        <div>
          <h3>Change Local State</h3>
          {this.count} -{' '}
          <button class="green" onClick={() => this.click()}>
            Click
          </button>
        </div>
      </div>
    );
  }
}
