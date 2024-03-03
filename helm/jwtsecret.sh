#!/bin/bash

#nom secret kubernetes 
SECRET_NAME="jwt-secret"

#generation cle rsa 
openssl genpkey -algorithm RSA -out private_key.pem
openssl rsa -pubout -in private_key.pem -out public_key.pem

#create du secret kubernetes avec les clefs générés

kubectl create secret generic $SECRET_NAME \
  --from-file=private_key.pem \
  --from-file=public_key.pem

#supression des clefs générés

rm -f private_key.pem public_key.pem 

echo "fin creation secret kubernetes"