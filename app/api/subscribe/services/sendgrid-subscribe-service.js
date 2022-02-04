const client = require('@sendgrid/client');
const emailValidator = require('email-validator');

exports.subscribe = async (email) => {
    if (!emailValidator.validate(email)) {
        throw new Error('Nepareizs e-pasts!');
    }

    client.setApiKey(process.env.SENDGRID_API_KEY);

    await client.request({
        method: 'PUT',
        url: '/v3/marketing/contacts',
        body: {
            list_ids: ['a3a4c071-aef5-4295-8d1b-d7a09b8ae3b0'],
            contacts: [{email}],
        },
    });
}