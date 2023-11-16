<template>
  <div>
    <div class="ma-0 pa-0" style="width:100%;height:8vh;">
      <v-col cols="12" class="ma-0 pa-0 mb-1 mt-1">
        <div>
            <v-slide-group
                    v-model="gift_model"
                    class="pa-0 preview_img"
                    value="0"
            >
                <v-slide-item
                        v-for="(img, i) in own_data.own_gift_datas"
                        :key="i"
                >
                    <v-card 
                            class="ma-1"
                            height="30"
                            width="200"
                    >
                        
                    </v-card>
                </v-slide-item>
            </v-slide-group>
        </div>
      </v-col>

    </div>
    

    <div id="map" style="width:100%;height:85vh;"></div>
  </div>
</template>

<script>
  import HelloWorld from '../components/HelloWorld'

  export default {
    name: 'Home',

    components: {
      HelloWorld,
    },

    data: ()=>({
      gift_model: null,
      own_data: {
                    own_money: 13200,
                    own_gift_datas: [
                        {
                            src: 'imgs/home_gift.png',
                        },
                        {
                            src: 'imgs/home_gift.png',
                        },
                        {
                            src: 'imgs/home_gift.png',
                        },
                        {
                            src: 'imgs/home_gift.png',
                        },
                    ],
                },

      mapContainer: '',
      // 제주 33.450701,126.570667
      // 철산역 37.4758842,126.8686424
      lat: 37.4758842,
      lng: 126.8686424,
      map: '',
      zoomControl: null,
    }),

    methods: {
      loadKakaoMap() {
        // console.log('window.kakao : ', window.kakao)
        // console.log('window.kakao.maps : ', window.kakao.maps)
        if (window.kakao && window.kakao.maps) {
          this.initKakaoMap();
          return;
        }

        const script = document.createElement('script');

        script.onload = () => kakao.maps.load(this.initKakaoMap);
        script.src = 'http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=' + process.env.VUE_APP_KAKAO_MAP_KEY;

        document.head.appendChild(script);
      }, // loadKakaoMap

      initKakaoMap() {
        const mapOption = {
          center: new kakao.maps.LatLng(this.lat, this.lng),
          level: 3,
        }

        this.map = new kakao.maps.Map(this.mapContainer, mapOption);

        // if (this.map.mapTypeId) {
        //   this.map.removeListener('idle', this.googleZoomEventHandler);
        // }
        
        //kakao.maps.event.addListener(this.map, 'zoom_changed', this.kakaoZoomEventHandler);
        kakao.maps.event.addListener(this.map, 'idle', this.kakaoZoomEventHandler);
      },

      kakaoZoomEventHandler() {
        const level = this.map.getLevel();



        // if (level > 13) {
        //   this.clearMap();
        //   this.loadGoogleMap();
        //   return;
        // }
        console.log('Kakao Handler')
      },


    }, // methods 

    mounted() {
      console.log('env : ', process.env.VUE_APP_KAKAO_MAP_KEY)
      
      this.mapContainer = document.getElementById('map');
      this.loadKakaoMap();   

    },
  }
</script>

<style>
/* body, html {
  height: 100%;
  width: 100%;
}

div#map {
  width: 100%; height: 100%;
} */
</style>
