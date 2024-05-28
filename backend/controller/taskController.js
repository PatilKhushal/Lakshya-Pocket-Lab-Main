const { validationResult } = require("express-validator");
const { taskModel } = require("../model/taskModel");


const handleGetTasks = async (request, response) => {
    const tasks = await taskModel.find({});
    return response.status(200).json({statusCode : 200, tasks, totalLength : tasks.length})
}

const handleGetSpecificTask = async (request, response) => {
    const blog = await taskModel.findById(request.params.id)
    return response.status(200).json(blog);
}

const handlePostTask = async (request, response) => {
    console.log('request.body', request.body)
    let validation = validationResult(request);
    if (!validation.isEmpty())
    return response
      .status(400)
      .json({ statusCode: 400, error: validation.array() });
    
    const taskCreated = await taskModel.create(request.body);
    if(!taskCreated)
        return response.status(500).json({statusCode: 500, error : "Internal Server Error"});
    return response.status(200).json({statusCode: 200, taskCreated});
}

const updateSpecificTask = async (request, response) => {
    const taskUpdated = await taskModel.findOneAndUpdate({_id : request.params.id}, request.body, {
        new : true
    });
    if(!taskUpdated)
    return response.status(500).json({statusCode: 500, error : "Internal Server Error"});
    return response.status(200).json({statusCode: 200, taskUpdated});
}

const deleteSpecificTask = async (request, response) => {
    const taskDeleted = await taskModel.findByIdAndDelete(request.params.id);
    const tasks = await taskModel.find({})
    if(!taskDeleted)
    return response.status(500).json({statusCode: 500, error : "Internal Server Error"});
    return response.status(200).json({statusCode : 200, tasks, totalLength : tasks.length})
}

module.exports = {
    handleGetTasks,
    handleGetSpecificTask,
    handlePostTask,
    updateSpecificTask,
    deleteSpecificTask
}