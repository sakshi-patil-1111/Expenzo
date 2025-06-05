import React from "react";
import {
  LuUtensils,
  LuTrendingUp,
  LuTrendingDown,
  LuTrash2,
} from "react-icons/lu";

const TransactionCard = ({
  title,
  icon,
  date,
  amount,
  type,
  hideDeleteBtn,
}) => {
  const getAmountStyles = () => {
    if (type === "income") {
      return "bg-green-50 text-green-500";
    } else if (type === "expense") {
      return "bg-red-50 text-red-500";
    }
  };

  return (
    <div className="group relative flex items-center gap-4  mt-2 p-3 rounded-lg hover:bg-gray-100/60">
      <div className="w-12 h-12 flex items-center justify-center text-xl text-gray-800 rounded-full bg-gray-100">
        {icon ? (
          <img src={icon} alt={title} className="w-6 h-6" />
        ) : (
          <LuUtensils />
        )}
      </div>

      <div className="flex-1 flex items-center justify-between">
        <p className="text-sm font-medium text-gray-700">{title}</p>
        <p className="text-xs text-gray-400 mt-1">{date}</p>
      </div>

      <div className="flex items-center gap-2">
        {!hideDeleteBtn && (
          <button
            className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
            onClick={onDelete}
          >
            <LuTrash2 size={18} />
          </button>
        )}
        <div
          className={`flex items-center gap-2 px-3 py-1.5 rounded-md ${getAmountStyles()}`}
        >
          <h6 className="text-sm font-medium">
            {type === "income" ? "+" : "-"} ${amount}
          </h6>
          {type === "income" ? <LuTrendingUp /> : <LuTrendingDown />}
        </div>
      </div>
    </div>
  );
};

export default TransactionCard;
