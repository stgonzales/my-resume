import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Badge = ({ children }: Props) => {
  return (
    <div className="w-fit bg-slate-800 px-3 py-1 mr-1 mb-2 rounded-3xl">
      <span className="text-slate-300 text-xs">{children}</span>
    </div>
  );
};

export default Badge;
