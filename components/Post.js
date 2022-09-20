import {
    ChartBarIcon,
    ChatIcon,
    DotsHorizontalIcon,
    HeartIcon,
    ShareIcon,
    TrashIcon,
} from "@heroicons/react/outline";

export default function Post({ post }) {
    return (
        <div className="flex p-3 cursor-pointer border-b border-gray-200">
            {/* User Image */}
            <img
                className="h-11 w-11 rounded-full mr-4"
                src={post.userimg}
                alt=""
            />
            {/* Right Side */}
            <div>
                {/* Header */}
                <div className="flex items-center justify-between">
                    {/* Post user info  */}
                    <div className="flex space-x-1 items-center whitespace-nowrap">
                        <h4 className="font-bold text-[15px] sm:text-[16px] hover:underlie">
                            {post.name}
                        </h4>
                        <span className="text-sm sm:text-[15px]">
                            @{post.username} -{" "}
                        </span>
                        <span className="text-sm sm:text-[15px] hover:underlie">
                            {post.timestamp}
                        </span>
                    </div>
                    {/* Dot Icon */}
                    <DotsHorizontalIcon className="h-10 hoverEffect w-10 hover:bg-sky-100 hover:text-sky-500 p-2" />
                </div>
                {/* Post Text */}
                <p className="text-gray-800 mb-2 text-[15px] sm:text-[16px]">
                    {post.text}
                </p>
                {/* Post Image */}
                <img className="rounded-2xl mr-2" src={post.img} alt="" />
                {/* Icons */}
                <div className="flex justify-between text-gray-500 p-2">
                    <ChatIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
                    <TrashIcon className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100" />
                    <HeartIcon className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100" />
                    <ShareIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
                    <ChartBarIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
                </div>
            </div>
        </div>
    );
}
