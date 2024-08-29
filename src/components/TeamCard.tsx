import { motion, AnimatePresence } from 'framer-motion';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type TeamCardProps = {
  teamName: string;
  teamLogoUrl: string;
}

function TeamCard({ teamName, teamLogoUrl }: TeamCardProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
      >
        <Card className='flex flex-col items-center min-w-60 aspect-video'>
          <CardHeader>
            <CardTitle>{teamName}</CardTitle>
          </CardHeader>

          <CardContent>
            <img className='w-24 h-24 object-cover' src={`${teamLogoUrl}`} alt={`${teamName} Logo`} />
          </CardContent>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
}

export default TeamCard;
