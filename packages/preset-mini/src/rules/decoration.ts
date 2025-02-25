import type { CSSObject, Rule } from '@unocss/core'
import { colorResolver, handler as h } from '../utils'

export const textDecorations: Rule[] = [
  ['underline', { 'text-decoration': 'underline' }],
  ['line-through', { 'text-decoration': 'line-through' }],
  ['decoration-underline', { 'text-decoration': 'underline' }],
  ['decoration-line-through', { 'text-decoration': 'line-through' }],

  // size
  [/^(?:underline|decoration)-(?:size-)?(.+)$/, ([, s]) => ({ 'text-decoration-thickness': h.bracket.px(s) })],
  [/^(?:underline|decoration)-(auto|from-font)$/, ([, s]) => ({ 'text-decoration-thickness': s })],

  // colors
  [/^(?:underline|decoration)-(.+)$/, (match, ctx) => {
    const result = colorResolver('text-decoration-color', 'line')(match, ctx) as CSSObject | undefined
    if (result) {
      return {
        '-webkit-text-decoration-color': result['text-decoration-color'],
        ...result,
      }
    }
  }],
  [/^(?:underline|decoration)-op(?:acity)?-?(.+)$/, ([, opacity]) => ({ '--un-line-opacity': h.bracket.percent(opacity) })],

  // offset
  [/^underline-offset-(.+)$/, ([, s]) => ({ 'text-underline-offset': h.auto.bracket.px(s) })],

  // style
  [/^(?:underline|decoration)-(solid|double|dotted|dashed|wavy|inherit|initial|revert|unset)$/, ([, d]) => ({ 'text-decoration-style': d })],
  ['no-underline', { 'text-decoration': 'none' }],
  ['decoration-none', { 'text-decoration': 'none' }],
]
