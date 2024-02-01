import { ROUTES } from '../../routes'

export enum PossibleFlows {
  AMOE = 'AMOE',
  MOBILE = 'MOBILE',
}

export type PossiblePaths = keyof typeof ROUTES
