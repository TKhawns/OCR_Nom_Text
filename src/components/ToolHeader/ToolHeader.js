import './ToolHeader.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
function ToolHeader() {
    const userRedux = JSON.parse(localStorage.getItem('persist:user'));
    let userData = JSON.parse(userRedux.authSlice).user;
    return (
        <div className="tool-header-container">
            <div className="left-header">
                <div className="title">Han - Nom</div>
                <a className="link" href="/">
                    Home
                </a>
                <a className="link">Projects</a>
                <a className="link">Tasks</a>
                <a className="link">Models</a>
            </div>
            <div className="right-header">
                <button className="model-name">Default model</button>
                {userData ? (
                    <div className="user-info">
                        <div>
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                        <div className="name">{userData.fullName}</div>
                    </div>
                ) : (
                    <div className="user-info">
                        <FontAwesomeIcon icon={faUser} />
                        <a className="login-link" href="/login">
                            Login
                        </a>
                    </div>
                )}
                {/* <a className="exit" href="/import">
                    Thoát
                </a> */}
            </div>
        </div>
    );
}

export default ToolHeader;
