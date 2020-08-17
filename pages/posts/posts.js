// pages/posts/posts.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date:'Nov 18 2020',
    title: '正是虾肥蟹状时',
    //单向数据绑定，在小程序中可以做到，把js数据绑定到wxml里面,单向数据绑定也并不是说无法做到在页面变更的时候无法同步数据，只是不会自动同步，可以通过事件从页面把值传回
    //双向数据绑定，在小程序中无法做到
  },

  // 在这个JavaScript对象中除了自带的函数，也可以定义自己的函数
  process: function(){
    var date = 'Nov 18 2020'
    var date_ele = document.getElementById('id')
    //网页
    //DOM DOM 优先,在小程序中是无法使用DOM节点的
    //数据优先  AngularJS
    //数据绑定   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var posts_content= [{
      date: "Nov 18 2019",
      title: "正是虾肥蟹壮时",
      content: "菊黄蟹正肥，品尝秋之味。徐志摩把,“看初花的荻芦”和“到楼外楼吃蟹”,并列为秋天来杭州不能错过的风雅之事；用林妹妹的话讲是“螯封嫩玉双双满，",
      view_num: "112",
      collec_num: "96",
      post_img: "/images/post/crab.png",
      author_img: "/images/avatar/1.png"
  }, {
    date: "Sep 25 2016",
    title: "比利·林恩的中场故事",
    content: "一 “李安是一位绝不会重复自己的导演，本片将极富原创性李安众所瞩目的新片《比利林恩漫长的中场休息》，正式更名《半场无战事》。",
    view_num: "62",
    collec_num: "92",
    post_img: "/images/post/bl.png",
    author_img: "/images/avatar/1.png"
  }]

  
  // 要给数组一个名字，否则加载到data()中，wxml识别不到
  //   this.setData(post_content)
  this.setData({
    // posts_content  ES6写法，键的变量值和值的变量值则相同
    posts_key: posts_content
  })
    console.log("onLoad")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */ 
  onHide: function () {
    console.log("onHide")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("onUnload")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("ReachBottom")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("share")
  }
})