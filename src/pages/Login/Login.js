import './Login.scss';
import Header from '../ShareComponent/Header/Header';
import Footer from '../ShareComponent/Footer/Footer';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { handleLoginApi } from '../../components/Services/userServices';
import { loginSuccess } from '../../components/redux/authSlice';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMessage, setErrMessage] = useState([]);
    const [isShowPass, setIsShowPass] = useState(false);

    const handleOnchangeEmail = (event) => {
        setEmail(event.target.value);
    };
    const handleOnchangePassword = (event) => {
        setPassword(event.target.value);
    };
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async () => {
        setErrMessage('');
        try {
            let data = await handleLoginApi(email, password);
            console.log(data);
            if (data && data.StatusCode !== 200) {
                setErrMessage(data);
            }
            if (data && data.StatusCode === 200) {
                dispatch(loginSuccess(data.Data));
                navigate(-1);
            }
        } catch (e) {
            console.log(e);
            if (e.response) {
                if (e.response.data) {
                    setErrMessage(e.response.data.Message);
                }
            }
        }
    };

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
                                    <input
                                        type="text"
                                        className="login-input"
                                        placeholder="Nhập email"
                                        onChange={(event) => handleOnchangeEmail(event)}
                                    ></input>
                                </div>
                                <div className="login-row">
                                    <label className="login-label">Mật khẩu: </label>
                                    <span className="musthave">*</span>
                                    <input
                                        type="password"
                                        className="login-input"
                                        placeholder="Nhập mật khẩu"
                                        onChange={(event) => handleOnchangePassword(event)}
                                    ></input>
                                </div>
                            </div>
                        </div>
                        <div className="warning">{errMessage}</div>
                        <div className="login-button">
                            <button
                                type="submit"
                                className="button"
                                onClick={() => {
                                    handleLogin();
                                }}
                            >
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
                                <a href="/sign-up" className="link">
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
