import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const H3 = ({ children }: Props) => {
  return <h3 className="text-lg font-bold text-gray-900">{children}</h3>;
};

export default H3;
