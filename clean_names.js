// Clean up namesijn build monitor
function cleanNames(){
  document.querySelectorAll('#widgets h2 a').forEach(function(a){
    if(a.innerHTML.includes('Zoetis Denmark » '))
      a.innerHTML = a.innerHTML.replace('Zoetis Denmark » ', '');
    if(a.innerHTML.includes('Zoetis-RDDX » '))
      a.innerHTML = a.innerHTML.replace('Zoetis-RDDX » ', '');
    if(a.innerHTML.includes(' » master'))
      a.innerHTML = a.innerHTML.replace(' » master', '');
  })
}

document.addEventListener('DOMContentLoaded', function () {
  if(document.body.classList.contains('build-monitor')) {
    setInterval(cleanNames, 500)
  }
});
