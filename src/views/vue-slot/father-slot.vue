<template>
    <div>
        <child-slot>
            <p slot="header">我是标题信息1</p>
            <p>主要内容1</p>
            <p>主要内容2</p>
            <p slot="footer">我是底部信息1</p>
        </child-slot>

        <div>=====================================</div>

        <child-slot>
            <template slot="header">
                <div>我是标题信息2</div>
            </template>
            <div>主要内容1</div>
            <div>主要内容2</div>
            <template slot="footer">
                <div>我是底部信息2</div>
            </template>
            
        </child-slot>

        <div>=====================================</div>

        <child-slot>
            <template slot-scope="props" slot="msg">
                <p>Hello，{{props.msg}}</p>
            </template>
        </child-slot>
    </div>
</template>

<script>
import childSlot from './child-slot.vue'
export default {
    components: {
        childSlot
    }
}
</script>

<style lang="scss" scoped>

</style>