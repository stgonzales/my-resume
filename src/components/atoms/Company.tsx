import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Company = ({ children }: Props) => {
  return <p className="text-sm text-gray-900 font-semibold">{children}</p>;
};

export default Company;
