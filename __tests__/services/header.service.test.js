import * as headerService from '../../src/services/header.service';

describe('Header Service', () => {
  let expectedResult

  beforeEach(() => {
    expectedResult = {
      title: 'Sample Title',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#428bca'
      }
    }
  })

  test('Getting header styles by passsing in a title.', () => {
    const result = headerService.default('Sample Title');
    expect(result).toEqual(expectedResult);
  });

  test('Getting header styles and return default title when no title is passed in.', () => {
    expectedResult.title = 'No Title Set'
    const result = headerService.default();
    expect(result).toEqual(expectedResult);
  });
})
