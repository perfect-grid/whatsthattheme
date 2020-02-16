export interface Extension {
  extensionId: string
  displayName: string
  shortDescription: string
  versions: {
    files: {
      assetType: string
      source: string
    }[]
  }[]
}

export interface ThemeDefinition {
  tokenColors: {
    settings: {
      foreground: string
    }
  }[]
}

export interface ThemeContribution {
  label: string
  uiTheme: string
  path: string
}

export interface ThemeResult {
  id: string
  name: string
  description: string
  icon?: string
  colors?: string[]
  readme?: string
}
