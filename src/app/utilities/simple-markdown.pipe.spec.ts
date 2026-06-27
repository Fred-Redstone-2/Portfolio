import { SimpleMarkdownPipe } from './simple-markdown.pipe';

describe('SimpleMarkdownPipe', () => {
  it('create an instance', () => {
    const pipe = new SimpleMarkdownPipe();
    expect(pipe).toBeTruthy();
  });
});
