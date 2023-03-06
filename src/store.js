import { reactive } from 'vue'
const store = reactive({
    cards: [],
    img: '',
    name: '',
    type: '',
    search: '',
    numberOfResult: ''
})
export default store