
FROM node:14

WORKDIR /app
EXPOSE 3000
CMD npm start

COPY . /app
RUN yarn
