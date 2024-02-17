let typed = new Typed('.auto-type', 
{
  strings: ['Architect', 'Web Designer', 'Professional Typer'],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true
});

function openCity(event, cityName)
{
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}