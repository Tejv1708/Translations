import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="flex gap-y-[40px] flex-col ">
      <div
        className="flex space-x-[15px] p-6 flex-right  bg-slate-500 top-0 inset-x-0"
        style={{ marginTop: "50px" }}
      >
        <Link to="/">Home</Link>
        <Link to="/contactus">Contact Us</Link>
        <Link to="/aboutus">About Us</Link>
      </div>
    </div>
  );
};
export default Menu;
