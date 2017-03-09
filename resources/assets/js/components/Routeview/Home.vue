<template>
    <div class="home">
        <head-nav></head-nav>
        <div class="left-fixed-right-auto">
            <left-menu pr="propstest"></left-menu>
            <div class="right-content">
                <div class="content" :style="{marginLeft: $store.state.leftmenu.marginLeft+'px'}">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Common from '../Common/';
    export default {
        name: 'home',
        components: Common
    }
</script>
<style scoped lang='less'>
    .left-fixed-right-auto{
        /*display: flex;*/
    }
    .content{
        background: #FFF;
        padding: 72px 16px 16px;
        transition: margin-left .5s;
    }
    .right-content{
        margin-bottom: 60px;
    }
</style>