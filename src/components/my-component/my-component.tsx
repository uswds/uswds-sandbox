import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';
import { UsaLink } from '@uswds/web-components/dist/components/usa-link.js';

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
  @Prop() href: string;

  connectedCallback() {
    customElements.get('usa-link') || customElements.define('usa-link', UsaLink);
  }

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <usa-link href={this.href}>Hello, World! I'm {this.getText()}</usa-link>;
  }
}
