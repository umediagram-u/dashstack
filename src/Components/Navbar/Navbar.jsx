import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@/Components";

import menuIcon from "../../assets/images/menu-icon.svg";
import searchIcon from "../../assets/images/search.svg";
import notificationIcon from "../../assets/images/notification.svg";
import ukFlag from "../../assets/images/uk-flag.png";
import uzFlag from "../../assets/images/uz-flag.webp";
import dropDownIcon from "../../assets/images/drop-down.svg";
import dropDownCircleIcon from "../../assets/images/drop-down-circle.svg";
import avatar from "../../assets/images/avatar.png";

const Navbar = ({ query }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLangListActive, setIsLangListActive] = useState(false);
  const [languages, setLanguages] = useState([
    {
      name: "English",
      img: ukFlag,
      active: false,
    },
    {
      name: "Uzbek",
      img: uzFlag,
      active: true,
    },
  ]);

  const router = useRouter();

  return (
    <div className="navbar w-full h-[70px] flex justify-between items-center bg-transparent pl-[31px] pr-[26px]">
      <div className="navbar-left flex justify-between items-center gap-[25px]">
        <Button
          width="24px"
          height="25px"
          bg="transparent"
          ringColor="#4880FF"
          text={<Image src={menuIcon} width={24} height={25} alt="Menu btn" />}
        />
        <form
          name="search"
          onSubmit={(e) => e.preventDefault()}
          className="relative flex items-center justify-start"
        >
          <label
            htmlFor="search"
            className="absolute left-[16.55px] cursor-text"
          >
            <Image
              width={15.006}
              height={15.007}
              alt="search"
              src={searchIcon}
            />
          </label>
          <input
            onChange={(e) => {
              setSearchQuery(e.target.value);
              //   router.push("?q=" + searchQuery, { scroll: false });
            }}
            id="search"
            name="query"
            placeholder="Search"
            className="bg-[#F5F6FA] rounded-[19px] w-[388px] h-[38px] outline-none focus:ring-2 ring-[#4880FF] ring-offset-1 text-[#202224] text-[14px] font-normal placeholder:text-[#20222480] border-[#D5D5D5] border-solid border-[0.6px] px-[10px] pl-[45px] transition-all duration-300 ease-in"
            value={searchQuery}
          />
        </form>
      </div>
      <div className="right flex justify-start items-center gap-[31px]">
        <button
          type="button"
          className="notification-btn transition-all duration-300 ease-in focus:ring-2 ring-[#4880FF] ring-offset-1 bg-transparent outline-none border-none rounded-lg"
        >
          <Image
            src={notificationIcon}
            width={24}
            height={25.5}
            alt="notification"
          />
        </button>
        <div className="flex justify-start items-center gap-[25px]">
          <div className="relative">
            {languages.map((language, i, arr) => {
              return language.active ? (
                <button
                  onClick={() => setIsLangListActive(!isLangListActive)}
                  key={i}
                  className="lang-changer w-[123.083px] p-1 focus:ring-2 ring-[#4880FF] ring-offset-1 bg-transparent outline-none border-none rounded-md flex justify-start items-center gap-4 transition-all duration-300 ease-in"
                >
                  <Image
                    src={arr[i].img}
                    width={40}
                    height={27}
                    alt="flag"
                    className="rounded-sm"
                  />
                  <span className="text-[14px] text-[#646464] font-semibold flex justify-start items-center gap-[10.92px]">
                    {arr[i].name}
                    <Image
                      src={dropDownIcon}
                      width={8.167}
                      height={4.667}
                      alt="Drop Down"
                      className={`transition-all duration-300 easi-in${
                        isLangListActive ? " rotate-180" : " rotate-0"
                      }`}
                    />
                  </span>
                </button>
              ) : (
                ""
              );
            })}
            <ul
              className={`lang-list bg-[#fff] rounded-lg${
                isLangListActive ? " active" : ""
              } shadow-2xl absolute left-0 top-0 w-[200px] flex flex-col gap-1 transition-all duration-300 ease-in opacity-0 invisible -z-[1]`}
            >
              {languages.map((language, i, arr) => {
                return (
                  <li
                    key={i}
                    className={`w-full ${
                      language.active ? " bg-[#4AD99180]" : ""
                    }`}
                  >
                    <button
                      data-key={i}
                      onClick={(e) => {
                        let oldLangs = languages;
                        let newLangs = [];
                        oldLangs.map((lang) => {
                          if (lang.name == languages[i].name) {
                            lang.active = true;
                            newLangs.push(lang);
                          } else {
                            lang.active = false;
                            newLangs.push(lang);
                          }
                        });
                        /* oldLangs[i].active = true; */
                        setLanguages(newLangs);
                      }}
                      className="p-[25px_15px] w-full h-[27px] focus:ring-2 ring-[#4880FF] ring-offset-1 bg-transparent outline-none border-none rounded-md flex justify-start items-center gap-4 transition-all duration-300 ease-in"
                    >
                      <Image
                        src={arr[i].img}
                        width={40}
                        height={27}
                        alt="flag"
                        className="rounded-sm"
                      />
                      <span className="text-[14px] text-[#646464] font-semibold flex justify-start items-center gap-[10.92px]">
                        {arr[i].name}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          <button className="border-none outline-none focus:ring-2 ring-[#4880FF] ring-offset-1 transition-all duration-300 ease-in bg-transparent rounded-md h-[52px] flex items-center">
            <Image src={avatar} width={50} height={52} alt="avatar" />
            <div className="flex flex-col items-start justify-center gap-[3px] ml-4">
              <h2 className="text-[404040] font-bold text-[14px]">Moni Roy</h2>
              <p className="font-semibold text-[12px] text-[#565656]">Admin</p>
            </div>
            <Image
              className="ml-[26px]"
              src={dropDownCircleIcon}
              width={18}
              height={18}
              alt="drop down"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
