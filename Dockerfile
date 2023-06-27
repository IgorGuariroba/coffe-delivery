# Defina a imagem base
FROM node:16-alpine

# Instale as dependências do Prisma
RUN apk --no-cache add openssl libgcc zlib

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Defina o diretório de trabalho
RUN chown -R node:node /app
USER node

# Copie o package.json e o package-lock.json
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos do projeto
COPY . .

# Corrija automaticamente problemas de formatação com o Prettier
RUN npx prettier --write .

# Compila a aplicação
RUN npm run build

RUN chmod +x start.sh

COPY start.sh .
# Muda para o usuário node

# Expõe a porta que a aplicação irá executar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["./start.sh"]
