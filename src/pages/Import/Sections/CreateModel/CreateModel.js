import './CreateModel.scss';
import { FormattedMessage } from 'react-intl';

function CreateModel() {
    return (
        <div className="create-container">
            <div className="create-header">
                <FormattedMessage id="create.title" />
            </div>
            <div className="create-content">
                <div className="import-box">
                    <div className="upload-box">
                        <div className="upload-title">
                            <FormattedMessage id="import.upload" />
                        </div>
                    </div>
                    <div className="model-info">
                        <div className="model-name">
                            <div className="header">
                                <FormattedMessage id="create.enter" />
                            </div>
                            <input className="name-button" type="text" placeholder="example_model"></input>
                        </div>
                        <div className="model-button">
                            <button type="submit" className="button">
                                <span className="button-text">
                                    <FormattedMessage id="create.send" />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateModel;
