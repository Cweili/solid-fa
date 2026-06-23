import { test, expect } from 'vitest';
import { renderToString } from 'solid-js/web/dist/server';

import Fa, { FaLayers, FaLayersText } from '../src';
import { faFlag, fadFlag } from '@cweili/fa-test-util';

test('basic render', () => {
  const html = renderToString(() => <Fa icon={faFlag} />);
  expect(html).toContain('svg');
  expect(html).toContain('viewBox');
});

test('size prop', () => {
  const html = renderToString(() => <Fa icon={faFlag} size="2x" />);
  expect(html).toContain('font-size:2em');
});

test('spin prop', () => {
  const html = renderToString(() => <Fa icon={faFlag} spin />);
  expect(html).toContain('spin');
});

test('FaLayers', () => {
  const html = renderToString(() => (
    <FaLayers size="4x">
      <Fa icon={faFlag} />
    </FaLayers>
  ));
  expect(html).toContain('layers');
});

test('FaLayersText', () => {
  const html = renderToString(() => (
    <FaLayers size="4x">
      <Fa icon={faFlag} />
      <FaLayersText scale={0.45} color="white">
        27
      </FaLayersText>
    </FaLayers>
  ));
  expect(html).toContain('solid-fa-layers-text');
});

test('duotone icon', () => {
  const html = renderToString(() => <Fa icon={fadFlag} />);
  expect(html).toContain('fill-opacity');
});
