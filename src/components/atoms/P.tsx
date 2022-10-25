import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const P = ({ children }: Props) => {
  return <p className="text-slate-700">{children}</p>;
};

export default P;
