// pages/posts/posts.js

const postsData = require('../../data/posts-data.js')

Page({
  //产生事件  捕捉事件   回调函数  处理事件
  /**
   * 页面的初始数据
   */
  data: {
    //单向数据绑定，在小程序中可以做到，把js数据绑定到wxml里面,单向数据绑定也并不是说无法做到在页面变更的时候无法同步数据，只是不会自动同步，可以通过事件从页面把值传回
    //双向数据绑定，在小程序中无法做到
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // 要给数组一个名字，否则加载到data()中，wxml识别不到
    //   this.setData(post_content)
    this.setData({
      // posts_content  ES6写法，键的变量值和值的变量值则相同
      posts_key: postsData.postList
    })
  },

  onPostTap: function (event) {
    var postId = event.currentTarget.dataset.postid
    // console.log(postId)
    wx.navigateTo({
      url: 'post-detail/post-detail?id=' + postId,
    })
  },
  // onSwiperItemTap: function (event) {
  //   var postId = event.currentTarget.dataset.postid
  //   // console.log(postId)
  //   wx.navigateTo({
  //     url: 'post-detail/post-detail?id=' + postId,
  //   })
  // },
  onSwiperTap:function(event){
    //target和currentTarget
    // target指的是当前点击的组件 和 currentTarget指的是事件捕获的组件
    // target这里指的是image，而currentTarget指的是swiper
    var postId = event.target.dataset.postid
    wx.navigateTo({
      url: 'post-detail/post-detail?id=' + postId,
    })
  }
})