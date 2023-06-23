export function getImageBaseUrl() {
    const isLocalhost = window.location.hostname.includes('localhost');
    return isLocalhost ? 'public' : 'https://rubensh51.github.io/DazzlingDeals';
  }