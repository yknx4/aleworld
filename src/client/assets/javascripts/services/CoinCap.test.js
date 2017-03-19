import CoinCap from './CoinCap';

describe('Coincap', () => {
  const coincap = new CoinCap();
  it('should init without throwing error', () => {
    expect(() => {
      coincap.init();
    }).not.toThrow();
  });

});
