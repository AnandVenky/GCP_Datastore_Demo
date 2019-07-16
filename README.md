# Summary
This API gives a list of customers in the Cloud Datastore DB. The usage is getCustomers, getCustomers?id=#### and getCustomers?age=####

This API is simple and built with NodeJS with routing to DB contaning a sample table

## Infrastructure
GCP (App Engine + Google Datastore + NodeJS + HTML)

## Coding Language: 
Javascript with NodeJS + express

## Flow of data:
noSQL DB(Form kind) already gets populated by a sample database coded in connector. The API lists the DB content

## Usage:
To test this code on GCP, the file entry-ticket.env needs to be modified with the required data. the connector.JS connects the datastore then. 

## Testing:
This app was tested in localhost on windows PC with Node server. The codes were finished to integrate with googleapis
