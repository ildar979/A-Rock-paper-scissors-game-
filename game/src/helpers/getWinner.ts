export const getWinners = (
  userSelection: string,
  aiSelection: string,
  setter: React.Dispatch<React.SetStateAction<"user" | "AI" | "draw">>,
  setScore: React.Dispatch<React.SetStateAction<number>>
) => {
  if (
    (userSelection === "rockIcon" && aiSelection === "scissorIcon") ||
    (userSelection === "scissorIcon" && aiSelection === "paperIcon") ||
    (userSelection === "paperIcon" && aiSelection === "rockIcon") ||
    (userSelection === "paperIcon" && aiSelection === "spockIcon") ||
    (userSelection === "spockIcon" && aiSelection === "scissorIcon") ||
    (userSelection === "scissorIcon" && aiSelection === "lizardIcon") ||
    (userSelection === "lizardIcon" && aiSelection === "paperIcon") ||
    (userSelection === "rockIcon" && aiSelection === "lizardIcon") ||
    (userSelection === "lizardIcon" && aiSelection === "spockIcon") ||
    (userSelection === "spockIcon" && aiSelection === "rockIcon")
  ) {
    setter('user');
    setScore((prev: number) => prev + 1);
  } else if (
    (aiSelection === "scissorIcon" && userSelection === "paperIcon") ||
    (aiSelection === "paperIcon" && userSelection === "spockIcon") ||
    (aiSelection === "spockIcon" && userSelection === "scissorIcon") ||
    (aiSelection === "scissorIcon" && userSelection === "lizardIcon") ||
    (aiSelection === "lizardIcon" && userSelection === "paperIcon") ||
    (aiSelection === "paperIcon" && userSelection === "rockIcon") ||
    (aiSelection === "rockIcon" && userSelection === "scissorIcon") ||
    (aiSelection === "rockIcon" && userSelection === "lizardIcon") ||
    (aiSelection === "lizardIcon" && userSelection === "spockIcon") ||
    (aiSelection === "spockIcon" && userSelection === "rockIcon")
  ) {
    setter('AI');
    setScore((prev: number) => prev - 1);
  } else {
    setter('draw');
  }
}
