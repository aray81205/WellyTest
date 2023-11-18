// 3. JavaScript: 重構
// 問題：重構這段程式碼並說明原因

// function formatName(firstName, lastName) {
//   let formattedName = '';
//   if (firstName) {
//     formattedName += firstName;
//   }

//   if (lastName) {
//     formattedName += ' ' + lastName;
//   }
//   return formattedName;
// }

function formatName(firstName, lastName){
    return`${firstName ? firstName : ''}${lastName? ' '+lastName:''}`
}
console.log (formatName('test1', 'test2'))
// 是使用了模板字面量透過反引號包起來就可以在字串中加入變數,就可以簡化程式碼並且將重複多於的地方去掉