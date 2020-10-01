# Desenvolvimento Web - Python with Flask

Sistema back-end e front-end com comunicação por JSON.

[English version](README.md)

## Introdução

Esse projeto utiliza as bibliotecas [Flask](https://flask.palletsprojects.com/en/1.1.x/)
 e [SQLAlchemy](https://www.sqlalchemy.org/) para produzir um servidor web simples.
Criado para avaliações da disciplina de Programação II.

## Instalação

Certifique-se que você esteja na pasta `fNb-end` e execute o seguinte código em seu terminal:

```bash
python -m pip install -r requirements.txt
```

## Usabilidade

Após a instalação de todas as bibliotecas, execute o comando de iniciação do servidor
back-end:

```bash
python src/backend/run.py.py
```
Em seu terminal, aparecerá algo parecido com isso:

![Execução do servidor back-end no terminal](./.github/terminal0.png) 

Então, abra o arquivo `index_helis.html`, da pasta `fNb-end/frontend`, manualmente,
em seu navegador.

Seu servidor receberá uma requisição `GET` de acesso aos dados, e seu terminal atualizará
semelhante a isso:

![Terminal com uma requisição GET](./.github/terminal01.png)

E seu navegador deverá renderizar a seguinte página de boas-vindas:

![Navegador com uma página de boas-vindas](./.github/browser1.png)

Você pode alterar nas diferentes sessões pela barra de menu (Início / Listar / Incluir)

Na página de listagem você poderá ver os dados que já foram inseridos no banco de dados:

![Tabela renderizando os dados do arquivo de banco de dados](./.github/browser2.png)

E você pode inserir alguns dados conforme segue a imagem:

![Navegador renderizando um formulário com dados necessários para serem inseridos no banco de dados](./.github/browser3.png)

Então a tabela se atualizará com os dados inseridos

![Tabela renderizando os dados incluídos no banco de dados](./.github/browser4.png)

## Contribuição

Se houver alguma dúvida, ou incremento para este, crie um pull request para a
atualização.

Obrigado!
