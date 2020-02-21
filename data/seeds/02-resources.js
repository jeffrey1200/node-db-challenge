exports.seed = function(knex) {
  return knex("resources").insert([
    {
      id: 1,
      name: "Wikipedia",
      description: "Wikipedia description"
    },
    {
      id: 2,
      name: "Lambda",
      description: "Lambda description"
    },
    {
      id: 3,
      name: "Google",
      description: "Google description"
    }
  ]);
};
