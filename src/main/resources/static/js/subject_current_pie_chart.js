// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// var ppgs = document.getElementById("currentProgress");
// var currentProgress = new Chart(ppgs, {
//   type: 'doughnut',
//   data: {
//     labels: ["잔여", "현재"],
//     datasets: [{
//       data: [100, 0],
//       backgroundColor: ['#858796', '#f6c23e'],
//       hoverBackgroundColor: ['#626875', '#b68f2c'],
//       hoverBorderColor: "rgba(234, 236, 244, 1)",
//     }],
//   },
//   options: {
//     maintainAspectRatio: false,
//     tooltips: {
//       backgroundColor: "rgb(255,255,255)",
//       bodyFontColor: "#858796",
//       borderColor: '#dddfeb',
//       borderWidth: 1,
//       xPadding: 15,
//       yPadding: 15,
//       displayColors: false,
//       caretPadding: 10,
//     },
//     legend: {
//       display: false
//     },
//     cutoutPercentage: 80,
//   },
// });

const check = document.getElementsByName("subjPro");
var cnt = 0;
const chk1 = document.getElementById("chk_1").checked;
const chk2 = document.getElementById("chk_2").checked;
const chk3 = document.getElementById("chk_3").checked;
const chk4 = document.getElementById("chk_4").checked;
if (chk1 === true) {
  cnt += 1;
}
if (chk2 === true) {
  cnt += 1;
}
if (chk3 === true) {
  cnt += 1;
}
if (chk4 === true) {
  cnt += 1;
}
if (cnt === 0) {
  var ppgs = document.getElementById("currentProgress");
  var currentProgress = new Chart(ppgs, {
    type: 'doughnut',
    data: {
      labels: ["잔여", "현재"],
      datasets: [{
        data: [100, 0],
        backgroundColor: ['#858796', '#f6c23e'],
        hoverBackgroundColor: ['#626875', '#b68f2c'],
        hoverBorderColor: "rgba(234, 236, 244, 1)",
      }],
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        borderColor: '#dddfeb',
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        caretPadding: 10,
      },
      legend: {
        display: false
      },
      cutoutPercentage: 80,
    },
  });
} else if (cnt === 1) {
  var ppgs = document.getElementById("currentProgress");
  var currentProgress = new Chart(ppgs, {
    type: 'doughnut',
    data: {
      labels: ["잔여", "현재"],
      datasets: [{
        data: [75, 25],
        backgroundColor: ['#858796', '#f6c23e'],
        hoverBackgroundColor: ['#626875', '#b68f2c'],
        hoverBorderColor: "rgba(234, 236, 244, 1)",
      }],
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        borderColor: '#dddfeb',
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        caretPadding: 10,
      },
      legend: {
        display: false
      },
      cutoutPercentage: 80,
    },
  });
} else if (cnt === 2) {
  var ppgs = document.getElementById("currentProgress");
  var currentProgress = new Chart(ppgs, {
    type: 'doughnut',
    data: {
      labels: ["잔여", "현재"],
      datasets: [{
        data: [50, 50],
        backgroundColor: ['#858796', '#f6c23e'],
        hoverBackgroundColor: ['#626875', '#b68f2c'],
        hoverBorderColor: "rgba(234, 236, 244, 1)",
      }],
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        borderColor: '#dddfeb',
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        caretPadding: 10,
      },
      legend: {
        display: false
      },
      cutoutPercentage: 80,
    },
  });
} else if (cnt === 3) {
  var ppgs = document.getElementById("currentProgress");
  var currentProgress = new Chart(ppgs, {
    type: 'doughnut',
    data: {
      labels: ["잔여", "현재"],
      datasets: [{
        data: [25, 75],
        backgroundColor: ['#858796', '#f6c23e'],
        hoverBackgroundColor: ['#626875', '#b68f2c'],
        hoverBorderColor: "rgba(234, 236, 244, 1)",
      }],
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        borderColor: '#dddfeb',
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        caretPadding: 10,
      },
      legend: {
        display: false
      },
      cutoutPercentage: 80,
    },
  });
} else if (cnt == 4) {
  var ppgs = document.getElementById("currentProgress");
  var currentProgress = new Chart(ppgs, {
    type: 'doughnut',
    data: {
      labels: ["잔여", "현재"],
      datasets: [{
        data: [0, 100],
        backgroundColor: ['#858796', '#f6c23e'],
        hoverBackgroundColor: ['#626875', '#b68f2c'],
        hoverBorderColor: "rgba(234, 236, 244, 1)",
      }],
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        borderColor: '#dddfeb',
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        caretPadding: 10,
      },
      legend: {
        display: false
      },
      cutoutPercentage: 80,
    },
  });
}

function checkProgress() {
  const check = document.getElementsByName("subjPro");
  var cnt = 0;
  const chk1 = document.getElementById("chk_1").checked;
  const chk2 = document.getElementById("chk_2").checked;
  const chk3 = document.getElementById("chk_3").checked;
  const chk4 = document.getElementById("chk_4").checked;
  if (chk1 === true) {
    cnt += 1;
  }
  if (chk2 === true) {
    cnt += 1;
  }
  if (chk3 === true) {
    cnt += 1;
  }
  if (chk4 === true) {
    cnt += 1;
  }
  if (cnt === 0) {
    var ppgs = document.getElementById("currentProgress");
    var currentProgress = new Chart(ppgs, {
      type: 'doughnut',
      data: {
        labels: ["잔여", "현재"],
        datasets: [{
          data: [100, 0],
          backgroundColor: ['#858796', '#f6c23e'],
          hoverBackgroundColor: ['#626875', '#b68f2c'],
          hoverBorderColor: "rgba(234, 236, 244, 1)",
        }],
      },
      options: {
        maintainAspectRatio: false,
        tooltips: {
          backgroundColor: "rgb(255,255,255)",
          bodyFontColor: "#858796",
          borderColor: '#dddfeb',
          borderWidth: 1,
          xPadding: 15,
          yPadding: 15,
          displayColors: false,
          caretPadding: 10,
        },
        legend: {
          display: false
        },
        cutoutPercentage: 80,
      },
    });
  } else if (cnt === 1) {
    var ppgs = document.getElementById("currentProgress");
    var currentProgress = new Chart(ppgs, {
      type: 'doughnut',
      data: {
        labels: ["잔여", "현재"],
        datasets: [{
          data: [75, 25],
          backgroundColor: ['#858796', '#f6c23e'],
          hoverBackgroundColor: ['#626875', '#b68f2c'],
          hoverBorderColor: "rgba(234, 236, 244, 1)",
        }],
      },
      options: {
        maintainAspectRatio: false,
        tooltips: {
          backgroundColor: "rgb(255,255,255)",
          bodyFontColor: "#858796",
          borderColor: '#dddfeb',
          borderWidth: 1,
          xPadding: 15,
          yPadding: 15,
          displayColors: false,
          caretPadding: 10,
        },
        legend: {
          display: false
        },
        cutoutPercentage: 80,
      },
    });
  } else if (cnt === 2) {
    var ppgs = document.getElementById("currentProgress");
    var currentProgress = new Chart(ppgs, {
      type: 'doughnut',
      data: {
        labels: ["잔여", "현재"],
        datasets: [{
          data: [50, 50],
          backgroundColor: ['#858796', '#f6c23e'],
          hoverBackgroundColor: ['#626875', '#b68f2c'],
          hoverBorderColor: "rgba(234, 236, 244, 1)",
        }],
      },
      options: {
        maintainAspectRatio: false,
        tooltips: {
          backgroundColor: "rgb(255,255,255)",
          bodyFontColor: "#858796",
          borderColor: '#dddfeb',
          borderWidth: 1,
          xPadding: 15,
          yPadding: 15,
          displayColors: false,
          caretPadding: 10,
        },
        legend: {
          display: false
        },
        cutoutPercentage: 80,
      },
    });
  } else if (cnt === 3) {
    var ppgs = document.getElementById("currentProgress");
    var currentProgress = new Chart(ppgs, {
      type: 'doughnut',
      data: {
        labels: ["잔여", "현재"],
        datasets: [{
          data: [25, 75],
          backgroundColor: ['#858796', '#f6c23e'],
          hoverBackgroundColor: ['#626875', '#b68f2c'],
          hoverBorderColor: "rgba(234, 236, 244, 1)",
        }],
      },
      options: {
        maintainAspectRatio: false,
        tooltips: {
          backgroundColor: "rgb(255,255,255)",
          bodyFontColor: "#858796",
          borderColor: '#dddfeb',
          borderWidth: 1,
          xPadding: 15,
          yPadding: 15,
          displayColors: false,
          caretPadding: 10,
        },
        legend: {
          display: false
        },
        cutoutPercentage: 80,
      },
    });
  } else if (cnt == 4) {
    var ppgs = document.getElementById("currentProgress");
    var currentProgress = new Chart(ppgs, {
      type: 'doughnut',
      data: {
        labels: ["잔여", "현재"],
        datasets: [{
          data: [0, 100],
          backgroundColor: ['#858796', '#f6c23e'],
          hoverBackgroundColor: ['#626875', '#b68f2c'],
          hoverBorderColor: "rgba(234, 236, 244, 1)",
        }],
      },
      options: {
        maintainAspectRatio: false,
        tooltips: {
          backgroundColor: "rgb(255,255,255)",
          bodyFontColor: "#858796",
          borderColor: '#dddfeb',
          borderWidth: 1,
          xPadding: 15,
          yPadding: 15,
          displayColors: false,
          caretPadding: 10,
        },
        legend: {
          display: false
        },
        cutoutPercentage: 80,
      },
    });
  }
}


//
// var ppgs = document.getElementById("currentProgress");
// var currentProgress = new Chart(ppgs, {
//   type: 'doughnut',
//   data: {
//     labels: ["잔여", "현재"],
//     datasets: [{
//       data: [30, 70],
//       backgroundColor: ['#858796', '#f6c23e'],
//       hoverBackgroundColor: ['#626875', '#b68f2c'],
//       hoverBorderColor: "rgba(234, 236, 244, 1)",
//     }],
//   },
//   options: {
//     maintainAspectRatio: false,
//     tooltips: {
//       backgroundColor: "rgb(255,255,255)",
//       bodyFontColor: "#858796",
//       borderColor: '#dddfeb',
//       borderWidth: 1,
//       xPadding: 15,
//       yPadding: 15,
//       displayColors: false,
//       caretPadding: 10,
//     },
//     legend: {
//       display: false
//     },
//     cutoutPercentage: 80,
//   },
// });
