import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const ParagraphRoot = ({ children }: Props) => {
  return <article className="flex flex-col gap-2">{children}</article>;
};

const ParagraphHeader = ({ children }: Props) => {
  return <div className="flex">{children}</div>;
};

const ParagraphMain = ({ children }: Props) => {
  return <div className="flex-1">{children}</div>;
};

const ParagraphLabel = ({ children }: Props) => {
  return <div>{children}</div>;
};

const ParagraphContent = ({ children }: Props) => {
  return <div>{children}</div>;
};

const ParagraphFooter = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default {
  Root: ParagraphRoot,
  Header: ParagraphHeader,
  Main: ParagraphMain,
  Label: ParagraphLabel,
  Content: ParagraphContent,
  Footer: ParagraphFooter,
};
