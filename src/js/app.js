'use strict';

/**
 * Application
 * -----------
 *
 * - Provides the main processor
 * - Provides common functionality
 * - Provides ability loading (and caching)
 * - Must be ultra light
 *
 * The idea is to have a minimal base application, which is highly optimised
 * and directly injected into the html page. because of this, everything must be questioned.
 *
 */
performance.mark('app-begin');

var minimalWebsite = {
	render: function(element, content) {
		element.innerHTML = content;
	}
};

minimalWebsite.render(document.getElementsByClassName('app')[0], marked(page.content));

performance.mark('app-end');
performance.measure('app','app-begin','app-end');