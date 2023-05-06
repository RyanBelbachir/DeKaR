import express from 'express';
import pkg from 'http-proxy';
import dotenv from 'dotenv';
dotenv.config();
import { url } from 'inspector';
const { createProxyServer } = pkg;

const app = express();
const proxy = createProxyServer({});


const location = process.env.Location;
const authentification=process.env.Authentification
const Gestion_comptes=process.env.Gestion_comptes

var arrayServices = []

function addService(serviceName,serviceUrl,serviceUrlAlternate)
{
    arrayServices.push(
        {
            "service":serviceName,
            "state":true,
            "alternate":serviceUrlAlternate,
            "url":serviceUrl
        }
    )
}


function assignUrl(service)
{
    for(let serv in arrayServices)
    {
        if(service == arrayServices[serv].service)
        {
            if(arrayServices[serv].state)
            {
                return arrayServices[serv].url
            }
            else
            {
                return arrayServices[serv].alternate
            }
        }
    }
}

app.use((req, res) => {
    const arrayServices = req.url.toString().trim().split('/');
    var serviceTargetted = arrayServices[1]
  proxy.web(req, res, { target: assignUrl(serviceTargetted) });
});

app.listen(8080, () => {
    console.log('Proxy server listening on port 8080');
  });


addService("location",location,"")
addService("authentification",authentification,"")
addService("accounts",Gestion_comptes,"")

  
