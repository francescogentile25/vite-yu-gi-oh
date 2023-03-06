
<template>
    <div class="body">
        <Search @onSearch="fetchCard"></Search>
        <p class=" fs-2 text-center fw-bold"> Hai trovato: <span class="text-danger">{{ store.cards.length
        }}</span> carte</p>
        <div class="cards container ">
            <Card v-for="card in store.cards" :key="card.id" :card="card"></Card>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Card from './Card.vue'
import store from '../store'
import Search from './Search.vue'
export default {
    components: {
        Card,
        Search,
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        fetchCard() {
            const search = this.store.search
            axios
                .get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${search}&num=20&offset=0`)
                .then((res) => {
                    console.log(res.data.data)
                    this.store.cards = res.data.data
                })
        }
    },
    created() {
        this.fetchCard()
    },
}
</script>
<style lang="scss" scoped>
.body {

    background-repeat: no-repeat;
    background-size: cover;
}

.cards {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
}
</style>