import './Login.scss';
import Header from '../ShareComponent/Header/Header';
import Footer from '../ShareComponent/Footer/Footer';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { handleLoginApi } from '../../components/Services/userServices';
import { loginSuccess } from '../../components/redux/authSlice';
import { FormattedMessage } from 'react-intl';

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
    useEffect(() => {
        document.title = 'Đăng nhập';
    });

    return (
        <div>
            <Header />
            <div className="login-container">
                <div className="login-content">
                    <div className="login-inner">
                        <div className="login-title">
                            <FormattedMessage id="login.title" />
                        </div>
                        <div className="login-form">
                            <div className="login-field">
                                <div className="login-row">
                                    <label className="login-label">
                                        <FormattedMessage id="login.email" />{' '}
                                    </label>
                                    <span className="musthave">*</span>
                                    <FormattedMessage id="login.placeholderemail">
                                        {(placeholder) => (
                                            <input
                                                type="text"
                                                className="login-input"
                                                placeholder={placeholder}
                                                onChange={(event) => handleOnchangeEmail(event)}
                                            />
                                        )}
                                    </FormattedMessage>
                                </div>
                                <div className="login-row">
                                    <label className="login-label">
                                        <FormattedMessage id="login.password" />
                                    </label>
                                    <span className="musthave">*</span>
                                    <FormattedMessage id="login.placeholderpassword">
                                        {(placeholder) => (
                                            <input
                                                type="password"
                                                className="login-input"
                                                placeholder={placeholder}
                                                onChange={(event) => handleOnchangePassword(event)}
                                            />
                                        )}
                                    </FormattedMessage>
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
                                <span className="button-text">
                                    <FormattedMessage id="homeheader.login" />
                                </span>
                            </button>
                        </div>
                        <div className="link-login">
                            <p>
                                <FormattedMessage id="login.you" /> {''}
                                <a href="/login" className="link">
                                    <FormattedMessage id="login.forgotpassword" />
                                </a>
                            </p>
                        </div>
                        <div className="link-login">
                            <p>
                                <FormattedMessage id="login.noaccount" /> {''}
                                <a href="/sign-up" className="link">
                                    <FormattedMessage id="homeheader.signup" />
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
