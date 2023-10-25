import Search from "./../assets/search.svg";
import Tv from "./../assets/tv.svg";
import Menu from "./../assets/menu.svg";

export const NavBar = () => {
  return (
    <div className="flex flex-row justify-between bg-[#101010] h-10">
      <img
        className="object-contain h-[2.625rem]"
        src="https://noriginmedia.com/wp-content/uploads/2019/08/NM_logo_dark.png"
        alt="mainLogo"
      />
      <img
        className="hidden sm:flex object-contain h-[2.2rem]"
        src={Menu}
        alt="menuIcon"
      />
      <h1 className="flex text-3xl text-white">
        <span className="flex sm:hidden">Epg</span>
        <span className="hidden sm:flex">Electronic Programme Guide</span>
      </h1>
      <img
        className="hidden sm:flex object-contain h-[2.2rem]"
        src={Tv}
        alt="tvIcon"
      />
      <img
        className="object-contain h-[2.375rem]"
        src={Search}
        alt="searchIcon"
      />
    </div>
  );
};
