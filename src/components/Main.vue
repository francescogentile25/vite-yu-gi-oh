
<template>
    <div>
        <li v-for="(card, i)  in cards" key="i">
            prova
        </li>
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
                .get('https://db.ygoprodeck.com/api/v7/cardinfo.php')
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