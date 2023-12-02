<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="mr40 mt20">
                    <router-link to="/list-banner">
                        <img src="../../assets/icons/back.svg">
                    </router-link>
                </div>
                <div>
                    <h1 class="m0">Add Banner</h1>
                    <p class="mt5 mb20 tc-green">Make new costumers tempted to shop via banners</p>
                </div>
            </div>
            <hr class="uline-grey">
            <div class="mt50 row">
                <div class="w20">
                    <label class="form-label">Banner Image</label>
                </div>
                <div class="m10">
                    <img id="0" src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//98/MTA-2257685/kara_sun-kara-santan-kelapa--200-ml-_full02.jpg" 
                    alt="Kara Santan Kelapa Murni 200ML" qty="1"
                    class="w25"
                    type="items" />
                    
                </div>
            </div>
            <div class="mt50 row">
                <div class="w20">
                    <label class="form-label">Banner Name</label>
                </div>
                <div class="w80">
                    <input
                        class="form-text"
                        type="text"
                        placeholder="Masukan Banner Name"
                    >
                </div>
            </div>
            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label">Broadcast schedule</label>
                </div>
                <div class="w80">
                    <input
                        class="form-text"
                        type="text"
                        placeholder="Pilih Hari"
                    >
                </div>
            </div>
            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label">Valid Form</label>
                </div>
                <div class="w80">
                    <input
                        class="form-text"
                        type="text"
                        placeholder="Masukan Tanggal"
                    >
                </div>
            </div>
            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label">Valid Until</label>
                </div>
                <div class="w80">
                    <input
                        class="form-text"
                        type="text"
                        placeholder="Masukan Tanggal"
                    >
                </div>
            </div>
            <div class="flex mt30">
                <router-link to="/list-banner">
                    <button class="bt-submit-green">Add</button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
	name: 'add-banner'
}
</script>