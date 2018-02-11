
import * as request from 'supertest';
import * as app from '../src/server';
import { expect } from 'chai';

describe('index', () => {
  it('200 status code', (done) => {
    request(app).get('/')
      .expect(200, done);
  })
})
