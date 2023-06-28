# Defina a imagem base
FROM node:16-alpine

# Instale as dependências do Prisma
RUN apk --no-cache add openssl libgcc zlib

RUN npm install -g npm@9.7.2

# Muda a propriedade de todos os arquivos e diretórios para o usuário do Docker
RUN chown -R node:node /tmp /root

# Defina o diretório de trabalho no contêiner
WORKDIR /app

USER node

# Copie o package.json e o package-lock.json
COPY package*.json ./

USER root
RUN chown -R node:node /app
USER node
# Instale as dependências
RUN npm install

# Copie o restante dos arquivos do projeto
COPY . .

# Corrija automaticamente problemas de formatação com o Prettier
USER root
RUN chown -R node:node ./src
RUN npx prettier --write ./src
USER node

USER root
# Compila a aplicação
RUN npm run build
RUN chown -R node:node ./.next
USER node

USER root
RUN chmod +x start.sh

COPY start.sh .

# Expõe a porta que a aplicação irá executar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD /bin/sh ./start.sh
