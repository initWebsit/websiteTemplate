const { protocol, hostname } = window.location

export default {
    mock: false,
    nodeEnv: 'test',
    useDomain: false,
    host_official: protocol + '//' + hostname + ':6122',
    api_help: '/proxyHelp',
    api_api: '/proxyApi',
    api_client: '/proxyClient',
};
