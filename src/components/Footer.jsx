import Home from "./../assets/home.svg";
import Tv from "./../assets/tv.svg";
import Menu from "./../assets/menu.svg";
import Replay from "./../assets/replay.svg";
import Bookmark from "./../assets/bookmark.svg";

export const Footer = () => {
  return (
    <div className="flex flex-row justify-between align-middle sm:mt-2 sm:ml-12 text-white">
      <img
        className="flex sm:hidden object-contain h-[2.2rem]"
        src={Home}
        alt="homeIcon"
      />
      <img
        className="flex sm:hidden object-contain h-[2.2rem]"
        src={Tv}
        alt="tvIcon"
      />
      <img
        className="flex sm:hidden object-contain h-[2.2rem]"
        src={Menu}
        alt="menuIcon"
      />
      <img
        className="flex sm:hidden object-contain h-[2.2rem]"
        src={Replay}
        alt="replayIcon"
      />
      <img
        className="flex sm:hidden object-contain h-[2.2rem]"
        src={Bookmark}
        alt="bookmarkIcon"
      />

      <div className="hidden sm:flex sm:font-bold">About</div>
      <div className="hidden sm:flex sm:font-bold">The team</div>
      <div className="hidden sm:flex sm:font-bold sm:mr-4">
        © Copyright 2023 Norigin Media. All Rights Reserved. Privacy Policy
      </div>
    </div>
  );
};
