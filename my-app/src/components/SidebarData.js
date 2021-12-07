import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "홈 화면",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "텐트",
    path: "/tent",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "타프",
    path: "/tarp",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "침낭",
    path: "/sleepingbag",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },

  {
    title: "버너",
    path: "/burner",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
  {
    title: "화로",
    path: "/brazier",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },

  {
    title: "코펠",
    path: "/coppell",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
];
