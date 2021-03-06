import { ColorResult } from '@/composables/use-colors'
import axios from 'axios/dist/axios'
import workers from '@/worker/index'

export interface ThemeResult {
  extension: string
  extensionName: string
  publisher: string
  publisherName: string
  themeName: string
  icon?: string
  colors: number[][]
  score?: number
}

export interface ThemeScore extends ThemeResult {
  score: number
}

export async function getThemes(): Promise<ThemeResult[]> {
  const result = await axios.get('/data/themes.json')
  return Object.freeze(result.data)
}

export async function compareColors(
  colors: ColorResult[],
  themes: ThemeResult[]
) {
  if (colors.length > 0 && themes.length > 0) {
    const result = await workers.compareThemes({
      targetColors: colors,
      themes: themes
    })
    return result.themeScoresSorted
  }
}
