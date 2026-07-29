(function () {
	'use strict';

	function sendEvent(name, parameters) {
		if (typeof window.gtag === 'function') {
			window.gtag('event', name, parameters || {});
		}
	}

	function linkLocation(link) {
		if (link.closest('#contact')) return 'contact';
		if (link.closest('.portfolio-list')) return 'projects';
		if (link.closest('#nav')) return 'navigation';
		if (link.closest('#footer')) return 'footer';
		return 'content';
	}

	document.querySelectorAll('a[href]').forEach(function (link) {
		link.addEventListener('click', function () {
			var href = link.href;
			var eventName = '';

			if (link.closest('#contact')) {
				eventName = 'contact_click';
			} else if (link.closest('.portfolio-list')) {
				eventName = 'project_click';
			} else if (href.indexOf('linkedin.com') !== -1) {
				eventName = 'linkedin_click';
			} else if (href.indexOf('github.com') !== -1) {
				eventName = 'github_click';
			} else if (href.indexOf('medium.com') !== -1) {
				eventName = 'medium_click';
			}

			if (eventName) {
				sendEvent(eventName, {
					link_url: href,
					link_text: link.textContent.trim(),
					link_location: linkLocation(link)
				});
			}
		});
	});

	document.querySelectorAll('.language-switcher button[data-lang]').forEach(function (button) {
		button.addEventListener('click', function () {
			sendEvent('language_change', {
				language: button.getAttribute('data-lang')
			});
		});
	});
}());
