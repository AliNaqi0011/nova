export default function Footer({ name }: { name: string }) {
  return (
    <footer className="mt-auto p-6">
      <p className="text-xs text-center italic">
        I hereby certify that the above information is true and correct according to the best of my
        knowledge and belief.
      </p>
      <p className="text-sm text-center font-bold uppercase mt-4 border-t-2 border-black pt-2 mx-auto w-1/2">
        {name}
        <br />
        <span className="font-normal normal-case">Applicant</span>
      </p>
    </footer>
  );
}
