const carmodel = (track) => {
  let arr = {
    bc: [
      {carname: 'A-Class', img: 'src/images/models/A-Class.png'},
      {carname: 'C-Class', img: 'src/images/models/C-Class.png'},
      {carname: 'CLA', img: 'src/images/models/CLA.png'},
      {carname: 'CLS', img: 'src/images/models/CLS.png'},
      {carname: 'E-Class', img: 'src/images/models/E-Class.png'},
      {carname: 'G-Class', img: 'src/images/models/G-Class.png'},
      {carname: 'GLA', img: 'src/images/models/GLA.png'},
      {carname: 'GLC', img: 'src/images/models/GLC.png'},
      {carname: 'GLE', img: 'src/images/models/GLE.png'},
      {carname: 'GLS', img: 'src/images/models/GLS.png'},
      {carname: 'GT-roadster', img: 'src/images/models/GT-roadster.png'},
      {carname: 'S-class', img: 'src/images/models/S-class.png'},
      {carname: 'SL', img: 'src/images/models/SL.png'}
    ],
    ad: [
      {carname: 'A6', img: 'src/images/models/C-Class.png'},
      {carname: 'A6L', img: 'src/images/models/CLA.png'},
      {carname: 'A8', img: 'src/images/models/CLS.png'},
      {carname: 'A8L', img: 'src/images/models/E-Class.png'},
      {carname: 'R8', img: 'src/images/models/G-Class.png'}
    ]
  }
  for (let prop in arr) {
    if (prop === track) {
      return arr[prop]
    }
  }
}

export {
  carmodel
}
