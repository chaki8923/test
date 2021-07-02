	<!-- フッタークリックで出てくるもの -->
	<div class="toumei">
<!-- <div class="overlay"> -->
	<section class="ritch-article">
<i class="fas fa-times batu fa-2x"></i>
  <!-- ここは固定ページか投稿ページで条件分岐使い分け -->
  <span class="ritch-article-txt"><?php if( has_category() ) : //表示中の投稿に登録されているカテゴリがある場合のみ下記実行 ?>
<?php
//表示中の投稿に登録されているカテゴリID（term_id）を全て取得
$categories = get_the_category();
$cat_term_ids = array();
foreach($categories as $category){
	$cat_term_ids[] = $category->term_id; //cat_ID でも同じ
}

//関連記事取得用クエリパラメーター
$args = array(
	'post_type' => 'post',	//投稿を指定 （固定ページの場合は 'page'）
	'posts_per_page' => '10',	//取得する件数
	'ignore_sticky_posts' => true,	//「トップに固定」した投稿は除く
	'post__not_in' => array( $post->ID ),	//除外する投稿（本記事）
	'category__in' => $cat_term_ids,	//対象となるカテゴリID（配列）
	'orderby' => 'rand'	//表示順をランダムにしてい（日付順の場合は 'date'）
	);
$the_query = new WP_Query( $args );	//クエリ実行
?>

<?php if( $the_query->post_count > 0 ) : //該当する投稿が１件以上あったら下記出力 ?>
<aside class="relPostWrap">
<h3 class="kanren"><i class="far fa-newspaper kanren-paper"></i> 関連記事</h3>
	<ul>
		<?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
			<li>
				
          <!-- 表示させたい項目 -->
					<span class="post_date"><?php //the_date('Y/n/j'); ?></span>
					<a href="<?php the_permalink(); ?>">
			<div class="kanren-title">▶︎ <?php echo wp_trim_words(get_the_title(), 48, "…", "UTF-8"); ?></div>

				
			</a></li>
			<?php endwhile; ?>Ï
			<?php wp_reset_postdata(); ?>
	</ul>
	
</aside>
<?php else: ?>
	<p class="nothing">この記事の関連記事はありません。</p>
<?php endif; // end of "if( $the_query->post_count > 0 )" ?>
<h3 class="kanren-list">カテゴリ一覧へ</h3>
<ul class="category-list">
	<?php
	// パラメータを指定
	$args = array(
		// カテゴリー内の記事数順で指定
			'orderby' => 'count',
			// 降順で指定
			'order' => 'DSC'
	);
	$categories = get_categories( $args );

	foreach( $categories as $category ){
			echo '<li><a class="category-chan" href="' . get_category_link( $category->term_id ) . '">'.'▶︎ ' . $category->name . '</a> </li> '; 
	}
	?>
<nav class="ritch-search"><?php get_search_form(); ?></nav>
</ul>
<?php endif; // end of "if( has_category() )" ?></span>

</section>
<!-- </div> -->

<div class="copy-modal">
<p class="copy-modal-txt">タイトルとURLをコピーしました。</p>
</div>

	<div class="js-white"></div>
	<div class="js-black">
		<div class="close"></div>
	</div>
</div>
<!-- ↑↑ここまでが依頼内容 -->