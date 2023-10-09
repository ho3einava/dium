<template>
    <div class="leadcapture">
        <div class="left-form-svg"><img src="/images/leadsec/pattern-left-form.svg"></div>
        <div class="right-form-svg"><img src="/images/leadsec/lamp.svg"></div>
        <div class="leadSec">
            <div class="leadtitle">
                <span class="leadtitle-fade">همین حالا یک معامله‌ی مطمئن را شروع کنید</span>
                <div class="leadtitle-topic">همین حالا یک معامله‌ی مطمئن را شروع کنید</div>
            </div>
            <div class="desc">
                <p>شما<br />
                    می‌توانید با پر کردن فرم زیر از سرویس تخصصی<br />
                    کارشناسی موتورسیکلت در محل بهره‌مند شوید </p>
            </div>
            <form class="lead-done-from" action="#">
                <div id="inputs">
                <div class="leadinput" id="input1">
                    <div class="leadicon" id="icon1"><i class="bi bi-person"></i></div>
                    <div class="input-sec"><input id="text1" class="input" type="text" placeholder="نام و نام خانوادگی"></div>
                </div>
                <div class="leadinput" id="input2">
                    <div class="leadicon" id="icon2"><i class="bi bi-telephone"></i></div>
                    <div class="input-sec"><input id="text2" class="input" type="number" placeholder="شماره تماس"></div>
                </div>
            </div>
                <div class="leadinput">
                    <div class="leadicon"><svg xmlns="http://www.w3.org/2000/svg" width="22.427" height="21.169"
                            viewBox="0 0 49.427 48.169">

                            <path id="Division-v2" class="section-icon2"
                                d="M900.044,266.738c-.613-4.677-2.264-7.974-4.906-9.8-3.271-2.261-7.065-2.72-10.413-3.125l-.683-.084a65.755,65.755,0,0,0-8.878-.534,67.534,67.534,0,0,0-12.01,1.209,21.639,21.639,0,0,0-4.773,1.4h0a10.5,10.5,0,0,0-4.576,3.727c-1.722,2.588-2.09,5.929-2.3,8.858-.221,3.079-.434,6.736-.348,10.508.032,1.409.075,3.048.187,4.686.214,3.146.685,7.183,2.442,10.522,2.409,4.579,6.461,5.664,9.3,6.082a87.77,87.77,0,0,0,12.329,1.176h.273a68.614,68.614,0,0,0,12.35-1.261c3.235-.586,6.55-1.483,8.879-4.049,2.512-2.765,2.981-6.832,3.248-10.76A94.582,94.582,0,0,0,900.044,266.738Zm-15.68-9.947c3.15.381,6.407.775,9.069,2.615,1.915,1.323,3.138,3.922,3.637,7.722a65.244,65.244,0,0,1,.489,8.649H877.352v-19.39a1.372,1.372,0,0,0-.018-.171,62.4,62.4,0,0,1,6.333.49Zm-27.922,35.915c-1.495-2.842-1.91-6.478-2.1-9.328-.108-1.575-.15-3.176-.181-4.552-.083-3.647.126-7.215.341-10.225.183-2.547.487-5.43,1.8-7.41a7.45,7.45,0,0,1,3.3-2.651,18.83,18.83,0,0,1,4.109-1.189,64.6,64.6,0,0,1,10.652-1.129,1.492,1.492,0,0,0-.016.165v41.782c0,.053.01.1.015.155a92.46,92.46,0,0,1-10.845-1.108C859.946,296.689,857.828,295.341,856.442,292.706Zm38.254,1.33c-1.814,2-4.664,2.654-7.193,3.113a70.613,70.613,0,0,1-10.167,1.173c.005-.051.016-.1.016-.153V278.777h20.156c-.072,2.184-.2,4.308-.337,6.312C896.941,288.49,896.56,291.983,894.7,294.036Z"
                                transform="translate(-851.138 -253.193)"></path>
                        </svg></div>
                    <div class="input-sec"><input class="input" type="text" placeholder="مدل موتور سیکلت"></div>
                </div>
                <div class="leadtextaria">
                    <div class="leadicon"><i class="bi bi-geo-alt"></i></div>
                    <div class="textaria-sec"><textarea class="input" type="text" placeholder="آدرس دقیق شما"></textarea></div>
                </div>
                <div class="btn-form">

                    <ComponentBtnprimary class="leadbtn"/>
                </div>
            </form>
        </div>
    </div>
</template>

<style>
@import url('/assets/css/leadcapture.css');
</style>