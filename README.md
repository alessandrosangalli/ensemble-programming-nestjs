# Exercício - Elephant Carpaccio (Original: https://docs.google.com/document/u/1/d/1TCuuu-8Mm14oxsOnlk8DqfZAA1cvtYu9WGv67Yj_sSk/pub)

**Produto:** Calculadora para varejo - Calcula o preço de um pedido.

**Input:**

- Quantidade de items
- Preço por item
- Código do estado do país

**Output:** Valor a ser cobrado do pedido.

**Cálculo:**

- Baseado no preço do pedido, o valor do pedido recebe um desconto.
- Baseado no estado do país, o valor do pedido recebe um acréscimo (imposto).

## Desconto por preço

- Até R$ 1000.00 - 3%
- Até R$ 5000.00 - 5%
- Até R$ 7000.00 - 7%
- Até R$ 10,000.00 - 10%
- Até R$ 15,000.00 ou mais - 15%

## Imposto por estado

- RS - 6.85%
- SC - 8.00%
- PR - 6.25%
- SP - 4.00%
- RJ - 8.25%

## Guia de divisão vertical: (https://appliedframeworks.com/user-stories-making-the-vertical-slice/)

1.  Escrever um backlog:

- Criar cerca de 10-20 histórias que nos levem do zero à implementação final.
- Nós queremos priorizar os impostos por estados (para entregar uma primeira versão ao cliente), pois impostos são legalmente obrigatórios, desconto por preço não é tão importante.

2.  Desenvolver:

- Baby Steps!
- TDD!
- YAGNI!
