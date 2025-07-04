import { Plus } from 'lucide-react';
import React from 'react';

const Footer: React.FC = () => {
  const tabs = [
    { label: 'All Orders', active: true },
    { label: 'Pending' },
    { label: 'Reviewed' },
    { label: 'Arrived' },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-white flex items-center px-10 pt-1 border-t border-[#EEEEEE]  gap-6 h-12">
      {tabs.map((tab, idx) => (
        <div
          key={idx}
          className={`flex justify-center items-center px-4 h-11 text-[16px] ${
            tab.active
              ? 'bg-[#E8F0E9] text-[#3E5741] font-semibold border-t-[2px] border-[#4B6A4F]'
              : 'text-[#757575] font-medium'
          }`}
        >
          {tab.label}
        </div>
      ))}

      <div className="flex justify-center items-center h-11 px-1 ml-2">
        <div className="w-7 h-7 flex items-center justify-center bg-white rounded-md border">
          <Plus className="w-5 h-5 text-[#757575]" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
