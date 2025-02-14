// Bài 1
// Viết code, một dòng cho mỗi yêu cầu sau:
// Tạo một đối tượng user trống.
// Thêm thuộc tính name với giá trị David.
// Thêm thuộc tính surname với giá trị Xuan.
// Thay đổi giá trị của name thành Cafedev.
// Xóa thuộc tính name khỏi đối tượng.
function Bai1(){
    let user = {}
    user.name = 'David'
    user.surname = 'Xuan'
    user.name = 'Cafedev'
    delete user.name
    console.log(user.name)
}
Bai1()

// Bài 2:Viết hàm isEmpty (obj) trả về true nếu đối tượng không có thuộc tính, ngược lại là false.
function Bai2() {
    function isEmpty(obj){
        let cnt = 0
        for(const i in obj){
            ++cnt
        }
        return cnt === 0
    }
    
    let schedule = {}
    console.log(isEmpty(schedule))
    schedule['8:30'] = 'get up'
    console.log(isEmpty(schedule))
}
Bai2()

// Bài 3
// Chúng ta có một đối tượng lưu trữ tiền lương của nhóm chúng ta:

// Viết code để tính tổng tất cả các khoản lương và lưu trữ trong biến tổng. Nên là 390 trong ví dụ trên.
// Nếu tiền lương trống, thì kết quả phải là 0.
function Bai3(){
    function solve(obj){
        let sum = 0
        for(const name in obj){
            sum += obj[name]
        }
        return sum
    }
    
    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
    }

    let salaries2 = {}

    console.log(solve(salaries))
    console.log(solve(salaries2))
}
Bai3()

// Bài 4
// Tạo một hàm multiplyNumeric(obj) nhân tất cả các thuộc tính số của obj với 2.
function Bai4(){
    function multiplyNumeric(obj){
        for(const i in obj){
            if(typeof obj[i] === 'number'){
                obj[i] *= 2
            }
        }
    }

    let menu = {
        width: 200,
        height: 300,
        title: 'My menu cafedev'
    }
    multiplyNumeric(menu)
    console.log(menu)
}
Bai4()

// Bài 5
// Tạo một máy tính đối tượng với ba phương thức sau:
// read() nhận hai giá trị và lưu chúng dưới dạng thuộc tính đối tượng.
// sum() trả về tổng các giá trị đã lưu.
// mul() nhân các giá trị đã lưu và trả về kết quả.
function Bai5(){
    function calculator(){
        this.read = function(a,b){
            this.a = a
            this.b = b
        }
        this.sum = function(){
            return this.a + this.b
        }
        this.mul = function(){
            return this.a * this.b
        }
    }

    let cal = new calculator()
    cal.read(2,3)
    console.log(cal.sum())
    console.log(cal.mul())
}
Bai5()