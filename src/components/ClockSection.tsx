type ClockSectionProps = {
  value: number;
  label: string;
};
// TODO: Change from all divs
export default function ClockSection({ value, label }: ClockSectionProps) {
  return (
    <div className="flex flex-col items-center">
      <div className='text-red-600 text-[2em] font-semibold'>{value}</div>
      <div className='text-gray-50 text-sm'>{label.toUpperCase()}</div>
    </div>
  );
}
