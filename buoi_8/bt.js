//BT3: kiểm tra số nguyên có chuỗi chữ số tăng dần
const num = '145789'
let check = true
for(i=1; i<num.length; i++){
    if(num[i] <= num[i-1]){
        check = false
        break
    }
}
console.log(check)

//BT 5: tạo chuỗi sử dụng 3 kí tự ở giữa chuỗi lẻ, nếu chuỗi chẵn, thông báo chẵn
const str = '12345'
function solve2(str) {
    if(str.length % 2 === 0) return "chuoi chan"

    let res = ''
    for(i=(str.length-1)/2-1; i<(str.length-1)/2+2; i++){
        res += str[i]
    }
    return res
}
console.log(solve2(str))


//BT 9: Nhập chuỗi và tìm từ dài nhất trong chuỗi
const str2 = 'day la chuoi cua de bai'
let tmp = str2.split(' ')
let max = 0
let index = 0
for(i=0; i<tmp.length; i++){
    if(max < tmp[i].length){
        max = tmp[i].length
        index = i
    }
}
console.log(tmp[index])