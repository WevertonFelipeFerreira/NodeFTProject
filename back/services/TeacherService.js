import teacherRepository from "../repositories/TeacherRepository.js"

const saveTeacher = (TeacherModel) => {
    return teacherRepository.saveTeacher(TeacherModel);
}

const getTeacherById = (id) => {
    return teacherRepository.getTeacherById(id);
}

const getAllTeachers = () => {
    return teacherRepository.getAllTeachers();
}

const updateTeacher = (id ,TeacherModel) => {
    return teacherRepository.updateTeacherById(id, TeacherModel);
}

const deleteTeacherById = (id) => {
    return teacherRepository.deleteTeacherById(id);
}

const service = {
    saveTeacher,
    getTeacherById,
    getAllTeachers,
    updateTeacher,
    deleteTeacherById
};

export default service;