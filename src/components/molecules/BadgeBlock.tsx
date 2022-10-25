import { ReactNode } from 'react';
import Badge from '../atoms/Badge';
import H4 from '../atoms/H4';

interface Props {
  children: ReactNode;
}

interface BadgeGroupTitle {
  children: ReactNode;
}

interface BadgeList {
  list: string[];
}

const BadgeBlock = ({ children }: Props) => {
  return <div className="flex flex-col gap-2">{children}</div>;
};

const BadgeList = ({ list }) => {
  return (
    <div className="flex flex-wrap mb-4">
      {list.map((i) => (
        <Badge>{i}</Badge>
      ))}
    </div>
  );
};

const BadgeTitle = ({ children }: BadgeGroupTitle) => {
  return <H4>{children}</H4>;
};

export default {
  Block: BadgeBlock,
  Title: BadgeTitle,
  List: BadgeList,
};
