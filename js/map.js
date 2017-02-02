(function(A) {

	if (!Array.prototype.forEach)
		A.forEach = A.forEach || function(action, that) {
			for (var i = 0, l = this.length; i < l; i++)
				if (i in this)
					action.call(that, this[i], i, this);
			};

		})(Array.prototype);

		var
		mapObject,
		markers = [],
		markersData = {
			'Shop': [
			{
				name: 'Bondi Beach',
				location_latitude: 50.672445, 
				location_longitude: 4.381006,
				map_image_url: 'img/img.png',
				name_point: 'Vladivostok',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Coogee Beach',
				location_latitude: 50.620338, 
				location_longitude: 4.367002,
				map_image_url: 'img/img2.png',
				name_point: 'Matart Group',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Cronulla Beach',
				location_latitude: 50.683884, 
				location_longitude: 4.382723,
				map_image_url: 'img/img3.png',
				name_point: 'Envato',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Manly Beach',
				location_latitude: 50.618834, 
				location_longitude: 4.389718,
				map_image_url: 'img/img4.png',
				name_point: 'Themeforest',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Maroubra Beach',
				location_latitude: 50.620573, 
				location_longitude: 4.385705,
				map_image_url: 'img/img.png',
				name_point: 'Vladivostok',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			}
			],
			'Cinema': [
			{
				name: 'Bondi Beach',
				location_latitude: 50.624034, 
				location_longitude: 4.375517,
				map_image_url: 'img/img.png',
				name_point: 'Vladivostok',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Coogee Beach',
				location_latitude: 50.626117, 
				location_longitude: 4.377423,
				map_image_url: 'img/img2.png',
				name_point: 'Matart Group',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Cronulla Beach',
				location_latitude: 50.616657, 
				location_longitude: 4.391992,
				map_image_url: 'img/img3.png',
				name_point: 'Envato',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Manly Beach',
				location_latitude: 50.616031, 
				location_longitude: 4.399481,
				map_image_url: 'img/img.png',
				name_point: 'Vladivostok',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Maroubra Beach',
				location_latitude: 50.617519,
				location_longitude: 131.903665,
				map_image_url: 'img/img.png',
				name_point: 'Vladivostok',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			}
			],
			'Club': [
			{
				name: 'Cronulla Beach',
				location_latitude: 50.614527, 
				location_longitude: 4.379354,
				map_image_url: 'img/img2.png',
				name_point: 'Matart Group',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Manly Beach',
				location_latitude: 50.612428, 
				location_longitude: 4.382980,
				map_image_url: 'img/img.png',
				name_point: 'Vladivostok',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Maroubra Beach',
				location_latitude: 50.617393, 
				location_longitude: 4.3561242,
				map_image_url: 'img/img.png',
				name_point: 'Vladivostok',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			}
			],

			'Cafe': [
			{
				name: 'Bondi Beach',
				location_latitude: 50.621450, 
				location_longitude: 4.3568623,
				map_image_url: 'img/img.png',
				name_point: 'Vladivostok',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Coogee Beach',
				location_latitude: 50.620682, 
				location_longitude: 4.390469,
				map_image_url: 'img/img2.png',
				name_point: 'Matart Group',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Cronulla Beach',
				location_latitude: 50.623924, 
				location_longitude: 4.3538881,
				map_image_url: 'img/img3.png',
				name_point: 'Envato',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Manly Beach',
				location_latitude: 50.622750, 
				location_longitude: 4.379611,
				map_image_url: 'img/img.png',
				name_point: 'Vladivostok',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Maroubra Beach',
				location_latitude: 50.620322, 
				location_longitude: 4.3530126,
				map_image_url: 'img/img.png',
				name_point: 'Vladivostok',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			}
			],

			'Sport': [
			{
				name: 'Bondi Beach',
				location_latitude: 50.664993, 
				location_longitude: 4.3534310,
				map_image_url: 'img/img.png',
				name_point: 'Vladivostok',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Coogee Beach',
				location_latitude: 50.694414,
				location_longitude:  4.378238,
				map_image_url: 'img/img2.png',
				name_point: 'Matart Group',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Cronulla Beach',
				location_latitude: 50.620573, 
				location_longitude: 4.3236285,
				map_image_url: 'img/img3.png',
				name_point: 'Envato',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Manly Beach',
				location_latitude: 50.616454, 
				location_longitude: 4.3296564,
				map_image_url: 'img/img.png',
				name_point: 'Vladivostok',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Maroubra Beach',
				location_latitude: 50.618223, 
				location_longitude: 4.3298066,
				map_image_url: 'img/img.png',
				name_point: 'Vladivostok',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			}
			],

			'Port': [
			{
				name: 'Bondi Beach',
				location_latitude: 50.622805, 
				location_longitude: 4.373539,
				map_image_url: 'img/img.png',
				name_point: 'Vladivostok',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Coogee Beach',
				location_latitude: 50.618341, 
				location_longitude: 4.376714,
				map_image_url: 'img/img2.png',
				name_point: 'Matart Group',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Cronulla Beach',
				location_latitude: 50.613078, 
				location_longitude: 4.3296671,
				map_image_url: 'img/img3.png',
				name_point: 'Envato',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Manly Beach',
				location_latitude: 50.611527, 
				location_longitude: 4.394954,
				map_image_url: 'img/img.png',
				name_point: 'Vladivostok',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Maroubra Beach',
				location_latitude: 50.612561,
				location_longitude: 131.900661,
				map_image_url: 'img/img.png',
				name_point: 'Vladivostok',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			}
			],


			'Bank': [
			{
				name: 'Cronulla Beach',
				location_latitude: 50.616508, 
				location_longitude: 4.390469,
				map_image_url: 'img/img.png',
				name_point: 'Vladivostok',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Manly Beach',
				location_latitude: 50.618686, 
				location_longitude: 4.3297207,
				map_image_url: 'img/img2.png',
				name_point: 'Matart Group',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Maroubra Beach',
				location_latitude: 50.615678, 
				location_longitude: 4.3292615,
				map_image_url: 'img/img3.png',
				name_point: 'Envato',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Cronulla Beach',
				location_latitude: 50.614519, 
				location_longitude: 4.395490,
				map_image_url: 'img/img.png',
				name_point: 'Vladivostok',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Manly Beach',
				location_latitude: 50.621520, 
				location_longitude: 4.392894,
				map_image_url: 'img/img.png',
				name_point: 'Vladivostok',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Maroubra Beach',
				location_latitude: 41.104,
				location_longitude: -73.406,
				map_image_url: 'img/img3.png',
				name_point: 'Envato',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Cronulla Beach',
				location_latitude: 50.625451, 
				location_longitude: 4.381628,
				map_image_url: 'img/img2.png',
				name_point: 'Matart Group',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Manly Beach',
				location_latitude: 50.621113,
				location_longitude: 4.377058,
				map_image_url: 'img/img3.png',
				name_point: 'Envato',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Maroubra Beach',
				location_latitude: 50.623697, 
				location_longitude: 4.394224,
				map_image_url: 'img/img2.png',
				name_point: 'Matart Group',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			}
			],


			'Post': [
			{
				name: 'Cronulla Beach',
				location_latitude: 50.615897, 
				location_longitude: 4.389246,
				map_image_url: 'img/img.png',
				name_point: 'Vladivostok',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Manly Beach',
				location_latitude: 50.620643, 
				location_longitude: 4.385491,
				map_image_url: 'img/img2.png',
				name_point: 'Matart Group',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Maroubra Beach',
				location_latitude: 50.618701, 
				location_longitude: 4.393580,
				map_image_url: 'img/img3.png',
				name_point: 'Envato',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			}
			],

			'Showplace': [
			{
				name: 'Cronulla Beach',
				location_latitude: 50.695030, 
				location_longitude: 4.379225,
				map_image_url: 'img/img.png',
				name_point: 'Vladivostok',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Manly Beach',
				location_latitude: 50.615177, 
				location_longitude: 4.385576,
				map_image_url: 'img/img2.png',
				name_point: 'Matart Group',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Maroubra Beach',
				location_latitude: 50.613517, 
				location_longitude: 4.393730,
				map_image_url: 'img/img3.png',
				name_point: 'Envato',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Cronulla Beach',
				location_latitude: 50.678437, 
				location_longitude: 4.394095,
				map_image_url: 'img/img2.png',
				name_point: 'Matart Group',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Manly Beach',
				location_latitude: 50.622241, 
				location_longitude: 4.371949,
				map_image_url: 'img/img3.png',
				name_point: 'Envato',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Maroubra Beach',
				location_latitude: 50.613986, 
				location_longitude: 4.376970,
				map_image_url: 'img/img2.png',
				name_point: 'Matart Group',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			}
			],

			'Park': [
			{
				name: 'Cronulla Beach',
				location_latitude: 50.620401,
				location_longitude:  4.377208,
				map_image_url: 'img/img.png',
				name_point: 'Vladivostok',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Manly Beach',
				location_latitude: 50.617801, 
				location_longitude: 4.378732,
				map_image_url: 'img/img2.png',
				name_point: 'Matart Group',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Maroubra Beach',
				location_latitude: 50.626266, 
				location_longitude: 4.370447,
				map_image_url: 'img/img3.png',
				name_point: 'Envato',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Cronulla Beach',
				location_latitude: 50.623071, 
				location_longitude:  4.377593,
				map_image_url: 'img/img3.png',
				name_point: 'Envato',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Manly Beach',
				location_latitude: 50.615161, 
				location_longitude: 4.371821,
				map_image_url: 'img/img2.png',
				name_point: 'Matart Group',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Maroubra Beach',
				location_latitude: 50.632265, 
				location_longitude: 4.37906146,
				map_image_url: 'img/img3.png',
				name_point: 'Envato',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			}
			]
		};

		function initialize () {
			var mapOptions = {
				zoom: 16,
				center: new google.maps.LatLng(50.665656, 4.37906), // 50.619, 131.8
				mapTypeId: google.maps.MapTypeId.ROADMAP,

				mapTypeControl: false,
				mapTypeControlOptions: {
					style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
					position: google.maps.ControlPosition.LEFT_CENTER
				},
				panControl: false,
				panControlOptions: {
					position: google.maps.ControlPosition.TOP_RIGHT
				},
				zoomControl: false,
				zoomControlOptions: {
					style: google.maps.ZoomControlStyle.LARGE,
					position: google.maps.ControlPosition.TOP_RIGHT
				},
				scaleControl: false,
				scaleControlOptions: {
					position: google.maps.ControlPosition.TOP_LEFT
				},
				streetViewControl: false,
				streetViewControlOptions: {
					position: google.maps.ControlPosition.LEFT_TOP
				},
				styles: [/*insert your map styles*/]
			};
			var
			marker;
			mapObject = new google.maps.Map(document.getElementById('map'), mapOptions);
			for (var key in markersData)
				markersData[key].forEach(function (item) {
					marker = new google.maps.Marker({
						position: new google.maps.LatLng(item.location_latitude, item.location_longitude),
						map: mapObject,
						icon: 'img/icon/' + key + '.png',
					});

					if ('undefined' === typeof markers[key])
						markers[key] = [];
					markers[key].push(marker);
					google.maps.event.addListener(marker, 'click', (function () {
      closeInfoBox();
      getInfoBox(item).open(mapObject, this);
      mapObject.setCenter(new google.maps.LatLng(item.location_latitude, item.location_longitude));
     }));

					
				});
		};

		function hideAllMarkers () {
			for (var key in markers)
				markers[key].forEach(function (marker) {
					marker.setMap(null);
				});
		};

		function toggleMarkers (category) {
			hideAllMarkers();
			closeInfoBox();

			if ('undefined' === typeof markers[category])
				return false;
			markers[category].forEach(function (marker) {
				marker.setMap(mapObject);
				marker.setAnimation(google.maps.Animation.DROP);

			});
		};
		
		function closeInfoBox() {
			$('div.infoBox').remove();
		};

		function getInfoBox(item) {
			return new InfoBox({
				content:
				'<div class="marker_info none" id="marker_info">' +
				'<div class="info" id="info">'+
				'<img src="' + item.map_image_url + '" class="logotype" alt=""/>' +
				'<h2>'+ item.name_point +'<span></span></h2>' +
				'<span>'+ item.description_point +'</span>' +
				'<a href="'+ item.url_point + '" class="green_btn">More info</a>' +
				'<span class="arrow"></span>' +
				'</div>' +
				'</div>',
				disableAutoPan: true,
				maxWidth: 0,
				pixelOffset: new google.maps.Size(40, -210),
				closeBoxMargin: '50px 200px',
				closeBoxURL: '',
				isHidden: false,
				pane: 'floatPane',
				enableEventPropagation: true
			});


		};




