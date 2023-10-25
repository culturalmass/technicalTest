import { useState, useEffect } from "react";
import { currentChunk } from "../utils";
import { styles } from "../styles";
import {
  ChannelGuide,
  GuideMarker,
  ScrollBtn,
  NavBar,
  Footer,
  Modal,
  SideBarList,
  DatePicker,
  DisplayHours,
} from "../components";

export const Home = ({ data }) => {
  const witdhBlock = 21.875;
  const [displayHour, setDisplayHour] = useState({
    currentHour: new Date().toLocaleString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    }),
    currentChunk: currentChunk(witdhBlock),
  });
  const [activeModal, setActiveModal] = useState({
    active: false,
    channel: "",
    program: "",
  });

  const navigateCurrent = () => {
    const element = document
      .getElementById("currentHour")
      .scrollIntoView({ behavior: "instant", inline: "center" });
    return element;
  };

  const handleClick = ({ channel, program }) => {
    setActiveModal({
      active: true,
      channel: channel,
      program: program,
    });
  };
  const handleCloseModal = () => {
    setActiveModal({
      active: false,
      channel: "",
      program: "",
    });
  };

  //UseEffect to navigate tu currentHour

  useEffect(() => {
    setInterval(() => {
      setDisplayHour({
        currentHour: new Date().toLocaleString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
        }),
        currentChunk: currentChunk(witdhBlock),
      });
    }, 60000);
    navigateCurrent();
  }, []);
  return (
    <>
      <Modal
        active={activeModal.active}
        data={data}
        channel={activeModal.channel}
        program={activeModal.program}
        closeModal={handleCloseModal}
      />
      <NavBar />
      <div className={styles.bodyContainer}>
        <SideBarList data={data} />
        <DatePicker displayHour={displayHour} />
        <div className={styles.contentWrapper}>
          <GuideMarker displayHour={displayHour} />
          <DisplayHours witdhBlock={witdhBlock} />

          {data.map((channel, index) => (
            <ChannelGuide
              key={`${channel}+${index}`}
              data={data}
              channel={index}
              time={displayHour.currentHour}
              widthBLock={witdhBlock}
              handleClick={handleClick}
            />
          ))}
          <ScrollBtn navigate={navigateCurrent} />
        </div>
      </div>
      <Footer />
    </>
  );
};
