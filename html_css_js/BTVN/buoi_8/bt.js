//BT1: Viết chương trình hiển thị ngày giờ
function BT1(){
    const d = new Date()
    return d
}
console.log('BT1:')
console.log(BT1())

//BT2: in ra ngày tháng theo các định dạng mm-dd-yyyy, mm/dd/yyyy, dd-mm-yyyy, dd/mm/yyyy
function BT2(){
    const d = new Date()
    const date = d.getDate()
    const month = d.getMonth()
    const year = d.getFullYear()
    console.log((month+1) + '-' + date + '-' + year)
    console.log((month+1) + '/' + date + '/' + year)
    console.log(date + '-' + (month+1) + '-' + year)
    console.log(date + '/' + (month+1) + '/' + year)
}
console.log('BT2:')
BT2()   

//BT3: kiểm tra số nguyên có chuỗi chữ số tăng dần
function BT3(){
    const num = '145789'
    let check = true
    for(i=1; i<num.length; i++){
        if(num[i] <= num[i-1]){
            check = false
            break
        }
    }
    return check
}
console.log('BT3:')
console.log(BT3())

//BT4: Thay thế mọi ký tự trong 1 chuỗi đã cho với ký tự theo sau nó trong bảng chữ cái
function BT4(){
    const str = 'abcdzxy'
    function nextLetter(char){
        let c = char.charCodeAt()
        if(!(65<=c<=90) || !(97<=c<=122)){
            return char
        }
        switch(c){
            case 90: return 'A'
            case 122: return 'a'
            default:
                return String.fromCharCode(++c)
        }
    }
    let res = ''
    for(i=0; i<str.length; ++i){
        res += nextLetter(str[i])
    }
    console.log(res)
}
console.log('BT4:')
BT4()

//BT 5: tạo chuỗi sử dụng 3 kí tự ở giữa chuỗi lẻ, nếu chuỗi chẵn, thông báo chẵn
function BT5(){
    const str = '12345'
    function solve2(str) {
        if(str.length % 2 === 0) return "chuoi chan"

        let res = ''
        for(i=(str.length-1)/2-1; i<(str.length-1)/2+2; i++){
            res += str[i]
        }
        return res
    }
    return solve2(str)
}
console.log('BT5:')
console.log(BT5())

//BT6: Viết chương trình hiển thị số xuất hiện nhiều nhất xuất hiện trong mảng
function BT6(){
    const array = [4, 6, 7, 8, 2, 5, 0, 7, 5, 4, 8, 3, 6, 8, 7]
    array.sort()
    console.log(array)
    cnt_max = 0
    num_max = array[0]
    cnt = 0
    for(i=-1; i<array.length-1; ++i){
        ++cnt
        if(array[i] !== array[i+1]){
            if(cnt > cnt_max){
                cnt_max = cnt
                num_max = array[i]
            }
            cnt = 0
        }
    }
    console.log('Num_max: ' + num_max + ' (cnt_max: ' + cnt_max + ')')
}
console.log('BT6:')
BT6()

//BT7: Kiểm tra xem chuỗi có chứa 'java' hay không
function BT7(){
    const str = 'asdajajavaava'
    const ss = 'java'
    for(i=0; i<str.length; ++i){
        let cnt = 0
        for(j=0; j<4; ++j){
            if(str[i+j] !== ss[j]) break
            ++cnt
        }
        if(cnt == 4) return true
    }
    return false
}
console.log('BT7:')
console.log(BT7())

//BT8: Viết 1 hàm lấy tên tháng từ 1 số cụ thể (VD: 1 - Tháng một)
function BT8(){
    num = 7
    function solve(num){
        switch(num){
            case 1: return 'một'
            case 2: return 'hai'
            case 3: return 'ba'
            case 4: return 'bốn'
            case 5: return 'năm'
            case 6: return 'sáu'
            case 7: return 'bảy'
            case 8: return 'tám'
            case 9: return 'chín'
            case 10: return 'mười'
            case 11: return 'mười một'
            case 12: return 'mười hai'
        }
    }
    console.log(num + ' - Tháng ' + solve(num))
}
console.log('BT8:')
BT8()

//BT 9: Nhập chuỗi và tìm từ dài nhất trong chuỗi
function BT9(){
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
    return tmp[index]
}
console.log('BT9:')
console.log(BT9())

//BT10: nhập 2 số và in ra các giá trị là số nguyên tố giữa 2 số đó
function BT10() {
    const n1 = 8, n2 = 100
    const n2_ = Math.floor(Math.sqrt(n2))
    let arr = Array(n2).fill(true)
    let res = ''
    arr[0] = arr[1] = false
    for(i=2; i<=n2_; ++i){
        if(arr[i]){
            for(j=i*i; j<n2; j+=i){
                arr[j] = false
            }
        }
    }
    for(i=n1+1; i<n2; ++i){
        if(arr[i]) res += ' ' + i
    }
    console.log(res)
}
console.log('BT10:')
BT10()