import { currentDateArray, currentDay } from "../utils";
import { styles } from "../styles";

export const DatePicker = ({ displayHour }) => {
  const boxWidth = 7.45;
  const boxWidthBigScreen = 11.35;
  const boxMarginLeft = 1.2;
  //NUMBER OF BOX FOR TARGET DAY MOBILE 5
  const witdthBoxGuideMobile = (boxWidth + boxMarginLeft) * 5;
  //NUMBER OF BOX FOR TARGET DAY PC 3
  const boxChunkCalculatorPc = boxWidth * 3;
  return (
    <div
      className={styles.datePickerWrapper}
      style={{
        marginLeft: `${
          window.innerWidth <= 640
            ? `${Number(boxMarginLeft)}rem`
            : `${Number(0)}rem`
        }`,
      }}
    >
      {currentDateArray().map((days, index) => (
        <div
          key={`${index}-${days}`}
          className="relative flex flex-col items-center justify-center align-middle h-12 text-[0.875rem]"
          style={{
            minWidth: `${
              window.innerWidth <= 1536
                ? `${Number(boxWidth)}rem`
                : `${Number(boxWidthBigScreen)}rem`
            }`,
            left: `${
              window.innerWidth <= 640
                ? `${Number(
                    -witdthBoxGuideMobile +
                      displayHour.currentChunk / witdthBoxGuideMobile
                  )}rem`
                : `${Number(
                    -boxChunkCalculatorPc +
                      displayHour.currentChunk / boxChunkCalculatorPc
                  )}rem`
            }`,
          }}
        >
          <span
            className={`${
              currentDay === days.day && "font-bold text-[0.975rem]"
            }`}
          >
            {days.day}
          </span>
          <span
            className={`${
              currentDay === days.day && "font-bold text-[0.975rem]"
            }`}
          >
            {days.date}-{days.month}
          </span>
        </div>
      ))}
    </div>
  );
};
