<template>
    <main>
        <!-- Hero -->
        <section class="section bg-c-white pb-0 pt-[40px]">
            <div class="div flex-col justify-between gap-[32px] xl:flex-row xl:items-center xl:gap-[80px] xl:pr-0">
                <div class="flex flex-col gap-6 xl:max-w-[480px]">
                    <h1 class="font-36 font-bold xl:font-semibold">Simplified Communication with Advanced Solutions</h1>
                    <p class="font-16 font-medium">
                        Need to maximize productivity and minimize cost business telecommunications?
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
                <div><img src="/img/hero-lp-1.webp" alt="Image" /></div>
            </div>
        </section>

        <!-- Logo -->
        <CompaniesLogo />

        <!-- Why We're Here -->
        <section v-motion-slide-visible-once-right :duration="500" class="section">
            <div class="div flex flex-col gap-[40px] xl:gap-[80px]">
                <div class="flex flex-col gap-[24px] text-center">
                    <h2 class="font-32 font-bold text-c-orange">Why We’re Here?</h2>
                    <p class="font-16">
                        In the last decade,
                        <span class="font-bold">over 40% of mid-level companies</span> have faced major communication challenges
                        due to outdated technology. On-premise PBX is no longer sufficient and we’re here with the solution to
                        upgrade your telecommunication system.
                    </p>
                </div>
                <div class="flex flex-col gap-[24px] text-center xl:flex-row xl:gap-[80px]">
                    <div class="flex flex-col gap-[24px]">
                        <p class="font-20 font-bold">On-premise PBX</p>
                        <img src="/img/pbx2.webp" alt="Image" />
                    </div>
                    <div class="flex flex-col gap-[24px]">
                        <p class="font-20 font-bold">Ofon Cloud PBX</p>
                        <img src="/img/pbx1.webp" alt="Image" />
                    </div>
                </div>
            </div>
        </section>

        <!-- We Make Communication -->
        <section v-motion-slide-visible-once-left :duration="500" class="section bg-c-brown">
            <div class="div flex flex-col gap-[36px] xl:gap-[60px]">
                <h2 class="font-32 text-center font-bold text-c-white xl:font-semibold">
                    We Make Your Communication More Efficient
                </h2>
                <div class="flex flex-col gap-[24px] xl:flex-row xl:gap-[60px]">
                    <div class="card-hover flex flex-col gap-[24px] rounded-xl bg-c-white p-[24px]">
                        <img src="/img/feature1.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                        <div>
                            <p class="font-16 mb-[8px] font-bold">Cost Reduction</p>
                            <p class="font-14 font-medium">
                                Significant cost savings by offering reductions of up to 50% to 70% compared to the fees charged
                                by other providers.
                            </p>
                        </div>
                    </div>
                    <div class="card-hover flex flex-col gap-[24px] rounded-xl bg-c-white p-[24px]">
                        <img src="/img/feature2.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                        <div>
                            <p class="font-16 mb-[8px] font-bold">Saving Efficiently</p>
                            <p class="font-14 font-medium">
                                Reduce maintenance costs and make you save significantly while maintaining high standards of
                                service.
                            </p>
                        </div>
                    </div>
                    <div class="card-hover flex flex-col gap-[24px] rounded-xl bg-c-white p-[24px]">
                        <img src="/img/feature3.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                        <div>
                            <p class="font-16 mb-[8px] font-bold">Hardware Elimination</p>
                            <p class="font-14 font-medium">
                                Say goodbye to hardware hassles and enjoy a seamless, worry-free experience with our advanced
                                solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 3 Services -->
        <section v-motion-slide-visible-once-right :duration="500" class="section">
            <div class="div flex flex-col items-center gap-[40px] xl:flex-row xl:gap-[80px]">
                <div class="">
                    <p class="font-32 mb-[16px] font-bold text-c-orange xl:mb-[24px] xl:font-semibold">Maintenance & Support</p>
                    <p class="font-14 font-medium">
                        Optimize your budget by outsourcing the operation and maintenance of your legacy telephony infrastructure
                        to our expert team.
                    </p>
                    <div class="mt-[20px] flex w-full flex-col gap-[8px] xl:gap-[20px]">
                        <div class="flex items-center gap-4">
                            <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">Hardware & Software Maintenance</p>
                        </div>
                        <div class="flex items-center gap-4">
                            <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">Experienced Technicians</p>
                        </div>
                        <div class="flex items-center gap-4">
                            <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">Improve Call Efficiency</p>
                        </div>
                    </div>
                </div>
                <img src="/img/service4.webp" alt="Image" />
            </div>
        </section>
        <section v-motion-slide-visible-once-left :duration="500" class="section">
            <div class="div flex flex-col items-center gap-[40px] xl:flex-row xl:gap-[80px]">
                <div class="xl:order-1">
                    <p class="font-32 mb-[16px] font-bold text-c-orange xl:mb-[24px] xl:font-semibold">Ofon Cloud PBX</p>
                    <p class="font-14 font-medium">
                        Join the league of modern businesses thriving with efficient communication solutions. Don't let the fear
                        of missing out on streamlined operations hold you back!
                    </p>
                    <div class="mt-[20px] flex w-full flex-col gap-[8px] xl:gap-[20px]">
                        <div class="flex items-center gap-4">
                            <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">Cost Saving</p>
                        </div>
                        <div class="flex items-center gap-4">
                            <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">Flexibility and Reliability</p>
                        </div>
                        <div class="flex items-center gap-4">
                            <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">Advanced Features & Integrations</p>
                        </div>
                    </div>
                </div>
                <img src="/img/service1.webp" alt="Image" />
            </div>
        </section>
        <section v-motion-slide-visible-once-right :duration="500" class="section">
            <div class="div flex flex-col items-center gap-[40px] xl:flex-row xl:gap-[80px]">
                <div class="">
                    <p class="font-32 mb-[16px] font-bold text-c-orange xl:mb-[24px] xl:font-semibold">
                        Phone System Integration
                    </p>
                    <p class="font-14 font-medium">
                        Using multiple technologies in your phone system? Unify all branches and user extensions into a single,
                        enterprise-class telephony system with our integration solution.
                    </p>
                    <div class="mt-[20px] flex w-full flex-col gap-[8px] xl:gap-[20px]">
                        <div class="flex items-center gap-4">
                            <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">System Design and Implementation</p>
                        </div>
                        <div class="flex items-center gap-4">
                            <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">Integration with Existing Infrastructure</p>
                        </div>
                        <div class="flex items-center gap-4">
                            <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">Unified Telecommunication</p>
                        </div>
                    </div>
                </div>
                <img src="/img/service3.webp" alt="Image" />
            </div>
        </section>

        <!-- Supported Technology -->
        <SupportedTechnology />

        <!-- See How Much -->
        <section v-motion-slide-visible-once-left :duration="500" class="section">
            <div class="div flex flex-col gap-[40px] xl:gap-[80px]">
                <div class="flex flex-col gap-[24px] text-center">
                    <h2 class="font-32 font-bold text-c-black">See How Much You Can Save by Upgrading to Cloud PBX</h2>
                    <p class="font-16">
                        Compare the budget to understand how you can efficiently improve the way your company communicates.
                        <span class="font-bold">Assumed installation for 10 branch offices with 10 DID 10 CC offices each.</span>
                    </p>
                </div>
                <div class="xl:gap-[40 px] flex flex-col gap-[24px] text-center xl:flex-row xl:items-center">
                    <div class="flex flex-col gap-[24px]">
                        <img src="/img/chartmobile1.webp" alt="Image" class="xl:hidden" />
                        <img src="/img/chartdesktop1.webp" alt="Image" class="hidden xl:flex" />
                    </div>
                    <p class="font-32 font-bold text-c-orange">VS</p>
                    <div class="flex flex-col gap-[24px]">
                        <img src="/img/chartmobile2.webp" alt="Image" class="xl:hidden" />
                        <img src="/img/chartdesktop2.webp" alt="Image" class="hidden xl:flex" />
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA (Connecting Business) -->
        <section v-motion-slide-visible-once-right :duration="500" class="section bg-c-brown">
            <div class="div flex-col justify-between gap-10 xl:flex-row xl:items-center">
                <div class="flex flex-col gap-6 xl:max-w-[480px]">
                    <h2 class="font-32 font-bold text-c-white xl:font-semibold">
                        Connecting Business Communication Across the Island
                    </h2>
                    <p class="font-16 font-medium text-c-white">
                        Our services give all across the places to connect and grow businesses strongly.
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
                    <div class="grid grid-cols-1 gap-[16px] xl:grid-cols-2">
                        <WhatsAppUs />
                        <a href="#forms" class="btn-outline">Get a Free Audit</a>
                    </div>
                </div>
                <div><img src="/img/indonesia.webp" alt="Image" /></div>
            </div>
        </section>

        <!-- Testimonial -->
        <Testimonial />

        <!-- CTA (Avoid Misunderstandings) -->
        <section class="section">
            <div class="div">
                <div class="flex flex-col gap-[24px] rounded-xl bg-c-brown p-[24px] xl:flex-row xl:p-[42px]">
                    <div class="flex flex-col gap-[24px]">
                        <p class="font-32 font-semibold text-c-white">Avoid Misunderstandings and Switch with Ofon!</p>
                        <p class="font-16 text-c-white">
                            Need to optimize the way your business communicate? Contact us and get a free audit.
                        </p>
                        <a href="#forms" class="btn xl:w-fit">Contact Us</a>
                    </div>
                    <img src="/img/call.webp" alt="Image" />
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
    title: 'Simplified Communication with Advanced Solutions',
    description: 'Need to maximize productivity and minimize cost business telecommunications?',
});
</script>
