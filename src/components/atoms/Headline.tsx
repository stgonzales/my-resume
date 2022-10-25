import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Headline = ({ children }: Props) => {
  return <h2 className="text-2xl">{children}</h2>;
};

export default Headline;
