import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Name = ({ children }: Props) => {
  return <h1 className="text-4xl font-bold">{children}</h1>;
};

export default Name;
