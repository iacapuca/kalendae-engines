import Engine from '@ember/engine';

import loadInitializers from 'ember-load-initializers';
import Resolver from 'ember-resolver';

import config from '@peek-calendar/main/config/environment';

const { modulePrefix } = config;

export default class Calendar extends Engine {
  modulePrefix = modulePrefix;
  Resolver = Resolver;

  dependencies = {
    services: [],
  };
}

loadInitializers(Calendar, modulePrefix);
