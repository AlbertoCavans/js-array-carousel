# Carosello Mono Array

## Obiettivo

Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

## Procedimento

- Collegare su JS gli elementi generali di HTML su cui dovremo lavorare
- Costruire l'array che useremo nell'esercizio
- Costruire un ciclo for che scorra gli elementi dell'array
- All'interno del ciclo for costruiamo un'istruzione condizionale if-else che definisca le seguenti condizioni
  - SE un'immagine è sotto analisi si troverà assegnata la classe active
  - ALTRIMENTI non avrà la classe active assegnata
- Usare l'opzione addEventListner per definire che la parte di JS che costruiremo per le arrows funzionerà solo in caso di click
- Costruire le const necessarie e collegare su JS gli elementi di HTML legati alle arrows su cui dovremo lavorare
- Rimuoviamo da tutte le slide la classe active
- Usiamo un'istruzione condizionale if-else per creare un loop che permetta di scorrere in basso o in alto fino a ricominciare dalla slide rispettivamente opposta
- Assegnamo la classe active solo alla slide indidicata dalla variabile indice delle slide

## Obiettivo pt.2

Aggiungere funzionalità sul carosello in modo che ogni 3 secondi lo slider scorra all'immagine successiva. Se non è stato già fatto, abilitare slider infinito (quando arrivo alla fine, ricomincio da capo, sia con l'interval che con i pulsanti). Aggiungere il ciclo infinito del carosello (se non è stato fatto). Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all'immagine precedente, dovrà comparire l'ultima immagine dell'array e viceversa.

## Procedimento pt.2

- Preparare un setInterval con una funzione generica vuota e un intervallo di 3000millisecondi
- Preparare una funzione vuota che riempire con il codice per gestire il clickDown
- Copiamo e cancelliamo il codice della funzione dentro l'addEventListener del collegamento alla freccia verso il basso, poi lo incolliamo dentro la funzione vuota che abbiamo preparato per gestire il clickDown,
- Dentro l'addEventListener del collegamento alla freccia verso il basso invochiamo la funzione che abbiamo riempito con il codice per gestire il clickDown
- Dentro alla funzione generica vuota, del setInterval, invochiamo la funzione che abbiamo riempito con il codice per gestire il clickDown
