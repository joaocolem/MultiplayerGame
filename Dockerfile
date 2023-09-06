FROM node:current-alpine3.18
WORKDIR /app
RUN npm init -y && apk update && apk add git openssh && apk add vim
ENTRYPOINT ["tail", "-f", "/dev/null"]
