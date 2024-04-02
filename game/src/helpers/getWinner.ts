export const getWinners = (
  userSelection: string,
  aiSelection: string,
  setter: React.Dispatch<React.SetStateAction<'user' | 'AI' | 'draw'>>
) => {
  if (
    (userSelection === 'rockIcon' && aiSelection === 'scissorIcon') ||
    (userSelection === 'scissorIcon' && aiSelection === 'paperIcon') ||
    (userSelection === 'paperIcon' && aiSelection === 'rockIcon') ||
    (userSelection === 'paperIcon' && aiSelection === 'spockIcon') ||
    (userSelection === 'spockIcon' && aiSelection === 'scissorIcon') ||
    (userSelection === 'scissorIcon' && aiSelection === 'lizardIcon') ||
    (userSelection === 'lizardIcon' && aiSelection === 'paperIcon') ||
    (userSelection === 'rockIcon' && aiSelection === 'lizardIcon') ||
    (userSelection === 'lizardIcon' && aiSelection === 'spockIcon') ||
    (userSelection === 'spockIcon' && aiSelection === 'rockIcon')
  ) {
    setter('user');
  } else if (
    (aiSelection === 'scissorIcon' && userSelection === 'paperIcon') ||
    (aiSelection === 'paperIcon' && userSelection === 'spockIcon') ||
    (aiSelection === 'spockIcon' && userSelection === 'scissorIcon') ||
    (aiSelection === 'scissorIcon' && userSelection === 'lizardIcon') ||
    (aiSelection === 'lizardIcon' && userSelection === 'paperIcon') ||
    (aiSelection === 'paperIcon' && userSelection === 'rockIcon') ||
    (aiSelection === 'rockIcon' && userSelection === 'scissorIcon') ||
    (aiSelection === 'rockIcon' && userSelection === 'lizardIcon') ||
    (aiSelection === 'lizardIcon' && userSelection === 'spockIcon') ||
    (aiSelection === 'spockIcon' && userSelection === 'rockIcon')
  ) {
    setter('AI');
  } else {
    setter('draw');
  }
};
