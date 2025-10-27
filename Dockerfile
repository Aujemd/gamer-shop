FROM node:20-alpine3.18 as builder
ARG NEXT_PUBLIC_API_URL


WORKDIR /src/app
COPY package*.json ./
RUN npm install
COPY . .

ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
RUN npm run build

FROM node:20-alpine3.18 as runner

WORKDIR /src/app
COPY package*.json ./
RUN npm install --production --ignore-scripts
COPY --from=builder /src/app/.next ./.next
COPY --from=builder /src/app/public ./public
EXPOSE 3000
CMD ["npm", "start"]