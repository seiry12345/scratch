Для включения фильтр достаточно проделать следующее: Перед вызовом компонента вставить код вида

$GLOBALS['Название_Фильтра'] = array(Массив с данными для фильтрации);
В параметрах компонента передать параметры включения фильтра и его название

$APPLICATION->IncludeComponent(
.....
"USE_FILTER" => "Y",
"FILTER_NAME" => "Название_Фильтра",
.....
Дальше идут примеры которые вы можете передать в $GLOBALS['Название_Фильтра'], в качестве "Название_Фильтра" буду вписывать "arrFilter".
Наличие не пустого свойства. Если у инфоблока есть свойство с заданным кодом (DISCOUNTS) оно не пустое и активно:

$GLOBALS['arrFilter'] = array('ACTIVE' => 'Y', '!PROPERTY_DISCOUNTS' => false);
Выборка элементов по их ID, если нужен один конкретный:

$GLOBALS['arrFilter'] = array('ID' => 12);
Или несколько:

$GLOBALS['arrFilter'] = array('ID' => array(10,11,12,13));
Элементы созданные за текущий день

$curdate = date('d.m.Y');
$arrFilter = Array(">=DATE_ACTIVE_FROM" => $curdate)
Элементы созданные последние два дня, где 86000 это количество секунд. Умножая этот параметр на количество дней, получим элементы за последние n (86000 * n) дней

$from = date('d.m.Y', time() - 86400);
$to = date("d.m.Y");
$arrFilter = Array(">=DATE_ACTIVE_FROM" => $from, "<=DATE_ACTIVE_FROM" => $to)
Отфильтровываем элементы у которых в свойстве "HIT" установлено "Yes". При этом HIT это список с несколькими значениями.

$GLOBALS['arrFilter'] = array("=PROPERTY_HIT_VALUE"=> "Yes");
Отфильтровываем элементы у которых в свойстве "HIT" установлено "Yes". При этом HIT это список с несколькими значениями. И э этого свойсва ID - 15

$GLOBALS['arrFilter'] = array("PROPERTY_15_VALUE"=>"Yes");
Отфильтровываем элементы у которых в свойстве "HIT" установлено "Yes". При этом HIT это список с несколькими значениями. И э этого свойсва ID - 15

$GLOBALS['arrFilter'] = array("PROPERTY_15_VALUE"=>"Yes");
Все элементы из раздела инфоблока, зная ID этого раздела. Например из 90-го

$GLOBALS['arrFilter']=array("SECTION_ID" => 90);