## Front-end está sendo refatorado nesse momento...

### Front-end do projeto fullStack Senac

- Projeto Angular
- Definição e criação de componentes
- Configuração de rotas e navegação
- Criação do serviço de transações com métodos HTTP
- Projetar o cabeçalho e o rodapé da aplicação
- Desenvolvimento da página de listagem
- Load de dados da API de administração
- Formulários
- Transação enviando dados via HTTP POST
- Atualização de dados da transação com HTTP PUT
- Exclusão de transação com HTTP DELETE

#### o back-end desse projeto está no repositório :

https://github.com/gilberto-domingos/Prints-Control

<br/><br/>
<img src="assets/logo.png" width="200" alt="logo">

#### Tema gerador : Controle de Impressões

 </br>
No Senac é possível realizar impressão de documentos pessoais. Para isso você
deve realizar a compra do cartão de impressão, com o cartão de impressão em
mãos, você deve direcionar ao setor que realiza as impressões e encaminhar para
o e-mail adequado os documentos que deseja imprimir. A impressão só acontece
caso o cartão de impressão ainda tenha a quantidade disponível que a pessoa
deseja realmente imprimir. Senão o aluno deve realizar a compra de um cartão
complementar com mais impressões. Com a quantidade disponível para
impressões, então a pessoa poderá ter seus documentos impressos conforme
solicitado.
Então temos o seguinte problema: </br>
Como melhorar a experiência dos usuários que
desejam realizar a impressão de documentos? </br>
Referências : </br>

- Definição do modelo entidade x relacionamento; </br>
- Criação das tabelas do banco de dados; </br>
- Uso de programação orientada a objetos na construção do código em c#. </br>
- Desenvolvimento do sistema de cadastro para a solução demandada; </br>
  </br>
- UC1: Desenvolver
  Sistemas de
  Informação.
  </br>
- UC2: Implementar
  a Banco de Dados
  Uso de programação
  orientada a objetos na
  construção do código
  em c#.
  </br>
- Desenvolvimento dos cadastros do sistema;
  </br>
- Documento com modelo entidade x relacionamento;
  </br>
- Arquivo com os scripts de criação do banco;
  </br>

#### Requisitos do Projeto: Sistema de Controle de Impressões

Criar um sistema que substitui o controle manual de impressões
usado hoje no Senac. Em vez de usar fichas, o sistema será digital.
</br>
Veja abaixo o
que o sistema precisa fazer:

#### 1. Compra de Impressões

- Todo aluno começa com zero impressões. </br>
- O aluno pode comprar pacotes de impressões. Existem apenas duas opções
  de compra: </br>
- Pacote com 25 impressões </br>
- Pacote com 50 impressões </br>
- Não pode comprar quantidades diferentes, como 10, 30 ou 40. Só pode
  comprar 25 ou 50 de cada vez. </br>
- O aluno pode acumular impressões. Ou seja, mesmo que ainda tenha
  impressões sobrando, ele pode comprar mais. </br>
- Exemplo: se o aluno tem 12 impressões e compra mais 25, o novo saldo
  será 37 impressões. </br>
- As impressões compradas nunca vencem. Sempre ficam disponíveis até
  serem usadas. </br>
- Sempre que realizar uma compra deverá armazenar numa tabela de
  histórico.
  </br>

#### 2. Impressões Realizadas

- Quando o aluno imprime alguma coisa, o número de páginas impressas é
  descontado do saldo. </br>
- Exemplo: se ele tem 20 impressões e imprimir 5 páginas, ficará com 15. </br>
- O sistema só permite imprimir se o aluno tiver saldo suficiente. </br>
- Se tentar imprimir mais do que tem, a impressão não é permitida. </br>
- Sempre que realizar uma impressão deverá armazenar numa tabela de
  histórico.
  </br>

#### 3. Consulta de Saldo

- O sistema deve permitir consultar o saldo de impressões de todos os alunos. </br>
- Assim, qualquer pessoa pode ver quanto de saldo cada aluno ainda
  tem. </br>

#### Fluxo :

1. Cadastrar novo aluno
2. Comprar impressões
3. Realizar impressão
4. Consultar saldo de todos os alunos

#### Comprar Impressões

O aluno pode comprar somente pacotes de 25 ou 50 impressões.
Impressões nunca vencem e podem ser acumuladas.
Mesmo com saldo positivo, o aluno pode comprar mais pacotes.
</br>

#### Fluxo :

Digite o nome do aluno: </br>
Pacotes disponíveis: 25 ou 50 </br>
Quantas impressões deseja comprar?
=> [entrada deve ser validada: apenas 25 ou 50 são aceitos]
</br>

#### Realizar Impressão

Solicita o nome do aluno e a quantidade de páginas a imprimir. </br>
O sistema verifica se há saldo suficiente antes de permitir a impressão.
</br>
Se não houver saldo, a impressão é bloqueada com uma mensagem de aviso.

#### Fluxo :​

Digite o nome do aluno: </br>
Quantas páginas deseja imprimir? </br>
Resposta possível: </br>
"Impressão realizada com sucesso. </br>
Novo saldo: X impressões." </br>
"Saldo insuficiente. Impressão não realizada." </br>

#### Consultar Saldo de Todos os Alunos

Exibe a lista de todos os alunos cadastrados com seus respectivos saldos:

#### SALDO DE IMPRESSÕES

João Silva: 37 impressões </br>
Maria Oliveira: 12 impressões </br>
Lucas Ferreira: 0 impressões </br>
Consultar histórico </br>
Solicita o nome do aluno. </br>
O sistema deverá exibir em ordem de data/hora a movimentação realizada.

#### Fluxo :

- Digite o nome do aluno: </br>
  -> Resposta possível Caso não tenha movimentação: </br>
- "Aluno não encontrado ou nenhuma movimentação realizada" </br>
  -> Caso tenha movimentação:
- "Data: dd/MM/yyyy Operação: compra/impressão Quantidade: 01"
- "Data: dd/MM/yyyy Operação: compra/impressão Quantidade: 01"
- "Data: dd/MM/yyyy Operação: compra/impressão Quantidade: 01"

#### Tabelas esperadas

##### Alunos

- Código </br>
- Nome </br>
- Saldo de impressões </br>

##### Compras

- Código </br>
- Aluno </br>
- Data da compra </br>
- Quantidade comprada </br>

##### Impressões

- Código </br>
- Aluno </br>
- Data da impressão </br>
- Quantidade impressa </br>

##### Histórico

- Código </br>
- Aluno </br>
- Data histórico </br>
- Tipo de movimentação: compra ou impressão </br>
- Quantidade movimentada </br>
- Saldo antes da movimentação </br>
- Saldo após a movimentação </br>

<br/><br/>

# Prints-control-client

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.2.0.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
