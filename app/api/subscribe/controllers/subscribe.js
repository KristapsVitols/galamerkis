'use strict';

const {subscribe} = require('../services/sendgrid-subscribe-service');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async index(ctx) {
        try {
            await subscribe(ctx.request.body.email);

            return {success: true};
        } catch (e) {
            return {
                success: false,
                message: e.message,
            }
        }
    }
};
