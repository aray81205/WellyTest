// 4. React: 條件渲染
// 問題：在React中，如何根據條件渲染兩種不同的內容？

// 範例：

// function ConditionalRendering({ isLoggedIn }) {
//   // 實作你的條件渲染
// }
// 可以透過條件運算子來做如果是true回傳is true 如果是false就回傳is false
function ConditionalRendering({ isLoggedIn }) {
  // 實作你的條件渲染
  return <div>{isLoggedIn ? <p>is true</p> : <p>is false</p>}</div>;
}
