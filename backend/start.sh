HOST_IP=$(ipconfig getifaddr en0)

# 1. Start mongo
container run -d \
  --name symc-mongo \
  -p 7655:27017 \
  --env-file .env \
  -v shareyourmusic:/data/db \
  mongo:8

# 2. Start mongo-express, pointing it at mongo
container run -d \
  --name symc-me \
  -p 3101:3435 \
  --env-file .env \
  -e ME_CONFIG_MONGODB_SERVER=$HOST_IP \
  mongo-express 
