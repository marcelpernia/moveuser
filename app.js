new Vue({
  el: '#app',
  mounted() {
    axios
      .get('https://randomuser.me/api/?results=10')
      .then(response => (
        this.users = response.data.results.map(user => {
          return {
            username: user.login.username,
            firstName: user.name.first,
            lastName: user.name.last,
            fullName: `${user.name.first} ${user.name.last}`,
            picture: user.picture.medium,
            selected: true
          }
        })
      ))
      .catch(error => console.log(error))
  },
  data: {
    title: 'Click para mover de grupo',
    users: []
  },
  methods: {
    iconClass(value) {
      return value ? 'fa fa-angle-double-right' : 'fa fa-angle-double-left';
    }
  },
  computed: {
    selectedUsers() {
      return this.users.filter(user => user.selected === true);
    },
    unSelectedUsers() {
      return this.users.filter(user => user.selected === false);
    }
  }
});