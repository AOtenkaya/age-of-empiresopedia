<template>
  <div class="navigation">
    <img class="navigation__icon" :src="require('@/assets/images/age-of-2-icon.png')" height="35" width="35"/>

    <h1 class="navigation__title">{{ pageTitle }}</h1>

    <div class="navigation__links">
      <router-link v-for="(link,index) in routerLinks" :key="index" :to="link.address">{{ link.text }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  computed: {
    pageName() {
      return this.$route.name || 'home';
    },
    pageTitle() {
      const pageTitles = {
        unitList: 'Units Page',
        unitDetail: 'Unit Detail Page',
        home: 'Home Page',
      };
      return pageTitles[this.pageName];
    },
    routerLinks() {
      const routerLinksMap = {
        unitList: [
          { address: '/', text: 'Home' }
        ],
        unitDetail: [
          { address: '/', text: 'Home' },
          { address: '/units', text: 'Units' },
        ],
        home: [
          { address: '/units', text: 'Units' }
        ],
      };
      return routerLinksMap[this.pageName];
    }
  }
};
</script>

<style lang="scss" scoped>
  .navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    height: 70px;
    background: #333;

    :last-child {
      display: flex;
      justify-content: flex-end;
    }

    &__icon {
      @media screen and (max-width: 425px) {
        display: none;
      }
    }

    &__title {
      color: grey;

      @media screen and (max-width: 425px) {
        font-size: 1.5em;
      }
    }

    &__links > *{
      margin-inline: 5px;
      color: grey;
    }
  }
</style>
