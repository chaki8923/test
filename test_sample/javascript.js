	//依頼内容アクションまとめ

  $('a[href^=#]').click(function() {
		var headerHight = $('.main-header-clone').outerHeight()+45;
		var href = $(this).attr('href');
		var target = $(href == '#' || href == '' ? 'html' : href);
		var position = target.offset().top-headerHight;
		$('html,body').animate({scrollTop:position}, 10, 'swing');
	} );

  $('.js-copy-btn').on('click', function(){
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
       setInterval(function(){
         $('.copy-modal').stop().removeClass('fadein');
       },2500);
  
  });
  //関連記事を出す
  //閉じるボタンの表示非表示
  $('.js-article').add($('.batu')).on('click',function(){
    var top = $(window).scrollTop()
    $('.article-btn').toggleClass('kesu');
    $('.close-article').toggleClass('dasu');
    $('.ritch-article').toggleClass('slidein');
    $('.not-scroll').css({
      'top':top,
      'left':'0'
    });
    $('body,html').toggleClass('not-scroll');
    $('.overlay').toggleClass('cover');
  
  });
  
  
  //トップに戻る
  var $top = $('.js-top');
   $top.on("click",function(){
    $('body,html').animate({scrollTop: 0},500);
    return false
  });
  
  //目次を出す
  //閉じるボタンの表示非表示
  $('.js-table').on('click',function(){
    var top = $(window).scrollTop()
    $('.custom-table').toggleClass('kesu');
    $('.close-table').toggleClass('dasu');
    $('.js-black').toggleClass('haikei');
    $('.rtoc-mokuji-content').toggleClass('hyouji');
    $('.no-scroll').css({
      'top':top,
      'left':'0'
    });
    $('body,html').toggleClass('no-scroll');
  });
  //目次のリンク触っても目次消す
  $('.rtoc-item a').on('click',function(){
    $('.js-black').removeClass('haikei');
    $('.rtoc-mokuji-content').removeClass('hyouji');
    $('.custom-table').removeClass('kesu');
    $('.close-table').removeClass('dasu');
    $('body,html').removeClass('no-scroll');
  })
  //閉じるのボタン以外のところ押しても消す
  $(document).on('click', function(e) {
    if (!$(e.target).closest('.js-table').length) {
      
      $('body,html').removeClass('no-scroll');
      $('.js-black').removeClass('haikei');
      $('.rtoc-mokuji-content').removeClass('hyouji');
      $('.custom-table').removeClass('kesu');
      $('.close-table').removeClass('dasu');
    }

    
  });