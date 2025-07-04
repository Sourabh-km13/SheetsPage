
import {
    Bell,
    Ellipsis,
    Search,
    UserCircle,

} from "lucide-react";
import React from "react";

const HeaderTop: React.FC = () => {
    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        console.log(e.currentTarget.innerText);
        };
    return (
        <div className="flex flex-row justify-between w-full px-4 py-2 border-b border-gray-200 bg-white gap-2">
            
            <div className="text-sm flex items-center gap-2 text-gray-500">
                <div className=" bg-[#618666] p-0.5 w-6 h-5 rounded-md">
                    <div className="w-3/4 h-full bg-white rounded-bl-sm rounded-tl-sm">

                    </div>
                </div>
                <span className="font-medium" onClick={handleClick}>Workspace</span>
                {" > "}
                <span className=" font-medium" onClick={handleClick}>Folder 2</span>
                {" > "}
                <span className="font-semibold text-gray-700" onClick={handleClick}>Spreadsheet 3</span>
                <Ellipsis color="#afafaf" />
            </div>
                
            <div className="flex items-center gap-4 ">
                <div className="flex gap-1 items-center border-1 border-[#afafaf] p-2 rounded-md  bg-[#F6F6F6]">
                    <Search color="#afafaf" />
                    <input
                        type="text"
                        placeholder="Search within sheet"   
                        className=" border-none rounded text-sm w-max max-w-60 outline-none "
                        onChange={(e)=>{
        
                            console.log(e.target.value);
                            
                        }}
                    />
                </div>
                <div className="relative"
                onClick={()=>{
                    console.log('Notification')
                }}
                >

                    <Bell color="#121212"  />
                    <span className="absolute -top-1 -right-1 inline-flex items-center justify-center text-xs font-bold text-white bg-[#4B6A4F] rounded-full w-4 h-4">
                        2
                    </span>
                </div>

                
                <div className="flex items-center gap-2"
                    onClick={handleClick}
                >
                    <UserCircle className="w-6 h-6 text-gray-500"  />
                    <div className="text-sm text-gray-600">John Doe</div>
                </div>
            </div>

        </div>
    );
};

export default HeaderTop;
