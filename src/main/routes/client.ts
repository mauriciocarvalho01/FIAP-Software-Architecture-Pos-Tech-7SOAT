import { adaptExpressGetRoute as get } from '@/main/adapters';
import { makeClientController } from '@/main/factories/application/controllers';
import { auth } from '@/main/middlewares'

import { Router } from 'express';

export default (router: Router): void => {
  router.get('/clients', auth, get(makeClientController()));
};
