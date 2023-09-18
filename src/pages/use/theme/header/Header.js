import { memo } from "react";
import "./style.scss";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiOutlineUser,
  AiOutlineMail,
} from "react-icons/ai";
import { Link } from 'react-router-dom'
import { formater } from "ultils/fomater";
const Header = () => {
  return (
    <div className="header-top">
      <div className="container">
        <div className="row">
          <div className="col-6 header-top-left">
          <ul>
            <li><AiOutlineMail/><span>Foodshop@gmail.com</span></li>
            <li>Miễn phí ship đơn từ {formater(200000)}.</li>
          </ul>
          </div>
          <div className="col-6 header-top-right">
            <ul>
              <li>
                <Link to={""}>
                  <AiFillFacebook />
                </Link>
              </li>
              <li>
                <Link to={""}>
                  <AiFillInstagram />
                </Link>
              </li>
              <li>
                <Link to={""}>
                  <AiOutlineTwitter />
                </Link>
              </li>
              <li>
                <Link to={""}>
                  <AiFillLinkedin />
                </Link>
              </li>
              <li>
                <Link to={""}>
                  <AiOutlineUser />
                </Link>
                <span>Login</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Header);
