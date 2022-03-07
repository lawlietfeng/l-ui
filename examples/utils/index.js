export const copy = (text) => {
  const textString = text.toString()
  let input = document.querySelector('#copy-input')
  if (!input) {
    input = document.createElement('textarea')
    input.id = 'copy-input'
    input.readOnly = 'readOnly' // 防止ios聚焦触发键盘事件
    input.style.position = 'absolute'
    input.style.left = '-1000px'
    input.style.zIndex = '-1000'
    document.body.appendChild(input)
  }
  input.value = textString
  // ios必须先选中文字且不支持 input.select();
  selectText(input, 0, textString.length)
  if (document.execCommand('copy')) {
    document.execCommand('copy')
    // TODO 复制成功提示
  }
  input.blur()
  function selectText(textbox, startIndex, stopIndex) {
    if (textbox.createTextRange) {
      // ie
      const range = textbox.createTextRange()
      range.collapse(true)
      range.moveStart('character', startIndex) // 起始光标
      range.moveEnd('character', stopIndex - startIndex) // 结束光标
      range.select() // 不兼容苹果
    } else {
      // firefox/chrome
      textbox.setSelectionRange(startIndex, stopIndex)
      textbox.focus()
    }
  }
}
