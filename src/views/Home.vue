<script setup>
import Hero from '@/components/Hero.vue';
import HomeCard from '@/components/homeCard.vue';
import Joblistenings from '@/components/jobslistenings.vue';


</script>
<template>
    <Hero />
    <HomeCard />
    <Joblistenings :limit="3" :show-button="true" />
</template>