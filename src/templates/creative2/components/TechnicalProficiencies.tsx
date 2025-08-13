import SectionTitle from './SectionTitle';

export default function TechnicalProficiencies({ text }: { text: string }) {
  return (
    <section>
      <SectionTitle>TECHNICAL PROFICIENCIES</SectionTitle>
      <p className="text-xs mt-2">{text}</p>
    </section>
  );
}
