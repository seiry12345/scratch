{/* <div class="tabs">
	<div class="tabs__buttons">
		<div class="tabs__button tabs__button--active">tab1 <span>hello</span></div>
		<div class="tabs__button">tab2 <span>hello</span></div>
		<div class="tabs__button">tab3 <span>hello</span></div>
		<div class="tabs__button">tab4 <span>hello</span></div>
	</div>

	<div class="tabs__list">
		<div class="tabs__list-item tabs__list-item--active">content of tab1</div>
		<div class="tabs__list-item">content of tab2</div>
		<div class="tabs__list-item">content of tab3</div>
		<div class="tabs__list-item">content of tab4</div>
	</div>
</div> */}


window.addEventListener('DOMContentLoaded', function () {
	'use strict';

	function tabs(tabsButtonsSelector, tabsListSelector) {
		const tabsButtons = [...document.querySelectorAll(tabsButtonsSelector)];
		const tabsListItem = [...document.querySelectorAll(tabsListSelector)];

		if (tabsButtons && tabsListItem) {
			tabsButtons.forEach((button, buttonIndex) => {
				button.addEventListener('click', function (e) {
					hideTabs();
					showTabs(this, buttonIndex, tabsListItem);
				});
			});
		}

		function hideTabs() {
			tabsButtons.forEach((item) => {
				item.classList.remove('tabs__button--active');
			});
		}

		function showTabs(button, buttonIndex, tabsListItem) {
			tabsListItem.forEach((tab, tabIndex) => {
				tab.classList.remove('tabs__list-item--active');

				if (tabIndex === buttonIndex) {
					tab.classList.add('tabs__list-item--active');
				}
			})

			button.classList.add('tabs__button--active');
		}
	}

	tabs('.tabs__button', '.tabs__list-item');
});
