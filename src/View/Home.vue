<script setup>
import { ref } from 'vue';
import gindic from '../indic'
const inputText = ref('');

const onInputChange = (event) => {
    let word = inputText.value
    if (event.code === 'Backspace') return;
    gindic(word, (ml) => {
   
        if ( event.code !== 'Space') return;
        console.log(ml)
        if (ml[0] === "SUCCESS") { inputText.value = `${ml[1][0][1][0]} ` }
    })
}
</script>

<template>
    <div class="jumbotron vertical-center">
        <div class="container-sm">
            <div class="text-center title">
                <h1>മംഗ്ലീഷ് ടൈപ്പിംഗ്</h1>
            </div>
            <div class="row justify-content-center editor">
                <textarea class="form-control" rows="4" v-model="inputText" @keyup="onInputChange"
                    placeholder="ഇവിടെ ടൈപ്പ് ചെയ്യു...."></textarea>
            </div>
        </div>
    </div>
    <footer class="footer sticky-bottom text-center">
        <div class="row g-0 text-center">
            <div class="col-sm-6 col-md-8">Made with ❤️ by <a href="https://abhint.pages.dev/">Abhijith</a></div>
            <div class="col-6 col-md-4"><a href="https://github.com/abhint/manglish-typing">Github</a></div>
        </div>
    </footer>
</template>
<style>
.title {
    margin: 1rem;
}

.title h1 {
    color: #41b883;
    text-shadow: 2px 2px 4px #34495e;
    font-weight: 800;
}

.editor {
    margin: 1rem;
}

.editor textarea {
    height: 348px;
    font-weight: 500;
}

.vertical-center {
    display: flex;
    align-items: center;
}

.footer {
    padding: 10px;
    background-color: #fff;
    font-size: 14px;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
}
</style>
