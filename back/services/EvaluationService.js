import evaluationRepository from "../repositories/EvaluationRepository.js"

const saveEvaluation = (EvaluationModel) => {
    return evaluationRepository.saveEvaluation(EvaluationModel);
}

const getEvaluationById = (id) => {
    return evaluationRepository.getEvaluationById(id);
}

const getAllEvaluations = () => {
    return evaluationRepository.getAllEvaluations();
}

const updateEvaluation = (id, EvaluationModel) => {
    return evaluationRepository.updateEvaluationById(id, EvaluationModel);
}

const deleteEvaluationById = (id) => {
    return evaluationRepository.deleteEvaluationById(id);
}

const service = {
    saveEvaluation,
    getEvaluationById,
    getAllEvaluations,
    updateEvaluation,
    deleteEvaluationById
};

export default service;