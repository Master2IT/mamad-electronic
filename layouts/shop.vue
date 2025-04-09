<template>
    <div>
        <UContainer>
            <Header />
            <div>
                <slot />
            </div>
        </UContainer>
        <Footer />
    </div>
</template>
<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>