<?php 
  drupal_set_title('Каталог');
?>
<div class="inner-catalog clearfix">
  <?php
  foreach ($terms as $term):
    ?>
    <?php
    $tid = $term->tid;
    $full_term = taxonomy_term_load($tid);
    $term_alias = drupal_get_path_alias('taxonomy/term/' . $tid);

    $img_uri = $full_term->field_catalog_img['und'][0]['uri'];
    $img_url = file_create_url($img_uri);
    $img_path_url = parse_url($img_url);
    $img_path = $img_path_url['path'];
    $img_cropped = image_style_url('220_180', $img_uri);
    ?>

    <div id="<?= $term_alias; ?>" class="<?= $classes; ?> views-row clearfix">
      <h3>
        <a href="/catalog/<?= $term_alias; ?>" > <?= $term->name; ?> </a>
      </h3>
      <div class="block_img">
        <img src="<?= $img_cropped ?>" alt="<?= $term->name; ?>">
      </div>
      <a href="/catalog/<?= $term_alias; ?>" class="product-btn"><span class="button_s">Подробнее</span></a>
    </div>
  <?php endforeach; ?>
</div>
