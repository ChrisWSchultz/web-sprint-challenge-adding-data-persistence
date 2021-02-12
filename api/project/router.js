// build your `/api/projects` router here
const express = require("express")
const Project = require("../project/model")

const router = express.Router()

router.get("/projects", async (request, response) => {
    try {
        let resources = await Project.get()

        return response.status(200).json(resources)
    } catch (error) {
        return response.status(500).json({"message": "unable to get projects"})
    }
})


router.post("/projects", async (request, response) => {
    try {
        let project = request.body

        let result = await Project.insert(project)

        return response.status(200).json(result)
    } catch (error) {
        return response.status(500).json({"message": "unable to post projects"})
    }
})

module.exports = router

