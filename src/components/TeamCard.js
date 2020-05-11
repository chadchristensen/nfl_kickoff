import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function TeamCard({teamName, teamLogoUrl}) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0}}
        className="team-card"
      >
        <h2>{teamName}</h2>
        <img src={`${teamLogoUrl}`} alt={`${teamName} Logo`} />
      </motion.div>
    </AnimatePresence>
  );
}

export default React.memo(TeamCard);
