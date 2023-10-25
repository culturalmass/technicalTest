import { styles } from "../styles";
import Start from "./../assets/start.svg";

export const SideBarList = ({ data }) => {
  return (
    <div className="absolute flex flex-col justify-center align-middle left-[2%] sm:left-[5%] z-20">
      <div className={styles.startIconContainer}>
        <img
          className="object-contain h-[2.6rem]"
          src={Start}
          alt="startIcon"
        />
      </div>
      <div className="mt-10">
        {data.map((channel, index) => (
          <div key={`${index}+${channel}`} className={styles.channelContainer}>
            <img
              src={channel.images.logo}
              alt={channel.title}
              className="object-contain scale-75"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
