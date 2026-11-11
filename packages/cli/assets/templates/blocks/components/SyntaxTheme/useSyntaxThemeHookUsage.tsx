// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

import {SyntaxTheme, useSyntaxTheme} from '@astryxdesign/core/theme';
import {githubDark} from '@astryxdesign/core/theme/syntax';
import {Card} from '@astryxdesign/core/Card';
import {HStack, VStack} from '@astryxdesign/core/Layout';
import {Text} from '@astryxdesign/core/Text';

function SyntaxCanvasPreview() {
  const syntax = useSyntaxTheme();

  if (!syntax) {
    return null;
  }

  return (
    <Card padding={4} style={{backgroundColor: syntax.token('background')}}>
      <VStack gap={2}>
        <Text style={{color: syntax.token('comment')}}>
          // Values are ready for a canvas or SVG renderer.
        </Text>
        <HStack gap={1}>
          <Text style={{color: syntax.token('keyword')}}>const</Text>
          <Text style={{color: syntax.token('variable')}}>answer</Text>
          <Text style={{color: syntax.token('operator')}}>=</Text>
          <Text style={{color: syntax.token('number')}}>42</Text>
        </HStack>
        <Text type="supporting" style={{color: syntax.token('comment')}}>
          {syntax.name} · {syntax.mode}
        </Text>
      </VStack>
    </Card>
  );
}

export default function UseSyntaxThemeHookUsage() {
  return (
    <SyntaxTheme theme={githubDark}>
      <SyntaxCanvasPreview />
    </SyntaxTheme>
  );
}
