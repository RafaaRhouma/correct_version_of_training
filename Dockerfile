FROM node:16-alpine

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install -g @angular/cli@12.2.17

RUN npm install

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0"]


