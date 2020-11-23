const myApp = new Vue ({
  el: '#root',
  data: {
    loggedUser: {
      name: 'Gianluca',
      surname: 'Zanzarella',
      avatar:'img/avatar_8.jpg'
    },
    selectedContact: {
      name: '',
      surname: '',
      lastOnline:'',
      avatar: ''
    },
    contacts: [
      userOne = {
        name: 'Michele',
        surname: '',
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
          },
        ],
        selectedBackground: false,
      },
      userTwo = {
        name: 'Fabio',
        surname: '',
        lastOnline:'Ultimo accesso oggi alle 22:44',
        avatar: 'img/avatar_2.jpg',
        selectedBackground: false
      },
      userThree = {
        name: 'Samuele',
        surname: '',
        lastOnline:'Ultimo accesso oggi alle 13:34',
        avatar: 'img/avatar_3.jpg',
        selectedBackground: false
      },
      userFour = {
        name: 'Sam',
        surname: '',
        lastOnline:'',
        avatar: 'img/avatar_4.jpg',
        selectedBackground: false
      },
      userFour = {
        name: 'Andrea',
        surname: '',
        lastOnline:'',
        avatar: 'img/avatar_5.jpg',
        selectedBackground: false
      },
      userFour = {
        name: 'Maria',
        surname: '',
        lastOnline:'',
        avatar: 'img/avatar_6.jpg',
        selectedBackground: false
      },
      userFour = {
        name: 'Davide',
        surname: '',
        lastOnline:'',
        avatar: 'img/avatar_7.jpg',
        selectedBackground: false
      },
      userFour = {
        name: 'Giulio',
        surname: '',
        lastOnline:'',
        avatar: 'img/avatar_8.jpg',
        selectedBackground: false
      },
    ],
    inputMessage: '',
    inputSearchBar: '',
    displayedMessages: [],
    a: true
  },
  methods: {

    toggleColor: function (el) {
      this.contacts.map((e)=> {
        el.selectedBackground = true;
        if (el.selectedBackground === e.selectedBackground) {
          e.selectedBackground = false;
        }
      })
    }

  }
})
