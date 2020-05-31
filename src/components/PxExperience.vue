<template>
<div class="position flex flex-wrap py-10">
    <div class="sm:w-full md:w-1/2">
    <div class="flex flex-wrap">
        <h1 class="w-full">{{this.enterprise.name}}</h1>
        <h2 class="w-full">{{this.enterprise.position}}</h2>
        <h2 class="w-full">{{this.enterprise.time}}</h2>
    </div>
        
    </div>
    <div class="sm:w-full md:w-1/2 flex flex-wrap px-3">
        <p class="sm:w-full">Tasks:</p>
    <div v-for="task in enterprise.tasks" :key="task" class="w-full">
        <p>- {{task}}</p>
    </div>
    </div>
</div>
</template>

<script>
export default {
    name: "PxExperience",
    props: ['enterprise']
}
</script>

<style scoped>
    .position{
        background:#457b9d;
    }
    h1{
        font-size: 3rem;
    }
    h2{
        font-size: 1.5rem;
    }
    h1,h2,p{
        color: white;
    }
</style>