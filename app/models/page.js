import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  title: attr('string'),
  slug: attr('string'),
  content: attr('string'),
});
