// Copyright (c) Meta Platforms, Inc. and affiliates.

/** @type {import('@astryxdesign/cli/authoring').HookDoc} */
export const docs = {
  name: 'useOutlineFromDOM',
  displayName: 'useOutlineFromDOM',
  keywords: [
    'outline',
    'table of contents',
    'toc',
    'dom',
    'headings',
    'mutation observer',
    'same-page navigation',
  ],
  params: [
    {
      name: 'containerRef',
      type: 'React.RefObject<HTMLElement | null>',
      description:
        'Ref to the element containing the headings that should appear in the outline.',
      required: true,
    },
  ],
  returns: [
    {
      name: 'items',
      type: 'OutlineItem[]',
      description:
        'Heading items in document order. Each item contains the heading id, trimmed text label, and level from 1 to 6. Headings without both an id and visible text are ignored.',
    },
  ],
  usage: {
    description:
      'Builds Outline items from h1-h6 elements inside a DOM container. The hook reads the container after mount and observes heading additions, text changes, and id changes, so the Outline stays aligned with content rendered by a client-side document or editor.',
    bestPractices: [
      {
        guidance: true,
        description:
          'Attach the ref to the same element that contains the headings and pass the returned items directly to Outline.',
      },
      {
        guidance: true,
        description:
          'Give headings stable, unique ids. Outline links use those ids as their targets.',
      },
      {
        guidance: true,
        description:
          'Use useOutlineFromMarkdown when the source is Markdown; it keeps heading slugs in step with Markdown rendering.',
      },
      {
        guidance: false,
        description:
          'Expect headings without an id or visible text to appear in the outline; the hook intentionally skips them.',
      },
      {
        guidance: false,
        description:
          'Use this hook as a server-side document parser. It reads the browser DOM and returns an empty list until the container exists.',
      },
    ],
  },
  relatedComponents: ['Outline'],
  relatedHooks: ['useOutlineFromMarkdown'],
  importPath: '@astryxdesign/core/Outline',
  category: 'Navigation',
};

/** @type {import('@astryxdesign/cli/authoring').HookTranslationDoc} */
export const docsDense = {
  description:
    'Builds OutlineItem[] from h1-h6 elements in a DOM container and keeps the result current with a MutationObserver.',
  paramDescriptions: {
    containerRef: 'ref to the element containing the headings to index.',
  },
  returnDescriptions: {
    items:
      'heading items in document order; each has id, trimmed label, and level 1-6.',
  },
  usage: {
    description:
      'Builds Outline items from headings in a client-rendered DOM container. It updates when headings, text, or ids change.',
    bestPractices: [
      {
        guidance: true,
        description:
          'Attach the ref to the heading container and pass items to Outline.',
      },
      {
        guidance: true,
        description: 'Give headings stable, unique ids.',
      },
      {
        guidance: true,
        description:
          'For Markdown, prefer useOutlineFromMarkdown so slugs match the renderer.',
      },
      {
        guidance: false,
        description:
          'Expect headings without an id or visible text to be included.',
      },
    ],
  },
};
