import { hours } from "../utils";
import { styles } from "../styles";

export const DisplayHours = ({ witdhBlock }) => {
  return (
    <div className="relative flex -mt-[36.25rem]">
      {hours.map((hour, index) => (
        <div
          key={index}
          className={styles.displayHoursContainer}
          style={{ minWidth: `${witdhBlock}rem` }}
        >
          <span>{hour.twenty_four_hour_format}</span>
          <div className="border-2 h-4" />
        </div>
      ))}
    </div>
  );
};
