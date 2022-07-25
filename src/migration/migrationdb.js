'use strict';

const sequelize_fictures = require('sequelize-fixtures');
const db = require("../../DBConfig");

const models = {
  Room: db.room,
  Client: db.client,
  Reserve: db.reserve,
  Payment: db.payment,
  Factura: db.factura
}

const fixtures = [
  // Client
  {
    'model': 'Client',
    'data': {"id": 1, "firstName":"Teddi","lastName":"Scoggan","age":23,"ci":495122,"phone":"767-399-6871","email":"tscoggan0@census.gov","addres":"869 Schmedeman Lane","nit":"387","nationalize":"Thailand"},
  },
  {
    'model': 'Client',
    'data': {"id": 2, "firstName":"Kerry","lastName":"Waleran","age":34,"ci":107892,"phone":"521-289-6049","email":"kwaleran1@apple.com","addres":"46320 Kensington Avenue","nit":"07206","nationalize":"Egypt"},
  },
  {
    'model': 'Client',
    'data': {"id": 3, "firstName":"Bern","lastName":"Pabst","age":54,"ci":35121,"phone":"850-576-6907","email":"bpabst2@nbcnews.com","addres":"85 Cody Way","nit":"6597","nationalize":"Portugal"}
  },
  {
    'model': 'Client',
    'data': {"id": 4, "firstName":"Roderigo","lastName":"Smoth","age":22,"ci":93234,"phone":"776-825-1249","email":"rsmoth3@networkadvertising.org","addres":"532 Anhalt Hill","nit":"0","nationalize":"China"}
  },
  {
    'model': 'Client',
    'data': {"id": 5, "firstName":"Ricoriki","lastName":"Birks","age":55,"ci":35993,"phone":"472-782-4434","email":"rbirks4@columbia.edu","addres":"259 School Junction","nit":"29964","nationalize":"Sweden"}
  },
  // Room
  {
      'model': 'Room',
      'data': { "id": 1, "codigo":"05C04ZZ", "nroBeds":1, "price":50.00, "status":"OCUPADO"},
  },
  {
      'model': 'Room',
      'data': { "id": 2, "codigo":"2W40X5Z", "nroBeds":2, "price":100.50, "status":"RESERVADO"},
  },
  {
      'model': 'Room',
      'data': {'id': 3, "codigo":"027P4ZZ","nroBeds":3,"price":150.00,"status":"DISPONIBLE"},
  },
  {
      'model': 'Room',
      'data': {'id': 4, "codigo":"05L30ZZ","nroBeds":4,"price":200.00,"status":"OCUPADO"},
  },
  {
      'model': 'Room',
      'data': {'id': 5, "codigo":"0GJ13ZZ","nroBeds":5,"price":225.50,"status":"DIPONIBLE"},
  },
  // RESERVE
  {
    'model': 'Reserve',
    'data': {'id': 1, "status":"PENDIENTE","startDate":"3/17/2021","endDate":"8/24/2022", 'clientId': 1, 'roomId': 1},
  },
  {
    'model': 'Reserve',
    'data': {'id': 2, "status":"PENDIENTE","startDate":"10/24/2021","endDate":"5/19/2022", 'clientId': 2, 'roomId': 2}},
  {
    'model': 'Reserve',
    'data': {'id': 3, "status":"PENDIENTE","startDate":"2/7/2022","endDate":"6/9/2022", 'clientId': 3, 'roomId': 3}},
  {
    'model': 'Reserve',
    'data': {'id': 4, "status":"PENDIENTE","startDate":"12/25/2021","endDate":"12/8/2021", 'clientId': 4, 'roomId': 4}},
  {
    'model': 'Reserve',
    'data': {'id': 5, "status":"PENDIENTE","startDate":"10/29/2021","endDate":"11/16/2021", 'clientId': 5, 'roomId': 5}
  },

  // Factura
  {
    'model': 'Factura',
    'data': {'id': 1, "nit":1,"razonSocial":"Runolfsdottir and Sons"}},
  {
    'model': 'Factura',
    'data': {'id': 2, "nit":2,"razonSocial":"Aufderhar-Bogisich"}},
  {
    'model': 'Factura',
    'data': {'id': 3, "nit":3,"razonSocial":"Howell-Reichert"}},
  {
    'model': 'Factura',
    'data': {'id': 4, "nit":4,"razonSocial":"Kertzmann, Jakubowski and Koch"}},
  {
    'model': 'Factura',
    'data': {'id': 5, "nit":5,"razonSocial":"Gerhold, Fritsch and Kilback"}
  },
  // Payment
  {
    'model': 'Payment',
    'data': {'id': 1, "amount":129.57,"methodPay":"TARJETA", 'reserveId': 1, "facturaId": 1}},
  {
    'model': 'Payment',
    'data': {'id': 2, "amount":117.37,"methodPay":"TARJETA", 'reserveId': 2, "facturaId": 2}},
  {
    'model': 'Payment',
    'data': {'id': 3, "amount":55.91,"methodPay":"TARJETA", 'reserveId': 3, "facturaId": 3}},
  {
    'model': 'Payment',
    'data': {'id': 4, "amount":59.02,"methodPay":"EFECTIVO", 'reserveId': 4, "facturaId": 4}},
  {
    'model': 'Payment',
    'data': {'id': 5, "amount":87.35,"methodPay":"EFECTIVO", 'reserveId': 5, "facturaId": 5}},
  {
    'model': 'Payment',
    'data': {'id': 6, "amount":195.96,"methodPay":"EFECTIVO", 'reserveId': 1, "facturaId": 1}},
  {
    'model': 'Payment',
    'data': {'id': 7, "amount":171.98,"methodPay":"EFECTIVO", 'reserveId': 2, "facturaId": 2}},
  {
    'model': 'Payment',
    'data': {'id': 8, "amount":61.19,"methodPay":"TRANSFERENCIA", 'reserveId': 3, "facturaId": 3}},
  {
    'model': 'Payment',
    'data': {'id': 9, "amount":110.82,"methodPay":"TRANSFERENCIA", 'reserveId': 4, "facturaId": 4}
  },
  {
    'model': 'Payment',
    'data': {'id': 10, "amount":111.92,"methodPay":"TARJETA", 'reserveId': 5, "facturaId": 5}
  }
];

const fixturesLoader = () => {
  sequelize_fictures.loadFixtures(fixtures, models).then(function(){
    console.log("Fixtures have been loaded, check your database tables ;) !!!");
  });
}

console.log(fixturesLoader());