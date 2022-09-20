import Image from "next/image";
import SidebarMenuItem from "./SidebarMenuItem";
import { HomeIcon } from "@heroicons/react/solid";
import {
    HashtagIcon,
    BellIcon,
    InboxIcon,
    BookmarkIcon,
    ClipboardIcon,
    UserIcon,
    DotsCircleHorizontalIcon,
    DotsHorizontalIcon,
} from "@heroicons/react/outline";

export default function Sidebar() {
    return (
        <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full">
            {/*  Twitter logo */}
            <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-2">
                <Image
                    width="50"
                    height="50"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/640px-Twitter-logo.svg.png"
                ></Image>
            </div>
            {/*  Menu */}
            <div className="mt-4 mb-2.5 xl-items-start">
                {" "}
                <SidebarMenuItem
                    text="Home"
                    Icon={HomeIcon}
                    active
                ></SidebarMenuItem>
                <SidebarMenuItem
                    text="Explore"
                    Icon={HashtagIcon}
                ></SidebarMenuItem>
                <SidebarMenuItem
                    text="Notifications"
                    Icon={BellIcon}
                ></SidebarMenuItem>
                <SidebarMenuItem
                    text="Message"
                    Icon={InboxIcon}
                ></SidebarMenuItem>
                <SidebarMenuItem
                    text="Bookmarks"
                    Icon={BookmarkIcon}
                ></SidebarMenuItem>
                <SidebarMenuItem
                    text="Lists"
                    Icon={ClipboardIcon}
                ></SidebarMenuItem>
                <SidebarMenuItem
                    text="Profile"
                    Icon={UserIcon}
                ></SidebarMenuItem>
                <SidebarMenuItem
                    text="More"
                    Icon={DotsCircleHorizontalIcon}
                ></SidebarMenuItem>
            </div>
            {/*  Button */}
            <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightnexx-95 text-lg hidden xl:inline">
                Tweet
            </button>

            {/*  Mini Profile */}
            <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
                <img
                    src="https://engineering.unl.edu/images/gradstudents/sahand%20serajian.jpg"
                    alt="user"
                    className="h-10 w-10 rounded-full xl:mr-2"
                />
                <div className="leading-5 hidden xl:inline">
                    <h4 className="font-bold">Tanjir Ahmed </h4>
                    <p className="text-gray-500">@codewithtanjir</p>
                </div>
                <DotsHorizontalIcon className="h-5 xl:ml-8  hidden xl:inline" />
            </div>
        </div>
    );
}
