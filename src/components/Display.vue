<template>
  <div class="display-container">
    <div class="filter-container">
      <input
        v-model="keyword"
        type="text"
        class="search-input"
        placeholder="Search by keyword"
      />
      <select class="search-select" v-model="selected">
        <option disabled value="">Search by category</option>
        <option v-for="selector in selectorList" :key="selector.id">
          {{ selector.label }}
        </option>
      </select>
    </div>
    <transition-group class="product-list-container" name="product-list">
      <li
        v-for="product in filteredProductList"
        :key="product.id"
        class="product-card"
      >
        <div>
          <font-awesome-icon
            :icon="product.image"
            class="product-image"
            :style="{ color: product.style }"
          />
        </div>
        <h2 class="product-title">{{ product.title }}</h2>
        <p class="product-subtitle">{{ product.subtitle }}</p>
        <p>${{ product.price }}.99</p>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  props: ["productList"],
  data() {
    return {
      selectorList: [
        { id: "0", label: "Price lowest to highest" },
        { id: "1", label: "Price highest to lowest" },
        { id: "2", label: "Title A to Z" },
        { id: "3", label: "Title Z to A" }
      ],
      selected: "",
      keyword: ""
    };
  },
  computed: {
    filteredProductList() {
      let newList = [];
      for (let i in this.productList) {
        let product = this.productList[i];
        let keyword = this.keyword.toUpperCase();
        let productUppercase = product.title.toUpperCase();
        if (productUppercase.indexOf(keyword) !== -1) newList.push(product);
      }
      if (this.selected == "Price lowest to highest") {
        newList.sort((a, b) => {
          if (parseInt(a.price) < parseInt(b.price)) return -1;
          if (parseInt(a.price) > parseInt(b.price)) return 1;
          return 0;
        });
      }
      if (this.selected == "Price highest to lowest") {
        newList.sort((a, b) => {
          if (parseInt(a.price) < parseInt(b.price)) return 1;
          if (parseInt(a.price) > parseInt(b.price)) return -1;
          return 0;
        });
      }
      if (this.selected == "Title A to Z") {
        newList.sort((a, b) => {
          if (a.title < b.title) return -1;
          if (a.title > b.title) return 1;
          return 0;
        });
      }
      if (this.selected == "Title Z to A") {
        newList.sort((a, b) => {
          if (a.title < b.title) return 1;
          if (a.title > b.title) return -1;
          return 0;
        });
      }
      return newList;
    }
  }
};
</script>

<style scoped>
.filter-container {
  text-align: center;
  display: flex;
  justify-content: center;
  margin: 2%;
}
.filter-container {
  flex-direction: column;
  align-items: center;
  padding: 0;
  padding-top: 2%;
  margin: 0;
}
.search-input,
.search-select {
  width: 25%;
  font-size: 20px;
  margin-bottom: 2%;
}
h2,
p {
  margin: 0;
  padding: 0;
}
.product-list-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: center;
}
.product-card {
  border: 4px solid rgb(129, 222, 230);
  border-radius: 20px;
  text-align: center;
  list-style: none;
  padding: 1%;
  margin: 1%;
}
.product-title {
  font-weight: bold;
}
.product-subtitle {
  font-style: italic;
}
.product-image {
  width: 50%;
  height: auto;
  filter: drop-shadow(0 0 0.4rem black);
}
.product-list-move {
  transition: transform 1s;
}
.product-list-enter-active,
.product-list-leave-active {
  transition: all 500ms;
}
.product-list-enter,
.product-list-leave-to {
  opacity: 0;
}
.product-list-leave-active {
  position: absolute;
}
</style>
