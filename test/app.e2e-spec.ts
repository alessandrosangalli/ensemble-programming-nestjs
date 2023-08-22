import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  /**
   * 1 história pra cada desconto por preço
   * 1 história pra cada imposto por estado
   * Até R$ 1000.00 - 3%
     Até R$ 5000.00 - 5
     Até R$ 7000.00 - 7%
     Até R$ 10,000.00 - 10%
     Até R$ 15,000.00 ou mais - 15%
   */

  it('Deve retornar a soma dos valores dos iffftens do pedido', () => {});

  it('Deve calcular o valor do imposto para RS', () => {});

  it('Deve calcular o valor do imposto para SC', () => {});

  it('Deve calcular o valor do imposto para PR', () => {});

  it('Deve calcular o valor do imposto para SP', () => {});

  it('Deve calcular o valor do imposto para RJ', () => {});

  it('Deve retornar a soma dos valores dos itens do pedido com acrescimo do imposto', () => {});

  it('Deve calcular o desconto para pedidos ate 1.000', () => {});

  it('Deve calcular o desconto para pedidos ate 5.000', () => {});

  it('Deve calcular o desconto para pedidos ate 7.000', () => {});

  it('Deve calcular o desconto para pedidos ate 10.000', () => {});

  it('Deve calcular o desconto para pedidos a partir de 15.000', () => {});

  it('Deve retornar a soma dos valores dos itens do pedido com desconto', () => {});
});
