

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

const chooseStations = function(stations){

  for (i = 0; i <=2; i++){
    if((stations[i][2] == 'school' || stations[i][2] == 'community centre') && (stations[i][1] >= 20)){
      const stationName = stations[i][0];
      console.log(stationName);
    }
  }
}

chooseStations(stations);