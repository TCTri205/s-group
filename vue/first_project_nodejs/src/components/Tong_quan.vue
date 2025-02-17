<script setup>
import { reactive, ref, computed } from "vue";
</script>

<template>
  <div style="margin-bottom: 200px;">
    <h3>Tổng quan</h3>
    <p>
      Đó là, thay vì gán một giá trị trong thành phần này, nó sẽ gửi một giá trị
      dưới dạng một sự kiện cho thành phần cha. Và bằng cách viết lại giá trị
      của props ở phía thành phần cha, thành phần này có thể được sử dụng một
      cách chính xác. Ngoài ra còn có một phương pháp sử dụng watch thay vì
      setter, nhưng tôi không khuyến nghị cá nhân vì luồng dữ liệu rất khó nhìn
      thấy.
    </p>
  </div>
</template>

<style scoped>
</style>    