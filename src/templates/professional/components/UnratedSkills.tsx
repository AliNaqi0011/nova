import { ISkillItem } from '@/stores/skill.interface';
import { useThemes } from '@/stores/themes';
import styled from '@emotion/styled';

const Badge = styled.span`
  border: 1px solid ${(props: { color: string }) => props.color};
`;

export default function UnratedSkills({ items }: { items: ISkillItem[] }) {
  const { selectedTheme } = useThemes();
  return (
    <div className="flex gap-3 flex-wrap">
      {items.map((value) => (
        <Badge
          key={value.name}
          color={selectedTheme.highlighterColor}
          className="p-1 rounded-md border border-solid"
        >
          {value.name}
        </Badge>
      ))}
    </div>
  );
}
