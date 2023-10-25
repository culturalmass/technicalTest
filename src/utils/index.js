export const hours = [
  {
    twenty_four_hour_format: "00:00",
  },
  {
    twenty_four_hour_format: "01:00",
  },
  {
    twenty_four_hour_format: "02:00",
  },
  {
    twenty_four_hour_format: "03:00",
  },
  {
    twenty_four_hour_format: "04:00",
  },
  {
    twenty_four_hour_format: "05:00",
  },
  {
    twenty_four_hour_format: "06:00",
  },
  {
    twenty_four_hour_format: "07:00",
  },
  {
    twenty_four_hour_format: "08:00",
  },
  {
    twenty_four_hour_format: "09:00",
  },
  {
    twenty_four_hour_format: "10:00",
  },
  {
    twenty_four_hour_format: "11:00",
  },
  {
    twenty_four_hour_format: "12:00",
  },
  {
    twenty_four_hour_format: "13:00",
  },
  {
    twenty_four_hour_format: "14:00",
  },
  {
    twenty_four_hour_format: "15:00",
  },
  {
    twenty_four_hour_format: "16:00",
  },
  {
    twenty_four_hour_format: "17:00",
  },
  {
    twenty_four_hour_format: "18:00",
  },
  {
    twenty_four_hour_format: "19:00",
  },
  {
    twenty_four_hour_format: "20:00",
  },
  {
    twenty_four_hour_format: "21:00",
  },
  {
    twenty_four_hour_format: "22:00",
  },
  {
    twenty_four_hour_format: "23:00",
  },
];

export const currentDateArray = () => {
  const oneDayInMilisecond = 86400000;
  let daysObject = [];
  for (let i = 5; i >= 0; i--) {
    let days = {
      date: new Date(new Date().getTime() + oneDayInMilisecond * -i)
        .toLocaleString("en-US", { hour12: false })
        .split("/")[1],
      month: new Date(new Date().getTime() + oneDayInMilisecond * -i)
        .toLocaleString("en-US", { hour12: false })
        .split("/")[0],
      day: new Date(
        new Date().getTime() + oneDayInMilisecond * -i
      ).toLocaleString("en-US", {
        weekday: "long",
      }),
    };
    daysObject.push(days);
  }
  for (let i = 1; i <= 5; i++) {
    let days = {
      date: new Date(new Date().getTime() + oneDayInMilisecond * i)
        .toLocaleString("en-US", { hour12: false })
        .split("/")[1],
      month: new Date(new Date().getTime() + oneDayInMilisecond * i)
        .toLocaleString("en-US", { hour12: false })
        .split("/")[0],
      day: new Date(
        new Date().getTime() + oneDayInMilisecond * i
      ).toLocaleString("en-US", {
        weekday: "long",
      }),
    };
    daysObject.push(days);
  }
  console.log(daysObject);
  return daysObject;
};

export const currentDay = new Date().toLocaleString("en-US", {
  weekday: "long",
});
export const currentDate = new Date()
  .toLocaleString("en-US", { hour12: false })
  .split("/");

export const parseHour = (scheduleDate) => {
  let hour = scheduleDate.split("T")[1].split(":");
  return (hour[0] + ":" + hour[1]).toString();
};

const parseChunkSize = ({ start, end }) => {
  let pStart = start.split("T")[1].split(":");
  let pEnd = end.split("T")[1].split(":");
  let result =
    (Number(pEnd[0]) * 60 + Number(pEnd[1])) / 60 -
    (Number(pStart[0]) * 60 + Number(pStart[1])) / 60;
  return result.toFixed(2);
};
const parseMins = (data) => {
  let parseData = data.toString().split(":");
  let result = Number(parseData[0]) * 60 + Number(parseData[1]);
  return result.toFixed(0);
};

export const parseSchedules = ({ channel, data, time }) => {
  const parseChannel = data[channel]?.schedules.map((program) => {
    let programing = {
      title: program.title,
      id: program.id,
      start: program.start,
      end: program.end,
      creators: program.creators,
      description: program.description,
      genre: program.genre,
      poster: program.poster,
      starts: program.starts,
      year: program.year,
      size: parseChunkSize({ start: program.start, end: program.end }),
      isActive:
        Number(parseMins(time)) >=
          Number(parseMins(program.start.split("T")[1])) &&
        Number(parseMins(time)) < Number(parseMins(program.end.split("T")[1]))
          ? true
          : false,
    };
    return programing;
  });
  return parseChannel;
};

export const widthChunk = ({ data, width, margin }) => {
  let style = `${data * Number(width - margin)}rem`;
  return style;
};

export const currentChunk = (witdhBlock) => {
  const currentTime = new Date().toLocaleString("en-US", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  });
  const parseCurrentHour = currentTime.split(":");
  const result =
    (Number(parseCurrentHour[0]) * 60 + Number(parseCurrentHour[1])) / 60;
  //CHECK IF THE HOUR REACH 24 TO START FROM THE INIT
  const style =
    result >= 24 ? witdhBlock : (result + 1) * witdhBlock - witdhBlock / 2;
  const parseStyle = `${Number(style)}`;
  return parseStyle;
};
