type DateDisplayProps = {
  kickoffTime: string;
}

export default function DateDisplay({ kickoffTime }: DateDisplayProps) {
  return (
    <span className="font-bold text-xl">
      {new Date(kickoffTime).toLocaleString('en-us', {
        dateStyle: 'full',
        timeStyle: 'short'
      })}
    </span>

  )
}
