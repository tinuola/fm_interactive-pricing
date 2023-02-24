/* 
Change input range track's background color
Code implemented from Nikita Hlopov blog article
"Styling range input with CSS and JavaScript for better UX"
https://nikitahl.com/style-range-input-css
*/

const range = document.querySelector('input[type="range"]')

function handleInputChange(e) {
  let target = e.target
  const min = target.min
  const max = target.max
  const val = target.value
  
  target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
}

range.addEventListener('input', handleInputChange)
