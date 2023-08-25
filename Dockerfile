FROM node:16.3.0-alpine
WORKDIR /app
RUN npm init -y && apk update && apk add git openssh && apk add vim
ENTRYPOINT ["tail", "-f", "/dev/null"]
