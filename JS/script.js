console.log('ok', visualViewport)

/**
 * Adds the specified class to the provided elements when the given event occurs.
 *
 * @param {NodeList|Array} elements - A list of DOM elements.
 * @param {string} className - The class name to add.
 * @param {string} eventName - The event name that triggers adding the class.
 */
function addClassOnEvent(elements, className, eventName) {
    elements.forEach(el => {
        el.addEventListener(eventName, function () {
            el.classList.add(className);
        });
    });
}

/**
 * Removes the specified class from the provided elements when the given event occurs.
 *
 * @param {NodeList|Array} elements - A list of DOM elements.
 * @param {string} className - The class name to remove.
 * @param {string} eventName - The event name that triggers removing the class.
 */
function removeClassOnEvent(elements, className, eventName) {
    elements.forEach(el => {
        el.addEventListener(eventName, function () {
            el.classList.remove(className);
        });
    });
}

/**
 * Toggles the specified dataset attribute on the provided elements when the given event occurs.
 * If the dataset attribute exists, it is removed; otherwise, it is added with a default value of "true".
 *
 * @param {NodeList|Array} elements - A list of DOM elements.
 * @param {string} dataKey - The key of the dataset attribute to toggle.
 * @param {string} eventName - The event name that triggers toggling the dataset attribute.
 */
function toggleDatasetOnEvent(elements, dataKey, eventName) {
    elements.forEach(el => {
        el.addEventListener(eventName, function () {
            if (el.dataset[dataKey] !== undefined) {
                delete el.dataset[dataKey];
            } else {
                el.dataset[dataKey] = 'true';
            }
        });
    });
}

/* Example usage:
 
const items = document.querySelectorAll('.item');
addClassOnEvent(items, 'c-red', 'mouseover');
removeClassOnEvent(items, 'c-red', 'mouseout');
toggleDatasetOnEvent(items, 'clicked', 'click');

*/

/* Toggle functions for favourites class  */
const hearts = document.querySelectorAll('.favourites');
removeClassOnEvent(hearts, 'c-red', 'mouseout');
addClassOnEvent(hearts, 'c-red', 'mouseover');
toggleDatasetOnEvent(hearts, 'favourite', 'click');
