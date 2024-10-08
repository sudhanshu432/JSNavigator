function isEligible(mathScore , englishScore , scienceScore) {
  
    let eligibleForScholarship = (mathScore >80 && englishScore > 80) || (mathScore >80 && 	 scienceScore>80) || (englishScore>80 && scienceScore>80);
   let scienceFairParticipation = (mathScore + englishScore + scienceScore)>= 250;
   let eligibleForAward = eligibleForScholarship || scienceFairParticipation;
      
  return eligibleForAward
    
  }
