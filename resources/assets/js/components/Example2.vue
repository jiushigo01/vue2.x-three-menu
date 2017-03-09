<template>
    <div class="home">
        <head-nav></head-nav>
        A3
    </div>
</template>
<script>
    import Common from '../layouts/';
    export default {
        name: 'home',
        components: Common
    }
</script>
<style scoped lang='less'>
    .left-fixed-right-auto{
        display: flex;
    }
    .content{
        background: #FFF;
        padding: 16px;
    }
    .right-content{
        margin-bottom: 60px;
    }
</style>