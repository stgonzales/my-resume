import Link from 'next/link';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  url: string;
  description: string;
}

const Anchor = ({ children, url, description }: Props) => {
  return (
    <div className="flex gap-2 align-center text-base">
      {children}
      <Link href={url}>{description}</Link>
    </div>
  );
};

export default Anchor;
