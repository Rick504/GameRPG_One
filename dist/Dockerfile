FROM node

COPY . ./my_app_web

COPY package.json .

ADD start.sh /start.sh
RUN chmod 755 /start.sh
CMD ["/start.sh"]