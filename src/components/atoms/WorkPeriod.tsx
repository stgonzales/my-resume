import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const WorkPeriod = ({ children }: Props) => {
  return <p className="text-sm text-gray-400">{children}</p>;
};

export default WorkPeriod;
