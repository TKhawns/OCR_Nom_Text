import React from 'react';
import { Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { isOpenDescript } from '../../components/redux/eventSlice';

function DescriptionModal(props) {
    const check = useSelector((state) => state.eventSlice.isOpenDescript);
    const { description } = props;
    const dispatch = useDispatch();

    const handleOk = () => {
        dispatch(isOpenDescript(false));
    };
    const handleCancel = () => {
        dispatch(isOpenDescript(false));
    };
    return (
        <Modal title="Mô tả của bạn" open={check} onOk={handleOk} onCancel={handleCancel}>
            {description}
        </Modal>
    );
}
export default DescriptionModal;
