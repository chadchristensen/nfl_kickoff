type DateDisplayProps = {
  kickoffTime: string;
}

export default function DateDisplay({ kickoffTime }: DateDisplayProps) {
  return (
    <h2>
      {new Date(kickoffTime).toLocaleString('en-us', {
        dateStyle: 'full',
        timeStyle: 'short'
      })}
    </h2>

  )
}
