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
                    <h1 class="m0">Detail Banner</h1>
                    <p class="mt5 mb20 tc-green">Your banner details</p>
                </div>
            </div>
            <hr class="uline-grey">
            <div class="mt50">
                <p>Banner Name:</p>
                <h2>Vioni Wita Elya</h2>
            </div>
            <div class="mt10">
                <p class="detail-title-bold">Broadcast Schedule:</p>
                <p>viowelya</p>
            </div>
            <div class="mt10">
                <p class="detail-title-bold">Valid from:</p>
                <p>vioniwitaelya@gmail.com</p>
            </div>
            <div>
                <p class="detail-title-bold">Valid until:</p>
                <label class="label-green">Super Admin</label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
	name: 'detail-banner'
}
</script>