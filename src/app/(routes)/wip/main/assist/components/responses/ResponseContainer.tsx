import React from 'react';
import { interFont } from '@/app/fonts';
import { ResponseContainerProps, ResponseData } from '../../types/responses';
import { LoadingComponent } from './LoadingComponent';
import { VariantText, VariantLoading, VariantAgent, VariantAgentTabs, VariantRoast, VariantFeedback, VariantPodcast, VariantCollab } from './variants';

export function ResponseContainer({ response, messageId, isLoading, onPromptClick }: ResponseContainerProps) {
  // Show loading component if message is in loading state
  if (isLoading) {
    return <VariantLoading content="Searching files, reading the documentation and creating a report" />;
  }

  // Render different response types using variants
  switch (response.type) {
    case 'text':
      return <VariantText content={response.content} />;

    case 'loading':
      return <VariantLoading content={response.content} />;

    case 'multi-agent':
      return <VariantAgent content="Initated the agent process" />;

    case 'code':
      return <VariantAgentTabs content="Initated the agent process" />;

    case 'sources':
      return <VariantText content={response.content} />;

    case 'research':
      return <VariantText content={response.content} />;

    case 'roast':
      return <VariantRoast content={response.content} />;

    case 'feedback':
      return <VariantFeedback content={response.content} />;

    case 'podcast':
      return <VariantPodcast content={response.content} />;

    case 'collab':
      return <VariantCollab content={response.content} />;

    default:
      // Fallback to text variant for unknown types
      return <VariantText content={response.content} />;
  }
}
