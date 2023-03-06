import { reactive } from 'vue'
const store = reactive({
    cards: [],
    img: '',
    name: '',
    type: '',
    search: '',
    numberOfResult: '20'
})
export default store