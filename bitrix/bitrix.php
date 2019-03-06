<?php $bIsMainPage = $APPLICATION->GetCurPage(false) == SITE_DIR; ?>

<?
function bclass() {
global $APPLICATION;
$DirExp = explode('/', $APPLICATION->GetCurDir());
if($DirExp[1] !== ''): return ' class="'.$DirExp[1].'"'; endif;
}
?>

<body class="<? if ($curPage == '/index.php'): ?>front<? else: ?><?= bclass(); ?><? endif; ?>">
  <a href="<? echo $arResult["LIST_PAGE_URL"] . $arResult["SECTION"]["CODE"] . '/'; ?>">ссылка</a> на преыдущий раздел

  подключение скрипта с комментариями
  <!--[if lt IE 9]>
      <script src="<?= CUtil::GetAdditionalFileUrl(SITE_TEMPLATE_PATH . 'путь до js файла') ?>"></script>
  <![endif]-->
  <?php
    Asset::getInstance()->addJs(SITE_TEMPLATE_PATH . "/js/fix.js");
    Asset::getInstance()->addCss(SITE_TEMPLATE_PATH . "/styles/fix.css");
    Asset::getInstance()->addString("<link href='http://fonts.googleapis.com/css?family=PT+Sans:400&subset=cyrillic' rel='stylesheet' type='text/css'>");
    CJSCore::Init(array("jquery"));
  ?>

  Включение текстовой области( вместо text можно вставить html)
  https://dev.1c-bitrix.ru/api_help/main/reference/cmain/includefile.php
  https://dev.1c-bitrix.ru/learning/course/index.php?COURSE_ID=43&CHAPTER_ID=04881&LESSON_PATH=3913.4564.4881


  <? $APPLICATION->IncludeFile(
  SITE_DIR."include/slogan.php",
  array(),
  array(
  "MODE" => "html"
  )
  ); ?>

  страница детального просмотра #ELEMENT_ID#/
  Шаблоны ссылок /company-news/id эл-а/

  <? echo $arResult['DISPLAY_PROPERTIES']['ATTRIBUTE']['DISPLAY_VALUE'];?> вывод свойства https://camouf.ru/blog-note/421/?sphrase_id=32864


  // обрезка детального текста
  function my_crop($text, $length, $clearTags = true)
  {
  $text = trim($text);
  if ($clearTags === true)
  $text = strip_tags($text);
  if ($length <= 0 || strlen($text) <= $length)
  return $text;
  $out = mb_substr($text, 0, $length);
  $pos = mb_strrpos($out, ' ');
  if ($pos)
  $out = mb_substr($out, 0, $pos);
  return $out.'…';
  }
  <p class="discounts-detail__text"><?= my_crop($arItem["DETAIL_TEXT"], 120) ?></p>



  <?php if (!$USER->IsAuthorized()): ?>
      <ul class="login-register">
        <li>
          <a href="/auth?login=yes">Вход</a>
        </li>
        <li>
          <a href="/auth?register=yes">Регистрация</a>
        </li>
      </ul>
    <?php else: ?>
      <ul class="login-register">
        <li>
          <a href="/personal">Личный кабинет</a>
        </li>
      </ul>
  <?php endif; ?>


  <?php
    $this->SetViewTarget('smart_filter');  //// vertical_catalog
///// вызываемый компонент
    $this->EndViewTarget('smart_filter');
  ?>
  <? $APPLICATION->ShowViewContent('smart_filter'); ?> //// вызываем в header.php



  Для размещения в разделе "/services/" Списка новостей и Детальной новости без привлечения комплексного компонента:
  1. Размещаем в папке файлы index.php и detail.php
  2. Размещаем в index.php компонент news.list с параметром "PARENT_SECTION_CODE" => $_REQUEST['SECTION_CODE'],
  3. Размещаем в detail.php компонент news.detail с параметром "ELEMENT_CODE" => $_REQUEST["ELEMENT_CODE"]
  4. Пишем в файле urlrewrite.php правило:
  <?php
    1 => array(
    'CONDITION' => '#^/services/([a-zA-Z0-9-]{1,})/([a-zA-Z0-9-]{1,})/$#',
    'RULE' => 'ELEMENT_CODE=$2',
    'ID' => '',
    'PATH' => '/services/detail.php',
    'SORT' => 20, ),
    2 => array(
    'CONDITION' => '#^/services/([a-zA-Z0-9-]{1,})/$#',
    'RULE' => 'SECTION_CODE=$1',
    'ID' => '',
    'PATH' => '/services/index.php',
    'SORT' => 30, ),
  ?>

  Архитектура продукта                https://dev.1c-bitrix.ru/learning/course/index.php?COURSE_ID=43&LESSON_ID=2817&LESSON_PATH=3913.4608.2817
  Компоненты                          https://dev.1c-bitrix.ru/learning/course/index.php?COURSE_ID=43&CHAPTER_ID=04565
  Структура файлов                    https://dev.1c-bitrix.ru/learning/course/index.php?COURSE_ID=43&LESSON_ID=2287&LESSON_PATH=3913.4608.2287
  Информация на сайте и работа с ней  https://dev.1c-bitrix.ru/learning/course/index.php?COURSE_ID=35&CHAPTER_ID=04500&LESSON_PATH=3906.4493.4500
  Инфоблоки                           https://dev.1c-bitrix.ru/learning/course/index.php?COURSE_ID=43&CHAPTER_ID=04610
  Слайд инфоблок                      https://www.youtube.com/watch?v=S4zcItD-lec
