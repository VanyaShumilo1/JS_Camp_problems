//problem 1
// const differenceMinMaw = (arr) => {
//     if (arr.length <= 1) return 0

//     return Math.maw(...arr) - Math.min(...arr) 
// }

// console.log(differenceMinMaw([1,2,3,-4]))
// console.log(differenceMinMaw([16]))



//problem 2
// const countWords = (string, n) => {
//     let ans = []
//     string.split(' ').forEach(word => {
//         if (word.length > n) ans.push(word)
//     }) 

//     return ans
// }

// console.log(countWords("hello world one two three hbhwhuhu", 3))



//problem 3
// const solution = (str1, str2) => {
//     if (str2.length > str1.length) return false

//     let str1Rev = str1.split('').reverse()
//     let str2Rev = str2.split('').reverse()

//     for (let i = 0; i < str2.length; i++) {
//         if (str1Rev[i].toLowerCase() !== str2Rev[i].toLowerCase()) return false
//     }

//     return true
// }

// console.log(solution('abc', 'bc'))
// console.log(solution('abc', 'd'))



//problem 4
// const averages = (arr) => {
//     let ans = []

//     for(let i = 1; i < arr.length; i++) {
//         ans.push((arr[i] + arr[i - 1]) / 2)
//     }

//     return ans
// }

// console.log(averages([2, -2, 2, -2, 2]))
// console.log(averages([1, 3, 5, 1, -10]))



//problem 5.1
// const countVowels = (str) => {
//     const vowels = ['a', 'e', 'i', 'o', 'u']
//     let ans = 0

//     for (let i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i].toLowerCase())) ans++
//     }

//     return ans
// }

// console.log(countVowels("Celebration"))
// console.log(countVowels("Palm"))



//problem 5.2
// const removeABC = (str) => {
//     if (str.includes('a') || str.includes('b') || str.includes('c')) {
//         return str.replaceAll('a', '').replaceAll('b', '').replaceAll('c', '')
//     }

//     return null
// }

// console.log(removeABC("This might be a bit hard"))
// console.log(removeABC("hello world!"))



//problem 6
// const difference = (arr1, arr2) => {
//     let ans = []

//     arr1.forEach(el => {
//         if (!ans.includes(el)) {
//             ans.push(el)
//         }
//     });

//     arr2.forEach(el => {
//         if (!ans.includes(el)) {
//             ans.push(el)
//         }
//     });

//     return ans
// }

// console.log(difference([1, 2, 3], [100, 2, 1, 10]))



//problem 7
// const changeObj = (obj) => {
//     let newObj = {}

//     for (let keh in obj) {
//         newObj[obj[keh]] = keh
//     }

//     return newObj
// }

// console.log(changeObj({ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" }))



//problem 8
// const calculateDifference = (obj, n) => {
//     const cost = Object.values(obj).reduce((sum, current) => sum + current, 0)

//     return cost - n
// }

// console.log(calculateDifference({ "baseball bat": 20 }, 5))
// console.log(calculateDifference({ skate: 10, painting: 20 }, 19))
// console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400))



//problem 9
// const doesBrickFit = (a, b, c, w, h) => {
//     if ((a <= h && b <= w)
//         || (a <= w && b <= h)
//         || (a <= h && c <= w)
//         || (a <= w && c <= h)
//         || (b <= h && c <= w)
//         || (b <= w && c <= h)) {
//         return true
//     }

//     return false
// }

// console.log(doesBrickFit(1, 1, 1, 1, 1))
// console.log(doesBrickFit(1, 2, 1, 1, 1))
// console.log(doesBrickFit(1, 2, 2, 1, 1))



// problem 10
// const getFileName = (str) => {
//     const arr = str.split('\\')

//     return arr[arr.length - 1].split('.')[0]
// }

// console.log(getFileName("c:\\WebServers\\home\\testsite\\www\\myfile.txt"))



//problem 11
// const cyclicShift = (str1, str2) => {
//     if (str1.length !== str2.length) {
//         return false
//     }

//     let str = str1 + str1

//     return str.includes(str2)
// } 

// console.log(cyclicShift("abcd", "bcda"))
// console.log(cyclicShift("abcd", "adbc"))



//problem 12
// const solution = (a) => {
//     let b = []
//     let c = []

//     a.sort((n, m) => n - m)

//     while (a.length > 0) {
//         let diff = a[a.length - 1] - a[0]
//         let num1 = a[0]
//         let num2 = a[a.length - 1]
//         let fl = 0
//         for (let j = 0; j < a.length - 1; j++) {
//             if (a[j + 1] - a[j] < diff) {
//                 fl = j
//                 diff = a[j + 1] - a[j]
//                 num1 = a[j]
//                 num2 = a[j + 1]
//             }
//         }
//         b.push(num1)
//         c.push(num2)
//         a.splice(fl, 2)
//     }

//     return [b, c]
// }

// console.log(solution([1, 2, 2, 2, 3, 3, 5, 6, 9, 10, 12, 15, -4, -5, -6, -6]))

