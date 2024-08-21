import React from "react";
import "./sidebar.scss";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatIcon from "@mui/icons-material/Chat";
import VideocamIcon from "@mui/icons-material/Videocam";
import GroupsIcon from "@mui/icons-material/Groups";
import EventIcon from "@mui/icons-material/Event";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuLink from "../../components/menulink/MenuLink";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sideBarWrapper">
        <MenuLink icon={<RssFeedIcon />} text="Feed" />
        <MenuLink icon={<ChatIcon />} text="Chat" />
        <MenuLink icon={<VideocamIcon />} text="Videos" />
        <MenuLink icon={<GroupsIcon />} text="Friends" />
        <MenuLink icon={<BookmarkIcon />} text="BookMarks" />
        <MenuLink icon={<ShoppingCartIcon />} text="MarketPlace" />
        <MenuLink icon={<EventIcon />} text="Events" />
        <MenuLink icon={<Brightness4Icon />} text="Theme" />
        <MenuLink icon={<ExitToAppOutlinedIcon />} text="Logout(Amber)" />
      </div>
    </div>
  );
};

export default Sidebar;
