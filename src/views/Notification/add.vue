<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="mr40 mt20">
                    <router-link to="/list-notification">
                        <img src="../../assets/icons/back.svg">
                    </router-link>
                </div>
                <div>
                    <h1 class="m0">Add Notification</h1>
                    <p class="mt5 mb20 tc-green">Make Notification to your costumers so they know about discount products and other things in your shop</p>
                </div>
            </div>
            <hr class="uline-grey">
            <div class="mt50 row">
                <div class="w20">
                    <label class="form-label">Title&content</label>
                </div>
                <div class="w80">
                    <div class="w80">
                        <input
                        class="form-text"
                        type="text"
                        placeholder="Judul Article"
                    >
                    </div>
                    <input
                        class="form-text"
                        type="text"
                        placeholder="Content(Min.1000 word)"
                    >
                </div>
            </div>
            <div class="mt30 row">
                <div class="w20">
                    <label class="form-label">Broadcast schedule</label>
                </div>
                <div class="w80">
                    <input
                        class="form-select"
                        type="select"
                        placeholder="Masukan Tanggal"
                    >
                </div>
            </div>
           
            </div>
            <div class="flex mt30">
                <router-link to="/list-notification">
                    <button class="bt-submit-green">Add Notification</button>
                </router-link>
            </div>
        </div>
</template>

<script>
export default {
	name: 'add-notification'
}
</script>