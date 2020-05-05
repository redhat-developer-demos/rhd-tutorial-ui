var ClipboardJS = require('clipboard/dist/clipboard')

var snippets = document.querySelectorAll('.console-input pre');
[].forEach.call(snippets, function (snippet) {
  var firstChild = snippet.querySelector('code')
  if (firstChild != null) {
    firstChild.insertAdjacentHTML('beforebegin', '<button class="copy-button" data-clipboard-snippet/>')
  }
})

var clipboardSnippets = new ClipboardJS('[data-clipboard-snippet]', {
  target: function (trigger) {
    return trigger.nextElementSibling
  },
})

var buttons = document.querySelectorAll('.copy-button')
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('mouseleave', clearTooltip)
  buttons[i].addEventListener('blur', clearTooltip)
}

function clearTooltip (e) {
  e.currentTarget.setAttribute('class', 'copy-button')
  e.currentTarget.removeAttribute('aria-label')
}

function showTooltip (elem, msg) {
  elem.setAttribute('class', 'copy-button tooltipped tooltipped-s tooltipped-no-delay')
  elem.setAttribute('aria-label', msg)
}

clipboardSnippets.on('success', function (e) {
  e.clearSelection()
  showTooltip(e.trigger, 'Copied!')
})
