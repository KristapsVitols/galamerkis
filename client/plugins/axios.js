// SSR calls need it due to docker setup blah blah otherwise there is some SSL error
export default async function ({ $axios }) {
    let httpsAgent;

    if (process.server) {
        const https = await import('https');
        httpsAgent = new https.Agent({
            rejectUnauthorized: false
        });
    }

    $axios.onRequest(config => {
        if (httpsAgent) {
            config.httpsAgent = httpsAgent;
        }
    })
}