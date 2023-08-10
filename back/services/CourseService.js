import courseRepository from "../repositories/CourseRepository.js"

const saveCourse = (CourseModel) => {
    return courseRepository.saveCourse(CourseModel);
}

const getCourseById = (id) => {
    return courseRepository.getCourseById(id);
}

const getAllCourses = () => {
    return courseRepository.getAllCourses();
}

const updateCourse = (id ,CourseModel) => {
    return courseRepository.updateCourseById(id, CourseModel);
}

const deleteCourseById = (id) => {
    return courseRepository.deleteCourseById(id);
}

const service = {
    saveCourse,
    getCourseById,
    getAllCourses,
    updateCourse,
    deleteCourseById
};

export default service;