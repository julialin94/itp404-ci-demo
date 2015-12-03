describe("ReviewsReport", function() {

  it("getAverageRating() should return the average of all stars", function() {
    var reportA = new ReviewsReport('Restaurant A 2014', reviews.restaurantA);
    var averageRating = reportA.getAverageRating();

    expect(averageRating).toEqual(3.8333333333333335);
  });

  it("getAverageCost() should return the average of all costs", function() {
    var reportA = new ReviewsReport('Restaurant A 2014', reviews.restaurantA);
    var averageCost = reportA.getAverageCost();


    expect(averageCost).toEqual(2.1666666666666665);
  });

  it("convertCostToDollarSign() should return the dollar sign equivalent of a cost", function() {
    var reportA = new ReviewsReport('Restaurant A 2014', reviews.restaurantA);
    var averageCost = reportA.getAverageCost();
    var dollarSign = reportA.convertCostToDollarSign(averageCost);

    if (averageCost < 1.5) {
      expect(dollarSign).toEqual('$');
    }
    else if (averageCost >= 1.5 && averageCost < 2.5) {
      expect(dollarSign).toEqual('$$');
    }
    else if (averageCost >= 2.5 && averageCost < 3.5) {
      expect(dollarSign).toEqual('$$$');
    }
    else {
      expect(dollarSign).toEqual('$$$$');
    }
  });

  it("summarize() should return a formatted report summary", function() {
    var reportA = new ReviewsReport('Restaurant A 2014', reviews.restaurantA);
    var averageRating = reportA.getAverageRating();
    var averageCost = reportA.getAverageCost();
    var dollarSign = reportA.convertCostToDollarSign(averageCost);
    var summary = reportA.summarize();
    expect(summary).toEqual({name: 'Restaurant A 2014', averageStarRating: 3.8333333333333335, totalReviews: 6, averageCost: {numeric: 2.1666666666666665, symbol: '$$'}});
  });
});
