const wheelitems = (track, num) => {
  var arr = []
  for (let i = 0; i < num; i++) {
    var arrli = {class: 'lg lg' + i,
      wheel: [
        'src/images/' + track + '/lg' + i + '/0.png',
        'src/images/' + track + '/lg' + i + '/1.png',
        'src/images/' + track + '/lg' + i + '/2.png',
        'src/images/' + track + '/lg' + i + '/3.png',
        'src/images/' + track + '/lg' + i + '/4.png',
        'src/images/' + track + '/lg' + i + '/5.png',
        'src/images/' + track + '/lg' + i + '/6.png',
        'src/images/' + track + '/lg' + i + '/7.png',
        'src/images/' + track + '/lg' + i + '/8.png',
        'src/images/' + track + '/lg' + i + '/9.png',
        'src/images/' + track + '/lg' + i + '/10.png',
        'src/images/' + track + '/lg' + i + '/11.png',
        'src/images/' + track + '/lg' + i + '/12.png',
        'src/images/' + track + '/lg' + i + '/13.png',
        'src/images/' + track + '/lg' + i + '/14.png',
        'src/images/' + track + '/lg' + i + '/15.png',
        'src/images/' + track + '/lg' + i + '/16.png',
        'src/images/' + track + '/lg' + i + '/17.png',
        'src/images/' + track + '/lg' + i + '/18.png',
        'src/images/' + track + '/lg' + i + '/19.png',
        'src/images/' + track + '/lg' + i + '/20.png',
        'src/images/' + track + '/lg' + i + '/21.png',
        'src/images/' + track + '/lg' + i + '/22.png',
        'src/images/' + track + '/lg' + i + '/23.png',
        'src/images/' + track + '/lg' + i + '/24.png',
        'src/images/' + track + '/lg' + i + '/25.png',
        'src/images/' + track + '/lg' + i + '/26.png',
        'src/images/' + track + '/lg' + i + '/27.png',
        'src/images/' + track + '/lg' + i + '/28.png',
        'src/images/' + track + '/lg' + i + '/29.png',
        'src/images/' + track + '/lg' + i + '/30.png',
        'src/images/' + track + '/lg' + i + '/31.png',
        'src/images/' + track + '/lg' + i + '/32.png',
        'src/images/' + track + '/lg' + i + '/33.png',
        'src/images/' + track + '/lg' + i + '/34.png',
        'src/images/' + track + '/lg' + i + '/35.png'
      ]
    }
    arr.push(arrli)
  }
  return arr
}

export {
  wheelitems
}
