<template>
    <main>
        <!-- Thank You -->
        <section class="section">
            <div class="div flex flex-col items-center gap-[40px] xl:flex-row xl:gap-[80px]">
                <div class="flex flex-col items-start gap-[16px] xl:gap-[24px]">
                    <p class="font-36 font-bold text-c-black xl:font-semibold">Thank You for Connecting with Ofon</p>
                    <p class="font-16 font-medium">We’re excited to meet you soon. See you!</p>
                    <div class="grid w-full grid-cols-1 gap-[16px] xl:grid-cols-2">
                        <NuxtLink to="/" class="btn-outline w-full">Back to Home</NuxtLink>
                        <WhatsAppUs />
                    </div>
                </div>
                <img src="/img/thankyou.webp" alt="Image" />
            </div>
        </section>
    </main>
</template>

<script setup>
useSeoMeta({
    title: 'Home',
    description: 'Say Goodbye to the High Maintenance and Outdated Telephone Systems',
});
</script>
