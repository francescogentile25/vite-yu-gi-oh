
<template>
    <!-- <div>
        <li v-for="(card, i)  in cards" key="i">
            <img :src="card.card_images[0].image_url" alt="">
            <p>{{ card.name }}</p>
        </li>
        </div> -->

    <div class="card" style="width:300px" v-for="(card, i)  in cards" key="i">
        <img :src="card.card_images[0].image_url" class="card-img-top" alt="...">
        <div class="card-body">
            <h3 class="card-text text-center">{{ card.name }}</h3>
            <p class="card-text text-center">{{ card.type }}</p>
        </div>
    </div>
    <Card></Card>
</template>

<script>
import axios from 'axios'
import Card from './Card.vue'
// import store from '../store'
export default {
    components: {
        Card,
    },
    data() {
        return {
            cards: []
            // store,
        }
    },
    methods: {
        fetchCard() {
            axios
                .get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0')
                .then((res) => {
                    console.log(res.data.data)
                    this.cards = res.data.data
                })
        }
    },
    created() {
        this.fetchCard()
    },
}
</script>
<style lang="scss" scoped></style>