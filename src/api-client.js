const URL = 'https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=422434c7099f92a67eac9c9c0331154b&format=json'

function getArtists() {
    return fetch(URL)
    .then(response => response.json())
    .then(data => data.topartists.artist)
    .then(artists => artists.map(artist => ({
        
            name: artist.name,
            image: artist.image[3]['#text'],
            likes: 250,
            comments: 175
        
    })))
}
export { getArtists }
