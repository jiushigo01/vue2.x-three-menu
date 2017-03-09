<template>
  <div class="flexstart">  
    <nav class="nav has-shadow">
      <div class="container">
        <div class="nav-left">
          <a class="nav-item">
            <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo">
          </a>

          <router-link
            v-for="(item,index) in $router.options.routes"
            v-if="item.show"
            class="nav-item is-tab"
            active-class="is-active"
            :to="item.path"
          >
            {{item.label}}
          </router-link>
          
        </div>
        <div class="nav-right nav-menu">
          <a class="nav-item is-tab">
            <figure class="image is-16x16" style="margin-right: 8px;">
              <img src="http://bulma.io/images/jgthms.png">
            </figure>
            Profile
          </a>
          <a class="nav-item is-tab">Log out</a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    name:'head-nav',
    watch:{
      $route(to,from){
        let toPath = to.path;
        let fromPath = from.path;
        const toPathStr = toPath.split('/')[1];
        const fromPathStr = fromPath.split('/')[1];
        if(toPathStr !== fromPathStr){
          this.$store.dispatch('set_active_index', 1);
        }
      }
    }
  }
</script>
<style scoped>
  .flexstart{
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 999;
    background-color: #fff;
    align-items: flex-start;
  }
  .nav {
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    background-color: white;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    min-height: 3.5rem;
    position: relative;
    text-align: center;
    z-index: 2;
  }
  .has-shadow {
      box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1);
  }
  .container {
      -webkit-box-align: stretch;
      -ms-flex-align: stretch;
      align-items: stretch;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      min-height: 3.5rem;
      width: 75%;
      margin: 0 auto;
  }
  .nav-left {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: start;
      -ms-flex-pack: start;
      justify-content: flex-start;
      overflow: hidden;
      overflow-x: auto;
      white-space: nowrap;
  }
  .nav-item {
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-flex: 0;
      -ms-flex-positive: 0;
      flex-grow: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
      font-size: 1rem;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      padding: 0.5rem 0.75rem;
  }
  .nav-item {
      color: #7a7a7a;
      cursor: pointer;
      text-decoration: none;
  }
  .nav-item:hover {
    border-bottom: 1px solid #00d1b2;
    border-top-color: transparent;
  }
  .nav-item img {
      max-height: 1.75rem;
      max-width: 100%;
  }
  .is-active {
      border-bottom: 3px solid #00d1b2;
      color: #00d1b2;
      padding-bottom: calc(0.5rem - 3px);
  }
  .is-tab {
      /*border-bottom: 1px solid transparent;*/
      border-top: 1px solid transparent;
      /*padding-bottom: calc(0.5rem - 1px);*/
      padding-left: 1rem;
      padding-right: 1rem;
      padding-top: calc(0.5rem - 1px);
  }
  .nav-right {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
  }
  .nav-right {
      -webkit-box-pack: end;
      -ms-flex-pack: end;
      justify-content: flex-end;
  }
  .nav-left, .nav-right {
      -webkit-box-align: stretch;
      -ms-flex-align: stretch;
      align-items: stretch;
      -ms-flex-preferred-size: 0;
      flex-basis: 0;
      -webkit-box-flex: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
      -ms-flex-negative: 0;
      flex-shrink: 0;
  }
  .image.is-16x16 {
      height: 16px;
      width: 16px;
  }
  .image {
      display: block;
      position: relative;
  }
  .nav-item img {
      max-height: 1.75rem;
  }
  .image img {
      display: block;
      height: auto;
      width: 100%;
      max-width: 100%;
  }
</style>