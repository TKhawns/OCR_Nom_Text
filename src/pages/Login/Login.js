import './Login.scss';
import Header from '../ShareComponent/Header/Header';
import Footer from '../ShareComponent/Footer/Footer';
function Login() {
    return (
        <div>
            <Header />
            <div className="login-container">
                <div className="login-content">
                    <div className="login-inner">
                        <div className="login-title">THÔNG TIN ĐĂNG NHẬP</div>
                        <div className="login-form">
                            <div className="login-field">
                                <div className="login-row">
                                    <label className="login-label">Tài khoản / Email: </label>
                                    <span className="musthave">*</span>
                                    <input type="text" className="login-input" placeholder="Nhập email"></input>
                                </div>
                                <div className="login-row">
                                    <label className="login-label">Mật khẩu: </label>
                                    <span className="musthave">*</span>
                                    <input type="password" className="login-input" placeholder="Nhập mật khẩu"></input>
                                </div>
                            </div>
                        </div>
                        <div className="login-button">
                            <button type="submit" className="button">
                                <span className="button-text">Đăng nhập</span>
                            </button>
                        </div>
                        <div className="link-login">
                            <p>
                                Bạn {''}
                                <a href="/login" className="link">
                                    quên mật khẩu ?
                                </a>
                            </p>
                        </div>
                        <div className="link-login">
                            <p>
                                Bạn chưa có tài khoản? {''}
                                <a href="/login" className="link">
                                    Đăng ký
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Login;
