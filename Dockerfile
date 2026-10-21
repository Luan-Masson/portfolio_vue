# Estágio 1: Build da aplicação React
FROM node:20-alpine AS builder

WORKDIR /app

# Copia dependências primeiro para aproveitar o cache de camadas do Docker
COPY package*.json ./
RUN npm ci

# Copia o código fonte e compila
COPY . .
RUN npm run build

# Estágio 2: Servidor Web Nginx
FROM nginx:alpine

# Remove a página padrão do Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia a build estática gerada pelo Vite
COPY --from=builder /app/dist /usr/share/nginx/html

# Copia a configuração customizada do Nginx para suportar SPA
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

