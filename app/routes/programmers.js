import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return ['dhh', 'sandi metz', 'dennis ritchie']
  }
});
