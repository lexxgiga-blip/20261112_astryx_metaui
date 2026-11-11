// Copyright (c) Meta Platforms, Inc. and affiliates.

/** @type {import('@astryxdesign/cli/authoring').HookDoc} */
export const docs = {
  name: 'useThemeName',
  displayName: 'useThemeName',
  group: 'Utilities',
  category: 'Utility',
  keywords: ['theme', 'theme name', 'identity', 'provider', 'semantic icons'],
  params: [],
  returns: [
    {
      name: 'name',
      type: 'string | null',
      description:
        'The nearest active Astryx theme name, or null when no provider or registered root theme is active.',
    },
  ],
  usage: {
    description:
      'Reads only the active Astryx theme identity. It follows the nearest Theme provider and, when there is no provider, the root theme attribute. Use it when a component needs to choose a semantic asset or behavior based on the theme without resolving any design tokens.',
    bestPractices: [
      {
        guidance: true,
        description:
          'Use the returned name for theme-specific semantic choices, such as selecting an icon variant or an illustration treatment.',
      },
      {
        guidance: true,
        description:
          'Use useTheme when you need token values, mode, or a complete theme data view.',
      },
      {
        guidance: false,
        description:
          'Treat the name as a light/dark mode signal. A theme name identifies a theme; use the mode returned by useTheme for color-scheme logic.',
      },
      {
        guidance: false,
        description:
          'Assume it returns a name outside a provider. The hook returns null until a root or provider theme is active.',
      },
    ],
  },
  relatedComponents: ['Theme'],
  relatedHooks: ['useTheme'],
  importPath: '@astryxdesign/core/theme',
};

/** @type {import('@astryxdesign/cli/authoring').HookTranslationDoc} */
export const docsDense = {
  description:
    'Reads the nearest active Astryx theme name without resolving tokens; follows Theme context or the registered root theme.',
  returnDescriptions: {
    name: 'nearest theme name, or null when no active theme exists.',
  },
  usage: {
    description:
      'Reads theme identity for semantic asset or behavior choices. Use useTheme for tokens and mode.',
    bestPractices: [
      {
        guidance: true,
        description: 'Use the name for theme-specific semantic choices.',
      },
      {
        guidance: true,
        description: 'Use useTheme when token values or mode are needed.',
      },
      {
        guidance: false,
        description: 'Do not treat theme name as a light/dark mode signal.',
      },
    ],
  },
};
