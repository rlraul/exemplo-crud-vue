# Exemplo de projeto básico utilizando Vue.JS

>Elaboração de um CRUD básico utilizando Vue.js. 
>Feito para ser apresentado na matéria PW26s do curso de Análise e Desenvolvimento de Sistemas da UTFPR - Pato Branco.
>A baixo deixarei um passo a passo referente a configuração inicial de um projeto Vue.
>Será detalhado a criação do projeto utilizando Vue CLI. Porém, também pode ser utilizado Vite js para a criação.

### Pré Requisitos

* Necessário ter Node instalado: <https://nodejs.org/en>
* Ter as dependências da CLI instaladas. Para instalar:
    ```
    npm install -g @vue/cli
    ```

### Criação do projeto com Vue CLI
    
* Em um diretório desejado, Iniciar a criação do projeto com o comando:
    ```
    vue create <meu-projeto>
    ```

* Ao rodar o comando a cima, serão apresentados alguns menus para que sejam definidas as configurações iniciais do projeto:
    * Primeiro é definido como será criado o projeto: 
        1. Default Vue 3, com babel e eslint; 
        2. Default Vue 2, com babel e eslint; 
        3. Instalação personalizada;
    <p>Para este projeto, será feita a criação personalizada:</p>

    ![Inicializando](https://i.imgur.com/uN101NC.png)

* Escolhendo a criação personalizada serão mostrados outros menus para que seja configurado o projeto.
    1. Primeiramente são definidas as features que serão utilizadas no projeto. Utilizaremos:
        * Babel
            > Transpilador JavaScript
        * TypeScript
            > Linguagem que será utilizada
        * Linter / Formater
            > Utilizado para sinalizar erros de programação, estilísticos e warnings

        ![Features](https://i.imgur.com/C27SukT.png) 

    2. No próximo passo, é escolhida a versão do Vue que será utilizada. Neste caso, utilizaremos a versão 3:
        ![Versao](https://i.imgur.com/Ky7hdNj.png)

    3. No próximo passo, definir que não será utilizado Class-Style digitando "N"
        ![Class-Style](https://i.imgur.com/te3C10v.png)

    4. No próximo passo, definir que será utilizado babel juntamente ao TypeScript, digitando "Y":
        ![Babel-TypeScript](https://i.imgur.com/0LAAaNO.png)

    5. No proximo passo, definir como será utilizado o Linter, neste projeto será utilizado somente com prevenção de erros
        ![Linter](https://i.imgur.com/WOWA6c7.png)

    6. No proximo passo, é definido em qual momento o Linter irá atuar. Neste projeto deixaremos Lint on Save:
        ![Lint-On-Save](https://i.imgur.com/3kdxQxF.png)

    7. No proximo passo, é definido como as configurações do projeto ficarão salvas. Em arquivos dedicados ou em Package.json. Para este projeto deixaremos em arquivo dedicado:
        ![Dedicated-Files](https://i.imgur.com/dHFVqj5.png)
    
    9. No ultimo passo, é perguntado se pretende salvar a configuração feita nos passos anteriores para que seja utilizada em projetos futuros. Definir se Sim/Não utilizando "Y" ou "N"

* Após o ultimo passo, será iniciada a criação do projeto. Esta etapa pode demorar alguns minutos.

---

* Para iniciar o projeto é utilizado o comando:
    > npm run serve
    * O mesmo será iniciado na porta 8080.