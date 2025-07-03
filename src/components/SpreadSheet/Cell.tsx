import React, { useState, useEffect } from 'react';

interface EditableCellProps {
  value: string;
  rowIndex: number;
  columnId: string;
  updateData: (rowIndex: number, columnId: string, value: string) => void;
}

const EditableCell: React.FC<EditableCellProps> = ({
  value: initialValue,
  rowIndex,
  columnId,
  updateData,
}) => {
  const [value, setValue] = useState(initialValue);
  const checkAlign = ():boolean=>{
    if(columnId=='1'||columnId=='7'||columnId=='8'){
      return true;
    }
    else{
      return false;
    }
  }
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const onBlur = () => {
    updateData(rowIndex, columnId, value);
  };

  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={onBlur}
      onClick={()=>{
        console.log(columnId)
      }}
      className={`w-full px-2 py-1 bg-transparent text-xs  focus:outline-none 
          ${checkAlign()?'text-right':'text-none'}
        `}
    />
  );
};

export default EditableCell;