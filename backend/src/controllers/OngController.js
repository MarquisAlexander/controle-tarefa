const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {

    async index(request, response) {
        const users = await connection('users').select('*');
    
        return response.json(users);
    },

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(2).toString('HEX');
    
        await connection('users').insert({
            id,
            name,
            email,
            whatsapp,
        })
    
        return response.json({ id });
    },
};