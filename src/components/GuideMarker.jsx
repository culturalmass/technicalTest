export const GuideMarker = ({ displayHour }) => {
  return (
    <div
      id="currentHour"
      className={`relative flex w-1 h-[36.25rem] border-2 border-white rounded-3xl z-10 top-[2.188rem]`}
      style={{ left: `${displayHour.currentChunk}rem` }}
    />
  );
};
