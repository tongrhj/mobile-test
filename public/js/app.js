'use strict'

const addtohome = addToHomescreen({
  skipFirstVisit: false,
  maxDisplayCount: 0,
  autostart: false,
  startDelay: 0.1,
  onShow () {
   console.log('add to homescreen showing')
  },
  debug: true
})

const installBtn = document.querySelector('#install-btn')

installBtn.addEventListener('click', (e) => {
  e.preventDefault()
  console.log('Install Button Clicked')
  addtohome.show(true)
})

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('js/service-worker.js')
}
