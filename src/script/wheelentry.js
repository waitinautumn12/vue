const wheelentry = (track) => {
  let arr = {
    E43: [
      {name: 'twenty', wheel: '默认轮毂', src: 'src/images/common/wheel1.png'},
      {name: 'nineteen', wheel: '19寸轮毂', src: 'src/images/common/wheel2.png'},
      {name: 'eighteen', wheel: '有色轮毂', src: 'src/images/common/wheel3.png'}
    ],
    E63: [
      {name: 'twenty', wheel: '默认轮毂', src: 'src/images/common/wheel1.png'},
      {name: 'nineteen', wheel: '13寸轮毂', src: 'src/images/common/wheel2.png'}
    ],
    E63S: [
      {name: 'twenty', wheel: '默认轮毂', src: 'src/images/common/wheel1.png'},
      {name: 'nineteen', wheel: '13寸轮毂', src: 'src/images/common/wheel2.png'}
    ],
    A6: [
      {name: 'twenty', wheel: '默认轮毂', src: 'src/images/common/wheel1.png'},
      {name: 'nineteen', wheel: '13寸轮毂', src: 'src/images/common/wheel2.png'}
    ]
  }
  for (let prop in arr) {
    if (prop === track) {
      return arr[prop]
    }
  }
}

export {
  wheelentry
}
