import { memo, useState } from "react";
import "./style.scss";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { formater } from "ultils/fomater";
import { ROUTERS } from "ultils/router";
const Header = () => {
  const [menus, setMenus] = useState([
    {
      name: "HOME",
      path: ROUTERS.USER.HOME,
    },
    {
      name: "SHOP",
      path: ROUTERS.USER.SHOP,
    },
    {
      name: "PRODUCT",
      path: ROUTERS.USER.PRODUCTS,
      isShowSubmenu: false,
      child: [
        {
          name: "MEAT",
          path: "",
        },
        {
          name: "VEGETABLE",
          path: "",
        },
        {
          name: "FAST FOOD",
          path: "",
        },
      ],
    },
    {
      name: "BLOG",
      path: ROUTERS.USER.HOME,
    },
    {
      name: "CONTACT",
      path: ROUTERS.USER.HOME,
    },
  ]);

  return (
    <div>
      <div className="header-top">
        <div className="container">
          <div className="row">
            <div className="col-6 header-top-left">
              <ul>
                <li>
                  <AiOutlineMail />
                  <span>Foodshop@gmail.com</span>
                </li>
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
      <div className="container">
        <div className="row">
          <div className="col-xl-3">
            <div className="header-logo">
              <h1>ShopFood</h1>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="header-menu">
              <ul>
                {menus?.map((menu, menuKey) => (
                  <li key={menuKey} className={menuKey === 0 ? "active" : ""}>
                    <Link to={menu?.path}>{menu?.name}</Link>
                    {menu.child && (
                      <ul className="header-menu-drop">
                        {
                          menu.child.map((childItem, childKey) => (
                          <li key={`${menuKey} - ${childKey}`}>
                            <Link to = {childItem.path}>{childItem.name}</Link>
                          </li>
                        ))
                        }
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-xl-3">
            <div className="header-cart">
              <div className="header-cart-price">
                <span>{formater(1200000)}</span>
              </div>
              <ul>
                <li>
                  <Link to="#">
                    <AiOutlineShoppingCart />
                    <span>5</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Header);
