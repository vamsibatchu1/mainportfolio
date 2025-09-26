declare module 'react-syntax-highlighter' {
  import { ComponentType } from 'react';

  export interface SyntaxHighlighterProps {
    children: string;
    language: string;
    style?: any;
    customStyle?: React.CSSProperties;
    codeTagProps?: any;
    showLineNumbers?: boolean;
    lineNumberStyle?: React.CSSProperties;
    className?: string;
    [key: string]: any;
  }

  export const Prism: ComponentType<SyntaxHighlighterProps>;
  export const Light: ComponentType<SyntaxHighlighterProps>;
  export const LightAsync: ComponentType<SyntaxHighlighterProps>;
  export const Dark: ComponentType<SyntaxHighlighterProps>;
  export const DarkAsync: ComponentType<SyntaxHighlighterProps>;
}

declare module 'react-syntax-highlighter/dist/esm/styles/prism' {
  export const oneDark: any;
  export const oneLight: any;
  export const prism: any;
  export const vscDarkPlus: any;
  export const vs: any;
  export const tomorrow: any;
  export const tomorrowNight: any;
  export const tomorrowNightBlue: any;
  export const tomorrowNightBright: any;
  export const tomorrowNightEighties: any;
  export const twilight: any;
  export const vsDark: any;
  export const xonokai: any;
  export const zTouch: any;
}
