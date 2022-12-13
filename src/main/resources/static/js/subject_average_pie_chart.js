// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// var ppgs = document.getElementById("averageProgress");
// var averageProgress = new Chart(ppgs, {
//   type: 'doughnut',
//   data: {
//     labels: ["잔여", "평균"],
//     datasets: [{
//       data: [65, 35],
//       backgroundColor: ['#858796', '#36b9cc'],
//       hoverBackgroundColor: ['#626875', '#318f9d'],
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

const checkavg = document.getElementsByName("subjPro");
var avgcnt = 0;
const avgchk1 = document.getElementById("chk_1").checked;
const avgchk2 = document.getElementById("chk_2").checked;
const avgchk3 = document.getElementById("chk_3").checked;
const avgchk4 = document.getElementById("chk_4").checked;
if (avgchk1 === true) {
  avgcnt += 1;
}
if (avgchk2 === true) {
  avgcnt += 1;
}
if (avgchk3 === true) {
  avgcnt += 1;
}
if (avgchk4 === true) {
  avgcnt += 1;
}
if (avgcnt === 0) {
  var avgppgs = document.getElementById("averageProgress");
  var averageProgress = new Chart(avgppgs, {
    type: 'doughnut',
    data: {
      labels: ["잔여", "평균"],
      datasets: [{
        data: [63, 37],
        backgroundColor: ['#858796', '#36b9cc'],
        hoverBackgroundColor: ['#626875', '#318f9d'],
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
} else if (avgcnt === 1) {
  var avgppgs = document.getElementById("averageProgress");
  var averageProgress = new Chart(avgppgs, {
    type: 'doughnut',
    data: {
      labels: ["잔여", "평균"],
      datasets: [{
        data: [50, 50],
        backgroundColor: ['#858796', '#36b9cc'],
        hoverBackgroundColor: ['#626875', '#318f9d'],
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
} else if (avgcnt === 2) {
  var avgppgs = document.getElementById("averageProgress");
  var averageProgress = new Chart(avgppgs, {
    type: 'doughnut',
    data: {
      labels: ["잔여", "평균"],
      datasets: [{
        data: [33, 67],
        backgroundColor: ['#858796', '#36b9cc'],
        hoverBackgroundColor: ['#626875', '#318f9d'],
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
} else if (avgcnt === 3) {
  var avgppgs = document.getElementById("averageProgress");
  var averageProgress = new Chart(avgppgs, {
    type: 'doughnut',
    data: {
      labels: ["잔여", "평균"],
      datasets: [{
        data: [25, 75],
        backgroundColor: ['#858796', '#36b9cc'],
        hoverBackgroundColor: ['#626875', '#318f9d'],
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
} else if (avgcnt == 4) {
  var avgppgs = document.getElementById("averageProgress");
  var averageProgress = new Chart(avgppgs, {
    type: 'doughnut',
    data: {
      labels: ["잔여", "평균"],
      datasets: [{
        data: [12, 88],
        backgroundColor: ['#858796', '#36b9cc'],
        hoverBackgroundColor: ['#626875', '#318f9d'],
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

function avgProgress() {
  const avgcheck = document.getElementsByName("subjPro");
  var avgcnt = 0;
  const avgchk1 = document.getElementById("chk_1").checked;
  const avgchk2 = document.getElementById("chk_2").checked;
  const avgchk3 = document.getElementById("chk_3").checked;
  const avgchk4 = document.getElementById("chk_4").checked;
  if (avgchk1 === true) {
    avgcnt += 1;
  }
  if (avgchk2 === true) {
    avgcnt += 1;
  }
  if (avgchk3 === true) {
    avgcnt += 1;
  }
  if (avgchk4 === true) {
    avgcnt += 1;
  }
  if (avgcnt === 0) {
    var avgppgs = document.getElementById("averageProgress");
    var averageProgress = new Chart(avgppgs, {
      type: 'doughnut',
      data: {
        labels: ["잔여", "평균"],
        datasets: [{
          data: [63, 37],
          backgroundColor: ['#858796', '#36b9cc'],
          hoverBackgroundColor: ['#626875', '#318f9d'],
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
  } else if (avgcnt === 1) {
    var avgppgs = document.getElementById("averageProgress");
    var averageProgress = new Chart(avgppgs, {
      type: 'doughnut',
      data: {
        labels: ["잔여", "평균"],
        datasets: [{
          data: [50, 50],
          backgroundColor: ['#858796', '#36b9cc'],
          hoverBackgroundColor: ['#626875', '#318f9d'],
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
  } else if (avgcnt === 2) {
    var avgppgs = document.getElementById("averageProgress");
    var averageProgress = new Chart(avgppgs, {
      type: 'doughnut',
      data: {
        labels: ["잔여", "평균"],
        datasets: [{
          data: [33, 67],
          backgroundColor: ['#858796', '#36b9cc'],
          hoverBackgroundColor: ['#626875', '#318f9d'],
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
  } else if (avgcnt === 3) {
    var avgppgs = document.getElementById("averageProgress");
    var averageProgress = new Chart(avgppgs, {
      type: 'doughnut',
      data: {
        labels: ["잔여", "평균"],
        datasets: [{
          data: [25, 75],
          backgroundColor: ['#858796', '#36b9cc'],
          hoverBackgroundColor: ['#626875', '#318f9d'],
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
  } else if (avgcnt == 4) {
    var avgppgs = document.getElementById("averageProgress");
    var averageProgress = new Chart(avgppgs, {
      type: 'doughnut',
      data: {
        labels: ["잔여", "평균"],
        datasets: [{
          data: [12, 88],
          backgroundColor: ['#858796', '#36b9cc'],
          hoverBackgroundColor: ['#626875', '#318f9d'],
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