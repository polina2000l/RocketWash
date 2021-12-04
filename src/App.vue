
<template>
  <div class="header">
    <div class="container">
        <div class="header__inner">
            
            <div class="nav">
                <router-link to="/">Главная</router-link> 
                <router-link to="/about">О нас</router-link>
                <router-link to="/price">Цены</router-link> 
                <router-link to="/service">Услуги</router-link>
                <router-link to="/team">специалисты</router-link> 
            </div>
        </div>
    </div>
    <router-view />
     <!-- Footer -->
    <div class="footer">
        <div class="container">
            <div class="footer__inner">
                <div class="footer__block">
                    <div class="footer__title">Адрес</div>
                    <div class="footer__address">
                        <div>Россия, Город Белгород</div>
                        <div>Улица Щорса 21</div>
                    </div>
                </div>
                <div class="footer__block">
                    <div class="footer__title">Немного о нашей студии</div>
                    <div class="footer__text">
                        <p>Работаем в данной сфере более 5 лет. Все наши специалисты высоко квалифицированные, а средства лучшего качества на рынке.</p>
                    </div>
                </div>
                <div class="footer__block">
                    <div class="footer__title">Контакты</div>
                    <div class="footer__text">
                        <p>Телефон: +7-910-816-16-08</p>
                        <p>Почта: rocket_wash@gmail.com</p>
                    </div>
                </div>
            </div><!-- /.footer__inner -->

        </div><!-- /.container -->

        <div class="copyright">
            <div class="container">
                <div class="copyright__text">
                    <div>Copyright © 2021 Polina Litvinova PV-41. All Rights Reserved</div>
                </div>
            </div>
        </div>
    </div>
 </div>
</template>

<script>
import VBtn from './components/v-btn.vue'
import vMainWrapper from './components/v-main-wrapper.vue'

export default {
  name: 'app', 
  components: {
    vMainWrapper,
    VBtn
  }, 
  data(){
    return{
      message: 'Hello Vue!'
    }
  }
}

</script>
<style scoped>

/* Container
===================*/
.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
}


/* Header
===================*/

.header {
    width: 100%;
    height: 0px;

    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
}

.header__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 0;
}


/* Nav
===================*/

.nav {
    display: flex;
    font-size: 20px;
    font-weight: 10;
    text-transform: uppercase;
}

.nav a {
    margin-left: 50px;

    color: rgb(233, 12, 12);
    text-decoration: none;
    opacity: .75;
    font-family: Georgia, serif;
    transition: opacity .1s linear;
}

.nav a.first-child {
    margin-left: 0;
}

.nav a.hover {
    opacity: 1;
}

/* Footer
===================*/

.footer {
    background-color: #3a3e64;
}

.footer__inner {
    display: flex;
    flex-wrap: wrap;
    padding: 30px 0;
}

.footer__block {
    width: 30.33333%;
    padding: 0 15px;

    text-align: center;
}

.footer__title {
    margin-bottom: 10px;

    font-size: 14px;
    font-weight: 700;
    color: #fff;
    text-transform: uppercase;
}

.footer__address {
    font-size: 14px;
    line-height: 1.5;
    font-style: normal;
    color: rgba(255, 255, 255, .5);
}

.footer__text {
    font-size: 14px;
    line-height: 1.5;
    color: rgba(255, 255, 255, .5);
}



/* Copyright
===================*/

.copyright {
    padding: 20px 0;

    background-color: #313454;
}

.copyright__text {
    text-align: center;
    font-size: 14px;
    line-height: 1.5;
    color: #808080;
}

.copyright__text span {
    color: #fff;
}
</style>
