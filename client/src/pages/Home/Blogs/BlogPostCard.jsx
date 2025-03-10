
export default function ({ image, title, description, date }) {
    return (
        <div className="flex flex-col gap-4 rounded-xl border border-gray-300 cursor-pointer hover:border-gray-400">
            <div className="relative rounded-t-xl group overflow-hidden">
                <img className="w-[408px] h-[268px] rounded-t-xl transition-transform duration-300 group-hover:scale-110" src={image} alt={title} />
                <div className="absolute inset-0 bg-gradient-to-t rounded-t-xl  from-black/50 to-transparent pointer-events-none"></div>
                <div className="absolute top-4 left-4 bg-blue-600  rounded-lg px-3 py-1 ">
                    <span className="text-sm font-[600] px-1 text-white">{date}</span>
                </div>
            </div>
            <div className="px-4 flex flex-col">
                <p className="-tracking-wide max-w-[370px] font-[500] text-[20px] mb-2 ">{title}</p>
                <p className="max-w-[370px] text-gray-600 mb-4">{description}</p>
               
            </div>
        </div>
    )
}