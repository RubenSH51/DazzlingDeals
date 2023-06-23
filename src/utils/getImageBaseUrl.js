export function getImageBaseUrl() {
    const isLocalhost = window.location.hostname.includes('localhost');
    return isLocalhost ? 'public' : 'https://github.com/rubensh51/DazzlingDeals';
  }