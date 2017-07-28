## Starting the server
/home/ubuntu/workspace/google-cloud-sdk/bin/dev_appserver.py app.yaml --host $IP --admin_port=9000

## Deploying Application 
/home/ubuntu/workspace/google-cloud-sdk/bin/gcloud app deploy app.yaml --project markdistrictwebsite --verbosity=info

## Watching Server Logs
/home/ubuntu/workspace/google-cloud-sdk/gcloud app logs tail -s default