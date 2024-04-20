import Header from '../ShareComponent/Header/Header';
import './Import.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
import StepAnnotate from './Sections/StepAnnotate/StepAnnotate';
import Footer from '../ShareComponent/Footer/Footer';
import CreateModel from './Sections/CreateModel/CreateModel';
function ImportPage() {
    const userRedux = JSON.parse(localStorage.getItem('persist:user'));
    let userData = JSON.parse(userRedux.authSlice).user;

    const createModelRef = useRef(null);

    const handleClick = () => {
        createModelRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            <Header />
            <div className="import-container">
                <div className="import-content">
                    <div className="import-header">Anonymous Project</div>
                    <div className="import-box">
                        <div className="model-option">
                            {userData ? (
                                <div className="title">
                                    <span>Choose models or</span>
                                    <div onClick={handleClick} className="create">
                                        Create your own model
                                    </div>
                                </div>
                            ) : (
                                <div className="title">
                                    <a href="/login" className="create">
                                        Login
                                    </a>
                                    <div>to discover more model</div>
                                </div>
                            )}
                            {userData ? (
                                <select className="toggle">
                                    <option>Default</option>
                                    <option>a</option>
                                    <option>a</option>
                                </select>
                            ) : (
                                <div className="no-choose">Default</div>
                            )}
                        </div>
                        <a href="/annotation-tool" className="upload-box">
                            <div className="upload-title">+ Upload your data/images</div>
                        </a>
                    </div>
                    <div className="history">
                        <div className="history-header">
                            <div className="title">History</div>
                            <a className="see-all">
                                <span>See all </span>
                                <FontAwesomeIcon icon={faAnglesRight} />
                            </a>
                        </div>
                        <div className="history-list">
                            <div className="history-item">
                                <div className="image">
                                    <img
                                        className="img"
                                        src="https://luyendichtiengtrung.com/uploads/4566/hinh-fb-1_400x559.jpg"
                                    />
                                </div>
                                <div className="info">
                                    <div className="info-left">
                                        <p className="name">History 1</p>
                                        <span className="time">Created at 20/4/2024</span>
                                    </div>
                                    <div className="action">
                                        <FontAwesomeIcon icon={faEllipsis} />
                                    </div>
                                </div>
                            </div>
                            <div className="history-item">
                                <div className="image">
                                    <img
                                        className="img"
                                        src="https://luyendichtiengtrung.com/uploads/4566/hinh-fb-1_400x559.jpg"
                                    />
                                </div>
                                <div className="info">
                                    <div className="info-left">
                                        <p className="name">History 2</p>
                                        <span className="time">Created at 20/4/2024</span>
                                    </div>
                                    <div className="action">
                                        <FontAwesomeIcon icon={faEllipsis} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {userData ? (
                <div ref={createModelRef}>
                    <CreateModel />
                </div>
            ) : (
                <StepAnnotate />
            )}
            <Footer />
        </div>
    );
}

export default ImportPage;
