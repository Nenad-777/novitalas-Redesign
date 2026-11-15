import { test } from 'node:test';
import assert from 'node:assert/strict';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { hyphenateSerbian, hyphenateArticleNode } from '../client/src/lib/articleHyphenation';

test('Serbian patterns preserve letters, punctuation, digraphs and source spacing', () => {
  const words = ['međunarodnim', 'predstavnicima', 'injekcija', 'nadživeti', 'ljubav', 'njegov'];
  for (const word of words) assert.equal(hyphenateSerbian(word).replace(/\u00ad/g, ''), word);
  assert.equal(hyphenateSerbian('međunarodnim'), 'me\u00adđu\u00adna\u00adrod\u00adnim');
  assert.equal(hyphenateSerbian('injekcija'), 'in\u00adjek\u00adci\u00adja');
  assert.equal(hyphenateSerbian('nadživeti'), 'nad\u00adži\u00adve\u00adti');
  assert.ok(!hyphenateSerbian('ljubav njegov').match(/l\u00adj|n\u00adj/));
});
test('URLs, emails, acronyms, names, numbers, foreign words and existing breaks are intact', () => {
  for (const text of ['https://novitalas.org/medjunarodni', 'urednik@novitalas.org', 'UNESCO', 'Vašington', '12. novembar 2026.', 'workflow', 'me\u00adđunarodni']) {
    assert.equal(hyphenateSerbian(text).replace(/\u00ad/g,''), text.replace(/\u00ad/g,''));
  }
  assert.equal(hyphenateSerbian('UNESCO Vašington workflow https://novitalas.org/medjunarodni'), 'UNESCO Vašington workflow https://novitalas.org/medjunarodni');
});
test('rich emphasis remains markup; links and foreign-language spans are not transformed', () => {
  const node = <><strong>međunarodnim</strong> <a href="/test">međunarodnim</a><span lang="en">international</span></>;
  const html = renderToStaticMarkup(<p>{hyphenateArticleNode(node.props.children)}</p>);
  assert.ok(html.includes('<strong>me\u00adđu\u00adna\u00adrod\u00adnim</strong>'));
  assert.ok(html.includes('<a href="/test">međunarodnim</a>'));
  assert.ok(html.includes('<span lang="en">international</span>'));
});
