export const CandyMap = {
  'sweet-tarts': 'st',
  trolli: 'tl',
  nerds: 'nd',
  'gummy-bear': 'gb',
  'black-forest': 'gb',
  'laffy-taffy': 'lt'
} as const

export type PossibleCandies = (typeof CandyMap)[keyof typeof CandyMap]
