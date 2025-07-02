// src/components/Toolbar.tsx
import {
    EyeOff,
    Filter,
    Grid,
    Upload,
    Download,
    Share2,
    Plus,
    ArrowUpDown,


} from "lucide-react";
import React from "react";
import Button1 from "../Buttons/Button1";
import Button2 from '../Buttons/Button2';

const HeaderBottom: React.FC = () => {
    return (
        <div className="flex justify-between items-center flex-wrap px-6 py-3 border-b border-gray-200 bg-white gap-4">
            {/* Left: Toolbar title + action buttons */}
            <div className="flex items-center gap-4 flex-wrap text-[#121212]">
                <span className="text-sm flex gap-2">
                    <span>Tool bar</span>
                    <span>{">>"}</span>
                </span>

                <Button1>
                    <EyeOff className="w-4 h-4" />
                    Hide fields
                </Button1>

                <Button1>
                    <ArrowUpDown className="w-4 h-4" />
                    Sort
                </Button1>

                <Button1>
                    <Filter className="w-4 h-4" />
                    Filter
                </Button1>

                <Button1>
                    <Grid className="w-4 h-4" />
                    Cell view
                </Button1>
            </div>


            <div className="flex items-center gap-2 flex-wrap text-[#545454]">

                <Button2 >
                    <Upload className="w-4 h-4" />
                    Import
                </Button2>

                <Button2 >
                    <Download className="w-4 h-4" />
                    Export
                </Button2>

                <Button2 >
                    <Share2 className="w-4 h-4" />
                    Share
                </Button2>
                <button className="flex items-center gap-1 text-sm bg-[#4B6A4F] text-white px-4 py-2 rounded hover:bg-green-700 transition">
                    <Plus className="w-4 h-4" />
                    New Action
                </button> 

                


            </div>
        </div>
    );
};

export default HeaderBottom;
