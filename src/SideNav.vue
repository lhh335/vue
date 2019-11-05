<template>
  <div>
    <p class="add-advert">新建广告</p>
    <ul>
      <li
        v-for="(item, index) in menus"
        class="menu-level-1"
        @click="onClickMenuLevel1(index)"
        v-bind:key="index"
      >
        <div v-bind:class="{'menu-level-1-content': true, active: index === active_menu[0]}">
          <span class="hidden-bar" v-bind:class="{'active-bar': index === active_menu[0]}"></span>
          <p
            v-bind:class="{'menu-level-1-text': true, 'active': index === active_menu[0]}"
          >{{item.label}}</p>
        </div>
        <ul v-if="index === active_menu[0] && item.children && item.children.length > 0">
          <li
            v-for="(childItem, indexs) in item.children"
            v-bind:key="indexs"
            class="menu-level-2"
            v-bind:class="{active: indexs === active_menu[1]}"
            @click.stop="onClickMenuLevel2(index, indexs)"
          >{{childItem.label}}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { mock_menus } from "./utils/config";

export default {
  name: "",
  data() {
    return {
      menus: mock_menus,
      active_menu: [0, 0]
    };
  },
  mounted() {},
  methods: {
    onClickMenuLevel1(menuLevel1) {
      let menuLevel2 =
        menuLevel1 === this.active_menu[0] ? this.active_menu[1] : 0;
      this.active_menu = [menuLevel1, menuLevel2];
    },
    onClickMenuLevel2(menuLevel1, menuLevel2) {
      this.active_menu = [menuLevel1, menuLevel2];
    }
  }
};
</script>

<style scoped>
.add-advert {
  margin: 0 auto 35px;
  width: 92px;
  height: 30px;
  background: linear-gradient(108deg, #5d50db, #e682f6);
  color: #fff;
  border-radius: 15px;
  line-height: 30px;
  cursor: pointer;
}

.menu-level-1-content {
  display: flex;
  align-items: center;
}

.menu-level-1-text {
  color: rgba(255, 255, 255, 0.4);
  margin-left: 40px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
}

.menu-level-1-text:hover {
  color: #fff;
}

.menu-level-1-content.active {
  background: #33214f;
}

.menu-level-1-text.active {
  color: #fff;
  font-size: 14px;
}

.active-bar {
  width: 6px;
  height: 50px;
  background: #6a61ff;
}

.hidden-bar {
  width: 6px;
  height: 50px;
}

.menu-level-2 {
  height: 50px;
  color: rgba(255, 255, 255, 0.4);
  font-size: 14px;
  cursor: pointer;
  line-height: 50px;
  padding-left: 46px;
  box-sizing: border-box;
  text-align: left;
}

.menu-level-2.active {
  color: #fff;
}

.menu-level-2:hover {
  color: #fff;
}
</style>