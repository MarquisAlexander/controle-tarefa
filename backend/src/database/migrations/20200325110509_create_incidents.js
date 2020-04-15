//npx knex migrate:latest
exports.up = function(knex) {
    return knex.schema.createTable('tb_tarefas', function (table){
        table.increments();

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.string('prioridade').notNullable();
        table.string('responsavel').notNullable();

        table.string('user_id').notNullable();

        table.foreign('user_id').references('id').inTable('ongs');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('tb_tarefas');
};
