function initialize() {
    var myLatlng = new google.maps.LatLng(30.030572852922617, 31.02115847241165);
  
    var myOptions = {
      zoom: 8,
      center: myLatlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map_viewer"), myOptions);

    var marker = new google.maps.Marker({
        position: myLatlng,
        map,
        icon: 'assets/img/marker.png',
        label: { color: '#FFFFFF', fontWeight: 'bold', fontSize: '14px', text: '£30' }
    });

    const content =
    '<div class="infowindow-wrapper">' +
    '   <img src="assets/img/img31.jpg" />' +
    '   <h3>Cardigan Road</h3>' +
    '   <p>A luxurious 2 bedroom apartment in the sought after 190 Strand</p>' +
    '</div>';

    const infowindow = new google.maps.InfoWindow();
    infowindow.setContent(content);
    infowindow.open(map, marker);
}

google.maps.event.addDomListener(window, "load", initialize());