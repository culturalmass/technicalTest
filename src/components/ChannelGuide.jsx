import { parseHour, parseSchedules, widthChunk } from "../utils";

export const ChannelGuide = ({
  data,
  channel,
  time,
  widthBLock,
  handleClick,
}) => {
  const blockMargin = 0.063;
  const numberOfBlocks = 24;

  return (
    <div
      className="relative flex h-[4rem] ml-[8.75rem]"
      style={{ minWidth: `${widthBLock * numberOfBlocks}rem` }}
      //NUMBER OF BLOCKS 24
    >
      {parseSchedules({ channel: channel, data: data, time: time })?.map(
        (program, index) => (
          <div
            key={index}
            className={`${
              program.isActive
                ? "bg-[#393939]"
                : "bg-[#101010] border-[#505050] "
            } border-[0.125rem]  rounded-xl`}
            style={{
              width: widthChunk({
                data: program.size,
                width: widthBLock,
                margin: blockMargin,
              }),
              margin: `${blockMargin}rem`,
            }}
            onClick={() => {
              handleClick({ channel: channel, program: program });
            }}
          >
            <div className="flex flex-col items-center text-center mt-[0.15rem] cursor-pointer">
              <span
                className={`${
                  program.isActive
                    ? "flex text-[0.75rem] font-bold"
                    : "flex text-[0.688rem]"
                }`}
              >
                {program.title}
              </span>
              <span
                className={`${
                  program.isActive
                    ? "flex text-[0.813rem] font-bold"
                    : "flex text-[0.688rem]"
                }`}
              >
                {parseHour(program.start) + " - " + parseHour(program.end)}
              </span>
            </div>
          </div>
        )
      )}
    </div>
  );
};
