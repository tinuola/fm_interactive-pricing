const slider = document.querySelector('#product-views-slider')

const toggle = document.querySelector('.billing-toggle')

const pageViews = document.querySelector('.page-views span')

const productPrice = document.querySelector('.product-pricing span')

let discount = 1;

let step = slider.value

const productTiers = [
  { views: '10K', price: 8 },
  { views: '50K', price: 12 },
  { views: '100K', price: 16 },
  { views: '500K', price: 24 },
  { views: '1M', price: 36 },
]


const displayPageViews = (num) => {
  let views = productTiers[num].views
  pageViews.innerText = views
}

displayPageViews(step)


const displayPricing = (num) => {
  let pricing = productTiers[num].price
  productPrice.innerText = (pricing * discount).toFixed(2)
}

displayPricing(step)


slider.addEventListener('input', function(){
  step = slider.value 

  displayPageViews(step)
  displayPricing(step)
})


toggle.addEventListener('click', function(){
  step = slider.value

  if(!this.classList.contains('billing-toggle-active')){
    this.classList.add('billing-toggle-active')
    discount = 1 - .25
    displayPricing(step)
  } else {
    this.classList.remove('billing-toggle-active')
    discount = 1
    displayPricing(step)
  }
})