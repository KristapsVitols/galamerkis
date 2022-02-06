'use strict';

const slugify = require('slugify');
const {sendMail} = require('../../subscribe/services/sendgrid-email-service');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
    lifecycles: {
        beforeCreate(data) {
            data.slug = slugify(data.title, {
                lower: true,
                strict: true,
            });
        },
        async afterUpdate(post, id, updatedFields) {
            // has to be published and have email title
            if (!updatedFields.published_at || !post.emailTitle) {
                return;
            }

            // Post has been published, schedule an email send.
            await sendMail(post);
        },
    }
};
