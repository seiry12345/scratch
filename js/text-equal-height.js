{/*
   <div class="wrap">
  <div class="item">12312313</div>
  <div class="item">
    123123131231 231312312313 123123131231231 31231231312312313 31231231312312313
      </div>
  <div class="item">12312313</div>

  <div class="item">12312313</div>
  <div class="item">
    123123131231 231312312313 123123131231231 31231231312312313
      </div>
</div>
*/}

document.addEventListener('DOMContentLoaded', function () {
  equalHeight(3, '.item');
});

function equalHeight(numberItemsInRow, selector) {
  var items = [...document.querySelectorAll(selector)];

  if (items) {
    for (let i = 0; i < items.length; i = i + numberItemsInRow) {
      const row = items.slice(i, i + numberItemsInRow);
      let max = 0;

      findMax(row);
      setHeight(row);

      function findMax(row) {
        row.forEach(rowItem => {
          if (rowItem.offsetHeight > max) {
            max = rowItem.offsetHeight;
          }
        });
      }

      function setHeight(row) {
        row.forEach(rowItem => {
          rowItem.style.height = max + 'px';
        });
      }
    }
  }
}
