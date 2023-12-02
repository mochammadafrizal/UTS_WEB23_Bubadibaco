<template>
    <div>
        <Menu/>
        <div class="container">
            <h1 class="m0">Notification</h1>
            <div class="row">
                <div class="col">
                    <p class="mt5 mb20 tc-green">manage your Notification</p>
                </div>
                <div class="col flex">
                    <router-link to="/add-notification">
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
                            <th>TITLE</th>
                            <th>BROADCAST SCHEDULE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item of list_notification" :key="item.id">
                            <td class="center">{{ item.name }}</td>
                            <td class="center">{{ item.username }}</td>
                            <td class="center">{{ item.email }}</td>
                            <td class="center">
                                <div v-if="item.role === 1">
                                    <label class="label-green">Super Admin</label>
                                </div>
                                <div v-if="item.role === 2">
                                    <label class="label-blue">Sales</label>
                                </div>
                                <div v-if="item.role === 3">
                                    <label class="label-yellow">Marketing</label>
                                </div>
                            </td>
                            <td class="center">
                                <div class="mt5">
                                    <router-link to="/edit-notification">
                                        <img src="../../assets/icons/edit.svg">
                                    </router-link>
                                </div>
                                <div class="mt5">
                                    <router-link to="/detail-notification">
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
	name: 'list-notification',
	components: {
		Menu
	},
    data(){
        return {
            current_date:
            list_notification [
                {
                    id: "1",
                    TITLE: "NEW PHONE",
                    BROADCAST_SCHEDULE: "Senin",

                },
                {
                    id: "2",
                    TITLE: "FLASHSALE PHONE",
                    BROADCAST_SCHEDULE: "Kamis",

                },
                {
                    id: "3",
                    TITLE: "BOBI GUNSHOP",
                    BROADCAST_SCHEDULE: "Minggu",
    
                },
                {
                    id: "4",
                    TITLE: "PIKIH'S PHONE",
                    BROADCAST_SCHEDULE: "rabu",
                    
                },
                {
                    id: "5",
                    TITLE: "SHOOPE X",
                    BROADCAST_SCHEDULE: "Selasa",
                 
                }
            ]
        }
    }
}
</script>