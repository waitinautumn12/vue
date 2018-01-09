const colorentry = (track) => {
  let arr = {
    E43: [
      {name: 'black', color: '炫晶黑', src: 'src/images/common/black.png'},
      {name: 'brown', color: '棕色', src: 'src/images/common/brown.png'},
      {name: 'grey', color: '浅灰', src: 'src/images/common/grey.png'},
      {name: 'red', color: '炫动红', src: 'src/images/common/red.png'},
      {name: 'silver', color: '钻石银', src: 'src/images/common/silver.png'}
    ],
    E63: [
      {name: 'black', color: '炫晶黑', src: 'src/images/common/black.png'},
      {name: 'brown', color: '棕色', src: 'src/images/common/brown.png'},
      {name: 'grey', color: '浅灰', src: 'src/images/common/grey.png'},
      {name: 'red', color: '炫动红', src: 'src/images/common/red.png'}
    ],
    E63S: [
      {name: 'black', color: '炫晶黑', src: 'src/images/common/black.png'},
      {name: 'brown', color: '棕色', src: 'src/images/common/brown.png'},
      {name: 'grey', color: '浅灰', src: 'src/images/common/grey.png'}
    ]
  }
  for (let prop in arr) {
    if (prop === track) {
      return arr[prop]
    }
  }
}

export {
  colorentry
}
