#STEP 1 ================================================
#base image
FROM node:9.6.1 as builder

#set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# install and cache app dependencies
COPY package.json /usr/src/app/package.json
RUN npm install

#COPY . ./
COPY . /usr/src/app
#RUN npm install react-scripts@1.1.1 -g

# start app
CMD ["npm", "start"]
#==========================================================
