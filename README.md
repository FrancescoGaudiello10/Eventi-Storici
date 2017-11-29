# **PROGETTO RETI DI CALCOLATORI** 🐳
Il progetto consiste nella realizzazione di un servizio REST accedibile via Web

## **Persone nel gruppo**
- Aldo
- Giuseppe
- Francesca
- Francesco
- Marco

## **Requisiti**
- [x] Il servizio REST implementato deve interfacciare almeno due servizi REST *esterni*, cioè non su localhost
- [x] Almeno uno dei servizi REST esterni deve essere *commerciale* (es: twitter, google, facebook, pubnub, parse, firbase etc)
- [x] Almeno uno dei servizi REST esterni deve essere acceduto con oauth
- [ ] Si devono usare Websocket e AMQP (RabbitMQ) (o simili es MQTT)
- [x] Il progetto deve essere su GITHUB
- [ ] Le API del servizio REST implementato devono essere documentate su GITHUB

## **Dipendenze**

Per installare le dipendenze basta eseguire `npm install`, verranno lette dal file *package.json* e installate.


## **Descrizione**

Il progetto utilizza le API fornite da http://history.muffinlabs.com/ per prendere tutti gli eventi storici avvenuti in un giorno particolare.

Una volta ottenuti gli eventi storici relativi alla data, l'applicazione si connette tramite outh a Google Drive e crea un file contenente una lista di eventi con i link alla relativa pagina wikipedia (e se c'è tempo anche i link di video presi da youtube).

Oltre all'operazione di scrittura dul Drive, gli eventi vengono salvati su CouchDB attraverso Working queue fornita da RabbitMQ.


## **Compiti**

### Marco:
- [x] Autenticazione a Google Drive tramite Oauth
- [x] Caricamento di un file su Google Drive

### Francesca
- [ ] Scrittura degli eventi in un file

### Francesco
- [ ] Reperimento dei dati da http://history.muffinlabs.com/date/2/14 e salvataggio in variabili + link youtube

### Aldo
- [x] Reperimento dei link ai video storici tramite youtube
- [x] Pagina iniziale in HTMl

### Giuseppe
- [x] Scrittura dei dati su CouchDB

### Gruppo
- [ ] WebSocket
- [ ] RabbitMQ


## **Cose utili**

**Account Google**
```
email: dockervrun@gmail.com
pass:  behdaicapolavoro
```
- [CouchDB Server](https://couchdb-35226b.smileupps.com/_utils/index.html)

- [Guida Git](https://rogerdudler.github.io/git-guide/index.it.html)

- [Google API](https://console.developers.google.com/)

- [Dropbox API](https://www.dropbox.com/developers/documentation/http/documentation)

- [Dropbox API Explorer](https://dropbox.github.io/dropbox-api-v2-explorer/)

- [Oauth](https://www.digitalocean.com/community/tutorials/an-introduction-to-oauth-2)

- [API Varie](https://www.programmableweb.com/)

- [RabbitMQ Tutorial](https://www.rabbitmq.com/tutorials/tutorial-one-javascript.html)

- [WebSockets](https://github.com/andreavitaletti/RC/wiki/Web-Sockets)



<p align="center">
  <img width="400" height="100%" src="/Materiale_di_Riferimento/docker_image.png">
</p>
