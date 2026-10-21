export function getImageUrl(imageName) {
  return import.meta.env.VITE_API_URL + "images/img/" + imageName;
}

export function getIconUrl(imageName) {
  return import.meta.env.VITE_API_URL + "images/icon/" + imageName;
}

export function getLogoUrl(imageName) {
  return import.meta.env.VITE_API_URL + "images/logo/" + imageName;
}

export function getFromApi(path) {
  return import.meta.env.VITE_API_URL + path;
}

export function getLanguage(lang) {
  fetch(import.meta.env.VITE_API_URL + "language/" + lang)
    .then((r) => {
      return r.json();
    })
    .catch((e) => {
      console.error(e);
    });
}

