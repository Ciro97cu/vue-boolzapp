/* Milestone 1
Replica della grafica con la possibilità di avere messaggi scritti dall’utente 
(verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
Visualizzazione dinamica della lista contatti: tramite la direttiva v-for,
visualizzare nome e immagine di ogni contatto

Milestone 2
● Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i
messaggi relativi al contatto attivo all’interno del pannello della conversazione.
● Click sul contatto mostra la conversazione del contatto cliccato.

Milestone 3
● Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando
“enter” il testo viene aggiunto al thread sopra, come messaggio verde.
● Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà
un “ok” come risposta, che apparirà dopo 1 secondo.

Milestone 4
● Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i
contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo
“mar” rimangono solo Marco e Martina).

Milestone 5 - opzionale
● Cancella messaggio: cliccando sul messaggio appare un menu a tendina che
permette di cancellare il messaggio selezionato.
● Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti. */

const contacts = [
    {
        name: 'Michele',
        avatar: '_1',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent',
                displayInfo: false,
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Ricordati di stendere i panni',
                status: 'sent',
                displayInfo: false,

            },
            {
                date: '10/01/2020 16:15:22',
                message: 'Tutto fatto!',
                status: 'received',
                displayInfo: false,
            }
        ],
    },
    {
        name: 'Fabio',
        avatar: '_2',
        visible: true,
        messages: [
            {
                date: '20/03/2020 16:30:00',
                message: 'Ciao come stai?',
                status: 'sent',
                displayInfo: false,
            },
            {
                date: '20/03/2020 16:30:55',
                message: 'Bene grazie! Stasera ci vediamo?',
                status: 'received',
                displayInfo: false,
            },
            {
                date: '20/03/2020 16:35:00',
                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent',
                displayInfo: false,
            }
        ],
    },
    {
        name: 'Samuele',
        avatar: '_3',
        visible: true,
        messages: [
            {
                date: '28/03/2020 10:10:40',
                message: 'La Marianna va in campagna',
                status: 'received',
                displayInfo: false,
            },
            {
                date: '28/03/2020 10:20:10',
                message: 'Sicuro di non aver sbagliato chat?',
                status: 'sent',
                displayInfo: false,
            },
            {
                date: '28/03/2020 16:15:22',
                message: 'Ah scusa!',
                status: 'received',
                displayInfo: false,
            }
        ],
    },
    {
        name: 'Alessandro B.',
        avatar: '_4',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent',
                displayInfo: false,
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Si, ma preferirei andare al cinema',
                status: 'received',
                displayInfo: false,
            }
        ],
    },
    {
        name: 'Alessandro L.',
        avatar: '_5',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ricordati di chiamare la nonna',
                status: 'sent',
                displayInfo: false,
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Va bene, stasera la sento',
                status: 'received',
                displayInfo: false,
            }
        ],
    },
    {
        name: 'Claudia',
        avatar: '_6',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao Claudia, hai novità?',
                status: 'sent',
                displayInfo: false,
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Non ancora',
                status: 'received',
                displayInfo: false,
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'Nessuna nuova, buona nuova',
                status: 'sent',
                displayInfo: false,
            }
        ],
    },
    {
        name: 'Federico',
        avatar: '_7',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Fai gli auguri a Martina che è il suo compleanno!',
                status: 'sent',
                displayInfo: false,
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Grazie per avermelo ricordato, le scrivo subito!',
                status: 'received',
                displayInfo: false,
            }
        ],
    },
    {
        name: 'Davide',
        avatar: '_8',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao, andiamo a mangiare la pizza stasera?',
                status: 'received',
                displayInfo: false,
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                status: 'sent',
                displayInfo: false,
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'OK!!',
                status: 'received',
                displayInfo: false,
            }
        ],
    }
];

const app = new Vue({

    el: "#app",
    data: {
        // richiamo il mio array
        contacts,
        // indice oggetti array contacts
        activePerson: 0,
        // value input messaggio
        valueMessage: "",
        // value input ricerca
        valueSearch: "",
    },
    methods: {
        // funzione per mostrare a schermo la chat attiva tramite l'indice
        changeChat: function (i) {
            this.activePerson = i;
        },
        // funzione per mostrare l'ultimo messaggio della chat
        displayLastMessage: function (personMessage) {
            return personMessage[personMessage.length - 1].message;
        },
        // funzione per mostrare l'ora dell'ultimo accesso
        displayHourLastMessage: function (personHour) {
            return personHour[personHour.length - 1].date.slice(11, -3);
        },
        // funzione per mostrare l'ora di arrivo dell'ultimo messaggio della chat
        displayHourMessage: function (personHour, i) {
            return personHour[i].date.slice(11, -3);
        },
        // funzione per generare l'ora attuale con formato hh:mm:ss
        hourGenerator: function () {
            let today = new Date();
            let hh = String(today.getHours()).padStart(2, '0');
            let mm = String(today.getMinutes()).padStart(2, '0');
            let ss = String(today.getSeconds()).padStart(2, '0');
            today = hh + ':' + mm + ':' + ss;
            return today;
        },
        // funzione per creare una risposta automatica all'invio di un messaggio
        answerFunction: function () {
            this.contacts[this.activePerson].messages.push(
                {
                    date: `10/01/2020 ${this.hourGenerator()}`,
                    message: "Ok Let's Goooooo!!",
                    status: 'received',
                    displayInfo: false,
                }
            );
        },
        /* funzione per aggiungere un messaggio tramite l'input
        e allo stesso tempo tramite un setTimeout richiamare e far partire
        la precedente funzione per la risposta */
        addMessage: function (indexChat) {
            if (this.valueMessage.length > 0) {
                indexChat.push(
                    {
                        date: `10/01/2020 ${this.hourGenerator()}`,
                        message: this.valueMessage,
                        status: 'sent',
                        displayInfo: false,
                    }
                );
                this.valueMessage = "";
                setTimeout(this.answerFunction, 1000);
            }
        },
        // funzione per ricercare tramite l'input una persona dai nostri contatti
        searchContact: function () {
            this.contacts.forEach(element => {
                let names = element.name.toLowerCase();
                element.visible = names.includes(this.valueSearch.toLowerCase());
            });
        },
        // funzione per mostrare e nascondere il menu a tendina al click sulla chevron
        displayDelete: function (i) {
            return !i.displayInfo ? i.displayInfo = true : i.displayInfo = false;
        },
        // funzione che mi elimina il messaggio selezionato tramite l'index e lo splice 
        deleteMessage: function (i) {
            contacts[this.activePerson].messages.splice(i, 1);
        }
    },
});