import React from 'react';
import { interFont } from '@/app/fonts';
import { ResponseContainerProps, ResponseData } from '../../types/responses';
import { LoadingComponent } from './LoadingComponent';
import { TextResponse } from './TextResponse';
import { ResearchResponseComponent } from './ResearchResponse';
import { VariantGeneral, VariantLoading, VariantAgent, VariantAgentTabs, VariantRoast, VariantFeedback, VariantPodcast, VariantCollab } from './variants';

export function ResponseContainer({ response, messageId, isLoading, onPromptClick }: ResponseContainerProps) {
  // Show loading component if message is in loading state
  if (isLoading) {
    return <VariantLoading content="Searching files, reading the documentation and creating a report" />;
  }

  // Render different response types using variants
  switch (response.type) {
    case 'text':
      return <VariantGeneral content={response.content} />;

    case 'loading':
      return <VariantLoading content={response.content} />;

    case 'multi-agent':
      return <VariantAgent content="Initated the agent process" />;

    case 'code':
      return <VariantAgentTabs content="Initated the agent process" />;

    case 'sources':
      return (
        <TextResponse 
          response={response} 
          messageId={messageId} 
          onPromptClick={onPromptClick} 
        />
      );

    case 'research':
      return <ResearchResponseComponent response={response} />;

    case 'roast':
      return <VariantRoast content={response.content} />;

    case 'feedback':
      return <VariantFeedback content={response.content} />;

    case 'podcast':
      return <VariantPodcast content={response.content} />;

    case 'collab':
      return <VariantCollab content={response.content} />;

    default:
      // Fallback to general variant for unknown types
      return <VariantGeneral content={response.content} />;
  }
}
