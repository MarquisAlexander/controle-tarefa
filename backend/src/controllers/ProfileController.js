const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const ong_id = request.headers.authorization;

        const tb_tarefas = await connection('tb_tarefas')
        .where('ong_id', ong_id)
        .select('*')

        return response.json(tb_tarefas);
    }
}