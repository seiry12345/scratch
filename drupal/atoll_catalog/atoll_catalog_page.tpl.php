<div class="catalog-wrapper">
  <?php
  foreach ($terms as $term):
    ?>
    <?php
    $nids = taxonomy_select_nodes($term->tid);
    $nodes = node_load_multiple($nids);
    $nodesViews = node_view_multiple($nodes, 'full');
    $term_url = drupal_get_path_alias('/catalog/' . (int)$term->tid);
    ?>
      <div class="catalog-item-bg">
          <div class="catalog-item">
              <h3>
                  <a href="<?= $term_url ?>"><?= $term->name ?></a>
              </h3>
              <div class="catalog-teaser-img">
                  <ul>
                    <?php foreach ($nodes as $node):
                      $nid = $node->nid;
                      $node_path = '/catalog/' . (int)$nid;
                      $node_alias = drupal_get_path_alias($node_path);
                      ?>
                        <li>
                            <a href="<?= $node_alias ?>">
                              <?= $node->title ?>
                            </a>
                        </li>
                    <?php endforeach; ?>
                  </ul>
              </div>
          </div>
      </div>
  <?php endforeach; ?>
</div>
