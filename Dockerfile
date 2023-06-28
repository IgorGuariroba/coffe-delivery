# Defina a imagem base
FROM node:16-alpine

# Instale as dependências do Prisma
RUN apk --no-cache add openssl libgcc zlib

RUN npm install -g npm@9.7.2

# Crie o usuário 'developer' e configure o diretório inicial
RUN adduser -D developer

# Mude para o usuário 'developer'
USER developer

# Defina o diretório de trabalho no contêiner
WORKDIR /home/developer/app

# Copie o package.json e o package-lock.json
COPY --chown=developer package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos do projeto
COPY --chown=developer . .

# Corrija automaticamente problemas de formatação com o Prettier
RUN npx prettier --write ./src

# Compila a aplicação
RUN npm run build

# Garanta que o script de inicialização tenha permissões de execução
COPY --chown=developer start.sh .
RUN chmod +x start.sh

# Expõe a porta que a aplicação irá executar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD /bin/sh ./start.sh
