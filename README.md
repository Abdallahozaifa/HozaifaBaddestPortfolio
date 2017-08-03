## Add to bashrc file
export PATH=$PATH:/home/ubuntu/workspace/google-cloud-sdk/bin

## Starting the server
dev_appserver.py app.yaml --host $IP --admin_port=9000

## Deploying Application 
gcloud app deploy app.yaml --project markdistrictwebsite --verbosity=info

## Watching Server Logs
gcloud app logs tail -s default

##To Do
1. Change menu Subtitle on hover to change to green 
2. Change github image on hover to fill with green
