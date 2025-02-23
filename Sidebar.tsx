import { useEffect, useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { CiDeliveryTruck } from "react-icons/ci";
import { LiaUserSolid } from "react-icons/lia";
import { CiSearch } from "react-icons/ci";
import { GoProjectRoadmap } from "react-icons/go";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { FiMessageSquare } from "react-icons/fi";
import { TbInvoice } from "react-icons/tb";
import { FiInfo } from "react-icons/fi";
import { MdOutlineSettings } from "react-icons/md";
import { MdOutlineInventory } from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isClose, setClose] = useState(false);
  const [active, setActive] = useState("null");
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  const routes = [
    {
      name: "Dashboard",
      icon: <RxDashboard className="w-5 h-5" />,
      path: "/",
    },
    {
      name: "Inventory",
      icon: <MdOutlineInventory className="w-5 h-5" />,
      path: "/inventory",
    },
    {
      name: "Delivery",
      icon: <CiDeliveryTruck className="w-5 h-5" />,
      path: "/delivery",
    },
    {
      name: "Users",
      icon: <LiaUserSolid className="w-5 h-5" />,
      path: "/users",
    },
    {
      name: "Projects",
      icon: <GoProjectRoadmap className="w-5 h-5" />,
      path: "/projects",
    },
    {
      name: "Invoices",
      icon: <TbInvoice className="w-5 h-5" />,
      path: "/invoices",
    },
    {
      name: "Reports",
      icon: <HiOutlineDocumentReport className="w-5 h-5" />,
      path: "/reports",
    },
    {
      name: "Messages",
      icon: <FiMessageSquare className="w-5 h-5" />,
      path: "/messages",
    },
    {
      section: "1",
    },
    {
      name: "Info",
      icon: <FiInfo className="w-5 h-5" />,
      path: "/info",
    },
    {
      name: "Settings",
      icon: <MdOutlineSettings className="w-5 h-5" />,
      path: "/settings",
    },
  ];

  // Filter routes based on search query
  const filteredRoutes = routes.filter((route) =>
    route.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const stopPropagation = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  useEffect(() => {
    // Jo route ka path match kare, uska name `setActive` me set kar do
    const currentRoute = routes.find(
      (route) => route.path === location.pathname
    );
    if (currentRoute) {
      setActive(currentRoute.name || "");
    }
  }, [location.pathname]);

  return (
    <div
      onClick={() => setClose(true)}
      className={`w-screen lg:w-auto absolute lg:static top-0 left-0 h-screen ${
        !isClose && "bg-[#0000002c]"
      }`}
    >
      <div
        onClick={stopPropagation}
        className={`h-screen bg-white w-[260px] border-r-[1.5px] border-[silver] flex flex-col ${
          isClose ? "w-[70px] -ml-[71px] md:ml-0" : "w-[260px]"
        } transition-all duration-300`}
      >
        <div className="w-full h-[70px] border-b-[1.5px] border-[silver] flex items-center justify-between px-3">
          <span className="flex gap-[8px] items-center">
            <svg
              className="w-11 rounded-md"
              fill="#ffffff"
              viewBox="-168.96 -168.96 849.92 849.92"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff"
            >
              <g
                id="SVGRepo_bgCarrier"
                stroke-width="0"
                transform="translate(0,0), scale(1)"
              >
                <rect
                  x="-168.96"
                  y="-168.96"
                  width="849.92"
                  height="849.92"
                  rx="59.4944"
                  fill="#2370c7"
                  strokeWidth="0"
                ></rect>
              </g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke="#CCCCCC"
                stroke-width="1.024"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <title>ionicons-v5_logos</title>
                <path d="M39.93,149.25l197.4,95.32c5.14,2.45,12,3.73,18.79,3.73s13.65-1.28,18.78-3.73l197.4-95.32c10.38-5,10.38-13.18,0-18.2L274.9,35.73c-5.13-2.45-12-3.73-18.78-3.73s-13.65,1.28-18.79,3.73L39.93,131.05C29.55,136.07,29.55,144.23,39.93,149.25Z"></path>
                <path d="M472.3,246.9s-36.05-17.38-40.83-19.72-6.07-2.21-11.09.12-145.6,70.23-145.6,70.23A45.71,45.71,0,0,1,256,301.27c-6.77,0-13.65-1.29-18.78-3.74,0,0-136.85-66-143.27-69.18C87,225,85,225,78.67,228l-39,18.78c-10.38,5-10.38,13.19,0,18.2L237.1,360.3c5.13,2.45,12,3.73,18.78,3.73s13.65-1.28,18.79-3.73L472.07,265C482.68,260.08,482.68,251.92,472.3,246.9Z"></path>
                <path d="M472.3,362.75S436.25,345.37,431.47,343s-6.07-2.21-11.09.12S274.9,413.5,274.9,413.5a45.74,45.74,0,0,1-18.78,3.73c-6.77,0-13.65-1.28-18.79-3.73,0,0-136.85-66-143.26-69.18-7-3.39-9-3.39-15.29-.35l-39,18.78c-10.39,5-10.39,13.18,0,18.2l197.4,95.32c5.13,2.56,12,3.73,18.78,3.73s13.65-1.28,18.78-3.73L472.18,381C482.68,375.93,482.68,367.77,472.3,362.75Z"></path>
              </g>
            </svg>
            <h1 className={`leading-none mt-2 ${isClose ? "hidden" : "block"}`}>
              Deliro <br />
              <span className="text-sm text-gray-400">Dashboard</span>
            </h1>
          </span>
        </div>
        <div>
          {!isClose ? (
            <div className="p-2 px-4 mt-3">
              <input
                type="text"
                placeholder="Search"
                className={`w-full h-11 border-b-2 border-[silver] px-2 outline-none`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} // Update search query
              />
            </div>
          ) : (
            <div className="flex items-center justify-center my-3 mt-9 cursor-pointer">
              <CiSearch className="w-5 h-5" />
            </div>
          )}
        </div>
        <div className="w-full h-[calc(100vh-70px)] mb-3 overflow-y-auto overflow-x-hidden">
          {/* Mapping through filtered routes */}
          {filteredRoutes.map((route) => (
            <Link to={route.path || ""}>
              <div>
                {route.name === "Info" && (
                  <hr className="w-[calc(100%-20px)] mx-auto my-4 border-[silver] border-b" />
                )}
                <div className="w-full h-10 mb-1 flex items-center">
                  <div
                    className={`h-full w-1.5
                ${active === route.name && "bg-[#3276c3]"}
                `}
                  ></div>
                  <div
                    className={`text-sm h-full font-medium flex items-center ${
                      !isClose ? "gap-3" : "justify-center"
                    } px-2 w-full hover:text-[#2b5a91] ${
                      active === route.name && "text-[#2b5a91] bg-[#29272717]"
                    } cursor-pointer transition-all duration-300`}
                    onClick={() => {
                      setActive(route.name || "");
                      setSearchQuery("");
                    }} // Handle click to set active route
                  >
                    {route.icon}
                    <span className={`${isClose ? "hidden" : "block"}`}>
                      {route.name}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
          {filteredRoutes.length === 0 && (
            <div className="w-full h-10 flex items-center justify-center">
              <span className="text-gray-400">No results found</span>
            </div>
          )}
        </div>
        <div className="w-full h-24 flex justify-center items-end">
          <button
            className={`border flex gap-4 items-center w-full rounded lg:border-t-[silver] p-1.5 py-2.5 lg:py-4 ${
              isClose && "ml-32 w-auto lg:w-full absolute md:static md:ml-0"
            }`}
            onClick={() => setClose(!isClose)}
          >
            <svg
              className={`w-5 ${
                !isClose ? "rotate-180" : ""
              } transition-all duration-300`}
              fill="#000000"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g data-name="Layer 2">
                  {" "}
                  <g data-name="arrowhead-right">
                    {" "}
                    <rect
                      width="24"
                      height="24"
                      transform="rotate(-90 12 12)"
                      opacity="0"
                    ></rect>{" "}
                    <path d="M18.78 11.37l-4.78-6a1 1 0 0 0-1.41-.15 1 1 0 0 0-.15 1.41L16.71 12l-4.48 5.37a1 1 0 0 0 .13 1.41A1 1 0 0 0 13 19a1 1 0 0 0 .77-.36l5-6a1 1 0 0 0 .01-1.27z"></path>{" "}
                    <path d="M7 5.37a1 1 0 0 0-1.61 1.26L9.71 12l-4.48 5.36a1 1 0 0 0 .13 1.41A1 1 0 0 0 6 19a1 1 0 0 0 .77-.36l5-6a1 1 0 0 0 0-1.27z"></path>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
            <span className={`mb-0.5 text-sm ${isClose ? "hidden" : "block"}`}>
              Hide
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
