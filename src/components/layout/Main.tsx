import { ReactNode } from 'react';

export interface MainProps {
  children: ReactNode;
}

const Main = ({ children }: MainProps) => {
  return <main className="w-11/12 mx-auto pt-12">{children}</main>;
};

export default Main;
