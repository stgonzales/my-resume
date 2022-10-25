import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  DeviceMobile,
  Envelope,
  GithubLogo,
  LinkedinLogo,
  TwitterLogo,
} from 'phosphor-react';
import Name from '@/components/atoms/Name';
import Headline from '@/components/atoms/Headline';
import Anchor from '../atoms/Anchor';

export interface HeaderProps {
  children: ReactNode;
}

export interface ProfilePicProps {
  id: string;
  src: string;
  alt: string;
}

export interface DetailsProps {
  children: ReactNode;
}

export interface PersonalInfoProps {
  fullname: string;
  headline: string;
}

export interface ContactProps {
  email: string;
  phone: string;
}

export interface LinksProps {
  linkedin: string;
  twitter: string;
  github: string;
}

const HeaderRoot = ({ children }: HeaderProps) => {
  return (
    <header className="bg-slate-800 text-slate-100 flex flex-col gap-2 align-center w-full py-4 md:flex-row md:gap-4 md:p-0 md:py-0">
      {children}
    </header>
  );
};

const HeaderProfileImage = ({ id, src, alt }: ProfilePicProps) => {
  return (
    <div id="profile-pic" className="m-auto pb-4 md:m-0 md:pb-0">
      <Image
        id={id}
        src={src}
        alt={alt}
        width={200}
        height={200}
        className="rounded-full md:rounded-none"
      />
    </div>
  );
};

const HeaderDetails = ({ children }: DetailsProps) => {
  return (
    <div
      id="details"
      className="flex flex-col items-center justify-center gap-4 flex-1 md:items-start"
    >
      {children}
    </div>
  );
};

const HeaderPersonalInfo = ({ fullname, headline }: PersonalInfoProps) => {
  return (
    <div id="name-title" className="flex flex-col items-center md:items-start">
      <Name>{fullname}</Name>
      <Headline>{headline}</Headline>
    </div>
  );
};

const HeaderContact = ({ email, phone }: ContactProps) => {
  return (
    <div id="contact" className="flex flex-col gap-1 md:items-start">
      <Anchor url={`mailto:${email}`} description={email}>
        <Envelope size={24} />
      </Anchor>
      <Anchor url={`tel:${phone}`} description={phone}>
        <DeviceMobile size={24} />
      </Anchor>
    </div>
  );
};

const HeaderLinks = ({ linkedin, twitter, github }: LinksProps) => {
  return (
    <div id="links" className="flex justify-center gap-4 py-3 pr-6 md:flex-col">
      <Anchor url={linkedin} description="LinkeIn">
        <LinkedinLogo size={24} />
      </Anchor>
      <Anchor url={twitter} description="Twitter">
        <TwitterLogo size={24} />
      </Anchor>
      <Anchor url={github} description="Github">
        <GithubLogo size={24} />
      </Anchor>
    </div>
  );
};

export default {
  Root: HeaderRoot,
  ProfileImage: HeaderProfileImage,
  Details: HeaderDetails,
  PersonalInfo: HeaderPersonalInfo,
  Contact: HeaderContact,
  Links: HeaderLinks,
};
