import { SparklesIcon } from "@heroicons/react/outline";
import Input from "./Input";
import Post from "./Post";

export default function Feed() {
    const posts = [
        {
            id: "1",
            name: "Tanjir Ahmed",
            username: "codewithtanjir",
            userimg:
                "https://engineering.unl.edu/images/gradstudents/sahand%20serajian.jpg",
            img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            text: "Nice Food",
            timestamp: "1 hour ago",
        },
        {
            id: "2",
            name: "Tanjir Ahmed",
            username: "codewithtanjir",
            userimg:
                "https://engineering.unl.edu/images/gradstudents/sahand%20serajian.jpg",
            img: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGxhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            text: "Nice Place",
            timestamp: "2 hour ago",
        },
        {
            id: "3",
            name: "Tanjir Ahmed",
            username: "codewithtanjir",
            userimg:
                "https://engineering.unl.edu/images/gradstudents/sahand%20serajian.jpg",
            img: "https://media.istockphoto.com/photos/healthy-eating-2-picture-id91883290?b=1&k=20&m=91883290&s=170667a&w=0&h=pxVfbbL0fiuLjvMY7-dKM1FimumUTIAcYT0NNFNtqkw=",
            text: "Nice Health",
            timestamp: "3 hour ago",
        },
    ];
    return (
        <div className="xl:ml-[370px] border-l border-r border-gray-200  xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
            <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
                <h2 className="text-lg sm:text-xl font-bold cursor-pointer">
                    Home
                </h2>
                <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
                    <SparklesIcon className="h-5" />
                </div>
            </div>
            <Input></Input>
            {posts.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    );
}
