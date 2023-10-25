import Back from "./../assets/back.svg";
import Search from "./../assets/search.svg";
import Play from "./../assets/play.svg";
import Close from "./../assets/close.svg";
import { styles } from "../styles";

export const Modal = ({ active, channel, program, closeModal, data }) => {
  return (
    <>
      {active && (
        <div
          className={`
            ${!active && "hidden"}
          ${styles.modalWrapper}`}
        >
          <div className={styles.modalNavBar}>
            <img
              className="object-contain h-8 cursor-pointer"
              src={Back}
              alt="backIcon"
              onClick={() => closeModal()}
            />
            <img
              className="object-contain h-[2.625rem] sm:hidden"
              src="https://noriginmedia.com/wp-content/uploads/2019/08/NM_logo_dark.png"
              alt="mainLogo"
            />
            <img
              className="object-contain h-8 sm:cursor-pointer"
              src={window.innerWidth < 640 ? Search : Close}
              alt={window.innerWidth < 640 ? "searchIcon" : "closeIcon"}
              onClick={() => {
                window.innerWidth > 640 && closeModal();
              }}
            />
          </div>
          <div className="absolute top-[11rem] left-[11rem] opacity-60">
            <img
              className="object-contain h-[4rem]"
              src={Play}
              alt="playLogo"
            />
          </div>
          <img
            className="object-contain h-[36.5rem]"
            src={program.poster}
            alt={program.title}
          />
          <div className="flex sm:flex-col items-center ml-4 sm:ml-[2.5rem] sm:mb-[20rem]">
            <div className={styles.channelLogoContainer}>
              <img
                src={data[channel]?.images?.logo}
                alt={data[channel]?.title}
                className="object-contain sm:ml-4"
              />
            </div>
            <div className="flex flex-col sm:absolute sm:mt-10 items-left ml-2 sm:ml-20">
              <div className="text-2xl sm:text-3xl font-bold">
                {data[channel]?.title}
              </div>
              <div className="text-xl font-bold">{program.title}</div>

              <div className="flex flex-row text-sm font-semibold">
                <span className="mr-2">{program.year}</span>
                <span>{program.genre}</span>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col text-sm mr-4 sm:mr-10 mt-4 sm:mt-[12rem] ml-4 sm:-ml-[12rem]">
              <span className="ml-1 text-justify sm:text-lg">
                {program.description}
              </span>
              <span className="font-semibold mt-4 sm:text-lg">
                {program.starts}
              </span>
              <span className="font-semibold sm:text-lg">
                {program.creators}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
