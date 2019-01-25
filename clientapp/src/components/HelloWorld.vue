<template>
  <div>
    <h2>{{ title }}</h2>

    <div v-for="log in entries" :key="log">
      {{ log }}
    </div>

    <div v-for="item in allManagers" :key="item">
      <div>
        <img class="portrait" v-bind:src="item.image">
      </div>
      <div>
        Has votes: {{ item.votes }}
      </div>
      <div>
        <button @click="toggler(item)">CLICK TO VOTE</button>
      </div>
      <div v-if="item.field">
        Your name ?
        <input type="text" v-model="item.votee" @keyup.enter="vote(item)">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      title: 'WHO IS YOUR FAVORITE MANAGER ?',
      username: '',
      entries: [],
      allManagers: [
        {
          id: 1,
          name: 'Alex',
          image: require('@/assets/alex.jpg'),
          votes: 0,
          field: false,
          votee: ''
        },
        {
          id: 2,
          name: 'Anne Dorte',
          image: require('@/assets/anne_dorte.jpg'),
          votes: 0,
          field: false,
          votee: ''
        },
        {
          id: 3,
          name: 'Henrik',
          image: require('@/assets/henrik.jpg'),
          votes: 0,
          field: false,
          votee: ''
        }
      ]
    }
  },
  methods: {
    vote (manager) {
      console.log(manager)
      manager.votes++

      let name = manager.name
      let user = manager.votee

      let message = `${user} has voted for ${name}`
      this.entries.unshift(message)

      // Websocket update
      this.$socket.send(message)

      manager.votee = ''
      manager.field = false
    },
    toggler (item) {
      item.field = !item.field
      console.log('toggle this')
    }
  },
  created () {
    console.log(this.$steffen)
  }
}
</script>

<style>
  .portrait {
    height: 150px;
    width: auto;
  }
</style>
