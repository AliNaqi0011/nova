export default function Interests({ interests }: { interests: string[] }) {
  return (
    <section>
      <h2 className="text-base font-bold text-gray-800 tracking-wider border-b-2 border-gray-300 pb-1 mb-3">
        INTERESTS
      </h2>
      <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-gray-600">
        {interests.map((interest) => (
          <p key={interest}>{interest}</p>
        ))}
      </div>
    </section>
  );
}
