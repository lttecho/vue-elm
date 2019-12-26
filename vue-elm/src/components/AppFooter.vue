<template>
  <div>
    <footer class="aui-bar aui-bar-tab" id="footer">
      <div class="aui-bar-tab-item" tapmode v-for="item in userItems" :key="item.itemID">
        <i class="aui-iconfont" :class="[item.icon,{'aui-active':item.isActive}]" @click="chooseItem(item)"></i>
        <div class="aui-bar-tab-label" :class="{'aui-active':item.isActive}"  @click="chooseItem(item)">{{item.name}}</div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'AppFooter',
  data () {
    return {
      userItems: [
        {
          name: '外卖',
          itemID: 0,
          icon: 'aui-icon-home',
          isActive: false
        },
        {
          name: '生活',
          itemID: 1,
          icon: 'aui-icon-star',
          isActive: false
        },
        {
          name: '订单',
          itemID: 2,
          icon: 'aui-icon-cart',
          isActive: false
        },
        {
          name: '我的',
          itemID: 3,
          icon: 'aui-icon-my',
          isActive: true
        }
      ]
    }
  },
  methods: {
    chooseItem (activedItem) {
      return this.userItems.forEach((item) => {
        if (activedItem.itemID === item.itemID) {
          item.isActive = true
        } else {
          item.isActive = false
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
