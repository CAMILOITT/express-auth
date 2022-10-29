import request from 'supertest';
import chai from 'chai';
import app from './../app.js';
import { describe, it } from 'mocha';

const { expect } = chai;

describe('the auth', async () => {
  it('return 404 if the information incomplete', async () => {
    const payload = {
      name: 'Camilo',
    };
    const { body, status } = await request(app)
      .post('/auth/register')
      .send(payload);
    expect(status).to.equal(400);

    console.log(body);
    console.log(status);
  });

  it('create user', async () => {
    const payload = {
      name: 'Camilo',
      email: 'camilo@outlook.com',
      password: 'contraseñaDeLaCuenta',
    };
    const { body, status } = await request(app)
      .post('/auth/register')
      .send(payload);
    expect(status).to.equal(201);
  });

  it('login user', async () => {
    const payload = {
      'email': 'camilo@outlook.com',
      'password': 'contraseñaDeLaCuenta',
    };
    const { body, status } = await request(app)
      .post('/auth/login')
      .type("json")
      .send(payload);
    expect(status).to.equal(200);
  });
});
