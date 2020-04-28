let imagesData = [{
    photo: "./images/canvas.jpg",
    title: "Canvas",
    description: "In Canvas, you play as a painter competing in an art competition."
}, {
    photo: "./images/everdell.png",
    title: "Everdell",
    description: "Within the charming valley of Everdell, beneath the boughs of towering trees, among meandering streams and mossy hollows, a civilization of forest critters is thriving and expanding."
}, {
    photo: "./images/teotihuacan.jpg",
    title: "Teotihuacan: City of Gods",
    description: "Travel back in time to the greatest city in Mesoamerica."
}, {
    photo: "./images/wingspan.jpg",
    title: "Wingspan",
    description: "Wingspan is a competitive, medium-weight, card-driven, engine-building board game from Stonemaier Games."
},  {
    photo: "./images/spirit_island.png",
    title: "Spirit Island",
    description: "Spirit Island is a complex and thematic cooperative game about defending your island home from colonizing Invaders"
}]

let currentPhoto = 0;

$('#photo').attr("src", imagesData[currentPhoto].photo);
$('#title').text(imagesData[currentPhoto].title);
$('#description').text(imagesData[currentPhoto].description);

