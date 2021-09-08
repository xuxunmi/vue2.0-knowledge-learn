<template>
    <div>
        <!-- 具名插槽 -->
        <header>
            <slot name="header"></slot>
        </header>
        <main>
            <slot></slot>
        </main>
        <footer>
            <slot name="footer"></slot>
        </footer>
        <!-- 作用域插槽 -->
        <div class="child-slot">
            <slot :msg="msg" name="msg"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'childSlot',
    data() {
        return {
            msg: '我是Vue插槽'
        }
    },
}
</script>

<style lang="scss" scoped>

</style>