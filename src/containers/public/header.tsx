// LIBRARY
import Link from "next/link";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
// APP
import menuManage from "../../utils/menuManage";
import useTokenValidation from "../../hooks/useTokenValidation.hook";
import InforLocal from "../../models/InforLocal";
import { useQueryUserId } from "../../hooks/useQueryUserId";
import { UserModel } from "../../services/user/user.model";

const Header: NextPage = () => {
  const dataLocal: InforLocal = useTokenValidation();
  const isLogin = dataLocal.isLogin;
  const Router = useRouter();
  const [isDropDown, setIsDropDown] = useState(false);
  const { data: dataUser, isLoading } = useQueryUserId(dataLocal?.id);
  const handleMenuManage = (id) => {
    if (id === 1) {
      Router.push(`${menuManage[0].path}`);
    } else if (id === 2) {
      Router.push(`${menuManage[1].path}`);
    } else if (id === 3) {
      Router.push(`${menuManage[2].path}`);
    } else if (id === 4) {
      localStorage.removeItem("token");
    }
  };
  return (
    <div className="container container-header clearfix">
      <Link
        id="top-logo"
        href="/"
        title="cho thuê phòng trọ, cho thuê nhà trọ, tìm phòng trọ"
      >
        cho thuê phòng trọ, cho thuê nhà trọ, tìm phòng trọ
      </Link>
      <div className="user-welcome clearfix js-reload-html-header">
        {isLogin && (
          <Link className="welcome-text" href="#">
            <img
              src={dataUser?.avatar}
              alt="Avatar"
              width={40}
              height={40}
              style={{
                border: "1px solid #ddd",
                borderRadius: "50%",
                marginRight: "5px",
              }}
            />
            <div>
              <span
                style={{
                  display: "block",
                  fontSize: "1.2rem",
                  marginBottom: "3px",
                  maxWidth: "300px",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
              >
                Xin chào, <strong> {dataUser?.name}</strong>
              </span>
              <span style={{ fontSize: "0.9rem" }}>
                Mã tài khoản:{" "}
                <strong> {dataUser?.id?.slice(0, 15) + `...`}</strong>. TK
                Chính:
                <strong>0 VNĐ</strong>
              </span>
            </div>
          </Link>
        )}
        {isLogin && (
          <Link className="btn" href="#">
            <i className="icon heart size-18"></i> Yêu thích
            <span className="number-count js-save-post-total">1</span>
          </Link>
        )}

        {!isLogin && (
          <>
            <Link className="btn" href="/login">
              <i className="icon register"></i> Đăng nhập
            </Link>
            <Link className="btn" href="/register">
              <i className="icon login"></i> Đăng ký
            </Link>
          </>
        )}
        {isLogin && (
          <div className="dropdown">
            <button
              className="btn dropdown-toggle"
              type="button"
              id="dropdownMenu2"
              onClick={() => setIsDropDown(!isDropDown)}
            >
              <i className="icon dashboard"></i> Quản lý tài khoản
            </button>
            {isDropDown && (
              <ul className="dropdown-menu">
                {menuManage.map((item: any, index: number) => (
                  <li key={index}>
                    <Link
                      onClick={() => handleMenuManage(item?.id)}
                      className="dropdown-menu-item dang-tin"
                      href={item?.path}
                      title={item?.text}
                      style={{ gap: "5px" }}
                    >
                      <div
                        style={{
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                        }}
                      >
                        <img className="mr-2" src={item.icon} alt="icon" />
                      </div>
                      <span>{item.text}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
        {isLogin && (
          <Link className="btn btn-add-post" href="/admin">
            Đăng tin mới <i></i>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
