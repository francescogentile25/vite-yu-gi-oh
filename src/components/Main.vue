
<template>
    <Card v-for="card in store.cards" :key="card.id" :card="card"></Card>
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
<style lang="scss" scoped></style>