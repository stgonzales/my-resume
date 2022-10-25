import { Children, ReactHTMLElement, ReactNode } from 'react';

export interface SectionRoot {
  id: string;
  children: ReactNode;
}

export interface Props {
  children: ReactNode;
}

const SectionRoot = ({ children, id }: SectionRoot) => {
  return (
    <section id={`section_${id}`} className="mb-12">
      {children}
    </section>
  );
};

const SectionTitle = ({ children }: Props) => {
  return (
    <h2 className="text-xl uppercase text-slate-800 font-bold">{children}</h2>
  );
};

const SectionContent = ({ children }: Props) => {
  return <div className="flex flex-col gap-14">{children}</div>;
};

const SectionDivider = () => {
  return <div className="w-full h-px bg-slate-600 my-4"></div>;
};

export default {
  Root: SectionRoot,
  Title: SectionTitle,
  Content: SectionContent,
  Divider: SectionDivider,
};
