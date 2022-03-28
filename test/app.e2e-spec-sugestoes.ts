import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  // O sistema vai receber somente a quantidade e valor do produto.
  it('Deve retornar a soma dos valores dos itens do pedido', () => {});

  // Dessa forma o cliente já pode usar o produto em qualquer estado, porém tem que inserir manualmente a taxa
  // O sistema vai receber a quantidade, valor e taxa do produto.
  // Esse é um estado onde o produto já pode ser entregue.
  it('Deve retornar a soma dos valores inseridos e calcular o imposto inserido', () => {});

  // O sistema vai receber a quantidade, valor e se o cliente estiver no RS ele não precisa inserir a taxa
  // Se estiver fora do RS ele precisa inserir manualmente
  it('Deve calcular o valor do imposto para RS ou para a taxa inserida manualmente', () => {});

  it('Deve calcular o valor do imposto para RS e SC', () => {});

  it('Deve calcular o valor do imposto para RS, SC, PR, SP, RJ', () => {});

  it('Deve calcular o valor do pedido com desconto escolhido pelo usuário', () => {});

  it('Deve calcular o valor do pedido sempre com desconto de 3%', () => {});

  it('Deve calcular o valor do pedido com desconto de 3% para pedidos >= 1.000', () => {});

  it('Deve calcular o valor do pedido com desconto de 5% para pedidos >= 5.000', () => {});

  it(`Deve calcular o valor do pedido com desconto de 7% para pedidos >= 7.000
                                                      10% para pedidos >= 10.000,
                                                      15% para pedidos >= 15.000`, () => {});

  it(`Deve validar se a quantidade e preço são maiores do que zero`, () => {});

  it(`Deve validar o código do estado é válido`, () => {});
});
