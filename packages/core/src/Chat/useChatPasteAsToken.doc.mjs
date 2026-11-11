// Copyright (c) Meta Platforms, Inc. and affiliates.

/** @type {import('@astryxdesign/cli/authoring').HookDoc} */
export const docs = {
  name: 'useChatPasteAsToken',
  displayName: 'useChatPasteAsToken',
  group: 'Chat',
  category: 'Chat',
  keywords: [
    'chat',
    'paste',
    'token',
    'composer',
    'clipboard',
    'contenteditable',
  ],
  params: [
    {
      name: 'options',
      type: 'UseChatPasteAsTokenOptions',
      description: 'Paste threshold, composer input ref, and token factory.',
      required: true,
    },
    {
      name: 'options.inputRef',
      type: 'React.RefObject<ChatComposerInputHandle | null>',
      description:
        'Ref to the ChatComposerInput that receives a generated token.',
      required: true,
    },
    {
      name: 'options.threshold',
      type: 'number',
      description: 'Pastes longer than this many characters become tokens.',
      default: '200',
      required: false,
    },
    {
      name: 'options.toToken',
      type: '(text: string) => ChatComposerToken',
      description:
        'Creates the token inserted for a long paste. The default creates a neutral badge with the line and character count.',
      required: false,
    },
  ],
  returns: [
    {
      name: 'onPaste',
      type: '(event: ClipboardEvent<HTMLDivElement>, text: string) => boolean',
      description:
        'Paste handler for ChatComposerInput. Returns true when the paste was converted into a token and false for normal text insertion.',
    },
  ],
  usage: {
    description:
      'Creates the paste handler used by ChatComposerInput to convert long plain-text pastes into expandable tokens. Short pastes pass through the normal editor pipeline.',
    bestPractices: [
      {
        guidance: true,
        description:
          'Pass the same input ref to ChatComposerInput.handleRef and useChatPasteAsToken.',
      },
      {
        guidance: true,
        description:
          'Pass the returned object as ChatComposerInput.pasteAsToken.',
      },
      {
        guidance: true,
        description:
          'Provide toToken when the product needs a domain-specific label or token variant.',
      },
      {
        guidance: false,
        description:
          'Call the handler without the ChatComposerInput handle ref. The hook needs the ref to insert the token at the caret.',
      },
    ],
  },
  relatedComponents: ['ChatComposerInput', 'ChatComposer'],
  importPath: '@astryxdesign/core/Chat',
};

/** @type {import('@astryxdesign/cli/authoring').HookTranslationDoc} */
export const docsDense = {
  description:
    'Creates ChatComposerInput paste behavior that turns long plain-text pastes into expandable tokens.',
  paramDescriptions: {
    options: 'input ref, character threshold, and token factory.',
    'options.inputRef': 'ChatComposerInput handle ref receiving the token.',
    'options.threshold': 'pastes longer than this become tokens; default 200.',
    'options.toToken':
      'custom token factory; default is a neutral line/character count badge.',
  },
  returnDescriptions: {
    onPaste:
      'ChatComposerInput paste handler; true when converted, false for normal insertion.',
  },
  usage: {
    description:
      'Turns long pastes into ChatComposerInput tokens while short pastes remain normal text.',
    bestPractices: [
      {
        guidance: true,
        description:
          'Share the handle ref with ChatComposerInput and the hook.',
      },
      {guidance: true, description: 'Pass the result to pasteAsToken.'},
      {
        guidance: true,
        description: 'Customize toToken for product-specific labels.',
      },
    ],
  },
};
