/**
Adapted from eventemitter3
The MIT License (MIT)

Copyright (c) 2014 Arnout Kazemier

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */

const has = Object.prototype.hasOwnProperty;
let prefix: string | false = '~';
/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new (Events as any)().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */
function EE(this: any, fn: any, context: any, once: boolean) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

export class EventEmitter {
  _eventsCount = 0;
  _events = new (Events as any)();
  /**
   * Add a listener for a given event.
   *
   * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
   * @param {(String|Symbol)} event The event name.
   * @param {Function} fn The listener function.
   * @param {*} context The context to invoke the listener with.
   * @param {Boolean} once Specify if the listener is a one-time listener.
   * @returns {EventEmitter}
   * @private
   */
  addListener(
    emitter: { _events: { [x: string]: any }; _eventsCount: number },
    event: string,
    fn: any,
    context: any,
    once: boolean,
  ): EventEmitter {
    if (typeof fn !== 'function') {
      throw new TypeError('The listener must be a function');
    }

    const listener = new (EE as any)(fn, context || emitter, once),
      evt = prefix ? prefix + event : event;

    if (!emitter._events[evt])
      (emitter._events[evt] = listener), emitter._eventsCount++;
    else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
    else emitter._events[evt] = [emitter._events[evt], listener];

    return emitter as any;
  }
  /**
   * Clear event by name.
   *
   * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
   * @param {(String|Symbol)} evt The Event name.
   * @private
   */
  clearEvent(
    emitter: { _eventsCount: number; _events: { [x: string]: any } },
    evt: string | number,
  ) {
    if (--emitter._eventsCount === 0) emitter._events = new (Events as any)();
    else delete emitter._events[evt];
  }
  /**
   * Return an array listing the events for which the emitter has registered
   * listeners.
   *
   * @returns {Array}
   * @public
   */
  eventNames(): Array<any> {
    const names: string[] = [];
    let events, name;

    if (this._eventsCount === 0) return names;

    for (name in (events = this._events)) {
      if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
    }

    if (Object.getOwnPropertySymbols) {
      return names.concat(
        Object.getOwnPropertySymbols(events) as unknown as string[],
      );
    }

    return names;
  }
  /**
   * Return the listeners registered for a given event.
   *
   * @param {(String|Symbol)} event The event name.
   * @returns {Array} The registered listeners.
   * @public
   */
  listeners(event: string): Array<any> {
    const evt = prefix ? prefix + event : event,
      handlers = this._events[evt];

    if (!handlers) return [];
    if (handlers.fn) return [handlers.fn];
    const l = handlers.length,
      ee = new Array(l);
    for (let i = 0; i < l; i++) {
      ee[i] = handlers[i].fn;
    }

    return ee;
  }
  /**
   * Return the number of listeners listening to a given event.
   *
   * @param {(String|Symbol)} event The event name.
   * @returns {Number} The number of listeners.
   * @public
   */
  listenerCount(event: string): number {
    const evt = prefix ? prefix + event : event,
      listeners = this._events[evt];

    if (!listeners) return 0;
    if (listeners.fn) return 1;
    return listeners.length;
  }

  /**
   * Calls each of the listeners registered for a given event.
   *
   * @param {(String|Symbol)} event The event name.
   * @returns {Boolean} `true` if the event had listeners, else `false`.
   * @public
   */
  emit(
    event: string,
    a1?: any,
    a2?: any,
    a3?: any,
    a4?: any,
    a5?: any,
  ): boolean {
    const evt = prefix ? prefix + event : event;

    if (!this._events[evt]) return false;

    const listeners = this._events[evt],
      len = arguments.length;
    let args, i;

    if (listeners.fn) {
      if (listeners.once)
        this.removeListener(event, listeners.fn, undefined, true);

      switch (len) {
        case 1:
          return listeners.fn.call(listeners.context), true;
        case 2:
          return listeners.fn.call(listeners.context, a1), true;
        case 3:
          return listeners.fn.call(listeners.context, a1, a2), true;
        case 4:
          return listeners.fn.call(listeners.context, a1, a2, a3), true;
        case 5:
          return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
        case 6:
          return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
      }

      for (i = 1, args = new Array(len - 1); i < len; i++) {
        //eslint-disable-next-line prefer-rest-params
        args[i - 1] = arguments[i];
      }

      listeners.fn.apply(listeners.context, args);
    } else {
      const length = listeners.length;
      let j;

      for (i = 0; i < length; i++) {
        if (listeners[i].once)
          this.removeListener(event, listeners[i].fn, undefined, true);

        switch (len) {
          case 1:
            listeners[i].fn.call(listeners[i].context);
            break;
          case 2:
            listeners[i].fn.call(listeners[i].context, a1);
            break;
          case 3:
            listeners[i].fn.call(listeners[i].context, a1, a2);
            break;
          case 4:
            listeners[i].fn.call(listeners[i].context, a1, a2, a3);
            break;
          default:
            if (!args)
              for (j = 1, args = new Array(len - 1); j < len; j++) {
                //eslint-disable-next-line prefer-rest-params
                args[j - 1] = arguments[j];
              }

            listeners[i].fn.apply(listeners[i].context, args);
        }
      }
    }

    return true;
  }

  /**
   * Add a listener for a given event.
   *
   * @param {(String|Symbol)} event The event name.
   * @param {Function} fn The listener function.
   * @param {*} [context=this] The context to invoke the listener with.
   * @returns {EventEmitter} `this`.
   * @public
   */
  on(event: any, fn: any, context?: any): EventEmitter {
    return this.addListener(this, event, fn, context, false);
  }
  /**
   * Add a one-time listener for a given event.
   *
   * @param {(String|Symbol)} event The event name.
   * @param {Function} fn The listener function.
   * @param {*} [context=this] The context to invoke the listener with.
   * @returns {EventEmitter} `this`.
   * @public
   */
  once(event: any, fn: any, context: any): EventEmitter {
    return this.addListener(this, event, fn, context, true);
  }

  /**
   * Remove the listeners of a given event.
   *
   * @param {(String|Symbol)} event The event name.
   * @param {Function} fn Only remove the listeners that match this function.
   * @param {*} context Only remove the listeners that have this context.
   * @param {Boolean} once Only remove one-time listeners.
   * @returns {EventEmitter} `this`.
   * @public
   */
  removeListener(
    event: string,
    fn: any,
    context?: any,
    once?: any,
  ): EventEmitter {
    const evt = prefix ? prefix + event : event;

    if (!this._events[evt]) return this;
    if (!fn) {
      this.clearEvent(this, evt);
      return this;
    }

    const listeners = this._events[evt];

    if (listeners.fn) {
      if (
        listeners.fn === fn &&
        (!once || listeners.once) &&
        (!context || listeners.context === context)
      ) {
        this.clearEvent(this, evt);
      }
    } else {
      const events = [];
      for (let i = 0, length = listeners.length; i < length; i++) {
        if (
          listeners[i].fn !== fn ||
          (once && !listeners[i].once) ||
          (context && listeners[i].context !== context)
        ) {
          events.push(listeners[i]);
        }
      }

      //
      // Reset the array, or remove it completely if we have no more listeners.
      //
      if (events.length)
        this._events[evt] = events.length === 1 ? events[0] : events;
      else this.clearEvent(this, evt);
    }

    return this;
  }
  /**
   * Remove all listeners, or those of the specified event.
   *
   * @param {(String|Symbol)} [event] The event name.
   * @returns {EventEmitter} `this`.
   * @public
   */
  removeAllListeners(event: string): EventEmitter {
    let evt;

    if (event) {
      evt = prefix ? prefix + event : event;
      if (this._events[evt]) this.clearEvent(this, evt);
    } else {
      this._events = new (Events as any)();
      this._eventsCount = 0;
    }

    return this;
  }
  public get off() {
    return this.removeListener;
  }
  public prefixed = prefix;
  public EventEmitter = EventEmitter;
}
