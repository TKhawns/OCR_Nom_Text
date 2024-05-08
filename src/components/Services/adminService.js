import axios from '../../axios';

const getAllUserModel = async () => {
    return axios.get('admin/get-usermodel');
};
const updateStatus = async (model_id, status) => {
    return axios.post('admin/update-status', {
        model_id: model_id,
        status: status,
    });
};

export { getAllUserModel, updateStatus };
