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
      className="w-full px-2 py-1 text-sm bg-transparent focus:outline-none"
    />
  );
};

export default EditableCell;