# Defina a imagem base
FROM node:16-alpine

WORKDIR /app

COPY . .

RUN npm install -g npm@9.7.2

RUN chmod +x start.sh

# Expõe a porta que a aplicação irá executar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD /bin/sh ./start.sh
