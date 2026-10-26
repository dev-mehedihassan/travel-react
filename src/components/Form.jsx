import { IoIosSearch } from "react-icons/io";
import { LuMapPin } from "react-icons/lu";
import { BsEnvelope } from "react-icons/bs";

const Form = ({ type }) => {
  if (type === "location") {
    return (
      <form>
        <div className="form_inner">
          <div className="banner_search">
            <input
              type="text"
              placeholder="Enter Your Location"
            />
            <IoIosSearch />
          </div>

          <div className="map_circle">
            <LuMapPin />
          </div>
        </div>
      </form>
    );
  }

  if (type === "newsletter") {
    return (
      <form className="newsletter_form">
        <div className="form_group">
          <input
            type="email"
            placeholder="Enter Your Email"
          />
          <BsEnvelope />
        </div>

        <button type="submit">Let's Go</button>
      </form>
    );
  }
};

export default Form;