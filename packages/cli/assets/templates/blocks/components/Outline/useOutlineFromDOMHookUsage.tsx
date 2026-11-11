// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

import {useRef, useState} from 'react';
import {Button} from '@astryxdesign/core/Button';
import {HStack, VStack} from '@astryxdesign/core/Layout';
import {Outline, useOutlineFromDOM} from '@astryxdesign/core/Outline';
import {Text} from '@astryxdesign/core/Text';

export default function UseOutlineFromDOMHookUsage() {
  const articleRef = useRef<HTMLDivElement>(null);
  const [hasDetails, setHasDetails] = useState(false);
  const items = useOutlineFromDOM(articleRef);

  return (
    <HStack gap={6} align="start" width="100%">
      <VStack gap={3} align="start" style={{flex: 1}}>
        <div
          ref={articleRef}
          style={{
            maxHeight: 260,
            overflowY: 'auto',
            padding: 16,
            border: '1px solid var(--color-border-default)',
            borderRadius: 8,
            width: '100%',
          }}>
          <h2 id="dom-overview">Overview</h2>
          <Text>
            The hook reads headings that are already present in the rendered
            document.
          </Text>
          <h2 id="dom-setup">Setup</h2>
          <Text>
            Give each heading a stable id so the Outline can link to it.
          </Text>
          {hasDetails ? (
            <h3 id="dom-details">Details added after the first render</h3>
          ) : null}
        </div>
        <Button
          label={hasDetails ? 'Remove section' : 'Add section'}
          variant="secondary"
          size="sm"
          onClick={() => setHasDetails(current => !current)}
        />
      </VStack>
      <VStack gap={2} align="start" style={{width: 190}}>
        <Text type="supporting" color="secondary">
          {items.length} headings found
        </Text>
        <Outline items={items} scrollContainerRef={articleRef} offset={8} />
      </VStack>
    </HStack>
  );
}
