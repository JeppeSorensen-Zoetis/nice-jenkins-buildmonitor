// Clean up namesijn build monitor
function cleanNames(){
  document.querySelectorAll('#widgets h2 a').forEach(function(a){
     // remove org name
      a.innerHTML = a.innerHTML.replace('Zoetis Denmark » ', '');
      a.innerHTML = a.innerHTML.replace('Zoetis-RDDX » ', '');
      a.innerHTML = a.innerHTML.replace(' » master', '');
  })
}

document.addEventListener('DOMContentLoaded', function () {
  if(document.body.classList.contains('build-monitor')) {
    setTimeout(cleanNames, 100)
    setTimeout(cleanNames, 500)
  }
});
