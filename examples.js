// let b
//
// const setB = (v) => {
//     if (typeof v === 'function') {
//         b = v(b)
//         return
//     }
//
//     b = v
//     // React.rerender()
// }
//
// const customUseState = (val) => {
//     if (val !== undefined) b = val
//     return [b, setB]
// }
//
// const [a, setA] = customUseState(0)
//
// setA((currentValue) => {
//     console.log(currentValue)
//
//     return currentValue + 1
// })
// console.log(b)

const a = [1, 2, 3, 4, 5]

const [ one, two, ...others] = a;

console.log(others)