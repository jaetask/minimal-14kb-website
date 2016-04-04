'use strict';

/**
 * App is the main entry point into the application.
 * It gets loaded on every page and should be kept as minimal as possible.
 *
 * This means:
 * - never load any page specific components
 * - only load framework components into the app
 *
 * Problem 1:
 * ---------
 * - How to create a domchanger component in a CommonJS module and use it in another file?
 * - How to pass an event bus into a CommonJS module?
 * - How to have multiple event buses?
 *
 * I want to convert this into a componentized application along the same
 * lines as react and that means commonJS modules for each component via domchanger or
 * something similar. it also means that components need to communicate and I will use
 * an event bus for this. Eventually, event buses will be split into channels to reduce
 * listeners but for now, there will be one event bus that everything listens and sends on.
 *
 * Problem 2:
 * ---------
 * How can I pre-compile/require the application into a single source file and then later
 * require more modules and load them into the same space asynchronously.
 *
 */

/**
 * One problem at a time,
 * First up, convert this single page app into domchanger style components
 *
 * Thoughts:
 * ---------
 * - Each page is a unique application.
 * - Each page is a single self contained js file
 * - Each page can 'require' other components
 */


require('./index.js');
exports.name = "app";