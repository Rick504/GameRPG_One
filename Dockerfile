FROM node

ADD start.sh /start.sh
RUN chmod 755 /start.sh
CMD ["/start.sh"]

#FROM node:alpine

#WORKDIR /usr/app

#COPY package*.json ./

#RUN npm install

#COPY . .

#EXPOSE 3000

#CMD ["npm", "install"]

