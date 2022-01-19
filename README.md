
This is a fully dockerized boilerplate MERN app ready to deploy.

## Several things to be configured before use:

## 1) ./server/greenlock.d/config.json

Requires a domain and any applicable subdomains. Set sites.subject to a domain name (example: "example.com"), and sites.altnames to an array including the subject first (imperative), followed by any subdomains (example: ["example.com", "www.example.com"]).

## 2) ./server/config/dev.env

Simply enter a database name for the mongodb uri string.

## Usage:
Use docker-compose to run the app locally for development. When ready to build for production, just build a single image with the dockerfile at the root level.
