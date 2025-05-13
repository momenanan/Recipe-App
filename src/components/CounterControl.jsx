import React, { useState } from 'react';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const CounterControl = () => {
  const [count, setCount] = useState(3);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);

  return (
    <div className="flex items-center bg-gray-300 rounded-full px-2 py-1 w-fit">
      {/* زر الناقص */}
      <button
        onClick={decrement}
        className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-br from-pink-400 to-orange-300"
      >
        <RemoveIcon style={{ color: 'white', fontSize: 20 }} />
      </button>

      {/* الرقم */}
      <span className="mx-3 font-semibold text-lg text-black">{count}</span>

      {/* زر الزائد */}
      <button
        onClick={increment}
        className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-900 to-cyan-400"
      >
        <AddIcon style={{ color: 'white', fontSize: 20 }} />
      </button>
    </div>
  );
};

export default CounterControl;
