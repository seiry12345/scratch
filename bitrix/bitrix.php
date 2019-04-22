<a href="<? echo $arResult["LIST_PAGE_URL"] . $arResult["SECTION"]["CODE"] . '/'; ?>">ссылка</a> на преыдущий раздел

https://zombzone.ru/?p=141         ajax compare
https://camouf.ru/blog-note/2375/  ajax compare
https://dev.1c-bitrix.ru/learning/course/index.php?COURSE_ID=43&LESSON_ID=2917
https://dev.1c-bitrix.ru/api_help/js_lib/index.php
CFile::GetFileArray(id);


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

страница детального просмотра #ELEMENT_ID#/
Шаблоны ссылок /company-news/id эл-а/

<? echo $arResult['DISPLAY_PROPERTIES']['ATTRIBUTE']['DISPLAY_VALUE']; ?> вывод свойства
https://camouf.ru/blog-note/421/?sphrase_id=32864


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
array(
	1 => array(
		'CONDITION' => '#^/services/([a-zA-Z0-9-]{1,})/([a-zA-Z0-9-]{1,})/$#',
		'RULE' => 'ELEMENT_CODE=$2',
		'ID' => '',
		'PATH' => '/services/detail.php',
		'SORT' => 20,),
	2 => array(
		'CONDITION' => '#^/services/([a-zA-Z0-9-]{1,})/$#',
		'RULE' => 'SECTION_CODE=$1',
		'ID' => '',
		'PATH' => '/services/index.php',
		'SORT' => 30,)
)
?>

Архитектура продукта
https://dev.1c-bitrix.ru/learning/course/index.php?COURSE_ID=43&LESSON_ID=2817&LESSON_PATH=3913.4608.2817
Компоненты https://dev.1c-bitrix.ru/learning/course/index.php?COURSE_ID=43&CHAPTER_ID=04565
Структура файлов
https://dev.1c-bitrix.ru/learning/course/index.php?COURSE_ID=43&LESSON_ID=2287&LESSON_PATH=3913.4608.2287
Информация на сайте и работа с ней
https://dev.1c-bitrix.ru/learning/course/index.php?COURSE_ID=35&CHAPTER_ID=04500&LESSON_PATH=3906.4493.4500
Инфоблоки https://dev.1c-bitrix.ru/learning/course/index.php?COURSE_ID=43&CHAPTER_ID=04610

CSaleBasket  корзина
