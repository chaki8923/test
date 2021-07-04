<!-- リッチフッター -->
<?php if(is_single()): ?>

<footer class="r-footer">
<div class="close"></div>
      <ul class="r-footer-ul">
        <li class="r-footer-li js-copy-btn">
          <span class="js-copy-url"><?php the_title() ?> <?php the_permalink(); ?></span>
          <span class="copy-txt">URLコピー</span>
          <i class="far fa-copy copy"></i>
        </li>
        <li class="r-footer-li js-article">
          <span class="close-article">閉じる</span>
          <span class="article-btn">関連記事</span>
          <i class="far fa-newspaper paper"></i>
      </li>
        <li class="r-footer-li js-table">
          <span class="close-table">閉じる</span>
          <span class="custom-table">目次</span>
          <i class="fas fa-bars mokuji-bar"></i>
        </li>
        <li class="r-footer-li js-top">
          <span class="top">Top</span>
          <i class="fas fa-arrow-up top-up-arrow"></i>
        </li>
      </ul>
    </footer>
   <?php endif; ?>