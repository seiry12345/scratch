window.addEventListener('DOMContentLoaded', function () {
	'use strict';

	function tabsChangeState(ourBtnsContainer, ourTabsBtns, ourTabs) {
		const tabContainer = document.querySelector(ourBtnsContainer);
		const tabBtns = document.querySelectorAll(ourTabsBtns);
		const tabs = document.querySelectorAll(ourTabs);

		tabContainer.addEventListener('click', showTabs);
		hideTabs(1);

		function hideTabs(j) {
			for (let i = j; i < tabs.length; i++) {
				tabs[i].classList.remove('show');
				tabs[i].classList.add('hide');
			}
		}

		function showTab(i) {
			tabs[i].classList.remove('hide');
			tabs[i].classList.add('show');
		}

		function showTabs(e) {
			let target = e.target;
			let tabBtn = Array.from(tabBtns);
			tabBtn.forEach((elem, i) => {
				if (elem == target) {
					hideTabs(0);
					showTab(i);
				}
			});

			e.preventDefault();
		}
	}

	tabsChangeState('.info-header', '.info-header-tab', '.info-tabcontent');
});