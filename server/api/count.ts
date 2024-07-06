import { ref } from "vue";

export default defineEventHandler(e => {
    const i = ref(0);
    i.value++;
    return i.value;
});