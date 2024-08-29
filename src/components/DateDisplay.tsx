type DateDisplayProps = {
  kickoffTime: string;
}

export default function DateDisplay({ kickoffTime }: DateDisplayProps) {
  return (
    <h2 className="font-bold text-xl text-gray-800">
      {new Date(kickoffTime).toLocaleString('en-us', {
        dateStyle: 'full',
        timeStyle: 'short'
      })}
    </h2>

  )
}
