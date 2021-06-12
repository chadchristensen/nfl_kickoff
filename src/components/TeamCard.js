import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const StyledCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 175px;
  height: 175px;
  padding: 1em 2.5em;
  margin: 1em;
  border: 1px solid #ddd;
  background-color: #fff;
  border-radius: 5px;

  img {
    width: 100px;
    height: 100px;
  }

  @media(max-width: 820px) {
    h2 {
      font-size: 1em;
    }
    
    img {
      width: 45px;
      height: 45px;
    }
  }
`

function TeamCard({teamName, teamLogoUrl}) {
  return (
    <AnimatePresence>
      <StyledCard
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0}}
        className="team-card"
      >
        <h2>{teamName}</h2>
        <img src={`${teamLogoUrl}`} alt={`${teamName} Logo`} />
      </StyledCard>
    </AnimatePresence>
  );
}

export default React.memo(TeamCard);
