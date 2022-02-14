(function (modules) { // webpackBootstrap
	var installedModules = {};
	function __webpack_require__(moduleId) {
		if (installedModules[moduleId])
			return installedModules[moduleId].exports;
		var module = installedModules[moduleId] = {
			exports: {},
			id: moduleId,
			loaded: false
		};
		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
		module.loaded = true;
		return module.exports;
	}
	__webpack_require__.m = modules;
	__webpack_require__.c = installedModules;
	__webpack_require__.p = "";
	return __webpack_require__(0);
})
([
	/*0*/
	function (module, exports, __webpack_require__) {
		var MainView = __webpack_require__(1);
		React.render(
			React.createElement(MainView, null),
			document.getElementById('carousel')
		);
	},
	/*1*/
	function (module, exports, __webpack_require__) {
		'use strict';
		var Carousel = __webpack_require__(2);
		var Ease = __webpack_require__(7);
		var images = __webpack_require__(8);
		var MainView = React.createClass({
			displayName: 'MainView',
			getInitialState: function getInitialState() {
				return {
					images: images.slice(0, 9),
					width: 800,
					layout: 'prism',
					ease: 'quadInOut',
					duration: 400
				};
			},
			componentWillMount: function componentWillMount() {
				this.onSides = (function (event) {
					this.setState({images: images.slice(0, event.target.value)});
				}).bind(this);
				this.onLayout = (function (event) {
					this.setState({layout: event.target.value });
				}).bind(this);
				this.onDuration = (function (event) {
					this.setState({duration: parseInt(event.target.value)});
				}).bind(this);
				this.onEase = (function (event) {
					this.setState({ease: event.target.value});
				}).bind(this);
			},
			render: function render() {
				var carousel=React.createElement(Carousel, {
					width: this.state.width,
					images: this.state.images,
					ease: this.state.ease,
					duration: this.state.duration,
					layout: this.state.layout
				});
				console.log(carousel);
				return React.createElement(
					'div',
					null,
					carousel,
					React.createElement(
						'select',
						{ onChange: this.onLayout, value: this.state.layout },
						React.createElement(
							'option',
							{ value: 'prism' },
							'prism'
						),
						React.createElement(
							'option',
							{ value: 'classic' },
							'classic'
						),
						React.createElement(
							'option',
							{ value: 'principal' },
							'principal'
						)
					)
				);
			}
		});
		module.exports = MainView;
	},
	/*2*/
	function (module, exports, __webpack_require__) {
		'use strict';
		var React = __webpack_require__(3);
		var Util = __webpack_require__(4);
		var Layout = __webpack_require__(5);
		var Depot = __webpack_require__(6);
		var Carousel = React.createClass({
			displayName: 'Carousel',
			getInitialState: function getInitialState() {
				return {
					images: this.props.images,
					figures: Layout[this.props.layout].figures(this.props.width, this.props.images, 0),
					rotationY: 0
				};
			},
			componentWillMount: function componentWillMount() {
				this.depot = Depot(this.getInitialState(), this.props, this.setState.bind(this));
				this.onRotate = this.depot.onRotate.bind(this);
			},
			componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
				this.depot.onNextProps(nextProps);
			},
			render: function render() {
				var angle = 2 * Math.PI / this.state.figures.length;
				var translateZ = -Layout[this.props.layout].distance(this.props.width, this.state.figures.length);
				var figures = this.state.figures.map(function (d, i) {
					var votar=function(){
						alert('Votaste a la candidata '+(i+1));
					};
					return React.createElement(
						'figure',
						{key: i, style: Util.figureStyle(d)},
						React.createElement('div',{},[
							React.createElement('img', {src: d.image, alt: i, height: '100%', width: '100%',onClick:function(){
								var MainView = __webpack_require__(1);
								console.log(MainView());
							}}),
							React.createElement('a', {href: 'javascript:void(0)',onClick:votar},'Votar')
						])
					);
				});
				return React.createElement(
					'section',
					{className: 'react-3d-carousel'},
					React.createElement(
						'div',
						{
							className: 'carousel',
							style: {
								transform: 'translateZ(' + translateZ + 'px)',
								webkitTransform: 'translateZ(' + translateZ + 'px)'
							}
						},
						figures
					),
					React.createElement('div', {className: 'prev', onClick: Util.partial(this.onRotate, -angle)}),
					React.createElement('div', {className: 'next', onClick: Util.partial(this.onRotate, angle)})
				);
			}
		});
		module.exports = Carousel;
	},
	/*3*/
	function (module, exports, __webpack_require__) {
		module.exports = React;
	},
	/*4*/
	function (module, exports, __webpack_require__) {
		var exports = module.exports = {};
		exports.figureStyle = function figureStyle(d) {
			if(Object.hasOwnProperty.call(d, 'translateY')){
				return{
					transform: 'rotateY(' + 0 + 'rad)'
					+ ' translateY(' + d.translateY + 'px) '
					+ ' translateX(' + d.translateX + 'px)'
					+ ' translateZ(' + 0 + 'px)',
					opacity: d.opacity,
					webkitTransform: 'rotateY(' + 0 + 'rad)'
					+ ' translateY(' + d.translateY + 'px) '
					+ ' translateX(' + d.translateX + 'px)'
					+ ' translateZ(' + 0 + 'px)'
				}
			}
			var translateX = Object.hasOwnProperty.call(d, 'translateX') ? d.translateX : 0;
			return {
				transform: 'rotateY(' + d.rotateY + 'rad) '
				+ ' translateX(' + translateX + 'px)'
				+ ' translateZ(' + d.translateZ + 'px)',
				opacity: d.opacity,
				webkitTransform: 'rotateY(' + d.rotateY + 'rad) '
				+ ' translateX(' + translateX + 'px)'
				+ ' translateZ(' + d.translateZ + 'px)',
			};
		};
		exports.partial = function partial(func) {
			var args = Array.prototype.slice.call(arguments, 1);
			return function () {
				return func.apply(this, args.concat(Array.prototype.slice.call(arguments, 0)));
			}
		};
		exports.range = function range(from, to) {
			var res = [];
			for (var i = from; i < to; ++i) {
				res.push(i);
			}
			return res;
		};
		exports.uniq = function uniq(a) {
			var prims = {"boolean": {}, "number": {}, "string": {}}, objs = [];
			return a.filter(function (item) {
				var type = typeof item;
				if (type in prims)
					return prims[type].hasOwnProperty(item) ? false : (prims[type][item] = true);
				else
					return objs.indexOf(item) >= 0 ? false : objs.push(item);
			});
		};
		exports.merge = function merge(defaults, options) {
			var extended = {};
			var prop;
			for (prop in defaults) {
				if (Object.prototype.hasOwnProperty.call(defaults, prop)) {
					extended[prop] = defaults[prop];
				}
			}
			for (prop in options) {
				if (Object.prototype.hasOwnProperty.call(options, prop)) {
					extended[prop] = options[prop];
				}
			}
			return extended;
		};
		exports.pluck = function pluck(key, entries) {
			return entries.map(function (entry) {
				return entry[key];
			});
		};
		exports.mapObj = function mapObj(fn, obj) {
			var res = {};
			for (var key in obj) {
				if (obj.hasOwnProperty(key)) {
					res[key] = fn(obj[key]);
				}
			}
			return res;
		};
	},
	/*5*/
	function (module, exports, __webpack_require__) {
		var Util = __webpack_require__(4);
		var exports = module.exports = {};
		exports.classic = {
			distance: function (width, sides) {
				return Math.round(width * Math.log(sides))
			},
			figures: function (width, images, initial) {
				var sides = images.length;
				var angle = 2 * Math.PI / sides;
				var distance = exports.classic.distance(width, sides);
				var acceptable = Math.round(initial / angle) * angle;
				return Util.range(0, sides).map(function (d) {
					var angleR = d * angle + acceptable;
					return {
						rotateY: 0,
						translateX: distance * Math.sin(angleR),
						translateZ: distance * Math.cos(angleR),
						opacity: 1,
						present: true,
						key: d,
						image: images[d]
					};
				});
			}
		};
		exports.prism = {
			distance: function apothem(width, sides) {
				return Math.ceil(width / (2 * Math.tan(Math.PI / sides)));
			},
			figures: function figures(width, images, initial) {
				var sides = images.length;
				var angle = 2 * Math.PI / sides;
				var acceptable = Math.round(initial / angle) * angle;
				return Util.range(0, sides).map(function (d) {
					return {
						rotateY: d * angle + acceptable,
						translateX: 0,
						translateZ: exports.prism.distance(width, sides),
						opacity: 1,
						present: true,
						key: d,
						image: images[d]
					};
				});
			}
		};
		exports.principal = {
			distance: function apothem(width, sides) {
				return Math.ceil(width / (2 * Math.tan(Math.PI / sides)));
			},
			figures: function figures(width, images, initial) {
				var sides = images.length;
				var angle = 2 * Math.PI / sides;
				var acceptable = Math.round(initial / angle) * angle;
				return Util.range(0, sides).map(function (d) {
					return {
						translateX: parseInt(d/3)*500-500,
						translateY: d%3*300-300,
						opacity: 1,
						present: true,
						key: d,
						image: images[d]
					};
				});
			}
		};
	},
	/*6*/
	function (module, exports, __webpack_require__) {
		var Ease = __webpack_require__(7);
		var Layout = __webpack_require__(5);
		var Util = __webpack_require__(4);
		window.Ease = Ease;
		module.exports = function depot(initialState, initialProps, callback) {
			var res = {};
			var state = initialState;
			var props = initialProps;
			var requestID;
			res.onNextProps = function onNextProps(nextProps) {
				if (props.layout != nextProps.layout || props.images != nextProps.images) {
					props = nextProps;
					var to = Layout[props.layout].figures(props.width, props.images, state.rotationY);
					var bounds = transitionFigures(state.figures, to, Ease[props.ease], props.duration);
					var stepper = transit(bounds, to, props.duration);
					playAnimation(state, to, stepper, callback);
				}
				props = nextProps;
			};
			res.onRotate = function (angle) {
				var to = Layout[props.layout].figures(props.width, props.images, state.rotationY + angle);
				state.rotationY += angle;
				var bounds = transitionFigures(state.figures, to, Ease[props.ease], props.duration);
				var stepper = transit(bounds, to, props.duration);
				if (requestID) {
					cancelAnimationFrame(requestID);
				}
				playAnimation(state, to, stepper, callback);
			};
			function playAnimation(state, to, stepper, callback) {
				if (requestID) window.cancelAnimationFrame(requestID);
				function animate(timestamp) {
					requestID = requestAnimationFrame(animate);
					state.figures = stepper(timestamp);
					callback(state);
					if (state.figures == to) {
						cancelAnimationFrame(requestID);
					}
				}

				requestAnimationFrame(animate);
			}
			return res;
		};
		function transitionFigures(from, to, ease) {
			var keys = Util.uniq(Util.pluck('key', from.concat(to)));
			var fromTo = [];
			keys.forEach(function (key) {
				fromTo.push(transfigure(startFrame(from[key], to[key]),
					endFrame(from[key], to[key]), ease));
			});
			return fromTo;
		}
		function transit(entries, to, duration) {
			var start, end;
			var withChange = addChange(entries);
			var time = 0;
			return function step(timestamp) {
				if (!start) {
					start = timestamp;
					end = timestamp + duration;
				}
				if (timestamp >= end) {
					return to;
				}
				time = timestamp - start;
				return tally(time, withChange, duration);
			}
		}
		function transfigure(from, to, ease) {
			var keys = Util.uniq(Object.keys(from || {}).concat(Object.keys(to || {})));
			var res = {};
			keys.forEach(function (key) {
				res[key] = {
					from: from[key],
					to: to[key]
				};
				res[key].ease = isNaN(res[key].from) ? secondArg : ease;
			});
			return res;
		}
		function addChange(entries) {
			var len = entries.length;
			var res = new Array(len);
			for (var i = 0; i < len; ++i) {
				res[i] = addObjChange(entries[i]);
			}
			return res;
		}
		function addObjChange(entry) {
			var res = Object.create(null);
			for (var key in entry) {
				res[key] = Util.merge(entry[key], {change: entry[key].to - entry[key].from});
			}
			return res;
		}
		function tally(time, entries, duration) {
			var len = entries.length;
			var res = new Array(len);
			var entry;
			for (var i = 0; i < len; ++i) {
				entry = entries[i];
				var obj = Object.create(null);
				for (var key in entry) {
					obj[key] = entry[key].ease ?
						entry[key].ease(time, entry[key].from, entry[key].change, duration)
						: entry[key].from;
				}
				res[i] = obj;
			}
			return res;
		}
		var secondArg = function (x, y) {
			return y;
		};
		var present = function present(entries) {
			return entries.filter(function (entry) {
				return entry.present;
			});
		};
		function startFrame(now, then) {
			return now || Util.merge(then, {present: true, opacity: 0});
		}
		function endFrame(now, then) {
			return now && !then ? Util.merge(now, {present: false, opacity: 0}) // leaves
				: Util.merge(then, {present: true, opacity: 1});
		}
	},
	/*7*/
	function (module, exports, __webpack_require__) {
		var exports = module.exports = {};
		exports.quadInOut = function quadInOut(time, begin, change, duration) {
			if ((time = time / (duration / 2)) < 1) {
				return change / 2 * time * time + begin;
			} else {
				return -change / 2 * ((time -= 1) * (time - 2) - 1) + begin;
			}
		};
	},
	/*8*/
	function (module, exports, __webpack_require__) {
		module.exports = [
			'reina.jpg',
			'reina.jpg',
			'reina.jpg',
			'reina.jpg',
			'reina.jpg',
			'reina.jpg',
			'reina.jpg',
			'reina.jpg',
			'reina.jpg',
			'reina.jpg'
		];
	}
]);