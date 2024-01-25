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
