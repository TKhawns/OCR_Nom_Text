import { useState } from 'react';
import Footer from '../ShareComponent/Footer/Footer';
import Header from '../ShareComponent/Header/Header';
import './SignUp.scss';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { handleSignUpApi } from '../../components/Services/userServices';
import { loginSuccess } from '../../components/redux/authSlice';
function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [errMessage, setErrMessage] = useState([]);
    const [check, setCheck] = useState(false);

    const handleChecked = () => {
        setCheck(!check);
    };
    const handleOnchangeEmail = (event) => {
        setEmail(event.target.value);
    };
    const handleOnchangePassword = (event) => {
        setPassword(event.target.value);
    };
    const handleOnchangeGender = (event) => {
        console.log(event.target.value);
        setGender(event.target.value);
    };
    const handleOnchangeName = (event) => {
        setName(event.target.value);
    };
    const handleOnchangePhone = (event) => {
        setPhone(event.target.value);
    };

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignUp = async () => {
        setErrMessage('');
        try {
            let data = await handleSignUpApi(email, password, gender, name, phone);
            console.log(data);
            if (data && data.StatusCode !== 200) {
                setErrMessage(data);
            }
            if (data && data.StatusCode === 200) {
                dispatch(loginSuccess(data.Data));
                navigate('/');
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
            <div className="signup-container">
                <div className="signup-content">
                    <div className="signup-inner">
                        <div className="side-bar">
                            <div className="title">Vì sao bạn nên đăng ký</div>
                            <div className="text">
                                <p>
                                    Tham gia cộng đồng Han Nom annotation - FIT sẽ giúp bạn nâng cao khả năng làm việc
                                    cùng các mô hình. Bạn có thể tự tạo ra những mô hình đào tạo từ chính bộ dữ liệu của
                                    riêng mình trong thời gian ngắn, hoặc thoải mái sử dụng các model đã được đào tạo
                                    bởi cộng đồng dưới sự giám sát của chúng tôi với sự chọn lọc dữ liệu.
                                </p>
                            </div>
                            <ul className="list">
                                <li className="item">"Become a Trainer" - Tạo model đào tạo của riêng mình</li>
                                <li className="item">Sử dụng nhiều loại mô hình khác nhau từ cộng đồng</li>
                                <li className="item">Trải nghiệm chức năng mới cải thiện hiệu quả từ chúng tôi</li>
                            </ul>
                        </div>
                        <div className="main">
                            <div className="main-title">Đăng ký tài khoản</div>
                            <div className="signup-form">
                                <div className="account-row">
                                    <div className="field">
                                        <label className="field-label">
                                            Email {''}
                                            <span className="force">*</span>
                                        </label>
                                        <input
                                            className="field-input"
                                            type="email"
                                            placeholder="example@email.com"
                                            onChange={(event) => handleOnchangeEmail(event)}
                                            required
                                        />
                                    </div>
                                    <div className="field">
                                        <label className="field-label">
                                            Mật khẩu {''}
                                            <span className="force">*</span>
                                        </label>
                                        <input
                                            className="field-input"
                                            type="password"
                                            placeholder="123@@@"
                                            onChange={(event) => handleOnchangePassword(event)}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="gender">
                                    <div className="field">
                                        <label className="field-label">
                                            Giới tính {''}
                                            <span className="force">*</span>
                                        </label>
                                        <div className="checkbox">
                                            <div className="form-check">
                                                <input
                                                    className="check-input"
                                                    type="radio"
                                                    value="1"
                                                    checked={check}
                                                    onClick={check ? (e) => e.stopPropagation() : handleChecked}
                                                    onChange={(event) => handleOnchangeGender(event)}
                                                />
                                                <label className="name-gender">Nam</label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="check-input"
                                                    type="radio"
                                                    value="0"
                                                    checked={!check}
                                                    onClick={!check ? (e) => e.stopPropagation() : handleChecked}
                                                    onChange={(event) => handleOnchangeGender(event)}
                                                />
                                                <label className="name-gender">Nữ</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="info-account">
                                    <div className="field">
                                        <label className="field-label">
                                            Họ và tên {''}
                                            <span className="force">*</span>
                                        </label>
                                        <input
                                            className="field-input"
                                            type="text"
                                            placeholder="UET-VNU"
                                            onChange={(event) => handleOnchangeName(event)}
                                            required
                                        />
                                    </div>
                                    <div className="field">
                                        <label className="field-label">
                                            Điện thoại {''}
                                            <span className="force">*</span>
                                        </label>
                                        <input
                                            className="field-input"
                                            type="phone"
                                            placeholder="03825543512"
                                            onChange={(event) => handleOnchangePhone(event)}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="license">
                                    <div className="license-check">
                                        <input className="license-input" type="checkbox" checked />
                                        <label className="license-label">
                                            Tôi đã đọc và đồng ý với {''}
                                            <a
                                                className="link-license"
                                                target="blank"
                                                href="https://vn.joboko.com/chinh-sach-bao-mat"
                                            >
                                                Chính sách bảo mật {''}
                                            </a>
                                            của Han Nom annotation
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="sign-up-button">
                                <button
                                    className="button-content"
                                    type="submit"
                                    onClick={() => {
                                        handleSignUp();
                                    }}
                                >
                                    <span className="button-title">Đăng ký</span>
                                </button>
                                <div className="link-content">
                                    <div className="exist-account">Đã có tài khoản?</div>
                                    <a className="login-link" href="/login">
                                        Đăng nhập
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default SignUp;
