import { ReactNode } from 'react';

export interface FlexRoot {
  children: ReactNode;
}

export interface FlexItem {
  children: ReactNode;
  flex?: '1' | 'auto' | 'none' | 'initial';
}

const FlexRoot = ({ children }: FlexRoot) => {
  return (
    <div className={`flex flex-col xl:flex-row md:gap-12`}>{children}</div>
  );
};

const FlexItem = ({ children, flex = '1' }: FlexItem) => {
  return <div className={`flex-${flex}`}>{children}</div>;
};

export default {
  Root: FlexRoot,
  Item: FlexItem,
};
