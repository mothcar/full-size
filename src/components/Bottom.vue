<template>
    <v-bottom-navigation
            :value="value"
            color="#5EB4F9"
            fixed
            grow
    >
        <v-btn @click="bottomChange(0)">
            <span>홈</span>
<!--            <v-icon>home</v-icon>-->
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16.958" height="18.86" viewBox="0 0 16.958 18.86">
                    <g id="Icon_feather-home" transform="translate(.4 .507)">
                        <path :class="value==0 ? 'bottom_active':'bottom_noactive'" class="cls-1" id="패스_1663" d="M4.5 9.284L12.579 3l8.079 6.284v9.874a1.8 1.8 0 0 1-1.8 1.8H6.3a1.8 1.8 0 0 1-1.8-1.8z" transform="translate(-4.5 -3)"/>
                        <path :class="value==0 ? 'bottom_active':'bottom_noactive'" class="cls-1" id="패스_1664" d="M13.5 26.977V18h5.386v8.977" transform="translate(-8.114 -9.023)"/>
                    </g>
                </svg>
            </span>
        </v-btn>

        <v-btn @click="bottomChange(1)">
            <span>판매</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20.815" height="18.266" viewBox="0 0 20.815 18.266">
                <g>
                    <path :class="value==1 ? 'bottom_active':'bottom_noactive'" class="cls-1" d="M15.571 5.011a1.342 1.342 0 0 0 1.416 1.253V8.77a1.342 1.342 0 0 1-1.416 1.253H1.416A1.342 1.342 0 0 1 0 8.77V6.264a1.342 1.342 0 0 0 1.416-1.253A1.342 1.342 0 0 0 0 3.759V1.253A1.342 1.342 0 0 1 1.416 0h14.155a1.342 1.342 0 0 1 1.416 1.253v2.506a1.342 1.342 0 0 0-1.416 1.252zM14.156 2.3a.671.671 0 0 0-.708-.626H3.539a.671.671 0 0 0-.708.626v5.426a.671.671 0 0 0 .708.626h9.909a.671.671 0 0 0 .708-.626z" transform="translate(.546 .546) rotate(-30 15.848 4.246)"/>
                </g>
            </svg>
        </v-btn>

        <!-- <v-btn @click="bottomChange(2)">
            <span>관심상품</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="19.564" height="17.166" viewBox="0 0 19.564 17.166">
                <path :class="value==2 ? 'bottom_active':'bottom_noactive'" class="cls-1 svg_stroke" d="M19.64 5.944a4.937 4.937 0 0 0-6.984 0L11.7 6.9l-.952-.952a4.938 4.938 0 1 0-6.984 6.984l.952.952 6.984 6.979 6.984-6.984.952-.952a4.937 4.937 0 0 0 0-6.984z" transform="translate(-1.923 -4.097)"/>
            </svg>
        </v-btn> -->

        <!-- <v-btn @click="bottomChange(3)">
            <span>제휴/가맹</span>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="19.206" height="17.161" viewBox="0 0 19.206 17.161">
                    <path :class="value==3 ? 'bottom_active':'bottom_noactive'" class="cls-1" d="M9.352 10l.809-5.368H5.954L4.2 9.229a1.613 1.613 0 0 0-.083.511 2.393 2.393 0 0 0 2.629 2.045A2.494 2.494 0 0 0 9.352 10zm3.964 1.789a2.393 2.393 0 0 0 2.629-2.049c0-.042 0-.084-.005-.124l-.52-4.989h-4.207l-.522 4.985v.128a2.393 2.393 0 0 0 2.629 2.045zm5.113 1.07V16.9H8.2v-4.039a4.3 4.3 0 0 1-1.461.254 4.216 4.216 0 0 1-.584-.05v6.492a1.435 1.435 0 0 0 1.43 1.432h11.457a1.436 1.436 0 0 0 1.432-1.432v-6.492a4.393 4.393 0 0 1-.584.05 4.249 4.249 0 0 1-1.461-.26zm4.008-3.626l-1.76-4.6h-4.205l.808 5.36a2.488 2.488 0 0 0 2.611 1.8 2.393 2.393 0 0 0 2.628-2.053 1.642 1.642 0 0 0-.082-.511z" transform="translate(-3.713 -4.227)"/>
                </svg>
            </span>
        </v-btn> -->

        <v-btn @click="bottomChange(4)">
            <span>내정보</span>
<!--            <v-icon>person</v-icon>-->
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="17.742" height="16.945" viewBox="0 0 17.742 16.945">
                <g id="그룹_3494" transform="translate(.4 .4)">
                    <circle :class="value==4 ? 'bottom_active':'bottom_noactive'" class="cls-1" id="타원_159" cx="4.613" cy="4.613" r="4.613" transform="translate(3.954)"/>
                    <path :class="value==4 ? 'bottom_active':'bottom_noactive'" class="cls-1 svg_stroke" id="빼기_1" d="M16.942 5.6H0a6.375 6.375 0 0 1 2.858-3.988A10.189 10.189 0 0 1 8.471 0a10.19 10.19 0 0 1 5.614 1.612A6.376 6.376 0 0 1 16.942 5.6z" transform="translate(0 10.544)"/>
                </g>
            </svg>
            </span>
        </v-btn>

    </v-bottom-navigation>
</template>

<script>
    export default {
        name: "Bottom",
        components: {

        },
        data(){
            return {
                value: null,
            }
        },
        created(){
            this.setInit();
        },
        methods:{
            setInit(){
                let main_page = this.$store.getters.getMainPage;
                if(main_page == null){
                    this.bottomChange(0);
                }else{
                    this.bottomChange(main_page);
                }
            },
            bottomChange(value){
                this.value = value;
                let path = null;

                if(value == 0){
                    path = '/';
                }else if(value == 1){
                    path = '/sale';
                }else if(value == 2){
                    path = '/favorite';
                }else if(value == 3){
                    path = '/partner';
                }else if(value == 4){
                    path = '/myinfo';
                }

                this.setMainPage(value, path);
                if(this.$route.path !== path){
                    this.$router.push(path);
                }
            },
            setMainPage(value, path){
                this.$store.commit(
                    {
                        type: "setMainPage",
                        main_page: value,
                    }
                );
                this.$store.commit(
                    {
                        type: "setMainPath",
                        main_path: path,
                    }
                );
            },
        }
    }
</script>

<style lang="scss">
    .v-item-group.v-bottom-navigation{
        border-radius: 20px 20px 0 0;
    }

</style>

<style lang="scss">

    .cls-1{
        fill:none;
        stroke-width:.8px;
    }
    .svg_stroke{
        stroke-linecap:round;
        stroke-linejoin:round;
    }
    .bottom_active{
        stroke:#5EB4F9;
    }
    .bottom_noactive{
        stroke:#a3a3a3;
    }
</style>

