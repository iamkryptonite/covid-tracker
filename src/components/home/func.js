const columns = [
    {
      title: 'Name',
      dataIndex: "name",
    },
    {
      title: 'Active',
      dataIndex: 'active',
      sorter: {
        compare: (a, b) => a.active - b.active,
        multiple: 4,
      },
    },
    {
      title: 'Confirmed',
      dataIndex: 'confirmed',
      sorter: {
        compare: (a, b) => a.confirmed - b.confirmed,
        multiple: 3,
      },
    },
    {
      title: 'Deaths',
      dataIndex: 'deaths',
      sorter: {
        compare: (a, b) => a.deaths - b.deaths,
        multiple: 2,
      },
    },
    {
      title: 'Recovered',
      dataIndex: 'recovered',
      sorter: {
        compare: (a, b) => a.recovered - b.recovered,
        multiple: 1,
      },
    },
  ];
  var line1 = {
    labels: "",
    datasets: [
      {
        label: 'Daily Confirmed Cases',
        fill: false,
        lineTension: 0.4,
        backgroundColor: '',
        borderColor: "#06418a",
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: "#06418a",
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 6,
        pointHoverBackgroundColor: "#06418a",
        pointHoverBorderColor: "#06418a",
        pointHoverBorderWidth: 2,
        pointRadius: 4,
        pointHitRadius: 10,
        data: ""
      }
    ]
  };
  var line2 = {
    labels: "",
    datasets: [
      {
        label: 'Daily Confirmed Cases',
        fill: false,
        lineTension: 0.4,
        backgroundColor: '',
        borderColor: "#a31414",
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: "#a31414",
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 6,
        pointHoverBackgroundColor: "#a31414",
        pointHoverBorderColor: "#a31414",
        pointHoverBorderWidth: 2,
        pointRadius: 4,
        pointHitRadius: 10,
        data: ""
      }
    ]
  };
  var line3 = {
    labels:"",
    datasets: [
      {
        label: 'Daily Confirmed Cases',
        fill: false,
        lineTension: 0.4,
        backgroundColor: '',
        borderColor: "#118a06",
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: "#118a06",
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 6,
        pointHoverBackgroundColor: "#118a06",
        pointHoverBorderColor: "#118a06",
        pointHoverBorderWidth: 2,
        pointRadius: 4,
        pointHitRadius: 10,
        data: ""
      }
    ]
  };
  export {columns,line1,line2,line3};