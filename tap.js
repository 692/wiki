$(document).ready(function(){
    // ҳ�����¹�������300pxʱ��ť��ʾ����������
    $(window).scroll(function(){
    if($(this).scrollTop()>300){
    $('.back-to-top').fadeIn(100);
    } else {
    $('.back-to-top').fadeOut(100);
    }
    });
    // �����ť�����϶�������
    $('.back-to-top').click(function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:0},500);
    })
});