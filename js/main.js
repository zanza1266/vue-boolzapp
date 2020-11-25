
const emoji = [
"😀", "😄", "😁", "🤣", "😊", "😇", "🙃", "😉", "😍", "😛", "😡", "😨", "😰", "😥", "😓", "🤗", "🤔", "🤭", "👍", "💪", "👋", "🤚", "✋", "🖖", "👌", "🙏", "☝️", "👻", "👽", "👾", "🤖", "🎃", "👶", "🧒", "👦", "👧", "🧑", "👱", "👨", "🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐨", "🐯", "🦁"];

const myApp = new Vue ({
  el: '#root',
  data: {
    loggedUser: {
      name: 'Gianluca',
      surname: 'Zanzarella',
      avatar:'img/avatar_8.jpg'
    },
    contacts: [
      {
        name: 'Michele',
        lastOnline:'Ultimo accesso oggi alle 09:34',
        avatar: 'img/avatar_1.jpg',
        messagesHistory: [
          {
            message: 'Hai portato a spasso il cane?',
            date: '15:30',
            isSent: true
          },
          {
            message: 'Ricordati di dargli da mangiare',
            date: '15:30',
            isSent: true
          },
          {
            message: 'Tutto fatto!',
            date: '15:30',
            isSent: false
          }
        ],
        selectedBkgr: false,
      },
      {
        name: 'Fabio',
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
        selectedBkgr: false
      },
      {
        name: 'Samuele',
        lastOnline:'Ultimo accesso oggi alle 11:34',
        avatar: 'img/avatar_3.jpg',
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
        selectedBkgr: false
      },
      {
        name: 'Sam',
        lastOnline:'Ultimo accesso oggi alle 14:34',
        avatar: 'img/avatar_4.jpg',
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
        selectedBkgr: false
      },
      {
        name: 'Andrea',
        lastOnline:'Ultimo accesso oggi alle 13:55',
        avatar: 'img/avatar_5.jpg',
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
        selectedBkgr: false
      },
      {
        name: 'Maria',
        lastOnline:'Ultimo accesso oggi alle 22:34',
        avatar: 'img/avatar_6.jpg',
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
        selectedBkgr: false
      },
      {
        name: 'Davide',
        lastOnline:'Ultimo accesso oggi alle 17:34',
        avatar: 'img/avatar_7.jpg',
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
        selectedBkgr: false
      },
      {
        name: 'Giulio',
        lastOnline:'Ultimo accesso oggi alle 15:34',
        avatar: 'img/avatar_8.jpg',
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
        selectedBkgr: false
      }
    ],
    inputMsg: '',
    inputSearchBar: '',
    emoji,
    emojiSwitch: false
  },
  created () {
    this.selectedContIndex = 0;
  },

  computed: {

    filteredUserList: function () {
      // filtro gli utenti dalla barra di ricerca
      let filtered = this.contacts.filter((element) => {
        return element.name.toLocaleLowerCase().includes(this.inputSearchBar);
      });
      return filtered;
    }
  },

  methods: {
    getHourString() {
      let date = new Date();
      return  date.toLocaleTimeString([],{hour: '2-digit', minute: '2-digit'})
    },
    emojiToggle() {
      this.emojiSwitch = !this.emojiSwitch;
    },
    insertEmoji(el) {
      this.inputMsg = this.inputMsg + el;
    },
    switchUserInList: function (el, ind) {

      this.selectedContIndex = ind;

      // gestisco il cambio del background alla selezione dell'utente nella lista
      this.contacts.map((e)=> {
        if(e.selectedBkgr == true) {
          e.selectedBkgr = false;
        }
      });
      el.selectedBkgr = true;
    },
    sendMsg: function () {

      let msgToPush = {
        message: this.inputMsg,
        isSent: true,
        date: this.getHourString()
      };

      this.contacts[this.selectedContIndex].messagesHistory.push(msgToPush);

      this.inputMsg = '';

      // codice di risposta automatica dopo due secondi
      setTimeout(function () {

        let date = new Date();
        dateString = date.toLocaleTimeString([],{hour: '2-digit', minute: '2-digit'});

        let autoAnswer = {
          message:'Ok!',
          date: dateString,
          isSent: false
        }

        myApp.contacts[myApp.selectedContIndex].messagesHistory.push(autoAnswer);

      }, 2000);

    }
  }
})
