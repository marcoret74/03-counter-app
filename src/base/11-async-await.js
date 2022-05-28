export const getImagen = async () => {
    try {
        const apiKey = '8hno49bhv8Myk6X64oGLkthbiDLVOypv';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();
        const { url } = await data.images.original;

        // const img = document.createElement('img');
        // img.src = url;
        // document.body.append(img);
        return url;
    } catch (error) {
        return 'No existe';
    }
};

//getImagen();
/*
peticion
    .then(resp => resp.json())
    .then(({ data }) => {
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    })
    .catch(console.warn);
*/