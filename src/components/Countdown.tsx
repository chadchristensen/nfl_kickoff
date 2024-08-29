import h from '../helpers.ts';
import ClockSection from './ClockSection.tsx';

type CountdownProps = {
  kickoffTimeInMilliseconds: number;
}

export default function Countdown({ kickoffTimeInMilliseconds }: CountdownProps) {
  return (
    <div className='inline-flex gap-2 sm:gap-8 bg-gray-950 px-8 py-4 rounded-sm'>
      <ClockSection value={h.getDaysFromMilliseconds(kickoffTimeInMilliseconds)} label="days" />
      <ClockSection value={h.getHoursFromMilliseconds(kickoffTimeInMilliseconds)} label="hours" />
      <ClockSection
        value={h.getMinutesFromMilliseconds(kickoffTimeInMilliseconds)}
        label="minutes"
      />
      <ClockSection
        value={h.getSecondsFromMilliseconds(kickoffTimeInMilliseconds)}
        label="seconds"
      />
    </div>
  );
}
