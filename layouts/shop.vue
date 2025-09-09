<template>
    <div>
        <Header />
        <UContainer>
            <div>
                <slot />
            </div>
        </UContainer>
        <Footer />
    </div>
</template>
<script setup>
import Footer from "@/components/Footer.vue";
</script>