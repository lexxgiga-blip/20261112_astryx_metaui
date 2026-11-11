// Copyright (c) Meta Platforms, Inc. and affiliates.

/** @type {import('@astryxdesign/cli/authoring').HookDoc} */
export const docs = {
  name: 'useChatDictation',
  displayName: 'useChatDictation',
  group: 'Chat',
  category: 'Chat',
  keywords: [
    'chat',
    'dictation',
    'voice',
    'speech',
    'microphone',
    'transcript',
    'composer',
  ],
  params: [
    {
      name: 'options',
      type: 'UseChatDictationOptions',
      description:
        'Speech, audio feedback, and ChatComposerInput integration options.',
      required: false,
    },
    {
      name: 'options.lang',
      type: 'string',
      description:
        'BCP-47 language tag. Defaults to the InternationalizationProvider locale.',
      required: false,
    },
    {
      name: 'options.continuous',
      type: 'boolean',
      description: 'Whether recognition continues until explicitly stopped.',
      default: 'true',
      required: false,
    },
    {
      name: 'options.interimResults',
      type: 'boolean',
      description: 'Whether interim transcripts are reported.',
      default: 'true',
      required: false,
    },
    {
      name: 'options.transformTranscript',
      type: '(transcript: string) => string',
      description: 'Transforms transcript text before it is reported.',
      required: false,
    },
    {
      name: 'options.onTranscript',
      type: '(transcript: string, isFinal: boolean) => void',
      description: 'Called for each interim or final transcript.',
      required: false,
    },
    {
      name: 'options.onResult',
      type: '(transcript: string) => void',
      description: 'Called for each final transcript.',
      required: false,
    },
    {
      name: 'options.onError',
      type: '(error: {error: string; message?: string}) => void',
      description: 'Called when recognition reports an error.',
      required: false,
    },
    {
      name: 'options.onStart',
      type: '() => void',
      description: 'Called when recognition starts.',
      required: false,
    },
    {
      name: 'options.onEnd',
      type: '() => void',
      description: 'Called when recognition ends.',
      required: false,
    },
    {
      name: 'options.hasSounds',
      type: 'boolean',
      description: 'Whether to play subtle start and stop cues.',
      default: 'false',
      required: false,
    },
    {
      name: 'options.audioContext',
      type: 'AudioContext',
      description: 'Optional shared AudioContext for audio analysis and cues.',
      required: false,
    },
    {
      name: 'options.inputRef',
      type: 'React.RefObject<ChatComposerInputHandle | null>',
      description:
        'Ref to ChatComposerInput. When provided, interim text is shown in the input as ghost text.',
      required: false,
    },
  ],
  returns: [
    {
      name: 'isSupported',
      type: 'boolean',
      description: 'Whether the browser exposes SpeechRecognition.',
    },
    {
      name: 'isListening',
      type: 'boolean',
      description: 'Whether recognition is active.',
    },
    {
      name: 'isSpeaking',
      type: 'boolean',
      description: 'Whether speech is currently being detected.',
    },
    {
      name: 'volume',
      type: 'number',
      description: 'Real-time microphone volume from 0 to 1.',
    },
    {
      name: 'bands',
      type: 'number[]',
      description: 'Calibrated frequency-band levels from low to high.',
    },
    {
      name: 'rawBands',
      type: 'number[]',
      description: 'Uncalibrated frequency-band levels for diagnostics.',
    },
    {
      name: 'interimTranscript',
      type: 'string',
      description: 'Current interim transcript text.',
    },
    {name: 'start', type: '() => void', description: 'Start dictation.'},
    {
      name: 'stop',
      type: '() => void',
      description: 'Stop dictation gracefully.',
    },
    {
      name: 'abort',
      type: '() => void',
      description: 'Abort dictation immediately.',
    },
    {
      name: 'toggle',
      type: '() => void',
      description: 'Toggle between start and stop.',
    },
  ],
  usage: {
    description:
      'Connects browser speech recognition to a chat composer. In addition to the headless recognition state, it provides microphone metering, optional audio cues, CAPS LOCK handling for sustained volume, and interim text management for ChatComposerInput.',
    bestPractices: [
      {
        guidance: true,
        description:
          'Pass the ChatComposerInput handle ref as inputRef when interim text should appear in the composer.',
      },
      {
        guidance: true,
        description:
          'Pass the return value to ChatDictationButton for the standard chat mic control.',
      },
      {
        guidance: true,
        description:
          'Handle isSupported so the composer still works where SpeechRecognition is unavailable.',
      },
      {
        guidance: false,
        description:
          'Use this hook for a non-chat speech surface. Use useSpeechRecognition when no ChatComposer integration is needed.',
      },
    ],
  },
  relatedComponents: [
    'ChatComposer',
    'ChatComposerInput',
    'ChatDictationButton',
  ],
  relatedHooks: ['useSpeechRecognition'],
  importPath: '@astryxdesign/core/Chat',
};

/** @type {import('@astryxdesign/cli/authoring').HookTranslationDoc} */
export const docsDense = {
  description:
    'Connects browser speech recognition to ChatComposerInput with metering, optional sounds, and interim text.',
  paramDescriptions: {
    options: 'speech, audio, and ChatComposerInput integration options.',
  },
  returnDescriptions: {
    isSupported: 'whether SpeechRecognition is available.',
    isListening: 'whether recognition is active.',
    isSpeaking: 'whether speech is detected.',
    volume: 'microphone volume, 0-1.',
    bands: 'calibrated frequency bands.',
    rawBands: 'uncalibrated frequency bands.',
    interimTranscript: 'current interim text.',
    start: 'start dictation.',
    stop: 'stop gracefully.',
    abort: 'abort immediately.',
    toggle: 'toggle dictation.',
  },
  usage: {
    description:
      'Chat-focused speech recognition with audio metering and composer interim text.',
    bestPractices: [
      {
        guidance: true,
        description:
          'Pass the input handle ref when interim text belongs in ChatComposerInput.',
      },
      {
        guidance: true,
        description:
          'Pass the return value to ChatDictationButton for the standard mic control.',
      },
      {guidance: true, description: 'Handle unsupported browsers.'},
      {
        guidance: false,
        description: 'Use useSpeechRecognition for non-chat speech surfaces.',
      },
    ],
  },
};
