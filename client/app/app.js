import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'client/config/environment';

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;

  engines = {
    '@peek-calendar/main': {
      dependencies: {
        services: [],
      },
    },
  };
}

loadInitializers(App, config.modulePrefix);
