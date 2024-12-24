# Etapa de construcción
FROM node:20-alpine as build

# Directorio de trabajo
WORKDIR /app

# Copia los archivos de configuración
COPY package*.json ./
COPY vite.config.ts ./
COPY tsconfig*.json ./
COPY index.html ./
COPY tailwind.config.js ./
COPY postcss.config.js ./
COPY .eslintrc.cjs ./

# Instala dependencias
RUN npm ci

# Copia el código fuente
COPY src/ ./src/
COPY public/ ./public/

# Construye la aplicación
RUN npm run build

# Etapa de producción
FROM nginx:alpine

# Copia la configuración de nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia los archivos construidos
COPY --from=build /app/dist /usr/share/nginx/html/giftcard

# Expone el puerto 80
EXPOSE 80

# Inicia nginx
CMD ["nginx", "-g", "daemon off;"] 