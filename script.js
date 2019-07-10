    var $myCanvas = $('#plot-container');
    var pointData = [];
var plotData = [
  [751, 130, 30, 0],
  [751, 130, 94, 0],
  [751, 130, 151, 0],
  [854, 375, 195, 0],
  [854, 375, 221, 0],
  [854, 375, 250, 0],
  [681, 74, 270, 0],
  [681, 74, 289, 0],
  [579, 52, 316, 0],
  [520, 91, 355, 0],
  [520, 91, 398, 0],
  [1005, -43, 439, 0],
  [1005, -43, 464, 0],
  [1216, 83, 501, 0],
  [931, 413, 570, 0],
  [931, 413, 595, 0],
  [931, 413, 620, 0],
  [966, 381, 658, 0],
  [1005, 163, 685, 0],
  [1005, 163, 733, 0],
  [1005, 163, 802, 0],
  [371, 101, 848, 0],
  [382, 326, 897, 0],
  [301, 465, 968, 0],
  [736, 246, 1014, 0],
  [716, 310, 1063, 0],
  [1123, 651, 1133, 0],
  [1227, 669, 1179, 0],
  [1019, 438, 1226, 0],
  [908, 248, 1269, 0],
  [739, 234, 1309, 0],
  [923, 188, 1354, 0],
  [923, 188, 1422, 0],
  [980, 139, 1470, 0],
  [1112, 185, 1519, 0],
  [1112, 185, 1586, 0],
  [928, 212, 1637, 0],
  [887, 283, 1682, 0],
  [917, 153, 1732, 0],
  [918, 188, 1761, 0],
  [918, 188, 1808, 0],
  [918, 188, 1878, 0],
  [814, 318, 1910, 0],
  [814, 318, 1938, 0],
  [814, 318, 1978, 0],
  [874, 250, 1997, 0],
  [874, 250, 2020, 0],
  [874, 250, 2059, 0],
  [874, 250, 2077, 0],
  [901, 204, 2096, 0],
  [856, 314, 2136, 0],
  [977, 448, 2155, 0],
  [1051, 380, 2175, 0],
  [1051, 380, 2203, 0],
  [1011, 407, 2224, 0],
  [1011, 407, 2249, 0],
  [967, 110, 2284, 0],
  [967, 110, 2321, 0],
  [925, 179, 2361, 0],
  [925, 179, 2415, 0],
  [873, 114, 2453, 0],
  [873, 114, 2493, 0],
  [873, 114, 2537, 0],
  [940, 137, 2560, 0],
  [940, 137, 2579, 0],
  [1051, 244, 2611, 0],
  [1051, 244, 2650, 0],
  [876, 438, 2687, 0],
  [924, 550, 2755, 0],
  [924, 550, 2806, 0],
  [1188, 213, 2853, 0],
  [1163, 138, 2903, 0],
  [1073, 442, 2934, 0],
  [1073, 442, 2974, 0],
  [1073, 442, 3016, 0],
  [1073, 442, 3062, 0],
  [1112, 216, 3100, 0],
  [1048, 242, 3132, 0],
  [928, 123, 3161, 0],
  [928, 123, 3205, 0],
  [890, 89, 3252, 0],
  [926, 198, 3278, 0],
  [926, 198, 3306, 0],
  [951, 75, 3342, 0],
  [951, 75, 3379, 0],
  [1165, 232, 3439, 0],
  [1079, 39, 3486, 0],
  [1079, 39, 3506, 0],
  [1079, 39, 3532, 0],
  [945, -35, 3562, 0],
  [945, -35, 3601, 0],
  [874, 368, 3637, 0],
  [874, 368, 3688, 0],
  [874, 368, 3713, 0],
  [806, 246, 3739, 0],
  [806, 246, 3772, 0],
  [774, 137, 3820, 0],
  [939, 182, 3865, 0],
  [978, 261, 3907, 0],
  [978, 261, 3931, 0],
  [1010, 433, 3954, 0],
  [1010, 433, 3984, 0],
  [1004, 204, 4003, 0],
  [1004, 204, 4022, 0],
  [1004, 204, 4058, 0],
  [1004, 204, 4094, 0],
  [835, 234, 4132, 0],
  [830, 283, 4179, 0],
  [830, 283, 4208, 0],
  [832, 274, 4241, 0],
  [864, 36, 4276, 0],
  [864, 36, 4318, 0],
  [864, 36, 4362, 0],
  [944, 79, 4411, 0],
  [1054, 326, 4442, 0],
  [1054, 326, 4467, 0],
  [1054, 326, 4503, 0],
  [1034, 272, 4544, 0],
  [1034, 272, 4573, 0],
  [1034, 272, 4610, 0],
  [980, 174, 4656, 0],
  [995, 391, 4702, 0],
  [878, 42, 4772, 0],
  [878, 42, 4819, 0],
  [919, -86, 4868, 0],
  [930, -88, 4941, 0],
  [1190, 20, 4987, 0],
  [1190, 20, 5033, 0],
  [1190, 20, 5128, 0],
  [866, 315, 5158, 0]
];
var $myCanvas = $("#plot-container");
$(document).ready(function() {
  //var fileWidth = $projectWidth.val();
  // var fileHeight = $projectHeight.val();
  // setLoading();

  //testsCount = 0;
  getResults();
});
function getResults() {
  colors = ["purple", "blue", "orange", "red", "green", "yellow"];
  for (i = 0; i < plotData.length; i++) {
    for (j = 0; j < 1; j++) {
      var rgbColor =
        "#" +
        Math.random()
          .toString(16)
          .slice(2, 8)
          .toUpperCase();
      var xdetected = plotData[i][0];
      /*if(xdetected>100)
        {
            xdetected=100;
        }
        else if(xdetected>-100)
        {
            xdetected=0;
        }*/

      var a = plotData[i][1] + plotData[i][3];
      var timer = plotData[i][2] - plotData[i][2 + 1];
      console.log(timer);
      //var x2=response.data[i]['data'][j][0];
      //var y2=response.data[i]['data'][j+1][1];
      //console.log(xdetected,a,x2,y2);
      pointData.push([xdetected, a]);
      drawcircle(xdetected, a, rgbColor);
      drawline();

      //draw_plot(xdetected,a,timer,j,rgbColor);
    }
  }
}
function draw_plot(xdetected, a, timer, i, color) {
  var doo = 5;
  var rad = 25;
  $("canvas")
    .drawArc({
      layer: true,
      name: "myCircle" + i,
      fillStyle: color,
      strokeStyle: "white",
      strokeWidth: doo,
      shadowColor: "black",
      shadowBlur: 5,
      shadowX: -5,
      shadowY: 5,
      x: xdetected,
      y: a,
      radius: rad,
      text: i
    })
    .drawText({
      layer: true,
      name: "myText" + i,
      fillStyle: "black",
      strokeWidth: "2",
      x: xdetected,
      y: a,
      fontSize: "15pt",
      fontFamily: "Verdana,sans-serif",
      text: i
    });
}
function colorGen() {
  var generateColor = Math.floor(Math.random() * 256);
  return generateColor;
}

function drawline() {
  var obj = {
    strokeStyle: "#e91e63",
    strokeWidth: 3,
    rounded: true,
    endArrow: true,
    arrowRadius: 15,
    arrowAngle: 90
  };

  // Your array of points
  //var pts = [];

  // Add the points from the array to the object
  for (var p = 0; p < pointData.length; p += 1) {
    obj["x" + (p + 1)] = pointData[p][0];
    obj["y" + (p + 1)] = pointData[p][1];
  }

  // Draw the line
  $("canvas").drawLine(obj);
}

function drawcircle(x, y, color) {
  $myCanvas.drawArc({
    // draw the face
    fillStyle: color,
    strokeStyle: "white",
    strokeWidth: 4,
    x: x,
    y: y,
    radius: 25
  });
}