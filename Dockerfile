FROM node:22-alpine

# 设置镜像作者
MAINTAINER baisheng <baisheng@gmail.com>

# 设置时区
RUN sh -c "echo 'Asia/Shanghai' > /etc/timezone"
# 使用 aliyun 仓库加速
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories

RUN npm install -g nrm
RUN nrm use taobao
#RUN nrm use tencent
RUN npm install -g pnpm


COPY .output .output

WORKDIR .output/server

RUN pnpm add sharp@0.33.4

WORKDIR /

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
EXPOSE 3000
ENTRYPOINT ["node", ".output/server/index.mjs"]
