import { IoIosSearch } from "react-icons/io";
import { LuMapPin } from "react-icons/lu";
import { BsEnvelope } from "react-icons/bs";

const Form = ({ type }) => {
  if (type === "location") {
    return (
      <form>
        <div className="flex items-center gap-x-[15px] mt-[45px]">
          <div className="w-[428px] h-[60px] border border-primary rounded-[10px] overflow-hidden relative">
            <input
              type="text"
              placeholder="Enter Your Location"
              className="w-full h-full outline-none border-none font-montserrat font-normal text-[20px] pl-[95px] pr-[40px] text-primary placeholder:text-primary bg-white"
            />
            <IoIosSearch className="text-primary absolute top-1/2 left-[24px] -translate-y-1/2 text-[32px]" />
          </div>

          <div className="w-[58px] h-[58px] border border-white rounded-full bg-map-orange flex items-center justify-center">
            <LuMapPin className="text-[36px] text-white" />
          </div>
        </div>
      </form>
    );
  }

  if (type === "newsletter") {
    return (
      <form className="mt-[46px] flex justify-between items-start">
        <div className="relative">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-[340px] border border-primary rounded-[15px] py-[28px] px-[63px] font-montserrat font-normal text-[20px] leading-normal text-primary outline-none placeholder:text-primary bg-white"
          />
          <BsEnvelope className="absolute top-1/2 left-0 translate-x-[70%] -translate-y-1/2 text-[30px] text-primary" />
        </div>

        <button type="submit" className="w-[205px] bg-map-orange py-[22px] px-[40px] border-none rounded-[20px] font-montserrat font-bold text-[30px] leading-normal cursor-pointer text-white">
          Let's Go
        </button>
      </form>
    );
  }
};

export default Form;