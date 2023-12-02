<template>
    <div>
        <Menu/>
        <div class="container">
            <h1 class="m0">Banner</h1>
            <div class="row">
                <div class="col">
                    <p class="mt5 mb20 tc-green">manage your Banner promosion</p>
                </div>
                <div class="col flex">
                    <router-link to="/add-banner">
                        <button class="bt-green">+ Add</button>
                    </router-link>
                </div>
            </div>
            <div class="row bg-blue mt10 p10">
                <div class="col">
                    <input
                        class="search-field"
                        type="text"
                        id="deskripsi"
                        placeholder="Tambah deskripsi..."
                    />
                </div>
                <div class="col flex">
                    <button class="bt-blue">Filter</button>
                </div>
            </div>
            <div class="mt50">
                <table>
                    <thead>
                        <tr>
                            <th>BANNER NAME</th>
                            <th>BROADCAST SCHEDULE</th>
                            <th>VALID FROM</th>
                            <th>VALID UNTIL</th>
                            <th>BANNER STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item of list_banner" :key="item.id">
                            <td class="center">{{ item.BANNER_NAME }}</td>
                            <td class="center">{{ item.BROADCAST_SCHEDULE }}</td>
                            <td class="center"><label class="label-green">{{ item.VALID_FROM }}</label></td>
                            <td class="center"><label class="label-green">{{ item.VALID_UNTIL }}</label></td>
                            <td class="center">
                                <div v-if="item.BANNER_STATUS === 1">
                                    <label class="label-green">Active</label>
                                </div>
                                <div v-if="item.BANNER_STATUS === 2">
                                    <label class="label-red">Inactive</label>
                                </div>
                            </td>
                            <td class="center">
                                <div class="mt5">
                                    <router-link to="/edit-banner">
                                        <img src="../../assets/icons/edit.svg">
                                    </router-link>
                                </div>
                                <div class="mt5">
                                    <router-link to="/detail-banner">
                                        <img src="../../assets/icons/detail.svg">
                                    </router-link>
                                </div>
                                <div class="mt5">
                                    <img src="../../assets/icons/delete.svg">
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import Menu from "../../components/menu.vue"

export default {
	name: 'list-banner',
	components: {
		Menu
	},
    data(){
        return {
            current_date:
            list_banner [
                {
                    id: "1",
                    BANNER_NAME: "NEW PHONE",
                    BROADCAST_SCHEDULE: "Senin",
                    VALID_FROM: "01-06-2021",
                    VALID_UNTIL: "03-06-2021",
                    BANNER_STATUS: 1
                },
                {
                    id: "2",
                    BANNER_NAME: "FLASHSALE PHONE",
                    BROADCAST_SCHEDULE: "Kamis",
                    VALID_FROM: "04-06-2021",
                    VALID_UNTIL: "06-06-2021",
                    BANNER_STATUS: 2
            
                },
                {
                    id: "3",
                    BANNER_NAME: "BOBI GUNSHOP",
                    BROADCAST_SCHEDULE: "Minggu",
                    VALID_FROM: "23-11-2023",
                    VALID_UNTIL: "01-02-2024",
                    BANNER_STATUS: 2
    
                },
                {
                    id: "4",
                    BANNER_NAME: "PIKIH'S PHONE",
                    BROADCAST_SCHEDULE: "rabu",
                    VALID_FROM: "05-05-2019",
                    VALID_UNTIL: "26-09-2019",
                    BANNER_STATUS: 2
                
                },
                {
                    id: "5",
                    BANNER_NAME: "SHOOPE X",
                    BROADCAST_SCHEDULE: "Selasa",
                    VALID_FROM: "17-10-2021",
                    VALID_UNTIL: "01-01-2022",
                    BANNER_STATUS: 1
                    
                }
            ]
        }
    }
}
</script>