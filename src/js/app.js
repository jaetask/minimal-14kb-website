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
 */

var minimalWebsite = {
	render: function(element, content) {
		element.innerHTML= micromarkdown.parse(content);
	}
};

var convertContentLinesToHtml = function convertContentLinesToHtml(lines) {
	return micromarkdown.parse(lines.join('\n'));
};

minimalWebsite.render(document.getElementById('app'), convertContentLinesToHtml(page.content));
