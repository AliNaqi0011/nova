import React from 'react';
import { IProfiles } from '@/stores/basic.interface';
import { socialIcons } from '@/helpers/icons';
import { BsGlobe } from 'react-icons/bs';
import styled from '@emotion/styled';
import { useThemes } from '@/stores/themes';
import Color from 'color';

const SectionHolder = styled.div<{ borderColor: string; headerColor: string }>`
  border: 1px solid ${(props) => props.borderColor};
  border-radius: 5px;
  padding: 15px 10px 10px 10px;
  position: relative;

  .header {
    position: absolute;
    top: 0;
    transform: translate(0, -50%);
    background: white;
    padding: 0 5px;
    font-weight: 500;
    color: ${(props) => props.headerColor};
  }

  .social-icons {
    position: absolute;
    top: 0;
    right: 10px;
    transform: translate(0, -50%);
    color: ${(props) => props.headerColor};
  }
`;

function SocialIcons({ profiles, portfolioUrl }: { profiles: IProfiles[]; portfolioUrl?: string }) {
  return (
    <div className="social-icons flex">
      {profiles.map((profile) => {
        const Icon = socialIcons.get(profile.network);

        return (
          Icon &&
          profile.url && (
            <a
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2"
              key={profile.network}
            >
              <Icon className="h-5 w-5 bg-white" />
            </a>
          )
        );
      })}

      {portfolioUrl && (
        <a href={portfolioUrl} target="_blank" rel="noopener noreferrer" className="ml-2">
          <BsGlobe />
        </a>
      )}
    </div>
  );
}

export function Section({
  title,
  children,
  titleClassname = '',
  profiles,
  portfolioUrl,
}: {
  title: string;
  children: React.ReactNode;
  titleClassname?: string;
  profiles?: IProfiles[];
  portfolioUrl?: string;
}) {
  const { selectedTheme } = useThemes();
  const highlighterColor = selectedTheme.highlighterColor || '#ff7875'; // Fallback
  const titleColor = selectedTheme.titleColor || '#1890ff';
  const borderColor = Color(highlighterColor).alpha(0.75).toString();

  return (
    <SectionHolder borderColor={borderColor} headerColor={titleColor}>
      <div className="header flex justify-center items-center gap-1 max-w-[60%]" title={title}>
        <span
          className={`${
            titleClassname ? titleClassname : ''
          } whitespace-nowrap overflow-hidden text-ellipsis`}
        >
          {title}
        </span>
      </div>

      {profiles && <SocialIcons profiles={profiles} portfolioUrl={portfolioUrl} />}

      {children}
    </SectionHolder>
  );
}
