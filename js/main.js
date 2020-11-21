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
        avatar: 'img/avatar_1.jpg'
      },
      userTwo = {
        name: 'Fabio',
        surname: '',
        lastOnline:'Ultimo accesso oggi alle 22:44',
        avatar: 'img/avatar_2.jpg'
      },
      userThree = {
        name: 'Samuele',
        surname: '',
        lastOnline:'Ultimo accesso oggi alle 13:34',
        avatar: 'img/avatar_3.jpg'
      },
      userFour = {
        name: 'Luisa',
        surname: '',
        lastOnline:'',
        avatar: 'img/avatar_4.jpg'
      },
      userFour = {
        name: 'Andrea',
        surname: '',
        lastOnline:'',
        avatar: 'img/avatar_5.jpg'
      },
      userFour = {
        name: 'Maria',
        surname: '',
        lastOnline:'',
        avatar: 'img/avatar_6.jpg'
      },
      userFour = {
        name: 'Davide',
        surname: '',
        lastOnline:'',
        avatar: 'img/avatar_7.jpg'
      },
      userFour = {
        name: 'Giulio',
        surname: '',
        lastOnline:'',
        avatar: 'img/avatar_8.jpg'
      },
    ],

    inputMessage: '',

    inputSearchBar: ''
  }
})
