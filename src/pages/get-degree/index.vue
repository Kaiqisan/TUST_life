<template>
    <div class="main">
        <h1>二手物品新旧程度的判断方法</h1>
        <p class="i">全新：</p>
        <span>商品原包装齐全，商品完好未使用，原装配件齐全。</span>
        <p class="i">九九新：</p>
        <span>极少使用或者是展示机，原装配件齐全，肉眼见不到使用的痕迹，无任何功能缺陷，能正常使用、无维修史。</span>
        <p class="i">九成新：</p>
        <span>外观有轻微花痕，但外观完整，无生锈、无掉漆和外观损伤，无任何功能缺陷，不影响正常使用、无维修史。</span>
        <p class="i">八成新：</p>
        <span>有少许划痕或者明显的使用痕迹，无生锈、无掉漆和外观损伤，无维修史，无任何功能缺陷，不影响正常使用。</span>
        <p class="i">七成新：</p>
        <span>外观磨损，有生锈或掉漆，有维修史,现无任何功能缺陷，不影响正常使用。</span>
        <p class="i">六成新及以下：</p>
        <span>外观严重磨损，可能有生锈或大面积掉漆，有维修史,辅助功能有缺陷，可能影响正常使用。</span>
        <p class="i">无法判断的新旧程度：</p>
        <span>适用于某些特殊物品或一次性物品，比如食品，活物，虚拟商品等</span>
    </div>
</template>

<script>
    export default {
        name: 'get-degree',
        onLoad() {

        }
    }
</script>

<style lang="scss" scoped>
    .main {
        padding: 50px 25px 25px 25px;

        h1 {
            font-size: 24px;
            margin-bottom: 25px;
        }

        span {
            display: inline-block;
            font-size: 15px;
            line-height: 24px;
        }
    }

    .i {
        font-weight: bold;
        margin-top: 8px;
        font-size: 17px;
    }
</style>