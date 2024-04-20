import Header from '../../ShareComponent/Header/Header';
import './HomePage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Footer from '../../ShareComponent/Footer/Footer';
import Handbook from '../Sections/HandBook';
import Gallery from '../Sections/Gallery';
function HomePage() {
    const userRedux = JSON.parse(localStorage.getItem('persist:user'));
    let userData = JSON.parse(userRedux.authSlice).user;
    return (
        <div>
            <Header />
            <div className="body">
                <div className="project-content">
                    <div className="project-header">Bắt đầu dự án của bạn</div>
                    <div className="project-option">
                        <div className="left">
                            <div className="left-title">Anonymous Project</div>
                            <div className="left-description">
                                Start quickly with a few steps to recognize the Nom’s text. Do not need to have an
                                account, but you are limited by model to use. Default is our original model.
                            </div>
                            <div className="left-feature">
                                <div className="feature">Don’t have to wait for an acceptance.</div>
                                <div className="feature">Limit models</div>
                            </div>
                            <a href="/import" className="project-button">
                                <div className="title">Start now</div>
                                <div className="icon">
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </div>
                            </a>
                        </div>
                        <div className="right">
                            <div className="left-title">Custom Project</div>
                            <div className="left-description">
                                Start quickly with a few steps to recognize the Nom’s text. Do not need to have an
                                account, but you are limited by model to use. Default is our original model.
                            </div>
                            <div className="left-feature">
                                <div className="feature">Don’t have to wait for an acceptance.</div>
                                <div className="feature">Limit models</div>
                            </div>
                            {userData ? (
                                <a href="/import" className="project-button">
                                    <div className="title">Start now</div>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </div>
                                </a>
                            ) : (
                                <a href="/login" className="project-button">
                                    <div className="title">Login now</div>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </div>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
                <div className="handbook-container">
                    <div className="handbook-wrapper">
                        <div className="handbook-content">
                            <div className="handbook-title">Cẩm nang</div>
                            <div className="handbook-slider">
                                <Handbook />
                            </div>
                        </div>
                    </div>
                    <Gallery />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default HomePage;
