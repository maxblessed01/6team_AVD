var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
      mapOption = {
        center: new kakao.maps.LatLng(36.3688,127.3469), // 지도의 중심좌표
        level: 8, // 지도의 확대 레벨
        marker: marker  
      };

    // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
  

    var map = new kakao.maps.Map(mapContainer, mapOption),
    customOverlay = new kakao.maps.CustomOverlay({}),
    infowindow = new kakao.maps.InfoWindow({ removable: true });; //지도 생성 및 객체 리턴

var content = '<div class ="label"><span class="left"></span><span class="center">카카오!</span><span class="right"></span></div>';

var positions = [
    {
        title: '안양역', 
        latlng: new kakao.maps.LatLng(36.3688,127.3469),
        text: "1"
    },
    {
        title: '안양역 주위 1', 
        latlng: new kakao.maps.LatLng(36.3149410, 127.392332),
        text: "2"
    },
    {
        title: '안양역 주위 2', 
        latlng: new kakao.maps.LatLng(37.403007, 126.925044),
        text: "3"
    },
    {
        title: '안양역 주위 3',
        latlng: new kakao.maps.LatLng(37.405707, 126.925044)
    }
];

var linePath = [
    new kakao.maps.LatLng(36.3688,127.3469),
    new kakao.maps.LatLng(36.3149410, 127.392332),   
    new kakao.maps.LatLng(37.403007, 126.925044),   
];

var polyline = new kakao.maps.Polyline({
    path: linePath, // 선을 구성하는 좌표배열 입니다
    strokeWeight: 5, // 선의 두께 입니다
    strokeColor: "purple", // 선의 색깔입니다
    strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
    strokeStyle: 'solid' // 선의 스타일입니다
});

// 지도에 선을 표시합니다 
polyline.setMap(map);  

for (var i = 0; i < positions.length; i ++) {
   
    var marker = new kakao.maps.Marker({  // 마커 생성
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title : positions[i].title,
        text : positions[i].text // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시 됨
    });
}