import './CreateModel.scss';
function CreateModel() {
    return (
        <div className="create-container">
            <div className="create-header">Create your model</div>
            <div className="create-content">
                <div className="import-box">
                    <div className="upload-box">
                        <div className="upload-title">+ Upload your data/images</div>
                    </div>
                    <div className="model-info">
                        <div className="model-name">
                            <div className="header">Enter model name:</div>
                            <input className="name-button" type="text" placeholder="example_model"></input>
                        </div>
                        <div className="model-button">
                            <button type="submit" className="button">
                                <span className="button-text">Send request</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateModel;
