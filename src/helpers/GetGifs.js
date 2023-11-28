export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=BAVpNaufwAcD80tS22WWm07q3jG7TiAA&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(({ id, title, images }) => (
        {
            id,
            title,
            url: images?.downsized_medium.url
        }
    ));
    console.log(gifs);
    return gifs;
}