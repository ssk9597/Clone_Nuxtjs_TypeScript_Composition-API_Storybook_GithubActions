<template>
  <div class="container">
    <Nuxt />
  </div>
</template>

<style lang="scss">
@import 'css-wipe';
body {
  line-height: $base_line_height;
  color: $base_font_colors;

  & h1,
  h2,
  h3,
  h4 {
    line-height: $title_line_height;
  }

  & h1 {
    font-size: $sp_title_font_size;
    @include mq(pc) {
      font-size: $pc_title_font_size;
    }
  }

  & h2 {
    font-size: $sp_h2_font_size;
    @include mq(pc) {
      font-size: $pc_h2_font_size;
    }
  }

  & h3 {
    font-size: $sp_h3_font_size;
    @include mq(pc) {
      font-size: $pc_h3_font_size;
    }
  }
}

.container {
  margin: 0 auto;
  @include mq(sp) {
    width: 95%;
  }
  @include mq(tb) {
    width: 90%;
  }
  @include mq(pc) {
    max-width: 1100px;
    width: 90%;
  }
}
</style>
