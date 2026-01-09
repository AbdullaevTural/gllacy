ymaps.ready(init);

function init() {
  const map = new ymaps.Map("map", {
    center: [59.938631, 30.323037],
    zoom: 16,
    controls: ["zoomControl"],
  });

  const placemark = new ymaps.Placemark(
    [59.938631, 30.323037],
    {
      balloonContent: "ул. Большая Конюшенная 19/8",
    },
    {
      iconLayout: "default#image",
      iconImageHref: "../img/pin.svg",
      iconImageSize: [80, 140],
      iconImageOffset: [-40, -140],
      iconShadow: true,
      iconShadowImageHref: "../img/shadow.svg",
      iconShadowImageSize: [182, 110],
      iconShadowImageOffset: [0, -110],
    }
  );

  map.geoObjects.add(placemark);
}
