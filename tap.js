$(document).ready(function(){
    // 页面向下滚动超过300px时按钮显示，否则隐藏
    $(window).scroll(function(){
    if($(this).scrollTop()>300){
    $('.back-to-top').fadeIn(100);
    } else {
    $('.back-to-top').fadeOut(100);
    }
    });
    // 点击按钮，向上动画滚动
    $('.back-to-top').click(function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:0},500);
    })
});