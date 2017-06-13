import STYLES_CONSTANTS from '../../src/services/styles.constants';

describe('Styles Constants', () => {
  test('Styles constants to be defined', () => {
    expect(STYLES_CONSTANTS).toBeDefined();
  });

  test('Styles contant should not be overwritten', () => {
    expect(Object.isFrozen(STYLES_CONSTANTS)).toBe(true);
  })
});
