<template>
    <div class="card border-0">
        <img :src="card.card_images[0].image_url" class="card-img-top" alt="...">
        <div class="card-body bg-dark text-white ">
            <h3 class="card-text text-center">{{ card.name }}</h3>
            <p class="card-text text-center">{{ card.type }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        card: {
            type: Object,
            required: true
        },
    },
    data() {
        return {

        }
    },
}
</script>
<style lang="scss" scoped></style>