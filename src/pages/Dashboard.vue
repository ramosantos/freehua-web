<script setup>
    import List from '../components/List.vue';
</script>

<template>
    <div class="d-flex flex-column">
    <List/>
    <div class="mt-4">
    <router-link to='/upload'>
    <button type="button" class="btn btn-primary">Novo livro</button>
    </router-link>
 <router-link to='/update'>
    <button type="button" class="btn btn-primary ms-4">Novo capitulo</button>
    </router-link>
    </div>
    </div>
</template>
