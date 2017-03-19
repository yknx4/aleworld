
import {connect} from 'socket.io-client';
import {isFunction, isEmpty, each} from 'lodash';

const EventTypes = {
  Global: Symbol('coincap-global'),
};

class CoinCap {
  constructor() {
    this.eventListeners = {
      [EventTypes.Global]: []
    };
    this.socket = null;
  }

  init() {
    this.socket = connect('http://socket.coincap.io');
    const {socket, eventListeners} = this;
    const listeners = eventListeners[EventTypes.Global];

    socket.on('global', function (globalMsg) {
      if (!isEmpty(listeners)) {
        each(listeners, (fn) => fn(globalMsg));
      }
   });
  }

  _addEventListener(type, listener) {
    if (!isFunction(listener)) {
      throw new TypeError('Listener should be a function');
    }
    this.eventListeners[type].push(listener);
    return listener;
  }

  addGlobalListener(listener) {
    return this._addEventListener(EventTypes.Global, listener);
  }
}

export default CoinCap;

export {
  CoinCap,
  EventTypes
};
