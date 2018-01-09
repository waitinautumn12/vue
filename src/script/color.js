const carsheel = (track) => {
  return [
    'src/images/' + track + '/o/0.png',
    'src/images/' + track + '/o/1.png',
    'src/images/' + track + '/o/2.png',
    'src/images/' + track + '/o/3.png',
    'src/images/' + track + '/o/4.png',
    'src/images/' + track + '/o/5.png',
    'src/images/' + track + '/o/6.png',
    'src/images/' + track + '/o/7.png',
    'src/images/' + track + '/o/8.png',
    'src/images/' + track + '/o/9.png',
    'src/images/' + track + '/o/10.png',
    'src/images/' + track + '/o/11.png',
    'src/images/' + track + '/o/12.png',
    'src/images/' + track + '/o/13.png',
    'src/images/' + track + '/o/14.png',
    'src/images/' + track + '/o/15.png',
    'src/images/' + track + '/o/16.png',
    'src/images/' + track + '/o/17.png',
    'src/images/' + track + '/o/18.png',
    'src/images/' + track + '/o/19.png',
    'src/images/' + track + '/o/20.png',
    'src/images/' + track + '/o/21.png',
    'src/images/' + track + '/o/22.png',
    'src/images/' + track + '/o/23.png',
    'src/images/' + track + '/o/24.png',
    'src/images/' + track + '/o/25.png',
    'src/images/' + track + '/o/26.png',
    'src/images/' + track + '/o/27.png',
    'src/images/' + track + '/o/28.png',
    'src/images/' + track + '/o/29.png',
    'src/images/' + track + '/o/30.png',
    'src/images/' + track + '/o/31.png',
    'src/images/' + track + '/o/32.png',
    'src/images/' + track + '/o/33.png',
    'src/images/' + track + '/o/34.png',
    'src/images/' + track + '/o/35.png'
  ]
}

const coloritems = (track, num) => {
  var arr = []
  for (let i = 0; i < num; i++) {
    var arrli = {
      class: 'col col1',
      color: [
        'src/images/' + track + '/c' + i + '/0.png',
        'src/images/' + track + '/c' + i + '/1.png',
        'src/images/' + track + '/c' + i + '/2.png',
        'src/images/' + track + '/c' + i + '/3.png',
        'src/images/' + track + '/c' + i + '/4.png',
        'src/images/' + track + '/c' + i + '/5.png',
        'src/images/' + track + '/c' + i + '/6.png',
        'src/images/' + track + '/c' + i + '/7.png',
        'src/images/' + track + '/c' + i + '/8.png',
        'src/images/' + track + '/c' + i + '/9.png',
        'src/images/' + track + '/c' + i + '/10.png',
        'src/images/' + track + '/c' + i + '/11.png',
        'src/images/' + track + '/c' + i + '/12.png',
        'src/images/' + track + '/c' + i + '/13.png',
        'src/images/' + track + '/c' + i + '/14.png',
        'src/images/' + track + '/c' + i + '/15.png',
        'src/images/' + track + '/c' + i + '/16.png',
        'src/images/' + track + '/c' + i + '/17.png',
        'src/images/' + track + '/c' + i + '/18.png',
        'src/images/' + track + '/c' + i + '/19.png',
        'src/images/' + track + '/c' + i + '/20.png',
        'src/images/' + track + '/c' + i + '/21.png',
        'src/images/' + track + '/c' + i + '/22.png',
        'src/images/' + track + '/c' + i + '/23.png',
        'src/images/' + track + '/c' + i + '/24.png',
        'src/images/' + track + '/c' + i + '/25.png',
        'src/images/' + track + '/c' + i + '/26.png',
        'src/images/' + track + '/c' + i + '/27.png',
        'src/images/' + track + '/c' + i + '/28.png',
        'src/images/' + track + '/c' + i + '/29.png',
        'src/images/' + track + '/c' + i + '/30.png',
        'src/images/' + track + '/c' + i + '/31.png',
        'src/images/' + track + '/c' + i + '/32.png',
        'src/images/' + track + '/c' + i + '/33.png',
        'src/images/' + track + '/c' + i + '/34.png',
        'src/images/' + track + '/c' + i + '/35.png'
      ]
    }
    arr.push(arrli)
  }
  return arr
}

export {
  carsheel,
  coloritems
}
