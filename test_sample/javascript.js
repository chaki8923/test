//依頼内容アクションまとめ

// $('a[href^=#]').click(function () {
//   var headerHight = $('.main-header-clone').outerHeight() + 45;
//   var href = $(this).attr('href');
//   var target = $(href == '#' || href == '' ? 'html' : href);
//   var position = target.offset().top - headerHight;
//   $('html,body').animate({ scrollTop: position }, 10, 'swing');
// });

$('.js-copy-btn').on('click', function () {
  //コピーさせたい文字列を取得
  var text = $('.js-copy-url').text();
  //textareaタグを追加
  $(this).append('<textarea class="clipboard_textarea">' + text + '</textarea>');
  //textareaの文字を選択
  $('.clipboard_textarea').select();
  //コピー
  document.execCommand('copy');
  //textareタグを削除
  $('.clipboard_textarea').remove();

  $('.copy-modal').fadeIn();

  setInterval(function () {
    $('.copy-modal').fadeOut();
  }, 2500);

});
//関連記事を出す
//閉じるボタンの表示非表示
$('.js-article').add($('.batu')).on('click', function () {
  var top = $(window).scrollTop();

  $('.js-white').toggleClass('cover')
  $('.article-btn').toggleClass('kesu');
  $('.close-article').toggleClass('dasu');
  $('.ritch-article').toggleClass('slidein');
  $('.overlay').toggleClass('cover');
  //他のボタン押せなくする
  $('.js-table').stop().toggleClass('no-tatch');
  $('.js-copy-btn').stop().toggleClass('no-tatch');
  // 黒背景消す
//   $('.js-black').addClass('haikei');
  //ここ嫌って言われたらdisplay: blockからのsettimeOutで上記処理
  $('.toumei').css('display','block');
  $('body,html').toggleClass('not-scroll');
  
});

//オーバーレイ触っても関連記事消す
$('.js-white').on('click',function(){
  $(this).removeClass('cover');
  $('.js-table').stop().removeClass('no-tatch');
  $('.js-copy-btn').stop().removeClass('no-tatch');
  // 黒背景消す
  $('body,html').removeClass('not-scroll');
  $('.article-btn').removeClass('kesu');
  $('.close-article').removeClass('dasu');
  $('.ritch-article').removeClass('slidein');

});


//トップに戻る
var $top = $('.js-top');
$top.on("click", function () {
  $('body,html').animate({ scrollTop: 0 }, 200);
  return false
});

//目次を出す
//閉じるボタンの表示非表示
$('.js-table').on('click', function () {
  //もしふんわりクラス持ってたら
  if($(this).hasClass('hunwari')){

  $('.js-table').removeClass('hunwari');
  $('.toumei').toggleClass('ukideru');
  $('.rtoc-mokuji-content').toggleClass('hyouji');
	 $('.js-black').fadeToggle(400);
  setTimeout(function(){
    
     
     $('.custom-table').toggleClass('kesu');
     $('.close-table').toggleClass('dasu');
   	$('.rtoc-mokuji-content').fadeToggle(10);
     
     $('body,html').toggleClass('no-scroll');
   
     $('.js-article').stop().toggleClass('no-tatch');
     $('.js-copy-btn').stop().toggleClass('no-tatch');
     $('.close').toggleClass('open')
  },200);
  //ふんわり持ってなかったら
  }else{

    $(this).addClass('hunwari');
    $('.toumei').toggleClass('ukideru');
    $('.rtoc-mokuji-content').fadeToggle();
    
    
  setTimeout(function(){
  
    $('.rtoc-mokuji-content').toggleClass('hyouji');
    
     $('.js-black').fadeToggle(800);
     $('.custom-table').toggleClass('kesu');
     $('.close-table').toggleClass('dasu');
   
     
     $('body,html').toggleClass('no-scroll');
   
     $('.js-article').stop().toggleClass('no-tatch');
     $('.js-copy-btn').stop().toggleClass('no-tatch');
     $('.close').toggleClass('open')
  },100);
  }


});




//目次のリンク触っても目次消す
$('.rtoc-item a').on('click', function (e) {
  
	$('.js-table').removeClass('hunwari');
	$('.toumei').removeClass('ukideru');
  $('.custom-table').removeClass('kesu');
  $('.close-table').removeClass('dasu');
	$('.rtoc-mokuji-content').removeClass('hyouji');
	$('.js-black').fadeOut(350);
  
  setTimeout(function(){
    
    $('body,html').removeClass('no-scroll');
    $('.rtoc-mokuji-content').fadeOut(10);
    
    
  },200);
  
  $('.js-article').removeClass('no-tatch');
  $('.js-copy-btn').removeClass('no-tatch');
  $('.close').removeClass('open')
  
});
//閉じるのボタン押しても消す
$('.close').add($('.js-black')).on('click', function (e) {
  
	$('.js-table').removeClass('hunwari');

	$('.rtoc-mokuji-content').removeClass('hyouji');
	$('.toumei').removeClass('ukideru');
  $('.rtoc-mokuji-content').fadeOut(400);
  $('.js-black').fadeOut(800);
  $('.custom-table').removeClass('kesu');
  $('.close-table').removeClass('dasu');
  $('body,html').removeClass('no-scroll');
  
  
  $('.js-article').removeClass('no-tatch');
  $('.js-copy-btn').removeClass('no-tatch');
  $('.close').removeClass('open')

});