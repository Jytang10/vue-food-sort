<template>
  <div id="app">
    <Header />
    <Display :productList="productList" />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Display from "@/components/Display.vue";
const productList = [
  {
    id: 1,
    title: "Apple",
    subtitle: "Delicious red apple",
    price: "99",
    image: "apple-alt",
    style: "red"
  },
  {
    id: 2,
    title: "Carrot",
    subtitle: "Nutricious carrots",
    price: "58",
    image: "carrot",
    style: "orange"
  },
  {
    id: 3,
    title: "Lemon",
    subtitle: "Tangy lemons",
    price: "50",
    image: "lemon",
    style: "yellow"
  },
  {
    id: 4,
    title: "Hamburger",
    subtitle: "America's favorite food",
    price: "78",
    image: "hamburger",
    style: "brown"
  },
  {
    id: 5,
    title: "Pizza",
    subtitle: "Pizza Pizza",
    price: "10",
    image: "pizza-slice",
    style: "orange"
  },
  {
    id: 6,
    title: "Cheese",
    subtitle: "Goes well with everything",
    price: "8",
    image: "cheese",
    style: "yellow"
  },
  {
    id: 7,
    title: "Bacon",
    subtitle: "Very healthy",
    price: "28",
    image: "bacon",
    style: "red"
  },
  {
    id: 8,
    title: "Hot Dog",
    subtitle: "Contains artificial tofu meat ",
    price: "28",
    image: "hotdog",
    style: "red"
  }
];
export default {
  name: "App",
  components: {
    Header,
    Display
  },
  data() {
    return {
      productList
    };
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Pacifico&display=swap");
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Pacifico";
  background-color: rgb(232, 225, 215);
}
</style>
