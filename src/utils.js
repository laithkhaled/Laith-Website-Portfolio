export const getImageUrl = (path) => {
    return new URL(`/assets/skills/${path}`, import.meta.url).href;
}