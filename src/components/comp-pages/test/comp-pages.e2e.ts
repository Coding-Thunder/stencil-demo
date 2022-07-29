import { newE2EPage } from '@stencil/core/testing';

describe('comp-pages', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<comp-pages></comp-pages>');

    const element = await page.find('comp-pages');
    expect(element).toHaveClass('hydrated');
  });
});
