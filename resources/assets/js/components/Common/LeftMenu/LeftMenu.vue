<template>
  <div class="menu-wrap">
    <aside>
      <nav class="sec-menu" :style="{width: menu2_width + 'px'}">
        <div class="menu2-close-icon" @click='toggle2'> 
          <span :style="menu2_close?'border-radius: 50%;width: 3px;':'border-radius: 0;width: 30px;'" class='f'></span>
          <span :style="menu2_close?'border-radius: 50%;width: 3px;':'border-radius: 0;width: 30px;'" class='s'></span>
          <span :style="menu2_close?'border-radius: 50%;width: 3px;':'border-radius: 0;width: 30px;'" class='t'></span>
        </div> 
        <ul>
          <li v-for="(item,index) in menu_list" v-if="item.show" :key="index">
            <div class="fr">
              <a
                v-if="$route.matched.length===3"
                v-bind:class="index==$store.state.leftmenu.activeIndex?'active':''" 
                @click="redirect(item,index)"
              >
                <el-tooltip :disabled="!menu2_close" effect="dark" :content="item.label" placement="right" >              
                  <span class="icon-wrap">
                    <i></i>
                  </span>
                </el-tooltip>                
                <span class="label">{{item.label}}</span>
              </a>
              <router-link
                v-if="$route.matched.length==2"
                :to="item.path"
                active-class="active" 
              >
                <el-tooltip :disabled="!menu2_close" effect="dark" :content="item.label" placement="right" >
                  <span class="icon-wrap">
                    <i></i>
                  </span>
                </el-tooltip>
                <span class="label">{{item.label}}</span>
              </router-link>
            </div>
          </li>
        </ul>
      </nav>
      <nav
        class="thr-menu" 
        v-if="sub_menu_list.length" 
        :style="{width: menu3_width + 'px',left:menu3_left + 'px'}"
      >
        <a href='javascript:;' class='menu3-close-icon' @click='toggle3'>
          <i style="font-size: 12px" :class="menu3_close?'el-icon-arrow-right':'el-icon-arrow-left'"></i>
        </a> 
        <ul>
          <li v-for="sub_item in sub_menu_list" v-if="sub_item.show">
            <router-link active-class="sub-is-active" :to="sub_item.path">{{sub_item.label}}</router-link>
          </li>
        </ul>
      </nav>
    </aside>
  </div>
</template>

<script>
  //设置菜单默认参数
  const [menu2_open_width,menu2_close_width,menu3_open_width,menu3_close_width] = [150,50,150,0];      
  export default {
    name:"left-menu",
    data() {
      return {
        menu_list: [],
        sub_menu_list: [],
        menu2_close: false, 
        menu3_close: false,  
        menu2_width: menu2_open_width,
        menu3_width: menu3_open_width,
        menu3_left:  menu2_open_width,
      }
    },
    created(){
      this.updateCurMenu();
    },
    methods:{
      updateCurMenu(to){
        const route = to || this.$route;

        const hasMenu3 = this.hasMenu3()
        if(hasMenu3){
          this.setContentMargin(this.menu2_width+this.menu3_width);
        }else{
          this.setContentMargin(this.menu2_width);
        }

        //遍历二级菜单
        if (route.matched.length) {
          const rootPath = route.matched[0].path,
            fullPath = route.path;
          const routes = this.$router.options.routes;
          for (let i = 0; i < routes.length; i++) {
            if (routes[i].path === rootPath && routes[i].show) {
              this.menu_list = routes[i].children;//二级菜单
              break;
            }
          }

          // 匹配三级菜单
          if (route.matched.length === 3){
            const metchd_path1 = route.matched[0].path;
            const metchd_path2 = route.matched[1].path;
            const metchd_path3 = route.matched[2].path;
            for(let i=0; i<routes.length; i++){
              if(routes[i].path == metchd_path1){
                for(let j=0; j<routes[i].children.length; j++){
                  if((routes[i].path + '/' + routes[i].children[j].path) == metchd_path2){
                    this.sub_menu_list = routes[i].children[j].children;
                  }
                }
              }
            }
          }else{
            this.sub_menu_list = [];
          }
        }else{
          this.$router.push('/404');
        }
      },
      hasMenu3(){
        const l = this.$route.matched.length;
        if(l===3){
          return true;
        }else{
          return false;
        }
      },
      handleHover(item){
        // console.log(item);
        this.sub_menu_list = item.children;
      },
      handleOut(){
        // console.log(item);
        this.sub_menu_list = this.menu_list[this.activeIndex].children;
      },
      redirect(item,index){
        this.$store.dispatch('set_active_index',index);
        this.$router.push({path: item.redirectPath});
      },
      toggle2(){
        this.menu2_close = !this.menu2_close;
        this.menu2_width = this.menu2_close?menu2_close_width:menu2_open_width;
        this.menu3_left = this.menu2_width;
      },
      toggle3(){
        this.menu3_close = !this.menu3_close;
        this.menu3_width = this.menu3_close?menu3_close_width:menu3_open_width;
      },
      setContentMargin(marginLeft){
        this.$store.dispatch('set_content_margin',marginLeft);
      }
    },
    watch:{
        $route(to,from){
          this.updateCurMenu(to);
        },
        menu2_close(){
          const hasMenu3 = this.hasMenu3()
          if(hasMenu3){
            this.setContentMargin(this.menu2_width+this.menu3_width);
          }else{
            this.setContentMargin(this.menu2_width);
          }
        },
        menu3_close(){
          this.setContentMargin(this.menu2_width+this.menu3_width);
        }
    }
  }
</script>

<style scoped lang='less'>
  .menu-wrap{
    position: fixed;
    float: left;
    top: 56px;
    height: 100%;
    .sec-menu{
      position: fixed;
      float: left;
      height: 100%;
      width: 150px;
      transition: width .5s;
      box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1);
      li{
        clear: both;
        height: 40px;
        margin: 10px 0;
        cursor: pointer;
        margin: 10px 0;
        transition: border-left 0.1s, background-color 0.3s;
        overflow: hidden;
        .fr{
          /*float: right;*/
          a{
            display: block;
            overflow: hidden;
            line-height: 40px;
            .icon-wrap{
              display: block;
              float: left;
              width: 50px;
              i{
                display: block;
                /*float: left;*/
                margin: 5px auto;
                width: 30px;
                height: 30px;
                background: #eee;
              }
            }
            .label{
              display: block;
              float: left;
              width: 100px;
              text-align: left;
              color: #444;
            }
          }
        }
        &:hover{
          background-color: #00d1b2;
          /*border-left: 3px solid #666;*/
        }
        &:first-child{
          /*margin-top: 50px;*/
        }; 
      }
    }
    .thr-menu{
      position: fixed;
      left: 150px;
      float: left;
      height: 100%;
      width: 150px;
      box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1);
      transition: width .5s,left .5s;
      li{
        clear: both;
        margin: 10px 0;
        transition: background-color 0.3s;
        text-align: center;
        overflow: hidden;
        a{
          display: block;
          height: 40px;
          line-height: 40px;
          color: #444;
          overflow: hidden;
        }
        &:hover{
          background-color: rgba(1,204,178,0.6);
        }
        &:first-child{
          margin-top: 39px;
        }; 
      }
    }
  }
  a{
    text-decoration: none;
  }
  .active,.sub-is-active{
    color: #fff;
    background-color: rgba(1,204,178,0.6);
  }
  .menu3-close-icon{
    position: absolute;
    top: 50%;
    right: -11px;
    margin-top: -18px;
    width: 12px;
    background: #dfdfdf;
    height: 36px;
    line-height: 36px;
    border-radius: 2px 0 0 2px;
    color: #9b9b9b;
  }
  .menu2-close-icon{
    margin: 10px auto 0;
    text-align: center;
    cursor: pointer;
  }
  .f,.s,.t{
    display: block;
    height: 3px;
    margin: 5px auto;
    clear: both;
    background-color: #dfdfdf; 
    transition: border-radius .5s,width .5s;
  }
  .f{
    background-color: black;
    /*width: 15px; */
  }
  .s{
    background-color: red;
    /*width: 20px; */
  }
  .t{
    background-color: violet;
    /*width: 25px;*/
  }
</style>