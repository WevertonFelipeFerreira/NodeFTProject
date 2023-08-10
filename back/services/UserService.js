import userRepository from "../repositories/UserRepository.js"

const saveUser = (userModel) => {
    return userRepository.saveUser(userModel);
}

const getUserById = (id) => {
    return userRepository.getUserById(id);
}

const getAllUsers = () => {
    return userRepository.getAllUsers();
}

const updateUser = (id ,userModel) => {
    return userRepository.updateUserById(id, userModel);
}

const deleteUserById = (id) => {
    return userRepository.deleteUserById(id);
}

const service = {
    saveUser,
    getUserById,
    getAllUsers,
    updateUser,
    deleteUserById
};

export default service;