console.log('ok', visualViewport);

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

const toggleBtn = document.querySelector('.toggle-menu');
const userMenu = document.querySelector('.user-menu');
const categories = document.querySelector('.gender-categories');
const nav = document.querySelector('.heading-navbar');
const navbarMenu = document.querySelector('.navbar-menu');
const logo = document.querySelector('.logo-wrapper');

function getViewSize() {
    return document.documentElement.clientWidth;
}

function mobileResponsive() {
    if (getViewSize() <= 768) {
        toggleBtn.dataset.display = 'show';
        navbarMenu.classList.add('col-10');
        navbarMenu.classList.remove('col-12');
    } else {
        toggleBtn.dataset.display = 'hide';
        userMenu.classList.remove('expanded');
        categories.classList.remove('expanded');
        logo.classList.remove('expanded');
        navbarMenu.classList.add('col-12');
        navbarMenu.classList.remove('col-10');

        toggleBtn.classList.add('fa-bars');
        toggleBtn.classList.remove('fa-xmark');

        if (nav.dataset.expanded !== undefined) {
            delete nav.dataset.expanded;
        }
    }
}

document.addEventListener('DOMContentLoaded', mobileResponsive);


toggleBtn.addEventListener('click', () => {
    if (getViewSize() <= 768) {
        toggleBtn.classList.toggle('fa-bars');
        toggleBtn.classList.toggle('fa-xmark');

        userMenu.classList.toggle('expanded');
        categories.classList.toggle('expanded');
        logo.classList.toggle('expanded');

        if (nav.dataset.expanded !== undefined) {
            delete nav.dataset.expanded;
        } else {
            nav.dataset.expanded = 'true';
        }
    }
});


window.addEventListener('resize', () => {
    mobileResponsive();
    console.log(getViewSize());
});
