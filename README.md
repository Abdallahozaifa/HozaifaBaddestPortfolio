## Add to bashrc file
export PATH=$PATH:/home/ubuntu/workspace/google-cloud-sdk/bin

## Starting the server
dev_appserver.py app.yaml --host $IP --admin_port=9000

## Deploying Application 
gcloud app deploy app.yaml --project hozaifa-new-portfolio --verbosity=info

## Watching Server Logs
gcloud app logs tail -s default

##To Do

