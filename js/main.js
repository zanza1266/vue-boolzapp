const myApp = new Vue ({
  el: '#root',
  data: {
    loggedUser: {
      name: 'Gianluca',
      surname: 'Zanzarella',
      avatar:'img/avatar_8.jpg'
    },
    selectedContIndex: 0,
    contacts: [
      {
        name: 'Michele',
        searchString: 'michele',
        lastOnline:'Ultimo accesso oggi alle 09:34',
        avatar: 'img/avatar_1.jpg',
        messagesHistory: [
          {
            message: 'Hai portato a spasso il cane?',
            date: '10/01/2020 15:30:55',
            isSent: true
          },
          {
            message: 'Ricordati di dargli da mangiare',
            date: '10/01/2020 15:30:55',
            isSent: true
          },
          {
            message: 'Tutto fatto!',
            date: '10/01/2020 15:30:55',
            isSent: false
          }
        ],
        selectedBackground: false,
      },
      {
        name: 'Fabio',
        searchString: 'fabio',
        lastOnline:'Ultimo accesso oggi alle 22:44',
        avatar: 'img/avatar_2.jpg',
        messagesHistory: [
          {
            message: 'La Marianna va in campagna',
            date: '10/01/2020 15:30:55',
            isSent: false
          },
          {
            message: 'Sicuro di non aver sbagliato chat?',
            date: '10/01/2020 15:30:55',
            isSent: true
          },
          {
            message: 'Scusa',
            date: '10/01/2020 15:30:55',
            isSent: false
          }
        ],
        selectedBackground: false
      },
      {
        name: 'Samuele',
        searchString: 'samuele',
        lastOnline:'Ultimo accesso oggi alle 13:34',
        avatar: 'img/avatar_3.jpg',
        messagesHistory: [],
        selectedBackground: false
      },
      {
        name: 'Sam',
        searchString: 'sam',
        lastOnline:'',
        avatar: 'img/avatar_4.jpg',
        messagesHistory: [],
        selectedBackground: false
      },
      {
        name: 'Andrea',
        searchString: 'andrea',
        lastOnline:'',
        avatar: 'img/avatar_5.jpg',
        messagesHistory: [],
        selectedBackground: false
      },
      {
        name: 'Maria',
        searchString: 'maria',
        lastOnline:'',
        avatar: 'img/avatar_6.jpg',
        messagesHistory: [],
        selectedBackground: false
      },
      {
        name: 'Davide',
        searchString: 'davide',
        lastOnline:'',
        avatar: 'img/avatar_7.jpg',
        messagesHistory: [],
        selectedBackground: false
      },
      {
        name: 'Giulio',
        searchString: 'giulio',
        lastOnline:'',
        avatar: 'img/avatar_8.jpg',
        messagesHistory: [],
        selectedBackground: false
      }
    ],
    inputObj: {
      message:'',
      date: '',
      isSent: true
    },
    inputSearchBar: ''
  },

  computed: {

    filteredUserList: function () {
      // filtro gli utenti dalla barra di ricerca
      let filtered = this.contacts.filter((element) => {
        return element.searchString.includes(this.inputSearchBar);
      });
      return filtered;
    }
  },

  methods: {

    toggleColor: function (el) {
      this.contacts.map((e)=> {
        el.selectedBackground = true;
        if (el.selectedBackground === e.selectedBackground) {
          e.selectedBackground = false;
        }
      })
    },

    switchUserInList: function (el, ind) {
      this.selectedContIndex = ind;
      // this.displayedMessages = el.messagesHistory;
    },

    sendMsg: function () {

      // salvo in una variabile la stringa della data attuale da visualizzare (da rivedere..)

      let now = new Date();
      let sentDateString = now.getDate() + '/' + (now.getMonth()+1) + '/' + now.getFullYear() + ' ' + now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();

      let messToPush = {
        ...this.inputObj,
        date: sentDateString
      };

      this.contacts[this.selectedContIndex].messagesHistory.push(messToPush);

      this.inputObj.message = '';

      // codice di risposta automatica dopo due secondi
      setTimeout(function () {

        let now = new Date();
        let receivedDateString = now.getDate() + '/' + (now.getMonth()+1) + '/' + now.getFullYear() + ' ' + now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();

        let autoAnswer = {
          message:'Ok!',
          date: receivedDateString,
          isSent: false
        }

        myApp.contacts[myApp.selectedContIndex].messagesHistory.push(autoAnswer);

      }, 2000);

    }

  }
})
