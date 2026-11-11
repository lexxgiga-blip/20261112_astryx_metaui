// Copyright (c) Meta Platforms, Inc. and affiliates.

/** @type {import('@astryxdesign/cli/authoring').HookDoc} */
export const docs = {
  name: 'useSyntaxTheme',
  displayName: 'useSyntaxTheme',
  group: 'Utilities',
  category: 'Utility',
  keywords: ['syntax', 'code', 'highlighting', 'theme', 'canvas', 'token'],
  params: [],
  returns: [
    {
      name: 'theme',
      type: 'UseSyntaxThemeReturn | null',
      description:
        'The nearest SyntaxTheme values resolved for the current mode, or null when no SyntaxTheme provider is present.',
    },
    {
      name: 'theme.name',
      type: 'string',
      description: 'Name of the active syntax theme.',
    },
    {
      name: 'theme.mode',
      type: "'light' | 'dark'",
      description: 'Effective color mode used to resolve syntax tokens.',
    },
    {
      name: 'theme.token',
      type: '(name: SyntaxThemeTokenKey) => string',
      description: 'Resolve one syntax token to its raw CSS value.',
    },
    {
      name: 'theme.tokens',
      type: 'Record<SyntaxThemeTokenKey, string>',
      description: 'All syntax tokens resolved for the current color mode.',
    },
  ],
  usage: {
    description:
      'Reads resolved syntax colors from the nearest SyntaxTheme provider for code surfaces that cannot consume CSS custom properties directly, such as a canvas renderer. It returns null outside SyntaxTheme.',
    bestPractices: [
      {
        guidance: true,
        description:
          'Check the return value before reading token or tokens; a consumer may be rendered outside a SyntaxTheme provider.',
      },
      {
        guidance: true,
        description:
          'Use token for one value and tokens when a renderer needs several values in the same pass.',
      },
      {
        guidance: true,
        description:
          'Use SyntaxTheme for CSS-based code components and this hook for JavaScript-driven surfaces such as canvas.',
      },
      {
        guidance: false,
        description:
          'Hardcode light and dark syntax colors. The hook resolves the active mode for you.',
      },
    ],
  },
  relatedComponents: ['SyntaxTheme'],
  relatedHooks: ['useTheme'],
  importPath: '@astryxdesign/core/theme/syntax',
};

/** @type {import('@astryxdesign/cli/authoring').HookTranslationDoc} */
export const docsDense = {
  description:
    'Reads syntax colors resolved by the nearest SyntaxTheme for canvas or other JS-driven code surfaces; null outside a provider.',
  returnDescriptions: {
    theme: 'resolved syntax theme, or null outside SyntaxTheme.',
    'theme.name': 'active syntax theme name.',
    'theme.mode': 'effective light/dark mode.',
    'theme.token': 'resolve one syntax token to a raw color.',
    'theme.tokens': 'all syntax tokens resolved for the current mode.',
  },
  usage: {
    description:
      'Reads syntax colors for JavaScript-driven code surfaces such as canvas. CSS code components should use SyntaxTheme directly.',
    bestPractices: [
      {
        guidance: true,
        description: 'Check for null before reading token or tokens.',
      },
      {
        guidance: true,
        description:
          'Use token for one value and tokens for a full render pass.',
      },
      {
        guidance: false,
        description: 'Hardcode light/dark syntax colors.',
      },
    ],
  },
};
