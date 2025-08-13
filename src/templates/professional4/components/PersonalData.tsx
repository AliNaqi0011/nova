const DataItem = ({ label, value }: { label: string; value: string | number }) => (
  <p className="text-xs">
    {label}: <span className="font-semibold">{value}</span>
  </p>
);

export interface PersonalDataProps {
  birthday: string | number;
  birthPlace: string | number;
  age: string | number;
  civilStatus: string | number;
  religion: string | number;
  nationality: string | number;
  gender: string | number;
  height: string | number;
  weight: string | number;
}

export default function PersonalData({ data }: { data: PersonalDataProps }) {
  return (
    <section className="my-4">
      <h3 className="font-bold text-sm uppercase text-[#2c3e50] mb-3">PERSONAL DATA</h3>
      <div className="space-y-1">
        <DataItem label="Birthday" value={data.birthday} />
        <DataItem label="Birth Place" value={data.birthPlace} />
        <DataItem label="Age" value={data.age} />
        <DataItem label="Civil Status" value={data.civilStatus} />
        <DataItem label="Religion" value={data.religion} />
        <DataItem label="Nationality" value={data.nationality} />
        <DataItem label="Gender" value={data.gender} />
        <DataItem label="Height" value={data.height} />
        <DataItem label="Weight" value={data.weight} />
      </div>
    </section>
  );
}
