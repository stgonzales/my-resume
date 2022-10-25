import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const H4 = ({ children }: Props) => {
  return (
    <h4 className="text-base font-bold text-gray-900 capitalize">{children}</h4>
  );
};

export default H4;
