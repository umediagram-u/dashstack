import { useRouter } from "next/navigation";

const Button = ({
  width = "238px",
  height = "43px",
  fontSize = "14px",
  text,
  bg = "#4880FF",
  color = "#fff",
  route = null,
  callback = null,
  tracking = "normal",
  ringColor = null,
  className = "",
  isDisabled = false,
}) => {
  const router = useRouter();
  return !isDisabled ? (
    <button
      onClick={() => {
        if (route != null) {
          router.push(route, { scroll: false });
        }

        if (callback != null) {
          callback();
        }
      }}
      className={`flex justify-center items-center rounded-lg font-bold transition-all ease-in duration-300 hover:opacity-90 outline-none focus:ring-2 ring-offset-1`}
      style={{
        width: width,
        height: height,
        "--tw-ring-color": ringColor ? ringColor : bg,
        "--tw-ring-opacity": 1,
        color: color,
        fontSize: fontSize,
        letterSpacing: tracking,
        background: bg,
      }}
    >
      {text}
    </button>
  ) : (
    <button
      onClick={() => {
        if (route != null) {
          router.push(route, { scroll: false });
        }

        if (callback != null) {
          callback();
        }
      }}
      className={`flex justify-center items-center rounded-lg font-bold transition-all ease-in duration-300 hover:opacity-90 outline-none focus:ring-2 ring-offset-1`}
      style={{
        width: width,
        height: height,
        "--tw-ring-color": ringColor ? ringColor : bg,
        "--tw-ring-opacity": 1,
        color: color,
        fontSize: fontSize,
        letterSpacing: tracking,
        background: bg + "cc",
      }}
      disabled="disabled"
    >
      {text}
    </button>
  );
};

export default Button;
