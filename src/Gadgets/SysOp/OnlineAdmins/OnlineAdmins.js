/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base <https://zh.wikipedia.org/wiki/User:Vanished_user_1929210/js/OnlineAdmins.js>
 * @source <https://git.qiuwen.wiki/InterfaceAdmin/Gadgets/src/branch/master/src/Gadgets/OnlineAdmins>
 * @dependency ext.gadget.i18n, mediawiki.api, mediawiki.util
 */
/**
 * +--------------------------------------------------------+
 * |         === WARNING: GLOBAL GADGET FILE ===            |
 * +--------------------------------------------------------+
 * |      All changes should be made in the repository,     |
 * |              otherwise they will be lost.              |
 * +--------------------------------------------------------+
 * |      Changes to this page may affect many users.       |
 * |  Please discuss changes at talk page before editing.   |
 * +--------------------------------------------------------+
 */
/* <nowiki> */
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
$(function onlineAdmins() {
  var i18nMessages = function i18nMessages() {
    var _i18n = i18n,
      localize = _i18n.localize;
    return {
      ' ($1 online):': localize({
        en: ' ($1 online):',
        ja: '（$1人オンライン中）：',
        'zh-hans': '（$1个在线）：',
        'zh-hant': '（$1個在線）：'
      }),
      Admins: localize({
        en: 'Admins',
        ja: '管理者',
        'zh-hans': '管理员',
        'zh-hant': '管理員'
      }),
      Patrollers: localize({
        en: 'Patrollers',
        ja: '巡回者',
        'zh-hans': '巡查员',
        'zh-hant': '巡查員'
      }),
      Bureaucrats: localize({
        en: 'Bureaucrats',
        ja: 'スチュワード',
        'zh-hans': '档案理事员',
        'zh-hant': '檔案理事員'
      }),
      'Network error': localize({
        en: 'Network error',
        ja: 'ネットワークエラー',
        'zh-hans': '网络异常',
        'zh-hant': '網路異常'
      }),
      NoOnline: localize({
        en: 'Currently there are no high privilege users online',
        ja: '現在、高権限利用者はオンラインにいません',
        'zh-hans': '目前没有站务人员在线',
        'zh-hant': '目前沒有站務人員在線'
      }),
      Online: localize({
        en: 'Online admins',
        ja: 'オンラインの高権限利用者',
        'zh-hans': '在线站务人员',
        'zh-hant': '線上站務人員'
      }),
      OnlineWithin30Minutes: localize({
        en: 'High privilege users online within 30 minutes:',
        ja: '30分以内にオンラインで高権限利用者：',
        'zh-hans': '下面是最近30分钟内在线的站务人员：',
        'zh-hant': '下面是最近30分鐘內的線上站務人員：'
      })
    };
  };
  var messages = i18nMessages();
  var message = function message(key) {
    return messages[key] || key;
  };
  var BLACK_LIST = ['滥用过滤器'];
  // Create portlet link
  var portletLinkOnline = mw.util.addPortletLink(document.getElementById('p-cactions') ? 'p-cactions' : 'p-tb', '#', message('Online'), 't-onlineadmin');
  var api = new mw.Api({
    ajax: {
      headers: {
        'Api-User-Agent': "YsArxiv/1.1 (OnlineAdmins/1.1; ".concat(mw.config.get('wgWikiID'), ")")
      }
    }
  });
  var doClick = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(event) {
      var users, usersExt, bureaucrats, admins, patrollers, time, rcstart, rcend, recentchangesParams, recentchanges, logeventsParams, logevents, promises, _loop, i, _i, _promises, promise, filter, userlink, adminsstring, onlineCountText, _iterator, _step, element, _iterator2, _step2, _element, _iterator3, _step3, _element2;
      return _regeneratorRuntime().wrap(function _callee2$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            event.preventDefault();
            users = [];
            usersExt = [];
            bureaucrats = [];
            admins = [];
            patrollers = []; // 最近更改30分钟内的编辑用户
            time = new Date();
            rcstart = time.toISOString();
            time.setMinutes(time.getMinutes() - 30);
            rcend = time.toISOString();
            _context3.prev = 10;
            recentchangesParams = {
              action: 'query',
              formatversion: '2',
              list: 'recentchanges',
              rcprop: 'user',
              rcshow: ['!bot', '!anon'],
              rclimit: 500,
              rcstart: rcstart,
              rcend: rcend
            };
            _context3.next = 14;
            return api.get(recentchangesParams);
          case 14:
            recentchanges = _context3.sent;
            recentchanges['query'].recentchanges.forEach(function (_ref2) {
              var user = _ref2.user;
              users.push(user);
            });
            logeventsParams = {
              action: 'query',
              formatversion: '2',
              list: 'logevents',
              leprop: 'user',
              lelimit: 500,
              lestart: rcstart,
              leend: rcend
            };
            _context3.next = 19;
            return api.get(logeventsParams);
          case 19:
            logevents = _context3.sent;
            logevents['query'].logevents.forEach(function (_ref3) {
              var user = _ref3.user;
              usersExt.push(user);
            });
            Array.prototype.push.apply(users, usersExt);
            // 用户名去重与分割
            users = _toConsumableArray(new Set(users));
            promises = [];
            _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop(i) {
              return _regeneratorRuntime().wrap(function _loop$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    // eslint-disable-next-line no-loop-func
                    promises.push( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                      var params, response;
                      return _regeneratorRuntime().wrap(function _callee$(_context) {
                        while (1) switch (_context.prev = _context.next) {
                          case 0:
                            params = {
                              action: 'query',
                              format: 'json',
                              formatversion: '2',
                              list: 'users',
                              ususers: users.slice(i * 50, (i + 1) * 50).join('|'),
                              usprop: 'groups'
                            };
                            _context.next = 3;
                            return api.get(params);
                          case 3:
                            response = _context.sent;
                            response['query'].users.forEach(function (_ref5) {
                              var groups = _ref5.groups,
                                name = _ref5.name;
                              // 找到管理人员，去除adminbot
                              if (!(groups.indexOf('bot') !== -1) && !(BLACK_LIST.indexOf(name) !== -1)) {
                                if (groups.indexOf('bureaucrat') !== -1) {
                                  bureaucrats.push(name);
                                }
                                if (groups.indexOf('sysop') !== -1) {
                                  admins.push(name);
                                }
                                if (groups.indexOf('patroller') !== -1) {
                                  patrollers.push(name);
                                }
                              }
                            });
                          case 5:
                          case "end":
                            return _context.stop();
                        }
                      }, _callee);
                    })));
                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }, _loop);
            });
            i = 0;
          case 26:
            if (!(i < (users.length + 50) / 50)) {
              _context3.next = 31;
              break;
            }
            return _context3.delegateYield(_loop(i), "t0", 28);
          case 28:
            i++;
            _context3.next = 26;
            break;
          case 31:
            _i = 0, _promises = promises;
          case 32:
            if (!(_i < _promises.length)) {
              _context3.next = 39;
              break;
            }
            promise = _promises[_i];
            _context3.next = 36;
            return promise();
          case 36:
            _i++;
            _context3.next = 32;
            break;
          case 39:
            // 消除空值
            filter = function filter(string) {
              return string;
            };
            bureaucrats = bureaucrats.filter(function (element) {
              return filter(element);
            });
            admins = admins.filter(function (element) {
              return filter(element);
            });
            patrollers = patrollers.filter(function (element) {
              return filter(element);
            });
            userlink = function userlink(user) {
              var _user = user.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&lt;').replace(/"/g, '&quot;');
              return "<li><a href=\"/wiki/User:".concat(_user, "\" rel=\"noopener\" target=\"_blank\">").concat(_user, "</a>&nbsp;<span style=\"font-size: 90%\">\uFF08<a href=\"/wiki/User talk:").concat(_user, "\" rel=\"noopener\" target=\"_blank\">\u7559\u8A00</a>\uFF09</span></li>");
            };
            if (bureaucrats.length + admins.length + patrollers.length > 0) {
              adminsstring = ["<p>".concat(message('OnlineWithin30Minutes'), "</p>")];
              onlineCountText = message(' ($1 online):');
              if (bureaucratds.length > 0) {
                adminsstring.push("<div class=\"onlineadmin-section\">".concat(message('Bureaucrats')).concat(onlineCountText.replace('$1', String(bureaucrats.length)), "<ul class=\"onlineadmin-list\">"));
                _iterator = _createForOfIteratorHelper(stewards);
                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    element = _step.value;
                    adminsstring.push(userlink(element));
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
                adminsstring.push('</ul></div>');
              }
              if (admins.length > 0) {
                adminsstring.push("<div class=\"onlineadmin-section\">".concat(message('Admins')).concat(onlineCountText.replace('$1', String(admins.length)), "<ul class=\"onlineadmin-list\">"));
                _iterator2 = _createForOfIteratorHelper(admins);
                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    _element = _step2.value;
                    adminsstring.push(userlink(_element));
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }
                adminsstring.push('</ul></div>');
              }
              if (patrollers.length > 0) {
                adminsstring.push("<div class=\"onlineadmin-section\">".concat(message('Patrollers')).concat(onlineCountText.replace('$1', String(patrollers.length)), "<ul class=\"onlineadmin-list\">"));
                _iterator3 = _createForOfIteratorHelper(patrollers);
                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    _element2 = _step3.value;
                    adminsstring.push(userlink(_element2));
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }
                adminsstring.push('</ul></div>');
              }
              mw.notify($(adminsstring.join('')), {
                tag: 'onlineAdmins'
              });
            } else {
              mw.notify(message('NoOnline'), {
                tag: 'onlineAdmins',
                type: 'warn'
              });
            }
            _context3.next = 50;
            break;
          case 47:
            _context3.prev = 47;
            _context3.t1 = _context3["catch"](10);
            mw.notify(message('Network error'), {
              tag: 'onlineAdmins',
              type: 'error'
            });
          case 50:
          case "end":
            return _context3.stop();
        }
      }, _callee2, null, [[10, 47]]);
    }));
    return function doClick(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  // Bind click listener
  if (!portletLinkOnline) {
    return;
  }
  $(portletLinkOnline).find('a').on('click', doClick);
  // Add CSS
  mw.util.addCSS('.onlineadmin-section{word-break:break-all}.onlineadmin-list,.onlineadmin-list li{margin:0;display:inline}.onlineadmin-list li:after{content:"、"}.onlineadmin-list li:last-child:after{content:none}');
});
/* </nowiki> */
