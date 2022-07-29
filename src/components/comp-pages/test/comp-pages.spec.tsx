import { newSpecPage } from '@stencil/core/testing';
import { CompPages } from '../comp-pages';

describe('comp-pages', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CompPages],
      html: `<comp-pages></comp-pages>`,
    });
    expect(page.root).toEqualHtml(`
      <comp-pages>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </comp-pages>
    `);
  });
});
