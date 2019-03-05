<?
  if (CModule::IncludeModule("iblock")):
// ID инфоблока из которого выводим элементы
    $iblock_id = 11;
    $my_slider = CIBlockElement::GetList(
// Сортировка элементов
            Array("ID" => "ASC"), Array("IBLOCK_ID" => $iblock_id), false, false,
// Перечисляесм все свойства элементов, которые планируем выводить
            Array(
            'ID',
            'NAME',
            'PREVIEW_PICTURE',
            'PREVIEW_TEXT',
            'PROPERTY_LIN_PR'
            )
    );
    while ($ar_fields = $my_slider->GetNext()) {
//Выводим элемент со всеми свойствами + верстка
      $img_path = CFile::GetPath($ar_fields["PREVIEW_PICTURE"]);
      echo '<li><a href="' . $ar_fields['PROPERTY_LIN_PR_VALUE'] . '">';
      echo '<h4>' . $ar_fields['NAME'] . "</h4>";
      echo "<img src='" . $img_path . "'/>";
      echo "<p>" . $ar_fields['PREVIEW_TEXT'] . "'</p>";
      echo '</a></li>';
    }
  endif;
?>


Если попробуете вывести свойство типа HTML/TEXT получите Array. Для его вывода используйте конструкцию

<? echo htmlspecialcharsBack($ar_fields['PROPERTY_КОД_СВОЙСТВА_VALUE']["TEXT"]); ?>