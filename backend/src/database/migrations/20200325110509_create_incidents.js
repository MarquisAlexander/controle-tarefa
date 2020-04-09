
exports.up = function(knex) {
    return knex.schema.createTable('tb_tarefas', function (table){
        table.increments();

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.string('prioridade').notNullable();

        table.string('ong_id').notNullable();

        table.foreign('ong_id').references('id').inTable('ongs');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('tb_tarefas');
};
