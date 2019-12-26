<template>
  <div>
    <section class="aui-grid aui-margin-b-10">
      <div class="aui-row">
        <div class="aui-col-xs-10 aui-text-right aui-padded-10 aui-padded-r-0">
          <i class="aui-iconfont aui-icon-gear" style="font-size: 1rem"></i>
        </div>
        <div class="aui-col-xs-2 aui-padded-10">
          <i class="aui-iconfont aui-icon-comment" style="font-size: 1rem"></i>
        </div>
      </div>
      <div class="aui-row">
        <div class="aui-col-xs-8" style="text-align: left; padding-left: 1.5rem">
          <p style="font-size: 1.2rem;font-weight: 400;color: #000;">立即登录<i class="aui-iconfont aui-icon-right aui-padded-5" style="font-size: 0.5rem"></i></p>
          <p>饿不饿都上饿了么</p>
        </div>
        <div class="aui-col-xs-4">
          <span class="aui-iconfont aui-icon-camera"></span>
        </div>
      </div>
      <div class="aui-content">
        <div class="aui-col-xs-6">
          <button class="aui-btn aui-btn-primary" style="width: 6rem;padding: 0;color:#000">红包卡券</button>
        </div>
        <div class="aui-col-xs-6">
          <button class="aui-btn aui-btn-primary" style="width: 6rem;padding: 0;color:#000">钱包</button>
        </div>
      </div>
    </section>
    <section class="aui-content">
      <ul class="aui-list aui-list-in aui-margin-b-15">
        <li class="aui-list-item">
          <div class="aui-list-item-label-icon">
            <i class="aui-iconfont aui-icon-like aui-text-danger"></i>
          </div>
          <div class="aui-list-item-inner aui-list-item-arrow">
            <div class="aui-list-item-title">我的收藏</div>
          </div>
        </li>
        <li class="aui-list-item">
          <div class="aui-list-item-label-icon">
            <i class="aui-iconfont aui-icon-phone aui-text-danger"></i>
          </div>
          <div class="aui-list-item-inner aui-list-item-arrow">
            <div class="aui-list-item-title">我的客服</div>
          </div>
        </li>
        <li class="aui-list-item">
          <div class="aui-list-item-label-icon">
            <i class="aui-iconfont aui-icon-my aui-text-danger"></i>
          </div>
          <div class="aui-list-item-inner aui-list-item-arrow">
            <div class="aui-list-item-title">推荐有奖</div>
            <div style="color: gray">得15元</div>
          </div>
        </li>
        <li class="aui-list-item">
          <div class="aui-list-item-label-icon">
            <i class="aui-iconfont aui-icon-calendar aui-text-danger"></i>
          </div>
          <div class="aui-list-item-inner aui-list-item-arrow">
            <div class="aui-list-item-title">商务合作</div>
          </div>
        </li>
        <li class="aui-list-item">
          <div class="aui-list-item-label-icon">
            <i class="aui-iconfont aui-icon-laud aui-text-danger"></i>
          </div>
          <div class="aui-list-item-inner aui-list-item-arrow">
            <div class="aui-list-item-title">办卡有礼</div>
          </div>
        </li>
        <li class="aui-list-item">
          <div class="aui-list-item-label-icon">
            <i class="aui-iconfont aui-icon-star aui-text-danger"></i>
          </div>
          <div class="aui-list-item-inner aui-list-item-arrow">
            <div class="aui-list-item-title">3小时公益</div>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "UserHomePage",
  components: {}
}
</script>

<style scoped>
  .aui-btn {
    width: 30%;
    height: 3rem;
    background-color: white;
    padding: 1rem;
    border-radius: 10px;
  }
</style>
