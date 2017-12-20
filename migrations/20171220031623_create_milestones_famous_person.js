
exports.up = function(knex, Promise) {
    return knex.schema.table('milestones', function(table){
        table.integer('famous_person_id').unsigned()
        table.foreign('famous_person_id').references('famous_people.id')
      })
};

exports.down = function(knex, Promise) {
    return  table.dropColumm('famous_person_id')
            table.dropForeign('famous_person_id')
};
