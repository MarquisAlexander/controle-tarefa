const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const user_id = request.headers.authorization;

        const tb_tarefas = await connection('tb_tarefas')
        .where('user_id', user_id)
        .select('*')

        return response.json(tb_tarefas);
    }
}