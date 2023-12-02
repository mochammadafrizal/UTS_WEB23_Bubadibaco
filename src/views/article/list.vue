<template>
    <div>
        <Menu/>
        <div class="container">
            <h1 class="m0">Article</h1>
            <div class="row">
                <div class="col">
                    <p class="mt5 mb20 tc-green">manage your Article</p>
                </div>
                <div class="col flex">
                    <router-link to="/add-article">
                        <button class="bt-green"> Add</button>
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
                            <th>ARTICLE NAME</th>
                            <th>BROADCAST SCHEDULE</th>
                            <th>VALID FROM</th>
                            <th>VALID UNTIL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item of list_Article" :key="item.id">
                            <td class="center">{{ item.ARTICLE_NAME }}</td>
                            <td class="center">{{ item.BROADCAST_SCHEDULE }}</td>
                            <td class="center"><label class="label-green"></label>{{ item.VALID_FROM }}</td>
                            <td class="center"><label class="label-green"></label>{{ item.VALID_UNTIL }}</td>
                            <td class="center">
                                <div class="mt5">
                                    <router-link to="/edit-Article">
                                        <img src="../../assets/icons/edit.svg">
                                    </router-link>
                                </div>
                                <div class="mt5">
                                    <router-link to="/detail-Article">
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
	name: 'list-Article',
	components: {
		Menu
	},
    data(){
        return {
            current_date:
            list_Article [
                {
                    id: "1",
                    ARTICLE_NAME: "NEW PHONE",
                    BROADCAST_SCHEDULE: "Senin",
                    VALID_FROM: "01-06-2021",
                    VALID_UNTIL: "03-06-2021",
                },
                {
                    id: "2",
                    ARTICLE_NAME: "FLASHSALE PHONE",
                    BROADCAST_SCHEDULE: "Kamis",
                    VALID_FROM: "04-06-2021",
                    VALID_UNTIL: "06-06-2021",
            
                },
                {
                    id: "3",
                    ARTICLE_NAME: "BOBI GUNSHOP",
                    BROADCAST_SCHEDULE: "Minggu",
                    VALID_FROM: "23-11-2023",
                    VALID_UNTIL: "01-02-2024",
    
                },
                {
                    id: "4",
                    ARTICLE_NAMENAME: "PIKIH'S PHONE",
                    BROADCAST_SCHEDULE: "rabu",
                    VALID_FROM: "05-05-2019",
                    VALID_UNTIL: "26-09-2019",
                
                },
                {
                    id: "5",
                    ARTICLE_NAME: "SHOOPE X",
                    BROADCAST_SCHEDULE: "Selasa",
                    VALID_FROM: "17-10-2021",
                    VALID_UNTIL: "01-01-2022",
                    
                }
            ]
        }
    }
}
</script>