<?php
$firstNode = current($nodes['nodes']);
$categoryTitle = $firstNode['field_product_category'][0]['#title'];
drupal_set_title($categoryTitle);
?>
<?php if (isset($categoryTitle)): ?>
<h1><span><?= render($categoryTitle); ?></span></h1>
<?php endif; ?>
<div class="catalog-wrap">
  <?php
  foreach ($nodes as $node) {
    print render($node);
  }
  ?>
</div>
