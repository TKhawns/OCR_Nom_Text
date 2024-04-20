import './StepAnnotate.scss';
function StepAnnotate() {
    return (
        <div className="step-container">
            <div className="step-header">Steps to Annotate Images</div>
            <div className="step">
                <div className="step-image">
                    <img src="https://www.gemoo-resource.com/tools/img/image_step1.png" />
                </div>
                <div className="step-text">
                    <h3 className="title">STEP 1</h3>
                    <p className="direction">Upload, drag and drop, or copy and paste an image from your computer.</p>
                </div>
            </div>
            <img className="step-arrow" src="https://www.gemoo-resource.com/tools/img/step-arrow.svg" />
            <div className="step">
                <div className="step-image">
                    <img src="https://www.gemoo-resource.com/tools/img/image_step2.png" />
                </div>
                <div className="step-text">
                    <h3 className="title">STEP 2</h3>
                    <p className="direction">
                        Annotate the image online with various marks on the toolbar. You can also add notes to your
                        image easily.
                    </p>
                </div>
            </div>
            <img className="step-arrow2" src="https://www.gemoo-resource.com/tools/img/step-arrow.svg" />
            <div className="step">
                <div className="step-image">
                    <img src="https://www.gemoo-resource.com/tools/img/image_step3.png" />
                </div>
                <div className="step-text">
                    <h3 className="title">STEP 3</h3>
                    <p className="direction">
                        Export to your computer, copy to clipboard, or simply share the image link with others.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default StepAnnotate;
