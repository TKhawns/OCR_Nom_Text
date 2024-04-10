import { useEffect } from 'react';
import PropTypes from 'prop-types';
import SVGWrapper from './SVGWrapper';
import { Row, Col } from 'antd';

import { StoreContextProvider } from '../contexts/StoreContext';
import { MouseContextProvider } from '../contexts/MouseContext';
import { drawStyleFactory } from '../utils';
import { drawStatusTypes, labelStatusTypes, shapeTypes } from '../constants';
import LeftToolbar from './LeftTool';
import LabelBox from './LabelBox';
import RightToolbar from './RightTool';
import XMLPreviewBox from './XMLPreviewBox';
import './index.scss';

function LabelImg(props) {
    const { labelTypes, closePointRegion } = props;

    const initialStoreState = {
        imageFiles: [],
        selDrawImageIndex: null,
        selImageIndexes: [],
        imageSizes: [],
        drawStyle: drawStyleFactory(0),
        drawStatus: drawStatusTypes.IDLE,
        selShapeType: shapeTypes.POLYGON,
        currentShape: null,
        shapes: [],
        selShapeIndex: null,
        labelTypes,
        selLabelType: null,
        labelBoxStatus: labelStatusTypes.IDLE,
        labelBoxVisible: false,
        selPreviewIndex: null,
        xmlPreviewBoxVisible: false,
        urlBoxVisible: false,
        closePointRegion,
    };
    const initialMouseState = {
        mouseCoordinate: { x: 0, y: 0 },
    };

    const onContextMenu = (event) => {
        event.preventDefault();
    };

    useEffect(() => {
        document.addEventListener('contextmenu', onContextMenu);

        return () => {
            document.removeEventListener('contextmenu', onContextMenu);
        };
    }, []);

    return (
        <StoreContextProvider initialState={initialStoreState}>
            <MouseContextProvider initialState={initialMouseState}>
                <Row type="flex" justify="center" style={{ height: '100%' }}>
                    <Col xs={24} style={{ height: '100%' }}>
                        <Row type="flex" justify="center" style={{ height: '100%' }}>
                            <Col xs={24} md={3} style={{ maxHeight: '100%', overflow: 'auto' }}>
                                <LeftToolbar />
                            </Col>
                            <Col xs={24} md={17} style={{}}>
                                <Row type="flex" justify="center" style={{ height: '100%' }}>
                                    <Col xs={24} style={{ height: 'calc(100% - 30px)' }}>
                                        <SVGWrapper />
                                    </Col>
                                    <Col xs={24} style={{ height: '30px' }}>
                                        Status
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={24} md={4} style={{ maxHeight: '100%', overflow: 'auto' }}>
                                <RightToolbar />
                            </Col>
                            <LabelBox />
                            <XMLPreviewBox />
                        </Row>
                    </Col>
                </Row>
            </MouseContextProvider>
        </StoreContextProvider>
    );
}

LabelImg.defaultProps = {
    labelTypes: [],
    closePointRegion: 4,
};

LabelImg.propTypes = {
    labelTypes: PropTypes.arrayOf(PropTypes.string),
    closePointRegion: PropTypes.number,
};

export default LabelImg;
