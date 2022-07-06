// export const baseUrl = 'https://conga-recip-11304rk9iu83h-922651169.us-west-1.elb.amazonaws.com/';
// export const baseUrl = 'https://conga-recip-11304rk9iu83h-922651169.us-west-1.elb.amazonaws.com/';
// export const baseUrl = 'https://apttus-proxy.herokuapp.com/https://conga-rcc-staging.congacloud.io/api/admin/v1/';
let baseUrl;
if (window.location.host === 'rlp-dev.congacloud.io')
    baseUrl = 'https://rlp-dev.congacloud.io/api/catalog/v1/';
else
    baseUrl = 'https://apttus-proxy.herokuapp.com/https://rlp-dev.congacloud.io/api/catalog/v1/';

export { baseUrl };