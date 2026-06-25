const parseNumber = parseFloat

export function joinCss (obj, separator = ';'): string {
  let texts
  if (Array.isArray(obj)) {
    texts = obj.filter((text) => text)
  } else {
    texts = []
    for (const prop in obj) {
      if (obj[prop]) {
        texts.push(`${prop}:${obj[prop]}`)
      }
    }
  }
  return texts.join(separator)
}

function toKebabCase (str: string): string {
  return str.replace(/([A-Z])/g, '-$1').toLowerCase();
}

function parseStyle (style: string): { [k: string]: string } {
  const result: { [k: string]: string } = {};
  style.split(';').forEach((part) => {
    const [key, value] = part.split(':');
    if (key && value) {
      result[key.trim()] = value.trim();
    }
  });
  return result;
}

function convertKeysToKebabCase (obj: { [k: string]: any }): { [k: string]: any } {
  const result: { [k: string]: any } = {};
  for (const key in obj) {
    result[toKebabCase(key)] = obj[key];
  }
  return result;
}

export function mergeStyles (internal: { [k: string]: any }, style?: string | { [k: string]: any }): { [k: string]: any } {
  if (!style) {
    return internal;
  }
  if (typeof style === 'string') {
    return { ...internal, ...parseStyle(style) };
  }
  return { ...internal, ...convertKeysToKebabCase(style) };
}

export function getStyles (size?, pull?, fw?): { [k: string]: any } {
  let float
  let width
  const height = '1em'
  let lineHeight
  let fontSize
  let textAlign
  let verticalAlign = '-.125em'
  const overflow = 'visible'

  if (fw) {
    textAlign = 'center'
    width = '1.25em'
  }

  if (pull) {
    float = pull
  }

  if (size) {
    if (size === 'lg') {
      fontSize = '1.33333em'
      lineHeight = '.75em'
      verticalAlign = '-.225em'
    } else if (size === 'xs') {
      fontSize = '.75em'
    } else if (size === 'sm') {
      fontSize = '.875em'
    } else {
      fontSize = size.replace('x', 'em')
    }
  }

  return {
    float,
    width,
    height,
    'line-height': lineHeight,
    'font-size': fontSize,
    'text-align': textAlign,
    'vertical-align': verticalAlign,
    'transform-origin': 'center',
    overflow
  }
}

export function getTransform (
  scale,
  translateX,
  translateY,
  rotate?,
  flip?,
  translateTimes = 1,
  translateUnit = '',
  rotateUnit = ''
): string {
  let flipX = 1
  let flipY = 1

  if (flip) {
    if (flip === 'horizontal') {
      flipX = -1
    } else if (flip === 'vertical') {
      flipY = -1
    } else {
      flipX = flipY = -1
    }
  }

  return joinCss(
    [
      `translate(${parseNumber(translateX) * translateTimes}${translateUnit},${parseNumber(translateY) * translateTimes}${translateUnit})`,
      `scale(${flipX * parseNumber(scale)},${flipY * parseNumber(scale)})`,
      rotate && `rotate(${rotate}${rotateUnit})`
    ],
    ' '
  )
}
