interface ReferenceProps {
  name: string;
  position: string;
  company: string;
  number: string;
}

export default function Reference({ data }: { data: ReferenceProps }) {
  return (
    <section className="my-4">
      <h3 className="font-bold text-sm uppercase text-[#2c3e50] mb-3">REFERENCE</h3>
      <div className="text-xs space-y-1">
        <p>
          Name: <span className="font-semibold">{data.name}</span>
        </p>
        <p>
          Position: <span className="font-semibold">{data.position}</span>
        </p>
        <p>
          Company: <span className="font-semibold">{data.company}</span>
        </p>
        <p>
          Number: <span className="font-semibold">{data.number}</span>
        </p>
      </div>
    </section>
  );
}
