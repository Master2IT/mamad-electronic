<template>
    <UContainer>
        <Header />
        <div>
            <slot />
        </div>
        <Footer />
    </UContainer>
</template>
<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>