import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePen } from '@fortawesome/free-solid-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { logout } from '../../../components/redux/authSlice';
import { useState } from 'react';
function Header() {
    const userRedux = JSON.parse(localStorage.getItem('persist:user'));
    let userData = JSON.parse(userRedux.authSlice).user;

    const [isToggle, setIsToggle] = useState(false);

    const handleClickToggle = () => {
        setIsToggle(!isToggle);
    };

    const dispatch = useDispatch();
    const handleLogOut = () => {
        dispatch(logout());
    };
    return (
        <div className="header-container">
            <div className="header-content">
                <div className="header-logo">
                    <a className="logo-link" href="https://uet.vnu.edu.vn/">
                        <div className="logo-image">
                            <span className="figure-image">
                                <img
                                    className="image-uet"
                                    src="https://i-vn2.joboko.com/okoimg/vieclam.uet.vnu.edu.vn/xurl/images/logo.png"
                                    alt=""
                                />
                            </span>
                        </div>
                        <div className="header-title">
                            <span className="school">Trường Đại học Công nghệ</span>
                            <span className="tool-name">Han Nom annotation</span>
                        </div>
                    </a>
                </div>
                <div className="header-wrapper">
                    <div className="top-nav">
                        <div className="nav-lang">
                            <select className="change-lang">
                                <option selected value="https://vieclam.uet.vnu.edu.vn/dang-nhap">
                                    Tiếng Việt
                                </option>
                                <option value="https://vieclam.uet.vnu.edu.vn/en/dang-nhap">Tiếng Anh</option>
                            </select>
                            <div className="nav-lang-select">
                                <div className="lang-flag">
                                    <div className="image-config">
                                        <img
                                            className="img"
                                            src="https://vieclam.uet.vnu.edu.vn/images/common/flag-vi.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <span className="lang">Tiếng Việt</span>
                            </div>
                        </div>
                        {!userData ? (
                            <>
                                <a className="nav-login" href="/login">
                                    <span className="title-login">Đăng nhập</span>
                                </a>
                                <a className="nav-signup" href="/sign-up">
                                    <span className="title-signup">Đăng ký</span>
                                </a>
                            </>
                        ) : (
                            <>
                                <div className="account" onClick={handleClickToggle}>
                                    <div className="account-dropdown">
                                        <div className="account-avatar">
                                            <div className="circle-avatar">
                                                <span className="text">U</span>
                                            </div>
                                        </div>
                                        <span> Xin chào, {userData.fullName} </span>
                                    </div>
                                    {isToggle ? (
                                        <div className="dropdown-menu">
                                            <div className="account-detail">
                                                <div className="avatar">
                                                    <div className="image">
                                                        <span className="text">U</span>
                                                    </div>
                                                </div>
                                                <div className="information">
                                                    <p className="name">{userData.fullName}</p>
                                                    <span className="email">{userData.Email}</span>
                                                </div>
                                            </div>
                                            <div className="account-link">
                                                <i className="icon">
                                                    <FontAwesomeIcon icon={faSquarePen} />
                                                </i>
                                                <span className="title">Cập nhật thông tin</span>
                                            </div>
                                            <div className="account-link">
                                                <i className="icon">
                                                    <FontAwesomeIcon icon={faKey} />
                                                </i>
                                                <span className="title">Đổi mật khẩu</span>
                                            </div>
                                            <a href="/" className="account-link" onClick={handleLogOut}>
                                                <i className="icon">
                                                    <FontAwesomeIcon icon={faRightFromBracket} />
                                                </i>
                                                <span className="title">Đăng xuất</span>
                                            </a>
                                        </div>
                                    ) : (
                                        <div> </div>
                                    )}
                                </div>
                            </>
                        )}
                    </div>
                    <div className="bot-nav">
                        <div className="bot-nav-container">
                            <div className="bot-nav-content">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="home-icon" href="/">
                                            <svg fill="none" height="13" width="14" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M14 6.381v.232c-.125.278-.362.37-.673.347-.387-.012-.786 0-1.173 0h-.15v4.594c0 .844-.648 1.446-1.558 1.446H8.588c-.387 0-.586-.174-.586-.544V9.783c0-.312-.212-.497-.537-.497H6.58c-.387 0-.574.173-.574.532v2.661c0 .336-.2.521-.56.521H3.598c-.96 0-1.596-.59-1.596-1.481V6.96H.532c-.225 0-.387-.093-.487-.278-.087-.185-.05-.37.125-.532l.062-.058L6.555.226c.324-.301.561-.301.898 0l6.273 5.82c.087.092.174.22.274.335Z"
                                                    fill="currentColor"
                                                ></path>
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="link" href="https://vieclam.uet.vnu.edu.vn/gioi-thieu-nsi3055">
                                            Your models
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="link" href="https://vieclam.uet.vnu.edu.vn/gioi-thieu-nsi3055">
                                            Request
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="link" href="https://vieclam.uet.vnu.edu.vn/gioi-thieu-nsi3055">
                                            Contact
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="link" href="https://vieclam.uet.vnu.edu.vn/gioi-thieu-nsi3055">
                                            About us
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="link" href="https://vieclam.uet.vnu.edu.vn/gioi-thieu-nsi3055">
                                            Documentation
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
