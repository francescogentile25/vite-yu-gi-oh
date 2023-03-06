<template>
    <div>
        <input type="text" placeholder="cerca una carta" class="form-control-lg m-3" @keyup.enter="$emit('onSearch')"
            v-model="store.search">
        <input type="text" placeholder="quanti risultati vuoi visualizzare" class="form-control-lg m-3"
            @keyup.enter="$emit('onSearch')" v-model="store.numberOfResult">
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