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

  $('.copy-modal').stop().addClass('fadein');
  setInterval(function () {
    $('.copy-modal').stop().removeClass('fadein');
  }, 2500);

  $('.js-black').addClass('haikei');

  $('.toumei').fadeToggle();
  setTimeout(function () {
    $('.toumei').fadeToggle();
  }, 1000);


});
//関連記事を出す
//閉じるボタンの表示非表示
$('.js-article').add($('.batu')).on('click', function () {
  var top = $(window).scrollTop();


  $('.article-btn').toggleClass('kesu');
  $('.close-article').toggleClass('dasu');
  $('.ritch-article').toggleClass('slidein');
  $('.overlay').toggleClass('cover');
  //他のボタン押せなくする
  $('.js-table').stop().toggleClass('no-tatch');
  $('.js-copy-btn').stop().toggleClass('no-tatch');
  // 黒背景消す
  $('.js-black').addClass('haikei');
//ここ嫌って言われたらdisplay: blockからのsettimeOutで上記処理
  $('.toumei').fadeToggle(200);
  $('body,html').toggleClass('not-scroll');

});




//トップに戻る
var $top = $('.js-top');
$top.on("click", function () {
  $('body,html').animate({ scrollTop: 0 }, 500);
  return false
});

//目次を出す
//閉じるボタンの表示非表示
$('.js-table').on('click', function () {
  var top = $(window).scrollTop();

  $('.js-black').removeClass('haikei');
  $('.custom-table').toggleClass('kesu');
  $('.close-table').toggleClass('dasu');
  
  $('.rtoc-mokuji-content').toggleClass('hyouji');
  $('body,html').toggleClass('no-scroll');
  $('.toumei').fadeToggle(400);

  $('.js-article').stop().toggleClass('no-tatch');
  $('.js-copy-btn').stop().toggleClass('no-tatch');
  $('.close').toggleClass('open')

});



//目次のリンク触っても目次消す
$('.rtoc-item a').on('click', function (e) {
  
  $('.custom-table').removeClass('kesu');
  $('.close-table').removeClass('dasu');
  
  $('body,html').removeClass('no-scroll');
  $('.toumei').stop().fadeOut();
  $('.rtoc-mokuji-content').stop().removeClass('hyouji');
  
  $('.js-article').removeClass('no-tatch');
  $('.js-copy-btn').removeClass('no-tatch');
  $('.close').removeClass('open')
  
});
//閉じるのボタン押しても消す
$('.close').on('click', function (e) {
  

  $('.custom-table').removeClass('kesu');
  $('.close-table').removeClass('dasu');
  $('body,html').removeClass('no-scroll');
  $('.toumei').fadeOut();
  $('.rtoc-mokuji-content').stop().removeClass('hyouji');
  
  $('.js-article').removeClass('no-tatch');
  $('.js-copy-btn').removeClass('no-tatch');
  $('.close').removeClass('open')

});