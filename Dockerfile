FROM node:22-alpine AS base

# 设置镜像作者
MAINTAINER baisheng <baisheng@gmail.com>

# 设置时区
RUN sh -c "echo 'Asia/Shanghai' > /etc/timezone"
# 使用 aliyun 仓库加速
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories
# 以下软件根据实际情况选择是否安装
#RUN apk add --no-cache make gcc g++ python git
# Nodejs 服务的淘宝源配置
#RUN npm config set disturl https://npm.taobao.org/dist && \
#    npm config set sharp_binary_host https://npm.taobao.org/mirrors/sharp && \
#    npm config set sharp_libvips_binary_host https://npm.taobao.org/mirrors/sharp-libvips && \
#    npm config set electron_mirror https://npm.taobao.org/mirrors/electron/ && \
#    npm config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/ && \
#    npm config set phantomjs_cdnurl https://npm.taobao.org/mirrors/phantomjs/
# 安装 PNPM
RUN npm install -g pnpm
RUN npm install -g nrm

FROM base as build
RUN nrm use taobao
WORKDIR /app
COPY ./package.json .
COPY ./pnpm-lock.yaml .
RUN pnpm install
COPY . /app
RUN pnpm run build
RUN pnpm prune


FROM base as release

WORKDIR /release
COPY ./package.json .
COPY ./pnpm-lock.yaml .
RUN pnpm install --prod

#WORKDIR /app
#
#COPY . .
COPY --from=build /app/.output .output
#ADD .output /app/.output

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
EXPOSE 3000
ENTRYPOINT ["node", ".output/server/index.mjs"]
