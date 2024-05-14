import Header from '../ShareComponent/Header/Header';
import './Import.scss';
import { useEffect, useRef, useState } from 'react';
import StepAnnotate from './Sections/StepAnnotate/StepAnnotate';
import Footer from '../ShareComponent/Footer/Footer';
import CreateModel from './Sections/CreateModel/CreateModel';
import { FormattedMessage } from 'react-intl';
import { getAllModelById } from '../../components/Services/userServices';
import { imageTypes } from '../../constants';
import { useNavigate } from 'react-router-dom';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { imageDb } from './Firebase/config';
import Loading from '../ShareComponent/Loading/Loading';

let prop;

function ImportPage() {
    const userRedux = JSON.parse(localStorage.getItem('persist:user'));
    let userData = JSON.parse(userRedux.authSlice).user;
    const [list, setList] = useState([]);
    const createModelRef = useRef(null);
    //loading
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = () => {
        createModelRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(async () => {
        if (userData) {
            let call = await getAllModelById(userData.userId);
            setList(call.Data);
        }
    }, []);
    const navigate = useNavigate();
    const onFilesZipChange = async (event) => {
        prop = event.target.files;

        for (const item of Object.keys(prop)) {
            const storageRef = ref(imageDb, `image_files/${item.name}`);
            // const metadata = {
            //     contentType: 'image/png',
            // };
            setIsLoading(true);
            await uploadBytes(storageRef, item).then((snapshot) => {
                getDownloadURL(snapshot.ref).then((url) => {
                    console.log(url);
                });
            });
        }

        setIsLoading(false);
        navigate('/annotation-tool');
    };

    return (
        <div>
            <Header />
            {isLoading && (
                <div className="loading-animation">
                    <Loading />
                </div>
            )}
            <div className="import-container">
                <div className="import-content">
                    <div className="import-header">
                        {userData ? <FormattedMessage id="project.login" /> : <FormattedMessage id="project.unlogin" />}
                    </div>
                    <div className="import-box">
                        <div className="model-option">
                            {userData ? (
                                <div className="title">
                                    <span>
                                        <FormattedMessage id="import.choose1" />
                                    </span>
                                    <div onClick={handleClick} className="create">
                                        <FormattedMessage id="import.choose2" />
                                    </div>
                                </div>
                            ) : (
                                <div className="title">
                                    <a href="/login" className="create">
                                        <FormattedMessage id="homeheader.login" />
                                    </a>
                                    <div>
                                        <FormattedMessage id="import.discover" />
                                    </div>
                                </div>
                            )}
                            {userData && list !== null ? (
                                <select className="toggle">
                                    <option>Default</option>
                                    {list.map((item) => (
                                        <option>{item.Name}</option>
                                    ))}
                                </select>
                            ) : (
                                <div className="no-choose">Default</div>
                            )}
                        </div>
                        <div className="upload-box">
                            <div className="upload-title">
                                <label>
                                    <input
                                        type="file"
                                        accept={imageTypes.map((type) => `.${type}`).join(',')}
                                        multiple
                                        onChange={onFilesZipChange}
                                        style={{ display: 'none', zIndex: '100000' }}
                                    />
                                    <FormattedMessage id="import.upload" />
                                </label>
                            </div>
                        </div>
                    </div>
                    {/* <div className="history">
                        <div className="history-header">
                            <div className="title">
                                <FormattedMessage id="import.history" />
                            </div>
                            <a className="see-all">
                                <span>
                                    <FormattedMessage id="import.seeall" />{' '}
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
                        </div>            </span>
                                <FontAwesomeIcon icon={faAnglesRight} />
                            </a>
                        </div>
                    </div> */}
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
export { prop };
