    ymaps.ready(init);
    var myMap,
        myPlacemark;
    function init() {
      myMap = new ymaps.Map("map", {
      center: [44.50222647, 33.59988054],
      zoom: 14 ,
      controls: ['zoomControl', 'geolocationControl']
     });
      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
       balloonContent: 'Балаклава'
      }, {
       // Опции.
       // Необходимо указать данный тип макета.
       iconLayout: 'default#image',
       // Своё изображение иконки метки.
       iconImageHref: 'img/Placemark.png',
       // Размеры метки.
       iconImageSize: [34, 36], 
      }),
     myMap.geoObjects.add(myPlacemark);
     myMap.behaviors.disable('scrollZoom');
     myMap.behaviors.disable('drag');
     searchControlProvider: 'yandex#search'
    }