FROM node:16.14.2 as build-step
WORKDIR /usr/local/app
COPY ./ /usr/local/app/
RUN npm install
RUN npm install -g @angular/cli
RUN ng build --configuration production

FROM nginx:latest
#COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build-step /usr/local/app/dist/frontend /usr/share/nginx/html
EXPOSE 80

CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/env.sample.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]
