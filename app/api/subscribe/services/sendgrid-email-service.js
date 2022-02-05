const client = require('@sendgrid/client');
const {template} = require('./email-template');

exports.sendMail = async (post) => {
    client.setApiKey(process.env.SENDGRID_API_KEY);

    const [response, body] = await client.request({
        method: 'POST',
        url: '/v3/marketing/singlesends',
        body: {
            name: post.title,
            send_to: {
                list_ids: ['a3a4c071-aef5-4295-8d1b-d7a09b8ae3b0'],
            },
            email_config: {
                subject: post.emailTitle,
                html_content: template
                    .replace(/{{postTitle}}/g, post.title)
                    .replace(/{{postUrl}}/g, `https://www.galamerkis.lv/${post.category.name}/${post.slug}`)
                    .replace(/{{postImage}}/g, post.image.formats.large.url),
                sender_id: 2604202,
                suppression_group_id: 19004,
            },
        }
    });

    const requestAgain = {
        method: 'PUT',
        url: `/v3/marketing/singlesends/${body.id}/schedule`,
        body: {
            send_at: "now",
        }
    }

    const res = await client.request(requestAgain);

    console.log(res);
};