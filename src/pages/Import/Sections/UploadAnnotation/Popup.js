import { Modal, Input, Col, Card, Row, Select } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { isUploadTrue } from '../../../../components/redux/eventSlice';
import { useDispatch, useSelector } from 'react-redux';
import './Popup.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Upload } from 'antd';
const { Dragger } = Upload;

function PopupAnnotations() {
    const dispatch = useDispatch();
    const check = useSelector((state) => state.eventSlice.isUploadModal);
    const [isHidden, setIsHidden] = useState(false);
    const handleHiddenOption = () => {
        setIsHidden(true);
    };
    const onCancel = () => {
        console.log('cancel');
        dispatch(isUploadTrue(false));
    };

    return (
        <Modal
            className="modal-content"
            title={
                <div className="modal-header" style={{ width: '100%', cursor: 'move' }}>
                    Import annotation
                </div>
            }
            open={check}
            onCancel={onCancel}
        >
            <div className="modal-body">
                <div className="import-format">
                    <div className="title">Import format *</div>
                    <div className="select-format">
                        <Select
                            className="select-tag"
                            placeholder="Select annotation format"
                            optionFilterProp="children"
                            options={[
                                {
                                    value: '1',

                                    label: (
                                        <>
                                            <FontAwesomeIcon
                                                style={{ paddingRight: '8px', color: '#1890ff' }}
                                                icon={faArrowUpFromBracket}
                                            />
                                            COCO
                                        </>
                                    ),
                                },
                                {
                                    value: '2',
                                    label: (
                                        <>
                                            <FontAwesomeIcon
                                                style={{ paddingRight: '8px', color: '#1890ff' }}
                                                icon={faArrowUpFromBracket}
                                            />
                                            YOLO
                                        </>
                                    ),
                                },
                            ]}
                        />
                    </div>
                </div>
                <div className="import-file">
                    <Dragger>
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    </Dragger>
                </div>
            </div>
        </Modal>
    );
}

export default PopupAnnotations;
