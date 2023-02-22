console.log('Hello')

const slider = document.querySelector('#product-views-slider')

const billingToggle = document.querySelector('.billing-toggle')

const displayViews = document.querySelector('.product-views span')

const displayPrice = document.querySelector('.product-pricing span')

let discount = 1;

const productTiers = [
  { views: '10K', price: 8 },
  { views: '50K', price: 12 },
  { views: '100K', price: 16 },
  { views: '500K', price: 24 },
  { views: '1M', price: 36 },
]


billingToggle.addEventListener('click', function(){
  if(!this.classList.contains('billing-toggle-active')){
    this.classList.add('billing-toggle-active')
    discount = 1 - .25
  } else {
    this.classList.remove('billing-toggle-active')
    discount = 1
  }
})


slider.addEventListener('input', function(){
  let tier = productTiers[this.value-1]

  let pageViews = tier.views
  let updatedPrice = tier.price * discount 

  displayViews.innerText = pageViews
  displayPrice.innerText = updatedPrice.toFixed(2)
})

