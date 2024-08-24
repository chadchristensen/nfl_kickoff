type ClockSectionProps = {
  value: number;
  label: string;
};
// TODO: Change from all divs
export default function ClockSection({ value, label }: ClockSectionProps) {
  return (
    <div>
      <div className='text-red-600'>{value}</div>
      <div>{label.toUpperCase()}</div>
    </div>
  );
}
