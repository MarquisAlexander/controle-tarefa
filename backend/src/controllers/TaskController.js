const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const { page = 1 } = request.query;

        const [count] = await connection('tb_tarefas').count();

        const tb_tarefas = await connection('tb_tarefas')
        .join('users', 'users.id', '=', 'tb_tarefas.user_id')
        .limit(5)
        .offset((page -1) *5)
        .select([
        'tb_tarefas.*',
        'users.name',
        'users.email',
        'users.whatsapp',
        ]);

        response.header('X-Toral-Count', count['count(*)']);

        return response.json(tb_tarefas);
    },


    async create(request, response) {
        const { title, description, prioridade, responsavel } = request.body;
        const user_id = request.headers.authorization;

        const [id] = await connection('tb_tarefas').insert({
            title,
            description,
            prioridade,
            responsavel,
            user_id,
        });

        return response.json({ id });
    },

    async delete(request, response) {
        const { id } = request.params;
        const user_id = request.headers.authorization;

        const incident = await connection('tb_tarefas')
            .where('id', id)
            .select('user_id')
            .first();

            if (incident.user_id != user_id) {
                return response.status(401).json({error: 'Você não tem permissão para isso'});
            }

            await connection('tb_tarefas').where('id', id).delete();

            return response.status(204).send();
    }
};