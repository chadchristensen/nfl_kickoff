import h from '../helpers.ts';
import ClockSection from './ClockSection.tsx';

type CountdownProps = {
  kickoffTimeInMilliseconds: number;
}

export default function Countdown({ kickoffTimeInMilliseconds }: CountdownProps) {
  let days, hours, minutes, seconds;

  if (kickoffTimeInMilliseconds > 0) {
    days = h.getDaysFromMilliseconds(kickoffTimeInMilliseconds);
    hours = h.getHoursFromMilliseconds(kickoffTimeInMilliseconds);
    minutes = h.getMinutesFromMilliseconds(kickoffTimeInMilliseconds);
    seconds = h.getSecondsFromMilliseconds(kickoffTimeInMilliseconds);
  } else {
    days = 0;
    hours = 0;
    minutes = 0;
    seconds = 0;
  }
  return (
    <div className='inline-flex gap-2 sm:gap-8 bg-gray-950 px-8 py-4 rounded-sm'>
      <ClockSection
        value={days}
        label="days"
      />
      <ClockSection
        value={hours}
        label="hours"
      />
      <ClockSection
        value={minutes}
        label="minutes"
      />
      <ClockSection
        value={seconds}
        label="seconds"
      />
    </div >
  );
}
