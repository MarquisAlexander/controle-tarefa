const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const { page = 1 } = request.query;

        const [count] = await connection('tb_tarefas').count();

        const tb_tarefas = await connection('tb_tarefas')
        .join('ongs', 'ongs.id', '=', 'tb_tarefas.ong_id')
        .limit(5)
        .offset((page -1) *5)
        .select([
        'tb_tarefas.*',
        'ongs.name',
        'ongs.email',
        'ongs.whatsapp',
        ]);

        response.header('X-Toral-Count', count['count(*)']);

        return response.json(tb_tarefas);
    },


    async create(request, response) {
        const { title, description, prioridade } = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await connection('tb_tarefas').insert({
            title,
            description,
            prioridade,
            ong_id,
        });

        return response.json({ id });
    },

    async delete(request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const incident = await connection('tb_tarefas')
            .where('id', id)
            .select('ong_id')
            .first();

            if (incident.ong_id != ong_id) {
                return response.status(401).json({error: 'Você não tem permissão para isso'});
            }

            await connection('tb_tarefas').where('id', id).delete();

            return response.status(204).send();
    }
};