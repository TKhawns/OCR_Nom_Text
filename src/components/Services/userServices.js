import axios from '../../axios';
const handleLoginApi = async (email, password) => {
    return axios.post('user/login', { email: email, password: password });
};
const handleSignUpApi = async (email, password, gender, name, phone) => {
    return axios.post('user/sign-up', {
        email: email,
        password: password,
        gender: gender,
        full_name: name,
        phone: phone,
    });
};

export { handleLoginApi, handleSignUpApi };
