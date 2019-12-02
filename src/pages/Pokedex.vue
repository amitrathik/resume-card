<template>
  <Layout>
    <section>
      <form @submit.prevent="fetchPokemon(searchTerm)">
        <input id="search-input" type="text" v-model="searchTerm" placeholder="pikachu" />
        <button type="submit">Search</button>
        <label class="search-label" for="search-input">Try searching for "Pikachu" or "Mewtwo"</label>
      </form>

      <div class="pokemon-card--container">
        <h2 class="pokemon-card--title">{{capitalizeFirstLetter(pokemon.name)}}</h2>
        <img v-if="pokemon.imageUrl" :src="pokemon.imageUrl" :alt="`A picture of ${pokemon.name}`" />
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  data() {
    return {
      url: 'https://pokeapi.co/api/v2',
      searchTerm: '',
      pokemon: {
        imageUrl: '',
        name: ''
      }
    }
  },
  methods: {
    async fetchPokemon(searchTerm) {
      try {
        const resp = await fetch(`${this.url}/pokemon/${searchTerm}`)
        const data = await resp.json()
        console.log(data)

        this.pokemon.name = data.name
        this.pokemon.imageUrl = data.sprites.front_default
      } catch (err) {
        console.log(err)
      }
    },
    capitalizeFirstLetter(string = '') {
      return `${string.substring(0, 1).toUpperCase()}${string.substring(1)}`
    }
  }
}
</script>

<style scoped>
.search-label {
  display: block;
  font-size: 0.8em;
}
form {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: 1em;
}
section {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pokemon-card--container {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: 1em;
  margin-top: 1em;
  min-height: 200px;
  min-width: 100px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.pokemon-card--container:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
.pokemon-card--title {
  margin-top: 0;
}
</style>