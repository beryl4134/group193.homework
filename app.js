
App({
  getDatapoints: function () {
    var that = this
    wx.request({
      url: `https://api.heclouds.com/devices/577850820/datapoints?datastream_id=latitude,longitude`,
      header: {
        'content-type': 'application/json',
        'api-key': api_key
      },
      success: function (res) {
        console.log(res.data.data),
          that.setData({
            "lati": res.data.data.datastreams[0].datapoints[0].value,
            "longi": res.data.data.datastreams[1].datapoints[0].value,
            "markers": [{
              id: '0',
              latitude: "  res.data.data.datastreams[0].datapoints[0].value",
              longitude: " res.data.data.datastreams[1].datapoints[0].value",
              width: 50,
              height: 50
            }]
          })
      }
    })
    console.log(that.data.lati)
    console.log(that.data.longi)
  }
})