Page({
  onTap:function(){
    //路由api


    // wx.navigateTo({
    //   url: '../posts/posts'
    // })

    // wx.redirectTo({
    //   url: '../posts/posts',
    // })

    //如果跳转的页面带有tap栏，优先选择switchTap
    wx.switchTab({
      url: '../posts/posts',
    })
    
  }
})