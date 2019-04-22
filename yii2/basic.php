<?php
// ============================== main page
$controller = Yii::$app->controller;
$default_action = Yii::$app->requestedAction->id;
?>
<body class="<?php ($default_action == 'index') ? print 'front' : print $default_action ?>">
<?php // ============================== end main page  ?>
