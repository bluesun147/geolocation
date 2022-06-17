const successCallback = (position) => {
    console.log(position); // position 객체 출력 (GeolocationPosition 타입)
    // coods: coordinates. 유저 위치 정보 관련
};

const errorCallback = (error) => {
    console.log(error);
};

// 먼저 브라우저가 위치 권한 요청
//navigator.geolocation.getCurrentPosition(successCallback, errorCallback); // 3개의 argument

// id를 리턴
// watchPosition method allows user to continues getting update as the user walks around.   
// 위치 바뀔때마다 watch
const watchId = navigator.geolocation.watchPosition(successCallback, errorCallback, )

navigator.geolocation.clearWatch(watchId);
