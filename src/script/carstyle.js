const carstyle = (track) => {
  let arr = {
    A_Class: [
      {name: 'E43', url: 'src/images/common/E43.png', style: 'margin-left: 2.22rem;'},
      {name: 'E63', url: 'src/images/common/E63.png'},
      {name: 'E63S', url: 'src/images/common/E63S.png'}
    ],
    A6: [
      {name: 'A6', url: 'src/images/common/A6.png', style: 'margin-left: 4.22rem;'},
      {name: 'A6L', url: 'src/images/common/A6L.png'}
    ]
  }

  for (let prop in arr) {
    if (prop === track) {
      return arr[prop]
    }
  }
}

export {
  carstyle
}
