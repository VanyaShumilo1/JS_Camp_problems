// problem 1
// const differenceMinMaw = (arr) => {
//     if (arr.length <= 1) return 0

//     return Math.max(...arr) - Math.min(...arr)
// }

// console.log(differenceMinMaw([1, 2, 3, -4]))
// console.log(differenceMinMaw([16]))



// problem 2
// const countWords = (string, n) => {
//     let ans = []
//     string.split(' ').forEach(word => {
//         if (word.length > n) ans.push(word)
//     })

//     return ans
// }

// console.log(countWords("hello world one two three hbhwhuhu", 3))



// problem 3
// const solution3 = (str1, str2) => {
//     if (str2.length > str1.length) return false

//     let str1Rev = str1.split('').reverse()
//     let str2Rev = str2.split('').reverse()

//     for (let i = 0; i < str2.length; i++) {
//         if (str1Rev[i].toLowerCase() !== str2Rev[i].toLowerCase()) return false
//     }

//     return true
// }

// console.log(solution3('abc', 'bc'))
// console.log(solution3('abc', 'd'))



// problem 4
// const averages = (arr) => {
//     let ans = []

//     for(let i = 1; i < arr.length; i++) {
//         ans.push((arr[i] + arr[i - 1]) / 2)
//     }

//     return ans
// }

// console.log(averages([2, -2, 2, -2, 2]))
// console.log(averages([1, 3, 5, 1, -10]))



// problem 5.1
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



// problem 5.2
// const removeABC = (str) => {
//     if (str.includes('a') || str.includes('b') || str.includes('c')) {
//         return str.replaceAll('a', '').replaceAll('b', '').replaceAll('c', '')
//     }

//     return null
// }

// console.log(removeABC("This might be a bit hard"))
// console.log(removeABC("hello world!"))



// problem 6
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



// problem 7
// const changeObj = (obj) => {
//     let newObj = {}

//     for (let key in obj) {
//         newObj[obj[key]] = key
//     }

//     return newObj
// }

// console.log(changeObj({ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" }))



// problem 8
// const calculateDifference = (obj, n) => {
//     const cost = Object.values(obj).reduce((sum, current) => sum + current, 0)

//     return cost - n
// }

// console.log(calculateDifference({ "baseball bat": 20 }, 5))
// console.log(calculateDifference({ skate: 10, painting: 20 }, 19))
// console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400))



// problem 9
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



// problem 11
// const cyclicShift = (str1, str2) => {
//     if (str1.length !== str2.length) {
//         return false
//     }

//     let str = str1 + str1

//     return str.includes(str2)
// }

// console.log(cyclicShift("abcd", "bcda"))
// console.log(cyclicShift("abcd", "adbc"))



// problem 12
// const solution12 = (a) => {
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

// console.log(solution12([1, 2, 2, 2, 3, 3, 5, 6, 9, 10, 12, 15, -4, -5, -6, -6]))



// problem 13
// const solution13 = (str) => {
//     let startLength = str.length
//     let words = str.toLowerCase().split(' ')
//     let arr = []

//     const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
//     const numberRegex = /^\d+$/

//     words.forEach(word => {
//         if (emailRegex.test(word)) {
//             arr.push("[контакти заборонені]")
//         } else if (word.includes('.')) {
//             arr.push("[посилання заборонено]")
//         } else if (numberRegex.test(word)) {
//             if (word.length <= 3) {
//                 arr.push(word)
//             }
//         } else {
//             arr.push(word)
//         }
//     });


//     let ans = arr.join(' ')
//     ans = ans.charAt(0).toUpperCase() + ans.slice(1)

//     let endLength = ans.length

//     if (endLength > startLength) {
//         setInterval(() => {
//             alert("Вам потрібна допомога?")
//         }, 5000)
//     }
//     return ans
// }

// console.log(solution13("hello world testemail@gmail.com https://www.google.com youtube.com 23523 12 123 321 12321"))



// problem 14
// const titleForAnswer = document.querySelector('.solution14')

// const solution14 = (str) => {
//     let stack = []
//     let fl = 0

//     for (let i = 0; i < str.length; i++) {
//         let char = str[i]

//         if (char === '(') {
//             stack.push(char)
//         } else {
//             if (stack.length === 0) {
//                 titleForAnswer.innerHTML = "Послідовність не правильна"
//                 return false
//             } else {
//                 stack.pop()
//             }
//         }
//     }

//     if (stack.length === 0 && str.length % 2 === 0) {
//         titleForAnswer.innerHTML = "Послідовність правильна"
//         return true
//     } else {
//         titleForAnswer.innerHTML = "Послідовність не правильна"
//         return false
//     }
// }

// console.log(solution14("()"))
// console.log(solution14("())"))



// problem 15
// const upperCaseRegex = /^[A-Z]+$/
// const numberRegex = /[0-9]/

// const generateRandomChar = () => {
//     let chars = [
//         '0123456789',
//         '_',
//         'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
//         'abcdefghijklmnopqrstuvwxyz',
//     ]

//     let randomCategory = Math.floor(Math.random() * chars.length)
//     let randomCharFromCategory = Math.floor(Math.random() * chars[randomCategory].length)

//     return chars[randomCategory][randomCharFromCategory]
// }

// const checkNumbersInPassword = (password, char) => {
//     let lastChar = password[password.length - 1]
//     return numberRegex.test(lastChar) && numberRegex.test(char)
// }

// const passwordGenerator = () => {
//     let len = Math.floor(Math.random() * (20 - 6 + 1)) + 6;
//     let result = ''
//     let numberCount = 0
//     let upperCaseCount = 0
//     let underscoreCount = 0

//     while (result.length < len) {
//         let randomChar = generateRandomChar()

//         if (randomChar === '_' && underscoreCount === 0) {
//             result += randomChar
//             underscoreCount++
//         }
//         else if (upperCaseRegex.test(randomChar) && upperCaseCount < 2) {
//             result += randomChar
//             upperCaseCount++
//         } else if (numberRegex.test(randomChar)
//             && numberCount < 5
//             && !checkNumbersInPassword(result, randomChar)) {
//             result += randomChar
//             numberCount++
//         } else if (!upperCaseRegex.test(randomChar) && !numberRegex.test(randomChar) && randomChar !== '_') {
//             result += randomChar
//         }
//     }

//     return result
// }

// console.log(passwordGenerator())



// problem 16
// const solution16 = (arr) => {
//     arr.sort((a, b) => a - b)

//     let result = []

//     for (let i = 0; i < arr.length; i += 2) {
//         result.push(arr[i])
//     }

//     for (let i = arr.length - 1 - (arr.length % 2); i >= 0; i -= 2) {
//         result.push(arr[i])
//     }

//     return result
// }

// console.log(solution16([1, 2, 3, 4, 5, 6, 7, 8]))
// console.log(solution16([1, 2, 3, 4, 5, 6, 7]))
// console.log(solution16([1, 2, 3, 4, 5]))



// problem 17
// const solution17 = (str) => {
//     str = str.toLowerCase().split('')
//     let mp = new Map()

//     str.forEach(el => {
//         if (mp.get(el)) {
//             mp.set(el, Number(mp.get(el)) + 1)
//         } else {
//             mp.set(el, 1)
//         }
//     });

//     let sortedMp = new Map([...mp.entries()].sort((a, b) => b[1] - a[1]))
//     let objFromMp = Object.fromEntries(sortedMp)
//     let result = ""
//     for (let key in objFromMp) {
//         for (let i = 0; i < objFromMp[key]; i++) {
//             result += key
//         }
//     }
//     return result
// }

// console.log(solution17("uehruinsndjfjqeuiehfuhuasjjfdhuiaheuih"))



// problem 18
// const solution18 = (str1, str2) => {
//     str1 = str1.toLowerCase()
//     str2 = str2.toLowerCase()
//     if (str2.length > str1.length) {
//         let tmp = str1
//         str1 = str2
//         str2 = tmp
//     }

//     let ans = ''
//     let curLength = 1
//     let curStart = 0
//     for (let i = 0; i < str2.length;) {
//         if (ans.length === str2.length) {
//             return ans
//         }
//         let cur = str2.substr(curStart, curLength)
//         if (str1.indexOf(cur) !== -1) {
//             ans = cur
//             curLength++
//         } else {
//             curStart = i
//             i++
//         }
//     }

//     return ans
// }

// console.log(solution18("Прямокутник", "плмокутвллмлп"))
// console.log(solution18("dog", "gkewdogofpw"))
// console.log(solution18("qewfdogqwef", "gkewdogofpw"))



// problem 19
// const solution19 = (str, n) => {
//     n = n % 26
//     n = Math.abs(n)
//     alphabet = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"
//     str = str.toLowerCase()
//     let result = ""

//     str.split('').forEach(el => {
//         let currentPos = alphabet.indexOf(el)
//         let newPos = currentPos + n
//         result += alphabet[newPos]
//     });

//     return result
// }

// console.log(solution19("abcdefgz", -3))



// problem 20
// const solution20 = (str1, str2) => {
//     return str1.split('').sort().join('') === str2.split('').sort().join('')
// }
//
// console.log(solution20("abc", "bac"))
// console.log(solution20("abcw", "bwac"))
// console.log(solution20("abcwqwe", "bwacasd"))



//problem 21
// class Student {
//     constructor(name, lastName, faculty) {
//         this.id = Math.floor(Math.random() * 10000)
//         this.name = name
//         this.lastName = lastName
//         this.faculty = faculty.toLowerCase()
//     }
// }

// class University {
//     #students = []

//     addStudent(student) {
//         this.#students.push(student)
//     }

//     removeStudent(id) {
//         this.#students = this.#students.filter(student => student.id !== id)
//     }

//     getStudentsFromFaculty(faculty) {
//         faculty = faculty.toLowerCase()
//         console.log(this.#students.filter(student => student.faculty === faculty))
//         return this.#students.filter(student => student.faculty === faculty)
//     }

//     getStudent(id) {
//         console.log(this.#students.filter(student => student.id === id)[0])
//         return this.#students.filter(student => student.id === id)[0]
//     }

//     getStudents() {
//         console.log(this.#students)
//         return this.#students
//     }
// }
// const Univer = new University()
// Univer.addStudent(new Student("Petro", "Petrov", "IT"))
// Univer.addStudent(new Student("Ivan", "Ivanov", "Law"))
// Univer.addStudent(new Student("Olexandr", "Alex", "IT"))
// Univer.addStudent(new Student("Anastasia", "Jef", "IT"))
// Univer.addStudent(new Student("Ira", "Pew", "Law"))
// Univer.getStudents()
// Univer.getStudentsFromFaculty('IT')
// id генерується рандомно, тому не можу показати роботу методу getStudent i removeStudent



//problem 22

// const countWords = (str) => {
//     return str.split(' ').length
// }

// const countSentences = (str) => {
//     let sentencesCount = 0
//     str.replaceAll('!!!', '!').replaceAll('...', '.').replaceAll('???', '?')
//     str.split('').forEach(char => {
//         if (char === '!' || char === '?' || char === '.') {
//             sentencesCount++
//         }
//     })

//     return sentencesCount
// }

// const countChars = (str) => {
//     return str.replaceAll(' ', '').length
// }

// const countWordsWithStatistics = (str) => {
//     const chars = [',', '.', '/', '-', '"', '!', '?', '&', '%', '(', ')']
//     let wordsMap = new Map()
//     chars.forEach(char => {
//         str = str.replaceAll(char, '')
//     })
//     str.split(' ').forEach(char => {
//         if (wordsMap.get(char)) {
//             wordsMap.set(char, wordsMap.get(char) + 1)
//         } else {
//             wordsMap.set(char, 1)
//         }
//     })

//     const sortedWordsMap = new Map([...wordsMap.entries()].sort((a, b) => b[1] - a[1]))
//     const objFromSortedWordsMap = Object.fromEntries(sortedWordsMap)

//     return objFromSortedWordsMap
// }

// console.log("Words: ", countWords("hello world! how are you? i'm fine, thank you."))
// console.log("Sentences: ", countSentences("hello world! how are you? i'm fine, thank you."))
// console.log("Chars: ", countChars("hello world! how are you? i'm fine, thank you."))
// console.log("Statistics: ", countWordsWithStatistics("hello world! how are you? i'm fine, thank you."))