FROM node:8.6.0-alpine

MAINTAINER Chengxiu Luo <cxluo@thoughtworks.com>

#copy source
ADD . /app/
WORKDIR /app/

#expose prot
ENV PORT 3000
EXPOSE 3000

#start production server
CMD ["npm", "start"]
