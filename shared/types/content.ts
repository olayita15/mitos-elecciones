export type Verdict = 'verdadero' | 'falso' | 'parcial'

export interface Candidate {
  slug: string
  name: string
  shortName: string
  description: string
}

export interface Category {
  slug: string
  name: string
  description: string
}

export interface MythSource {
  title: string
  url: string
  publisher: string
}

export interface Myth {
  id: string
  slug: string
  candidate: string
  category: string
  verdict: Verdict
  title: string
  summary: string
  explanation: string
  evidences: string[]
  sources: MythSource[]
}
