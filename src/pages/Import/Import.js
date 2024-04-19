import Header from '../ShareComponent/Header/Header';
import './Import.scss';
function ImportPage() {
    return (
        <div>
            <Header />
            <div className="import-container">
                <div className="import-content">
                    <div className="import-header">Anonymous Project</div>
                    <div className="import-box">
                        <div className="model-option">
                            <div className="title">
                                <span>Choose models or</span> {''}
                                <span>create your own model</span>
                            </div>
                            <div className="toggle"></div>
                        </div>
                        <div className="upload-box"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ImportPage;
