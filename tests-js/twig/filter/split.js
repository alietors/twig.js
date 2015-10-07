describe("twig.filter.split", function () {

  it("no limit", function () {
    twig.filter.split('one_two_three_four_five','_').should.eql(['one','two','three','four','five']);
  });

  it("limit 0", function () {
    twig.filter.split('one_two_three_four_five','_',0).should.eql(['one_two_three_four_five']);
  });

  it("limit 1", function () {
    twig.filter.split('one_two_three_four_five','_',1).should.eql(['one_two_three_four_five']);
  });

  it("positive limit greater than 1", function () {
    twig.filter.split('one_two_three_four_five','_',2).should.eql(['one','two_three_four_five']);
  });

  it("negative limit", function () {
    twig.filter.split('one_two_three_four_five','_', -1).should.eql(['one','two','three','four']);
  });
});
