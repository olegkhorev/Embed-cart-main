<form action="<?php echo $current_location;?>/admin/export<?php if ($_GET['product']) {?>?product=<?php echo $_GET['product'];?><?php } ?>" method="post" accept-charset="utf-8" class="list-form noajax" name="exportForm">

<?php if ($_GET['product']) {?>
<input type="hidden" name="export_product" value="<?php echo $_GET['product'];?>" />
<br />
Экспорт продукта #<?php echo $_GET['product'];?>. <a href="<?php echo $current_location;?>/admin/export">Сбросить</a>
<hr />
<?php } ?>

<br />
<a href="<?php echo $current_location;?>/admin/export/download" target="_blank">Скачать последний файл экспорта</a>

<br />
<br />
<a href="javascript: void(0);" onclick="javascript: import_checkboxes('Y');">Отметить все</a> / <a href="javascript: void(0);" onclick="javascript: import_checkboxes();">Отменить выбор для всех</a>

<table width="400" class="export" cellspacing="1" cellpadding="2">
<?php if (!$_GET['product']) {?>
<tr>
 <th width="15"><input type="checkbox" name="import[categories]" /></th>
 <th colspan="2">Категории</th>
</tr>
<tr>
 <td colspan="3" class="sep"></td>
</tr>
<tr>
 <td></td>
 <td class="second" colspan="2">
  <table>
   <tr>
    <td><input type="checkbox" name="import[cat_banners]" /></td>
    <td>Баннеры</td>
   </tr>
  </table>
 </td>
</tr>

<tr>
 <th width="15"><input type="checkbox" name="import[brands]" /></th>
 <th colspan="2">Brands</th>
</tr>
<?php } ?>
<tr>
 <td colspan="3" class="sep"></td>
</tr>

<?php if ($warehouse_enabled) {?>
<tr>
 <th width="15"><input type="checkbox" name="import[warehouses]" /></th>
 <th colspan="2">Warehouses</th>
</tr>
<tr>
 <td colspan="3" class="sep"></td>
</tr>
<?php } ?>

<tr>
 <th width="15"><input type="checkbox" name="import[products]" /></th>
 <th colspan="2" width="100%">Продукты</th>
</tr>
<tr>
 <td colspan="3" class="sep"></td>
</tr>

<?php if ($warehouse_enabled) {?>
<tr>
 <td></td>
 <td class="second" colspan="2">
  <table>
   <tr>
    <td><input type="checkbox" name="import[inventory]" /></td>
    <td>Warehouses inventory</td>
   </tr>
  </table>
 </td>
</tr>
<?php } ?>
<tr>
 <td></td>
 <td class="second" colspan="2">
  <table>
   <tr>
    <td><input type="checkbox" name="import[images]" /></td>
    <td>Картинки</td>
   </tr>
  </table>
 </td>
</tr>
<tr>
 <td></td>
 <td class="second" colspan="2">
  <table>
   <tr>
    <td><input type="checkbox" name="import[options]" /></td>
    <td>Опции</td>
   </tr>
  </table>
 </td>
</tr>
<tr>
 <td></td>
 <td class="third" colspan="2">
  <table>
   <tr>
    <td><input type="checkbox" name="import[variants]" /></td>
    <td>Варианты</td>
   </tr>
  </table>
 </td>
</tr>
<tr>
 <td></td>
 <td class="third" colspan="2">
  <table>
   <tr>
    <td><input type="checkbox" name="import[variant_images]" /></td>
    <td>Картинки вариантов</td>
   </tr>
  </table>
 </td>
</tr>
<?php if ($warehouse_enabled) {?>
<tr>
 <td></td>
 <td class="third" colspan="2">
  <table>
   <tr>
    <td><input type="checkbox" name="import[variant_inventory]" /></td>
    <td>Variants warehouses inventory</td>
   </tr>
  </table>
 </td>
</tr>
<?php } ?>
<tr>
 <td></td>
 <td class="second" colspan="2">
  <table>
   <tr>
    <td><input type="checkbox" name="import[wholesale]" /></td>
    <td>Оптовые цены</td>
   </tr>
  </table>
 </td>
</tr>
<tr>
 <td></td>
 <td class="second" colspan="2">
  <table>
   <tr>
    <td><input type="checkbox" name="import[related]" /></td>
    <td>Похожие товары</td>
   </tr>
  </table>
 </td>
</tr>
<?php /* ?>
<tr>
 <td></td>
 <td class="second" colspan="2">
  <table>
   <tr>
    <td><input type="checkbox" name="import[reviews]" /></td>
    <td>Customer reviews</td>
   </tr>
  </table>
 </td>
</tr>
<?php */ ?>
<tr>
 <td></td>
 <td><br /><button type="submit">Экспорт</button></td>
</tr>
</table>

</form>

