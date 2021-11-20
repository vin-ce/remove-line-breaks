import "./styles/styles.styl"

console.log("made by vincentli.space")

const textEl = document.querySelector('#text')

textEl.addEventListener('blur', async () => {
  navigator.clipboard.writeText(textEl.value)
  textEl.value = ""
})

textEl.addEventListener('input', () => {
  console.log('change')
  textEl.value = textEl.value.replace(/(\r\n|\n|\r)/gm, " ")
})

