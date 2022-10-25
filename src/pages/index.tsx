import Header from '@/components/layout/Header';
import Section from '@/components/layout/Section';
import Main from '@/components/layout/Main';
import Flex from '@/components/layout/Flex';
import Paragraph from '@/components/molecules/Paragraph';
import H3 from '@/components/atoms/H3';
import Company from '@/components/atoms/Company';
import WorkPeriod from '@/components/atoms/WorkPeriod';
import P from '@/components/atoms/P';
import H4 from '@/components/atoms/H4';
import Badge from '@/components/atoms/Badge';
import BadgeGroup from '@/components/molecules/BadgeBlock';

import data from '../mock/data';

export default function Home() {
  const {
    profileImage,
    personalInfo,
    contact,
    links,
    about,
    workExperience,
    skillNTools,
  } = data;

  return (
    <div className="flex flex-col w-screen md:w-10/12 m-auto">
      <Header.Root>
        <Header.ProfileImage {...profileImage} />
        <Header.Details>
          <Header.PersonalInfo {...personalInfo} />
          <Header.Contact {...contact} />
        </Header.Details>
        <Header.Links {...links} />
      </Header.Root>
      <Main>
        <Section.Root id="about">
          <Section.Title>About</Section.Title>
          <Section.Divider />
          <Section.Content>
            <P>{about}</P>
          </Section.Content>
        </Section.Root>
        <Flex.Root>
          <Flex.Item flex="1">
            <Section.Root id="work_experience">
              <Section.Title>Work Experience</Section.Title>
              <Section.Divider />
              <Section.Content>
                {workExperience.map((i) => (
                  <Paragraph.Root>
                    <Paragraph.Header>
                      <Paragraph.Main>
                        <H3>{i.jobTitle}</H3>
                        <WorkPeriod>{i.period}</WorkPeriod>
                      </Paragraph.Main>
                      <Paragraph.Label>
                        <Company>{i.company}</Company>
                      </Paragraph.Label>
                    </Paragraph.Header>
                    <Paragraph.Content>
                      <P>{i.jobDescription}</P>
                    </Paragraph.Content>
                    {i.stack.length > 0 && (
                      <Paragraph.Footer>
                        <H4>Stack:</H4>
                        <div className="flex flex-wrap">
                          {i.stack.map((i) => (
                            <Badge>{i}</Badge>
                          ))}
                        </div>
                      </Paragraph.Footer>
                    )}
                  </Paragraph.Root>
                ))}
              </Section.Content>
            </Section.Root>
          </Flex.Item>
          <Flex.Item flex="auto">
            <Section.Root id="skills_n_tools">
              <Section.Title>Skills & Tools</Section.Title>
              <Section.Divider />
              <Section.Content>
                <BadgeGroup.Block>
                  {Object.entries(skillNTools).map((e) => (
                    <>
                      <BadgeGroup.Title>
                        {e[0].replace(/([a-z])([A-Z])/g, `$1 $2`)}
                      </BadgeGroup.Title>
                      <BadgeGroup.List list={e[1]} />
                    </>
                  ))}
                </BadgeGroup.Block>
              </Section.Content>
            </Section.Root>
          </Flex.Item>
        </Flex.Root>
        <Section.Root id="education">
          <Section.Title>Education</Section.Title>
          <Section.Divider />
          <Section.Content>
            <P>{about}</P>
          </Section.Content>
        </Section.Root>
      </Main>
    </div>
  );
}
