import type { Rule } from '@unocss/core'
import { positionMap } from '@unocss/preset-mini/utils'

export const textTransforms: Rule[] = [
  // tailwind compact
  ['uppercase', { 'text-transform': 'uppercase' }],
  ['lowercase', { 'text-transform': 'lowercase' }],
  ['capitalize', { 'text-transform': 'capitalize' }],
  ['normal-case', { 'text-transform': 'none' }],
]

export const hyphens: Rule[] = [
  ['hyphens-manual', {
    '-webkit-hyphens': 'manual',
    '-ms-hyphens': 'manual',
    'hyphens': 'manual',
  }],
  ['hyphens-auto', {
    '-webkit-hyphens': 'auto',
    '-ms-hyphens': 'auto',
    'hyphens': 'auto',
  }],
  ['hyphens-none', {
    '-webkit-hyphens': 'none',
    '-ms-hyphens': 'none',
    'hyphens': 'none',
  }],
]

export const writingModes: Rule[] = [
  ['write-vertical-right', { 'writing-mode': 'vertical-rl' }],
  ['write-vertical-left', { 'writing-mode': 'vertical-lr' }],
  ['write-normal', { 'writing-mode': 'horizontal-tb' }],
]

export const writingOrientations: Rule[] = [
  ['write-orient-mixed', { 'text-orientation': 'mixed' }],
  ['write-orient-sideways', { 'text-orientation': 'sideways' }],
  ['write-orient-upright', { 'text-orientation': 'upright' }],
]

export const screenReadersAccess: Rule[] = [
  [
    'sr-only', {
      'position': 'absolute',
      'width': '1px',
      'height': '1px',
      'padding': '0',
      'margin': '-1px',
      'overflow': 'hidden',
      'clip': 'rect(0,0,0,0)',
      'white-space': 'nowrap',
      'border-width': 0,
    },
  ],
  [
    'not-sr-only',
    {
      'position': 'static',
      'width': 'auto',
      'height': 'auto',
      'padding': '0',
      'margin': '0',
      'overflow': 'visible',
      'clip': 'auto',
      'white-space': 'normal',
    },
  ],
]

export const isolations: Rule[] = [
  ['isolate', { isolation: 'isolate' }],
  ['isolate-auto', { isolation: 'auto' }],
]

export const objectPositions: Rule[] = [
  // object fit
  ['object-cover', { 'object-fit': 'cover' }],
  ['object-contain', { 'object-fit': 'contain' }],
  ['object-fill', { 'object-fit': 'fill' }],
  ['object-scale-down', { 'object-fit': 'scale-down' }],
  ['object-none', { 'object-fit': 'none' }],

  // object position
  // skip dashed rules
  [/^object-([\w]+)$/, ([, s]) => ({ 'object-position': positionMap[s] })],
]
