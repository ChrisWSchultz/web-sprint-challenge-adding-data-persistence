// build your `Task` model here
const db = require("../../data/dbConfig")

function get(id) {
    if(id) {
        return db.table("tasks")
            .leftJoin("projects", "tasks.project_id", "projects.project_id")
            .where("task_id", id)
            .select(
                "tasks.task_id",
                "tasks.task_description",
                "tasks.task_notes",
                "tasks.task_completed",
                "projects.project_name",
                "projects.project_description"
            )
            .first()
    } else {
        return db.table("tasks")
            .leftJoin("projects", "tasks.project_id", "projects.project_id")
            .select(
                "tasks.task_id",
                "tasks.task_description",
                "tasks.task_notes",
                "tasks.task_completed",
                "projects.project_name",
                "projects.project_description"
            )
    }
}

function insert(task) {
    return db("tasks")
        .insert(task, "task_id")
        .then(([id]) => get(id))
}

function update(id, changes) {
    return db("tasks")
        .where("task_id", id)
        .update(changes)
        .then(count => (count > 0 ? get(id) : null))
}

function remove(id) {
    return db("tasks")
        .where("task_id", id)
        .delete()
}

module.exports = {
    get,
    insert,
    update,
    remove,
};
