<script setup>
import { reactive, ref, computed } from 'vue';


</script>

<template>
    <!-- <div>
        <h1 class="article-content__title" style="margin-top: 500px;">
            Những chú ý khi sử dụng v-model trong vue js
        </h1>
    </div> -->
    <div>
        <h3 id="_mo-dau-0">Mở đầu</h3>
        <p>
            v-model là chức năng được sử dụng rất nhiều khi tạo form sử dụng Vue.js. Bạn có thể sử dụng v-model để tạo ra các ràng buộc dữ liệu hai chiều trên các ô input hoặc textarea hay thậm chí là file. Nó sẽ tự động chọn đúng cách để cập nhật các phần tử dựa trên kiểu nhập. Mặc dù khi sử dụng bạn sẽ thấy có đôi chút magic, nhưng v-model thực sự là một cú pháp không thể thiếu mỗi khi bạn muốn handle một form một cách thuận tiện và ngon lành 😄 Note: v-model sẽ bỏ qua các giá trị ban đầu, "checked" hoặc "selected" attribute được tìm thấy trên bất kì form elements nào. Nó sẽ luôn luôn xử lý các dữ liệu của Vue instance như là những dữ liệu luôn đúng. Bạn nên khai báo giá trị ban đầu ở phía Javascript bên trong các component.
        </p>
    </div>
</template>

<style scoped>

.article-content__title {
    text-align: left;
    line-height: 1.2;
    font-weight: 700;
    word-wrap: break-word;
    word-break: break-word;
    font-size: 2.5rem;
    opacity: 1;
}
</style>