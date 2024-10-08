<template>
    <main>
        <!-- Hero -->
        <section class="section bg-c-white pb-0 pt-[40px]">
            <div class="div flex-col justify-between gap-10 xl:flex-row xl:items-center xl:pr-0">
                <div class="flex flex-col gap-6 xl:max-w-[480px]">
                    <p class="font-16 font-bold">Ofon PBX Maintenance & Support</p>
                    <h1 class="font-36 font-bold xl:font-semibold">Maintain & Support Your PBX Phone System</h1>
                    <p class="font-16 font-medium">
                        A great solution for PBX maintenance and support with minimum cost and maximum benefit focusing on your
                        needs.
                    </p>
                    <div class="flex items-center gap-2 xl:gap-4">
                        <p class="font-16 font-bold">Certified Engineer by</p>
                        <img src="/img/microsoft.webp" alt="Image" class="" />
                    </div>
                    <div class="grid grid-cols-1 gap-[16px] xl:grid-cols-2">
                        <WhatsAppUs />
                        <a href="#forms" class="btn-outline">Get a Free Audit</a>
                    </div>
                </div>
                <div><img src="/img/3hero.webp" alt="Image" /></div>
            </div>
        </section>

        <!-- Logo -->
        <CompaniesLogo />

        <!-- All In One -->
        <section v-motion-slide-visible-once-right :duration="500" class="section">
            <div class="div flex flex-col gap-[40px] xl:gap-[80px]">
                <div class="flex flex-col gap-[24px]">
                    <h2 class="font-32 text-center font-bold">
                        All-in-One PBX Service: <br />
                        Maintain, Support, Integrate, and Migrate
                    </h2>
                    <div>
                        <p class="font-14 text-center font-bold">We keep your PBX system running smoothly!</p>
                        <p class="font-14 mx-auto text-center xl:max-w-[960px]">
                            We’re dedicated to understanding your unique situation and getting what you need. From maintenance and
                            support to integration and migration, we've got your multi-vendor PBX covered.
                        </p>
                    </div>
                </div>
                <div class="flex flex-col gap-[16px] xl:grid xl:grid-cols-3 xl:gap-[36px]">
                    <div class="card-hover overflow-hidden rounded-xl border-2 border-c-orange">
                        <img src="/img/aio1.webp" alt="Image" class="w-full" />
                        <div class="p-[16px]">
                            <p class="font-16 mb-2 font-bold">Cisco PBX</p>
                            <p class="font-14">
                                Supercharge your communication setup whether it’s maintenance, support, or migration for your
                                Cisco PBX. Want to integrate with latest technology? We’re here to help.
                            </p>
                        </div>
                    </div>
                    <div class="card-hover overflow-hidden rounded-xl border-2 border-c-orange">
                        <img src="/img/aio2.webp" alt="Image" class="w-full" />
                        <div class="p-[16px]">
                            <p class="font-16 mb-2 font-bold">Avaya PBX</p>
                            <p class="font-14">
                                Count on us to keep your Avaya PBX performing its best with our top-notch maintenance and support.
                                You can integrate with many technologies to make your Avaya PBX runs better.
                            </p>
                        </div>
                    </div>
                    <div class="card-hover overflow-hidden rounded-xl border-2 border-c-orange">
                        <img src="/img/aio3.webp" alt="Image" class="w-full" />
                        <div class="p-[16px]">
                            <p class="font-16 mb-2 font-bold">Panasonic PBX</p>
                            <p class="font-14">
                                Get the most out of your Panasonic PBX with our trustworthy maintenance and support services. No
                                pressure to upgrade, we’re focus on your needs.
                            </p>
                        </div>
                    </div>
                    <div class="card-hover overflow-hidden rounded-xl border-2 border-c-orange">
                        <img src="/img/aio4.webp" alt="Image" class="w-full" />
                        <div class="p-[16px]">
                            <p class="font-16 mb-2 font-bold">NEC PBX</p>
                            <p class="font-14">
                                Our professional maintenance and support will keep your NEC PBX performing flawlessly. Our 24/7
                                support are ready to extend the life of NEC PBX system.
                            </p>
                        </div>
                    </div>
                    <div class="card-hover overflow-hidden rounded-xl border-2 border-c-orange">
                        <img src="/img/aio5.webp" alt="Image" class="w-full" />
                        <div class="p-[16px]">
                            <p class="font-16 mb-2 font-bold">Alcatel PBX</p>
                            <p class="font-14">
                                Trust our maintenance and support to keep your Alcatel PBX in top shape until you’re ready for
                                better and larger solution. The further options are all yours.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 2 Services -->
        <section v-motion-slide-visible-once-left :duration="500" class="section">
            <div class="div flex flex-col items-center gap-[40px] xl:flex-row xl:gap-[80px]">
                <div class="flex flex-col gap-[16px] xl:gap-[24px]">
                    <p class="font-32 font-bold text-c-orange xl:font-semibold">Support for Your Legacy Phone System</p>
                    <p class="font-14 font-medium">
                        Is your legacy phone system giving you trouble? Our expert maintenance service is here to help!
                    </p>
                    <div class="flex w-full flex-col gap-[8px] xl:gap-[20px]">
                        <div class="flex justify-start gap-4">
                            <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">Experienced Technicians</p>
                        </div>
                        <div class="flex justify-start gap-4">
                            <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">24/7 Reliable Support</p>
                        </div>
                        <div class="flex justify-start gap-4">
                            <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">Existing Infrastructure Integration</p>
                        </div>
                    </div>
                </div>
                <img src="/img/3-feature1.webp" alt="Image" class="xl:order-1" />
            </div>
        </section>
        <section v-motion-slide-visible-once-right :duration="500" class="section">
            <div class="div flex flex-col items-center gap-[40px] xl:flex-row xl:gap-[80px]">
                <div class="flex flex-col gap-[16px] xl:order-1 xl:gap-[24px]">
                    <p class="font-32 font-bold text-c-orange xl:font-semibold">Integrate & Migrate to Cloud PBX</p>
                    <p class="font-14 font-medium">
                        Ready to modernize your phone system? Migrate to our Cloud PBX and experience the benefits!
                    </p>
                    <div class="flex w-full flex-col gap-[8px] xl:gap-[20px]">
                        <div class="flex justify-start gap-4">
                            <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">Cost Saving</p>
                        </div>
                        <div class="flex justify-start gap-4">
                            <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">Flexibility and Reliability</p>
                        </div>
                        <div class="flex justify-start gap-4">
                            <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">Advanced Features & Integrations</p>
                        </div>
                    </div>
                </div>
                <img src="/img/3-feature2.webp" alt="Image" />
            </div>
        </section>

        <!-- Supported (Logo) -->
        <SupportedTechnology />

        <!-- Transform PBX System -->
        <section v-motion-slide-visible-once-right :duration="500" class="section bg-c-yellow-light xl:bg-c-white">
            <div class="div flex flex-col gap-[36px] xl:gap-[60px]">
                <div class="flex flex-col gap-[32px] xl:gap-[60px] xl:rounded-3xl xl:bg-c-yellow-light xl:p-[50px]">
                    <h2 class="font-32 text-center font-bold text-c-black xl:font-semibold">
                        Transform Your PBX System with Ofon
                    </h2>
                    <div class="flex flex-col gap-[24px] xl:grid xl:grid-cols-4 xl:flex-row xl:gap-[40px]">
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[12px] transition hover:bg-[#FFE3A4]">
                            <img src="/img/3-solution1.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-black">No Pressure to Upgrade</p>
                                <p class="font-14 font-regular text-center text-c-black">
                                    We focus on your needs. You have the freedom to decide when or if you want to upgrade to cloud
                                    without feeling obligated to do so.
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[12px] transition hover:bg-[#FFE3A4]">
                            <img src="/img/3-solution2.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-black">Dedicated Support Team</p>
                                <p class="font-14 font-regular text-center text-c-black">
                                    Our professionals dedicated to providing and solving your legacy phone system. Ensure that
                                    your system runs smoothly and effectively.
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[12px] transition hover:bg-[#FFE3A4]">
                            <img src="/img/3-solution3.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-black">Guaranteed Multi-vendor Parts</p>
                                <p class="font-14 font-regular text-center text-c-black">
                                    Offered to be compatible with various brands or models from different systems.
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[12px] transition hover:bg-[#FFE3A4]">
                            <img src="/img/3-solution4.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-black">Cost Saving up to 70%</p>
                                <p class="font-14 font-regular text-center text-c-black">
                                    Save a significant amount of money, specifically up to 60%, and making the option financially
                                    advantageous.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA (Your Phone) -->
        <section class="section bg-c-brown">
            <div class="div flex-col justify-between gap-10 xl:flex-row xl:items-center xl:gap-[120px]">
                <div class="flex flex-col gap-6 xl:max-w-[480px]">
                    <h2 class="font-32 font-bold text-c-white xl:font-semibold">Your Phone System Specialty Expert</h2>
                    <p class="font-16 font-medium text-c-white">
                        Get the expert services to revolutionize your telecommunications with Ofon
                    </p>
                    <div class="flex justify-between">
                        <div class="flex flex-col items-center">
                            <p class="font-32 text-center font-bold text-c-yellow">20</p>
                            <p class="font-14 text-center font-bold text-c-white">Big Cities</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <p class="font-32 text-center font-bold text-c-yellow">3299</p>
                            <p class="font-14 text-center font-bold text-c-white">Customers</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <p class="font-32 text-center font-bold text-c-yellow">28+</p>
                            <p class="font-14 text-center font-bold text-c-white">Years Experience</p>
                        </div>
                    </div>

                    <a href="#forms" class="btn">Read Case Study</a>
                </div>
                <div><img src="/img/3-cta-image.webp" alt="Image" /></div>
            </div>
        </section>

        <!-- CTA (Want A Refresh) -->
        <section class="section">
            <div class="div flex flex-col gap-[40px] xl:grid xl:grid-cols-3 xl:gap-[60px]">
                <div class="flex flex-col gap-[12px] xl:col-span-2 xl:gap-[24px]">
                    <h2 class="font-32 font-bold">Want to Refresh Your Phone System? Get a Free Quick Audit!</h2>
                    <p class="font-14">
                        No matter what phone system you use, we have solution to make your phone system running like new.
                    </p>
                    <a href="#forms" class="btn w-fit">Contact Us</a>
                </div>
                <div>
                    <img src="/img/hello.webp" alt="Image" />
                </div>
            </div>
        </section>

        <!-- Forms -->
        <Forms />

        <!-- FAQ -->
        <FAQ />
    </main>
</template>

<script setup>
useSeoMeta({
    title: 'Maintain & Support Your PBX Phone System',
    description: 'A great solution for PBX maintenance and support with minimum cost and maximum benefit focusing on your needs.',
});
</script>
