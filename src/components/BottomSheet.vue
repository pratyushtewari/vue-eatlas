<template>
  <div class="bottom-sheet">
    <grid col="2" class="">
      <c center span="1" class="flag">
        <span class="flag-icon flag-icon-squared" :class="flagCSS"></span>
        <!-- <img :src="flagUrl"> -->
        <!-- <img :class="country"> -->
      </c>
      <c span="1">
        <div class="name">{{ this.countryName }}</div>
        <div class="tagline">It's 12 pm in {{ this.countryName }}</div>
      </c>
      <c span="2">
        <div class="extract">
          {{
            info.data.query.pages[Object.keys(info.data.query.pages)[0]].extract
          }}
        </div></c
      >
    </grid>
  </div>
</template>

<script>
import axios from "axios";
import countryCodes from "./CountryCodes.json";
export default {
  name: "BottomSheet",

  data() {
    return {
      countryName: "",
      info: null,
      flagCSS: ""
    };
  },
  mounted() {
    this.flagUrl = `https://www.countryflags.io/${this.countryCode}/flat/64.png`;
    this.countryName = countryCodes[this.countryCode];
    this.flagCSS = `flag-icon-${this.countryCode.toLowerCase()}`;
    axios
      .get(
        "http://localhost:8080/w/api.php?format=json&action=query&prop=extracts&explaintext=1&titles=" +
          countryCodes[this.countryCode]
      )
      .then(response => (this.info = response));
  },
  props: {
    countryCode: String
  },
  methods: {
    getDisplayName: () => {
      return this.country + " this is the name";
    },
    getTagline: () => {
      return this.country + " this is the tagline";
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~flag-icon-css/css/flag-icon.min.css";

.bottom-sheet {
  padding: 16px;

  border: 1px solid black;
  border-radius: 4px;

  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.04), 0 1px 2px 0 rgba(0, 0, 0, 0.04),
    0 1px 2px 0 rgba(0, 0, 0, 0.18);
}

grid {
  grid-gap: 16px;
  grid-template-columns: 56px 1fr;
}
.name {
  font-size: 2rem;
  font-weight: bold;
}
.flag {
  grid-row: 1 / 3;
  width: 56px;
  span {
    width: 56px;
    height: 56px;
    border-radius: 2px;
    border: 3px solid white;
  }
}
.extract {
  height: 200px;
  overflow: hidden;

  position: relative;

  &:before {
    content: "...";
    position: absolute;
    right: 0;
    bottom: 0;
  }
  &:after {
    content: "";
    position: absolute;
    right: 0;
    width: 1em;
    height: 1em;
    margin-top: 0.2em;
  }
}
</style>
