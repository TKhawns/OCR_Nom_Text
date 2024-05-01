import { useDispatch } from 'react-redux';
import actionTypes from '../../../../contexts/StoreContext/actionTypes';
import PopupAnnotations from '../UploadAnnotation/Popup';
import './CreateModel.scss';
import { FormattedMessage } from 'react-intl';
import { isUploadTrue } from '../../../../components/redux/eventSlice';

function CreateModel() {
    const dispatch = useDispatch();
    const handleClickUpload = () => {
        console.log('click');
        dispatch(isUploadTrue(true));
    };
    return (
        <div className="create-container">
            <div className="create-header">
                <FormattedMessage id="create.title" />
            </div>
            <div className="create-content">
                <div className="import-box">
                    <div className="upload-box">
                        <div className="upload-title" onClick={handleClickUpload}>
                            <FormattedMessage id="import.upload" />
                        </div>
                        <PopupAnnotations />
                    </div>
                    <div className="model-info">
                        <div className="model-name">
                            <div className="header">
                                <FormattedMessage id="create.enter" />
                            </div>
                            <input className="name-button" type="text" placeholder="example_model"></input>
                        </div>
                        {/* <div className="model-button">
                            <button type="submit" className="button">
                                <span className="button-text">
                                    <FormattedMessage id="create.send" />
                                </span>
                            </button>
                        </div> */}
                        <div className="model-name" style={{ paddingTop: '15px' }}>
                            <div className="header">Mô tả:</div>
                            <textarea
                                className="name-button"
                                type="text"
                                placeholder="Mô hình sử dụng COCO format"
                                style={{ height: '100px' }}
                            ></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateModel;
