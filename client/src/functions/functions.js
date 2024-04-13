export const locateInMap = async (lat, long) => {
    let a = await fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${long}&apiKey=01684ca95f9345eca96d482708804522`)
    let b = await a.json();
    return b.features[0].properties.formatted
}
