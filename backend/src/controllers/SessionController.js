const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { email } = request.body;

        const user = await connection('users')
        .where('email', email)
        .select('name')
        .select('id')
        .first();

        if (!user) {
            return response.status(400).json({ error: 'No User found with this Email' });
        }

        return response.json(user);
    }
}