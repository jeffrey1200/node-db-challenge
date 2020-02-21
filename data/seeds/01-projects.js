exports.seed = function(knex) {
  return knex("projects").insert([
    {
      id: 1,
      name: "sponsor mom",
      description: "bring mama to the US",
      completed: false
    },
    {
      id: 2,
      name: "Find a job",
      description: "Land a dev job making 6 figs",
      completed: false
    },
    {
      id: 3,
      name: "Make dinner",
      description: "Hardest project ever",
      completed: false
    }
  ]);
};
