<script setup>
import { reactive, ref, computed } from 'vue';

</script>

<template>
    <div>
        <h3>
            Những lỗi thường gặp
        </h3>
        <p>Viêt cả v-model và <a href="https://viblo.asia/u/change" target="_blank">@change</a>
            V-model như đã nói ở trên là Event handling (xử lý sự kiện). Nên việc kết hợp viết hai lần sử dụng v-model và <a href="https://viblo.asia/u/change" target="_blank">@change</a> là không cần thiết, và làm cho code trở nên Not Syntax Suger. Ví dụ như đoạn mã ở dưới.</p>
        <p>// Đoạn code lỗi</p>
        <p>Do bản thân v-model đã có sẵn Event handling (xử lý sự kiện) của sự kiện <a href="https://viblo.asia/u/change" target="_blank">@change</a>, nên sự kiện đối với change bị lặp lại hai lần. Nếu trường hợp muốn xử lý nhiều sự kiện hơn một sự kiện change, chúng ta nên dùng việc sử dụng v-model và thay thế vào đó là sử dụng đồng thời v-bind và v-on hoặc sử dụng thuộc tính thay thế searchText.</p>
        <p>// Đoạn code chuẩn Syntax Suger</p>
        <p>Sự kết hợp giữa v-model và set tạo động lực phát triển cho trường hợp kết hợp với Vuex với nhiều nội dung khác.</p>
        <p>Truyền nguyên props cho v-model
            Đối với biến v-model, trường hợp muốn làm cầu nói với props thì mình thấy rất nhiều. Nhưng nếu sử dụng điều này, lỗi cảnh báo sẽ được hiển thị vì props bị thay đổi trực tiếp.</p>
        <p>Ngoài ra, để sử lỗi này, việc định nghĩa data từ giá trị của props sẽ tạo ra lỗi tương tự. Ví dụ như đoạn code ở dưới:</p>
        <p>Đoạn mã này nhìn thì thấy có vẻ như hoạt động đúng. Nhưng trên thực tế, sau khi giá trị của props được khởi tạo thì giá trị giữa props và data sẽ không được đồng bộ. Cho nên, dù đã sử thành đoạn mã mới, nhưng việc sửa chữa vẫn không được thực thi đúng.</p>
        <p>Vậy thì làm thế nào để có thể tránh nó? Bằng cách sử dụng các thuộc tính được tính toán thì có thể khắc phục được..</p>
        
    </div>
</template>

<style scoped>

</style>