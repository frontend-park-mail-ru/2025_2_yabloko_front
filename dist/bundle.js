/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@antiquemouse/framework/dist/framework/app.js":
/*!********************************************************************!*\
  !*** ./node_modules/@antiquemouse/framework/dist/framework/app.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createApp: () => (/* binding */ createApp)
/* harmony export */ });
/* harmony import */ var _destroy_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./destroy-dom */ "./node_modules/@antiquemouse/framework/dist/framework/destroy-dom.js");
/* harmony import */ var _h__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./h */ "./node_modules/@antiquemouse/framework/dist/framework/h.js");
/* harmony import */ var _mount_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mount-dom */ "./node_modules/@antiquemouse/framework/dist/framework/mount-dom.js");



function createApp(RootComponent, props = {}) {
    let parentEl = null;
    let isMounted = false;
    let vdom = null;
    function reset() {
        parentEl = null;
        isMounted = false;
        vdom = null;
    }
    if (typeof RootComponent !== "function") {
        throw new Error(`RootComponent must be a component class`);
    }
    return {
        mount(_parentEl) {
            if (isMounted) {
                throw new Error('app is already mounted');
            }
            parentEl = _parentEl;
            vdom = (0,_h__WEBPACK_IMPORTED_MODULE_1__.h)(RootComponent, props);
            (0,_mount_dom__WEBPACK_IMPORTED_MODULE_2__.mountDOM)(vdom, parentEl, null);
            isMounted = true;
        },
        unmount() {
            if (!isMounted) {
                throw new Error('app is already unmounted');
            }
            if (vdom) {
                (0,_destroy_dom__WEBPACK_IMPORTED_MODULE_0__.destroyDOM)(vdom);
            }
            reset();
        },
    };
}
//# sourceMappingURL=app.js.map

/***/ }),

/***/ "./node_modules/@antiquemouse/framework/dist/framework/component.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@antiquemouse/framework/dist/framework/component.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defineComponent: () => (/* binding */ defineComponent)
/* harmony export */ });
/* harmony import */ var _destroy_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./destroy-dom */ "./node_modules/@antiquemouse/framework/dist/framework/destroy-dom.js");
/* harmony import */ var _dispatcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dispatcher */ "./node_modules/@antiquemouse/framework/dist/framework/dispatcher.js");
/* harmony import */ var _h__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./h */ "./node_modules/@antiquemouse/framework/dist/framework/h.js");
/* harmony import */ var _mount_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mount-dom */ "./node_modules/@antiquemouse/framework/dist/framework/mount-dom.js");
/* harmony import */ var _patch_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./patch-dom */ "./node_modules/@antiquemouse/framework/dist/framework/patch-dom.js");
/* harmony import */ var _utils_objects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/objects */ "./node_modules/@antiquemouse/framework/dist/framework/utils/objects.js");
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};






const emptyFn = () => { };
function defineComponent({ render, state, onMounted = emptyFn, onUnmounted = emptyFn, ...methods }) {
    var _Component_instances, _Component_isMounted, _Component_vdom, _Component_hostEl, _Component_eventHandlers, _Component_parentComponent, _Component_dispatcher, _Component_subscriptions, _Component_wireEventsHandlers, _Component_wireEventHandler, _Component_patch;
    class Component {
        constructor(props = {}, eventHandlers = {}, parentComponent = null) {
            _Component_instances.add(this);
            _Component_isMounted.set(this, false);
            _Component_vdom.set(this, null);
            _Component_hostEl.set(this, null);
            _Component_eventHandlers.set(this, null);
            _Component_parentComponent.set(this, null);
            _Component_dispatcher.set(this, _dispatcher__WEBPACK_IMPORTED_MODULE_1__.dispatcher);
            _Component_subscriptions.set(this, []);
            this.props = props;
            this.state = state ? state(props) : {};
            __classPrivateFieldSet(this, _Component_eventHandlers, eventHandlers, "f");
            __classPrivateFieldSet(this, _Component_parentComponent, parentComponent, "f");
        }
        onMounted() {
            return Promise.resolve(onMounted.call(this));
        }
        onUnmounted() {
            return Promise.resolve(onUnmounted.call(this));
        }
        get elements() {
            if (__classPrivateFieldGet(this, _Component_vdom, "f") == null) {
                return [];
            }
            if (__classPrivateFieldGet(this, _Component_vdom, "f").type == _h__WEBPACK_IMPORTED_MODULE_2__.DOM_TYPES.FRAGMENT) {
                return (0,_h__WEBPACK_IMPORTED_MODULE_2__.extractChildren)(__classPrivateFieldGet(this, _Component_vdom, "f")).flatMap(child => {
                    if (child.type === _h__WEBPACK_IMPORTED_MODULE_2__.DOM_TYPES.COMPONENT) {
                        return child.component.elements;
                    }
                    return [child.el];
                });
            }
            return [__classPrivateFieldGet(this, _Component_vdom, "f").el];
        }
        get firstElement() {
            return this.elements[0];
        }
        get offset() {
            if (__classPrivateFieldGet(this, _Component_vdom, "f")?.type === _h__WEBPACK_IMPORTED_MODULE_2__.DOM_TYPES.FRAGMENT && __classPrivateFieldGet(this, _Component_hostEl, "f")) {
                return Array.from(__classPrivateFieldGet(this, _Component_hostEl, "f").children).indexOf(this.firstElement);
            }
            return 0;
        }
        updateProps(props) {
            this.props = { ...this.props, ...props };
            __classPrivateFieldGet(this, _Component_instances, "m", _Component_patch).call(this);
        }
        updateState(state) {
            this.state = { ...this.state, ...state };
            __classPrivateFieldGet(this, _Component_instances, "m", _Component_patch).call(this);
        }
        emit(eventName, payload) {
            __classPrivateFieldGet(this, _Component_dispatcher, "f").dispatch(eventName, payload);
        }
        render() {
            return render.call(this);
        }
        mount(hostEl, index = null) {
            if (__classPrivateFieldGet(this, _Component_isMounted, "f") === true) {
                throw new Error('Component is already mounted');
            }
            __classPrivateFieldSet(this, _Component_vdom, this.render(), "f");
            (0,_mount_dom__WEBPACK_IMPORTED_MODULE_3__.mountDOM)(__classPrivateFieldGet(this, _Component_vdom, "f"), hostEl, index, this);
            __classPrivateFieldGet(this, _Component_instances, "m", _Component_wireEventsHandlers).call(this);
            __classPrivateFieldSet(this, _Component_hostEl, hostEl, "f");
            __classPrivateFieldSet(this, _Component_isMounted, true, "f");
        }
        unmount() {
            if (__classPrivateFieldGet(this, _Component_isMounted, "f") === false) {
                throw new Error('Component is not mounted');
            }
            if (__classPrivateFieldGet(this, _Component_vdom, "f")) {
                (0,_destroy_dom__WEBPACK_IMPORTED_MODULE_0__.destroyDOM)(__classPrivateFieldGet(this, _Component_vdom, "f"));
                __classPrivateFieldGet(this, _Component_subscriptions, "f").forEach(unsubscribe => unsubscribe());
                __classPrivateFieldSet(this, _Component_vdom, null, "f");
                __classPrivateFieldSet(this, _Component_hostEl, null, "f");
                __classPrivateFieldSet(this, _Component_isMounted, false, "f");
                __classPrivateFieldSet(this, _Component_subscriptions, [], "f");
            }
        }
    }
    _Component_isMounted = new WeakMap(), _Component_vdom = new WeakMap(), _Component_hostEl = new WeakMap(), _Component_eventHandlers = new WeakMap(), _Component_parentComponent = new WeakMap(), _Component_dispatcher = new WeakMap(), _Component_subscriptions = new WeakMap(), _Component_instances = new WeakSet(), _Component_wireEventsHandlers = function _Component_wireEventsHandlers() {
        __classPrivateFieldSet(this, _Component_subscriptions, Object.entries(__classPrivateFieldGet(this, _Component_eventHandlers, "f")).map(([eventName, handler]) => __classPrivateFieldGet(this, _Component_instances, "m", _Component_wireEventHandler).call(this, eventName, handler)), "f");
    }, _Component_wireEventHandler = function _Component_wireEventHandler(eventName, handler) {
        return __classPrivateFieldGet(this, _Component_dispatcher, "f").subscribe(eventName, payload => {
            if (__classPrivateFieldGet(this, _Component_parentComponent, "f")) {
                handler.call(__classPrivateFieldGet(this, _Component_parentComponent, "f"), payload);
            }
            else {
                handler(payload);
            }
        });
    }, _Component_patch = function _Component_patch() {
        if (__classPrivateFieldGet(this, _Component_isMounted, "f") === false) {
            throw new Error('Component is not mounted');
        }
        if (__classPrivateFieldGet(this, _Component_vdom, "f") && __classPrivateFieldGet(this, _Component_hostEl, "f")) {
            const vdom = this.render();
            __classPrivateFieldSet(this, _Component_vdom, (0,_patch_dom__WEBPACK_IMPORTED_MODULE_4__.patchDOM)(__classPrivateFieldGet(this, _Component_vdom, "f"), vdom, __classPrivateFieldGet(this, _Component_hostEl, "f"), this), "f");
        }
    };
    for (const methodName in methods) {
        if ((0,_utils_objects__WEBPACK_IMPORTED_MODULE_5__.hasOwnProperty)(Component.prototype, methodName)) {
            throw new Error(`Method '${methodName}' already exists in this component`);
        }
        ;
        Component.prototype[methodName] = methods[methodName];
    }
    return Component;
}
//# sourceMappingURL=component.js.map

/***/ }),

/***/ "./node_modules/@antiquemouse/framework/dist/framework/destroy-dom.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@antiquemouse/framework/dist/framework/destroy-dom.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   destroyDOM: () => (/* binding */ destroyDOM)
/* harmony export */ });
/* harmony import */ var _h__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./h */ "./node_modules/@antiquemouse/framework/dist/framework/h.js");
/* harmony import */ var _scheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scheduler */ "./node_modules/@antiquemouse/framework/dist/framework/scheduler.js");
/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/events */ "./node_modules/@antiquemouse/framework/dist/framework/utils/events.js");



function destroyDOM(vNode) {
    switch (vNode.type) {
        case _h__WEBPACK_IMPORTED_MODULE_0__.DOM_TYPES.TEXT: {
            destroyTextNode(vNode);
            break;
        }
        case _h__WEBPACK_IMPORTED_MODULE_0__.DOM_TYPES.ELEMENT: {
            destroyElementNode(vNode);
            break;
        }
        case _h__WEBPACK_IMPORTED_MODULE_0__.DOM_TYPES.FRAGMENT: {
            destroyFragmentNode(vNode);
            break;
        }
        case _h__WEBPACK_IMPORTED_MODULE_0__.DOM_TYPES.COMPONENT: {
            vNode.component.unmount();
            (0,_scheduler__WEBPACK_IMPORTED_MODULE_1__.enqueueJob)(() => vNode.component.onUnmounted());
            break;
        }
        default: {
            throw new Error(`Invalid type to destroy DOM: ${vNode.type}`);
        }
    }
}
function destroyTextNode(vNode) {
    const { el } = vNode;
    if (el) {
        el.remove();
    }
}
function destroyElementNode(vNode) {
    const { el, children, listeners } = vNode;
    if (el) {
        el.remove();
        if (listeners) {
            (0,_utils_events__WEBPACK_IMPORTED_MODULE_2__.removeEventListeners)(listeners, el);
            delete vNode.listeners;
        }
    }
    children.forEach(destroyDOM);
}
function destroyFragmentNode(vNode) {
    const { el, children } = vNode;
    children.forEach(destroyDOM);
    if (el) {
        delete vNode.el;
    }
}
//# sourceMappingURL=destroy-dom.js.map

/***/ }),

/***/ "./node_modules/@antiquemouse/framework/dist/framework/dispatcher.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@antiquemouse/framework/dist/framework/dispatcher.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dispatcher: () => (/* binding */ dispatcher)
/* harmony export */ });
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Dispatcher_subs, _Dispatcher_afterHandlers;
class Dispatcher {
    constructor() {
        _Dispatcher_subs.set(this, new Map());
        _Dispatcher_afterHandlers.set(this, new Set());
    }
    subscribe(commandName, handler) {
        if (!__classPrivateFieldGet(this, _Dispatcher_subs, "f").has(commandName)) {
            __classPrivateFieldGet(this, _Dispatcher_subs, "f").set(commandName, new Set());
        }
        const handlers = __classPrivateFieldGet(this, _Dispatcher_subs, "f").get(commandName);
        return () => {
            handlers.delete(handler);
            if (handlers.size == 0) {
                __classPrivateFieldGet(this, _Dispatcher_subs, "f").delete(commandName);
            }
        };
    }
    afterEveryCommand(handler) {
        __classPrivateFieldGet(this, _Dispatcher_afterHandlers, "f").add(handler);
        return () => {
            __classPrivateFieldGet(this, _Dispatcher_afterHandlers, "f").delete(handler);
        };
    }
    dispatch(commandName, payload) {
        if (__classPrivateFieldGet(this, _Dispatcher_subs, "f").has(commandName)) {
            __classPrivateFieldGet(this, _Dispatcher_subs, "f").get(commandName).forEach(handler => handler(payload));
        }
        __classPrivateFieldGet(this, _Dispatcher_afterHandlers, "f").forEach(handler => handler());
    }
}
_Dispatcher_subs = new WeakMap(), _Dispatcher_afterHandlers = new WeakMap();
const dispatcher = new Dispatcher();

//# sourceMappingURL=dispatcher.js.map

/***/ }),

/***/ "./node_modules/@antiquemouse/framework/dist/framework/h.js":
/*!******************************************************************!*\
  !*** ./node_modules/@antiquemouse/framework/dist/framework/h.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DOM_TYPES: () => (/* binding */ DOM_TYPES),
/* harmony export */   extractChildren: () => (/* binding */ extractChildren),
/* harmony export */   h: () => (/* binding */ h),
/* harmony export */   hFragment: () => (/* binding */ hFragment),
/* harmony export */   hString: () => (/* binding */ hString)
/* harmony export */ });
/* harmony import */ var _utils_arrays__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/arrays */ "./node_modules/@antiquemouse/framework/dist/framework/utils/arrays.js");


var DOM_TYPES;
(function (DOM_TYPES) {
    DOM_TYPES["TEXT"] = "text";
    DOM_TYPES["ELEMENT"] = "element";
    DOM_TYPES["FRAGMENT"] = "fragment";
    DOM_TYPES["COMPONENT"] = "component";
})(DOM_TYPES || (DOM_TYPES = {}));
function h(tag, props = {}, ...children) {
    if (typeof tag === 'string') {
        return {
            type: DOM_TYPES.ELEMENT,
            tag,
            props,
            children: mapTextNodes((0,_utils_arrays__WEBPACK_IMPORTED_MODULE_0__.withoutNulls)(children)),
        };
    }
    else {
        return {
            type: DOM_TYPES.COMPONENT,
            tag,
            props,
            children: mapTextNodes((0,_utils_arrays__WEBPACK_IMPORTED_MODULE_0__.withoutNulls)(children)),
        };
    }
    // removed by dead control flow

}
function deepFlattenAndClean(arr) {
    return arr.flat(Infinity).filter(item => item != null);
}
function mapTextNodes(children) {
    return children.reduce((acc, child) => {
        if (child == null) {
            return acc;
        }
        let vnode = null;
        if (typeof child === 'string' || typeof child === 'number') {
            vnode = { type: DOM_TYPES.TEXT, value: String(child) };
        }
        else if (Array.isArray(child) &&
            child.every(item => item?.type && Object.values(DOM_TYPES).includes(item.type))) {
            vnode = { type: DOM_TYPES.FRAGMENT, children: child };
        }
        else if (child.type && Object.values(DOM_TYPES).includes(child.type)) {
            vnode = child;
        }
        else {
            console.warn('Unexpected child type in mapTextNodes:', typeof child, child);
            return acc;
        }
        if (vnode != null) {
            acc.push(vnode);
        }
        return acc;
    }, []);
}
function hString(str) {
    return { type: DOM_TYPES.TEXT, value: str };
}
function hFragment(children) {
    return {
        type: DOM_TYPES.FRAGMENT,
        children: mapTextNodes(deepFlattenAndClean(children)),
    };
}
function extractChildren(vNode) {
    if (!hasChildren(vNode)) {
        return [];
    }
    const children = [];
    for (const child of vNode.children) {
        if (child.type === DOM_TYPES.FRAGMENT) {
            children.push(...extractChildren(child));
        }
        else {
            children.push(child);
        }
    }
    return children;
}
function hasChildren(node) {
    return 'children' in node && node.children !== undefined;
}
//# sourceMappingURL=h.js.map

/***/ }),

/***/ "./node_modules/@antiquemouse/framework/dist/framework/mount-dom.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@antiquemouse/framework/dist/framework/mount-dom.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mountDOM: () => (/* binding */ mountDOM),
/* harmony export */   removeAttribute: () => (/* binding */ removeAttribute),
/* harmony export */   removeStyle: () => (/* binding */ removeStyle),
/* harmony export */   setAttribute: () => (/* binding */ setAttribute),
/* harmony export */   setClass: () => (/* binding */ setClass),
/* harmony export */   setStyle: () => (/* binding */ setStyle)
/* harmony export */ });
/* harmony import */ var _h__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./h */ "./node_modules/@antiquemouse/framework/dist/framework/h.js");
/* harmony import */ var _scheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scheduler */ "./node_modules/@antiquemouse/framework/dist/framework/scheduler.js");
/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/events */ "./node_modules/@antiquemouse/framework/dist/framework/utils/events.js");
/* harmony import */ var _utils_props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/props */ "./node_modules/@antiquemouse/framework/dist/framework/utils/props.js");




function mountDOM(vNode, parentEl, index, hostComponent = null) {
    switch (vNode.type) {
        case _h__WEBPACK_IMPORTED_MODULE_0__.DOM_TYPES.TEXT: {
            createTextNode(vNode, parentEl, index);
            break;
        }
        case _h__WEBPACK_IMPORTED_MODULE_0__.DOM_TYPES.ELEMENT: {
            createElementNode(vNode, parentEl, index, hostComponent);
            break;
        }
        case _h__WEBPACK_IMPORTED_MODULE_0__.DOM_TYPES.FRAGMENT: {
            createFragmentNode(vNode, parentEl, index, hostComponent);
            break;
        }
        case _h__WEBPACK_IMPORTED_MODULE_0__.DOM_TYPES.COMPONENT: {
            createComponentNode(vNode, parentEl, index, hostComponent);
            (0,_scheduler__WEBPACK_IMPORTED_MODULE_1__.enqueueJob)(() => vNode.component.onMounted());
            break;
        }
        default: {
            throw new Error(`Invalid type to mount DOM: ${vNode.type}`);
        }
    }
}
function createTextNode(vNode, parentEl, index) {
    const { value } = vNode;
    const textNode = document.createTextNode(value);
    vNode.el = textNode;
    insert(textNode, parentEl, index);
}
function createElementNode(vNode, parentEl, hostComponent, index) {
    const { tag, children } = vNode;
    const element = document.createElement(tag);
    addProps(element, vNode, hostComponent);
    vNode.el = element;
    children.forEach(child => mountDOM(child, element, null, hostComponent));
    insert(element, parentEl, index);
}
function createFragmentNode(vNode, parentEl, hostComponent, index) {
    const { children } = vNode;
    vNode.el = parentEl;
    children.forEach((child, i) => mountDOM(child, parentEl, index !== null && index !== undefined ? index + i : null, hostComponent));
}
function createComponentNode(vNode, parentEl, hostComponent, index) {
    const Component = vNode.tag;
    const { props, events } = (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.extractPropsAndEvents)(vNode);
    const component = new Component(props, events, hostComponent);
    component.mount(parentEl, index);
    vNode.component = component;
    vNode.el = component.firstElement;
}
function addProps(element, vNode, hostComponent) {
    const { props: attrs, events } = (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.extractPropsAndEvents)(vNode);
    vNode.listeners = (0,_utils_events__WEBPACK_IMPORTED_MODULE_2__.addEventListeners)(events, element, hostComponent);
    setAttributes(element, attrs);
}
function setAttributes(element, attrs) {
    const { class: className, style, ...otherAttrs } = attrs;
    if (className) {
        setClass(element, className);
    }
    if (style) {
        Object.entries(style).forEach(([prop, value]) => {
            setStyle(element, prop, value);
        });
    }
    for (const [name, value] of Object.entries(otherAttrs)) {
        if (value !== false) {
            setAttribute(element, name, value);
        }
    }
}
function setClass(element, className) {
    element.className = '';
    if (typeof className === 'string') {
        element.className = className;
    }
    if (Array.isArray(className)) {
        element.classList.add(...className);
    }
}
function setStyle(element, name, value) {
    if (value == null || value === '') {
        element.style.removeProperty(name);
    }
    else {
        element.style.setProperty(name, String(value));
    }
}
function removeStyle(element, name) {
    element.style.removeProperty(name);
}
function setAttribute(element, name, value) {
    if (value == null) {
        element.removeAttribute(name);
    }
    else {
        element.setAttribute(name, value);
    }
}
function removeAttribute(element, name) {
    element.removeAttribute(name);
}
function insert(element, parentEl, index) {
    if (index == null) {
        parentEl.append(element);
        return;
    }
    if (index < 0) {
        throw new Error('index must be positive');
    }
    const children = parentEl.childNodes;
    if (index >= children.length) {
        parentEl.append(element);
    }
    else {
        parentEl.insertBefore(element, children[index]);
    }
}
//# sourceMappingURL=mount-dom.js.map

/***/ }),

/***/ "./node_modules/@antiquemouse/framework/dist/framework/nodes-equal.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@antiquemouse/framework/dist/framework/nodes-equal.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   areNodesEqual: () => (/* binding */ areNodesEqual)
/* harmony export */ });
/* harmony import */ var _h__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./h */ "./node_modules/@antiquemouse/framework/dist/framework/h.js");

function areNodesEqual(nodeOne, nodeTwo) {
    if (nodeOne === null || nodeTwo === null) {
        return nodeOne === nodeTwo;
    }
    if (nodeOne === undefined || nodeTwo === undefined) {
        return nodeOne === nodeTwo;
    }
    if (nodeOne.type !== nodeTwo.type) {
        return false;
    }
    const getKey = (node) => {
        if ('props' in node && node.props && 'key' in node.props) {
            return node.props.key || null;
        }
        return null;
    };
    const getTag = (node) => {
        return 'tag' in node ? node.tag : null;
    };
    if (nodeOne.type === _h__WEBPACK_IMPORTED_MODULE_0__.DOM_TYPES.ELEMENT &&
        nodeTwo.type === _h__WEBPACK_IMPORTED_MODULE_0__.DOM_TYPES.ELEMENT) {
        const tagOne = getTag(nodeOne);
        const tagTwo = getTag(nodeTwo);
        const keyOne = getKey(nodeOne);
        const keyTwo = getKey(nodeTwo);
        return tagOne === tagTwo && keyOne === keyTwo;
    }
    if (nodeOne.type === _h__WEBPACK_IMPORTED_MODULE_0__.DOM_TYPES.COMPONENT &&
        nodeTwo.type === _h__WEBPACK_IMPORTED_MODULE_0__.DOM_TYPES.COMPONENT) {
        const componentOne = getTag(nodeOne);
        const componentTwo = getTag(nodeTwo);
        const keyOne = getKey(nodeOne);
        const keyTwo = getKey(nodeTwo);
        return componentOne === componentTwo && keyOne === keyTwo;
    }
    return true;
}
//# sourceMappingURL=nodes-equal.js.map

/***/ }),

/***/ "./node_modules/@antiquemouse/framework/dist/framework/patch-dom.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@antiquemouse/framework/dist/framework/patch-dom.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   patchDOM: () => (/* binding */ patchDOM)
/* harmony export */ });
/* harmony import */ var _destroy_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./destroy-dom */ "./node_modules/@antiquemouse/framework/dist/framework/destroy-dom.js");
/* harmony import */ var _h__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./h */ "./node_modules/@antiquemouse/framework/dist/framework/h.js");
/* harmony import */ var _mount_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mount-dom */ "./node_modules/@antiquemouse/framework/dist/framework/mount-dom.js");
/* harmony import */ var _nodes_equal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nodes-equal */ "./node_modules/@antiquemouse/framework/dist/framework/nodes-equal.js");
/* harmony import */ var _utils_arrays__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/arrays */ "./node_modules/@antiquemouse/framework/dist/framework/utils/arrays.js");
/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/events */ "./node_modules/@antiquemouse/framework/dist/framework/utils/events.js");
/* harmony import */ var _utils_objects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/objects */ "./node_modules/@antiquemouse/framework/dist/framework/utils/objects.js");
/* harmony import */ var _utils_props__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/props */ "./node_modules/@antiquemouse/framework/dist/framework/utils/props.js");








function patchDOM(oldVNode, newVNode, parentEl, hostComponent = null) {
    if (!(0,_nodes_equal__WEBPACK_IMPORTED_MODULE_3__.areNodesEqual)(oldVNode, newVNode)) {
        let index = null;
        if (oldVNode !== undefined && oldVNode.el) {
            index = findIndexInParent(parentEl, oldVNode.el);
        }
        (0,_destroy_dom__WEBPACK_IMPORTED_MODULE_0__.destroyDOM)(oldVNode);
        (0,_mount_dom__WEBPACK_IMPORTED_MODULE_2__.mountDOM)(newVNode, parentEl, index, hostComponent);
        return newVNode;
    }
    newVNode.el = oldVNode.el;
    switch (newVNode.type) {
        case _h__WEBPACK_IMPORTED_MODULE_1__.DOM_TYPES.TEXT: {
            patchText(oldVNode, newVNode);
            break;
        }
        case _h__WEBPACK_IMPORTED_MODULE_1__.DOM_TYPES.ELEMENT: {
            patchElement(oldVNode, newVNode, hostComponent);
            break;
        }
        case _h__WEBPACK_IMPORTED_MODULE_1__.DOM_TYPES.COMPONENT: {
            patchComponent(oldVNode, newVNode);
            break;
        }
    }
    patchChildren(oldVNode, newVNode, hostComponent);
    return newVNode;
}
function findIndexInParent(parentEl, el) {
    if (!el) {
        return null;
    }
    const index = Array.from(parentEl.childNodes).indexOf(el);
    if (index < 0) {
        return null;
    }
    return index;
}
function patchText(oldVNode, newVNode) {
    const el = oldVNode.el;
    const { value: oldText } = oldVNode;
    const { value: newText } = newVNode;
    if (oldText !== newText && el) {
        el.nodeValue = newText;
    }
}
function patchElement(oldVNode, newVNode, hostComponent) {
    if (!oldVNode || !newVNode) {
        return;
    }
    const el = oldVNode.el;
    if (!el) {
        return;
    }
    const oldProps = oldVNode.props || {};
    const newProps = newVNode.props || {};
    const oldClass = oldProps.class;
    const oldStyle = oldProps.style;
    const oldEvents = oldProps.on;
    const newClass = newProps.class;
    const newStyle = newProps.style;
    const newEvents = newProps.on;
    const oldAttrs = { ...oldProps };
    delete oldAttrs.class;
    delete oldAttrs.style;
    delete oldAttrs.on;
    const newAttrs = { ...newProps };
    delete newAttrs.class;
    delete newAttrs.style;
    delete newAttrs.on;
    const oldListeners = oldVNode.listeners || {};
    patchAttrs(el, oldAttrs, newAttrs);
    patchStyles(el, oldStyle, newStyle);
    patchClasses(el, oldClass, newClass);
    newVNode.listeners = patchEvents(el, oldListeners, oldEvents, newEvents, hostComponent);
}
function patchComponent(oldVNode, newVNode) {
    const { component } = oldVNode;
    const { props } = (0,_utils_props__WEBPACK_IMPORTED_MODULE_7__.extractPropsAndEvents)(newVNode);
    component.updateProps(props);
    newVNode.component = component;
    newVNode.el = component.firstElement;
}
function patchAttrs(el, oldAttrs, newAttrs) {
    if (!el) {
        return;
    }
    const { added, removed, updated } = (0,_utils_objects__WEBPACK_IMPORTED_MODULE_6__.objectDiff)(oldAttrs, newAttrs);
    for (const attr of removed) {
        (0,_mount_dom__WEBPACK_IMPORTED_MODULE_2__.removeAttribute)(el, attr);
    }
    for (const attr of added.concat(updated)) {
        (0,_mount_dom__WEBPACK_IMPORTED_MODULE_2__.setAttribute)(el, attr, newAttrs[attr]);
    }
}
function patchStyles(el, oldStyle, newStyle) {
    if (!el) {
        return;
    }
    const { added, removed, updated } = (0,_utils_objects__WEBPACK_IMPORTED_MODULE_6__.objectDiff)(oldStyle, newStyle);
    for (const style of removed) {
        (0,_mount_dom__WEBPACK_IMPORTED_MODULE_2__.removeStyle)(el, style);
    }
    for (const style of added.concat(updated)) {
        (0,_mount_dom__WEBPACK_IMPORTED_MODULE_2__.setStyle)(el, style, newStyle[style]);
    }
}
function patchClasses(el, oldClass, newClass) {
    if (!el) {
        return;
    }
    const oldClasses = toClassList(oldClass);
    const newClasses = toClassList(newClass);
    const { removed, added } = (0,_utils_arrays__WEBPACK_IMPORTED_MODULE_4__.arrayDiff)(oldClasses, newClasses);
    if (removed.length > 0) {
        el.classList.remove(...removed);
    }
    if (added.length > 0) {
        el.classList.add(...added);
    }
    function toClassList(classes = '') {
        if (!classes) {
            return [];
        }
        return Array.isArray(classes)
            ? classes.filter(_utils_arrays__WEBPACK_IMPORTED_MODULE_4__.isNotBlankOrEmptyString)
            : String(classes).split(/(\s+)/).filter(_utils_arrays__WEBPACK_IMPORTED_MODULE_4__.isNotBlankOrEmptyString);
    }
}
function patchEvents(el, oldListeners = {}, oldEvents = {}, newEvents = {}, hostComponent) {
    if (!el) {
        return {};
    }
    const { removed, added, updated } = (0,_utils_objects__WEBPACK_IMPORTED_MODULE_6__.objectDiff)(oldEvents, newEvents);
    for (const eventName of removed.concat(updated)) {
        el.removeEventListener(eventName, oldListeners[eventName]);
    }
    const addedListeners = {};
    for (const eventName of added.concat(updated)) {
        const listener = (0,_utils_events__WEBPACK_IMPORTED_MODULE_5__.addEventListener)(eventName, newEvents[eventName], el, hostComponent);
        addedListeners[eventName] = listener;
    }
    return { ...oldListeners, ...addedListeners };
}
function patchChildren(oldVNode, newVNode, hostComponent) {
    const oldChildren = (0,_h__WEBPACK_IMPORTED_MODULE_1__.extractChildren)(oldVNode);
    const newChildren = (0,_h__WEBPACK_IMPORTED_MODULE_1__.extractChildren)(newVNode);
    const parentEl = oldVNode.el;
    const diffSeq = (0,_utils_arrays__WEBPACK_IMPORTED_MODULE_4__.arrayDiffSequence)(oldChildren, newChildren, _nodes_equal__WEBPACK_IMPORTED_MODULE_3__.areNodesEqual);
    for (const operation of diffSeq) {
        const { op, fromIndex, index, item } = operation;
        const offset = hostComponent?.offset ?? 0;
        switch (op) {
            case _utils_arrays__WEBPACK_IMPORTED_MODULE_4__.ARRAY_DIFF_OP.ADD: {
                (0,_mount_dom__WEBPACK_IMPORTED_MODULE_2__.mountDOM)(item, parentEl, index + offset, hostComponent);
                break;
            }
            case _utils_arrays__WEBPACK_IMPORTED_MODULE_4__.ARRAY_DIFF_OP.REMOVE: {
                (0,_destroy_dom__WEBPACK_IMPORTED_MODULE_0__.destroyDOM)(item);
                break;
            }
            case _utils_arrays__WEBPACK_IMPORTED_MODULE_4__.ARRAY_DIFF_OP.NOOP: {
                const oldChild = oldChildren[index];
                const newChild = newChildren[index];
                if (oldChild != null && newChild != null) {
                    patchDOM(oldChild, newChild, parentEl, hostComponent);
                }
                break;
            }
            case _utils_arrays__WEBPACK_IMPORTED_MODULE_4__.ARRAY_DIFF_OP.MOVE: {
                const oldChild = oldChildren[fromIndex];
                const newChild = newChildren[index];
                if (oldChild != null && newChild != null) {
                    const el = oldChild.el;
                    const elAtTargetIndex = parentEl.childNodes[index + offset];
                    if (el) {
                        parentEl.insertBefore(el, elAtTargetIndex || null);
                    }
                    patchDOM(oldChild, newChild, parentEl, hostComponent);
                }
                break;
            }
        }
    }
}
//# sourceMappingURL=patch-dom.js.map

/***/ }),

/***/ "./node_modules/@antiquemouse/framework/dist/framework/scheduler.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@antiquemouse/framework/dist/framework/scheduler.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   enqueueJob: () => (/* binding */ enqueueJob)
/* harmony export */ });
let isScheduler = false;
const jobs = [];
function enqueueJob(job) {
    jobs.push(job);
    schedulerUpdate();
}
function schedulerUpdate() {
    if (isScheduler) {
        return;
    }
    isScheduler = true;
    queueMicrotask(processJobs);
}
function processJobs() {
    while (jobs.length > 0) {
        const job = jobs.shift();
        if (job) {
            const result = job();
            Promise.resolve(result).then(() => { }, error => {
                console.error(`[scheduler]: ${error}`);
            });
        }
    }
    isScheduler = false;
}
//# sourceMappingURL=scheduler.js.map

/***/ }),

/***/ "./node_modules/@antiquemouse/framework/dist/framework/utils/arrays.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@antiquemouse/framework/dist/framework/utils/arrays.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ARRAY_DIFF_OP: () => (/* binding */ ARRAY_DIFF_OP),
/* harmony export */   arrayDiff: () => (/* binding */ arrayDiff),
/* harmony export */   arrayDiffSequence: () => (/* binding */ arrayDiffSequence),
/* harmony export */   isNotBlankOrEmptyString: () => (/* binding */ isNotBlankOrEmptyString),
/* harmony export */   isNotEmptyString: () => (/* binding */ isNotEmptyString),
/* harmony export */   withoutNulls: () => (/* binding */ withoutNulls)
/* harmony export */ });
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ArrayWithOriginalIndices_array, _ArrayWithOriginalIndices_originalIndices, _ArrayWithOriginalIndices_equalsFn;
function withoutNulls(arr) {
    if (!Array.isArray(arr)) {
        console.warn('withoutNulls: expected array, got', typeof arr, arr);
        return [];
    }
    return arr.filter(child => child != null);
}
function arrayDiff(oldArray, newArray) {
    return {
        added: newArray.filter(newItem => !oldArray.includes(newItem)),
        removed: oldArray.filter(oldItem => !newArray.includes(oldItem)),
    };
}
const ARRAY_DIFF_OP = {
    ADD: 'add',
    REMOVE: 'remove',
    MOVE: 'move',
    NOOP: 'noop',
};
function arrayDiffSequence(oldArray, newArray, equalFn = (a, b) => a === b) {
    const sequence = [];
    const array = new ArrayWithOriginalIndices(oldArray, equalFn);
    for (let index = 0; index < newArray.length; index++) {
        if (array.isRemoval(index, newArray)) {
            sequence.push(array.removeItem(index));
            index--;
            continue;
        }
        if (array.isNoop(index, newArray)) {
            sequence.push(array.noopItem(index));
            continue;
        }
        const item = newArray[index];
        if (array.isAdditional(item, index)) {
            sequence.push(array.addItem(item, index));
            continue;
        }
        sequence.push(array.addItem(item, index));
    }
    sequence.push(...array.removeItemsAfter(newArray.length));
    return sequence;
}
class ArrayWithOriginalIndices {
    constructor(array, equalsFn) {
        _ArrayWithOriginalIndices_array.set(this, void 0);
        _ArrayWithOriginalIndices_originalIndices.set(this, void 0);
        _ArrayWithOriginalIndices_equalsFn.set(this, void 0);
        __classPrivateFieldSet(this, _ArrayWithOriginalIndices_array, [...array], "f");
        __classPrivateFieldSet(this, _ArrayWithOriginalIndices_originalIndices, array.map((_, i) => i), "f");
        __classPrivateFieldSet(this, _ArrayWithOriginalIndices_equalsFn, equalsFn, "f");
    }
    get length() {
        return __classPrivateFieldGet(this, _ArrayWithOriginalIndices_array, "f").length;
    }
    isRemoval(index, newArray) {
        if (index >= this.length) {
            return false;
        }
        const item = __classPrivateFieldGet(this, _ArrayWithOriginalIndices_array, "f")[index];
        const indexInNewArray = newArray.findIndex(newItem => __classPrivateFieldGet(this, _ArrayWithOriginalIndices_equalsFn, "f").call(this, item, newItem));
        return indexInNewArray === -1;
    }
    removeItem(index) {
        const operation = {
            op: ARRAY_DIFF_OP.REMOVE,
            index,
            item: __classPrivateFieldGet(this, _ArrayWithOriginalIndices_array, "f")[index],
        };
        __classPrivateFieldGet(this, _ArrayWithOriginalIndices_array, "f").splice(index, 1);
        __classPrivateFieldGet(this, _ArrayWithOriginalIndices_originalIndices, "f").splice(index, 1);
        return operation;
    }
    isNoop(index, newArray) {
        if (index >= this.length) {
            return false;
        }
        const item = __classPrivateFieldGet(this, _ArrayWithOriginalIndices_array, "f")[index];
        const newItem = newArray[index];
        return __classPrivateFieldGet(this, _ArrayWithOriginalIndices_equalsFn, "f").call(this, item, newItem);
    }
    originalIndexAt(index) {
        return __classPrivateFieldGet(this, _ArrayWithOriginalIndices_originalIndices, "f")[index];
    }
    noopItem(index) {
        return {
            op: ARRAY_DIFF_OP.NOOP,
            originalIndex: this.originalIndexAt(index),
            index,
            item: __classPrivateFieldGet(this, _ArrayWithOriginalIndices_array, "f")[index],
        };
    }
    isAdditional(item, fromIdx) {
        return this.findIndexFrom(item, fromIdx);
    }
    findIndexFrom(item, fromIdx) {
        for (let i = fromIdx; i < this.length; i++) {
            if (__classPrivateFieldGet(this, _ArrayWithOriginalIndices_equalsFn, "f").call(this, item, __classPrivateFieldGet(this, _ArrayWithOriginalIndices_array, "f")[i])) {
                return i;
            }
        }
        return -1;
    }
    addItem(item, index) {
        const operation = {
            op: ARRAY_DIFF_OP.ADD,
            index,
            item,
        };
        __classPrivateFieldGet(this, _ArrayWithOriginalIndices_array, "f").splice(index, 0, item);
        __classPrivateFieldGet(this, _ArrayWithOriginalIndices_originalIndices, "f").splice(index, 0, -1);
        return operation;
    }
    moveItem(item, index) {
        const oldIndex = this.findIndexFrom(item, index);
        const operation = {
            op: ARRAY_DIFF_OP.MOVE,
            originalIndex: this.originalIndexAt(item),
            from: oldIndex,
            index,
            item: __classPrivateFieldGet(this, _ArrayWithOriginalIndices_array, "f")[oldIndex],
        };
        const [_item] = __classPrivateFieldGet(this, _ArrayWithOriginalIndices_array, "f").splice(oldIndex, 1);
        __classPrivateFieldGet(this, _ArrayWithOriginalIndices_array, "f").splice(index, 0, _item);
        const [originalIndex] = __classPrivateFieldGet(this, _ArrayWithOriginalIndices_originalIndices, "f").splice(oldIndex, 1);
        __classPrivateFieldGet(this, _ArrayWithOriginalIndices_originalIndices, "f").splice(index, 0, originalIndex);
        return operation;
    }
    removeItemsAfter(index) {
        const operations = [];
        while (this.length > index) {
            operations.push(this.removeItem(index));
        }
        return operations;
    }
}
_ArrayWithOriginalIndices_array = new WeakMap(), _ArrayWithOriginalIndices_originalIndices = new WeakMap(), _ArrayWithOriginalIndices_equalsFn = new WeakMap();
function isNotEmptyString(str) {
    return str !== '';
}
function isNotBlankOrEmptyString(str) {
    return isNotEmptyString(str.trim());
}
//# sourceMappingURL=arrays.js.map

/***/ }),

/***/ "./node_modules/@antiquemouse/framework/dist/framework/utils/events.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@antiquemouse/framework/dist/framework/utils/events.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addEventListener: () => (/* binding */ addEventListener),
/* harmony export */   addEventListeners: () => (/* binding */ addEventListeners),
/* harmony export */   removeEventListeners: () => (/* binding */ removeEventListeners)
/* harmony export */ });
function addEventListeners(events, element, hostComponent = null) {
    const listeners = {};
    Object.entries(events).forEach(([eventName, eventHandler]) => {
        const listener = addEventListener(eventName, eventHandler, element, hostComponent);
        listeners[eventName] = listener;
    });
    return listeners;
}
function addEventListener(eventName, eventHandler, element, hostComponent = null) {
    function boundHandler(event) {
        if (hostComponent) {
            eventHandler.call(hostComponent, event);
        }
        else {
            eventHandler(event);
        }
    }
    element.addEventListener(eventName, boundHandler);
    return boundHandler;
}
function removeEventListeners(listeners = {}, element) {
    Object.entries(listeners).forEach(([eventName, eventHandler]) => {
        element.removeEventListener(eventName, eventHandler);
    });
}
//# sourceMappingURL=events.js.map

/***/ }),

/***/ "./node_modules/@antiquemouse/framework/dist/framework/utils/objects.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@antiquemouse/framework/dist/framework/utils/objects.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hasOwnProperty: () => (/* binding */ hasOwnProperty),
/* harmony export */   objectDiff: () => (/* binding */ objectDiff)
/* harmony export */ });
function objectDiff(oldObj, newObj) {
    if (oldObj == null || newObj == null) {
        return {
            added: [],
            removed: [],
            updated: [],
        };
    }
    if (typeof oldObj !== 'object' || typeof newObj !== 'object') {
        return {
            added: [],
            removed: [],
            updated: [],
        };
    }
    try {
        const oldKeys = Object.keys(oldObj);
        const newKeys = Object.keys(newObj);
        const diff = {
            added: newKeys.filter(key => !(key in oldObj)),
            removed: oldKeys.filter(key => !(key in newObj)),
            updated: newKeys.filter(key => key in newObj && oldObj[key] !== newObj[key]),
        };
        return diff;
    }
    catch (error) {
        console.warn(error);
        return {
            added: [],
            removed: [],
            updated: [],
        };
    }
}
function hasOwnProperty(obj, prop) {
    if (!obj || typeof obj !== 'object') {
        return false;
    }
    return Object.prototype.hasOwnProperty.call(obj, prop);
}
//# sourceMappingURL=objects.js.map

/***/ }),

/***/ "./node_modules/@antiquemouse/framework/dist/framework/utils/props.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@antiquemouse/framework/dist/framework/utils/props.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extractPropsAndEvents: () => (/* binding */ extractPropsAndEvents)
/* harmony export */ });
function extractPropsAndEvents(vdom) {
    if (!vdom.props) {
        return { props: {}, events: {} };
    }
    const { on: events = {}, ...props } = vdom.props;
    delete props.key;
    return { props, events };
}
//# sourceMappingURL=props.js.map

/***/ }),

/***/ "./node_modules/@antiquemouse/framework/dist/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@antiquemouse/framework/dist/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DOM_TYPES: () => (/* reexport safe */ _framework_h__WEBPACK_IMPORTED_MODULE_0__.DOM_TYPES),
/* harmony export */   createApp: () => (/* reexport safe */ _framework_app__WEBPACK_IMPORTED_MODULE_2__.createApp),
/* harmony export */   defineComponent: () => (/* reexport safe */ _framework_component__WEBPACK_IMPORTED_MODULE_1__.defineComponent),
/* harmony export */   destroyDOM: () => (/* reexport safe */ _framework_destroy_dom__WEBPACK_IMPORTED_MODULE_4__.destroyDOM),
/* harmony export */   dispatcher: () => (/* reexport safe */ _framework_dispatcher__WEBPACK_IMPORTED_MODULE_7__.dispatcher),
/* harmony export */   enqueueJob: () => (/* reexport safe */ _framework_scheduler__WEBPACK_IMPORTED_MODULE_6__.enqueueJob),
/* harmony export */   h: () => (/* reexport safe */ _framework_h__WEBPACK_IMPORTED_MODULE_0__.h),
/* harmony export */   hFragment: () => (/* reexport safe */ _framework_h__WEBPACK_IMPORTED_MODULE_0__.hFragment),
/* harmony export */   hString: () => (/* reexport safe */ _framework_h__WEBPACK_IMPORTED_MODULE_0__.hString),
/* harmony export */   mountDOM: () => (/* reexport safe */ _framework_mount_dom__WEBPACK_IMPORTED_MODULE_3__.mountDOM),
/* harmony export */   patchDOM: () => (/* reexport safe */ _framework_patch_dom__WEBPACK_IMPORTED_MODULE_5__.patchDOM)
/* harmony export */ });
/* harmony import */ var _framework_h__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./framework/h */ "./node_modules/@antiquemouse/framework/dist/framework/h.js");
/* harmony import */ var _framework_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./framework/component */ "./node_modules/@antiquemouse/framework/dist/framework/component.js");
/* harmony import */ var _framework_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./framework/app */ "./node_modules/@antiquemouse/framework/dist/framework/app.js");
/* harmony import */ var _framework_mount_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./framework/mount-dom */ "./node_modules/@antiquemouse/framework/dist/framework/mount-dom.js");
/* harmony import */ var _framework_destroy_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./framework/destroy-dom */ "./node_modules/@antiquemouse/framework/dist/framework/destroy-dom.js");
/* harmony import */ var _framework_patch_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./framework/patch-dom */ "./node_modules/@antiquemouse/framework/dist/framework/patch-dom.js");
/* harmony import */ var _framework_scheduler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./framework/scheduler */ "./node_modules/@antiquemouse/framework/dist/framework/scheduler.js");
/* harmony import */ var _framework_dispatcher__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./framework/dispatcher */ "./node_modules/@antiquemouse/framework/dist/framework/dispatcher.js");








//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/CommonCSS/Variables.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/CommonCSS/Variables.css ***!
  \**************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
	--color-dark: #000000;

	--color-light: #ffffff;
	--color-background-accent: #f8f8f8;

	--color-accent: #fe7743;
	--color-accent-hover: #d75523;

	--color-success: #4ebd6c;
	--color-success-hover: #1e893a;

	--color-err: #f45959;
	--color-err-hover: #da1f1f;

	--color-primary: #3e586b;
	--color-secondary: #447d9b;
	--color-hover: #273f4f;

	--color-input-stroke: #ccc;
	--color-blue: #0000ff;

	--color-dark-transparent: rgba(0, 0, 0, 0.3);
	--color-dark-transparent-hover: rgba(0, 0, 0, 0.5);

	--shadow: 0 4px 12px rgba(0.2, 0.2, 0.2, 0.2);
	--shadow-hover: 0 4px 12px rgba(0.5, 0.5, 0.5, 0.5);

	--border-radius-small: 8px;
	--border-radius-medium: 16px;
	--border-radius-large: 24px;
}`, "",{"version":3,"sources":["webpack://./src/components/CommonCSS/Variables.css"],"names":[],"mappings":"AAAA;CACC,qBAAqB;;CAErB,sBAAsB;CACtB,kCAAkC;;CAElC,uBAAuB;CACvB,6BAA6B;;CAE7B,wBAAwB;CACxB,8BAA8B;;CAE9B,oBAAoB;CACpB,0BAA0B;;CAE1B,wBAAwB;CACxB,0BAA0B;CAC1B,sBAAsB;;CAEtB,0BAA0B;CAC1B,qBAAqB;;CAErB,4CAA4C;CAC5C,kDAAkD;;CAElD,6CAA6C;CAC7C,mDAAmD;;CAEnD,0BAA0B;CAC1B,4BAA4B;CAC5B,2BAA2B;AAC5B","sourcesContent":[":root {\r\n\t--color-dark: #000000;\r\n\r\n\t--color-light: #ffffff;\r\n\t--color-background-accent: #f8f8f8;\r\n\r\n\t--color-accent: #fe7743;\r\n\t--color-accent-hover: #d75523;\r\n\r\n\t--color-success: #4ebd6c;\r\n\t--color-success-hover: #1e893a;\r\n\r\n\t--color-err: #f45959;\r\n\t--color-err-hover: #da1f1f;\r\n\r\n\t--color-primary: #3e586b;\r\n\t--color-secondary: #447d9b;\r\n\t--color-hover: #273f4f;\r\n\r\n\t--color-input-stroke: #ccc;\r\n\t--color-blue: #0000ff;\r\n\r\n\t--color-dark-transparent: rgba(0, 0, 0, 0.3);\r\n\t--color-dark-transparent-hover: rgba(0, 0, 0, 0.5);\r\n\r\n\t--shadow: 0 4px 12px rgba(0.2, 0.2, 0.2, 0.2);\r\n\t--shadow-hover: 0 4px 12px rgba(0.5, 0.5, 0.5, 0.5);\r\n\r\n\t--border-radius-small: 8px;\r\n\t--border-radius-medium: 16px;\r\n\t--border-radius-large: 24px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/CommonCSS/normalize.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/CommonCSS/normalize.css ***!
  \**************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
::-webkit-scrollbar {
	width: 0;
}

*,
*::before,
*::after {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

\\body {
	margin: 0;
	padding: 0;
}

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
	margin: 0;
	padding: 0;
	border: 0;
}
`, "",{"version":3,"sources":["webpack://./src/components/CommonCSS/normalize.css"],"names":[],"mappings":";AACA;CACC,QAAQ;AACT;;AAEA;;;CAGC,SAAS;CACT,UAAU;CACV,sBAAsB;AACvB;;AAEA;CACC,SAAS;CACT,UAAU;AACX;;AAEA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;CAiFC,SAAS;CACT,UAAU;CACV,SAAS;AACV","sourcesContent":["\r\n::-webkit-scrollbar {\r\n\twidth: 0;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n\\body {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n\r\nhtml,\r\nbody,\r\ndiv,\r\nspan,\r\napplet,\r\nobject,\r\niframe,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\np,\r\nblockquote,\r\npre,\r\na,\r\nabbr,\r\nacronym,\r\naddress,\r\nbig,\r\ncite,\r\ncode,\r\ndel,\r\ndfn,\r\nem,\r\nimg,\r\nins,\r\nkbd,\r\nq,\r\ns,\r\nsamp,\r\nsmall,\r\nstrike,\r\nstrong,\r\nsub,\r\nsup,\r\ntt,\r\nvar,\r\nb,\r\nu,\r\ni,\r\ncenter,\r\ndl,\r\ndt,\r\ndd,\r\nol,\r\nul,\r\nli,\r\nfieldset,\r\nform,\r\nlabel,\r\nlegend,\r\ntable,\r\ncaption,\r\ntbody,\r\ntfoot,\r\nthead,\r\ntr,\r\nth,\r\ntd,\r\narticle,\r\naside,\r\ncanvas,\r\ndetails,\r\nembed,\r\nfigure,\r\nfigcaption,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\noutput,\r\nruby,\r\nsection,\r\nsummary,\r\ntime,\r\nmark,\r\naudio,\r\nvideo {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/AvatarForm/AvatarForm.module.scss":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/AvatarForm/AvatarForm.module.scss ***!
  \*******************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.AvatarForm-module__avatar--R0qJL {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}
.AvatarForm-module__avatar__preview--_IyH2 {
  width: 10rem;
  height: 10rem;
  border-radius: var(--border-radius-large);
  overflow: hidden;
  border: 2px solid var(--color-input-stroke);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: border-color 0.3s;
  position: relative;
  margin: 0.5rem;
}
.AvatarForm-module__avatar__preview--_IyH2:hover {
  border-color: var(--color-accent);
}
.AvatarForm-module__avatar__input--kPr6g {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.AvatarForm-module__avatar__image--QOZrd {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.AvatarForm-module__avatar__placeholder--YATLM {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-input-stroke);
  font-size: 0.9rem;
  text-align: center;
}
.AvatarForm-module__avatar__placeholder-icon--bigkm {
  font-size: 1.5rem;
  color: var(--color-accent);
}
.AvatarForm-module__avatar__field--HBy1N {
  width: 100%;
}
.AvatarForm-module__avatar__fieldinput--gPOO6 {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid var(--color-input-stroke);
  border-radius: var(--border-radius-small);
  background: var(--color-background);
  color: var(--color-text);
  font-size: 1rem;
}
.AvatarForm-module__avatar__error--xEYyV {
  color: var(--color-err);
  font-size: 0.9rem;
  text-align: center;
}`, "",{"version":3,"sources":["webpack://./src/components/AvatarForm/AvatarForm.module.scss"],"names":[],"mappings":"AAAA;EACC,aAAA;EACA,sBAAA;EACA,SAAA;EACA,mBAAA;AACD;AACC;EACC,YAAA;EACA,aAAA;EACA,yCAAA;EACA,gBAAA;EACA,2CAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,eAAA;EACA,6BAAA;EACA,kBAAA;EACA,cAAA;AACF;AACE;EACC,iCAAA;AACH;AAGC;EACC,UAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;AADF;AAIC;EACC,kBAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;AAFF;AAKC;EACC,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,WAAA;EACA,gCAAA;EACA,iBAAA;EACA,kBAAA;AAHF;AAMC;EACC,iBAAA;EACA,0BAAA;AAJF;AAOC;EACC,WAAA;AALF;AAOE;EACC,WAAA;EACA,eAAA;EACA,2CAAA;EACA,yCAAA;EACA,mCAAA;EACA,wBAAA;EACA,eAAA;AALH;AAUC;EACC,uBAAA;EACA,iBAAA;EACA,kBAAA;AARF","sourcesContent":[".avatar {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 1rem;\r\n\talign-items: center;\r\n\r\n\t&__preview {\r\n\t\twidth: 10rem;\r\n\t\theight: 10rem;\r\n\t\tborder-radius: var(--border-radius-large);\r\n\t\toverflow: hidden;\r\n\t\tborder: 2px solid var(--color-input-stroke);\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tjustify-content: center;\r\n\t\tcursor: pointer;\r\n\t\ttransition: border-color 0.3s;\r\n\t\tposition: relative;\r\n\t\tmargin: 0.5rem;\r\n\r\n\t\t&:hover {\r\n\t\t\tborder-color: var(--color-accent);\r\n\t\t}\r\n\t}\r\n\r\n\t&__input {\r\n\t\topacity: 0;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\tcursor: pointer;\r\n\t}\r\n\r\n\t&__image {\r\n\t\tposition: absolute;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\tobject-fit: cover;\r\n\t}\r\n\r\n\t&__placeholder {\r\n\t\tposition: absolute;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\talign-items: center;\r\n\t\tgap: 0.5rem;\r\n\t\tcolor: var(--color-input-stroke);\r\n\t\tfont-size: 0.9rem;\r\n\t\ttext-align: center;\r\n\t}\r\n\r\n\t&__placeholder-icon {\r\n\t\tfont-size: 1.5rem;\r\n\t\tcolor: var(--color-accent);\r\n\t}\r\n\r\n\t&__field {\r\n\t\twidth: 100%;\r\n\r\n\t\t&input {\r\n\t\t\twidth: 100%;\r\n\t\t\tpadding: 0.5rem;\r\n\t\t\tborder: 1px solid var(--color-input-stroke);\r\n\t\t\tborder-radius: var(--border-radius-small);\r\n\t\t\tbackground: var(--color-background);\r\n\t\t\tcolor: var(--color-text);\r\n\t\t\tfont-size: 1rem;\r\n\t\t}\r\n\r\n\t}\r\n\r\n\t&__error {\r\n\t\tcolor: var(--color-err);\r\n\t\tfont-size: 0.9rem;\r\n\t\ttext-align: center;\r\n\t}\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"avatar": `AvatarForm-module__avatar--R0qJL`,
	"avatar__preview": `AvatarForm-module__avatar__preview--_IyH2`,
	"avatar__input": `AvatarForm-module__avatar__input--kPr6g`,
	"avatar__image": `AvatarForm-module__avatar__image--QOZrd`,
	"avatar__placeholder": `AvatarForm-module__avatar__placeholder--YATLM`,
	"avatar__placeholderIcon": `AvatarForm-module__avatar__placeholder-icon--bigkm`,
	"avatar__field": `AvatarForm-module__avatar__field--HBy1N`,
	"avatar__fieldinput": `AvatarForm-module__avatar__fieldinput--gPOO6`,
	"avatar__error": `AvatarForm-module__avatar__error--xEYyV`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Batch/Batch.module.scss":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Batch/Batch.module.scss ***!
  \*********************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.Batch-module__batch__grid--b2GWZ {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  justify-items: center;
  width: 100%;
  min-height: 0;
  align-items: flex-start;
}
.Batch-module__batch__grid--b2GWZ {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  width: 100%;
  max-width: 75rem;
  margin: 0 auto;
  padding: 0 0.75rem;
  box-sizing: border-box;
  align-items: flex-start;
}`, "",{"version":3,"sources":["webpack://./src/components/Batch/Batch.module.scss"],"names":[],"mappings":"AACI;EACI,aAAA;EACA,eAAA;EACA,6BAAA;EACA,qBAAA;EACA,WAAA;EACA,aAAA;EACA,uBAAA;AAAR;AAGI;EACI,aAAA;EACA,eAAA;EACA,uBAAA;EACA,WAAA;EACA,WAAA;EACA,gBAAA;EACA,cAAA;EACA,kBAAA;EACA,sBAAA;EACA,uBAAA;AADR","sourcesContent":[".batch {\r\n    &__grid {\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        justify-content: space-evenly;\r\n        justify-items: center;\r\n        width: 100%;\r\n        min-height: 0;\r\n        align-items: flex-start;\r\n    }\r\n\r\n    &__grid {\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        justify-content: center;\r\n        gap: 1.5rem;\r\n        width: 100%;\r\n        max-width: 75rem;\r\n        margin: 0 auto;\r\n        padding: 0 0.75rem;\r\n        box-sizing: border-box;\r\n        align-items: flex-start; \r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"batch__grid": `Batch-module__batch__grid--b2GWZ`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Button/Button.module.scss":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Button/Button.module.scss ***!
  \***********************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.Button-module__button--b_aG7 {
  display: inline-flex;
  color: var(--color-light);
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: var(--border-radius-large);
  cursor: pointer;
  position: relative;
  min-width: 7rem;
  height: 2.5rem;
  font-size: var(--button-font-size);
  font-weight: var(--button-font-weight);
}
.Button-module__button__content--C9KSB {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.Button-module__button--accent--IuozR {
  background: var(--color-accent);
}
.Button-module__button--accent--IuozR:hover {
  background: var(--color-accent-hover);
}
.Button-module__button--success--ri_Fd {
  background: var(--color-success);
}
.Button-module__button--success--ri_Fd:hover {
  background: var(--color-success-hover);
}
.Button-module__button--error--nZ8Gu {
  background: var(--color-err);
}
.Button-module__button--error--nZ8Gu:hover {
  background: var(--color-err-hover);
}
.Button-module__button--primary--ym05_ {
  background: var(--color-primary);
}
.Button-module__button--primary--ym05_:hover {
  background: var(--color-hover);
}`, "",{"version":3,"sources":["webpack://./src/components/Button/Button.module.scss"],"names":[],"mappings":"AAAA;EACI,oBAAA;EACA,yBAAA;EACA,mBAAA;EACA,uBAAA;EACA,YAAA;EACA,yCAAA;EACA,eAAA;EACA,kBAAA;EACA,eAAA;EACA,cAAA;EACA,kCAAA;EACA,sCAAA;AACJ;AACI;EACI,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,WAAA;EACA,YAAA;AACR;AAEI;EACI,+BAAA;AAAR;AAEQ;EACI,qCAAA;AAAZ;AAII;EACI,gCAAA;AAFR;AAIQ;EACI,sCAAA;AAFZ;AAMI;EACI,4BAAA;AAJR;AAMQ;EACI,kCAAA;AAJZ;AAQI;EACI,gCAAA;AANR;AAQQ;EACI,8BAAA;AANZ","sourcesContent":[".button {\r\n    display: inline-flex;\r\n    color: var(--color-light);\r\n    align-items: center;\r\n    justify-content: center;\r\n    border: none;\r\n    border-radius: var(--border-radius-large);\r\n    cursor: pointer;\r\n    position: relative;\r\n    min-width: 7rem;\r\n    height: 2.5rem;\r\n    font-size: var(--button-font-size);\r\n    font-weight: var(--button-font-weight);\r\n\r\n    &__content {\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        width: 100%;\r\n        height: 100%;\r\n    }\r\n\r\n    &--accent {\r\n        background: var(--color-accent);\r\n\r\n        &:hover {\r\n            background: var(--color-accent-hover);\r\n        }\r\n    }\r\n\r\n    &--success {\r\n        background: var(--color-success);\r\n\r\n        &:hover {\r\n            background: var(--color-success-hover);\r\n        }\r\n    }\r\n\r\n    &--error {\r\n        background: var(--color-err);\r\n\r\n        &:hover {\r\n            background: var(--color-err-hover);\r\n        }\r\n    }\r\n\r\n    &--primary {\r\n        background: var(--color-primary);\r\n\r\n        &:hover {\r\n            background: var(--color-hover);\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"button": `Button-module__button--b_aG7`,
	"button__content": `Button-module__button__content--C9KSB`,
	"buttonAccent": `Button-module__button--accent--IuozR`,
	"buttonSuccess": `Button-module__button--success--ri_Fd`,
	"buttonError": `Button-module__button--error--nZ8Gu`,
	"buttonPrimary": `Button-module__button--primary--ym05_`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Card/Card.module.scss":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Card/Card.module.scss ***!
  \*******************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.Card-module__store-card--pq1kk {
  display: flex;
  width: 20%;
  min-width: 260px;
  margin-bottom: 30px;
  padding: 0 10px;
  align-self: flex-start;
}
.Card-module__store-card__container--Ji2pF {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 100%;
  height: 180px;
  border-radius: var(--border-radius-large);
  background-color: var(--color-light);
  box-shadow: var(--shadow);
}
.Card-module__store-card__container--Ji2pF:hover {
  box-shadow: var(--shadow-hover);
}
.Card-module__store-card__image-wrapper--p7SXQ {
  position: relative;
  width: 100%;
  height: 65%;
  border-radius: var(--border-radius-large);
  overflow: hidden;
  flex-shrink: 0;
}
.Card-module__store-card__image--xy4Ce {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.Card-module__store-card__fav--P7PX9 {
  position: absolute;
  display: flex;
  padding: 4px;
  top: 10px;
  right: 10px;
  border-radius: 50%;
  background: var(--color-dark-transparent);
}
.Card-module__store-card__fav--P7PX9:hover {
  background: var(--color-dark-transparent-hover);
}
.Card-module__store-card__fav-image--lIiKx {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}
.Card-module__store-card__content--KQWB9 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  height: 35%;
  flex-grow: 1;
}
.Card-module__store-card__info--w0W42 {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.Card-module__store-card__name--BLuwH {
  font-size: 16px;
  font-weight: 600;
  color: var(--color-dark);
  margin: 0;
}
.Card-module__store-card__rating--cPt3a {
  display: flex;
  gap: 5px;
  align-items: center;
}
.Card-module__store-card__rating-icon--vwdU_ {
  width: 15px;
  height: 15px;
  border-radius: 50%;
}
.Card-module__store-card__rating-value--jFP1c {
  font-size: 14px;
  color: var(--color-gray);
}
.Card-module__store-card__time--CJBXV {
  display: flex;
  gap: 5px;
  align-items: center;
}
.Card-module__store-card__time-icon--OfJu7 {
  width: 15px;
  height: 15px;
  border-radius: 50%;
}
.Card-module__store-card__time-value--W7BLi {
  font-size: 14px;
  color: var(--color-gray);
}`, "",{"version":3,"sources":["webpack://./src/components/Card/Card.module.scss"],"names":[],"mappings":"AAAA;EACC,aAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,eAAA;EACA,sBAAA;AACD;AACC;EACC,aAAA;EACA,sBAAA;EACA,eAAA;EACA,WAAA;EACA,aAAA;EACA,yCAAA;EACA,oCAAA;EACA,yBAAA;AACF;AACE;EACC,+BAAA;AACH;AAGC;EACC,kBAAA;EACA,WAAA;EACA,WAAA;EACA,yCAAA;EACA,gBAAA;EACA,cAAA;AADF;AAIC;EACC,WAAA;EACA,YAAA;EACA,iBAAA;AAFF;AAKC;EACC,kBAAA;EACA,aAAA;EACA,YAAA;EACA,SAAA;EACA,WAAA;EACA,kBAAA;EACA,yCAAA;AAHF;AAKE;EACC,+CAAA;AAHH;AAOC;EACC,WAAA;EACA,YAAA;EACA,kBAAA;AALF;AAQC;EACC,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,aAAA;EACA,WAAA;EACA,YAAA;AANF;AASC;EACC,aAAA;EACA,WAAA;EACA,8BAAA;AAPF;AAUC;EACC,eAAA;EACA,gBAAA;EACA,wBAAA;EACA,SAAA;AARF;AAWC;EACC,aAAA;EACA,QAAA;EACA,mBAAA;AATF;AAYC;EACC,WAAA;EACA,YAAA;EACA,kBAAA;AAVF;AAaC;EACC,eAAA;EACA,wBAAA;AAXF;AAcC;EACC,aAAA;EACA,QAAA;EACA,mBAAA;AAZF;AAeC;EACC,WAAA;EACA,YAAA;EACA,kBAAA;AAbF;AAgBC;EACC,eAAA;EACA,wBAAA;AAdF","sourcesContent":[".store-card {\r\n\tdisplay: flex;\r\n\twidth: 20%;\r\n\tmin-width: 260px;\r\n\tmargin-bottom: 30px;\r\n\tpadding: 0 10px;\r\n\talign-self: flex-start;\r\n\r\n\t&__container {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tcursor: pointer;\r\n\t\twidth: 100%;\r\n\t\theight: 180px;\r\n\t\tborder-radius: var(--border-radius-large);\r\n\t\tbackground-color: var(--color-light);\r\n\t\tbox-shadow: var(--shadow);\r\n\r\n\t\t&:hover {\r\n\t\t\tbox-shadow: var(--shadow-hover);\r\n\t\t}\r\n\t}\r\n\r\n\t&__image-wrapper {\r\n\t\tposition: relative;\r\n\t\twidth: 100%;\r\n\t\theight: 65%;\r\n\t\tborder-radius: var(--border-radius-large);\r\n\t\toverflow: hidden;\r\n\t\tflex-shrink: 0; \r\n\t}\r\n\r\n\t&__image {\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\tobject-fit: cover;\r\n\t}\r\n\r\n\t&__fav {\r\n\t\tposition: absolute;\r\n\t\tdisplay: flex;\r\n\t\tpadding: 4px;\r\n\t\ttop: 10px;\r\n\t\tright: 10px;\r\n\t\tborder-radius: 50%;\r\n\t\tbackground: var(--color-dark-transparent);\r\n\r\n\t\t&:hover {\r\n\t\t\tbackground: var(--color-dark-transparent-hover);\r\n\t\t}\r\n\t}\r\n\r\n\t&__fav-image {\r\n\t\twidth: 32px;\r\n\t\theight: 32px;\r\n\t\tborder-radius: 50%;\r\n\t}\r\n\r\n\t&__content {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\talign-items: flex-start;\r\n\t\tpadding: 10px;\r\n\t\theight: 35%;\r\n\t\tflex-grow: 1;\r\n\t}\r\n\r\n\t&__info {\r\n\t\tdisplay: flex;\r\n\t\twidth: 100%;\r\n\t\tjustify-content: space-between;\r\n\t}\r\n\r\n\t&__name {\r\n\t\tfont-size: 16px;\r\n\t\tfont-weight: 600;\r\n\t\tcolor: var(--color-dark);\r\n\t\tmargin: 0;\r\n\t}\r\n\r\n\t&__rating {\r\n\t\tdisplay: flex;\r\n\t\tgap: 5px;\r\n\t\talign-items: center;\r\n\t}\r\n\r\n\t&__rating-icon {\r\n\t\twidth: 15px;\r\n\t\theight: 15px;\r\n\t\tborder-radius: 50%;\r\n\t}\r\n\r\n\t&__rating-value {\r\n\t\tfont-size: 14px;\r\n\t\tcolor: var(--color-gray);\r\n\t}\r\n\r\n\t&__time {\r\n\t\tdisplay: flex;\r\n\t\tgap: 5px;\r\n\t\talign-items: center;\r\n\t}\r\n\r\n\t&__time-icon {\r\n\t\twidth: 15px;\r\n\t\theight: 15px;\r\n\t\tborder-radius: 50%;\r\n\t}\r\n\r\n\t&__time-value {\r\n\t\tfont-size: 14px;\r\n\t\tcolor: var(--color-gray);\r\n\t}\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"storeCard": `Card-module__store-card--pq1kk`,
	"storeCard__container": `Card-module__store-card__container--Ji2pF`,
	"storeCard__imageWrapper": `Card-module__store-card__image-wrapper--p7SXQ`,
	"storeCard__image": `Card-module__store-card__image--xy4Ce`,
	"storeCard__fav": `Card-module__store-card__fav--P7PX9`,
	"storeCard__favImage": `Card-module__store-card__fav-image--lIiKx`,
	"storeCard__content": `Card-module__store-card__content--KQWB9`,
	"storeCard__info": `Card-module__store-card__info--w0W42`,
	"storeCard__name": `Card-module__store-card__name--BLuwH`,
	"storeCard__rating": `Card-module__store-card__rating--cPt3a`,
	"storeCard__ratingIcon": `Card-module__store-card__rating-icon--vwdU_`,
	"storeCard__ratingValue": `Card-module__store-card__rating-value--jFP1c`,
	"storeCard__time": `Card-module__store-card__time--CJBXV`,
	"storeCard__timeIcon": `Card-module__store-card__time-icon--OfJu7`,
	"storeCard__timeValue": `Card-module__store-card__time-value--W7BLi`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/CardsHeader/CardsHeader.module.scss":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/CardsHeader/CardsHeader.module.scss ***!
  \*********************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
.CardsHeader-module__cardsHeader--lP4fI {
  width: 90%;
  margin: 1.5rem 0 2.5rem 0;
  justify-self: center;
  justify-content: center;
  align-items: center;
  align-self: center;
}
.CardsHeader-module__cardsHeader__title--SE4pw {
  justify-self: center;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
}
.CardsHeader-module__cardsHeader__filters--nszI6 {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 1.5rem;
  background-color: var(--color-background-accent);
  border-radius: var(--border-radius-large);
  flex-wrap: wrap;
  box-shadow: var(--shadow);
}
.CardsHeader-module__cardsHeader__more--Ulevc {
  position: relative;
  display: inline-block;
}
.CardsHeader-module__cardsHeader__sort--qgX5u {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  position: relative;
  padding-left: 2rem;
}
.CardsHeader-module__cardsHeader__sort--qgX5u::before {
  content: "↑↓";
  position: absolute;
  left: 1px;
  top: 40%;
  transform: translateY(-50%);
  color: var(--color-accent);
  font-size: 1rem;
  font-weight: 900;
}

.CardsHeader-module__filter__button--sKyzB {
  border: 1px solid transparent;
  background: transparent;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 1rem;
  border-radius: var(--border-radius-large);
  transition: all 0.2s ease;
  box-sizing: border-box;
}
.CardsHeader-module__filter__button--active--YrNdj, .CardsHeader-module__filter__button--sKyzB:hover {
  background: var(--color-light);
  border-color: var(--color-primary);
}
.CardsHeader-module__filter__moreButton--WH5Zn {
  outline: none;
  text-align: left;
  border-radius: var(--border-radius-large);
  border: 1px solid transparent;
  background: transparent;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.2s ease;
  position: relative;
}
.CardsHeader-module__filter__moreButton--WH5Zn::after {
  outline: none;
  content: "";
  position: absolute;
  right: 0.1rem;
  top: 40%;
  width: 0.5rem;
  height: 0.5rem;
  border-right: 2px solid var(--color-accent);
  border-bottom: 2px solid var(--color-accent);
  transform: translateY(-50%) rotate(45deg);
}
.CardsHeader-module__filter__moreButton--WH5Zn:hover {
  background: var(--color-light);
  border-color: var(--color-primary);
}`, "",{"version":3,"sources":["webpack://./src/components/CardsHeader/CardsHeader.module.scss"],"names":[],"mappings":"AAAA,gBAAgB;AAAhB;EACI,UAAA;EACA,yBAAA;EACA,oBAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;AAEJ;AAAI;EACI,oBAAA;EACA,mBAAA;EACA,iBAAA;EACA,iBAAA;AAER;AACI;EACI,aAAA;EACA,mBAAA;EACA,SAAA;EACA,uBAAA;EACA,gDAAA;EACA,yCAAA;EACA,eAAA;EACA,yBAAA;AACR;AAEI;EACI,kBAAA;EACA,qBAAA;AAAR;AAGI;EACI,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;EACA,kBAAA;AADR;AAGQ;EACI,aAAA;EACA,kBAAA;EACA,SAAA;EACA,QAAA;EACA,2BAAA;EACA,0BAAA;EACA,eAAA;EACA,gBAAA;AADZ;;AAOI;EACI,6BAAA;EACA,uBAAA;EACA,oBAAA;EACA,eAAA;EACA,eAAA;EACA,yCAAA;EACA,yBAAA;EACA,sBAAA;AAJR;AAMQ;EAEI,8BAAA;EACA,kCAAA;AALZ;AAUQ;EACI,aAAA;EACT,gBAAA;EACS,yCAAA;EACA,6BAAA;EACA,uBAAA;EACA,oBAAA;EACA,eAAA;EACA,eAAA;EACA,yBAAA;EACA,kBAAA;AARZ;AAUY;EACI,aAAA;EACA,WAAA;EACA,kBAAA;EACA,aAAA;EACA,QAAA;EACA,aAAA;EACA,cAAA;EACA,2CAAA;EACA,4CAAA;EACA,yCAAA;AARhB;AAWY;EACI,8BAAA;EACA,kCAAA;AAThB","sourcesContent":[".cardsHeader {\r\n    width: 90%;\r\n    margin: 1.5rem 0 2.5rem 0;\r\n    justify-self: center;\r\n    justify-content: center;\r\n    align-items: center;\r\n    align-self: center;\r\n\r\n    &__title {\r\n        justify-self: center;\r\n        margin-bottom: 1rem;\r\n        font-size: 1.5rem;\r\n        font-weight: bold;\r\n    }\r\n\r\n    &__filters {\r\n        display: flex;\r\n        align-items: center;\r\n        gap: 1rem;\r\n        padding: 0.75rem 1.5rem;\r\n        background-color: var(--color-background-accent);\r\n        border-radius: var(--border-radius-large);\r\n        flex-wrap: wrap;\r\n        box-shadow: var(--shadow);\r\n    }\r\n\r\n    &__more {\r\n        position: relative;\r\n        display: inline-block;\r\n    }\r\n\r\n    &__sort {\r\n        margin-left: auto;\r\n        display: flex;\r\n        align-items: center;\r\n        gap: 0.5rem;\r\n        cursor: pointer;\r\n        position: relative;\r\n        padding-left: 2rem;\r\n\r\n        &::before {\r\n            content: '↑↓';\r\n            position: absolute;\r\n            left: 1px;\r\n            top: 40%;\r\n            transform: translateY(-50%);\r\n            color: var(--color-accent);\r\n            font-size: 1rem;\r\n            font-weight: 900;\r\n        }\r\n    }\r\n}\r\n\r\n.filter {\r\n    &__button {\r\n        border: 1px solid transparent;\r\n        background: transparent;\r\n        padding: 0.5rem 1rem;\r\n        cursor: pointer;\r\n        font-size: 1rem;\r\n        border-radius: var(--border-radius-large);\r\n        transition: all 0.2s ease;\r\n        box-sizing: border-box;\r\n\r\n        &--active,\r\n        &:hover {\r\n            background: var(--color-light);\r\n            border-color: var(--color-primary);\r\n        }\r\n    }\r\n\r\n    &__more {\r\n        &Button {\r\n            outline: none;\r\n\t\t\ttext-align: left;\r\n            border-radius: var(--border-radius-large);\r\n            border: 1px solid transparent;\r\n            background: transparent;\r\n            padding: 0.5rem 1rem;\r\n            cursor: pointer;\r\n            font-size: 1rem;\r\n            transition: all 0.2s ease;\r\n            position: relative;\r\n\r\n            &::after {\r\n                outline: none;\r\n                content: '';\r\n                position: absolute;\r\n                right: 0.1rem;\r\n                top: 40%;\r\n                width: 0.5rem;\r\n                height: 0.5rem;\r\n                border-right: 2px solid var(--color-accent);\r\n                border-bottom: 2px solid var(--color-accent);\r\n                transform: translateY(-50%) rotate(45deg);\r\n            }\r\n\r\n            &:hover {\r\n                background: var(--color-light);\r\n                border-color: var(--color-primary);\r\n            }\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"cardsHeader": `CardsHeader-module__cardsHeader--lP4fI`,
	"cardsHeader__title": `CardsHeader-module__cardsHeader__title--SE4pw`,
	"cardsHeader__filters": `CardsHeader-module__cardsHeader__filters--nszI6`,
	"cardsHeader__more": `CardsHeader-module__cardsHeader__more--Ulevc`,
	"cardsHeader__sort": `CardsHeader-module__cardsHeader__sort--qgX5u`,
	"filter__button": `CardsHeader-module__filter__button--sKyzB`,
	"filter__buttonActive": `CardsHeader-module__filter__button--active--YrNdj`,
	"filter__moreButton": `CardsHeader-module__filter__moreButton--WH5Zn`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Cart/Cart.module.scss":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Cart/Cart.module.scss ***!
  \*******************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.Cart-module__cart--CYSnw {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-end;
  z-index: 1;
}
.Cart-module__cart__container--zxEcy {
  width: 400px;
  height: auto;
  max-height: 650px;
  background: white;
  display: flex;
  flex-direction: column;
  border-radius: var(--border-radius-large);
  margin: 80px 20px 20px 20px;
}
.Cart-module__cart__header--orksr {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.Cart-module__cart__title--hPMCO {
  margin: 0;
  font-size: 1.2rem;
}
.Cart-module__cart__total--SGbjR {
  font-weight: bold;
  font-size: 1.1rem;
}
.Cart-module__cart__close--w8wxM {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 5px;
}
.Cart-module__cart__body--kK89Y {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  max-height: 400px;
}
.Cart-module__cart--CYSnw .Cart-module__cart-empty--ir6fR {
  text-align: center;
  color: #666;
  margin: 50px 0;
}
.Cart-module__cart__footer--lE4eP {
  padding: 20px;
  border-top: 1px solid #eee;
  justify-content: center;
}
.Cart-module__cart__button--eH1HX {
  width: 100%;
}
.Cart-module__cart__checkout--opZfG {
  width: 100%;
  transition: opacity 0.2s ease;
}
.Cart-module__cart__checkout--opZfG:hover {
  opacity: 0.9;
}`, "",{"version":3,"sources":["webpack://./src/components/Cart/Cart.module.scss"],"names":[],"mappings":"AAAA;EACC,eAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,8BAAA;EACA,aAAA;EACA,yBAAA;EACA,UAAA;AACD;AACC;EACC,YAAA;EACA,YAAA;EACA,iBAAA;EACA,iBAAA;EACA,aAAA;EACA,sBAAA;EACA,yCAAA;EACA,2BAAA;AACF;AAEC;EACC,aAAA;EACA,6BAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;AAAF;AAGC;EACC,SAAA;EACA,iBAAA;AADF;AAIC;EACC,iBAAA;EACA,iBAAA;AAFF;AAKC;EACC,gBAAA;EACA,YAAA;EACA,iBAAA;EACA,eAAA;EACA,YAAA;AAHF;AAMC;EACC,OAAA;EACA,aAAA;EACA,gBAAA;EACA,iBAAA;AAJF;AAOC;EACC,kBAAA;EACA,WAAA;EACA,cAAA;AALF;AAQC;EACC,aAAA;EACA,0BAAA;EACA,uBAAA;AANF;AASC;EACC,WAAA;AAPF;AAUE;EACM,WAAA;EACA,6BAAA;AARR;AAUQ;EACI,YAAA;AARZ","sourcesContent":[".cart {\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tright: 0;\r\n\tbottom: 0;\r\n\tbackground: rgba(0, 0, 0, 0.5);\r\n\tdisplay: flex;\r\n\tjustify-content: flex-end;\r\n\tz-index: 1;\r\n\r\n\t&__container {\r\n\t\twidth: 400px;\r\n\t\theight: auto;\r\n\t\tmax-height: 650px;\r\n\t\tbackground: white;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tborder-radius: var(--border-radius-large);\r\n\t\tmargin: 80px 20px 20px 20px;\r\n\t}\r\n\r\n\t&__header {\r\n\t\tpadding: 20px;\r\n\t\tborder-bottom: 1px solid #eee;\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\t\talign-items: center;\r\n\t}\r\n\r\n\t&__title {\r\n\t\tmargin: 0;\r\n\t\tfont-size: 1.2rem;\r\n\t}\r\n\r\n\t&__total {\r\n\t\tfont-weight: bold;\r\n\t\tfont-size: 1.1rem;\r\n\t}\r\n\r\n\t&__close {\r\n\t\tbackground: none;\r\n\t\tborder: none;\r\n\t\tfont-size: 1.5rem;\r\n\t\tcursor: pointer;\r\n\t\tpadding: 5px;\r\n\t}\r\n\r\n\t&__body {\r\n\t\tflex: 1;\r\n\t\tpadding: 20px;\r\n\t\toverflow-y: auto;\r\n\t\tmax-height: 400px;\r\n\t}\r\n\r\n\t.cart-empty {\r\n\t\ttext-align: center;\r\n\t\tcolor: #666;\r\n\t\tmargin: 50px 0;\r\n\t}\r\n\r\n\t&__footer {\r\n\t\tpadding: 20px;\r\n\t\tborder-top: 1px solid #eee;\r\n\t\tjustify-content: center;\r\n\t}\r\n\r\n\t&__button {\r\n\t\twidth: 100%;\r\n\t}\r\n\r\n\t &__checkout {\r\n        width: 100%;\r\n        transition: opacity 0.2s ease;\r\n\r\n        &:hover {\r\n            opacity: 0.9;\r\n        }\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"cart": `Cart-module__cart--CYSnw`,
	"cart__container": `Cart-module__cart__container--zxEcy`,
	"cart__header": `Cart-module__cart__header--orksr`,
	"cart__title": `Cart-module__cart__title--hPMCO`,
	"cart__total": `Cart-module__cart__total--SGbjR`,
	"cart__close": `Cart-module__cart__close--w8wxM`,
	"cart__body": `Cart-module__cart__body--kK89Y`,
	"cartEmpty": `Cart-module__cart-empty--ir6fR`,
	"cart__footer": `Cart-module__cart__footer--lE4eP`,
	"cart__button": `Cart-module__cart__button--eH1HX`,
	"cart__checkout": `Cart-module__cart__checkout--opZfG`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/CartItem/CartItem.module.scss":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/CartItem/CartItem.module.scss ***!
  \***************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.CartItem-module__cart-item--wUrtP {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: var(--border-radius-medium);
  backdrop-filter: blur(0.25rem);
  border: 1px solid var(--color-input-stroke);
  width: 100%;
  max-width: 24rem;
  justify-content: space-between;
}
.CartItem-module__cart-item__image--YuAYQ {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: var(--border-radius-small);
  flex-shrink: 0;
}
.CartItem-module__cart-item_info--jDnaZ {
  flex: 1;
  min-width: 0;
}
.CartItem-module__cart-item__name--QXUbg {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-dark);
  margin-bottom: 0.25rem;
  white-space: nowrap;
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
}
.CartItem-module__cart-item__price--dWb0m {
  font-size: 1rem;
  color: var(--color-primary);
  font-weight: 600;
}
.CartItem-module__cart-item__controls--uHftB {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.CartItem-module__cart-item__control-btn--Ea19E {
  width: 2rem;
  height: 2rem;
  border: none;
  background: var(--color-accent);
  color: var(--color-light);
  border-radius: 50%;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
}
.CartItem-module__cart-item__control-btn--Ea19E:hover {
  background: var(--color-accent-hover);
}
.CartItem-module__cart-item__quantity--s5DYr {
  min-width: 1.5rem;
  text-align: center;
  font-weight: 600;
  color: var(--color-dark);
}`, "",{"version":3,"sources":["webpack://./src/components/CartItem/CartItem.module.scss"],"names":[],"mappings":"AAAA;EACC,aAAA;EACA,mBAAA;EACA,SAAA;EACA,aAAA;EACA,oCAAA;EACA,0CAAA;EACA,8BAAA;EACA,2CAAA;EACA,WAAA;EACA,gBAAA;EACA,8BAAA;AACD;AACC;EACC,WAAA;EACA,YAAA;EACA,iBAAA;EACA,yCAAA;EACA,cAAA;AACF;AAEC;EACC,OAAA;EACA,YAAA;AAAF;AAGC;EACC,eAAA;EACA,gBAAA;EACA,wBAAA;EACA,sBAAA;EACA,mBAAA;EACA,gBAAA;EACA,mBAAA;EACA,uBAAA;AADF;AAIC;EACC,eAAA;EACA,2BAAA;EACA,gBAAA;AAFF;AAKC;EACC,aAAA;EACA,mBAAA;EACA,WAAA;AAHF;AAMC;EACC,WAAA;EACA,YAAA;EACA,YAAA;EACA,+BAAA;EACA,yBAAA;EACA,kBAAA;EACA,iBAAA;EACA,iBAAA;EACA,eAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,iCAAA;AAJF;AAME;EACC,qCAAA;AAJH;AASC;EACC,iBAAA;EACA,kBAAA;EACA,gBAAA;EACA,wBAAA;AAPF","sourcesContent":[".cart-item {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tgap: 16px;\r\n\tpadding: 16px;\r\n\tbackground: rgba(255, 255, 255, 0.7);\r\n\tborder-radius: var(--border-radius-medium);\r\n\tbackdrop-filter: blur(0.25rem);\r\n\tborder: 1px solid var(--color-input-stroke);\r\n\twidth: 100%;\r\n\tmax-width: 24rem;\r\n\tjustify-content: space-between;\r\n\r\n\t&__image {\r\n\t\twidth: 60px;\r\n\t\theight: 60px;\r\n\t\tobject-fit: cover;\r\n\t\tborder-radius: var(--border-radius-small);\r\n\t\tflex-shrink: 0;\r\n\t}\r\n\r\n\t&_info {\r\n\t\tflex: 1;\r\n\t\tmin-width: 0;\r\n\t}\r\n\r\n\t&__name {\r\n\t\tfont-size: 1rem;\r\n\t\tfont-weight: 600;\r\n\t\tcolor: var(--color-dark);\r\n\t\tmargin-bottom: 0.25rem;\r\n\t\twhite-space: nowrap;\r\n\t\toverflow: hidden;\r\n\t\twhite-space: normal;\r\n\t\ttext-overflow: ellipsis;\r\n\t}\r\n\r\n\t&__price {\r\n\t\tfont-size: 1rem;\r\n\t\tcolor: var(--color-primary);\r\n\t\tfont-weight: 600;\r\n\t}\r\n\r\n\t&__controls {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tgap: 0.5rem;\r\n\t}\r\n\r\n\t&__control-btn {\r\n\t\twidth: 2rem;\r\n\t\theight: 2rem;\r\n\t\tborder: none;\r\n\t\tbackground: var(--color-accent);\r\n\t\tcolor: var(--color-light);\r\n\t\tborder-radius: 50%;\r\n\t\tfont-size: 1.1rem;\r\n\t\tfont-weight: bold;\r\n\t\tcursor: pointer;\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tjustify-content: center;\r\n\t\ttransition: background-color 0.2s;\r\n\r\n\t\t&:hover {\r\n\t\t\tbackground: var(--color-accent-hover);\r\n\t\t}\r\n\r\n\t}\r\n\r\n\t&__quantity {\r\n\t\tmin-width: 1.5rem;\r\n\t\ttext-align: center;\r\n\t\tfont-weight: 600;\r\n\t\tcolor: var(--color-dark);\r\n\t}\r\n\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"cartItem": `CartItem-module__cart-item--wUrtP`,
	"cartItem__image": `CartItem-module__cart-item__image--YuAYQ`,
	"cartItem_info": `CartItem-module__cart-item_info--jDnaZ`,
	"cartItem__name": `CartItem-module__cart-item__name--QXUbg`,
	"cartItem__price": `CartItem-module__cart-item__price--dWb0m`,
	"cartItem__controls": `CartItem-module__cart-item__controls--uHftB`,
	"cartItem__controlBtn": `CartItem-module__cart-item__control-btn--Ea19E`,
	"cartItem__quantity": `CartItem-module__cart-item__quantity--s5DYr`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Footer/Footer.module.scss":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Footer/Footer.module.scss ***!
  \***********************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.Footer-module__footer--ceS4E {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  width: 90%;
  padding: 1.25rem;
  box-sizing: border-box;
  background-color: var(--color-background-accent);
  border-radius: var(--border-radius-large);
  box-shadow: var(--shadow);
}`, "",{"version":3,"sources":["webpack://./src/components/Footer/Footer.module.scss"],"names":[],"mappings":"AAAA;EACC,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,kBAAA;EACA,UAAA;EACA,gBAAA;EACA,sBAAA;EACA,gDAAA;EACA,yCAAA;EACA,yBAAA;AACD","sourcesContent":[".footer {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n\talign-self: center;\r\n\twidth: 90%;\r\n\tpadding: 1.25rem;\r\n\tbox-sizing: border-box;\r\n\tbackground-color: var(--color-background-accent);\r\n\tborder-radius: var(--border-radius-large);\r\n\tbox-shadow: var(--shadow);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"footer": `Footer-module__footer--ceS4E`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/IconButton/IconButton.module.scss":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/IconButton/IconButton.module.scss ***!
  \*******************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.IconButton-module__icon-button--gLNvT {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  border-radius: var(--border-radius-small);
  min-width: 60px;
  outline: none;
}
.IconButton-module__icon-button--gLNvT:hover {
  opacity: 0.9;
}
.IconButton-module__icon-button__image--koQ5W {
  width: 20px;
  height: 20px;
  object-fit: cover;
  border-radius: 50%;
  display: block;
  margin: 0;
}
.IconButton-module__icon-button__text--jGcKl {
  font-size: 0.85rem;
  color: var(--color-dark);
  margin-top: 4px;
  white-space: nowrap;
}`, "",{"version":3,"sources":["webpack://./src/components/IconButton/IconButton.module.scss"],"names":[],"mappings":"AAAA;EACC,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,gBAAA;EACA,YAAA;EACA,eAAA;EACA,yCAAA;EACA,eAAA;EACA,aAAA;AACD;AACC;EACC,YAAA;AACF;AAEC;EACC,WAAA;EACA,YAAA;EACA,iBAAA;EACA,kBAAA;EACA,cAAA;EACA,SAAA;AAAF;AAGC;EACC,kBAAA;EACA,wBAAA;EACA,eAAA;EACA,mBAAA;AADF","sourcesContent":[".icon-button {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tbackground: none;\r\n\tborder: none;\r\n\tcursor: pointer;\r\n\tborder-radius: var(--border-radius-small);\r\n\tmin-width: 60px;\r\n\toutline: none;\r\n\r\n\t&:hover {\r\n\t\topacity: 0.9;\r\n\t}\r\n\r\n\t&__image {\r\n\t\twidth: 20px;\r\n\t\theight: 20px;\r\n\t\tobject-fit: cover;\r\n\t\tborder-radius: 50%;\r\n\t\tdisplay: block;\r\n\t\tmargin: 0;\r\n\t}\r\n\r\n\t&__text {\r\n\t\tfont-size: 0.85rem;\r\n\t\tcolor: var(--color-dark);\r\n\t\tmargin-top: 4px;\r\n\t\twhite-space: nowrap;\r\n\t}\r\n\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"iconButton": `IconButton-module__icon-button--gLNvT`,
	"iconButton__image": `IconButton-module__icon-button__image--koQ5W`,
	"iconButton__text": `IconButton-module__icon-button__text--jGcKl`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/LoginForm/LoginForm.module.scss":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/LoginForm/LoginForm.module.scss ***!
  \*****************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.LoginForm-module__login-form--fOv2F {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 25rem;
  width: 100%;
  padding: 2rem 1.5rem;
  background: var(--color-light);
  border: 1px solid var(--color-background-accent);
  border-radius: var(--border-radius-medium);
  box-shadow: var(--shadow);
  margin: 10vh auto 0;
  align-items: center;
}
.LoginForm-module__login-form__container--thcyC {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 25rem;
  width: 100%;
}
.LoginForm-module__login-form__field--fCwp4 input {
  padding: 0.75rem;
  border: 1px solid var(--color-input-stroke);
  border-radius: var(--border-radius-large);
  font-size: 1rem;
  width: 100%;
  box-sizing: border-box;
  text-align: left;
}
.LoginForm-module__login-form__field--fCwp4:focus {
  border-color: var(--color-primary);
  outline: none;
}
.LoginForm-module__login-form__field--fCwp4.LoginForm-module__inactive--fuYnh {
  display: none;
}
.LoginForm-module__login-form__field--error--EdOZ5 {
  border-color: var(--color-err) !important;
}
.LoginForm-module__login-form__submit--OC5ri, .LoginForm-module__login-form__toggle--JFuWW {
  width: 100%;
}
.LoginForm-module__login-form__error--i74LP {
  font-size: 1rem;
  color: var(--color-err);
  display: none;
  align-self: center;
}
.LoginForm-module__login-form__error--i74LP.LoginForm-module__active--kvUpF {
  display: block;
}
.LoginForm-module__login-form__error--i74LP.LoginForm-module__inactive--fuYnh {
  display: none;
}`, "",{"version":3,"sources":["webpack://./src/components/LoginForm/LoginForm.module.scss"],"names":[],"mappings":"AAAA;EACC,aAAA;EACA,sBAAA;EACA,SAAA;EAEA,gBAAA;EACA,WAAA;EACA,oBAAA;EAEA,8BAAA;EACA,gDAAA;EACA,0CAAA;EACA,yBAAA;EAEA,mBAAA;EACA,mBAAA;AAFD;AAIC;EACC,aAAA;EACA,sBAAA;EACA,SAAA;EACA,gBAAA;EACA,WAAA;AAFF;AAOE;EACC,gBAAA;EACA,2CAAA;EACA,yCAAA;EACA,eAAA;EACA,WAAA;EACA,sBAAA;EACA,gBAAA;AALH;AAQE;EACC,kCAAA;EACA,aAAA;AANH;AASE;EACC,aAAA;AAPH;AAUE;EACC,yCAAA;AARH;AAcC;EAEC,WAAA;AAbF;AAgBC;EACC,eAAA;EACA,uBAAA;EACA,aAAA;EACA,kBAAA;AAdF;AAgBE;EACC,cAAA;AAdH;AAiBE;EACC,aAAA;AAfH","sourcesContent":[".login-form {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 1rem;\r\n\r\n\tmax-width: 25rem;\r\n\twidth: 100%;\r\n\tpadding: 2rem 1.5rem;\r\n\r\n\tbackground: var(--color-light);\r\n\tborder: 1px solid var(--color-background-accent);\r\n\tborder-radius: var(--border-radius-medium);\r\n\tbox-shadow: var(--shadow);\r\n\r\n\tmargin: 10vh auto 0;\r\n\talign-items: center;\r\n\r\n\t&__container {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tgap: 1rem;\r\n\t\tmax-width: 25rem;\r\n\t\twidth: 100%;\r\n\t}\r\n\r\n\t&__field {\r\n\t\t\r\n\t\tinput {\r\n\t\t\tpadding: 0.75rem;\r\n\t\t\tborder: 1px solid var(--color-input-stroke);\r\n\t\t\tborder-radius: var(--border-radius-large);\r\n\t\t\tfont-size: 1rem;\r\n\t\t\twidth: 100%;\r\n\t\t\tbox-sizing: border-box;\r\n\t\t\ttext-align: left;\r\n\t\t}\r\n\r\n\t\t&:focus {\r\n\t\t\tborder-color: var(--color-primary);\r\n\t\t\toutline: none;\r\n\t\t}\r\n\r\n\t\t&.inactive {\r\n\t\t\tdisplay: none;\r\n\t\t}\r\n\r\n\t\t&--error {\r\n\t\t\tborder-color: var(--color-err) !important;\r\n\t\t}\r\n\r\n\t}\r\n\r\n\r\n\t&__submit,\r\n\t&__toggle {\r\n\t\twidth: 100%;\r\n\t}\r\n\r\n\t&__error {\r\n\t\tfont-size: 1rem;\r\n\t\tcolor: var(--color-err);\r\n\t\tdisplay: none;\r\n\t\talign-self: center;\r\n\r\n\t\t&.active {\r\n\t\t\tdisplay: block;\r\n\t\t}\r\n\r\n\t\t&.inactive {\r\n\t\t\tdisplay: none;\r\n\t\t}\r\n\t}\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"loginForm": `LoginForm-module__login-form--fOv2F`,
	"loginForm__container": `LoginForm-module__login-form__container--thcyC`,
	"loginForm__field": `LoginForm-module__login-form__field--fCwp4`,
	"inactive": `LoginForm-module__inactive--fuYnh`,
	"loginForm__fieldError": `LoginForm-module__login-form__field--error--EdOZ5`,
	"loginForm__submit": `LoginForm-module__login-form__submit--OC5ri`,
	"loginForm__toggle": `LoginForm-module__login-form__toggle--JFuWW`,
	"loginForm__error": `LoginForm-module__login-form__error--i74LP`,
	"active": `LoginForm-module__active--kvUpF`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Navbar/Navbar.module.scss":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Navbar/Navbar.module.scss ***!
  \***********************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.Navbar-module__navbar--DEpEv {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background: var(--color-light);
  border-bottom: 1px solid var(--color-input-stroke);
  box-shadow: var(--shadow);
  position: sticky;
  top: 0;
  height: 5rem;
  z-index: 1;
  border-radius: 0 0 var(--border-radius-medium) var(--border-radius-medium);
}
.Navbar-module__navbar__left--BbkFQ {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.Navbar-module__navbar__right--u6cjV {
  display: flex;
  gap: 1rem;
  align-items: center;
}
.Navbar-module__navbar__cartWrapper--egQsb {
  position: relative;
  display: inline-block;
}
.Navbar-module__navbar__cartBadge--I0pHB {
  position: absolute;
  top: -5px;
  right: -5px;
  background: var(--color-accent);
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  font-size: 12px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  z-index: 10;
}`, "",{"version":3,"sources":["webpack://./src/components/Navbar/Navbar.module.scss"],"names":[],"mappings":"AAAA;EACC,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,aAAA;EACA,8BAAA;EACA,kDAAA;EACA,yBAAA;EACA,gBAAA;EACA,MAAA;EACA,YAAA;EACA,UAAA;EACA,0EAAA;AACD;AACC;EACC,aAAA;EACA,mBAAA;EACA,SAAA;AACF;AAEC;EACC,aAAA;EACA,SAAA;EACA,mBAAA;AAAF;AAGC;EACO,kBAAA;EACA,qBAAA;AADR;AAII;EACI,kBAAA;EACA,SAAA;EACA,WAAA;EACA,+BAAA;EACA,YAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;EACA,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,cAAA;EACN,WAAA;AAFF","sourcesContent":[".navbar {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: space-between;\r\n\tpadding: 1rem;\r\n\tbackground: var(--color-light);\r\n\tborder-bottom: 1px solid var(--color-input-stroke);\r\n\tbox-shadow: var(--shadow);\r\n\tposition: sticky;\r\n\ttop: 0;\r\n\theight: 5rem;\r\n\tz-index: 1;\r\n\tborder-radius: 0 0 var(--border-radius-medium) var(--border-radius-medium);\r\n\r\n\t&__left {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tgap: 1rem;\r\n\t}\r\n\r\n\t&__right {\r\n\t\tdisplay: flex;\r\n\t\tgap: 1rem;\r\n\t\talign-items: center;\r\n\t}\r\n\r\n\t&__cartWrapper {\r\n        position: relative;\r\n        display: inline-block;\r\n    }\r\n\r\n    &__cartBadge {\r\n        position: absolute;\r\n        top: -5px;\r\n        right: -5px;\r\n        background: var(--color-accent);\r\n        color: white;\r\n        border-radius: 50%;\r\n        width: 20px;\r\n        height: 20px;\r\n        font-size: 12px;\r\n        font-weight: bold;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        line-height: 1;\r\n\t\tz-index: 10;\r\n    }\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"navbar": `Navbar-module__navbar--DEpEv`,
	"navbar__left": `Navbar-module__navbar__left--BbkFQ`,
	"navbar__right": `Navbar-module__navbar__right--u6cjV`,
	"navbar__cartWrapper": `Navbar-module__navbar__cartWrapper--egQsb`,
	"navbar__cartBadge": `Navbar-module__navbar__cartBadge--I0pHB`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/PaymentForm/PaymentForm.module.scss":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/PaymentForm/PaymentForm.module.scss ***!
  \*********************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.PaymentForm-module__payment--AIsLB {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 100%;
  padding: 1.25rem;
}
.PaymentForm-module__payment__section--quw5K {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.PaymentForm-module__payment__row--MNroI {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.PaymentForm-module__payment__field--qp4AJ {
  width: 100%;
  gap: 1rem;
}
.PaymentForm-module__payment__field--qp4AJ input {
  width: 100%;
  padding: 12px;
  border: 1px solid var(--color-input-stroke);
  border-radius: var(--border-radius-large);
  font-size: 16px;
  background: var(--color-light);
  box-sizing: border-box;
  max-width: 75%;
}
.PaymentForm-module__payment__field--qp4AJ:focus {
  outline: none;
  border-color: var(--color-primary);
}`, "",{"version":3,"sources":["webpack://./src/components/PaymentForm/PaymentForm.module.scss"],"names":[],"mappings":"AAAA;EACC,aAAA;EACA,sBAAA;EACA,YAAA;EACA,WAAA;EACA,gBAAA;AACD;AACC;EACC,aAAA;EACA,sBAAA;EACA,YAAA;AACF;AAEC;EACC,WAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;AAAF;AAGC;EACC,WAAA;EACA,SAAA;AADF;AAGE;EACC,WAAA;EACA,aAAA;EACA,2CAAA;EACA,yCAAA;EACA,eAAA;EACA,8BAAA;EACA,sBAAA;EACA,cAAA;AADH;AAIE;EACC,aAAA;EACA,kCAAA;AAFH","sourcesContent":[".payment {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 1.25rem;\r\n\twidth: 100%;\r\n\tpadding: 1.25rem;\r\n\r\n\t&__section {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tgap: 0.75rem;\r\n\t}\r\n\r\n\t&__row {\r\n\t\twidth: 100%;\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\t\talign-items: center;\r\n\t}\r\n\r\n\t&__field {\r\n\t\twidth: 100%;\r\n\t\tgap: 1rem;\r\n\r\n\t\tinput {\r\n\t\t\twidth: 100%;\r\n\t\t\tpadding: 12px;\r\n\t\t\tborder: 1px solid var(--color-input-stroke);\r\n\t\t\tborder-radius: var(--border-radius-large);\r\n\t\t\tfont-size: 16px;\r\n\t\t\tbackground: var(--color-light);\r\n\t\t\tbox-sizing: border-box;\r\n\t\t\tmax-width: 75%;\r\n\t\t}\r\n\r\n\t\t&:focus {\r\n\t\t\toutline: none;\r\n\t\t\tborder-color: var(--color-primary);\r\n\t\t}\r\n\t}\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"payment": `PaymentForm-module__payment--AIsLB`,
	"payment__section": `PaymentForm-module__payment__section--quw5K`,
	"payment__row": `PaymentForm-module__payment__row--MNroI`,
	"payment__field": `PaymentForm-module__payment__field--qp4AJ`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/PersonalInfo/PersonalInfo.module.scss":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/PersonalInfo/PersonalInfo.module.scss ***!
  \***********************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.PersonalInfo-module__personal-info-form--U2Mvs {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  max-width: 37rem;
}
.PersonalInfo-module__personal-info-form__field--A6sNX {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
}
.PersonalInfo-module__personal-info-form__input--rE1sX, .PersonalInfo-module__personal-info-form__textarea--gIWk0 {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--color-input-stroke);
  border-radius: var(--border-radius-large);
  font-size: 1rem;
  background: var(--color-light);
  box-sizing: border-box;
}
.PersonalInfo-module__personal-info-form__input--rE1sX:focus, .PersonalInfo-module__personal-info-form__textarea--gIWk0:focus {
  outline: none;
  border-color: var(--color-primary);
}
.PersonalInfo-module__personal-info-form__title--I7Ytd {
  margin: 1rem 0 0.5rem 0;
  font-size: 1.2rem;
  color: var(--color-text);
}
.PersonalInfo-module__personal-info-form__address-row--HkdCq {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  flex-wrap: nowrap;
  gap: 1rem;
}
.PersonalInfo-module__personal-info-form__address-item--BgAoK {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
}
.PersonalInfo-module__personal-info-form__address-label--r1fHj {
  margin: 0;
  font-size: 1rem;
  color: var(--color-text);
  white-space: nowrap;
}
.PersonalInfo-module__personal-info-form__address-input--rxIOs {
  flex: 1;
  height: 2.75rem;
  width: 2.75rem;
  border-radius: var(--border-radius-small);
  border: 1px solid var(--color-input-stroke);
  padding: 0 0.75rem;
  font-size: 1rem;
  text-align: center;
}
.PersonalInfo-module__personal-info-form__input_error--hiu7a, .PersonalInfo-module__personal-info-form__address-input_error--Jz0K9 {
  border-color: var(--color-err) !important;
}
.PersonalInfo-module__personal-info-form__error--gENNb {
  font-size: 1rem;
  color: var(--color-err);
  display: none;
  align-self: center;
}
.PersonalInfo-module__personal-info-form__error--gENNb.PersonalInfo-module__active--FpiSY {
  display: block;
}
.PersonalInfo-module__personal-info-form__error--gENNb.PersonalInfo-module__inactive--DFQw3 {
  display: none;
}

.PersonalInfo-module__cityWrapper--OfyJC {
  position: relative;
}

.PersonalInfo-module__suggestions--B7xgR {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  max-height: 200px;
  overflow-y: auto;
  margin-top: 4px;
}

.PersonalInfo-module__suggestion--c5gX2 {
  padding: 12px 16px;
  cursor: pointer;
  transition: background-color 0.2s;
  font-size: 14px;
  border-bottom: 1px solid #f0f0f0;
}
.PersonalInfo-module__suggestion--c5gX2:last-child {
  border-bottom: none;
}
.PersonalInfo-module__suggestion--c5gX2:hover {
  background-color: #f8f9fa;
}
.PersonalInfo-module__suggestion--c5gX2:active {
  background-color: #e9ecef;
}

.PersonalInfo-module__loading--HAhCc {
  padding: 12px 16px;
  color: #666;
  font-size: 14px;
  text-align: center;
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-top: 4px;
}`, "",{"version":3,"sources":["webpack://./src/components/PersonalInfo/PersonalInfo.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,sBAAA;EACA,YAAA;EACA,WAAA;EACA,gBAAA;AACJ;AACI;EACI,aAAA;EACA,sBAAA;EACA,WAAA;EACA,WAAA;AACR;AAEI;EAEI,WAAA;EACA,gBAAA;EACA,2CAAA;EACA,yCAAA;EACA,eAAA;EACA,8BAAA;EACA,sBAAA;AADR;AAGQ;EACI,aAAA;EACA,kCAAA;AADZ;AAKI;EACI,uBAAA;EACA,iBAAA;EACA,wBAAA;AAHR;AAMI;EACI,aAAA;EACA,8BAAA;EACA,uBAAA;EACA,WAAA;EACA,iBAAA;EACA,SAAA;AAJR;AAOI;EACI,aAAA;EACA,sBAAA;EACA,WAAA;EACA,OAAA;AALR;AAQI;EACI,SAAA;EACA,eAAA;EACA,wBAAA;EACA,mBAAA;AANR;AASI;EACI,OAAA;EACA,eAAA;EACA,cAAA;EACA,yCAAA;EACA,2CAAA;EACA,kBAAA;EACA,eAAA;EACA,kBAAA;AAPR;AAUK;EAEG,yCAAA;AATR;AAYI;EACI,eAAA;EACA,uBAAA;EACA,aAAA;EACA,kBAAA;AAVR;AAYQ;EACI,cAAA;AAVZ;AAaQ;EACI,aAAA;AAXZ;;AAiBA;EACC,kBAAA;AAdD;;AAiBA;EACC,kBAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,iBAAA;EACA,sBAAA;EACA,kBAAA;EACA,yCAAA;EACA,aAAA;EACA,iBAAA;EACA,gBAAA;EACA,eAAA;AAdD;;AAiBA;EACC,kBAAA;EACA,eAAA;EACA,iCAAA;EACA,eAAA;EACA,gCAAA;AAdD;AAgBC;EACC,mBAAA;AAdF;AAiBC;EACC,yBAAA;AAfF;AAkBC;EACC,yBAAA;AAhBF;;AAoBA;EACC,kBAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;EACA,iBAAA;EACA,sBAAA;EACA,kBAAA;EACA,eAAA;AAjBD","sourcesContent":[".personal-info-form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.75rem;\r\n    width: 100%;\r\n    max-width: 37rem;\r\n\r\n    &__field {\r\n        display: flex;\r\n        flex-direction: column;\r\n        gap: 0.5rem;\r\n        width: 100%;\r\n    }\r\n\r\n    &__input,\r\n    &__textarea {\r\n        width: 100%;\r\n        padding: 0.75rem; \r\n        border: 1px solid var(--color-input-stroke);\r\n        border-radius: var(--border-radius-large);\r\n        font-size: 1rem;\r\n        background: var(--color-light);\r\n        box-sizing: border-box;\r\n\r\n        &:focus {\r\n            outline: none;\r\n            border-color: var(--color-primary);\r\n        }\r\n    }\r\n\r\n    &__title {\r\n        margin: 1rem 0 0.5rem 0;\r\n        font-size: 1.2rem;\r\n        color: var(--color-text);\r\n    }\r\n\r\n    &__address-row {\r\n        display: flex;\r\n        justify-content: space-between;\r\n        align-items: flex-start;\r\n        width: 100%;\r\n        flex-wrap: nowrap;\r\n        gap: 1rem;\r\n    }\r\n\r\n    &__address-item {\r\n        display: flex;\r\n        flex-direction: column;\r\n        gap: 0.5rem;\r\n        flex: 1;\r\n    }\r\n\r\n    &__address-label {\r\n        margin: 0;\r\n        font-size: 1rem;\r\n        color: var(--color-text);\r\n        white-space: nowrap;\r\n    }\r\n\r\n    &__address-input {\r\n        flex: 1;\r\n        height: 2.75rem; \r\n        width: 2.75rem;\r\n        border-radius: var(--border-radius-small);\r\n        border: 1px solid var(--color-input-stroke);\r\n        padding: 0 0.75rem;\r\n        font-size: 1rem;\r\n        text-align: center;\r\n    }\r\n\r\n     &__input_error,\r\n    &__address-input_error {\r\n        border-color: var(--color-err) !important;\r\n    }\r\n\r\n    &__error {\r\n        font-size: 1rem;\r\n        color: var(--color-err);\r\n        display: none;\r\n        align-self: center;\r\n\r\n        &.active {\r\n            display: block;\r\n        }\r\n\r\n        &.inactive {\r\n            display: none;\r\n        }\r\n    }\r\n    \r\n}\r\n\r\n.cityWrapper {\r\n\tposition: relative;\r\n}\r\n\r\n.suggestions {\r\n\tposition: absolute;\r\n\ttop: 100%;\r\n\tleft: 0;\r\n\tright: 0;\r\n\tbackground: white;\r\n\tborder: 1px solid #ddd;\r\n\tborder-radius: 8px;\r\n\tbox-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\r\n\tz-index: 1000;\r\n\tmax-height: 200px;\r\n\toverflow-y: auto;\r\n\tmargin-top: 4px;\r\n}\r\n\r\n.suggestion {\r\n\tpadding: 12px 16px;\r\n\tcursor: pointer;\r\n\ttransition: background-color 0.2s;\r\n\tfont-size: 14px;\r\n\tborder-bottom: 1px solid #f0f0f0;\r\n\r\n\t&:last-child {\r\n\t\tborder-bottom: none;\r\n\t}\r\n\r\n\t&:hover {\r\n\t\tbackground-color: #f8f9fa;\r\n\t}\r\n\r\n\t&:active {\r\n\t\tbackground-color: #e9ecef;\r\n\t}\r\n}\r\n\r\n.loading {\r\n\tpadding: 12px 16px;\r\n\tcolor: #666;\r\n\tfont-size: 14px;\r\n\ttext-align: center;\r\n\tbackground: white;\r\n\tborder: 1px solid #ddd;\r\n\tborder-radius: 8px;\r\n\tmargin-top: 4px;\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"personalInfoForm": `PersonalInfo-module__personal-info-form--U2Mvs`,
	"personalInfoForm__field": `PersonalInfo-module__personal-info-form__field--A6sNX`,
	"personalInfoForm__input": `PersonalInfo-module__personal-info-form__input--rE1sX`,
	"personalInfoForm__textarea": `PersonalInfo-module__personal-info-form__textarea--gIWk0`,
	"personalInfoForm__title": `PersonalInfo-module__personal-info-form__title--I7Ytd`,
	"personalInfoForm__addressRow": `PersonalInfo-module__personal-info-form__address-row--HkdCq`,
	"personalInfoForm__addressItem": `PersonalInfo-module__personal-info-form__address-item--BgAoK`,
	"personalInfoForm__addressLabel": `PersonalInfo-module__personal-info-form__address-label--r1fHj`,
	"personalInfoForm__addressInput": `PersonalInfo-module__personal-info-form__address-input--rxIOs`,
	"personalInfoForm__input_error": `PersonalInfo-module__personal-info-form__input_error--hiu7a`,
	"personalInfoForm__addressInput_error": `PersonalInfo-module__personal-info-form__address-input_error--Jz0K9`,
	"personalInfoForm__error": `PersonalInfo-module__personal-info-form__error--gENNb`,
	"active": `PersonalInfo-module__active--FpiSY`,
	"inactive": `PersonalInfo-module__inactive--DFQw3`,
	"cityWrapper": `PersonalInfo-module__cityWrapper--OfyJC`,
	"suggestions": `PersonalInfo-module__suggestions--B7xgR`,
	"suggestion": `PersonalInfo-module__suggestion--c5gX2`,
	"loading": `PersonalInfo-module__loading--HAhCc`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/ProductCard/ProductCard.module.scss":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/ProductCard/ProductCard.module.scss ***!
  \*********************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.ProductCard-module__product-card--DgfVl {
  background: var(--color-light);
  border-radius: var(--border-radius-large);
  box-shadow: var(--shadow);
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.ProductCard-module__product-card--DgfVl:hover {
  box-shadow: var(--shadow-hover);
}
.ProductCard-module__product-cardimage-wrapper--yuoKD {
  position: relative;
  width: 100%;
  height: 12.5rem;
  overflow: hidden;
}
.ProductCard-module__product-card__image--hsgIx {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.ProductCard-module__product-card__content--hV6rs {
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.ProductCard-module__product-card__name--jCs3M {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-dark);
  line-height: 1.3;
}
.ProductCard-module__product-card__description--fpdr5 {
  margin: 0;
  font-size: 0.9rem;
  color: #666;
  line-height: 1.4;
  flex: 1;
  display: -webkit-box;
  overflow: hidden;
}
.ProductCard-module__product-card__footer--E8mXu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}
.ProductCard-module__product-card__price--M8byk {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--color-dark);
}
.ProductCard-module__product-card__add-btn--IN5s8 {
  width: 2.5rem;
  height: 2.5rem;
  border: none;
  background: var(--color-accent);
  color: var(--color-light);
  border-radius: 50%;
  font-size: 1.5rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s, transform 0.2s;
}
.ProductCard-module__product-card__add-btn__add-btn--qDapF:hover {
  background: var(--color-accent-hover);
}`, "",{"version":3,"sources":["webpack://./src/components/ProductCard/ProductCard.module.scss"],"names":[],"mappings":"AAAA;EACC,8BAAA;EACA,yCAAA;EACA,yBAAA;EACA,gBAAA;EACA,2CACC;EAED,YAAA;EACA,aAAA;EACA,sBAAA;AADD;AAGC;EACC,+BAAA;AADF;AAIC;EACC,kBAAA;EACA,WAAA;EACA,eAAA;EACA,gBAAA;AAFF;AAKC;EACC,WAAA;EACA,YAAA;EACA,iBAAA;EACA,cAAA;AAHF;AAMC;EACC,aAAA;EACA,OAAA;EACA,aAAA;EACA,sBAAA;EACA,YAAA;AAJF;AAOC;EACC,SAAA;EACA,iBAAA;EACA,gBAAA;EACA,wBAAA;EACA,gBAAA;AALF;AAQC;EACC,SAAA;EACA,iBAAA;EACA,WAAA;EACA,gBAAA;EACA,OAAA;EACA,oBAAA;EACA,gBAAA;AANF;AASC;EACC,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,gBAAA;AAPF;AAUC;EACC,iBAAA;EACA,gBAAA;EACA,wBAAA;AARF;AAWC;EACC,aAAA;EACA,cAAA;EACA,YAAA;EACA,+BAAA;EACA,yBAAA;EACA,kBAAA;EACA,iBAAA;EACA,gBAAA;EACA,eAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,iDACC;AAVH;AAaE;EACC,qCAAA;AAXH","sourcesContent":[".product-card {\r\n\tbackground: var(--color-light);\r\n\tborder-radius: var(--border-radius-large);\r\n\tbox-shadow: var(--shadow);\r\n\toverflow: hidden;\r\n\ttransition:\r\n\t\ttransform 0.2s,\r\n\t\tbox-shadow 0.2s;\r\n\theight: 100%;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\r\n\t&:hover {\r\n\t\tbox-shadow: var(--shadow-hover)\r\n\t}\r\n\r\n\t&image-wrapper {\r\n\t\tposition: relative;\r\n\t\twidth: 100%;\r\n\t\theight: 12.5rem;\r\n\t\toverflow: hidden;\r\n\t}\r\n\r\n\t&__image {\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\tobject-fit: cover;\r\n\t\tdisplay: block;\r\n\t}\r\n\r\n\t&__content {\r\n\t\tpadding: 1rem;\r\n\t\tflex: 1;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tgap: 0.75rem;\r\n\t}\r\n\r\n\t&__name {\r\n\t\tmargin: 0;\r\n\t\tfont-size: 1.1rem;\r\n\t\tfont-weight: 600;\r\n\t\tcolor: var(--color-dark);\r\n\t\tline-height: 1.3;\r\n\t}\r\n\r\n\t&__description {\r\n\t\tmargin: 0;\r\n\t\tfont-size: 0.9rem;\r\n\t\tcolor: #666;\r\n\t\tline-height: 1.4;\r\n\t\tflex: 1;\r\n\t\tdisplay: -webkit-box;\r\n\t\toverflow: hidden;\r\n\t}\r\n\r\n\t&__footer {\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\t\talign-items: center;\r\n\t\tmargin-top: auto;\r\n\t}\r\n\r\n\t&__price {\r\n\t\tfont-size: 1.2rem;\r\n\t\tfont-weight: 700;\r\n\t\tcolor: var(--color-dark);\r\n\t}\r\n\r\n\t&__add-btn {\r\n\t\twidth: 2.5rem;\r\n\t\theight: 2.5rem;\r\n\t\tborder: none;\r\n\t\tbackground: var(--color-accent);\r\n\t\tcolor: var(--color-light);\r\n\t\tborder-radius: 50%;\r\n\t\tfont-size: 1.5rem;\r\n\t\tfont-weight: 600;\r\n\t\tcursor: pointer;\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tjustify-content: center;\r\n\t\ttransition:\r\n\t\t\tbackground-color 0.2s,\r\n\t\t\ttransform 0.2s;\r\n\r\n\t\t&__add-btn:hover {\r\n\t\t\tbackground: var(--color-accent-hover);\r\n\t\t}\r\n\t}\r\n\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"productCard": `ProductCard-module__product-card--DgfVl`,
	"productCardimageWrapper": `ProductCard-module__product-cardimage-wrapper--yuoKD`,
	"productCard__image": `ProductCard-module__product-card__image--hsgIx`,
	"productCard__content": `ProductCard-module__product-card__content--hV6rs`,
	"productCard__name": `ProductCard-module__product-card__name--jCs3M`,
	"productCard__description": `ProductCard-module__product-card__description--fpdr5`,
	"productCard__footer": `ProductCard-module__product-card__footer--E8mXu`,
	"productCard__price": `ProductCard-module__product-card__price--M8byk`,
	"productCard__addBtn": `ProductCard-module__product-card__add-btn--IN5s8`,
	"productCard__addBtn__addBtn": `ProductCard-module__product-card__add-btn__add-btn--qDapF`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/ProductsBatch/ProductsBatch.module.scss":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/ProductsBatch/ProductsBatch.module.scss ***!
  \*************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.ProductsBatch-module__store-products--vV0mm {
  width: 100%;
  margin-top: 1rem;
}
.ProductsBatch-module__store-products__title--H812T {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 1rem;
  color: var(--color-dark);
}
.ProductsBatch-module__store-products__grid--h0CCS {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
  gap: 1.5rem;
  width: 100%;
}
.ProductsBatch-module__store-products--vV0mm .ProductsBatch-module__products-empty--rV9LL {
  text-align: center;
  color: #666;
  font-size: 1.1rem;
  padding: 32px 0;
}`, "",{"version":3,"sources":["webpack://./src/components/ProductsBatch/ProductsBatch.module.scss"],"names":[],"mappings":"AAAA;EACC,WAAA;EACA,gBAAA;AACD;AACC;EACC,iBAAA;EACA,gBAAA;EACA,gBAAA;EACA,wBAAA;AACF;AAEC;EACC,aAAA;EACA,4DAAA;EACA,WAAA;EACA,WAAA;AAAF;AAGC;EACC,kBAAA;EACA,WAAA;EACA,iBAAA;EACA,eAAA;AADF","sourcesContent":[".store-products {\r\n\twidth: 100%;\r\n\tmargin-top: 1rem;\r\n\r\n\t&__title {\r\n\t\tfont-size: 1.5rem;\r\n\t\tfont-weight: 600;\r\n\t\tmargin: 0 0 1rem;\r\n\t\tcolor: var(--color-dark);\r\n\t}\r\n\r\n\t&__grid {\r\n\t\tdisplay: grid;\r\n\t\tgrid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));\r\n\t\tgap: 1.5rem;\r\n\t\twidth: 100%;\r\n\t}\r\n\r\n\t.products-empty {\r\n\t\ttext-align: center;\r\n\t\tcolor: #666;\r\n\t\tfont-size: 1.1rem;\r\n\t\tpadding: 32px 0;\r\n\t}\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"storeProducts": `ProductsBatch-module__store-products--vV0mm`,
	"storeProducts__title": `ProductsBatch-module__store-products__title--H812T`,
	"storeProducts__grid": `ProductsBatch-module__store-products__grid--h0CCS`,
	"productsEmpty": `ProductsBatch-module__products-empty--rV9LL`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Search/Search.module.scss":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Search/Search.module.scss ***!
  \***********************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.Search-module__search-bar--EsDRO {
  display: flex;
  align-items: center;
  border: 0.1rem solid var(--color-accent);
  border-radius: var(--border-radius-large);
  background-color: var(--color-light);
  height: 2.4rem;
}
.Search-module__search-bar__icon--dHhT5 {
  width: 1rem;
  height: 1rem;
  margin: 1rem;
}
.Search-module__search-bar__input--naWeI {
  border: none;
  outline: none;
  width: 20rem;
  text-align: left;
  background-color: transparent;
  padding: 0.5rem 0;
}
.Search-module__search-bar--EsDRO:hover {
  border-color: var(--color-accent-hover);
}`, "",{"version":3,"sources":["webpack://./src/components/Search/Search.module.scss"],"names":[],"mappings":"AAAA;EACC,aAAA;EACA,mBAAA;EACA,wCAAA;EACA,yCAAA;EACA,oCAAA;EACA,cAAA;AACD;AAEC;EACC,WAAA;EACA,YAAA;EACA,YAAA;AAAF;AAGC;EACC,YAAA;EACA,aAAA;EACA,YAAA;EACA,gBAAA;EACA,6BAAA;EACA,iBAAA;AADF;AAIC;EACC,uCAAA;AAFF","sourcesContent":[".search-bar {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tborder: 0.1rem solid var(--color-accent);\r\n\tborder-radius: var(--border-radius-large);\r\n\tbackground-color: var(--color-light);\r\n\theight: 2.4rem;\r\n\r\n\t\r\n\t&__icon {\r\n\t\twidth: 1rem;\r\n\t\theight: 1rem;\r\n\t\tmargin: 1rem;\r\n\t}\r\n\r\n\t&__input {\r\n\t\tborder: none;\r\n\t\toutline: none;\r\n\t\twidth: 20rem;\r\n\t\ttext-align: left;\r\n\t\tbackground-color: transparent;\r\n\t\tpadding: 0.5rem 0;\r\n\t}\r\n\r\n\t&:hover {\r\n\t\tborder-color: var(--color-accent-hover);\r\n\t}\r\n\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"searchBar": `Search-module__search-bar--EsDRO`,
	"searchBar__icon": `Search-module__search-bar__icon--dHhT5`,
	"searchBar__input": `Search-module__search-bar__input--naWeI`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Selector/Selector.module.scss":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Selector/Selector.module.scss ***!
  \***************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.Selector-module__city-selector--uZvWx {
  position: relative;
  width: 11rem;
}
.Selector-module__city-selector__trigger--VhqyB {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border-radius: var(--border-radius-medium);
  background: var(--color-light);
  cursor: pointer;
  transition: background-color 0.2s ease;
}
.Selector-module__city-selector__trigger--VhqyB:hover {
  background: var(--color-background-accent);
}
.Selector-module__city-selector__icon--_PqC6 {
  width: 1.25rem;
  height: 1.25rem;
  object-fit: contain;
  flex-shrink: 0;
}
.Selector-module__city-selector__value--jKN4s {
  flex: 1;
  min-width: 0;
  font-size: 0.875rem;
  color: var(--color-text);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.Selector-module__city-selector__arrow--lV0Ug {
  width: 0.5rem;
  height: 0.5rem;
  border-right: 2px solid var(--color-accent);
  border-bottom: 2px solid var(--color-accent);
  transform: rotate(45deg);
  flex-shrink: 0;
  transition: transform 0.2s ease;
}
.Selector-module__city-selector__dropdown--IarjY {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: var(--color-light);
  border: 1px solid var(--color-input-stroke);
  border-radius: var(--border-radius-medium);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  margin-top: 0.25rem;
}
.Selector-module__city-selector__search--ev_lN {
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: none;
  border-bottom: 1px solid var(--color-input-stroke);
  outline: none;
  font-size: 0.875rem;
  background: transparent;
}
.Selector-module__city-selector__search--ev_lN:focus {
  border-bottom-color: var(--color-primary);
}
.Selector-module__city-selector__list--zXaHr {
  max-height: 12.5rem;
  overflow-y: auto;
}
.Selector-module__city-selector__option--PfoYA {
  padding: 0.625rem 0.75rem;
  cursor: pointer;
  font-size: 0.875rem;
  color: var(--color-text);
  border-radius: var(--border-radius-medium);
  transition: background-color 0.2s ease;
}
.Selector-module__city-selector__option--PfoYA:hover {
  background-color: var(--color-background-accent);
}
.Selector-module__city-selector__empty--c3rZ0 {
  padding: 0.625rem 0.75rem;
  color: var(--color-gray);
  font-size: 0.875rem;
  text-align: center;
}`, "",{"version":3,"sources":["webpack://./src/components/Selector/Selector.module.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;EACA,YAAA;AACJ;AACI;EACI,aAAA;EACA,mBAAA;EACA,WAAA;EACA,uBAAA;EACA,0CAAA;EACA,8BAAA;EACA,eAAA;EACA,sCAAA;AACR;AACQ;EACI,0CAAA;AACZ;AAGI;EACI,cAAA;EACA,eAAA;EACA,mBAAA;EACA,cAAA;AADR;AAII;EACI,OAAA;EACA,YAAA;EACA,mBAAA;EACA,wBAAA;EACA,mBAAA;EACA,gBAAA;EACA,uBAAA;AAFR;AAKI;EACI,aAAA;EACA,cAAA;EACA,2CAAA;EACA,4CAAA;EACA,wBAAA;EACA,cAAA;EACA,+BAAA;AAHR;AAMI;EACI,kBAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,8BAAA;EACA,2CAAA;EACA,0CAAA;EACA,yCAAA;EACA,aAAA;EACA,mBAAA;AAJR;AAOI;EACI,WAAA;EACA,uBAAA;EACA,YAAA;EACA,kDAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AALR;AAOQ;EACI,yCAAA;AALZ;AASI;EACI,mBAAA;EACA,gBAAA;AAPR;AAUI;EACI,yBAAA;EACA,eAAA;EACA,mBAAA;EACA,wBAAA;EACA,0CAAA;EACA,sCAAA;AARR;AAUQ;EACI,gDAAA;AARZ;AAYI;EACI,yBAAA;EACA,wBAAA;EACA,mBAAA;EACA,kBAAA;AAVR","sourcesContent":[".city-selector {\r\n    position: relative;\r\n    width: 11rem;\r\n\r\n    &__trigger {\r\n        display: flex;\r\n        align-items: center;\r\n        gap: 0.5rem;\r\n        padding: 0.5rem 0.75rem;\r\n        border-radius: var(--border-radius-medium);\r\n        background: var(--color-light);\r\n        cursor: pointer;\r\n        transition: background-color 0.2s ease;\r\n\r\n        &:hover {\r\n            background: var(--color-background-accent);\r\n        }\r\n    }\r\n\r\n    &__icon {\r\n        width: 1.25rem;\r\n        height: 1.25rem;\r\n        object-fit: contain;\r\n        flex-shrink: 0;\r\n    }\r\n\r\n    &__value {\r\n        flex: 1;\r\n        min-width: 0;\r\n        font-size: 0.875rem;\r\n        color: var(--color-text);\r\n        white-space: nowrap;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n    }\r\n\r\n    &__arrow {\r\n        width: 0.5rem;\r\n        height: 0.5rem;\r\n        border-right: 2px solid var(--color-accent);\r\n        border-bottom: 2px solid var(--color-accent);\r\n        transform: rotate(45deg);\r\n        flex-shrink: 0;\r\n        transition: transform 0.2s ease;\r\n    }\r\n\r\n    &__dropdown {\r\n        position: absolute;\r\n        top: 100%;\r\n        left: 0;\r\n        right: 0;\r\n        background: var(--color-light);\r\n        border: 1px solid var(--color-input-stroke);\r\n        border-radius: var(--border-radius-medium);\r\n        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\r\n        z-index: 1000;\r\n        margin-top: 0.25rem;\r\n    }\r\n\r\n    &__search {\r\n        width: 100%;\r\n        padding: 0.5rem 0.75rem;\r\n        border: none;\r\n        border-bottom: 1px solid var(--color-input-stroke);\r\n        outline: none;\r\n        font-size: 0.875rem;\r\n        background: transparent;\r\n\r\n        &:focus {\r\n            border-bottom-color: var(--color-primary);\r\n        }\r\n    }\r\n\r\n    &__list {\r\n        max-height: 12.5rem;\r\n        overflow-y: auto;\r\n    }\r\n\r\n    &__option {\r\n        padding: 0.625rem 0.75rem;\r\n        cursor: pointer;\r\n        font-size: 0.875rem;\r\n        color: var(--color-text);\r\n        border-radius: var(--border-radius-medium);\r\n        transition: background-color 0.2s ease;\r\n\r\n        &:hover {\r\n            background-color: var(--color-background-accent);\r\n        }\r\n    }\r\n\r\n    &__empty {\r\n        padding: 0.625rem 0.75rem;\r\n        color: var(--color-gray);\r\n        font-size: 0.875rem;\r\n        text-align: center;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"citySelector": `Selector-module__city-selector--uZvWx`,
	"citySelector__trigger": `Selector-module__city-selector__trigger--VhqyB`,
	"citySelector__icon": `Selector-module__city-selector__icon--_PqC6`,
	"citySelector__value": `Selector-module__city-selector__value--jKN4s`,
	"citySelector__arrow": `Selector-module__city-selector__arrow--lV0Ug`,
	"citySelector__dropdown": `Selector-module__city-selector__dropdown--IarjY`,
	"citySelector__search": `Selector-module__city-selector__search--ev_lN`,
	"citySelector__list": `Selector-module__city-selector__list--zXaHr`,
	"citySelector__option": `Selector-module__city-selector__option--PfoYA`,
	"citySelector__empty": `Selector-module__city-selector__empty--c3rZ0`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/StoreInfo/StoreInfo.module.scss":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/StoreInfo/StoreInfo.module.scss ***!
  \*****************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.StoreInfo-module__store-info--miUdD {
  position: relative;
  width: 100%;
  height: 20rem;
  background: var(--color-light);
  border-radius: var(--border-radius-large);
  box-shadow: var(--shadow);
  overflow: hidden;
}
.StoreInfo-module__store-info__image-wrapper--aH1y6 {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.StoreInfo-module__store-info__image--UpN6X {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.StoreInfo-module__store-info--primary--HVgpA {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  color: var(--color-light);
  background: rgba(0, 0, 0, 0.6);
  padding: 0.5rem 1.5rem;
  border-radius: var(--border-radius-small);
}
.StoreInfo-module__store-info__title--TEFRJ {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.2;
  display: inline;
}
.StoreInfo-module__store-info__rating--jzQgJ {
  font-size: 1.1rem;
  font-weight: 600;
  display: inline;
  margin-left: 0.5rem;
}
.StoreInfo-module__store-info--secondary--LuUwW {
  position: absolute;
  bottom: 1.5rem;
  left: 1.5rem;
  color: var(--color-light);
  background: rgba(0, 0, 0, 0.6);
  padding: 0.5rem 1.5rem;
  border-radius: var(--border-radius-small);
  max-width: 80%;
}
.StoreInfo-module__store-info__detail--caIcX {
  font-size: 0.95rem;
  line-height: 1.4;
  margin: 0.25rem 0;
}
.StoreInfo-module__store-info__detailstrong--p1WZu {
  color: var(--color-light);
  font-weight: 600;
}`, "",{"version":3,"sources":["webpack://./src/components/StoreInfo/StoreInfo.module.scss"],"names":[],"mappings":"AAAA;EACC,kBAAA;EACA,WAAA;EACA,aAAA;EACA,8BAAA;EACA,yCAAA;EACA,yBAAA;EACA,gBAAA;AACD;AACC;EACC,kBAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;AACF;AAEC;EACC,WAAA;EACA,YAAA;EACA,iBAAA;EACA,cAAA;AAAF;AAGC;EACC,kBAAA;EACA,WAAA;EACA,YAAA;EACA,yBAAA;EACA,8BAAA;EACA,sBAAA;EACA,yCAAA;AADF;AAIC;EACC,SAAA;EACA,iBAAA;EACA,gBAAA;EACA,gBAAA;EACA,eAAA;AAFF;AAKC;EACC,iBAAA;EACA,gBAAA;EACA,eAAA;EACA,mBAAA;AAHF;AAMC;EACC,kBAAA;EACA,cAAA;EACA,YAAA;EACA,yBAAA;EACA,8BAAA;EACA,sBAAA;EACA,yCAAA;EACA,cAAA;AAJF;AAOC;EACC,kBAAA;EACA,gBAAA;EACA,iBAAA;AALF;AAOE;EACA,yBAAA;EACA,gBAAA;AALF","sourcesContent":[".store-info {\r\n\tposition: relative;\r\n\twidth: 100%;\r\n\theight: 20rem;\r\n\tbackground: var(--color-light);\r\n\tborder-radius: var(--border-radius-large);\r\n\tbox-shadow: var(--shadow);\r\n\toverflow: hidden;\r\n\r\n\t&__image-wrapper {\r\n\t\tposition: relative;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\toverflow: hidden;\r\n\t}\r\n\r\n\t&__image {\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\tobject-fit: cover;\r\n\t\tdisplay: block;\r\n\t}\r\n\r\n\t&--primary {\r\n\t\tposition: absolute;\r\n\t\ttop: 1.5rem;\r\n\t\tleft: 1.5rem;\r\n\t\tcolor: var(--color-light);\r\n\t\tbackground: rgba(0, 0, 0, 0.6);\r\n\t\tpadding: 0.5rem 1.5rem;\r\n\t\tborder-radius: var(--border-radius-small);\r\n\t}\r\n\r\n\t&__title {\r\n\t\tmargin: 0;\r\n\t\tfont-size: 1.5rem;\r\n\t\tfont-weight: 700;\r\n\t\tline-height: 1.2;\r\n\t\tdisplay: inline;\r\n\t}\r\n\r\n\t&__rating {\r\n\t\tfont-size: 1.1rem;\r\n\t\tfont-weight: 600;\r\n\t\tdisplay: inline;\r\n\t\tmargin-left: 0.5rem;\r\n\t}\r\n\r\n\t&--secondary {\r\n\t\tposition: absolute;\r\n\t\tbottom: 1.5rem;\r\n\t\tleft: 1.5rem;\r\n\t\tcolor: var(--color-light);\r\n\t\tbackground: rgba(0, 0, 0, 0.6);\r\n\t\tpadding: 0.5rem 1.5rem;\r\n\t\tborder-radius: var(--border-radius-small);\r\n\t\tmax-width: 80%;\r\n\t}\r\n\r\n\t&__detail {\r\n\t\tfont-size: 0.95rem;\r\n\t\tline-height: 1.4;\r\n\t\tmargin: 0.25rem 0;\r\n\r\n\t\t&strong {\r\n\t\tcolor: var(--color-light);\r\n\t\tfont-weight: 600;\r\n\t}\r\n\r\n\t}\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"storeInfo": `StoreInfo-module__store-info--miUdD`,
	"storeInfo__imageWrapper": `StoreInfo-module__store-info__image-wrapper--aH1y6`,
	"storeInfo__image": `StoreInfo-module__store-info__image--UpN6X`,
	"storeInfoPrimary": `StoreInfo-module__store-info--primary--HVgpA`,
	"storeInfo__title": `StoreInfo-module__store-info__title--TEFRJ`,
	"storeInfo__rating": `StoreInfo-module__store-info__rating--jzQgJ`,
	"storeInfoSecondary": `StoreInfo-module__store-info--secondary--LuUwW`,
	"storeInfo__detail": `StoreInfo-module__store-info__detail--caIcX`,
	"storeInfo__detailstrong": `StoreInfo-module__store-info__detailstrong--p1WZu`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/SupportWidget/SupportWidget.module.scss":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/SupportWidget/SupportWidget.module.scss ***!
  \*************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.SupportWidget-module__support--S_JX9 {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 10000;
}

.SupportWidget-module__supportToggle--XFxrY {
  background: #007bff;
  color: white;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 123, 255, 0.3);
}

.SupportWidget-module__supportWindow--SiHe9 {
  position: absolute;
  bottom: 70px;
  right: 0;
  width: 400px;
  height: 600px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
}`, "",{"version":3,"sources":["webpack://./src/components/SupportWidget/SupportWidget.module.scss"],"names":[],"mappings":"AAAA;EACE,eAAA;EACA,YAAA;EACA,WAAA;EACA,cAAA;AACF;;AAEA;EACE,mBAAA;EACA,YAAA;EACA,YAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;EACA,eAAA;EACA,6CAAA;AACF;;AAEA;EACE,kBAAA;EACA,YAAA;EACA,QAAA;EACA,YAAA;EACA,aAAA;EACA,iBAAA;EACA,kBAAA;EACA,yCAAA;AACF","sourcesContent":[".support {\r\n  position: fixed;\r\n  bottom: 20px;\r\n  right: 20px;\r\n  z-index: 10000;\r\n}\r\n\r\n.supportToggle {\r\n  background: #007bff;\r\n  color: white;\r\n  border: none;\r\n  border-radius: 50%;\r\n  width: 60px;\r\n  height: 60px;\r\n  font-size: 24px;\r\n  cursor: pointer;\r\n  box-shadow: 0 2px 10px rgba(0,123,255,0.3);\r\n}\r\n\r\n.supportWindow {\r\n  position: absolute;\r\n  bottom: 70px;\r\n  right: 0;\r\n  width: 400px;\r\n  height: 600px;\r\n  background: white;\r\n  border-radius: 8px;\r\n  box-shadow: 0 5px 20px rgba(0,0,0,0.2);\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"support": `SupportWidget-module__support--S_JX9`,
	"supportToggle": `SupportWidget-module__supportToggle--XFxrY`,
	"supportWindow": `SupportWidget-module__supportWindow--SiHe9`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/CheckoutPage/CheckoutPage.module.scss":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/CheckoutPage/CheckoutPage.module.scss ***!
  \******************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.CheckoutPage-module__checkoutPage--OxAkx {
  display: flex;
  flex-direction: column;
}
.CheckoutPage-module__checkoutPage__container--kUpqd {
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin: 1.5rem auto;
  justify-content: center;
}
.CheckoutPage-module__checkoutPage__form--J19gH {
  display: flex;
  width: fit-content;
  margin: 0 auto;
  box-sizing: border-box;
  flex-wrap: wrap;
  justify-content: center;
}
.CheckoutPage-module__checkoutPage__conditional--d5Krf {
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
}
.CheckoutPage-module__checkoutPage__order--DWDPu {
  display: flex;
  flex-direction: column;
}
.CheckoutPage-module__checkoutPage__order-card--vyP7U {
  border-radius: 20px;
  padding: 0 1.25rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.CheckoutPage-module__checkoutPage__order-title--UCyWx {
  margin: 0 0 1rem;
  font-size: 1.25rem;
}
.CheckoutPage-module__checkoutPage__cart-body--iCbNe {
  flex: 1;
  min-height: 0;
  max-height: 20rem;
  overflow-y: auto;
}`, "",{"version":3,"sources":["webpack://./src/pages/CheckoutPage/CheckoutPage.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,sBAAA;AACJ;AACI;EACI,aAAA;EACA,sBAAA;EACA,kBAAA;EACA,mBAAA;EACA,uBAAA;AACR;AAEI;EACI,aAAA;EACA,kBAAA;EACA,cAAA;EACA,sBAAA;EACA,eAAA;EACA,uBAAA;AAAR;AAGI;EACI,aAAA;EACA,SAAA;EACA,cAAA;AADR;AAII;EACI,aAAA;EACA,sBAAA;AAFR;AAKI;EACI,mBAAA;EACA,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,OAAA;AAHR;AAMI;EACI,gBAAA;EACA,kBAAA;AAJR;AAOI;EACI,OAAA;EACA,aAAA;EACA,iBAAA;EACA,gBAAA;AALR","sourcesContent":[".checkoutPage {\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n    &__container {\r\n        display: flex;\r\n        flex-direction: column;\r\n        width: fit-content;\r\n        margin: 1.5rem auto;\r\n        justify-content: center;\r\n        }\r\n\r\n    &__form {\r\n        display: flex;\r\n        width: fit-content;\r\n        margin: 0 auto;\r\n        box-sizing: border-box;\r\n        flex-wrap: wrap;\r\n        justify-content: center;\r\n        }\r\n\r\n    &__conditional {\r\n        display: flex;\r\n        gap: 1rem;\r\n        margin: 1rem 0;\r\n        }\r\n\r\n    &__order {\r\n        display: flex;\r\n        flex-direction: column;\r\n        }\r\n\r\n    &__order-card {\r\n        border-radius: 20px;\r\n        padding: 0 1.25rem;\r\n        display: flex;\r\n        flex-direction: column;\r\n        flex: 1;\r\n        }\r\n\r\n    &__order-title {\r\n        margin: 0 0 1rem;\r\n        font-size: 1.25rem;\r\n        }\r\n\r\n    &__cart-body {\r\n        flex: 1;\r\n        min-height: 0;\r\n        max-height: 20rem;\r\n        overflow-y: auto;\r\n        }\r\n\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"checkoutPage": `CheckoutPage-module__checkoutPage--OxAkx`,
	"checkoutPage__container": `CheckoutPage-module__checkoutPage__container--kUpqd`,
	"checkoutPage__form": `CheckoutPage-module__checkoutPage__form--J19gH`,
	"checkoutPage__conditional": `CheckoutPage-module__checkoutPage__conditional--d5Krf`,
	"checkoutPage__order": `CheckoutPage-module__checkoutPage__order--DWDPu`,
	"checkoutPage__orderCard": `CheckoutPage-module__checkoutPage__order-card--vyP7U`,
	"checkoutPage__orderTitle": `CheckoutPage-module__checkoutPage__order-title--UCyWx`,
	"checkoutPage__cartBody": `CheckoutPage-module__checkoutPage__cart-body--iCbNe`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/LoginPage/LoginPage.module.scss":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/LoginPage/LoginPage.module.scss ***!
  \************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.LoginPage-module__main-page__container--U88Q0 {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  min-height: 80vh;
  padding: 2rem;
  box-sizing: border-box;
}`, "",{"version":3,"sources":["webpack://./src/pages/LoginPage/LoginPage.module.scss"],"names":[],"mappings":"AACI;EACI,aAAA;EACA,eAAA;EACA,uBAAA;EACA,WAAA;EACA,gBAAA;EACA,aAAA;EACA,sBAAA;AAAR","sourcesContent":[".main-page {\r\n    &__container {\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        justify-content: center;\r\n        width: 100%;\r\n        min-height: 80vh;\r\n        padding: 2rem;\r\n        box-sizing: border-box;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"mainPage__container": `LoginPage-module__main-page__container--U88Q0`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/MainPage/MainPage.module.scss":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/MainPage/MainPage.module.scss ***!
  \**********************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.MainPage-module__main-page--HwW5Q {
  display: flex;
  flex-direction: column;
}
.MainPage-module__main-page__container--Yjh32 {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 90%;
  min-height: 80vh;
  padding: 2rem;
  box-sizing: border-box;
  margin: 0 auto;
}`, "",{"version":3,"sources":["webpack://./src/pages/MainPage/MainPage.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,sBAAA;AACJ;AACI;EACI,mBAAA;EACA,aAAA;EACA,eAAA;EACA,uBAAA;EACA,UAAA;EACA,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,cAAA;AACR","sourcesContent":[".main-page {\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n    &__container {\r\n        align-items: center;\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        justify-content: center;\r\n        width: 90%;\r\n        min-height: 80vh;\r\n        padding: 2rem;\r\n        box-sizing: border-box;\r\n        margin: 0 auto;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"mainPage": `MainPage-module__main-page--HwW5Q`,
	"mainPage__container": `MainPage-module__main-page__container--Yjh32`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ProfilePage/ProfilePage.module.scss":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ProfilePage/ProfilePage.module.scss ***!
  \****************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.ProfilePage-module__profile-page--v0LCq {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.ProfilePage-module__profile-page__container--njvCv {
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin: 1.5rem auto;
  justify-content: center;
  gap: 1rem;
  flex: 1;
}
.ProfilePage-module__profile-page__content--CsiUB {
  display: flex;
  width: 100%;
  width: fit-content;
  margin: 0 auto;
  box-sizing: border-box;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}
.ProfilePage-module__profile-page__loading--oB0z2 {
  text-align: center;
  padding: 2rem;
}
.ProfilePage-module__profile-page__form-section--JiFoG {
  min-width: 400px;
}
.ProfilePage-module__profile-page__title--Q57ZP {
  margin-bottom: 0.75rem;
}
.ProfilePage-module__profile-page__sidebar--EjITp {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  min-width: 300px;
}
.ProfilePage-module__profile-page__avatar-section--s_bsK, .ProfilePage-module__profile-page__password-section--JLF0e {
  margin-bottom: 1.5rem;
}
.ProfilePage-module__profile-page__buttons--aC8c9 {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}`, "",{"version":3,"sources":["webpack://./src/pages/ProfilePage/ProfilePage.module.scss"],"names":[],"mappings":"AAAA;EACE,iBAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;AACF;AACE;EACE,aAAA;EACA,sBAAA;EACA,kBAAA;EACA,mBAAA;EACA,uBAAA;EACA,SAAA;EACA,OAAA;AACJ;AAEE;EACE,aAAA;EACA,WAAA;EACA,kBAAA;EACA,cAAA;EACA,sBAAA;EACA,eAAA;EACA,uBAAA;EACA,SAAA;AAAJ;AAGE;EACE,kBAAA;EACA,aAAA;AADJ;AAIE;EACE,gBAAA;AAFJ;AAKE;EACE,sBAAA;AAHJ;AAME;EACE,aAAA;EACA,sBAAA;EACA,YAAA;EACA,gBAAA;AAJJ;AAOE;EAEE,qBAAA;AANJ;AASE;EACE,aAAA;EACA,sBAAA;EACA,YAAA;EACA,WAAA;EACA,gBAAA;EACA,cAAA;AAPJ","sourcesContent":[".profile-page {\r\n  min-height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n\r\n  &__container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: fit-content;\r\n    margin: 1.5rem auto;\r\n    justify-content: center;\r\n    gap: 1rem;\r\n    flex: 1;\r\n  }\r\n\r\n  &__content {\r\n    display: flex;\r\n    width: 100%;\r\n    width: fit-content;\r\n    margin: 0 auto;\r\n    box-sizing: border-box;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    gap: 2rem;\r\n  }\r\n\r\n  &__loading {\r\n    text-align: center;\r\n    padding: 2rem;\r\n  }\r\n\r\n  &__form-section {\r\n    min-width: 400px;\r\n  }\r\n\r\n  &__title {\r\n    margin-bottom: 0.75rem;\r\n  }\r\n\r\n  &__sidebar {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.75rem;\r\n    min-width: 300px;\r\n  }\r\n\r\n  &__avatar-section,\r\n  &__password-section {\r\n    margin-bottom: 1.5rem;\r\n  }\r\n\r\n  &__buttons {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.75rem;\r\n    width: 100%;\r\n    max-width: 400px;\r\n    margin: 0 auto;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"profilePage": `ProfilePage-module__profile-page--v0LCq`,
	"profilePage__container": `ProfilePage-module__profile-page__container--njvCv`,
	"profilePage__content": `ProfilePage-module__profile-page__content--CsiUB`,
	"profilePage__loading": `ProfilePage-module__profile-page__loading--oB0z2`,
	"profilePage__formSection": `ProfilePage-module__profile-page__form-section--JiFoG`,
	"profilePage__title": `ProfilePage-module__profile-page__title--Q57ZP`,
	"profilePage__sidebar": `ProfilePage-module__profile-page__sidebar--EjITp`,
	"profilePage__avatarSection": `ProfilePage-module__profile-page__avatar-section--s_bsK`,
	"profilePage__passwordSection": `ProfilePage-module__profile-page__password-section--JLF0e`,
	"profilePage__buttons": `ProfilePage-module__profile-page__buttons--aC8c9`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/StorePage/StorePage.module.scss":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/StorePage/StorePage.module.scss ***!
  \************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.StorePage-module__store-page__container--snCDQ {
  width: 90%;
  min-height: 80vh;
  padding: 2rem;
  box-sizing: border-box;
  margin: 0 auto;
  gap: 1.5rem;
}`, "",{"version":3,"sources":["webpack://./src/pages/StorePage/StorePage.module.scss"],"names":[],"mappings":"AAEI;EACI,UAAA;EACA,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,cAAA;EACA,WAAA;AADR","sourcesContent":[".store-page {\r\n\r\n    &__container {\r\n        width: 90%;\r\n        min-height: 80vh;\r\n        padding: 2rem;\r\n        box-sizing: border-box;\r\n        margin: 0 auto;\r\n        gap: 1.5rem;\r\n    }\r\n}   "],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"storePage__container": `StorePage-module__store-page__container--snCDQ`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/AvatarForm/AvatarForm.module.scss":
/*!**********************************************************!*\
  !*** ./src/components/AvatarForm/AvatarForm.module.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_AvatarForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./AvatarForm.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/AvatarForm/AvatarForm.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_AvatarForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_AvatarForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_AvatarForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_AvatarForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/AvatarForm/AvatarForm.tsx":
/*!**************************************************!*\
  !*** ./src/components/AvatarForm/AvatarForm.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AvatarForm: () => (/* binding */ AvatarForm)
/* harmony export */ });
/* harmony import */ var _antiquemouse_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @antiquemouse/framework */ "./node_modules/@antiquemouse/framework/dist/index.js");
/* harmony import */ var _modules_authManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/authManager */ "./src/modules/authManager.ts");
/* harmony import */ var _modules_profileApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/profileApi */ "./src/modules/profileApi.ts");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Button/Button */ "./src/components/Button/Button.tsx");
/* harmony import */ var _AvatarForm_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AvatarForm.module.scss */ "./src/components/AvatarForm/AvatarForm.module.scss");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }





var IMAGE_SIZE = 10 * 1024 * 1024;
var AvatarForm = (0,_antiquemouse_framework__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  state: function state() {
    return {
      selectedFile: null,
      previewUrl: '',
      error: '',
      isSubmitting: false,
      currentAvatar: '',
      _isMounted: false,
      avatarVersion: 0
    };
  },
  onMounted: function onMounted() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _this.updateState({
              _isMounted: true
            });
            _context.n = 1;
            return _this.loadUserProfile();
          case 1:
            return _context.a(2);
        }
      }, _callee);
    }))();
  },
  onUnmounted: function onUnmounted() {
    if (this.state.previewUrl) {
      URL.revokeObjectURL(this.state.previewUrl);
    }
    this.state._isMounted = false;
  },
  loadUserProfile: function loadUserProfile() {
    var _this2 = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var user, response, avatarUrl, _t;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            user = _modules_authManager__WEBPACK_IMPORTED_MODULE_1__.authManager.getUser();
            if (user) {
              _context2.n = 1;
              break;
            }
            return _context2.a(2);
          case 1:
            _context2.p = 1;
            _context2.n = 2;
            return _modules_profileApi__WEBPACK_IMPORTED_MODULE_2__.profileApi.getProfile('me');
          case 2:
            response = _context2.v;
            if (_this2.state._isMounted) {
              _context2.n = 3;
              break;
            }
            return _context2.a(2);
          case 3:
            if (response.service.success && response.body.avatar_url) {
              avatarUrl = response.body.avatar_url;
              if (avatarUrl.includes('localhost:8081')) {
                avatarUrl = avatarUrl.replace('localhost:8081', '90.156.218.233:8081');
              }
              _this2.updateState({
                currentAvatar: avatarUrl,
                avatarVersion: _this2.state.avatarVersion + 1
              });
            }
            _context2.n = 5;
            break;
          case 4:
            _context2.p = 4;
            _t = _context2.v;
            if (_this2.state._isMounted) {
              _this2.updateState({
                error: 'Не удалось загрузить профиль'
              });
            }
          case 5:
            return _context2.a(2);
        }
      }, _callee2, null, [[1, 4]]);
    }))();
  },
  handleFileChange: function handleFileChange(e) {
    var _files;
    var file = (_files = e.target.files) === null || _files === void 0 ? void 0 : _files[0];
    if (!file) {
      this.updateState({
        selectedFile: null,
        previewUrl: '',
        error: ''
      });
      return;
    }
    if (file.size > IMAGE_SIZE) {
      this.updateState({
        error: 'Размер файла не должен превышать 10MB',
        selectedFile: null,
        previewUrl: ''
      });
      return;
    }
    if (!file.type.startsWith('image/')) {
      this.updateState({
        error: 'Выберите файл изображения',
        selectedFile: null,
        previewUrl: ''
      });
      return;
    }
    if (this.state.previewUrl) {
      URL.revokeObjectURL(this.state.previewUrl);
    }
    var previewUrl = URL.createObjectURL(file);
    this.updateState({
      selectedFile: file,
      previewUrl: previewUrl,
      error: ''
    });
  },
  handleSubmit: function handleSubmit(e) {
    var _this3 = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
      var selectedFile, user, uploadResponse, avatarUrl, _t2;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            e.preventDefault();
            selectedFile = _this3.state.selectedFile;
            if (selectedFile) {
              _context3.n = 1;
              break;
            }
            _this3.updateState({
              error: 'Выберите файл'
            });
            return _context3.a(2);
          case 1:
            user = _modules_authManager__WEBPACK_IMPORTED_MODULE_1__.authManager.getUser();
            if (user) {
              _context3.n = 2;
              break;
            }
            _this3.updateState({
              error: 'Пользователь не авторизован'
            });
            return _context3.a(2);
          case 2:
            _this3.updateState({
              isSubmitting: true,
              error: ''
            });
            _context3.p = 3;
            _context3.n = 4;
            return _modules_profileApi__WEBPACK_IMPORTED_MODULE_2__.profileApi.uploadAvatar('me', selectedFile);
          case 4:
            uploadResponse = _context3.v;
            if (_this3.state._isMounted) {
              _context3.n = 5;
              break;
            }
            return _context3.a(2);
          case 5:
            if (uploadResponse.service.success && uploadResponse.body.avatar_url) {
              avatarUrl = uploadResponse.body.avatar_url;
              if (avatarUrl.includes('localhost:8081')) {
                avatarUrl = avatarUrl.replace('localhost:8081', '90.156.218.233:8081');
              }
              avatarUrl = avatarUrl.replace('90.156.218.233:8081', '90.156.218.233:8081/api/v0');
              _this3.updateState({
                currentAvatar: avatarUrl,
                avatarVersion: _this3.state.avatarVersion + 1,
                selectedFile: null,
                previewUrl: ''
              });
            } else {
              _this3.updateState({
                error: uploadResponse.service.error || 'Не удалось загрузить аватар'
              });
            }
            _context3.n = 7;
            break;
          case 6:
            _context3.p = 6;
            _t2 = _context3.v;
            if (_this3.state._isMounted) {
              _this3.updateState({
                error: 'Произошла ошибка при загрузке аватара'
              });
            }
          case 7:
            _context3.p = 7;
            if (_this3.state._isMounted) {
              _this3.updateState({
                isSubmitting: false
              });
            }
            return _context3.f(7);
          case 8:
            return _context3.a(2);
        }
      }, _callee3, null, [[3, 6, 7, 8]]);
    }))();
  },
  render: function render() {
    var _this4 = this;
    var _this$state = this.state,
      selectedFile = _this$state.selectedFile,
      previewUrl = _this$state.previewUrl,
      error = _this$state.error,
      isSubmitting = _this$state.isSubmitting,
      currentAvatar = _this$state.currentAvatar,
      avatarVersion = _this$state.avatarVersion;
    var getAvatarUrl = function getAvatarUrl() {
      if (!currentAvatar) return '';
      var separator = currentAvatar.includes('?') ? '&' : '?';
      return "".concat(currentAvatar).concat(separator, "t=").concat(Date.now(), "&v=").concat(avatarVersion);
    };
    var avatarUrl = getAvatarUrl();
    return h("form", {
      class: _AvatarForm_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].avatar,
      on: {
        submit: function submit(e) {
          return _this4.handleSubmit(e);
        }
      }
    }, h("label", {
      class: _AvatarForm_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].avatar__preview
    }, h("input", {
      type: "file",
      accept: "image/*",
      on: {
        change: function change(e) {
          return _this4.handleFileChange(e);
        }
      },
      disabled: isSubmitting,
      class: _AvatarForm_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].avatar__input
    }), previewUrl ? h("img", {
      src: previewUrl,
      alt: "\u041F\u0440\u0435\u0434\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u0430\u0432\u0430\u0442\u0430\u0440\u0430",
      class: _AvatarForm_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].avatar__image,
      key: "preview-".concat(previewUrl)
    }) : currentAvatar ? h("img", {
      src: avatarUrl,
      alt: "\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u0430\u0432\u0430\u0442\u0430\u0440",
      class: _AvatarForm_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].avatar__image,
      key: "avatar-".concat(avatarVersion),
      onError: function onError(e) {
        var target = e.currentTarget;
        target.style.display = 'none';
      }
    }) : h("div", {
      class: _AvatarForm_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].avatar__placeholder
    }, h("span", {
      class: _AvatarForm_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].avatar__imageIcon
    }, "+"), h("div", null, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0444\u043E\u0442\u043E"))), error && h("div", {
      class: _AvatarForm_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].avatar__error
    }, error), selectedFile && h("div", {
      class: _AvatarForm_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].avatar__actions
    }, h(_Button_Button__WEBPACK_IMPORTED_MODULE_3__.Button, {
      type: "submit",
      variant: "accent",
      text: isSubmitting ? 'Загрузка...' : 'Сохранить',
      disabled: isSubmitting
    }), h(_Button_Button__WEBPACK_IMPORTED_MODULE_3__.Button, {
      type: "button",
      variant: "error",
      text: "\u041E\u0442\u043C\u0435\u043D\u0430",
      disabled: isSubmitting,
      onClick: function onClick() {
        if (_this4.state.previewUrl) {
          URL.revokeObjectURL(_this4.state.previewUrl);
        }
        _this4.updateState({
          selectedFile: null,
          previewUrl: '',
          error: ''
        });
      }
    })));
  }
});

/***/ }),

/***/ "./src/components/Batch/Batch.module.scss":
/*!************************************************!*\
  !*** ./src/components/Batch/Batch.module.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Batch_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./Batch.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Batch/Batch.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Batch_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Batch_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Batch_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Batch_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Batch/Batch.tsx":
/*!****************************************!*\
  !*** ./src/components/Batch/Batch.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Batch: () => (/* binding */ Batch)
/* harmony export */ });
/* harmony import */ var _antiquemouse_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @antiquemouse/framework */ "./node_modules/@antiquemouse/framework/dist/index.js");
/* harmony import */ var _modules_storeApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/storeApi */ "./src/modules/storeApi.ts");
/* harmony import */ var _Card_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Card/Card */ "./src/components/Card/Card.tsx");
/* harmony import */ var _Batch_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Batch.module.scss */ "./src/components/Batch/Batch.module.scss");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }




var Batch = (0,_antiquemouse_framework__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  state: function state() {
    return {
      stores: [],
      isLoading: false,
      hasMore: true,
      lastId: null
    };
  },
  observer: null,
  loadStores: function loadStores() {
    var _arguments = arguments,
      _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var isLoadMore, response, _newStores, newStores, newLastId, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            isLoadMore = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : false;
            if (!_this.state.isLoading) {
              _context.n = 1;
              break;
            }
            return _context.a(2);
          case 1:
            _this.updateState({
              isLoading: true
            });
            _context.p = 2;
            _context.n = 3;
            return _modules_storeApi__WEBPACK_IMPORTED_MODULE_1__.StoreApi.getStores({
              limit: _this.props.batchSize || 12,
              lastId: isLoadMore ? _this.state.lastId : null
            });
          case 3:
            response = _context.v;
            if (response && Array.isArray(response)) {
              newStores = response;
              newLastId = ((_newStores = newStores[newStores.length - 1]) === null || _newStores === void 0 ? void 0 : _newStores.id) || null;
              _this.updateState({
                stores: isLoadMore ? [].concat(_toConsumableArray(_this.state.stores), _toConsumableArray(newStores)) : newStores,
                lastId: newLastId,
                hasMore: newStores.length === (_this.props.batchSize || 12),
                isLoading: false
              });
            }
            _context.n = 5;
            break;
          case 4:
            _context.p = 4;
            _t = _context.v;
            console.warn(_t);
            _this.updateState({
              isLoading: false
            });
          case 5:
            return _context.a(2);
        }
      }, _callee, null, [[2, 4]]);
    }))();
  },
  loadMore: function loadMore() {
    if (this.state.hasMore && !this.state.isLoading) {
      this.loadStores(true);
    }
  },
  onMounted: function onMounted() {
    var _this2 = this;
    this.loadStores();
    queueMicrotask(function () {
      var trigger = document.getElementById('loadTrigger');
      if (trigger && _this2.state.hasMore) {
        _this2.observer = new IntersectionObserver(function (entries) {
          if (entries[0].isIntersecting && _this2.state.hasMore && !_this2.state.isLoading) {
            _this2.loadMore();
          }
        });
        _this2.observer.observe(trigger);
      }
    });
  },
  onUnmounted: function onUnmounted() {
    if (this.observer) {
      this.observer.disconnect();
    }
  },
  render: function render() {
    var _this3 = this;
    var _this$state = this.state,
      stores = _this$state.stores,
      isLoading = _this$state.isLoading,
      hasMore = _this$state.hasMore;
    return h("div", {
      class: _Batch_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].batch
    }, h("div", {
      class: _Batch_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].batch__grid
    }, stores.map(function (store) {
      return h(_Card_Card__WEBPACK_IMPORTED_MODULE_2__.Card, {
        key: store.store_id,
        store: store,
        onCardClick: _this3.props.onCardClick
      });
    })), h("div", {
      id: "loadTrigger",
      class: "batch-trigger",
      style: {
        display: hasMore && !isLoading ? 'block' : 'none'
      }
    }));
  }
});

/***/ }),

/***/ "./src/components/Button/Button.module.scss":
/*!**************************************************!*\
  !*** ./src/components/Button/Button.module.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Button_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./Button.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Button/Button.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Button_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Button_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Button_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Button_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Button/Button.tsx":
/*!******************************************!*\
  !*** ./src/components/Button/Button.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Button: () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var _antiquemouse_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @antiquemouse/framework */ "./node_modules/@antiquemouse/framework/dist/index.js");
/* harmony import */ var _Button_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button.module.scss */ "./src/components/Button/Button.module.scss");


var buttonVariants = {
  accent: _Button_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].buttonAccent,
  success: _Button_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].buttonSuccess,
  error: _Button_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].buttonError,
  primary: _Button_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].buttonPrimary
};
var Button = (0,_antiquemouse_framework__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render: function render() {
    var props = this.props;
    var _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'accent' : _props$variant,
      onClick = props.onClick,
      _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className,
      text = props.text,
      type = props.type,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled;
    var buttonClasses = [_Button_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].button, buttonVariants[variant], className].filter(Boolean).join(' ');
    var content = text || 'КНОПКА';
    return h("button", {
      type: type,
      class: buttonClasses,
      disabled: disabled,
      on: {
        click: function click(e) {
          onClick === null || onClick === void 0 || onClick(e);
        }
      }
    }, h("span", {
      class: _Button_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].button__content
    }, content));
  }
});

/***/ }),

/***/ "./src/components/Card/Card.module.scss":
/*!**********************************************!*\
  !*** ./src/components/Card/Card.module.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Card_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./Card.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Card/Card.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Card_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Card_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Card_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Card_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Card/Card.tsx":
/*!**************************************!*\
  !*** ./src/components/Card/Card.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Card: () => (/* binding */ Card)
/* harmony export */ });
/* harmony import */ var _antiquemouse_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @antiquemouse/framework */ "./node_modules/@antiquemouse/framework/dist/index.js");
/* harmony import */ var _modules_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/router */ "./src/modules/router.ts");
/* harmony import */ var _Card_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card.module.scss */ "./src/components/Card/Card.module.scss");
/* harmony import */ var _modules_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/api */ "./src/modules/api.ts");




var Card = (0,_antiquemouse_framework__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render: function render() {
    var props = this.props;
    var store = props.store,
      onCardClick = props.onCardClick;
    var handleCardClick = function handleCardClick() {
      onCardClick === null || onCardClick === void 0 || onCardClick(store.id);
      (0,_modules_router__WEBPACK_IMPORTED_MODULE_1__.navigate)("/store/".concat(store.id));
    };
    var handleFavClick = function handleFavClick(e) {
      e.stopPropagation();
      e.preventDefault();
    };
    return h("div", {
      class: _Card_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].storeCard,
      on: {
        click: handleCardClick
      }
    }, h("div", {
      class: _Card_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].storeCard__container
    }, h("div", {
      class: _Card_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].storeCard__imageWrapper
    }, store.card_img && h("img", {
      class: _Card_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].storeCard__image,
      src: "".concat(_modules_api__WEBPACK_IMPORTED_MODULE_3__.API.SERVICES.PICS).concat(store.card_img),
      alt: store.name
    }), h("div", {
      class: _Card_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].storeCard__fav,
      on: {
        click: handleFavClick
      }
    }, h("img", {
      src: "/static/icons/fav.png",
      alt: "fav",
      class: _Card_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].storeCard__favImage
    }))), h("div", {
      class: _Card_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].storeCard__content
    }, h("div", {
      class: _Card_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].storeCard__name
    }, store.name), h("div", {
      class: _Card_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].storeCard__info
    }, h("div", {
      class: _Card_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].storeCard__time
    }, h("img", {
      src: "/static/icons/car.png",
      alt: "car",
      class: _Card_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].storeCard__timeIcon
    }), h("div", {
      class: _Card_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].storeCard__timeValue
    }, "30 \u043C\u0438\u043D")), h("div", {
      class: _Card_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].storeCard__rating
    }, h("img", {
      src: "/static/icons/star.png",
      alt: "star",
      class: _Card_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].storeCard__ratingIcon
    }), h("div", {
      class: _Card_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].storeCard__ratingValue
    }, store.rating))))));
  }
});

/***/ }),

/***/ "./src/components/CardsHeader/CardsHeader.module.scss":
/*!************************************************************!*\
  !*** ./src/components/CardsHeader/CardsHeader.module.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_CardsHeader_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./CardsHeader.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/CardsHeader/CardsHeader.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_CardsHeader_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_CardsHeader_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_CardsHeader_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_CardsHeader_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/CardsHeader/CardsHeader.tsx":
/*!****************************************************!*\
  !*** ./src/components/CardsHeader/CardsHeader.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardsHeader: () => (/* binding */ CardsHeader)
/* harmony export */ });
/* harmony import */ var _antiquemouse_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @antiquemouse/framework */ "./node_modules/@antiquemouse/framework/dist/index.js");
/* harmony import */ var _CardsHeader_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardsHeader.module.scss */ "./src/components/CardsHeader/CardsHeader.module.scss");


var CardsHeader = (0,_antiquemouse_framework__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render: function render() {
    var props = this.props;
    var handleFilterClick = function handleFilterClick(filter) {
      var _props$onFilterChange;
      (_props$onFilterChange = props.onFilterChange) === null || _props$onFilterChange === void 0 || _props$onFilterChange.call(props, filter);
    };
    var handleSortClick = function handleSortClick() {
      var _props$onSortToggle;
      (_props$onSortToggle = props.onSortToggle) === null || _props$onSortToggle === void 0 || _props$onSortToggle.call(props);
    };
    var filters = [{
      key: 'all',
      label: 'Все',
      active: true
    }, {
      key: 'pickup',
      label: 'Самовывоз'
    }, {
      key: 'burgers',
      label: 'Бургеры'
    }, {
      key: 'sushi',
      label: 'Суши'
    }, {
      key: 'pizza',
      label: 'Пицца'
    }, {
      key: 'wok',
      label: 'Вок'
    }, {
      key: 'pasta',
      label: 'Паста'
    }, {
      key: 'breakfast',
      label: 'Завтраки'
    }];
    return h("div", {
      class: _CardsHeader_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].cardsHeader
    }, h("h2", {
      class: _CardsHeader_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].cardsHeader__title
    }, "\u0420\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B"), h("div", {
      class: _CardsHeader_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].cardsHeader__filters
    }, filters.map(function (filter) {
      return h("button", {
        class: [_CardsHeader_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].filter__button, filter.active ? _CardsHeader_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"]['filter__button--active'] : ''].filter(Boolean).join(' '),
        on: {
          click: function click() {
            return handleFilterClick(filter.key);
          }
        }
      }, filter.label);
    }), h("div", {
      class: _CardsHeader_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].cardsHeader__more
    }, h("button", {
      class: _CardsHeader_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].filter__moreButton,
      on: {
        click: function click() {
          return handleFilterClick('more');
        }
      }
    }, "\u0415\u0449\u0451")), h("div", {
      class: _CardsHeader_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].cardsHeader__sort,
      on: {
        click: handleSortClick
      }
    }, h("span", null, "\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430"))));
  }
});

/***/ }),

/***/ "./src/components/Cart/Cart.module.scss":
/*!**********************************************!*\
  !*** ./src/components/Cart/Cart.module.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Cart_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./Cart.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Cart/Cart.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Cart_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Cart_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Cart_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Cart_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Cart/Cart.tsx":
/*!**************************************!*\
  !*** ./src/components/Cart/Cart.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cart: () => (/* binding */ Cart)
/* harmony export */ });
/* harmony import */ var _antiquemouse_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @antiquemouse/framework */ "./node_modules/@antiquemouse/framework/dist/index.js");
/* harmony import */ var _modules_cartManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/cartManager */ "./src/modules/cartManager.ts");
/* harmony import */ var _modules_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/router */ "./src/modules/router.ts");
/* harmony import */ var _modules_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/store */ "./src/modules/store.ts");
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/auth */ "./src/utils/auth.ts");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Button/Button */ "./src/components/Button/Button.tsx");
/* harmony import */ var _CartItem_CartItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../CartItem/CartItem */ "./src/components/CartItem/CartItem.tsx");
/* harmony import */ var _Cart_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Cart.module.scss */ "./src/components/Cart/Cart.module.scss");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }








var Cart = (0,_antiquemouse_framework__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  state: function state() {
    return {
      items: []
    };
  },
  onMounted: function onMounted() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var items;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _context.n = 1;
            return (0,_modules_cartManager__WEBPACK_IMPORTED_MODULE_1__.getCartFromStorage)();
          case 1:
            items = _context.v;
            _this.updateState({
              items: items
            });
          case 2:
            return _context.a(2);
        }
      }, _callee);
    }))();
  },
  handleIncrease: function handleIncrease(id) {
    var _this2 = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var item, items;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            item = _this2.state.items.find(function (i) {
              return i.id === id;
            });
            if (!item) {
              _context2.n = 3;
              break;
            }
            _context2.n = 1;
            return (0,_modules_cartManager__WEBPACK_IMPORTED_MODULE_1__.updateQuantity)(id, item.quantity + 1);
          case 1:
            _context2.n = 2;
            return (0,_modules_cartManager__WEBPACK_IMPORTED_MODULE_1__.getCartFromStorage)();
          case 2:
            items = _context2.v;
            _this2.updateState({
              items: items
            });
          case 3:
            return _context2.a(2);
        }
      }, _callee2);
    }))();
  },
  handleDecrease: function handleDecrease(id) {
    var _this3 = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
      var item, items, _items;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            item = _this3.state.items.find(function (i) {
              return i.id === id;
            });
            if (item) {
              _context3.n = 1;
              break;
            }
            return _context3.a(2);
          case 1:
            if (!(item.quantity <= 1)) {
              _context3.n = 4;
              break;
            }
            _context3.n = 2;
            return (0,_modules_cartManager__WEBPACK_IMPORTED_MODULE_1__.removeFromCart)(id);
          case 2:
            _context3.n = 3;
            return (0,_modules_cartManager__WEBPACK_IMPORTED_MODULE_1__.getCartFromStorage)();
          case 3:
            items = _context3.v;
            _this3.updateState({
              items: items
            });
            _context3.n = 7;
            break;
          case 4:
            _context3.n = 5;
            return (0,_modules_cartManager__WEBPACK_IMPORTED_MODULE_1__.updateQuantity)(id, item.quantity - 1);
          case 5:
            _context3.n = 6;
            return (0,_modules_cartManager__WEBPACK_IMPORTED_MODULE_1__.getCartFromStorage)();
          case 6:
            _items = _context3.v;
            _this3.updateState({
              items: _items
            });
          case 7:
            return _context3.a(2);
        }
      }, _callee3);
    }))();
  },
  handleRemove: function handleRemove(id) {
    var _this4 = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
      var items;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            _context4.n = 1;
            return (0,_modules_cartManager__WEBPACK_IMPORTED_MODULE_1__.removeFromCart)(id);
          case 1:
            _context4.n = 2;
            return (0,_modules_cartManager__WEBPACK_IMPORTED_MODULE_1__.getCartFromStorage)();
          case 2:
            items = _context4.v;
            _this4.updateState({
              items: items
            });
          case 3:
            return _context4.a(2);
        }
      }, _callee4);
    }))();
  },
  getTotal: function getTotal() {
    return this.state.items.reduce(function (sum, item) {
      return sum + item.price * item.quantity;
    }, 0);
  },
  render: function render() {
    var _this5 = this;
    var props = this.props;
    var items = this.state.items;
    var total = this.getTotal();
    return h("div", {
      class: _Cart_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].cart,
      on: {
        click: function click(e) {
          if (e.target === e.currentTarget) {
            props.onClose();
          }
        }
      }
    }, h("div", {
      class: _Cart_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].cart__container
    }, h("div", {
      class: _Cart_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].cart__header
    }, h("h3", {
      class: _Cart_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].cart__title
    }, "\u041A\u043E\u0440\u0437\u0438\u043D\u0430"), h("div", {
      class: _Cart_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].cart__total
    }, "\u0418\u0442\u043E\u0433\u043E: ", total, " \u20BD"), h("button", {
      class: _Cart_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].cart__close,
      on: {
        click: props.onClose
      }
    }, "\u2715")), h("div", {
      class: _Cart_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].cart__body
    }, h("div", null, items.length > 0 ? items.map(function (item) {
      return h(_CartItem_CartItem__WEBPACK_IMPORTED_MODULE_6__.CartItem, {
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        card_img: item.card_img,
        onIncrease: function onIncrease() {
          return _this5.handleIncrease(item.id);
        },
        onDecrease: function onDecrease() {
          return _this5.handleDecrease(item.id);
        },
        onRemove: function onRemove() {
          return _this5.handleRemove(item.id);
        }
      });
    }) : h("p", {
      class: _Cart_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].cartEmpty
    }, "\u041A\u043E\u0440\u0437\u0438\u043D\u0430 \u043F\u0443\u0441\u0442\u0430"))), h("div", {
      class: _Cart_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].cart__footer
    }, h(_Button_Button__WEBPACK_IMPORTED_MODULE_5__.Button, {
      variant: "accent",
      text: "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u044E",
      className: _Cart_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].cart__button,
      onClick: function onClick() {
        if (_modules_store__WEBPACK_IMPORTED_MODULE_3__.store.get(_utils_auth__WEBPACK_IMPORTED_MODULE_4__.AUTH_IS_AUTHENTICATED) === true) {
          (0,_modules_router__WEBPACK_IMPORTED_MODULE_2__.navigate)('/checkout');
        } else {
          (0,_modules_router__WEBPACK_IMPORTED_MODULE_2__.navigate)('/auth');
        }
      }
    }))));
  }
});

/***/ }),

/***/ "./src/components/CartItem/CartItem.module.scss":
/*!******************************************************!*\
  !*** ./src/components/CartItem/CartItem.module.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_CartItem_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./CartItem.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/CartItem/CartItem.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_CartItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_CartItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_CartItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_CartItem_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/CartItem/CartItem.tsx":
/*!**********************************************!*\
  !*** ./src/components/CartItem/CartItem.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CartItem: () => (/* binding */ CartItem)
/* harmony export */ });
/* harmony import */ var _antiquemouse_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @antiquemouse/framework */ "./node_modules/@antiquemouse/framework/dist/index.js");
/* harmony import */ var _CartItem_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CartItem.module.scss */ "./src/components/CartItem/CartItem.module.scss");
/* harmony import */ var _modules_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/api */ "./src/modules/api.ts");



var CartItem = (0,_antiquemouse_framework__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render: function render() {
    var props = this.props;
    var id = props.id,
      name = props.name,
      price = props.price,
      quantity = props.quantity,
      card_img = props.card_img,
      onIncrease = props.onIncrease,
      onDecrease = props.onDecrease;
    var handleIncrease = function handleIncrease(e) {
      e.stopPropagation();
      e.preventDefault();
      onIncrease === null || onIncrease === void 0 || onIncrease(id);
    };
    var handleDecrease = function handleDecrease(e) {
      e.stopPropagation();
      e.preventDefault();
      if (quantity > 0) {
        onDecrease === null || onDecrease === void 0 || onDecrease(id);
      }
    };
    return h("div", {
      class: _CartItem_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].cartItem
    }, h("div", {
      class: _CartItem_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].cartItem__imageWrapper
    }, card_img && h("img", {
      class: _CartItem_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].cartItem__image,
      src: "".concat(_modules_api__WEBPACK_IMPORTED_MODULE_2__.API.SERVICES.PICS).concat(card_img),
      alt: name
    })), h("div", {
      class: _CartItem_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].cartItem__info
    }, h("div", {
      class: _CartItem_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].cartItem__name
    }, name), h("div", {
      class: _CartItem_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].cartItem__price
    }, price, " \u20BD")), h("div", {
      class: _CartItem_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].cartItem__controls
    }, h("button", {
      class: _CartItem_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].cartItem__controlBtn,
      on: {
        click: handleDecrease
      }
    }, "\u2013"), h("span", {
      class: _CartItem_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].cartItem__quantity
    }, quantity), h("button", {
      class: _CartItem_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].cartItem__controlBtn,
      on: {
        click: handleIncrease
      }
    }, "+")));
  }
});

/***/ }),

/***/ "./src/components/CommonCSS/Variables.css":
/*!************************************************!*\
  !*** ./src/components/CommonCSS/Variables.css ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Variables_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./Variables.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/CommonCSS/Variables.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Variables_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Variables_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_Variables_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_Variables_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/CommonCSS/normalize.css":
/*!************************************************!*\
  !*** ./src/components/CommonCSS/normalize.css ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./normalize.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/CommonCSS/normalize.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Footer/Footer.module.scss":
/*!**************************************************!*\
  !*** ./src/components/Footer/Footer.module.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Footer_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./Footer.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Footer/Footer.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Footer_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Footer_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Footer_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Footer_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Footer/Footer.tsx":
/*!******************************************!*\
  !*** ./src/components/Footer/Footer.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Footer: () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var _antiquemouse_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @antiquemouse/framework */ "./node_modules/@antiquemouse/framework/dist/index.js");
/* harmony import */ var _Footer_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.module.scss */ "./src/components/Footer/Footer.module.scss");


var Footer = (0,_antiquemouse_framework__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render: function render() {
    return h("div", {
      class: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].footer
    }, h("div", {
      class: "left-part"
    }, "\xA9 2025 \u041E\u041E\u041E AppleClub"), h("div", {
      class: "right-part"
    }, "appleclub.support@mail.ru - \u041F\u0440\u043E\u0435\u043A\u0442 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \xAB\u042F\u0431\u043B\u043E\u043A\u043E\xBB"));
  }
});

/***/ }),

/***/ "./src/components/IconButton/IconButton.module.scss":
/*!**********************************************************!*\
  !*** ./src/components/IconButton/IconButton.module.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_IconButton_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./IconButton.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/IconButton/IconButton.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_IconButton_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_IconButton_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_IconButton_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_IconButton_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/IconButton/IconButton.tsx":
/*!**************************************************!*\
  !*** ./src/components/IconButton/IconButton.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IconButton: () => (/* binding */ IconButton)
/* harmony export */ });
/* harmony import */ var _antiquemouse_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @antiquemouse/framework */ "./node_modules/@antiquemouse/framework/dist/index.js");
/* harmony import */ var _IconButton_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IconButton.module.scss */ "./src/components/IconButton/IconButton.module.scss");


var IconButton = (0,_antiquemouse_framework__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render: function render() {
    var props = this.props;
    var src = props.src,
      alt = props.alt,
      text = props.text,
      onClick = props.onClick;
    return h("button", {
      class: _IconButton_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].iconButton,
      type: "button",
      on: {
        click: function click(e) {
          onClick === null || onClick === void 0 || onClick(e);
        }
      }
    }, h("img", {
      src: src,
      alt: alt,
      class: _IconButton_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].iconButton__image
    }), text && h("span", {
      class: _IconButton_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].iconButton__text
    }, text));
  }
});

/***/ }),

/***/ "./src/components/LoginForm/LoginForm.module.scss":
/*!********************************************************!*\
  !*** ./src/components/LoginForm/LoginForm.module.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./LoginForm.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/LoginForm/LoginForm.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/LoginForm/LoginForm.tsx":
/*!************************************************!*\
  !*** ./src/components/LoginForm/LoginForm.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginForm: () => (/* binding */ LoginForm)
/* harmony export */ });
/* harmony import */ var _antiquemouse_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @antiquemouse/framework */ "./node_modules/@antiquemouse/framework/dist/index.js");
/* harmony import */ var _modules_authManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/authManager */ "./src/modules/authManager.ts");
/* harmony import */ var _modules_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/router */ "./src/modules/router.ts");
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/auth */ "./src/utils/auth.ts");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Button/Button */ "./src/components/Button/Button.tsx");
/* harmony import */ var _Logo_Logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Logo/Logo */ "./src/components/Logo/Logo.tsx");
/* harmony import */ var _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LoginForm.module.scss */ "./src/components/LoginForm/LoginForm.module.scss");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }







var LoginForm = (0,_antiquemouse_framework__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  state: function state() {
    return {
      isAuth: true,
      email: '',
      password: '',
      confirmPassword: '',
      isAwaiting: false,
      authErr: '',
      emailErr: '',
      passErr: '',
      passConfErr: ''
    };
  },
  handleSubmit: function handleSubmit(e) {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var _this$state, isAuth, isAwaiting, email, password, safeUpdate, message, authError, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            e.preventDefault();
            _this$state = _this.state, isAuth = _this$state.isAuth, isAwaiting = _this$state.isAwaiting, email = _this$state.email, password = _this$state.password;
            if (!isAwaiting) {
              _context.n = 1;
              break;
            }
            return _context.a(2);
          case 1:
            safeUpdate = function safeUpdate(partial) {
              try {
                _this.updateState(partial);
              } catch (err) {}
            };
            safeUpdate({
              isAwaiting: true,
              authErr: ''
            });
            _context.p = 2;
            if (!isAuth) {
              _context.n = 4;
              break;
            }
            _context.n = 3;
            return _modules_authManager__WEBPACK_IMPORTED_MODULE_1__.authManager.login(email, password);
          case 3:
            _context.n = 5;
            break;
          case 4:
            _context.n = 5;
            return _modules_authManager__WEBPACK_IMPORTED_MODULE_1__.authManager.register(email, password);
          case 5:
            (0,_modules_router__WEBPACK_IMPORTED_MODULE_2__.navigate)('/');
            _context.n = 7;
            break;
          case 6:
            _context.p = 6;
            _t = _context.v;
            message = 'Ошибка авторизации';
            if (_t && _typeof(_t) === 'object') {
              authError = _t;
              if (authError !== null && authError !== void 0 && authError.response) {
                if (typeof authError.response === 'string') {
                  message = authError.response;
                } else if (_typeof(authError.response) === 'object' && authError.response.message) {
                  message = authError.response.message;
                }
              } else if (authError !== null && authError !== void 0 && authError.message) {
                message = authError.message;
              }
            } else if (typeof _t === 'string') {
              message = _t;
            }
            safeUpdate({
              authErr: message,
              isAwaiting: false
            });
          case 7:
            return _context.a(2);
        }
      }, _callee, null, [[2, 6]]);
    }))();
  },
  toggleMode: function toggleMode() {
    this.updateState({
      isAuth: !this.state.isAuth,
      confirmPassword: '',
      authErr: ''
    });
  },
  handleEmailChange: function handleEmailChange(e) {
    var value = e.target.value;
    this.updateState({
      email: value,
      emailErr: (0,_utils_auth__WEBPACK_IMPORTED_MODULE_3__.validateEmail)(value),
      authErr: ''
    });
  },
  handlePasswordChange: function handlePasswordChange(e) {
    var value = e.target.value;
    this.updateState({
      password: value,
      passErr: (0,_utils_auth__WEBPACK_IMPORTED_MODULE_3__.validatePassword)(value),
      authErr: ''
    });
  },
  handleConfirmPasswordChange: function handleConfirmPasswordChange(e) {
    var value = e.target.value;
    this.updateState({
      confirmPassword: value,
      passConfErr: (0,_utils_auth__WEBPACK_IMPORTED_MODULE_3__.validateConfirmPassword)(value, this.state.password),
      authErr: ''
    });
  },
  render: function render() {
    var _this2 = this;
    var _this$state2 = this.state,
      isAuth = _this$state2.isAuth,
      email = _this$state2.email,
      password = _this$state2.password,
      confirmPassword = _this$state2.confirmPassword,
      isAwaiting = _this$state2.isAwaiting,
      authErr = _this$state2.authErr,
      passErr = _this$state2.passErr,
      emailErr = _this$state2.emailErr,
      passConfErr = _this$state2.passConfErr;
    return h("div", {
      class: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].loginForm
    }, h(_Logo_Logo__WEBPACK_IMPORTED_MODULE_5__.Logo, {
      size: "large"
    }), h("form", {
      key: "form-".concat(isAuth, "-").concat(isAwaiting),
      class: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].loginForm__container,
      novalidate: true,
      on: {
        submit: function submit(e) {
          return _this2.handleSubmit(e);
        }
      }
    }, h("div", {
      class: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].loginForm__field
    }, h("input", {
      type: "email",
      placeholder: "Email",
      value: email,
      on: {
        input: function input(e) {
          return _this2.handleEmailChange(e);
        }
      },
      disabled: isAwaiting || undefined,
      class: emailErr ? 'login-form__input--error' : ''
    })), h("div", {
      class: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].loginForm__error,
      style: {
        display: emailErr ? 'block' : 'none'
      }
    }, emailErr), h("div", {
      class: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].loginForm__field
    }, h("input", {
      type: "password",
      placeholder: "\u041F\u0430\u0440\u043E\u043B\u044C",
      value: password,
      on: {
        input: function input(e) {
          return _this2.handlePasswordChange(e);
        }
      },
      disabled: isAwaiting || undefined,
      class: passErr ? 'login-form__input--error' : ''
    })), h("div", {
      class: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].loginForm__error,
      style: {
        display: passErr ? 'block' : 'none'
      }
    }, passErr), h("div", {
      class: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].loginForm__field,
      style: {
        display: isAuth ? 'none' : 'block'
      }
    }, h("input", {
      type: "password",
      placeholder: "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C",
      value: confirmPassword,
      on: {
        input: function input(e) {
          return _this2.handleConfirmPasswordChange(e);
        }
      },
      disabled: isAwaiting || undefined,
      class: passConfErr ? 'login-form__input--error' : ''
    })), h("div", {
      class: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].loginForm__error,
      style: {
        display: passConfErr ? 'block' : 'none'
      }
    }, passConfErr), h("div", {
      class: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].loginForm__error,
      style: {
        display: authErr ? 'block' : 'none'
      }
    }, authErr), h(_Button_Button__WEBPACK_IMPORTED_MODULE_4__.Button, {
      key: "submit-".concat(isAuth),
      type: "submit",
      variant: "accent",
      class: "login-form__submit",
      disabled: isAwaiting || undefined,
      text: isAwaiting ? 'Загрузка...' : isAuth ? 'Войти' : 'Зарегистрироваться'
    }), h(_Button_Button__WEBPACK_IMPORTED_MODULE_4__.Button, {
      key: "toggle-".concat(isAuth),
      type: "button",
      variant: "accent",
      class: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].loginForm__toggle,
      onClick: function onClick() {
        return _this2.toggleMode();
      },
      disabled: isAwaiting || undefined,
      text: isAuth ? 'Нет аккаунта? Зарегистрироваться' : 'Уже есть аккаунт? Войти'
    })));
  }
});

/***/ }),

/***/ "./src/components/Logo/Logo.tsx":
/*!**************************************!*\
  !*** ./src/components/Logo/Logo.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Logo: () => (/* binding */ Logo)
/* harmony export */ });
/* harmony import */ var _antiquemouse_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @antiquemouse/framework */ "./node_modules/@antiquemouse/framework/dist/index.js");

var Logo = (0,_antiquemouse_framework__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render: function render() {
    var props = this.props;
    var size = props.size || 'medium';
    var sizes = {
      small: '2rem',
      medium: '3rem',
      large: '12rem'
    };
    return h("div", {
      on: {
        click: props.onClick
      }
    }, h("img", {
      src: "/static/icons/logo.png",
      alt: "logo",
      style: {
        height: sizes[size],
        width: sizes[size],
        objectFit: 'cover',
        marginRight: '15px'
      }
    }));
  }
});

/***/ }),

/***/ "./src/components/Navbar/Navbar.module.scss":
/*!**************************************************!*\
  !*** ./src/components/Navbar/Navbar.module.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./Navbar.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Navbar/Navbar.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Navbar/Navbar.tsx":
/*!******************************************!*\
  !*** ./src/components/Navbar/Navbar.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Navbar: () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var _antiquemouse_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @antiquemouse/framework */ "./node_modules/@antiquemouse/framework/dist/index.js");
/* harmony import */ var _modules_authManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/authManager */ "./src/modules/authManager.ts");
/* harmony import */ var _modules_profileApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/profileApi */ "./src/modules/profileApi.ts");
/* harmony import */ var _modules_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/router */ "./src/modules/router.ts");
/* harmony import */ var _modules_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/store */ "./src/modules/store.ts");
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/auth */ "./src/utils/auth.ts");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Button/Button */ "./src/components/Button/Button.tsx");
/* harmony import */ var _IconButton_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../IconButton/IconButton */ "./src/components/IconButton/IconButton.tsx");
/* harmony import */ var _Logo_Logo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Logo/Logo */ "./src/components/Logo/Logo.tsx");
/* harmony import */ var _Search_Search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Search/Search */ "./src/components/Search/Search.tsx");
/* harmony import */ var _Selector_Selector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Selector/Selector */ "./src/components/Selector/Selector.tsx");
/* harmony import */ var _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Navbar.module.scss */ "./src/components/Navbar/Navbar.module.scss");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }












var Navbar = (0,_antiquemouse_framework__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  state: function state() {
    return {
      userAuthed: _modules_store__WEBPACK_IMPORTED_MODULE_4__.store.get(_utils_auth__WEBPACK_IMPORTED_MODULE_5__.AUTH_IS_AUTHENTICATED) === true,
      userAvatar: '',
      cartItems: _modules_store__WEBPACK_IMPORTED_MODULE_4__.store.get(_utils_auth__WEBPACK_IMPORTED_MODULE_5__.CART_COUNT) || 0
    };
  },
  onMounted: function onMounted() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _this.unsubscribeAuth = _modules_store__WEBPACK_IMPORTED_MODULE_4__.store.subscribe(_utils_auth__WEBPACK_IMPORTED_MODULE_5__.AUTH_IS_AUTHENTICATED, function () {
              var isAuthed = _modules_store__WEBPACK_IMPORTED_MODULE_4__.store.get(_utils_auth__WEBPACK_IMPORTED_MODULE_5__.AUTH_IS_AUTHENTICATED) === true;
              _this.updateState({
                userAuthed: isAuthed
              });
              if (isAuthed) {
                _this.loadUserAvatar();
              } else {
                _this.updateState({
                  userAvatar: ''
                });
              }
            });
            _this.unsubscribeCart = _modules_store__WEBPACK_IMPORTED_MODULE_4__.store.subscribe(_utils_auth__WEBPACK_IMPORTED_MODULE_5__.CART_COUNT, function () {
              var cartCount = _modules_store__WEBPACK_IMPORTED_MODULE_4__.store.get(_utils_auth__WEBPACK_IMPORTED_MODULE_5__.CART_COUNT);
              _this.updateState({
                cartItems: cartCount || 0
              });
            });
            if (!_this.state.userAuthed) {
              _context.n = 1;
              break;
            }
            _context.n = 1;
            return _this.loadUserAvatar();
          case 1:
            return _context.a(2);
        }
      }, _callee);
    }))();
  },
  onUnmounted: function onUnmounted() {
    if (this.unsubscribeAuth) {
      this.unsubscribeAuth();
    }
    if (this.unsubscribeCart) {
      this.unsubscribeCart();
    }
  },
  loadUserAvatar: function loadUserAvatar() {
    var _this2 = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var user, response, avatarUrl, _t;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            _context2.p = 0;
            user = _modules_authManager__WEBPACK_IMPORTED_MODULE_1__.authManager.getUser();
            if (user) {
              _context2.n = 1;
              break;
            }
            return _context2.a(2);
          case 1:
            _context2.n = 2;
            return _modules_profileApi__WEBPACK_IMPORTED_MODULE_2__.profileApi.getProfile('me');
          case 2:
            response = _context2.v;
            if (response.service.success && response.body.avatar_url) {
              avatarUrl = response.body.avatar_url;
              _this2.updateState({
                userAvatar: avatarUrl
              });
            }
            _context2.n = 4;
            break;
          case 3:
            _context2.p = 3;
            _t = _context2.v;
            console.error('Failed to load user avatar:', _t);
          case 4:
            return _context2.a(2);
        }
      }, _callee2, null, [[0, 3]]);
    }))();
  },
  render: function render() {
    var props = this.props;
    var userAvatar = this.state.userAvatar;
    var userAuthed = _modules_store__WEBPACK_IMPORTED_MODULE_4__.store.get(_utils_auth__WEBPACK_IMPORTED_MODULE_5__.AUTH_IS_AUTHENTICATED) === true;
    var cartItems = _modules_store__WEBPACK_IMPORTED_MODULE_4__.store.get(_utils_auth__WEBPACK_IMPORTED_MODULE_5__.CART_COUNT) || 0;
    return h("header", {
      class: _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].navbar
    }, h("div", {
      class: _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].navbar__left
    }, h(_Logo_Logo__WEBPACK_IMPORTED_MODULE_8__.Logo, {
      size: "medium",
      onClick: props.onLogoClick
    }), h(_Search_Search__WEBPACK_IMPORTED_MODULE_9__.SearchBar, {
      placeholder: "\u041F\u043E\u0438\u0441\u043A \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u043E\u0432 \u0438 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0439",
      onSearch: props.onSearch
    }), h(_Selector_Selector__WEBPACK_IMPORTED_MODULE_10__.CitySelector, null)), h("div", {
      class: _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].navbar__right
    }, h("div", {
      class: _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].navbar__cartWrapper
    }, h(_IconButton_IconButton__WEBPACK_IMPORTED_MODULE_7__.IconButton, {
      src: "/static/icons/cart.png",
      alt: "\u041A\u043E\u0440\u0437\u0438\u043D\u0430",
      text: "\u041A\u043E\u0440\u0437\u0438\u043D\u0430",
      onClick: props.onCartClick
    }), cartItems > 0 ? h("span", {
      class: _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_11__["default"].navbar__cartBadge
    }, cartItems > 99 ? '99+' : cartItems) : null), userAuthed ? [h(_IconButton_IconButton__WEBPACK_IMPORTED_MODULE_7__.IconButton, {
      src: "/static/icons/checklist.png",
      alt: "\u0418\u0441\u0442\u043E\u0440\u0438\u044F",
      text: "\u0418\u0441\u0442\u043E\u0440\u0438\u044F"
    }), h(_IconButton_IconButton__WEBPACK_IMPORTED_MODULE_7__.IconButton, {
      src: userAvatar || '/static/icons/user.png',
      alt: "\u041F\u0440\u043E\u0444\u0438\u043B\u044C",
      text: "\u041F\u0440\u043E\u0444\u0438\u043B\u044C",
      onClick: function onClick() {
        return (0,_modules_router__WEBPACK_IMPORTED_MODULE_3__.navigate)('/profile');
      }
    })] : h(_Button_Button__WEBPACK_IMPORTED_MODULE_6__.Button, {
      variant: "accent",
      text: "\u0412\u043E\u0439\u0442\u0438",
      onClick: function onClick() {
        return (0,_modules_router__WEBPACK_IMPORTED_MODULE_3__.navigate)('/auth');
      }
    })));
  }
});

/***/ }),

/***/ "./src/components/PaymentForm/PaymentForm.module.scss":
/*!************************************************************!*\
  !*** ./src/components/PaymentForm/PaymentForm.module.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PaymentForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./PaymentForm.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/PaymentForm/PaymentForm.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PaymentForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PaymentForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PaymentForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PaymentForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/PaymentForm/PaymentForm.tsx":
/*!****************************************************!*\
  !*** ./src/components/PaymentForm/PaymentForm.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaymentForm: () => (/* binding */ PaymentForm)
/* harmony export */ });
/* harmony import */ var _antiquemouse_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @antiquemouse/framework */ "./node_modules/@antiquemouse/framework/dist/index.js");
/* harmony import */ var _modules_orderApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/orderApi */ "./src/modules/orderApi.ts");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Button/Button */ "./src/components/Button/Button.tsx");
/* harmony import */ var _PaymentForm_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PaymentForm.module.scss */ "./src/components/PaymentForm/PaymentForm.module.scss");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }




var PaymentForm = (0,_antiquemouse_framework__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  props: [],
  handlePay: function handlePay() {
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var response, payParams;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _context.n = 1;
            return _modules_orderApi__WEBPACK_IMPORTED_MODULE_1__.OrderApi.createOrder();
          case 1:
            response = _context.v;
            //await StoreApi.updateCart([])
            payParams = {
              order_id: response.id,
              price: response.total.toString(),
              return_url: window.location.origin + '/'
            };
            _context.n = 2;
            return _modules_orderApi__WEBPACK_IMPORTED_MODULE_1__.OrderApi.fakePayment(payParams);
          case 2:
            return _context.a(2);
        }
      }, _callee);
    }))();
  },
  render: function render() {
    var _this = this;
    var props = this.props;
    var handlePromoInput = function handlePromoInput(e) {
      props.onPromoChange(e.target.value);
    };
    var getPaymentLabel = function getPaymentLabel() {
      switch (props.paymentMethod) {
        case 'card':
          return 'Банковской картой';
        case 'cash':
          return 'Наличными';
        case 'online':
          return 'Онлайн (СБП и др.)';
        default:
          return 'Выберите способ оплаты';
      }
    };
    return h("div", {
      class: _PaymentForm_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].payment
    }, h("div", {
      class: _PaymentForm_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].payment__section
    }, h("h2", null, "\u0421\u043F\u043E\u0441\u043E\u0431 \u043E\u043F\u043B\u0430\u0442\u044B"), h("div", {
      class: _PaymentForm_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].payment__row
    }, h("div", {
      class: "payment__value"
    }, getPaymentLabel()), h(_Button_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {
      type: "button",
      variant: "accent",
      text: "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C",
      onClick: function onClick() {
        return props.onChangePayment();
      }
    }))), h("div", {
      class: _PaymentForm_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].payment__section
    }, h("h2", null, "\u041F\u0440\u043E\u043C\u043E\u043A\u043E\u0434"), h("div", {
      class: _PaymentForm_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].payment__row
    }, h("div", {
      class: _PaymentForm_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].payment__field
    }, h("input", {
      type: "text",
      placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0440\u043E\u043C\u043E\u043A\u043E\u0434",
      value: props.promoCode,
      on: {
        input: handlePromoInput
      }
    })), h(_Button_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {
      type: "button",
      variant: "accent",
      text: "\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C",
      onClick: function onClick() {
        return props.onApplyPromo();
      },
      disabled: true
    }))), h("div", {
      class: _PaymentForm_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].payment__section
    }, h("h2", null, "\u0418\u0442\u043E\u0433\u043E:"), h("div", {
      class: _PaymentForm_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].payment__row
    }, h("div", null, props.total, " \u20BD"), h(_Button_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {
      type: "button",
      variant: "success",
      text: "\u041E\u043F\u043B\u0430\u0442\u0438\u0442\u044C",
      onClick: function onClick() {
        _this.handlePay();
      }
    }))));
  }
});

/***/ }),

/***/ "./src/components/PersonalInfo/PersonalInfo.module.scss":
/*!**************************************************************!*\
  !*** ./src/components/PersonalInfo/PersonalInfo.module.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PersonalInfo_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./PersonalInfo.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/PersonalInfo/PersonalInfo.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PersonalInfo_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PersonalInfo_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PersonalInfo_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PersonalInfo_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/PersonalInfo/PersonalInfo.tsx":
/*!******************************************************!*\
  !*** ./src/components/PersonalInfo/PersonalInfo.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PersonalInfo: () => (/* binding */ PersonalInfo)
/* harmony export */ });
/* harmony import */ var _antiquemouse_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @antiquemouse/framework */ "./node_modules/@antiquemouse/framework/dist/index.js");
/* harmony import */ var _modules_authManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/authManager */ "./src/modules/authManager.ts");
/* harmony import */ var _modules_profileApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/profileApi */ "./src/modules/profileApi.ts");
/* harmony import */ var _modules_storeApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/storeApi */ "./src/modules/storeApi.ts");
/* harmony import */ var _modules_suggestApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/suggestApi */ "./src/modules/suggestApi.ts");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Button/Button */ "./src/components/Button/Button.tsx");
/* harmony import */ var _PersonalInfo_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PersonalInfo.module.scss */ "./src/components/PersonalInfo/PersonalInfo.module.scss");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }







var PersonalInfo = (0,_antiquemouse_framework__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  props: [],
  state: function state() {
    return {
      email: '',
      fullName: '',
      city: '',
      address: '',
      comment: '',
      errors: {},
      cities: [],
      isLoading: false,
      isSaving: false,
      showCitySuggestions: false,
      addressSuggestions: [],
      showAddressSuggestions: false,
      isAddressLoading: false
    };
  },
  onMounted: function onMounted() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _context.n = 1;
            return _this.loadData();
          case 1:
            return _context.a(2);
        }
      }, _callee);
    }))();
  },
  loadData: function loadData() {
    var _this2 = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var cities, _t;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            _this2.updateState({
              isLoading: true
            });
            _context2.p = 1;
            _context2.n = 2;
            return _modules_storeApi__WEBPACK_IMPORTED_MODULE_3__.StoreApi.getCities();
          case 2:
            cities = _context2.v;
            _this2.updateState({
              cities: cities
            });
            _context2.n = 3;
            return _this2.loadUserProfile();
          case 3:
            _this2.updateState({
              isLoading: false
            });
            _context2.n = 5;
            break;
          case 4:
            _context2.p = 4;
            _t = _context2.v;
            console.error(_t);
            _this2.updateState({
              isLoading: false
            });
          case 5:
            return _context2.a(2);
        }
      }, _callee2, null, [[1, 4]]);
    }))();
  },
  loadUserProfile: function loadUserProfile() {
    var _this3 = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
      var user, response, profile, city, _t2;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            user = _modules_authManager__WEBPACK_IMPORTED_MODULE_1__.authManager.getUser();
            if (user) {
              _context3.n = 1;
              break;
            }
            return _context3.a(2);
          case 1:
            _context3.p = 1;
            _context3.n = 2;
            return _modules_profileApi__WEBPACK_IMPORTED_MODULE_2__.profileApi.getProfile(user.id);
          case 2:
            response = _context3.v;
            if (response.service.success) {
              profile = response.body;
              city = _this3.state.cities.find(function (c) {
                return c.id === profile.city_id;
              });
              _this3.updateState({
                email: profile.email || '',
                fullName: profile.name || '',
                city: city ? city.name : '',
                address: profile.address || ''
              });
            }
            _context3.n = 4;
            break;
          case 3:
            _context3.p = 3;
            _t2 = _context3.v;
            console.error(_t2);
          case 4:
            return _context3.a(2);
        }
      }, _callee3, null, [[1, 3]]);
    }))();
  },
  getCitySuggestions: function getCitySuggestions() {
    var _this4 = this;
    if (!this.state.city) return [];
    return this.state.cities.filter(function (city) {
      return city.name.toLowerCase().includes(_this4.state.city.toLowerCase());
    }).slice(0, 5);
  },
  handleCitySelect: function handleCitySelect(cityName) {
    var cityInput = document.querySelector(".".concat(_PersonalInfo_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].personalInfoForm__input, "[placeholder=\"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0433\u043E\u0440\u043E\u0434\"]"));
    if (cityInput) {
      cityInput.value = cityName;
    }
    this.updateState({
      city: cityName,
      showCitySuggestions: false
    });
  },
  handleAddressInput: function handleAddressInput(value) {
    var _this5 = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
      var suggestions, _t3;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            _this5.updateState({
              address: value,
              showAddressSuggestions: true
            });
            if (!(value.length < 2 || !_this5.state.city)) {
              _context4.n = 1;
              break;
            }
            _this5.updateState({
              addressSuggestions: []
            });
            return _context4.a(2);
          case 1:
            _this5.updateState({
              isAddressLoading: true
            });
            _context4.p = 2;
            _context4.n = 3;
            return _modules_suggestApi__WEBPACK_IMPORTED_MODULE_4__.SuggestApi.suggestAddress(value, _this5.state.city);
          case 3:
            suggestions = _context4.v;
            _this5.updateState({
              addressSuggestions: suggestions,
              isAddressLoading: false
            });
            _context4.n = 5;
            break;
          case 4:
            _context4.p = 4;
            _t3 = _context4.v;
            console.error(_t3);
            _this5.updateState({
              isAddressLoading: false
            });
          case 5:
            return _context4.a(2);
        }
      }, _callee4, null, [[2, 4]]);
    }))();
  },
  handleAddressSelect: function handleAddressSelect(suggestion) {
    var addressInput = document.querySelector(".".concat(_PersonalInfo_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].personalInfoForm__input, "[placeholder=\"\u0423\u043B\u0438\u0446\u0430, \u0434\u043E\u043C, \u043A\u043E\u0440\u043F\u0443\u0441, \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0430\"]"));
    if (addressInput) {
      addressInput.value = suggestion.displayValue;
    }
    this.updateState({
      address: suggestion.displayValue || suggestion.value,
      addressSuggestions: [],
      showAddressSuggestions: false
    });
  },
  validateField: function validateField(field, value) {
    switch (field) {
      case 'fullName':
        if (!value) return 'Имя обязательно';
        if (value.length < 2) return 'Имя слишком короткое';
        if (!/^[а-яёА-ЯЁ\-\s]+$/.test(value)) return 'Только кириллица, пробелы и тире';
        return '';
      case 'city':
        if (!value) return 'Город обязателен';
        if (!this.state.cities.some(function (city) {
          return city.name === value;
        })) {
          return 'Город не найден в списке доступных';
        }
        return '';
      case 'address':
        if (!value) return 'Адрес обязателен';
        if (value.length < 5) return 'Адрес слишком короткий';
        return '';
      default:
        return '';
    }
  },
  handleChange: function handleChange(field) {
    var _this6 = this;
    return function (e) {
      if (_this6.props.readonly) return;
      var value = e.target.value;
      var error = _this6.validateField(field, value);
      _this6.updateState(_defineProperty(_defineProperty({}, field, value), "errors", _objectSpread(_objectSpread({}, _this6.state.errors), {}, _defineProperty({}, field, error))));
    };
  },
  validateAll: function validateAll() {
    var _this$state = this.state,
      email = _this$state.email,
      fullName = _this$state.fullName,
      city = _this$state.city,
      address = _this$state.address;
    var errors = {};
    errors.fullName = this.validateField('fullName', fullName);
    errors.city = this.validateField('city', city);
    errors.address = this.validateField('address', address);
    this.updateState({
      errors: errors
    });
    return !Object.values(errors).some(function (error) {
      return error !== '';
    });
  },
  handleSave: function handleSave() {
    var _this7 = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
      var user, city, updates, _t4;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.p = _context5.n) {
          case 0:
            if (_this7.validateAll()) {
              _context5.n = 1;
              break;
            }
            return _context5.a(2);
          case 1:
            user = _modules_authManager__WEBPACK_IMPORTED_MODULE_1__.authManager.getUser();
            if (user) {
              _context5.n = 2;
              break;
            }
            return _context5.a(2);
          case 2:
            _this7.updateState({
              isSaving: true
            });
            _context5.p = 3;
            city = _this7.state.cities.find(function (c) {
              return c.name === _this7.state.city;
            });
            updates = {
              name: _this7.state.fullName,
              address: _this7.state.address,
              city_id: city ? city.id : ''
            };
            _context5.n = 4;
            return _modules_profileApi__WEBPACK_IMPORTED_MODULE_2__.profileApi.updateProfile(user.id, updates);
          case 4:
            _context5.n = 6;
            break;
          case 5:
            _context5.p = 5;
            _t4 = _context5.v;
            console.error(_t4);
          case 6:
            _context5.p = 6;
            _this7.updateState({
              isSaving: false
            });
            return _context5.f(6);
          case 7:
            return _context5.a(2);
        }
      }, _callee5, null, [[3, 5, 6, 7]]);
    }))();
  },
  render: function render() {
    var _this8 = this;
    var _this$state2 = this.state,
      errors = _this$state2.errors,
      isLoading = _this$state2.isLoading,
      isSaving = _this$state2.isSaving,
      showCitySuggestions = _this$state2.showCitySuggestions,
      addressSuggestions = _this$state2.addressSuggestions,
      showAddressSuggestions = _this$state2.showAddressSuggestions,
      isAddressLoading = _this$state2.isAddressLoading;
    var citySuggestions = this.getCitySuggestions();
    if (isLoading) {
      return h("div", null, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...");
    }
    return h("div", {
      class: _PersonalInfo_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].personalInfoForm
    }, h("div", {
      class: _PersonalInfo_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].personalInfoForm__field
    }, h("input", {
      type: "email",
      placeholder: "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430",
      value: this.state.email,
      on: {
        input: this.handleChange('email')
      },
      class: "".concat(_PersonalInfo_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].personalInfoForm__input, " ").concat(errors.email ? _PersonalInfo_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].personalInfoForm__input_error : ''),
      required: true,
      disabled: true
    })), h("div", {
      class: _PersonalInfo_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].personalInfoForm__field
    }, h("input", {
      type: "text",
      placeholder: "\u0418\u043C\u044F \u0438 \u0444\u0430\u043C\u0438\u043B\u0438\u044F",
      value: this.state.fullName,
      on: {
        input: this.handleChange('fullName')
      },
      class: "".concat(_PersonalInfo_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].personalInfoForm__input, " ").concat(errors.fullName ? _PersonalInfo_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].personalInfoForm__input_error : ''),
      required: true,
      disabled: this.props.readonly
    }), errors.fullName ? h("div", {
      class: "".concat(_PersonalInfo_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].personalInfoForm__error, " ").concat(_PersonalInfo_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].active)
    }, errors.fullName) : null), h("h2", {
      class: _PersonalInfo_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].personalInfoForm__title
    }, "\u0410\u0434\u0440\u0435\u0441 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438"), h("div", {
      class: _PersonalInfo_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].personalInfoForm__field
    }, h("h3", {
      class: _PersonalInfo_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].personalInfoForm__addressLabel
    }, "\u0413\u043E\u0440\u043E\u0434"), h("div", {
      class: _PersonalInfo_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].cityWrapper
    }, h("input", {
      type: "text",
      placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0433\u043E\u0440\u043E\u0434",
      value: this.state.city,
      on: {
        input: function input(e) {
          var value = e.target.value;
          _this8.updateState({
            city: value,
            showCitySuggestions: true
          });
        },
        focus: function focus() {
          return _this8.updateState({
            showCitySuggestions: true
          });
        },
        blur: function blur() {
          return _this8.updateState({
            showCitySuggestions: false
          });
        }
      },
      class: "".concat(_PersonalInfo_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].personalInfoForm__input, " ").concat(errors.city ? _PersonalInfo_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].personalInfoForm__input_error : ''),
      required: true,
      disabled: this.props.readonly
    }), showCitySuggestions && citySuggestions.length > 0 ? h("div", {
      class: _PersonalInfo_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].suggestions
    }, citySuggestions.map(function (city) {
      return h("div", {
        key: city.id,
        class: _PersonalInfo_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].suggestion,
        on: {
          mousedown: function mousedown(e) {
            e.preventDefault();
            _this8.handleCitySelect(city.name);
          }
        }
      }, city.name);
    })) : null), errors.city ? h("div", {
      class: _PersonalInfo_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].personalInfoForm__error
    }, errors.city) : null), h("div", {
      class: _PersonalInfo_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].personalInfoForm__field
    }, h("h3", {
      class: _PersonalInfo_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].personalInfoForm__addressLabel
    }, "\u0410\u0434\u0440\u0435\u0441"), h("div", {
      class: _PersonalInfo_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].cityWrapper
    }, h("input", {
      type: "text",
      placeholder: "\u0423\u043B\u0438\u0446\u0430, \u0434\u043E\u043C, \u043A\u043E\u0440\u043F\u0443\u0441, \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0430",
      value: this.state.address,
      on: {
        input: function input(e) {
          var value = e.target.value;
          _this8.handleAddressInput(value);
        },
        focus: function focus() {
          return _this8.updateState({
            showAddressSuggestions: true
          });
        },
        blur: function blur() {
          return _this8.updateState({
            showAddressSuggestions: false
          });
        }
      },
      class: "".concat(_PersonalInfo_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].personalInfoForm__input, " ").concat(errors.address ? _PersonalInfo_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].personalInfoForm__input_error : ''),
      required: true,
      disabled: this.props.readonly
    }), isAddressLoading ? h("div", {
      class: _PersonalInfo_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].loading
    }, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...") : null, showAddressSuggestions && addressSuggestions.length > 0 ? h("div", {
      class: _PersonalInfo_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].suggestions
    }, addressSuggestions.map(function (suggestion, index) {
      return h("div", {
        key: index,
        class: _PersonalInfo_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].suggestion,
        on: {
          mousedown: function mousedown(e) {
            console.log(suggestion);
            e.preventDefault();
            _this8.handleAddressSelect(suggestion);
          }
        }
      }, suggestion.displayValue || suggestion.value);
    })) : null), errors.address ? h("div", {
      class: _PersonalInfo_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].personalInfoForm__error
    }, errors.address) : null), h("div", {
      class: _PersonalInfo_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].personalInfoForm__field
    }, h("textarea", {
      placeholder: "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439",
      value: this.state.comment,
      rows: 3,
      on: {
        input: this.handleChange('comment')
      },
      class: _PersonalInfo_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].personalInfoForm__textarea,
      disabled: this.props.readonly
    })), !this.props.readonly ? h(_Button_Button__WEBPACK_IMPORTED_MODULE_5__.Button, {
      type: "button",
      variant: "accent",
      text: isSaving ? 'Сохранение...' : 'Сохранить',
      onClick: function onClick() {
        return _this8.handleSave();
      },
      disabled: isSaving
    }) : null);
  }
});

/***/ }),

/***/ "./src/components/ProductCard/ProductCard.module.scss":
/*!************************************************************!*\
  !*** ./src/components/ProductCard/ProductCard.module.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./ProductCard.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/ProductCard/ProductCard.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/ProductCard/ProductCard.tsx":
/*!****************************************************!*\
  !*** ./src/components/ProductCard/ProductCard.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductCard: () => (/* binding */ ProductCard)
/* harmony export */ });
/* harmony import */ var _antiquemouse_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @antiquemouse/framework */ "./node_modules/@antiquemouse/framework/dist/index.js");
/* harmony import */ var _ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductCard.module.scss */ "./src/components/ProductCard/ProductCard.module.scss");
/* harmony import */ var _modules_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/api */ "./src/modules/api.ts");



var ProductCard = (0,_antiquemouse_framework__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render: function render() {
    var props = this.props;
    var product = props.product,
      onAddToCart = props.onAddToCart;
    var handleAddClick = function handleAddClick(e) {
      e.stopPropagation();
      e.preventDefault();
      onAddToCart === null || onAddToCart === void 0 || onAddToCart(product.id);
    };
    return h("div", {
      class: _ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].productCard
    }, h("div", {
      class: _ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].productCard__imageWrapper
    }, product.card_img && h("img", {
      class: _ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].productCard__image,
      src: "".concat(_modules_api__WEBPACK_IMPORTED_MODULE_2__.API.SERVICES.PICS).concat(product.card_img),
      alt: product.name
    })), h("div", {
      class: _ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].productCard__content
    }, h("h3", {
      class: _ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].productCard__name
    }, product.name), product.description && h("p", {
      class: _ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].productCard__description
    }, product.description), h("div", {
      class: _ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].productCard__footer
    }, h("div", {
      class: _ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].productCard__price
    }, product.price, " \u20BD"), h("button", {
      class: _ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].productCard__addBtn,
      on: {
        click: handleAddClick
      }
    }, "+"))));
  }
});

/***/ }),

/***/ "./src/components/ProductsBatch/ProductsBatch.module.scss":
/*!****************************************************************!*\
  !*** ./src/components/ProductsBatch/ProductsBatch.module.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ProductsBatch_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./ProductsBatch.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/ProductsBatch/ProductsBatch.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ProductsBatch_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ProductsBatch_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ProductsBatch_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ProductsBatch_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/ProductsBatch/ProductsBatch.tsx":
/*!********************************************************!*\
  !*** ./src/components/ProductsBatch/ProductsBatch.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductsBatch: () => (/* binding */ ProductsBatch)
/* harmony export */ });
/* harmony import */ var _antiquemouse_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @antiquemouse/framework */ "./node_modules/@antiquemouse/framework/dist/index.js");
/* harmony import */ var _ProductCard_ProductCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ProductCard/ProductCard */ "./src/components/ProductCard/ProductCard.tsx");
/* harmony import */ var _ProductsBatch_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductsBatch.module.scss */ "./src/components/ProductsBatch/ProductsBatch.module.scss");



var ProductsBatch = (0,_antiquemouse_framework__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render: function render() {
    var props = this.props;
    var products = props.products,
      onAddToCart = props.onAddToCart;
    return h("div", {
      class: _ProductsBatch_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].storeProducts
    }, h("div", {
      class: _ProductsBatch_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].storeProducts__grid
    }, products.map(function (product) {
      return h(_ProductCard_ProductCard__WEBPACK_IMPORTED_MODULE_1__.ProductCard, {
        product: product,
        onAddToCart: onAddToCart
      });
    })));
  }
});

/***/ }),

/***/ "./src/components/Search/Search.module.scss":
/*!**************************************************!*\
  !*** ./src/components/Search/Search.module.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Search_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./Search.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Search/Search.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Search_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Search_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Search_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Search_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Search/Search.tsx":
/*!******************************************!*\
  !*** ./src/components/Search/Search.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchBar: () => (/* binding */ SearchBar)
/* harmony export */ });
/* harmony import */ var _antiquemouse_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @antiquemouse/framework */ "./node_modules/@antiquemouse/framework/dist/index.js");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Button/Button */ "./src/components/Button/Button.tsx");
/* harmony import */ var _Search_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Search.module.scss */ "./src/components/Search/Search.module.scss");



var SearchBar = (0,_antiquemouse_framework__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  state: function state() {
    return {
      searchQuery: ''
    };
  },
  render: function render() {
    var _this = this;
    var props = this.props;
    var searchQuery = props.value || this.state.searchQuery;
    return h("form", {
      class: _Search_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].searchBar,
      on: {
        submit: function submit(e) {
          var _props$onSearch;
          e.preventDefault();
          (_props$onSearch = props.onSearch) === null || _props$onSearch === void 0 || _props$onSearch.call(props, searchQuery);
        }
      }
    }, h("img", {
      src: "/static/icons/search.png",
      alt: "search",
      class: _Search_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].searchBar__icon
    }), h("input", {
      type: "text",
      placeholder: props.placeholder || 'Поиск ресторанов и категорий',
      value: searchQuery,
      class: _Search_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].searchBar__input,
      on: {
        input: function input(e) {
          var target = e.target;
          _this.updateState({
            searchQuery: target.value
          });
        }
      }
    }), h(_Button_Button__WEBPACK_IMPORTED_MODULE_1__.Button, {
      type: "submit",
      variant: "accent",
      text: "\u041D\u0430\u0439\u0442\u0438"
    }));
  }
});

/***/ }),

/***/ "./src/components/Selector/Selector.module.scss":
/*!******************************************************!*\
  !*** ./src/components/Selector/Selector.module.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Selector_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./Selector.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Selector/Selector.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Selector_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Selector_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Selector_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Selector_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Selector/Selector.tsx":
/*!**********************************************!*\
  !*** ./src/components/Selector/Selector.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CitySelector: () => (/* binding */ CitySelector)
/* harmony export */ });
/* harmony import */ var _antiquemouse_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @antiquemouse/framework */ "./node_modules/@antiquemouse/framework/dist/index.js");
/* harmony import */ var _modules_authManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/authManager */ "./src/modules/authManager.ts");
/* harmony import */ var _modules_profileApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/profileApi */ "./src/modules/profileApi.ts");
/* harmony import */ var _modules_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/store */ "./src/modules/store.ts");
/* harmony import */ var _modules_storeApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/storeApi */ "./src/modules/storeApi.ts");
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/auth */ "./src/utils/auth.ts");
/* harmony import */ var _Selector_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Selector.module.scss */ "./src/components/Selector/Selector.module.scss");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }







var CITY_KEY = 'selected_city';
function loadSelectedCity() {
  return _loadSelectedCity.apply(this, arguments);
}
function _loadSelectedCity() {
  _loadSelectedCity = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
    var user, profile, cities, userCity, data, _t;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          _context2.p = 0;
          if (!(_modules_store__WEBPACK_IMPORTED_MODULE_3__.store.get(_utils_auth__WEBPACK_IMPORTED_MODULE_5__.AUTH_IS_AUTHENTICATED) === true)) {
            _context2.n = 3;
            break;
          }
          user = _modules_authManager__WEBPACK_IMPORTED_MODULE_1__.authManager.getUser();
          _context2.n = 1;
          return _modules_profileApi__WEBPACK_IMPORTED_MODULE_2__.profileApi.getProfile(user.id);
        case 1:
          profile = _context2.v.body;
          _context2.n = 2;
          return _modules_storeApi__WEBPACK_IMPORTED_MODULE_4__.StoreApi.getCities();
        case 2:
          cities = _context2.v;
          userCity = cities.find(function (city) {
            return city.id === profile.city_id;
          });
          return _context2.a(2, userCity);
        case 3:
          data = localStorage.getItem(CITY_KEY);
          return _context2.a(2, data ? JSON.parse(data) : null);
        case 4:
          _context2.n = 6;
          break;
        case 5:
          _context2.p = 5;
          _t = _context2.v;
          console.error(_t);
          return _context2.a(2, null);
        case 6:
          return _context2.a(2);
      }
    }, _callee2, null, [[0, 5]]);
  }));
  return _loadSelectedCity.apply(this, arguments);
}
var CitySelector = (0,_antiquemouse_framework__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  state: function state() {
    return {
      cities: [],
      selectedCity: null,
      query: '',
      isOpen: false
    };
  },
  onMounted: function onMounted() {
    var _this = this;
    var handleDocumentClick = function handleDocumentClick(e) {
      var target = e.target;
      if (!target.closest(".".concat(_Selector_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].citySelector))) {
        _this.updateState({
          isOpen: false
        });
      }
    };
    document.addEventListener('click', handleDocumentClick);
    this.handleDocumentClick = handleDocumentClick;
    this.debounceTimer = null;
    _modules_storeApi__WEBPACK_IMPORTED_MODULE_4__.StoreApi.getCities().then(/*#__PURE__*/function () {
      var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(cities) {
        var selectedCity;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _this.updateState({
                cities: cities
              });
              _context.n = 1;
              return loadSelectedCity();
            case 1:
              selectedCity = _context.v;
              if (selectedCity) {
                _this.updateState({
                  selectedCity: selectedCity
                });
              } else if (cities.length > 0) {
                _this.handleSelect(cities[0]);
              }
            case 2:
              return _context.a(2);
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()).catch(function (error) {
      console.error(error);
    });
  },
  onUnmounted: function onUnmounted() {
    if (this.handleDocumentClick) {
      document.removeEventListener('click', this.handleDocumentClick);
    }
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
    }
  },
  saveSelectedCity: function saveSelectedCity(city) {
    try {
      if (_modules_authManager__WEBPACK_IMPORTED_MODULE_1__.authManager.getUser()) {
        _modules_profileApi__WEBPACK_IMPORTED_MODULE_2__.profileApi.updateProfile(_modules_authManager__WEBPACK_IMPORTED_MODULE_1__.authManager.getUser().id, {
          city_id: city.id,
          address: ''
        });
      } else {
        localStorage.setItem(CITY_KEY, JSON.stringify(city));
      }
    } catch (error) {
      console.error(error);
    }
    this.updateState({
      selectedCity: city
    });
  },
  handleSelect: function handleSelect(city) {
    this.saveSelectedCity(city);
    this.updateState({
      isOpen: false,
      query: ''
    });
  },
  toggleDropdown: function toggleDropdown() {
    this.updateState({
      isOpen: !this.state.isOpen
    });
  },
  handleSearchInput: function handleSearchInput(value) {
    var _this2 = this;
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
    }
    this.debounceTimer = setTimeout(function () {
      _this2.updateState({
        query: value
      });
    }, 300);
  },
  render: function render() {
    var _this3 = this;
    var _this$state = this.state,
      cities = _this$state.cities,
      selectedCity = _this$state.selectedCity,
      query = _this$state.query,
      isOpen = _this$state.isOpen;
    var filteredCities = cities.filter(function (city) {
      return city.name.toLowerCase().includes(query.toLowerCase());
    });
    return h("div", {
      class: _Selector_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].citySelector
    }, h("div", {
      class: _Selector_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].citySelector__trigger,
      on: {
        click: function click(e) {
          e.stopPropagation();
          _this3.toggleDropdown();
        }
      }
    }, h("img", {
      src: "/static/icons/address.png",
      alt: "\u0413\u043E\u0440\u043E\u0434",
      class: _Selector_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].citySelector__icon
    }), h("span", {
      class: _Selector_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].citySelector__value
    }, selectedCity ? selectedCity.name : 'Выберите город'), h("div", {
      class: _Selector_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].citySelector__arrow
    })), isOpen ? h("div", {
      class: _Selector_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].citySelector__dropdown,
      on: {
        click: function click(e) {
          return e.stopPropagation();
        }
      }
    }, h("input", {
      type: "text",
      class: _Selector_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].citySelector__search,
      placeholder: "\u041F\u043E\u0438\u0441\u043A...",
      value: query,
      on: {
        input: function input(e) {
          var value = e.target.value;
          _this3.handleSearchInput(value);
        }
      }
    }), h("div", {
      class: _Selector_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].citySelector__list
    }, filteredCities.length > 0 ? filteredCities.map(function (city) {
      return h("div", {
        class: _Selector_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].citySelector__option,
        on: {
          click: function click() {
            return _this3.handleSelect(city);
          }
        }
      }, city.name);
    }) : h("div", {
      class: _Selector_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].citySelector__empty
    }, "\u0413\u043E\u0440\u043E\u0434 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D"))) : null);
  }
});

/***/ }),

/***/ "./src/components/StoreInfo/StoreInfo.module.scss":
/*!********************************************************!*\
  !*** ./src/components/StoreInfo/StoreInfo.module.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_StoreInfo_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./StoreInfo.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/StoreInfo/StoreInfo.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_StoreInfo_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_StoreInfo_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_StoreInfo_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_StoreInfo_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/StoreInfo/StoreInfo.tsx":
/*!************************************************!*\
  !*** ./src/components/StoreInfo/StoreInfo.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StoreInfo: () => (/* binding */ StoreInfo)
/* harmony export */ });
/* harmony import */ var _antiquemouse_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @antiquemouse/framework */ "./node_modules/@antiquemouse/framework/dist/index.js");
/* harmony import */ var _modules_storeApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/storeApi */ "./src/modules/storeApi.ts");
/* harmony import */ var _StoreInfo_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StoreInfo.module.scss */ "./src/components/StoreInfo/StoreInfo.module.scss");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }



var StoreInfo = (0,_antiquemouse_framework__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  onMounted: function onMounted() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var cityName;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            if (!_this.props.store.city_id) {
              _context.n = 2;
              break;
            }
            _context.n = 1;
            return _this.getCityName(_this.props.store.city_id);
          case 1:
            cityName = _context.v;
            _this.updateState({
              cityName: cityName
            });
          case 2:
            return _context.a(2);
        }
      }, _callee);
    }))();
  },
  getCityName: function getCityName(id) {
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var cities, city;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            _context2.n = 1;
            return _modules_storeApi__WEBPACK_IMPORTED_MODULE_1__.StoreApi.getCities();
          case 1:
            cities = _context2.v;
            city = cities.find(function (city) {
              return city.id === id;
            });
            return _context2.a(2, city ? city.name : '');
        }
      }, _callee2);
    }))();
  },
  render: function render() {
    var props = this.props;
    var store = props.store;
    var cityName = this.state.cityName;
    return h("div", {
      class: _StoreInfo_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].storeInfo
    }, h("div", {
      class: _StoreInfo_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].storeInfo__imageWrapper
    }, store.card_img && h("img", {
      class: _StoreInfo_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].storeInfo__image,
      src: "http://90.156.218.233:8080/images/stores/".concat(store.card_img),
      alt: store.name
    }), h("div", {
      class: _StoreInfo_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].storeInfoPrimary
    }, h("h1", {
      class: _StoreInfo_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].storeInfo__title
    }, store.name), store.rating && h("span", {
      class: _StoreInfo_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].storeInfo__rating
    }, "\u0420\u0435\u0439\u0442\u0438\u043D\u0433: ", store.rating)), h("div", {
      class: _StoreInfo_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].storeInfoSecondary
    }, store.address && h("div", {
      class: _StoreInfo_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].storeInfo__detail
    }, h("strong", null, "\u0410\u0434\u0440\u0435\u0441:"), " ", store.address), store.open_at && store.closed_at && h("div", {
      class: _StoreInfo_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].storeInfo__detail
    }, h("strong", null, "\u0412\u0440\u0435\u043C\u044F \u0440\u0430\u0431\u043E\u0442\u044B:"), " ", store.open_at.slice(0, -6), " -", ' ', store.closed_at.slice(0, -6)), store.city_id && h("div", {
      class: _StoreInfo_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].storeInfo__detail
    }, h("strong", null, "\u0413\u043E\u0440\u043E\u0434:"), " ", cityName))));
  }
});

/***/ }),

/***/ "./src/components/SupportWidget/SupportWidget.module.scss":
/*!****************************************************************!*\
  !*** ./src/components/SupportWidget/SupportWidget.module.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_SupportWidget_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./SupportWidget.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/SupportWidget/SupportWidget.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_SupportWidget_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_SupportWidget_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_SupportWidget_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_SupportWidget_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/SupportWidget/SupportWidget.tsx":
/*!********************************************************!*\
  !*** ./src/components/SupportWidget/SupportWidget.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SupportWidget: () => (/* binding */ SupportWidget)
/* harmony export */ });
/* harmony import */ var _antiquemouse_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @antiquemouse/framework */ "./node_modules/@antiquemouse/framework/dist/index.js");
/* harmony import */ var _SupportWidget_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SupportWidget.module.scss */ "./src/components/SupportWidget/SupportWidget.module.scss");


var SupportWidget = (0,_antiquemouse_framework__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  props: [],
  state: function state() {
    return {
      isOpen: false
    };
  },
  toggleSupport: function toggleSupport() {
    this.updateState({
      isOpen: !this.state.isOpen
    });
  },
  render: function render() {
    var _this = this;
    return h("div", {
      class: _SupportWidget_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].support
    }, h("button", {
      class: _SupportWidget_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].supportToggle,
      onClick: function onClick() {
        return _this.toggleSupport();
      }
    }, this.state.isOpen ? '✕' : '🛟'), this.state.isOpen && h("div", {
      class: _SupportWidget_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].supportWindow
    }, h("iframe", {
      src: "/support.html",
      width: "400",
      height: "600",
      style: {
        border: 'none',
        borderRadius: '8px'
      }
    })));
  }
});

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_CommonCSS_Variables_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/CommonCSS/Variables.css */ "./src/components/CommonCSS/Variables.css");
/* harmony import */ var _components_CommonCSS_normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/CommonCSS/normalize.css */ "./src/components/CommonCSS/normalize.css");
/* harmony import */ var _antiquemouse_framework__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @antiquemouse/framework */ "./node_modules/@antiquemouse/framework/dist/index.js");
/* harmony import */ var _modules_authManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/authManager */ "./src/modules/authManager.ts");
/* harmony import */ var _modules_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/router */ "./src/modules/router.ts");





window.h = _antiquemouse_framework__WEBPACK_IMPORTED_MODULE_2__.h;
if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/sw.js', {
      scope: '/'
    }).then(function (registration) {
      console.log('Service Worker registered with scope:', registration.scope);
    }).catch(function (error) {
      console.error('Service Worker registration failed:', error);
    });
  });
}
if (typeof document !== 'undefined') {
  await _modules_authManager__WEBPACK_IMPORTED_MODULE_3__.authManager.checkAuth();
  (0,_modules_router__WEBPACK_IMPORTED_MODULE_4__.initRouter)();
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./src/modules/api.ts":
/*!****************************!*\
  !*** ./src/modules/api.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   API: () => (/* binding */ API)
/* harmony export */ });


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var API = /*#__PURE__*/function () {
  function API() {
    _classCallCheck(this, API);
  }
  return _createClass(API, null, [{
    key: "getCsrfToken",
    value: function getCsrfToken() {
      var name = 'csrf_token';
      var value = "; ".concat(document.cookie);
      var parts = value.split("; ".concat(name, "="));
      if (parts.length === 2) {
        return parts.pop().split(';').shift() || null;
      }
      return null;
    }
  }, {
    key: "ensureCsrfToken",
    value: function () {
      var _ensureCsrfToken = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var csrfToken;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              if (!this.csrfRequest) {
                _context.n = 2;
                break;
              }
              _context.n = 1;
              return this.csrfRequest;
            case 1:
              return _context.a(2, _context.v);
            case 2:
              csrfToken = this.getCsrfToken();
              if (!csrfToken) {
                _context.n = 3;
                break;
              }
              return _context.a(2, csrfToken);
            case 3:
              this.csrfRequest = this.requestNewCsrfToken();
              _context.p = 4;
              _context.n = 5;
              return this.csrfRequest;
            case 5:
              csrfToken = _context.v;
              return _context.a(2, csrfToken);
            case 6:
              _context.p = 6;
              this.csrfRequest = null;
              return _context.f(6);
            case 7:
              return _context.a(2);
          }
        }, _callee, this, [[4,, 6, 7]]);
      }));
      function ensureCsrfToken() {
        return _ensureCsrfToken.apply(this, arguments);
      }
      return ensureCsrfToken;
    }()
  }, {
    key: "requestNewCsrfToken",
    value: function () {
      var _requestNewCsrfToken = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var response, text, data, newCsrfToken, _t;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _context2.p = 0;
              _context2.n = 1;
              return fetch("".concat(this.SERVICES.AUTH, "/csrf"), {
                method: 'GET',
                credentials: 'include'
              });
            case 1:
              response = _context2.v;
              if (response.ok) {
                _context2.n = 2;
                break;
              }
              throw new Error("HTTP ".concat(response.status, ": Failed to get CSRF token"));
            case 2:
              _context2.n = 3;
              return response.text();
            case 3:
              text = _context2.v;
              data = text ? JSON.parse(text) : {};
              newCsrfToken = data.csrf_token || this.getCsrfToken();
              if (newCsrfToken) {
                _context2.n = 4;
                break;
              }
              throw new Error('CSRF token not received');
            case 4:
              return _context2.a(2, newCsrfToken);
            case 5:
              _context2.p = 5;
              _t = _context2.v;
              console.error(_t);
              throw _t;
            case 6:
              return _context2.a(2);
          }
        }, _callee2, this, [[0, 5]]);
      }));
      function requestNewCsrfToken() {
        return _requestNewCsrfToken.apply(this, arguments);
      }
      return requestNewCsrfToken;
    }()
  }, {
    key: "getJwtToken",
    value: function getJwtToken() {
      var name = 'jwt_token=';
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
          return c.substring(name.length, c.length);
        }
      }
      return null;
    }
  }, {
    key: "fetch",
    value: function (_fetch) {
      function fetch(_x, _x2, _x3) {
        return _fetch.apply(this, arguments);
      }
      fetch.toString = function () {
        return _fetch.toString();
      };
      return fetch;
    }(/*#__PURE__*/function () {
      var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(service, inputRelative, init) {
        var headers, csrfToken, jwtToken, finalInit, baseUrl, fullUrl, response;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              if (!init) init = {};
              headers = new Headers(init.headers);
              if (!(init.method && ['POST', 'PUT', 'DELETE'].includes(init.method))) {
                _context3.n = 3;
                break;
              }
              csrfToken = this.getCsrfToken();
              if (csrfToken) {
                _context3.n = 2;
                break;
              }
              _context3.n = 1;
              return this.ensureCsrfToken();
            case 1:
              csrfToken = _context3.v;
            case 2:
              if (csrfToken) {
                headers.set('X-CSRF-Token', csrfToken);
              }
            case 3:
              if (!(init.body instanceof FormData) && !headers.has('Content-Type')) {
                headers.set('Content-Type', 'application/json');
              }
              jwtToken = this.getJwtToken();
              if (jwtToken) {
                headers.set('Authorization', "Bearer ".concat(jwtToken));
              }
              finalInit = _objectSpread(_objectSpread({}, init), {}, {
                headers: headers,
                credentials: 'include'
              });
              baseUrl = API.SERVICES[service];
              fullUrl = baseUrl + inputRelative;
              _context3.n = 4;
              return fetch(fullUrl, finalInit);
            case 4:
              response = _context3.v;
              return _context3.a(2, response);
          }
        }, _callee3, this);
      }));
      return function (_x4, _x5, _x6) {
        return _ref.apply(this, arguments);
      };
    }())
  }, {
    key: "post",
    value: function () {
      var _post = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(service, url, data) {
        var response;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              _context4.n = 1;
              return API.fetch(service, url, {
                method: 'POST',
                body: data ? JSON.stringify(data) : undefined
              });
            case 1:
              response = _context4.v;
              return _context4.a(2, this.parseResponse(response));
          }
        }, _callee4, this);
      }));
      function post(_x7, _x8, _x9) {
        return _post.apply(this, arguments);
      }
      return post;
    }()
  }, {
    key: "get",
    value: function () {
      var _get = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(service, url) {
        var response;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              _context5.n = 1;
              return API.fetch(service, url, {
                method: 'GET'
              });
            case 1:
              response = _context5.v;
              return _context5.a(2, this.parseResponse(response));
          }
        }, _callee5, this);
      }));
      function get(_x0, _x1) {
        return _get.apply(this, arguments);
      }
      return get;
    }()
  }, {
    key: "put",
    value: function () {
      var _put = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(service, url, data) {
        var response;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.n) {
            case 0:
              _context6.n = 1;
              return this.fetch(service, url, {
                method: 'PUT',
                body: data ? JSON.stringify(data) : undefined
              });
            case 1:
              response = _context6.v;
              return _context6.a(2, this.parseResponse(response));
          }
        }, _callee6, this);
      }));
      function put(_x10, _x11, _x12) {
        return _put.apply(this, arguments);
      }
      return put;
    }()
  }, {
    key: "del",
    value: function () {
      var _del = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(service, url) {
        var response;
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.n) {
            case 0:
              _context7.n = 1;
              return this.fetch(service, url, {
                method: 'DELETE'
              });
            case 1:
              response = _context7.v;
              return _context7.a(2, this.parseResponse(response));
          }
        }, _callee7, this);
      }));
      function del(_x13, _x14) {
        return _del.apply(this, arguments);
      }
      return del;
    }()
  }, {
    key: "parseResponse",
    value: function () {
      var _parseResponse = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(response) {
        var isError, text, rawData, errorMessage, _t2;
        return _regenerator().w(function (_context8) {
          while (1) switch (_context8.p = _context8.n) {
            case 0:
              isError = !response.ok;
              _context8.p = 1;
              _context8.n = 2;
              return response.text();
            case 2:
              text = _context8.v;
              rawData = text ? JSON.parse(text) : null;
              if (!isError) {
                _context8.n = 3;
                break;
              }
              errorMessage = _typeof(rawData) === 'object' && rawData !== null ? rawData.message || rawData.error || "HTTP ".concat(response.status) : "HTTP ".concat(response.status);
              return _context8.a(2, {
                service: {
                  success: '',
                  error: errorMessage
                },
                body: rawData
              });
            case 3:
              return _context8.a(2, {
                service: {
                  success: 'OK',
                  error: ''
                },
                body: rawData
              });
            case 4:
              _context8.p = 4;
              _t2 = _context8.v;
              return _context8.a(2, {
                service: {
                  success: '',
                  error: "HTTP ".concat(response.status, ": failed to parse response")
                },
                body: null
              });
          }
        }, _callee8, null, [[1, 4]]);
      }));
      function parseResponse(_x15) {
        return _parseResponse.apply(this, arguments);
      }
      return parseResponse;
    }()
  }]);
}();
_defineProperty(API, "SERVICES", {
  AUTH: 'http://90.156.218.233:8082/api/v0',
  PROFILE: 'http://90.156.218.233:8081/api/v0',
  STORE: 'http://90.156.218.233:8080/api/v0',
  ORDER: 'http://90.156.218.233:8084/api/v0',
  PICS: 'http://90.156.218.233:8080'
});
_defineProperty(API, "csrfRequest", null);

/***/ }),

/***/ "./src/modules/authManager.ts":
/*!************************************!*\
  !*** ./src/modules/authManager.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthManager: () => (/* binding */ AuthManager),
/* harmony export */   authManager: () => (/* binding */ authManager)
/* harmony export */ });
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/auth */ "./src/utils/auth.ts");
/* harmony import */ var _cartManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cartManager */ "./src/modules/cartManager.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ "./src/modules/store.ts");
/* harmony import */ var _userApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./userApi */ "./src/modules/userApi.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




var AuthManager = /*#__PURE__*/function () {
  function AuthManager() {
    _classCallCheck(this, AuthManager);
  }
  return _createClass(AuthManager, [{
    key: "login",
    value: function () {
      var _login = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(email, password) {
        var response, authData, userData, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _context.p = 0;
              _context.n = 1;
              return _userApi__WEBPACK_IMPORTED_MODULE_3__.userApi.login({
                email: email,
                password: password
              });
            case 1:
              response = _context.v;
              if (!response.service.error) {
                _context.n = 2;
                break;
              }
              throw new Error("Login failed: ".concat(response.service.error));
            case 2:
              authData = response.body;
              userData = {
                id: authData.user_id,
                email: authData.email
              };
              if (userData.id && userData.email) {
                _store__WEBPACK_IMPORTED_MODULE_2__.store.set(_utils_auth__WEBPACK_IMPORTED_MODULE_0__.AUTH_USER, userData);
                _store__WEBPACK_IMPORTED_MODULE_2__.store.set(_utils_auth__WEBPACK_IMPORTED_MODULE_0__.AUTH_IS_AUTHENTICATED, true);
              }
              _context.n = 3;
              return (0,_cartManager__WEBPACK_IMPORTED_MODULE_1__.syncCart)();
            case 3:
              _context.n = 5;
              break;
            case 4:
              _context.p = 4;
              _t = _context.v;
              throw _t;
            case 5:
              return _context.a(2);
          }
        }, _callee, null, [[0, 4]]);
      }));
      function login(_x, _x2) {
        return _login.apply(this, arguments);
      }
      return login;
    }()
  }, {
    key: "register",
    value: function () {
      var _register = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(email, password) {
        var response, _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _context2.p = 0;
              _context2.n = 1;
              return _userApi__WEBPACK_IMPORTED_MODULE_3__.userApi.register({
                email: email,
                password: password
              });
            case 1:
              response = _context2.v;
              if (!response.service.error) {
                _context2.n = 2;
                break;
              }
              throw new Error(response.service.error);
            case 2:
              _context2.n = 3;
              return this.login(email, password);
            case 3:
              _context2.n = 5;
              break;
            case 4:
              _context2.p = 4;
              _t2 = _context2.v;
              throw _t2;
            case 5:
              return _context2.a(2);
          }
        }, _callee2, this, [[0, 4]]);
      }));
      function register(_x3, _x4) {
        return _register.apply(this, arguments);
      }
      return register;
    }()
  }, {
    key: "logout",
    value: function () {
      var _logout = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var _t3;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              _context3.p = 0;
              _context3.n = 1;
              return _userApi__WEBPACK_IMPORTED_MODULE_3__.userApi.logout();
            case 1:
              _context3.n = 3;
              break;
            case 2:
              _context3.p = 2;
              _t3 = _context3.v;
              console.warn('Logout API failed', _t3);
            case 3:
              _context3.p = 3;
              _store__WEBPACK_IMPORTED_MODULE_2__.store.set(_utils_auth__WEBPACK_IMPORTED_MODULE_0__.AUTH_USER, null);
              _store__WEBPACK_IMPORTED_MODULE_2__.store.set(_utils_auth__WEBPACK_IMPORTED_MODULE_0__.AUTH_IS_AUTHENTICATED, false);
              return _context3.f(3);
            case 4:
              return _context3.a(2);
          }
        }, _callee3, null, [[0, 2, 3, 4]]);
      }));
      function logout() {
        return _logout.apply(this, arguments);
      }
      return logout;
    }()
  }, {
    key: "checkAuth",
    value: function () {
      var _checkAuth = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var response, authData, userData, _t4;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              _context4.p = 0;
              _context4.n = 1;
              return _userApi__WEBPACK_IMPORTED_MODULE_3__.userApi.refresh();
            case 1:
              response = _context4.v;
              if (!(response.service.error || !response.body)) {
                _context4.n = 2;
                break;
              }
              _store__WEBPACK_IMPORTED_MODULE_2__.store.set(_utils_auth__WEBPACK_IMPORTED_MODULE_0__.AUTH_USER, null);
              _store__WEBPACK_IMPORTED_MODULE_2__.store.set(_utils_auth__WEBPACK_IMPORTED_MODULE_0__.AUTH_IS_AUTHENTICATED, false);
              return _context4.a(2, false);
            case 2:
              authData = response.body;
              userData = {
                id: authData.user_id,
                email: authData.email
              };
              _store__WEBPACK_IMPORTED_MODULE_2__.store.set(_utils_auth__WEBPACK_IMPORTED_MODULE_0__.AUTH_USER, userData);
              _store__WEBPACK_IMPORTED_MODULE_2__.store.set(_utils_auth__WEBPACK_IMPORTED_MODULE_0__.AUTH_IS_AUTHENTICATED, true);
              return _context4.a(2, true);
            case 3:
              _context4.p = 3;
              _t4 = _context4.v;
              _store__WEBPACK_IMPORTED_MODULE_2__.store.set(_utils_auth__WEBPACK_IMPORTED_MODULE_0__.AUTH_USER, null);
              _store__WEBPACK_IMPORTED_MODULE_2__.store.set(_utils_auth__WEBPACK_IMPORTED_MODULE_0__.AUTH_IS_AUTHENTICATED, false);
              return _context4.a(2, false);
          }
        }, _callee4, null, [[0, 3]]);
      }));
      function checkAuth() {
        return _checkAuth.apply(this, arguments);
      }
      return checkAuth;
    }()
  }, {
    key: "getUser",
    value: function getUser() {
      return _store__WEBPACK_IMPORTED_MODULE_2__.store.get(_utils_auth__WEBPACK_IMPORTED_MODULE_0__.AUTH_USER);
    }
  }, {
    key: "isAuthenticated",
    value: function isAuthenticated() {
      return _store__WEBPACK_IMPORTED_MODULE_2__.store.get(_utils_auth__WEBPACK_IMPORTED_MODULE_0__.AUTH_IS_AUTHENTICATED);
    }
  }]);
}();
var authManager = new AuthManager();

/***/ }),

/***/ "./src/modules/cartManager.ts":
/*!************************************!*\
  !*** ./src/modules/cartManager.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addToCart: () => (/* binding */ addToCart),
/* harmony export */   clearCart: () => (/* binding */ clearCart),
/* harmony export */   getCartFromStorage: () => (/* binding */ getCartFromStorage),
/* harmony export */   removeFromCart: () => (/* binding */ removeFromCart),
/* harmony export */   saveCartToStorage: () => (/* binding */ saveCartToStorage),
/* harmony export */   syncCart: () => (/* binding */ syncCart),
/* harmony export */   updateQuantity: () => (/* binding */ updateQuantity)
/* harmony export */ });
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/auth */ "./src/utils/auth.ts");
/* harmony import */ var _authManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authManager */ "./src/modules/authManager.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ "./src/modules/store.ts");
/* harmony import */ var _storeApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storeApi */ "./src/modules/storeApi.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }




var CART_KEY = 'guest_cart';
function getCartFromStorage() {
  return _getCartFromStorage.apply(this, arguments);
}
function _getCartFromStorage() {
  _getCartFromStorage = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var cart, data, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          _context.p = 0;
          _context.n = 1;
          return _authManager__WEBPACK_IMPORTED_MODULE_1__.authManager.checkAuth();
        case 1:
          if (!_context.v) {
            _context.n = 3;
            break;
          }
          _context.n = 2;
          return _storeApi__WEBPACK_IMPORTED_MODULE_3__.StoreApi.getUserCart();
        case 2:
          cart = _context.v;
          return _context.a(2, cart.items);
        case 3:
          data = localStorage.getItem(CART_KEY);
          return _context.a(2, data ? JSON.parse(data) : []);
        case 4:
          _context.n = 6;
          break;
        case 5:
          _context.p = 5;
          _t = _context.v;
          console.error('Cart parse error', _t);
          return _context.a(2, []);
        case 6:
          return _context.a(2);
      }
    }, _callee, null, [[0, 5]]);
  }));
  return _getCartFromStorage.apply(this, arguments);
}
function syncCart() {
  return _syncCart.apply(this, arguments);
}
function _syncCart() {
  _syncCart = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
    var localData, localCart, userCart, updateItems, totalCount, _totalCount, _t2;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          _context2.p = 0;
          localData = localStorage.getItem(CART_KEY);
          localCart = localData ? JSON.parse(localData) : [];
          _context2.n = 1;
          return _storeApi__WEBPACK_IMPORTED_MODULE_3__.StoreApi.getUserCart();
        case 1:
          userCart = _context2.v;
          if (!(localCart.length > 0 && userCart.items.length === 0)) {
            _context2.n = 3;
            break;
          }
          updateItems = localCart.map(function (item) {
            return {
              id: item.id,
              quantity: Number(item.quantity)
            };
          });
          _context2.n = 2;
          return _storeApi__WEBPACK_IMPORTED_MODULE_3__.StoreApi.updateCart(updateItems);
        case 2:
          totalCount = updateItems.reduce(function (sum, item) {
            return sum + item.quantity;
          }, 0);
          _store__WEBPACK_IMPORTED_MODULE_2__.store.set(_utils_auth__WEBPACK_IMPORTED_MODULE_0__.CART_COUNT, totalCount);
          _context2.n = 4;
          break;
        case 3:
          _totalCount = userCart.items.reduce(function (sum, item) {
            return sum + item.quantity;
          }, 0);
          _store__WEBPACK_IMPORTED_MODULE_2__.store.set(_utils_auth__WEBPACK_IMPORTED_MODULE_0__.CART_COUNT, _totalCount);
        case 4:
          clearCart();
          _context2.n = 6;
          break;
        case 5:
          _context2.p = 5;
          _t2 = _context2.v;
          console.error('Cart sync error', _t2);
        case 6:
          return _context2.a(2);
      }
    }, _callee2, null, [[0, 5]]);
  }));
  return _syncCart.apply(this, arguments);
}
function saveCartToStorage(_x) {
  return _saveCartToStorage.apply(this, arguments);
}
function _saveCartToStorage() {
  _saveCartToStorage = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(items) {
    var updateItems, _t3;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.p = _context3.n) {
        case 0:
          _context3.p = 0;
          _context3.n = 1;
          return _authManager__WEBPACK_IMPORTED_MODULE_1__.authManager.checkAuth();
        case 1:
          if (!_context3.v) {
            _context3.n = 3;
            break;
          }
          updateItems = items.map(function (item) {
            return {
              id: item.id,
              quantity: Number(item.quantity)
            };
          });
          _context3.n = 2;
          return _storeApi__WEBPACK_IMPORTED_MODULE_3__.StoreApi.updateCart(updateItems);
        case 2:
          console.log('Save to backend:', items);
          _context3.n = 4;
          break;
        case 3:
          localStorage.setItem(CART_KEY, JSON.stringify(items));
        case 4:
          _context3.n = 6;
          break;
        case 5:
          _context3.p = 5;
          _t3 = _context3.v;
          console.error('Cart save error', _t3);
        case 6:
          return _context3.a(2);
      }
    }, _callee3, null, [[0, 5]]);
  }));
  return _saveCartToStorage.apply(this, arguments);
}
function addToCart(_x2) {
  return _addToCart.apply(this, arguments);
}
function _addToCart() {
  _addToCart = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(item) {
    var cart, existing, newCart, totalCount;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.n) {
        case 0:
          _context4.n = 1;
          return getCartFromStorage();
        case 1:
          cart = _context4.v;
          existing = cart.find(function (i) {
            return i.id === item.id;
          });
          if (existing) {
            newCart = cart.map(function (i) {
              return i.id === item.id ? _objectSpread(_objectSpread({}, i), {}, {
                quantity: i.quantity + item.quantity
              }) : i;
            });
          } else {
            newCart = [].concat(_toConsumableArray(cart), [item]);
          }
          saveCartToStorage(newCart);
          totalCount = newCart.reduce(function (sum, item) {
            return sum + item.quantity;
          }, 0);
          _store__WEBPACK_IMPORTED_MODULE_2__.store.set(_utils_auth__WEBPACK_IMPORTED_MODULE_0__.CART_COUNT, totalCount);
        case 2:
          return _context4.a(2);
      }
    }, _callee4);
  }));
  return _addToCart.apply(this, arguments);
}
function updateQuantity(_x3, _x4) {
  return _updateQuantity.apply(this, arguments);
}
function _updateQuantity() {
  _updateQuantity = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(id, quantity) {
    var cart, newCart, totalCount;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.n) {
        case 0:
          if (!(quantity <= 0)) {
            _context5.n = 2;
            break;
          }
          _context5.n = 1;
          return removeFromCart(id);
        case 1:
          return _context5.a(2);
        case 2:
          _context5.n = 3;
          return getCartFromStorage();
        case 3:
          cart = _context5.v;
          newCart = cart.map(function (item) {
            return item.id === id ? _objectSpread(_objectSpread({}, item), {}, {
              quantity: quantity
            }) : item;
          });
          saveCartToStorage(newCart);
          totalCount = newCart.reduce(function (sum, item) {
            return sum + item.quantity;
          }, 0);
          _store__WEBPACK_IMPORTED_MODULE_2__.store.set(_utils_auth__WEBPACK_IMPORTED_MODULE_0__.CART_COUNT, totalCount);
        case 4:
          return _context5.a(2);
      }
    }, _callee5);
  }));
  return _updateQuantity.apply(this, arguments);
}
function removeFromCart(_x5) {
  return _removeFromCart.apply(this, arguments);
}
function _removeFromCart() {
  _removeFromCart = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(id) {
    var cart, newCart, totalCount;
    return _regenerator().w(function (_context6) {
      while (1) switch (_context6.n) {
        case 0:
          _context6.n = 1;
          return getCartFromStorage();
        case 1:
          cart = _context6.v;
          newCart = cart.filter(function (item) {
            return item.id !== id;
          });
          saveCartToStorage(newCart);
          totalCount = newCart.reduce(function (sum, item) {
            return sum + item.quantity;
          }, 0);
          _store__WEBPACK_IMPORTED_MODULE_2__.store.set(_utils_auth__WEBPACK_IMPORTED_MODULE_0__.CART_COUNT, totalCount);
        case 2:
          return _context6.a(2);
      }
    }, _callee6);
  }));
  return _removeFromCart.apply(this, arguments);
}
function clearCart() {
  try {
    localStorage.removeItem(CART_KEY);
    _store__WEBPACK_IMPORTED_MODULE_2__.store.set(_utils_auth__WEBPACK_IMPORTED_MODULE_0__.CART_COUNT, 0);
  } catch (e) {
    console.error('Cart clear error', e);
  }
}

/***/ }),

/***/ "./src/modules/orderApi.ts":
/*!*********************************!*\
  !*** ./src/modules/orderApi.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderApi: () => (/* binding */ OrderApi)
/* harmony export */ });
/* harmony import */ var _modules_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/api */ "./src/modules/api.ts");


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var OrderApi = /*#__PURE__*/function () {
  function OrderApi() {
    _classCallCheck(this, OrderApi);
  }
  return _createClass(OrderApi, null, [{
    key: "getOrders",
    value: function () {
      var _getOrders = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _response$body;
        var response;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return _modules_api__WEBPACK_IMPORTED_MODULE_0__.API.get('ORDER', '/orders');
            case 1:
              response = _context.v;
              return _context.a(2, (_response$body = response.body) !== null && _response$body !== void 0 ? _response$body : []);
          }
        }, _callee);
      }));
      function getOrders() {
        return _getOrders.apply(this, arguments);
      }
      return getOrders;
    }()
  }, {
    key: "getOrderById",
    value: function () {
      var _getOrderById = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(id) {
        var _response$body2;
        var response;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _context2.n = 1;
              return _modules_api__WEBPACK_IMPORTED_MODULE_0__.API.get('ORDER', "/orders/".concat(id));
            case 1:
              response = _context2.v;
              return _context2.a(2, (_response$body2 = response.body) !== null && _response$body2 !== void 0 ? _response$body2 : null);
          }
        }, _callee2);
      }));
      function getOrderById(_x) {
        return _getOrderById.apply(this, arguments);
      }
      return getOrderById;
    }()
  }, {
    key: "createOrder",
    value: function () {
      var _createOrder = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var _response$body3;
        var response;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              _context3.n = 1;
              return _modules_api__WEBPACK_IMPORTED_MODULE_0__.API.post('ORDER', "/orders");
            case 1:
              response = _context3.v;
              return _context3.a(2, (_response$body3 = response.body) !== null && _response$body3 !== void 0 ? _response$body3 : null);
          }
        }, _callee3);
      }));
      function createOrder() {
        return _createOrder.apply(this, arguments);
      }
      return createOrder;
    }()
  }, {
    key: "getOrderStatusById",
    value: function () {
      var _getOrderStatusById = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(id) {
        var _response$body4;
        var response;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              _context4.n = 1;
              return _modules_api__WEBPACK_IMPORTED_MODULE_0__.API.get('ORDER', "/orders/".concat(id, "/status"));
            case 1:
              response = _context4.v;
              return _context4.a(2, (_response$body4 = response.body) !== null && _response$body4 !== void 0 ? _response$body4 : null);
          }
        }, _callee4);
      }));
      function getOrderStatusById(_x2) {
        return _getOrderStatusById.apply(this, arguments);
      }
      return getOrderStatusById;
    }()
  }, {
    key: "fakePayment",
    value: function () {
      var _fakePayment = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(params) {
        var queryParams, url;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              queryParams = new URLSearchParams();
              queryParams.append('order_id', params.order_id);
              queryParams.append('return_url', params.return_url);
              if (params.price) queryParams.append('price', params.price);
              url = "http://90.156.218.233:8080/api/v0/fake-payment?".concat(queryParams.toString());
              window.location.href = url;
            case 1:
              return _context5.a(2);
          }
        }, _callee5);
      }));
      function fakePayment(_x3) {
        return _fakePayment.apply(this, arguments);
      }
      return fakePayment;
    }()
  }]);
}();

/***/ }),

/***/ "./src/modules/profileApi.ts":
/*!***********************************!*\
  !*** ./src/modules/profileApi.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileAPI: () => (/* binding */ ProfileAPI),
/* harmony export */   profileApi: () => (/* binding */ profileApi)
/* harmony export */ });
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/auth */ "./src/utils/auth.ts");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ "./src/modules/api.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ "./src/modules/store.ts");


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



/**
 * Класс для взаимодействия с API профиля пользователя.
 */
var ProfileAPI = /*#__PURE__*/function () {
  function ProfileAPI() {
    _classCallCheck(this, ProfileAPI);
  }
  return _createClass(ProfileAPI, [{
    key: "createProfile",
    value: (
    /**
     * Создаёт профиль пользователя.
     * @param profileData - Данные для создания профиля.
     * @returns Ответ API.
     */
    function () {
      var _createProfile = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(profileData) {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              return _context.a(2, _api__WEBPACK_IMPORTED_MODULE_1__.API.post('PROFILE', '/profiles', profileData));
          }
        }, _callee);
      }));
      function createProfile(_x) {
        return _createProfile.apply(this, arguments);
      }
      return createProfile;
    }()
    /**
     * Получает профиль пользователя по ID.
     * @param userId - Идентификатор пользователя.
     * @returns Ответ API с профилем.
     */
    )
  }, {
    key: "getProfile",
    value: (function () {
      var _getProfile = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(userId) {
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              return _context2.a(2, _api__WEBPACK_IMPORTED_MODULE_1__.API.get('PROFILE', "/profiles/".concat(userId)));
          }
        }, _callee2);
      }));
      function getProfile(_x2) {
        return _getProfile.apply(this, arguments);
      }
      return getProfile;
    }()
    /**
     * Обновляет профиль пользователя.
     * @param userId - Идентификатор пользователя.
     * @param updates - Объект с обновляемыми полями.
     * @returns Ответ API.
     */
    )
  }, {
    key: "updateProfile",
    value: (function () {
      var _updateProfile = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(userId, updates) {
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              return _context3.a(2, _api__WEBPACK_IMPORTED_MODULE_1__.API.put('PROFILE', "/profiles/".concat(userId), updates));
          }
        }, _callee3);
      }));
      function updateProfile(_x3, _x4) {
        return _updateProfile.apply(this, arguments);
      }
      return updateProfile;
    }()
    /**
     * Удаляет профиль пользователя.
     * @param userId - Идентификатор пользователя.
     * @returns Ответ API.
     */
    )
  }, {
    key: "deleteProfile",
    value: (function () {
      var _deleteProfile = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(userId) {
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              return _context4.a(2, _api__WEBPACK_IMPORTED_MODULE_1__.API.del('PROFILE', "/profiles/".concat(userId)));
          }
        }, _callee4);
      }));
      function deleteProfile(_x5) {
        return _deleteProfile.apply(this, arguments);
      }
      return deleteProfile;
    }()
    /**
     * Загружает аватар пользователя.
     * @param userId - Идентификатор пользователя.
     * @param avatarFile - Файл аватара.
     * @returns Ответ API.
     */
    )
  }, {
    key: "uploadAvatar",
    value: (function () {
      var _uploadAvatar = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(userId, avatarFile) {
        var formData, headers, csrfToken, response;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              formData = new FormData();
              formData.append('avatar', avatarFile);
              headers = new Headers();
              csrfToken = _api__WEBPACK_IMPORTED_MODULE_1__.API.getCsrfToken();
              if (csrfToken) {
                headers.set('X-CSRF-Token', csrfToken);
              }
              _context5.n = 1;
              return fetch("".concat(_api__WEBPACK_IMPORTED_MODULE_1__.API.SERVICES.PROFILE, "/profiles/").concat(userId, "/avatar"), {
                method: 'POST',
                headers: headers,
                body: formData,
                credentials: 'include'
              });
            case 1:
              response = _context5.v;
              return _context5.a(2, _api__WEBPACK_IMPORTED_MODULE_1__.API.parseResponse(response));
          }
        }, _callee5);
      }));
      function uploadAvatar(_x6, _x7) {
        return _uploadAvatar.apply(this, arguments);
      }
      return uploadAvatar;
    }()
    /**
     * Сохраняет гостевой город из localStorage в профиль текущего пользователя,
     * если в профиле город не задан.
     */
    )
  }, {
    key: "saveGuestCityToProfile",
    value: (function () {
      var _saveGuestCityToProfile = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        var user, guestCityJson, guestCity, profileResponse, profile, _t;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.p = _context6.n) {
            case 0:
              user = _store__WEBPACK_IMPORTED_MODULE_2__.store.get(_utils_auth__WEBPACK_IMPORTED_MODULE_0__.AUTH_USER);
              if (user) {
                _context6.n = 1;
                break;
              }
              console.log('User not found, skipping city save');
              return _context6.a(2);
            case 1:
              guestCityJson = localStorage.getItem('selected_city');
              if (guestCityJson) {
                _context6.n = 2;
                break;
              }
              return _context6.a(2);
            case 2:
              _context6.p = 2;
              guestCity = JSON.parse(guestCityJson);
              if (!(!guestCity.id || guestCity.id.trim() === '')) {
                _context6.n = 3;
                break;
              }
              return _context6.a(2);
            case 3:
              _context6.n = 4;
              return this.getProfile(user.id);
            case 4:
              profileResponse = _context6.v;
              if (!(profileResponse.service.success && profileResponse.body)) {
                _context6.n = 5;
                break;
              }
              profile = profileResponse.body;
              if (!(!profile.city_id || profile.city_id.trim() === '')) {
                _context6.n = 5;
                break;
              }
              _context6.n = 5;
              return this.updateProfile(user.id, {
                city_id: guestCity.id
              });
            case 5:
              localStorage.removeItem('selected_city');
              _context6.n = 7;
              break;
            case 6:
              _context6.p = 6;
              _t = _context6.v;
              localStorage.removeItem('selected_city');
            case 7:
              return _context6.a(2);
          }
        }, _callee6, this, [[2, 6]]);
      }));
      function saveGuestCityToProfile() {
        return _saveGuestCityToProfile.apply(this, arguments);
      }
      return saveGuestCityToProfile;
    }())
  }]);
}();
var profileApi = new ProfileAPI();

/***/ }),

/***/ "./src/modules/router.ts":
/*!*******************************!*\
  !*** ./src/modules/router.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initRouter: () => (/* binding */ initRouter),
/* harmony export */   loadPath: () => (/* binding */ loadPath),
/* harmony export */   navigate: () => (/* binding */ navigate)
/* harmony export */ });
/* harmony import */ var _antiquemouse_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @antiquemouse/framework */ "./node_modules/@antiquemouse/framework/dist/index.js");
/* harmony import */ var _pages_LoginPage_LoginPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/LoginPage/LoginPage */ "./src/pages/LoginPage/LoginPage.tsx");
/* harmony import */ var _pages_MainPage_MainPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/MainPage/MainPage */ "./src/pages/MainPage/MainPage.tsx");
/* harmony import */ var _pages_CheckoutPage_CheckoutPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/CheckoutPage/CheckoutPage */ "./src/pages/CheckoutPage/CheckoutPage.tsx");
/* harmony import */ var _pages_ProfilePage_ProfilePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/ProfilePage/ProfilePage */ "./src/pages/ProfilePage/ProfilePage.tsx");
/* harmony import */ var _pages_StorePage_StorePage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/StorePage/StorePage */ "./src/pages/StorePage/StorePage.tsx");
/* harmony import */ var _pages_OrderPage_OrderPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/OrderPage/OrderPage */ "./src/pages/OrderPage/OrderPage.tsx");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }







var pathsPages = {
  '/': {
    component: _pages_MainPage_MainPage__WEBPACK_IMPORTED_MODULE_2__.MainPage,
    title: 'AppleClub - рестораны'
  },
  '/auth': {
    component: _pages_LoginPage_LoginPage__WEBPACK_IMPORTED_MODULE_1__.LoginPage,
    title: 'AppleClub - авторизация'
  },
  '/checkout': {
    component: _pages_CheckoutPage_CheckoutPage__WEBPACK_IMPORTED_MODULE_3__.CheckoutPage,
    title: 'AppleClub - оформление'
  },
  '/profile': {
    component: _pages_ProfilePage_ProfilePage__WEBPACK_IMPORTED_MODULE_4__.ProfilePage,
    title: 'AppleClub - профиль'
  },
  '/store/:id': {
    component: _pages_StorePage_StorePage__WEBPACK_IMPORTED_MODULE_5__.StorePage,
    title: 'AppleClub - магазин'
  },
  '/orders/:id': {
    component: _pages_OrderPage_OrderPage__WEBPACK_IMPORTED_MODULE_6__.OrderPage,
    title: 'AppleClub - заказ'
  }
};
var currentApp = null;
function loadPath(_x) {
  return _loadPath.apply(this, arguments);
}
function _loadPath() {
  _loadPath = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(path) {
    var state,
      replace,
      route,
      nextTitle,
      nextURL,
      _args = arguments;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          state = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
          replace = _args.length > 2 && _args[2] !== undefined ? _args[2] : false;
          if (!path.startsWith('/')) {
            path = '/' + path;
          }
          route = path;
          if (path.startsWith('/store/') && !(path in pathsPages)) {
            route = '/store/:id';
          }
          if (!(route in pathsPages)) {
            route = '/auth';
          }
          nextTitle = pathsPages[route].title;
          nextURL = location.origin + path;
          if (replace) {
            history.replaceState(state, nextTitle, nextURL);
          } else {
            history.pushState(state, nextTitle, nextURL);
          }
          _context.n = 1;
          return renderPage(path, route);
        case 1:
          return _context.a(2);
      }
    }, _callee);
  }));
  return _loadPath.apply(this, arguments);
}
function renderPage(_x2, _x3) {
  return _renderPage.apply(this, arguments);
}
function _renderPage() {
  _renderPage = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(path, route) {
    var page, rootElement;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          page = pathsPages[route];
          rootElement = document.getElementById('root');
          if (rootElement) {
            _context2.n = 1;
            break;
          }
          console.error('Root element #root not found');
          return _context2.a(2);
        case 1:
          if (currentApp && typeof currentApp.unmount === 'function') {
            currentApp.unmount();
          }
          rootElement.innerHTML = '';
          try {
            currentApp = (0,_antiquemouse_framework__WEBPACK_IMPORTED_MODULE_0__.createApp)(page.component);
            currentApp.mount(rootElement);
            document.title = page.title;
          } catch (error) {
            console.error('Error rendering page:', error);
            rootElement.innerHTML = '<div>Ошибка загрузки страницы</div>';
          }
        case 2:
          return _context2.a(2);
      }
    }, _callee2);
  }));
  return _renderPage.apply(this, arguments);
}
window.addEventListener('popstate', function () {
  var path = location.pathname;
  var route = path;
  if (path.startsWith('/store/') && !(path in pathsPages)) {
    route = '/store/:id';
  } else if (!(path in pathsPages)) {
    route = '/auth';
  }
  renderPage(path, route);
});
function navigate(path) {
  var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  loadPath(path, state);
}
function initRouter() {
  var path = location.pathname;
  var route = path;
  if (path.startsWith('/store/') && !(path in pathsPages)) {
    route = '/store/:id';
  } else if (!(path in pathsPages)) {
    route = '/auth';
  }
  renderPage(path, route);
}

/***/ }),

/***/ "./src/modules/store.ts":
/*!******************************!*\
  !*** ./src/modules/store.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   store: () => (/* binding */ store)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Store = /*#__PURE__*/function () {
  function Store() {
    _classCallCheck(this, Store);
    _defineProperty(this, "data", {
      'auth.isAuthenticated': false,
      'auth.user': null,
      'cart.count': null
    });
    _defineProperty(this, "listeners", {
      'auth.isAuthenticated': [],
      'auth.user': [],
      'cart.count': []
    });
  }
  return _createClass(Store, [{
    key: "get",
    value: function get(key) {
      return this.data[key];
    }
  }, {
    key: "set",
    value: function set(key, value) {
      this.data[key] = value;
      this.listeners[key].forEach(function (fn) {
        return fn();
      });
    }
  }, {
    key: "subscribe",
    value: function subscribe(key, callback) {
      var _this = this;
      this.listeners[key].push(callback);
      return function () {
        _this.listeners[key] = _this.listeners[key].filter(function (fn) {
          return fn !== callback;
        });
      };
    }
  }]);
}();
var store = new Store();

/***/ }),

/***/ "./src/modules/storeApi.ts":
/*!*********************************!*\
  !*** ./src/modules/storeApi.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StoreApi: () => (/* binding */ StoreApi)
/* harmony export */ });
/* harmony import */ var _modules_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/api */ "./src/modules/api.ts");


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var StoreApi = /*#__PURE__*/function () {
  function StoreApi() {
    _classCallCheck(this, StoreApi);
  }
  return _createClass(StoreApi, null, [{
    key: "getStores",
    value: (
    /**
     * Получить список магазинов
     */
    function () {
      var _getStores = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var params,
          queryParams,
          queryString,
          url,
          response,
          data,
          _args = arguments;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              params = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
              queryParams = new URLSearchParams();
              if (params.limit) queryParams.append('limit', params.limit.toString());
              if (params.lastId) queryParams.append('last_id', params.lastId);
              if (params.tagId) queryParams.append('tag_id', params.tagId);
              if (params.sorted) queryParams.append('sorted', params.sorted);
              if (params.desc !== undefined) queryParams.append('desc', params.desc.toString());
              if (params.search) queryParams.append('search', params.search);
              if (params.category) queryParams.append('category', params.category);
              if (params.cityID) queryParams.append('city_id', params.cityID);
              queryString = queryParams.toString();
              url = "/stores".concat(queryString ? "?".concat(queryString) : '');
              _context.n = 1;
              return _modules_api__WEBPACK_IMPORTED_MODULE_0__.API.get('STORE', url);
            case 1:
              response = _context.v;
              data = response.body;
              return _context.a(2, data);
          }
        }, _callee);
      }));
      function getStores() {
        return _getStores.apply(this, arguments);
      }
      return getStores;
    }()
    /**
     * Получить магазин по ID
     */
    )
  }, {
    key: "getStoreById",
    value: (function () {
      var _getStoreById = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(storeId) {
        var _response$body;
        var response;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _context2.n = 1;
              return _modules_api__WEBPACK_IMPORTED_MODULE_0__.API.get('STORE', "/stores/".concat(storeId));
            case 1:
              response = _context2.v;
              return _context2.a(2, (_response$body = response.body) !== null && _response$body !== void 0 ? _response$body : null);
          }
        }, _callee2);
      }));
      function getStoreById(_x) {
        return _getStoreById.apply(this, arguments);
      }
      return getStoreById;
    }()
    /**
     * Поиск магазинов
     */
    )
  }, {
    key: "searchStores",
    value: (function () {
      var _searchStores = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(query) {
        var limit,
          _args3 = arguments;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              limit = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : 12;
              return _context3.a(2, this.getStores({
                search: query,
                limit: limit
              }));
          }
        }, _callee3, this);
      }));
      function searchStores(_x2) {
        return _searchStores.apply(this, arguments);
      }
      return searchStores;
    }()
    /**
     * Получить магазины по категории
     */
    )
  }, {
    key: "getStoresByCategory",
    value: (function () {
      var _getStoresByCategory = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(category) {
        var limit,
          _args4 = arguments;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              limit = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : 12;
              return _context4.a(2, this.getStores({
                category: category,
                limit: limit
              }));
          }
        }, _callee4, this);
      }));
      function getStoresByCategory(_x3) {
        return _getStoresByCategory.apply(this, arguments);
      }
      return getStoresByCategory;
    }()
    /**
     * Получить магазины по городу
     */
    )
  }, {
    key: "getStoresByCity",
    value: (function () {
      var _getStoresByCity = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(cityId) {
        var limit,
          _args5 = arguments;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              limit = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : 12;
              return _context5.a(2, this.getStores({
                cityID: cityId,
                limit: limit
              }));
          }
        }, _callee5, this);
      }));
      function getStoresByCity(_x4) {
        return _getStoresByCity.apply(this, arguments);
      }
      return getStoresByCity;
    }()
    /**
     * Получить магазины по тегу
     */
    )
  }, {
    key: "getStoresByTag",
    value: (function () {
      var _getStoresByTag = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(tagId) {
        var limit,
          _args6 = arguments;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.n) {
            case 0:
              limit = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : 12;
              return _context6.a(2, this.getStores({
                tagId: tagId,
                limit: limit
              }));
          }
        }, _callee6, this);
      }));
      function getStoresByTag(_x5) {
        return _getStoresByTag.apply(this, arguments);
      }
      return getStoresByTag;
    }()
    /**
     * Получить список товаров магазина по его ID
     * @param storeId - UUID магазина
     * @returns Массив товаров магазина
     */
    )
  }, {
    key: "getStoreItems",
    value: (function () {
      var _getStoreItems = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(storeId) {
        var response;
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.n) {
            case 0:
              _context7.n = 1;
              return _modules_api__WEBPACK_IMPORTED_MODULE_0__.API.get('STORE', "/stores/".concat(storeId, "/items"));
            case 1:
              response = _context7.v;
              return _context7.a(2, Array.isArray(response.body) ? response.body : []);
          }
        }, _callee7);
      }));
      function getStoreItems(_x6) {
        return _getStoreItems.apply(this, arguments);
      }
      return getStoreItems;
    }()
    /**
     * Получить корзину пользователя
     */
    )
  }, {
    key: "getUserCart",
    value: (function () {
      var _getUserCart = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
        var response;
        return _regenerator().w(function (_context8) {
          while (1) switch (_context8.n) {
            case 0:
              _context8.n = 1;
              return _modules_api__WEBPACK_IMPORTED_MODULE_0__.API.get('STORE', '/cart');
            case 1:
              response = _context8.v;
              if (!(response.body && _typeof(response.body) === 'object')) {
                _context8.n = 2;
                break;
              }
              return _context8.a(2, {
                user_id: response.body.user_id || '',
                items: Array.isArray(response.body.items) ? response.body.items : [],
                total_price: response.body.total_price || 0
              });
            case 2:
              return _context8.a(2, {
                user_id: '',
                items: [],
                total_price: 0
              });
          }
        }, _callee8);
      }));
      function getUserCart() {
        return _getUserCart.apply(this, arguments);
      }
      return getUserCart;
    }()
    /**
     * Обновить корзину
     */
    )
  }, {
    key: "updateCart",
    value: (function () {
      var _updateCart = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(items) {
        return _regenerator().w(function (_context9) {
          while (1) switch (_context9.n) {
            case 0:
              _context9.n = 1;
              return _modules_api__WEBPACK_IMPORTED_MODULE_0__.API.put('STORE', '/cart', {
                items: items
              });
            case 1:
              return _context9.a(2);
          }
        }, _callee9);
      }));
      function updateCart(_x7) {
        return _updateCart.apply(this, arguments);
      }
      return updateCart;
    }()
    /**
     * Синхронизировать выбранный город пользователя
     */
    )
  }, {
    key: "syncCity",
    value: (function () {
      var _syncCity = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(userId, cityId) {
        return _regenerator().w(function (_context0) {
          while (1) switch (_context0.n) {
            case 0:
              _context0.n = 1;
              return _modules_api__WEBPACK_IMPORTED_MODULE_0__.API.post('STORE', "/users/".concat(userId, "/city"), {
                city_id: cityId
              });
            case 1:
              return _context0.a(2);
          }
        }, _callee0);
      }));
      function syncCity(_x8, _x9) {
        return _syncCity.apply(this, arguments);
      }
      return syncCity;
    }())
  }, {
    key: "getCities",
    value: function () {
      var _getCities = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1() {
        var _response$body2;
        var response;
        return _regenerator().w(function (_context1) {
          while (1) switch (_context1.n) {
            case 0:
              _context1.n = 1;
              return _modules_api__WEBPACK_IMPORTED_MODULE_0__.API.get('STORE', "/stores/cities");
            case 1:
              response = _context1.v;
              return _context1.a(2, (_response$body2 = response.body) !== null && _response$body2 !== void 0 ? _response$body2 : []);
          }
        }, _callee1);
      }));
      function getCities() {
        return _getCities.apply(this, arguments);
      }
      return getCities;
    }()
  }]);
}();

/***/ }),

/***/ "./src/modules/suggestApi.ts":
/*!***********************************!*\
  !*** ./src/modules/suggestApi.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SuggestApi: () => (/* binding */ SuggestApi)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var SuggestApi = /*#__PURE__*/function () {
  function SuggestApi() {
    _classCallCheck(this, SuggestApi);
  }
  return _createClass(SuggestApi, null, [{
    key: "suggestAddress",
    value: function () {
      var _suggestAddress = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(query, city) {
        var _data$suggestions,
          _this = this;
        var request, response, data;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              request = {
                query: query,
                count: 5,
                locations: [{
                  city: city
                }],
                from_bound: {
                  value: 'street'
                },
                to_bound: {
                  value: 'house'
                }
              };
              _context.n = 1;
              return fetch(this.BASE_URL, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Accept: 'application/json',
                  Authorization: "Token ".concat(this.API_KEY)
                },
                body: JSON.stringify(request)
              });
            case 1:
              response = _context.v;
              _context.n = 2;
              return response.json();
            case 2:
              data = _context.v;
              return _context.a(2, ((_data$suggestions = data.suggestions) === null || _data$suggestions === void 0 ? void 0 : _data$suggestions.map(function (suggestion) {
                return _objectSpread(_objectSpread({}, suggestion), {}, {
                  displayValue: _this.removeCityFromAddress(suggestion.value, city)
                });
              })) || []);
          }
        }, _callee, this);
      }));
      function suggestAddress(_x, _x2) {
        return _suggestAddress.apply(this, arguments);
      }
      return suggestAddress;
    }()
  }, {
    key: "removeCityFromAddress",
    value: function removeCityFromAddress(address, city) {
      if (!address || !city) return address;
      var pattern = "\u0433 ".concat(city, ", ");
      return address.startsWith(pattern) ? address.slice(pattern.length) : address;
    }
  }]);
}();
_defineProperty(SuggestApi, "API_KEY", '9cac2298e78980a1f52ef2ebf849cc76305a405b');
_defineProperty(SuggestApi, "BASE_URL", 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address');

/***/ }),

/***/ "./src/modules/userApi.ts":
/*!********************************!*\
  !*** ./src/modules/userApi.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserAPI: () => (/* binding */ UserAPI),
/* harmony export */   userApi: () => (/* binding */ userApi)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./src/modules/api.ts");


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

/**
 * Класс для взаимодействия с API аутентификации и управления пользователем.
 */
var UserAPI = /*#__PURE__*/function () {
  function UserAPI() {
    _classCallCheck(this, UserAPI);
  }
  return _createClass(UserAPI, [{
    key: "register",
    value: (
    /**
     * Регистрирует нового пользователя.
     * @param {UserData} userdata - Данные пользователя: email и пароль.
     * @returns {Promise<APIresponse>} Ответ API, содержащий статус операции и, при успехе, дополнительные данные в `body`.
     */
    function () {
      var _register = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(userdata) {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              return _context.a(2, _api__WEBPACK_IMPORTED_MODULE_0__.API.post('AUTH', '/auth/signup', {
                email: userdata.email,
                password: userdata.password
              }));
          }
        }, _callee);
      }));
      function register(_x) {
        return _register.apply(this, arguments);
      }
      return register;
    }()
    /**
     * Выполняет вход пользователя в систему.
     * @param {UserData} userdata - Данные для входа: email и пароль.
     * @returns {Promise<APIresponse>} Ответ API. При успехе в `body` может содержаться токен или профиль пользователя.
     */
    )
  }, {
    key: "login",
    value: (function () {
      var _login = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(userdata) {
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              return _context2.a(2, _api__WEBPACK_IMPORTED_MODULE_0__.API.post('AUTH', '/auth/login', {
                email: userdata.email,
                password: userdata.password
              }));
          }
        }, _callee2);
      }));
      function login(_x2) {
        return _login.apply(this, arguments);
      }
      return login;
    }()
    /**
     * Выполняет выход пользователя из системы (уничтожает сессию на сервере).
     * @returns {Promise<APIresponse>} Ответ API, подтверждающий завершение сессии.
     */
    )
  }, {
    key: "logout",
    value: (function () {
      var _logout = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              return _context3.a(2, _api__WEBPACK_IMPORTED_MODULE_0__.API.post('AUTH', '/auth/logout'));
          }
        }, _callee3);
      }));
      function logout() {
        return _logout.apply(this, arguments);
      }
      return logout;
    }()
    /**
     * Обновляет access-токен с использованием refresh-токена.
     * @returns {Promise<APIresponse>} Ответ API с новым токеном (обычно в `body.token`).
     */
    )
  }, {
    key: "refresh",
    value: (function () {
      var _refresh = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              return _context4.a(2, _api__WEBPACK_IMPORTED_MODULE_0__.API.post('AUTH', '/auth/refresh'));
          }
        }, _callee4);
      }));
      function refresh() {
        return _refresh.apply(this, arguments);
      }
      return refresh;
    }())
  }]);
}();

/**
 * Экземпляр API для работы с пользователем.
 * @type {UserAPI}
 */
var userApi = new UserAPI();

/***/ }),

/***/ "./src/pages/CheckoutPage/CheckoutPage.module.scss":
/*!*********************************************************!*\
  !*** ./src/pages/CheckoutPage/CheckoutPage.module.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_CheckoutPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./CheckoutPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/CheckoutPage/CheckoutPage.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_CheckoutPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_CheckoutPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_CheckoutPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_CheckoutPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/CheckoutPage/CheckoutPage.tsx":
/*!*************************************************!*\
  !*** ./src/pages/CheckoutPage/CheckoutPage.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckoutPage: () => (/* binding */ CheckoutPage)
/* harmony export */ });
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Button/Button */ "./src/components/Button/Button.tsx");
/* harmony import */ var _components_CartItem_CartItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/CartItem/CartItem */ "./src/components/CartItem/CartItem.tsx");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Footer/Footer */ "./src/components/Footer/Footer.tsx");
/* harmony import */ var _components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Navbar/Navbar */ "./src/components/Navbar/Navbar.tsx");
/* harmony import */ var _components_PaymentForm_PaymentForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/PaymentForm/PaymentForm */ "./src/components/PaymentForm/PaymentForm.tsx");
/* harmony import */ var _components_PersonalInfo_PersonalInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/PersonalInfo/PersonalInfo */ "./src/components/PersonalInfo/PersonalInfo.tsx");
/* harmony import */ var _antiquemouse_framework__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @antiquemouse/framework */ "./node_modules/@antiquemouse/framework/dist/index.js");
/* harmony import */ var _modules_cartManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../modules/cartManager */ "./src/modules/cartManager.ts");
/* harmony import */ var _modules_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../modules/router */ "./src/modules/router.ts");
/* harmony import */ var _CheckoutPage_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CheckoutPage.module.scss */ "./src/pages/CheckoutPage/CheckoutPage.module.scss");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }










var CheckoutPage = (0,_antiquemouse_framework__WEBPACK_IMPORTED_MODULE_6__.defineComponent)({
  state: function state() {
    return {
      promoCode: '',
      items: [],
      isLoading: false
    };
  },
  onMounted: function onMounted() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _context.n = 1;
            return _this.loadCartItems();
          case 1:
            return _context.a(2);
        }
      }, _callee);
    }))();
  },
  loadCartItems: function loadCartItems() {
    var _this2 = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var items;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            _context2.n = 1;
            return (0,_modules_cartManager__WEBPACK_IMPORTED_MODULE_7__.getCartFromStorage)();
          case 1:
            items = _context2.v;
            _this2.updateState({
              items: items
            });
          case 2:
            return _context2.a(2);
        }
      }, _callee2);
    }))();
  },
  handleIncrease: function handleIncrease(id) {
    var _this3 = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
      var item, items;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            item = _this3.state.items.find(function (i) {
              return i.id === id;
            });
            if (!item) {
              _context3.n = 3;
              break;
            }
            _context3.n = 1;
            return (0,_modules_cartManager__WEBPACK_IMPORTED_MODULE_7__.updateQuantity)(id, item.quantity + 1);
          case 1:
            _context3.n = 2;
            return (0,_modules_cartManager__WEBPACK_IMPORTED_MODULE_7__.getCartFromStorage)();
          case 2:
            items = _context3.v;
            _this3.updateState({
              items: items
            });
          case 3:
            return _context3.a(2);
        }
      }, _callee3);
    }))();
  },
  handleDecrease: function handleDecrease(id) {
    var _this4 = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
      var item, items, _items;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            item = _this4.state.items.find(function (i) {
              return i.id === id;
            });
            if (item) {
              _context4.n = 1;
              break;
            }
            return _context4.a(2);
          case 1:
            if (!(item.quantity <= 1)) {
              _context4.n = 4;
              break;
            }
            _context4.n = 2;
            return (0,_modules_cartManager__WEBPACK_IMPORTED_MODULE_7__.removeFromCart)(id);
          case 2:
            _context4.n = 3;
            return (0,_modules_cartManager__WEBPACK_IMPORTED_MODULE_7__.getCartFromStorage)();
          case 3:
            items = _context4.v;
            _this4.updateState({
              items: items
            });
            _context4.n = 7;
            break;
          case 4:
            _context4.n = 5;
            return (0,_modules_cartManager__WEBPACK_IMPORTED_MODULE_7__.updateQuantity)(id, item.quantity - 1);
          case 5:
            _context4.n = 6;
            return (0,_modules_cartManager__WEBPACK_IMPORTED_MODULE_7__.getCartFromStorage)();
          case 6:
            _items = _context4.v;
            _this4.updateState({
              items: _items
            });
          case 7:
            return _context4.a(2);
        }
      }, _callee4);
    }))();
  },
  handleRemove: function handleRemove(id) {
    var _this5 = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
      var items;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            _context5.n = 1;
            return (0,_modules_cartManager__WEBPACK_IMPORTED_MODULE_7__.removeFromCart)(id);
          case 1:
            _context5.n = 2;
            return (0,_modules_cartManager__WEBPACK_IMPORTED_MODULE_7__.getCartFromStorage)();
          case 2:
            items = _context5.v;
            _this5.updateState({
              items: items
            });
          case 3:
            return _context5.a(2);
        }
      }, _callee5);
    }))();
  },
  getTotal: function getTotal() {
    return this.state.items.reduce(function (sum, item) {
      return sum + item.price * item.quantity;
    }, 0);
  },
  handleSubmit: function handleSubmit(e) {
    e.preventDefault();
    (0,_modules_router__WEBPACK_IMPORTED_MODULE_8__.navigate)('/order/success');
  },
  render: function render() {
    var _this6 = this;
    var _this$state = this.state,
      items = _this$state.items,
      isLoading = _this$state.isLoading;
    var total = this.getTotal();
    if (isLoading) {
      return h("div", {
        class: _CheckoutPage_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].checkoutPage
      }, h(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__.Navbar, {
        onLogoClick: function onLogoClick() {
          return (0,_modules_router__WEBPACK_IMPORTED_MODULE_8__.navigate)('/');
        },
        onLoginClick: function onLoginClick() {
          return (0,_modules_router__WEBPACK_IMPORTED_MODULE_8__.navigate)('/auth');
        }
      }), h("div", {
        class: _CheckoutPage_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].checkoutPage__loading
      }, h("h2", null, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0434\u0430\u043D\u043D\u044B\u0445...")), h(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__.Footer, null));
    }
    return h("div", {
      class: _CheckoutPage_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].checkoutPage
    }, h(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__.Navbar, {
      onLogoClick: function onLogoClick() {
        return (0,_modules_router__WEBPACK_IMPORTED_MODULE_8__.navigate)('/');
      },
      onLoginClick: function onLoginClick() {
        return (0,_modules_router__WEBPACK_IMPORTED_MODULE_8__.navigate)('/auth');
      }
    }), h("div", {
      class: _CheckoutPage_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].checkoutPage__container
    }, h("h1", null, "\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435 \u0437\u0430\u043A\u0430\u0437\u0430"), h("div", {
      class: _CheckoutPage_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].checkoutPage__form
    }, h("form", {
      on: {
        submit: function submit(e) {
          return _this6.handleSubmit(e);
        }
      }
    }, h("h2", null, "\u0423\u0441\u043B\u043E\u0432\u0438\u044F \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438"), h("div", {
      class: _CheckoutPage_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].checkoutPage__conditional
    }, h(_components_Button_Button__WEBPACK_IMPORTED_MODULE_0__.Button, {
      type: "button",
      variant: "accent",
      disabled: true,
      text: "\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442 0\u20BD"
    }), h(_components_Button_Button__WEBPACK_IMPORTED_MODULE_0__.Button, {
      type: "button",
      variant: "success",
      disabled: true,
      text: "\u0411\u044B\u0441\u0442\u0440\u043E 100\u20BD"
    })), h(_components_PersonalInfo_PersonalInfo__WEBPACK_IMPORTED_MODULE_5__.PersonalInfo, {
      readonly: true
    })), h("div", {
      class: _CheckoutPage_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].checkoutPage__order
    }, h("div", {
      class: _CheckoutPage_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].checkoutPage__orderCard
    }, h("h2", {
      class: _CheckoutPage_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].checkoutPage__orderTitle
    }, "\u0412\u0430\u0448 \u0437\u0430\u043A\u0430\u0437"), h("div", {
      class: _CheckoutPage_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].checkoutPage__cartBody
    }, h("div", {
      class: _CheckoutPage_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].checkoutPage__cartItems
    }, items.length > 0 ? items.map(function (item) {
      return h(_components_CartItem_CartItem__WEBPACK_IMPORTED_MODULE_1__.CartItem, {
        key: item.id,
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        card_img: item.card_img,
        onIncrease: function onIncrease() {
          return _this6.handleIncrease(item.id);
        },
        onDecrease: function onDecrease() {
          return _this6.handleDecrease(item.id);
        },
        onRemove: function onRemove() {
          return _this6.handleRemove(item.id);
        }
      });
    }) : h("p", {
      class: "cart-empty"
    }, "\u041A\u043E\u0440\u0437\u0438\u043D\u0430 \u043F\u0443\u0441\u0442\u0430")))), h(_components_PaymentForm_PaymentForm__WEBPACK_IMPORTED_MODULE_4__.PaymentForm, {
      total: total,
      promoCode: this.state.promoCode,
      onPromoChange: function onPromoChange(code) {
        return _this6.updateState({
          promoCode: code
        });
      },
      onApplyPromo: function onApplyPromo() {},
      onChangePayment: function onChangePayment() {}
    })))), h(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__.Footer, null));
  }
});

/***/ }),

/***/ "./src/pages/LoginPage/LoginPage.module.scss":
/*!***************************************************!*\
  !*** ./src/pages/LoginPage/LoginPage.module.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_LoginPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./LoginPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/LoginPage/LoginPage.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_LoginPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_LoginPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_LoginPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_LoginPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/LoginPage/LoginPage.tsx":
/*!*******************************************!*\
  !*** ./src/pages/LoginPage/LoginPage.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginPage: () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var _components_LoginForm_LoginForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/LoginForm/LoginForm */ "./src/components/LoginForm/LoginForm.tsx");
/* harmony import */ var _components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Navbar/Navbar */ "./src/components/Navbar/Navbar.tsx");
/* harmony import */ var _antiquemouse_framework__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @antiquemouse/framework */ "./node_modules/@antiquemouse/framework/dist/index.js");
/* harmony import */ var _modules_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/router */ "./src/modules/router.ts");
/* harmony import */ var _LoginPage_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LoginPage.module.scss */ "./src/pages/LoginPage/LoginPage.module.scss");





var LoginPage = (0,_antiquemouse_framework__WEBPACK_IMPORTED_MODULE_2__.defineComponent)({
  state: function state() {
    return {
      batchSize: 8
    };
  },
  render: function render() {
    return h("div", {
      class: _LoginPage_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].loginPage
    }, h(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_1__.Navbar, {
      onLogoClick: function onLogoClick() {
        (0,_modules_router__WEBPACK_IMPORTED_MODULE_3__.navigate)('/');
      },
      onLoginClick: function onLoginClick() {
        (0,_modules_router__WEBPACK_IMPORTED_MODULE_3__.navigate)('/auth');
      }
    }), h("div", {
      class: _LoginPage_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].loginPage__container,
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '100%',
        minHeight: '80vh',
        padding: '2rem',
        boxSizing: 'border-box'
      }
    }, h(_components_LoginForm_LoginForm__WEBPACK_IMPORTED_MODULE_0__.LoginForm, null)));
  }
});

/***/ }),

/***/ "./src/pages/MainPage/MainPage.module.scss":
/*!*************************************************!*\
  !*** ./src/pages/MainPage/MainPage.module.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_MainPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./MainPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/MainPage/MainPage.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_MainPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_MainPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_MainPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_MainPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/MainPage/MainPage.tsx":
/*!*****************************************!*\
  !*** ./src/pages/MainPage/MainPage.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainPage: () => (/* binding */ MainPage)
/* harmony export */ });
/* harmony import */ var _components_Batch_Batch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Batch/Batch */ "./src/components/Batch/Batch.tsx");
/* harmony import */ var _components_CardsHeader_CardsHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/CardsHeader/CardsHeader */ "./src/components/CardsHeader/CardsHeader.tsx");
/* harmony import */ var _components_Cart_Cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Cart/Cart */ "./src/components/Cart/Cart.tsx");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Footer/Footer */ "./src/components/Footer/Footer.tsx");
/* harmony import */ var _components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Navbar/Navbar */ "./src/components/Navbar/Navbar.tsx");
/* harmony import */ var _antiquemouse_framework__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @antiquemouse/framework */ "./node_modules/@antiquemouse/framework/dist/index.js");
/* harmony import */ var _modules_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../modules/router */ "./src/modules/router.ts");
/* harmony import */ var _MainPage_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MainPage.module.scss */ "./src/pages/MainPage/MainPage.module.scss");
/* harmony import */ var _components_SupportWidget_SupportWidget__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/SupportWidget/SupportWidget */ "./src/components/SupportWidget/SupportWidget.tsx");









var MainPage = (0,_antiquemouse_framework__WEBPACK_IMPORTED_MODULE_5__.defineComponent)({
  state: function state() {
    return {
      batchSize: 16,
      isCartOpen: false
    };
  },
  openCart: function openCart() {
    this.updateState({
      isCartOpen: true
    });
  },
  closeCart: function closeCart() {
    this.updateState({
      isCartOpen: false
    });
  },
  render: function render() {
    var _this = this;
    var props = this.props;
    return h("div", {
      class: _MainPage_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].mainPage
    }, h(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__.Navbar, {
      onLogoClick: function onLogoClick() {
        (0,_modules_router__WEBPACK_IMPORTED_MODULE_6__.navigate)('/');
      },
      onLoginClick: function onLoginClick() {
        (0,_modules_router__WEBPACK_IMPORTED_MODULE_6__.navigate)('/auth');
      },
      onCartClick: function onCartClick() {
        return _this.openCart();
      }
    }), h(_components_CardsHeader_CardsHeader__WEBPACK_IMPORTED_MODULE_1__.CardsHeader, null), h("div", {
      class: _MainPage_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].mainPage__container
    }, h(_components_Batch_Batch__WEBPACK_IMPORTED_MODULE_0__.Batch, {
      batchSize: this.state.batchSize,
      onCardClick: props.onCardClick
    }), h(_components_Batch_Batch__WEBPACK_IMPORTED_MODULE_0__.Batch, {
      batchSize: this.state.batchSize,
      onCardClick: props.onCardClick
    }), h(_components_Batch_Batch__WEBPACK_IMPORTED_MODULE_0__.Batch, {
      batchSize: this.state.batchSize,
      onCardClick: props.onCardClick
    })), h(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__.Footer, null), this.state.isCartOpen ? h(_components_Cart_Cart__WEBPACK_IMPORTED_MODULE_2__.Cart, {
      onClose: function onClose() {
        return _this.closeCart();
      }
    }) : '', h(_components_SupportWidget_SupportWidget__WEBPACK_IMPORTED_MODULE_8__.SupportWidget, null));
  }
});

/***/ }),

/***/ "./src/pages/OrderPage/OrderPage.tsx":
/*!*******************************************!*\
  !*** ./src/pages/OrderPage/OrderPage.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderPage: () => (/* binding */ OrderPage)
/* harmony export */ });
/* harmony import */ var _antiquemouse_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @antiquemouse/framework */ "./node_modules/@antiquemouse/framework/dist/index.js");

var OrderPage = (0,_antiquemouse_framework__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render: function render() {
    return h("div", null);
  }
});

/***/ }),

/***/ "./src/pages/ProfilePage/ProfilePage.module.scss":
/*!*******************************************************!*\
  !*** ./src/pages/ProfilePage/ProfilePage.module.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./ProfilePage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/ProfilePage/ProfilePage.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/ProfilePage/ProfilePage.tsx":
/*!***********************************************!*\
  !*** ./src/pages/ProfilePage/ProfilePage.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfilePage: () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var _components_AvatarForm_AvatarForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/AvatarForm/AvatarForm */ "./src/components/AvatarForm/AvatarForm.tsx");
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Button/Button */ "./src/components/Button/Button.tsx");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Footer/Footer */ "./src/components/Footer/Footer.tsx");
/* harmony import */ var _components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Navbar/Navbar */ "./src/components/Navbar/Navbar.tsx");
/* harmony import */ var _components_PersonalInfo_PersonalInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/PersonalInfo/PersonalInfo */ "./src/components/PersonalInfo/PersonalInfo.tsx");
/* harmony import */ var _antiquemouse_framework__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @antiquemouse/framework */ "./node_modules/@antiquemouse/framework/dist/index.js");
/* harmony import */ var _modules_authManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../modules/authManager */ "./src/modules/authManager.ts");
/* harmony import */ var _modules_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../modules/router */ "./src/modules/router.ts");
/* harmony import */ var _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ProfilePage.module.scss */ "./src/pages/ProfilePage/ProfilePage.module.scss");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }









var ProfilePage = (0,_antiquemouse_framework__WEBPACK_IMPORTED_MODULE_5__.defineComponent)({
  state: function state() {
    return {
      isLoading: false
    };
  },
  handleLogout: function handleLogout() {
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _context.n = 1;
            return _modules_authManager__WEBPACK_IMPORTED_MODULE_6__.authManager.logout();
          case 1:
            (0,_modules_router__WEBPACK_IMPORTED_MODULE_7__.navigate)('/');
          case 2:
            return _context.a(2);
        }
      }, _callee);
    }))();
  },
  render: function render() {
    var _this = this;
    return h("div", {
      class: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].profilePage
    }, h(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__.Navbar, {
      userAuthed: true,
      onLogoClick: function onLogoClick() {
        return (0,_modules_router__WEBPACK_IMPORTED_MODULE_7__.navigate)('/');
      },
      onLoginClick: function onLoginClick() {
        return (0,_modules_router__WEBPACK_IMPORTED_MODULE_7__.navigate)('/auth');
      }
    }), h("div", {
      class: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].profilePage__container
    }, h("div", {
      class: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].profilePage__content
    }, h("div", {
      class: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].profilePage__formSection
    }, h("h2", {
      class: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].profilePage__title
    }, "\u041C\u043E\u0439 \u043F\u0440\u043E\u0444\u0438\u043B\u044C"), h(_components_PersonalInfo_PersonalInfo__WEBPACK_IMPORTED_MODULE_4__.PersonalInfo, null)), h("div", {
      class: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].profilePage__sidebar
    }, h("div", {
      class: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].profilePage__avatarSection
    }, h("h2", null, "\u0421\u043C\u0435\u043D\u0438\u0442\u044C \u0430\u0432\u0430\u0442\u0430\u0440"), h(_components_AvatarForm_AvatarForm__WEBPACK_IMPORTED_MODULE_0__.AvatarForm, null)), h("div", {
      class: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].profilePage__buttons
    }, h(_components_Button_Button__WEBPACK_IMPORTED_MODULE_1__.Button, {
      type: "button",
      variant: "accent",
      text: "\u041D\u0430\u0437\u0430\u0434",
      onClick: function onClick() {
        return (0,_modules_router__WEBPACK_IMPORTED_MODULE_7__.navigate)('/');
      }
    }), h(_components_Button_Button__WEBPACK_IMPORTED_MODULE_1__.Button, {
      type: "button",
      variant: "error",
      text: "\u0412\u044B\u0439\u0442\u0438 \u0438\u0437 \u043F\u0440\u043E\u0444\u0438\u043B\u044F",
      onClick: function onClick() {
        return _this.handleLogout();
      }
    }))))), h(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__.Footer, null));
  }
});

/***/ }),

/***/ "./src/pages/StorePage/StorePage.module.scss":
/*!***************************************************!*\
  !*** ./src/pages/StorePage/StorePage.module.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_StorePage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./StorePage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/StorePage/StorePage.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_StorePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_StorePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_StorePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_StorePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/StorePage/StorePage.tsx":
/*!*******************************************!*\
  !*** ./src/pages/StorePage/StorePage.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StorePage: () => (/* binding */ StorePage)
/* harmony export */ });
/* harmony import */ var _components_Cart_Cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Cart/Cart */ "./src/components/Cart/Cart.tsx");
/* harmony import */ var _components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Navbar/Navbar */ "./src/components/Navbar/Navbar.tsx");
/* harmony import */ var _components_ProductsBatch_ProductsBatch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ProductsBatch/ProductsBatch */ "./src/components/ProductsBatch/ProductsBatch.tsx");
/* harmony import */ var _components_StoreInfo_StoreInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/StoreInfo/StoreInfo */ "./src/components/StoreInfo/StoreInfo.tsx");
/* harmony import */ var _antiquemouse_framework__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @antiquemouse/framework */ "./node_modules/@antiquemouse/framework/dist/index.js");
/* harmony import */ var _modules_cartManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modules/cartManager */ "./src/modules/cartManager.ts");
/* harmony import */ var _modules_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../modules/router */ "./src/modules/router.ts");
/* harmony import */ var _modules_storeApi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../modules/storeApi */ "./src/modules/storeApi.ts");
/* harmony import */ var _StorePage_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./StorePage.module.scss */ "./src/pages/StorePage/StorePage.module.scss");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }









var StorePage = (0,_antiquemouse_framework__WEBPACK_IMPORTED_MODULE_4__.defineComponent)({
  state: function state() {
    return {
      store: null,
      products: [],
      isCartOpen: false
    };
  },
  openCart: function openCart() {
    this.updateState({
      isCartOpen: true
    });
  },
  closeCart: function closeCart() {
    this.updateState({
      isCartOpen: false
    });
  },
  onMounted: function onMounted() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _context.n = 1;
            return _this.loadStore();
          case 1:
            return _context.a(2);
        }
      }, _callee);
    }))();
  },
  loadStore: function loadStore() {
    var _this2 = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var pathParts, storeId, store, products, _t;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            pathParts = window.location.pathname.split('/');
            storeId = pathParts[pathParts.length - 1];
            if (!(!storeId || storeId === 'undefined')) {
              _context2.n = 1;
              break;
            }
            return _context2.a(2);
          case 1:
            _context2.p = 1;
            _context2.n = 2;
            return _modules_storeApi__WEBPACK_IMPORTED_MODULE_7__.StoreApi.getStoreById(storeId);
          case 2:
            store = _context2.v;
            _context2.n = 3;
            return _modules_storeApi__WEBPACK_IMPORTED_MODULE_7__.StoreApi.getStoreItems(storeId);
          case 3:
            products = _context2.v;
            if (store) {
              _this2.updateState({
                store: store,
                products: products
              });
            }
            _context2.n = 5;
            break;
          case 4:
            _context2.p = 4;
            _t = _context2.v;
            console.error('Error loading store:', _t);
          case 5:
            return _context2.a(2);
        }
      }, _callee2, null, [[1, 4]]);
    }))();
  },
  render: function render() {
    var _this3 = this;
    var _this$state = this.state,
      store = _this$state.store,
      products = _this$state.products,
      isCartOpen = _this$state.isCartOpen;
    if (!store) {
      return h("div", {
        class: _StorePage_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].storePage
      }, h(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_1__.Navbar, {
        userAuthed: false,
        onLogoClick: function onLogoClick() {
          (0,_modules_router__WEBPACK_IMPORTED_MODULE_6__.navigate)('/');
        },
        onLoginClick: function onLoginClick() {
          (0,_modules_router__WEBPACK_IMPORTED_MODULE_6__.navigate)('/auth');
        },
        onCartClick: function onCartClick() {
          return _this3.openCart();
        }
      }), h("div", {
        class: _StorePage_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].storePage__container
      }), isCartOpen ? h(_components_Cart_Cart__WEBPACK_IMPORTED_MODULE_0__.Cart, {
        onClose: function onClose() {
          return _this3.closeCart();
        }
      }) : null);
    }
    return h("div", {
      class: _StorePage_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].storePage
    }, h(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_1__.Navbar, {
      onLogoClick: function onLogoClick() {
        (0,_modules_router__WEBPACK_IMPORTED_MODULE_6__.navigate)('/');
      },
      onLoginClick: function onLoginClick() {
        (0,_modules_router__WEBPACK_IMPORTED_MODULE_6__.navigate)('/auth');
      },
      onCartClick: function onCartClick() {
        return _this3.openCart();
      }
    }), h("div", {
      class: _StorePage_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].storePage__container
    }, h(_components_StoreInfo_StoreInfo__WEBPACK_IMPORTED_MODULE_3__.StoreInfo, {
      store: store
    }), h(_components_ProductsBatch_ProductsBatch__WEBPACK_IMPORTED_MODULE_2__.ProductsBatch, {
      products: products,
      onAddToCart: function onAddToCart(productId) {
        var product = products.find(function (p) {
          return p.id === productId;
        });
        if (product) {
          (0,_modules_cartManager__WEBPACK_IMPORTED_MODULE_5__.addToCart)({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
            card_img: product.card_img,
            options: []
          });
        }
      }
    })), isCartOpen ? h(_components_Cart_Cart__WEBPACK_IMPORTED_MODULE_0__.Cart, {
      onClose: function onClose() {
        return _this3.closeCart();
      }
    }) : null);
  }
});

/***/ }),

/***/ "./src/utils/auth.ts":
/*!***************************!*\
  !*** ./src/utils/auth.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AUTH_IS_AUTHENTICATED: () => (/* binding */ AUTH_IS_AUTHENTICATED),
/* harmony export */   AUTH_USER: () => (/* binding */ AUTH_USER),
/* harmony export */   CART_COUNT: () => (/* binding */ CART_COUNT),
/* harmony export */   validateConfirmPassword: () => (/* binding */ validateConfirmPassword),
/* harmony export */   validateEmail: () => (/* binding */ validateEmail),
/* harmony export */   validatePassword: () => (/* binding */ validatePassword)
/* harmony export */ });
var AUTH_USER = 'auth.user';
var AUTH_IS_AUTHENTICATED = 'auth.isAuthenticated';
var CART_COUNT = 'cart.count';
function validateEmail(email) {
  if (!email) {
    return 'Email обязателен';
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return 'Некорректный email';
  }
  return '';
}
function validatePassword(password) {
  if (!password) {
    return 'Пароль обязателен';
  }
  if (password.length < 8) {
    return 'Пароль должен быть не короче 8 символов';
  }
  var uppercaseCount = (password.match(/[A-Z]/g) || []).length;
  var lowercaseCount = (password.match(/[a-z]/g) || []).length;
  var digitCount = (password.match(/[0-9]/g) || []).length;
  var specialCharCount = (password.match(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/g) || []).length;
  if (uppercaseCount < 1) {
    return 'Пароль должен содержать минимум 1 заглавную букву';
  }
  if (lowercaseCount < 2) {
    return 'Пароль должен содержать минимум 2 строчные буквы';
  }
  if (digitCount < 2) {
    return 'Пароль должен содержать минимум 2 цифры';
  }
  if (specialCharCount < 1) {
    return 'Пароль должен содержать минимум 1 спецсимвол (!@#$%^&* и т.д.)';
  }
  return '';
}
function validateConfirmPassword(password, confirmPassword) {
  if (!confirmPassword) {
    return 'Подтверждение пароля обязательно';
  }
  if (password !== confirmPassword) {
    return 'Пароли не совпадают';
  }
  return '';
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var hasSymbol = typeof Symbol === "function";
/******/ 		var webpackQueues = hasSymbol ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = hasSymbol ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = hasSymbol ? Symbol("webpack error") : "__webpack_error__";
/******/ 		
/******/ 		
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 		
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 		
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			var handle = (deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 		
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}
/******/ 			var done = (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue))
/******/ 			body(handle, done);
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.tsx");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map