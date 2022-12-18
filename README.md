Game RPG-MMO iniciado em 2021, com base em um game RPG, um jogo de turnos baseado em histórias medievais, fantasias, guerras entre reinos e ect.

o Projeto está rodando containers Docker-compose, para iniciar o projeto:

    command: (sudo docker-compose up) ou (sudo docker compose up)

Pasta README contem algumas regras do game e etapas a serem executadas no projeto.

Ao dar push após o commit e apresentar o erro:

```
remote: Support for password authentication was removed on August 13, 2021.
remote: Please see https://docs.github.com/en/get-started/getting-started-with-git/about-remote-repositories#cloning-with-https-urls for information on currently recommended modes of authentication.
fatal: Authentication failed for 'https://github.com/Rick504/GameRPG_One.git/'

```

basta executar o comando com o token caso o projeto seja clonado em https:

git remote set-url origin https://[-->>TOKEN<<--]@github.com/Rick504/GameRPG_One.git
