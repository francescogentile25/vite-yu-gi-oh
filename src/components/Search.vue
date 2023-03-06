<template>
    <div>
        <input type="text" placeholder="cerca una carta" class="form-control-lg" @keyup.enter="$emit('onSearch')"
            v-model="store.search">
    </div>
</template>

<script>
import store from '../store';

export default {
    data() {
        return {
            store,
        }
    }

}
</script>

<style lang="scss" scoped></style>