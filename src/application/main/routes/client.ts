import { 
  adaptExpressGetClientRoute as getClient, 
  adaptExpressCreateClientRoute as createClient
} from '@/application/main/adapters';
import { makeRegisterController } from '@/application/main/factories/application/controllers';
import { auth } from '@/application/main/middlewares'

import { Router } from 'express';

export default (router: Router): void => {
  router.get('/client', auth, getClient(makeRegisterController()));
  router.post('/client', auth, createClient(makeRegisterController()));
};
