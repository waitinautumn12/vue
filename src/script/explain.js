const explains = (track) => {
  let arr = {
    E43: [
      {url: 'url(src/images/common/point1.png) 50% 50%', title: '优雅流线1，勾勒待发之势', text: '梅萨德斯-AMG E63 4MATIC以激动人心的方式将动感与革新的AMG设计风格巧妙结合。其中包括前部设计，集成了带银色镀铬双格栅条的AMG散热器格栅和采用了引人注目的A字型翼板设计'},
      {url: 'url(src/images/common/point2.png) 50% 50%', title: '一触即发1，勾勒待发之势', text: '梅萨德斯-AMG E63 4MATIC以激动人心的方式将动感与革新的AMG设计风格巧妙结合。其中包括前部设计，集成了带银色镀铬双格栅条的AMG散热器格栅和采用了引人注目的A字型翼板设计'},
      {url: 'url(src/images/common/menghuan.png) 50% 50%', title: '一触即发1，勾勒待发之势', text: '梅萨德斯-AMG E63 4MATIC以激动人心的方式将动感与革新的AMG设计风格巧妙结合。其中包括前部设计，集成了带银色镀铬双格栅条的AMG散热器格栅和采用了引人注目的A字型翼板设计'},
      {url: 'url(src/images/common/E63.png) 50% 50%', title: '一触即发1，勾勒待发之势', text: '梅萨德斯-AMG E63 4MATIC以激动人心的方式将动感与革新的AMG设计风格巧妙结合。其中包括前部设计，集成了带银色镀铬双格栅条的AMG散热器格栅和采用了引人注目的A字型翼板设计'}
    ],
    E63: [
      {url: 'url(src/images/common/point1.png) 50% 50%', title: '优雅流线2，勾勒待发之势', text: '梅萨德斯-AMG E63 4MATIC以激动人心的方式将动感与革新的AMG设计风格巧妙结合。其中包括前部设计，集成了带银色镀铬双格栅条的AMG散热器格栅和采用了引人注目的A字型翼板设计'},
      {url: 'url(src/images/common/point2.png) 50% 50%', title: '一触即发2，勾勒待发之势', text: '梅萨德斯-AMG E63 4MATIC以激动人心的方式将动感与革新的AMG设计风格巧妙结合。其中包括前部设计，集成了带银色镀铬双格栅条的AMG散热器格栅和采用了引人注目的A字型翼板设计'},
      {url: 'url(src/images/common/menghuan.png) 50% 50%', title: '一触即发2，勾勒待发之势', text: '梅萨德斯-AMG E63 4MATIC以激动人心的方式将动感与革新的AMG设计风格巧妙结合。其中包括前部设计，集成了带银色镀铬双格栅条的AMG散热器格栅和采用了引人注目的A字型翼板设计'},
      {url: 'url(src/images/common/E63.png) 50% 50%', title: '一触即发2，勾勒待发之势', text: '梅萨德斯-AMG E63 4MATIC以激动人心的方式将动感与革新的AMG设计风格巧妙结合。其中包括前部设计，集成了带银色镀铬双格栅条的AMG散热器格栅和采用了引人注目的A字型翼板设计'}
    ],
    E63S: [
      {url: 'url(src/images/common/point1.png) 50% 50%', title: '优雅流线3，勾勒待发之势', text: '梅萨德斯-AMG E63 4MATIC以激动人心的方式将动感与革新的AMG设计风格巧妙结合。其中包括前部设计，集成了带银色镀铬双格栅条的AMG散热器格栅和采用了引人注目的A字型翼板设计'},
      {url: 'url(src/images/common/point2.png) 50% 50%', title: '一触即发3，勾勒待发之势', text: '梅萨德斯-AMG E63 4MATIC以激动人心的方式将动感与革新的AMG设计风格巧妙结合。其中包括前部设计，集成了带银色镀铬双格栅条的AMG散热器格栅和采用了引人注目的A字型翼板设计'},
      {url: 'url(src/images/common/menghuan.png) 50% 50%', title: '一触即发3，勾勒待发之势', text: '梅萨德斯-AMG E63 4MATIC以激动人心的方式将动感与革新的AMG设计风格巧妙结合。其中包括前部设计，集成了带银色镀铬双格栅条的AMG散热器格栅和采用了引人注目的A字型翼板设计'},
      {url: 'url(src/images/common/E63.png) 50% 50%', title: '一触即发3，勾勒待发之势', text: '梅萨德斯-AMG E63 4MATIC以激动人心的方式将动感与革新的AMG设计风格巧妙结合。其中包括前部设计，集成了带银色镀铬双格栅条的AMG散热器格栅和采用了引人注目的A字型翼板设计'}
    ]
  }
  for (let prop in arr) {
    if (prop === track) {
      return arr[prop]
    }
  }
}

export {
  explains
}
