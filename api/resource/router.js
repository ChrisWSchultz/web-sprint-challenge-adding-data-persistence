// build your `/api/resources` router here
const express = require("express")
const Resource = require("../resource/model")

const router = express.Router()

router.get("/resources", async (request, response) => {
    try {
        let resources = await Resource.get()

        return response.status(200).json(resources)
    } catch (error) {
        return response.status(500).json({"message": "unable to get resources"})
    }
})


router.post("/resources", async (request, response) => {
    try {
        let resource = request.body

        let result = await Resource.insert(resource)

        return response.status(200).json(result)
    } catch (error) {
        return response.status(500).json({"message": "unable to post resource"})
    }
})

module.exports = router
