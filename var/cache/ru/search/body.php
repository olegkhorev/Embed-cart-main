<div id="dcart"><img src="<?php echo $current_location;?>/images/dcart.png" alt="" /><br />Переместить товар сюда</div>
<?php if ($products) {?> <?php $tag_id = "products"; $per_row = 4;; ?>
<h3>Результаты поиска</h3>
<div class="products-results">
 <?php echo $products_results_html;?>
</div>
<?php } else  { ?><br />
<center>Товары не найдены</center><?php } ?>