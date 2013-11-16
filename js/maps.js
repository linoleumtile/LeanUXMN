


function initialize() {
    var loc=new google.maps.LatLng(meetup_geocode[0], meetup_geocode[1]);
    
    var mapProp = {
	center:loc,
	zoom:11,
	mapTypeId:google.maps.MapTypeId.ROADMAP,
	disableDefaultUI:true
    };

    var map=new google.maps.Map(document.getElementById("loc"),mapProp);

    google.maps.event.addListener(map,'click',function(){
	window.location.href = map_url;
    });

    map.setOptions({draggableCursor:'pointer'});

    var marker=new google.maps.Marker({
	position:loc,
    });

    marker.setMap(map);

    google.maps.event.addListener(marker,'click',function(){
	window.location.href = map_url;
    });
}

google.maps.event.addDomListener(window, 'load', initialize);
