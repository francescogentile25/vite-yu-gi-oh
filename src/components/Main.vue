
<template>
    <div class="body">
        <p class="text-white fs-2 text-center fw-bold"> Hai trovato: <span class="text-danger">{{ store.cards.length
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
export default {
    components: {
        Card,
    },
    data() {
        return {

            store,
        }
    },
    methods: {
        fetchCard() {
            axios
                .get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=3641')
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
    background-image: url(https://www.shutterstock.com/shutterstock/photos/1922447285/display_1500/stock-photo-le-n-guanajuato-mexico-february-back-view-of-random-cards-of-trading-game-yu-gi-oh-1922447285.jpg);
    background-repeat: no-repeat;
    background-size: cover;
}

.cards {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
}
</style>