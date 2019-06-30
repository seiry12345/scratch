<div class="catalog-level-2">
    <?php
    $firstNode = current($nodes['nodes']);
    $categoryTitle = $firstNode['field_products_category'][0]['#title'];
    ?>
    <h1><?= render($categoryTitle); ?></h1>
    <div class="catalog-wrap">
        <?php
        foreach ($nodes as $node) {
            print render($node);
        }
        ?>
    </div>
</div>

