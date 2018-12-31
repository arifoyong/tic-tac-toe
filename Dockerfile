#STEP 1 ================================================
#base image
FROM node:8 as node_image

#set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# install and cache app dependencies
COPY package.json /usr/src/app/package.json
RUN npm install

#COPY . ./
COPY . /usr/src/app
RUN npm install react-scripts@1.1.1 -g

# start app
#CMD ["npm", "start"]
EXPOSE 3000
#==========================================================
