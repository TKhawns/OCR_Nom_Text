import './ToolHeader.scss';
function ToolHeader() {
    return (
        <div className="tool-header-container">
            <div className="left-header">
                <div className="title">Han - Nom</div>
                <a className="link">Projects</a>
                <a className="link">Tasks</a>
                <a className="link">Models</a>
            </div>
            <div className="right-header">
                <a className="exit" href="/import">
                    Thoát
                </a>
            </div>
        </div>
    );
}

export default ToolHeader;
