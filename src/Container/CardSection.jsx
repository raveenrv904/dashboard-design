/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const CardSection = ({
  title,
  count1,
  bColor,
  count2,
  color,
  icon: IconComponent,
}) => {
  return (
    <div
      className={`${bColor} border-l-[6px]  flex items-center rounded-lg justify-between px-5 py-4 bg-white hover:shadow-lg transition-all duration-200 cursor-pointer`}
    >
      <div className="flex flex-col gap-1 justify-start">
        <h1 className="font-medium text-emerald-700 drop-shadow-xl shadow-emerald-500">
          {title}
        </h1>
        <div className="flex text-2xl gap-1 font-bold text-gray-600">
          <p>{count1}</p>
          <p>/</p>
          <p>{count2}</p>
        </div>
        <p className="font-semibold text-gray-400 text-sm">Today/Period</p>
      </div>
      <div className={`${color} p-3 rounded-full`}>
        <IconComponent size={30} className="text-slate-500" />
      </div>
    </div>
  );
};

export default CardSection;
