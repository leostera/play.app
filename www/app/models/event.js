export default DS.Model.extend({

  name: DS.attr("string"),
  description: DS.attr("string"),
  end_time: DS.attr("date"),
  location: DS.attr("string")

});
