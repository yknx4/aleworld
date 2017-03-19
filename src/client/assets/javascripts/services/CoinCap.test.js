import CoinCap, {EventTypes as coincapEventTypes} from './CoinCap';

describe('Coincap', () => {
  let coincap;
  beforeEach(() => {
    coincap = new CoinCap();
  });

  it('should have a null socket', () => {
    expect(coincap.socket).toBeNull();
  });

  describe('init', () => {
    beforeEach(() => {
      coincap.init();
    });

    it('should have a socket not null', () => {
      expect(coincap.socket).not.toBeNull();
    });
  });

  describe('event listeners', () => {
    beforeAll(() => {
      coincap.init();
    });

    it('should create an global listeners array', () => {
      expect(coincap.eventListeners[coincapEventTypes.Global]).toBeArray;
    });

    describe('_addEventListener', () => {
      it('should thrown if listener is not a function', () => {
        expect(() => {
          coincap._addEventListener('t', null);
        }).toThrow();
      });
    });

    describe('addGlobalListener', () => {
      let spyListener = jest.fn();

      it('should add an event listener to the global listeners array', () => {
        coincap.addGlobalListener(spyListener);
        expect(coincap.eventListeners[coincapEventTypes.Global]).toContain(spyListener);
      });
    });

  });

});
