// Не используй ref для хранения глобального состояния
// и никогда не использовать вне компонуемых компонентов
// или же вне <script setup>/setup()
// const name = ref("");

export const useName = () => {
    // нужно использовать useState() и внутри комонуемого компонента/хука
    const name = useState("name", () => "");
    const setName = (newName: string) => {
        console.log("setName", newName, name.value || "None!");
        if (!name.value) {
            name.value = newName;
        }
    };
    return {
        name,
        setName
    };
};