//Array of objects for the students
let persons = [
  {
    id: 1,
    name: "Jennder",
    lastname: "Ramos",
    cedula: "22000000",
    photo: "jennder",
    hobbies: ["Música", "Dormir", "Pescar", "Procrastinar"],
    acreditables: ["Guitarra", "Dibujo", "Teatro", "Inglés"],
  },
  {
    id: 2,
    name: "Berta",
    lastname: "Silvera",
    cedula: "31000000",
    photo: "berta",
    hobbies: ["Estudiar", "Dibujar", "Leer", "Escribir"],
    acreditables: ["Pintura", "Teatro", "Recreacion", "Cuatro"],
  },
  {
    id: 3,
    name: "Rosbert",
    lastname: "Quijada",
    cedula: "30000000",
    photo: "rosbert",
    hobbies: ["Saltar", "Cuatro", "Ver TV", "Caminar"],
    acreditables: ["Ludo", "Refrigeración", "Cuatro", "Francés"],
  },
  {
    id: 4,
    name: "Alfonzo",
    lastname: "Hernandez",
    cedula: "31000000",
    photo: "alfonzo",
    hobbies: ["Hablar", "Reir", "Teléfono", "Ver"],
    acreditables: ["Cuatro", "Pintura", "Dibujo", "Ludo"],
  },
  {
    id: 5,
    name: "Niria",
    lastname: "Martinez",
    cedula: "31000000",
    photo: "niria",
    hobbies: ["Comer", "Vender", "Correr", "Generar"],
    acreditables: ["Cuatro", "Inglés", "Guitarra", "Teatro"],
  },
  {
    id: 6,
    name: "Thais",
    lastname: "Rodriguez",
    cedula: "30000000",
    photo: "thais",
    hobbies: ["Salir", "Respirar", "Cantar", "Patear"],
    acreditables: ["Teatro", "Francés", "Ludo", "Recreacion"],
  },
  {
    id: 7,
    name: "Jerry",
    lastname: "Rodriguez",
    cedula: "20000000",
    photo: "jerry",
    hobbies: ["Cocinar", "Borrar", "Preveer", "Encontrar"],
    acreditables: ["Ludo", "Cuatro", "Inglés", "Guitarra"],
  },
];

//Variable to generate the table and the headers
let usersTable =
  '<table class="content-table">' +
  "<th>ID</th>" +
  "<th>Nombre</th>" +
  "<th>Apellido</th>" +
  "<th>Cedula</th>";

//Variables to select users

let pageSize = 4;
let lowerLimit = 0;
let uppwerLimit = lowerLimit + pageSize;

//Function to generate the students data

function tableData() {
  let usersTableData = "";
  let usersPhotos = "";
  if (uppwerLimit > persons.length) {
    uppwerLimit = persons.length;
  }
  for (let i = lowerLimit; i < uppwerLimit; i++) {
    usersTableData +=
      "<tr>" +
      "<td>" +
      persons[i].id +
      "</td>" +
      "<td>" +
      persons[i].name +
      "</td>" +
      "<td>" +
      persons[i].lastname +
      "</td>" +
      "<td>" +
      persons[i].cedula +
      "</td>" +
      "</tr>";

    usersPhotos +=
      "<figure>" +
      '<img class="profile-picture" onclick="showCard(' +i +", 'hobbies')\" src=\"assets/img/" + persons[i].photo +'.jpg"/>' +
      "<figcaption>" +
      persons[i].name +
      " " +
      persons[i].lastname +
      "</figcaption> </figure>";
  }

  document.getElementById("table-container").innerHTML =
    usersTable + usersTableData;
  document.getElementById("photos-container").innerHTML = usersPhotos;
  document.getElementById("cards").innerHTML = "";
}

function turnPageDown() {
  if (lowerLimit > 0) {
    lowerLimit -= pageSize;
    uppwerLimit -= pageSize;
    tableData();
  }
}

function turnPageUp() {
  if (uppwerLimit < persons.length) {
    lowerLimit += pageSize;
    uppwerLimit += pageSize;

    if (uppwerLimit > persons.length) {
      uppwerLimit = lowerLimit + (persons.length - lowerLimit);
    }

    tableData();
    uppwerLimit = lowerLimit + pageSize;
  }
}

//Call to generate the table
tableData();

function showCard(user, type) {
  let card = "";

  card +=
    '<div class="card">' +
    ' <table class="table-card" onclick="showCard(' +
    user +
    ",'hobbies')\">" +
    " <tr>" +
    "<td>";

  if (type == "hobbies") {
    card += " <h3>Hobbies</h3>";
  } else if (type == "acreditables") {
    card += " <h3>Acreditables</h3>";
  }

  card += ' <ul class="hobbies-list">';

  for (let i = 0; i < persons[user][type].length; i++) {
    card += "<li>" + persons[user][type][i];
    +"</li>";
  }

  card +=
    '</ul>' +
    '</td>' +
    '</tr>' +
    '</table>'+
    '<div class="arrows">' +
    '  <i class="card-left-arrow" onclick="showCard(' + user +',\'hobbies\')\">◄</i>' +
    '<i class="card-right-arrow" onclick="showCard(' +user +',\'acreditables\')\">►</i>' +
    '</div>' +
    '</div>';

  console.log(type);

  document.getElementById("cards").innerHTML = card;
}
