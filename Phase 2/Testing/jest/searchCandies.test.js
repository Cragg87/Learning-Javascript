const searchCandies = require('../lib/searchCandies.js')

describe('searchCandies', () => {
  it('returns candies under £10 beginning with "Ma"', () => {
    expect(searchCandies('Ma', 10)).toEqual([ 'Mars', 'Maltesers' ])
  });
  it('returns candies under £2 beginning with "Ma"', () => {
    expect(searchCandies('Ma', 2)).toEqual([ 'Mars' ])
  });
  it('returns candies under £10 beginning with "S"', () => {
    expect(searchCandies('S', 10)).toEqual([ 'Skitties', 'Skittles', 'Starburst' ])
  });
  it('returns candies under £4 beginning with "S"', () => {
    expect(searchCandies('S', 4)).toEqual([ 'Skitties', 'Skittles' ])
  });
  it('returns candies under £10 beginning with "ma"', () => {
    expect(searchCandies('ma', 10)).toEqual([ 'Mars', 'Maltesers' ])
  });
});