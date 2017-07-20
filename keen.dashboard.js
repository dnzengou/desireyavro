var client = new Keen({
  projectId: "58e41f350935ce40a59fa8a0",
  readKey: "BF9B8EE0B85930E7F64E07062B737DC26A45F23E971C4E65F2F69453FA6D77E470F15049089D3D118CAC9BEE2D396D3CFBCBC9A46BA9A10A8E17CB80086B1BA77EFB298481F4D76C04C981B5F6B317D48D2DA6F517F9C077E37984372D4B322A"
});

Keen.ready(function(){


  // ----------------------------------------
  // Pageviews Area Chart
  // ----------------------------------------
  var pageviews_timeline = new Keen.Query("count", {
    eventCollection: "pageviews",
    interval: "hourly",
    groupBy: "user.device_info.browser.family",
    timeframe: {
      start: "2016-05-04T00:00:00.000Z",
      end: "2017-20-05T00:00:00.000Z"
    }
  });
  client.draw(pageviews_timeline, document.getElementById("chart-01"), {
    chartType: "areachart",
    title: false,
    height: 250,
    width: "auto",
    chartOptions: {
      chartArea: {
        height: "85%",
        left: "5%",
        top: "5%",
        width: "80%"
      },
      isStacked: true
    }
  });


  // ----------------------------------------
  // Pageviews Pie Chart
  // ----------------------------------------
  var pageviews_static = new Keen.Query("count", {
    eventCollection: "pageviews",
    groupBy: "user.device_info.browser.family",
    timeframe: {
      start: "2016-05-04T00:00:00.000Z",
      end: "2017-20-05T00:00:00.000Z"
    }
  });
  client.draw(pageviews_static, document.getElementById("chart-02"), {
    chartType: "piechart",
    title: false,
    height: 250,
    width: "auto",
    chartOptions: {
      chartArea: {
        height: "85%",
        left: "5%",
        top: "5%",
        width: "100%"
      },
      pieHole: .4
    }
  });


  // ----------------------------------------
  // Impressions timeline
  // ----------------------------------------
  var impressions_timeline = new Keen.Query("count", {
    eventCollection: "impressions",
    groupBy: "ad.advertiser",
    interval: "hourly",
    timeframe: {
      start: "2016-05-04T00:00:00.000Z",
      end: "2017-20-05T00:00:00.000Z"
    }
  });
  client.draw(impressions_timeline, document.getElementById("chart-03"), {
    chartType: "columnchart",
    title: false,
    height: 250,
    width: "auto",
    chartOptions: {
      chartArea: {
        height: "75%",
        left: "10%",
        top: "5%",
        width: "60%"
      },
      bar: {
        groupWidth: "85%"
      },
      isStacked: true
    }
  });


  // ----------------------------------------
  // Impressions timeline (device)
  // ----------------------------------------
  var impressions_timeline_by_device = new Keen.Query("count", {
    eventCollection: "impressions",
    groupBy: "user.device_info.device.family",
    interval: "hourly",
    timeframe: {
      start: "2016-05-04T00:00:00.000Z",
      end: "2017-20-05T00:00:00.000Z"
    }
  });
  client.draw(impressions_timeline_by_device, document.getElementById("chart-04"), {
    chartType: "columnchart",
    title: false,
    height: 250,
    width: "auto",
    chartOptions: {
      chartArea: {
        height: "75%",
        left: "10%",
        top: "5%",
        width: "60%"
      },
      bar: {
        groupWidth: "85%"
      },
      isStacked: true
    }
  });


  // ----------------------------------------
  // Impressions timeline (country)
  // ----------------------------------------
  var impressions_timeline_by_country = new Keen.Query("count", {
    eventCollection: "impressions",
    groupBy: "user.geo_info.country",
    interval: "hourly",
    timeframe: {
      start: "2016-05-04T00:00:00.000Z",
      end: "2017-20-05T00:00:00.000Z"
    }
  });
  client.draw(impressions_timeline_by_country, document.getElementById("chart-05"), {
    chartType: "columnchart",
    title: false,
    height: 250,
    width: "auto",
    chartOptions: {
      chartArea: {
        height: "75%",
        left: "10%",
        top: "5%",
        width: "60%"
      },
      bar: {
        groupWidth: "85%"
      },
      isStacked: true
    }
  });


});
