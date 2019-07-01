function oc_atoll_taxonomy_catalog_sort($a, $b) { 
   if ($a->created == $b->created) {
       return 0;
   }
   return ($a->created < $b->created) ? -1 : 1;
}
