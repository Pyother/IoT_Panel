const test = () => {
    fetch("https://overpass-api.de/api/interpreter", {
        method: "POST",
        body: "[out:json];rel(2768922);rel[boundary=administrative](r);out geom;"
    }).then((response) => {
        console.log(response);
    }).catch((err) => {
        console.error(err);
    });
}

module.exports = test;
