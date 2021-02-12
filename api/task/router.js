// build your `/api/tasks` router here
const express = require("express")
const Task = require("../task/model")

const router = express.Router()

router.get("/tasks", async (request, response) => {
    try {
        let tasks = await Task.get()

        return response.status(200).json(tasks)
    } catch (error) {
        return response.status(500).json({"message": "unable to get resources"})
    }
})


router.post("/tasks", async (request, response) => {
    try {
        let task = request.body

        let result = await Task.insert(task)

        return response.status(200).json(result)
    } catch (error) {
        return response.status(500).json({"message": "unable to post resource"})
    }
})

module.exports = router
