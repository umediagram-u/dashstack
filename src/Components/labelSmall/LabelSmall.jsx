const LabelSmall = ({ color, text }) => {
    if (color == "red") {
        return (
        <span className={`text-red bg-red-200 w-[60px] h-[22px] rounded-[4.5px] flex justify-center items-center text-[12px] font-bold`}>{text}</span>
        )
    } else if (color == "blue") {
        return (
        <span className={`text-blue bg-blue-200 w-[60px] h-[22px] rounded-[4.5px] flex justify-center items-center text-[12px] font-bold`}>{text}</span>
        )
    } else if (color == "pink") {
        return (
        <span className={`text-pink bg-pink-200 w-[60px] h-[22px] rounded-[4.5px] flex justify-center items-center text-[12px] font-bold`}>{text}</span>
        )
    } else if (color == "purple") {
        return (
        <span className={`text-purple bg-purple-200 w-[60px] h-[22px] rounded-[4.5px] flex justify-center items-center text-[12px] font-bold`}>{text}</span>
        )
    } else if (color == "orange") {
        return (
        <span className={`text-orange bg-orange-200 w-[60px] h-[22px] rounded-[4.5px] flex justify-center items-center text-[12px] font-bold`}>{text}</span>
        )
    } else if (color == "green") {
        return (
        <span className={`text-green bg-green-200 w-[60px] h-[22px] rounded-[4.5px] flex justify-center items-center text-[12px] font-bold`}>{text}</span>
        )
    } else {
        return (
        <span className={`text-orange bg-orange-200 w-[60px] h-[22px] rounded-[4.5px] flex justify-center items-center text-[12px] font-bold`}>{text}</span>
        )
    }
}

export default LabelSmall;