exports.seed = function(knex) {
  return knex("tasks").insert([
    {
      id: 1,
      description: "Interview Prep",
      notes: "Need to schedule mock interview",
      completed_task: false,
      project_id: 2
    },
    {
      id: 2,
      description: "Rip carpets out",
      notes: "",
      completed_task: false,
      project_id: 1
    },
    {
      id: 3,
      description: "Update resume",
      notes: "",
      completed_task: false,
      project_id: 2
    },
    {
      id: 4,
      description: "Go grocery shopping",
      notes: "",
      completed_task: false,
      project_id: 3
    },
    {
      id: 5,
      description: "Make shopping list and dont forget anything",
      notes: "",
      completed_task: false,
      project_id: 3
    },
    {
      id: 6,
      description: "Buy plantains for tostones",
      notes: "",
      completed_task: false,
      project_id: 1
    }
  ]);
};
