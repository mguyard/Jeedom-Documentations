var docMenu = [
  {
    fr_FR : "Présentation MGUYARD",
    /*
    en_US : "Presentation MGUYARD",
    es_ES : "Presentación MGUYARD",
    de_DE : "Präsentation MGUYARD",
    pt_PT : "Apresentação MGUYARD",
    */
    link : "/#LANG#/presentation/index"
  },{
    fr_FR : "Github",
    /*
    en_US : "Github",
    es_ES : "Github",
    de_DE : "Github",
    pt_PT : "Github",
    */
    link : "https://github.com/mguyard/"
  },{
    divider : true
  },{
    fr_FR : "Plugins Stable",
    /*
    en_US : "Install Jeedom",
    es_ES : "Instalar Jeedom",
    de_DE : "Installieren Jeedom",
    pt_PT : "Instale o Jeedom",
    */
    submenu : [
      /*
      {link : "/#LANG#/installation/",fr_FR:"Installation",en_US:"Installation",es_ES:"Instalación",de_DE:"Installation",pt_PT:""},
      */
      {link : "/Jeedom-Documentations/#LANG#/Diagral_eOne/",icon:"fas fa-lock",fr_FR:"Diagral eOne"}
    ]
  },{
    fr_FR : "Plugins Beta",
    /*
    en_US : "Service",
    es_ES : "Servicios",
    de_DE : "Service",
    pt_PT : "Serviços",
    */
    submenu:[
    ]
  },{
    fr_FR : "Plugins Developpements",
    /*
    en_US : "Service",
    es_ES : "Servicios",
    de_DE : "Service",
    pt_PT : "Serviços",
    */
    submenu:[
      {link : "/Jeedom-Documentations/#LANG#/Mercedes_me/",icon:"fas fa-language",fr_FR:"Mercedes Me"}
    ]
  },{
    divider : true
  },
]

if(getUrlVars('theme') == 'light' || getUrlVars('theme') == 'dark'){
  setCookie('theme',getUrlVars('theme'),7)
}

setTheme();

$('#ul_menu').empty();
var html = '';
var lang = 'fr_FR' ;
if(window.location.href.indexOf('fr_FR') != -1){
  lang = 'fr_FR'
}else if(window.location.href.indexOf('en_US') != -1){
  lang = 'en_US'
}else if(window.location.href.indexOf('es_ES') != -1){
  lang = 'es_ES'
}else if(window.location.href.indexOf('de_DE') != -1){
  lang = 'de_DE'
}else if(getCookie('lang') != ''){
  lang = getCookie('lang');
}else{
  var userLang = navigator.language || navigator.userLanguage;
  userLang = userLang.toLowerCase();
  if(userLang.indexOf('en') !== -1){
    lang = 'en_US'
  }else if(userLang.indexOf('es') !== -1){
    lang = 'es_ES'
  }else if(userLang.indexOf('de') !== -1){
    lang = 'de_DE'
  }
}
if(getCookie('lang') != lang){
  setCookie('lang',lang,7)
}

$('#meta-lang').attr('content',lang)
var jeedomVersion = '3.3'
if(window.location.href.indexOf('3.3') != -1){
  jeedomVersion = '3.3'
}else if(window.location.href.indexOf('4.0') != -1){
  jeedomVersion = '4.0'
}else if(window.location.href.indexOf('4.1') != -1){
  jeedomVersion = '4.1'
}else if(getCookie('jeedomVersion') != ''){
  jeedomVersion = getCookie('jeedomVersion');
}
if(getCookie('jeedomVersion') != jeedomVersion){
  setCookie('jeedomVersion',jeedomVersion,7)
}
if($('#sel_jeedomVersion').val() != jeedomVersion){
  $('#sel_jeedomVersion').val(jeedomVersion);
}
$('#sel_lang').val(lang);
for(var i in docMenu){
  var menu = docMenu[i]
  if(menu.divider){
    html += '<li><div class="divider"></div></li>';
  }else if(menu.submenu){
    html += '<li>';
    html += '<div class="collapsible-header">'+genText(menu,lang)+'</div>';
    html += '<div class="collapsible-body">';
    html += '<ul>';
    for(var j in menu.submenu){
      var submenu = menu.submenu[j];
      if(submenu.link == ''){
        continue;
      }
      if(submenu.version && submenu.version.indexOf(jeedomVersion) == -1){
        continue;
      }
      html += '<li><a href="'+submenu.link.replace('#LANG#',lang).replace('#VERSION#',jeedomVersion)+'">'+genText(submenu,lang)+'</a></li>';
    }
    html += '</ul>';
    html += '</div>';
    html += '</li>';
  }else{
    if(menu.link){
      if(menu.link == ''){
        continue;
      }
      html += '<li><a href="'+menu.link.replace('#LANG#',lang).replace('#VERSION#',jeedomVersion)+'">'+genText(menu,lang)+'</a></li>';
    }else{
      html += '<li><strong style="margin-left:5px;" href="#!">'+genText(menu,lang)+'</strong></li>';
    }
  }
}
html += '<li class="small"><small>Mguyard Plugins</small></li>'
$('#ul_menu').empty().html(html);

function genText(_menu,_lang){
  if(_menu.icon){
    return '<i class="'+_menu.icon+'"></i>'+_menu[lang];
  }else{
    return _menu[lang];
  }
}

$(function(){
  document.title = 'Documentation Jeedom'
  $('.sidenav').sidenav();
  setTimeout(function(){
    if ($('#slide-out').length > 0 && window.matchMedia("only screen and (max-width: 760px)").matches) {
      $('.sidenav').sidenav();
    }
  }, 100);
  setTimeout(function(){
    if ($('#slide-out').length > 0 && window.matchMedia("only screen and (max-width: 760px)").matches) {
      $('.sidenav').sidenav();
    }
  }, 250);
  setTimeout(function(){
    if ($('#slide-out').length > 0 && window.matchMedia("only screen and (max-width: 760px)").matches) {
      $('.sidenav').sidenav();
    }
  }, 500);
  $('.parallax').parallax();
  $('.dropdown-trigger').dropdown();
  $('.collapsible').collapsible();

  $('#div_summary').empty().append('<ul></ul>');
  $('#div_content h1,h2,h3').each(function(){
    var id = encodeURIComponent($(this).text());
    $(this).attr('id',id)
    if($(this).is('h1')){
      $('#div_summary ul').append('<li><a href="#'+id+'" class="tocAnchor">'+$(this).text()+'</a></li>')
    }
    if($(this).is('h2')){
      $('#div_summary ul').append('<li><a href="#'+id+'" class="tocAnchor" style="margin-left:10px;">'+$(this).text()+'</a></li>')
    }
    if($(this).is('h3')){
      $('#div_summary ul').append('<li><a href="#'+id+'" class="tocAnchor" style="margin-left:20px;">'+$(this).text()+'</a></li>')
    }
    $(this).addClass('scrollspy');
  });
  $('.scrollspy').scrollSpy();

  $('.tocAnchor').off('click').on('click',function(){
    window.location.hash = $(this).attr('href')
  });

  setTimeout(function() {
    $('#div_summary').pushpin({top:$('nav').height(),offset:$('nav').height()+10})
  }, 100);

  $('#sel_lang').on('change',function(){
    setCookie('lang',$(this).val(),7)
    var url = window.location.href.replace('fr_FR',$(this).val()).replace('en_US',$(this).val()).replace('es_ES',$(this).val()).replace('de_DE',$(this).val());
    window.location.href = url;
  })

  $('#sel_theme').on('change',function(){
    setCookie('theme',$(this).val(),7)
    setTheme();
  })

  $('#sel_jeedomVersion').on('change',function(){
    setCookie('jeedomVersion',$(this).val(),7)
    var url = window.location.href;
    if(url.indexOf('/core/') != -1 && url.indexOf(getCookie('jeedomVersion')) == -1){
      window.location.href = url.replace('3.3',getCookie('jeedomVersion')).replace('4.0',getCookie('jeedomVersion')).replace('4.1',getCookie('jeedomVersion'))
      return;
    }
    window.location.reload();
  })

  $('select').formSelect();
  $('#div_content :not(td)>img').addClass('responsive-img')
  cookiesPolicyBar();
  setLeftMenu();

  if(window.location.hash) {
    document.getElementById(window.location.hash.replace('#','')).scrollIntoView()
    window.scrollBy(0, -200);
  }
});

function setTheme(){
  if(getCookie('theme') == 'dark'){
    $('html').addClass('dark')
    if($('#sel_theme').val() != 'dark'){
      $('#sel_theme').val('dark');
    }
  }else{
    $('html').removeClass('dark')
  }
}

function getCookie(name) {
  var cookies = document.cookie.split(';');
  for(var i in cookies){
    var csplit = cookies[i].split('=');
    if(name.trim() == csplit[0].trim()){
      return csplit[1];
    }
  }
  return '';
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;samesite=Lax;secure";
}

function cookiesPolicyBar(){
  if (getCookie('cookiePolicyAccept') != "active") $('#cookieAcceptBar').show();
  $('#cookieAcceptBarConfirm').on('click',function(){
    setCookie('cookiePolicyAccept', 'active', 30);
    $('#cookieAcceptBar').fadeOut();
  });
}

function setLeftMenu(){
  var url = window.location.href
  if (url.indexOf('design3d') != -1) {
    $('#ul_menu a').each(function() {
      if ($(this).attr('href') && $(this).attr('href').indexOf('design3d') != -1) {
        $(this).closest('li').addClass('menu_active')
        if ($(this).closest('li').closest('ul').closest('li')) {
          $(this).closest('li').closest('ul').closest('li').find('.collapsible-header').click()
        }
        scrollMenu()
        return false
      }
    })
    return
  }
  $('#ul_menu a').each(function(){
    if ($(this).attr('href') && url.indexOf($(this).attr('href')) != -1) {
      $(this).closest('li').addClass('menu_active')
      if ($(this).closest('li').closest('ul').closest('li')) {
        $(this).closest('li').closest('ul').closest('li').find('.collapsible-header').click()
        scrollMenu()
        return false
      }
    }
  })
}

function scrollMenu() {
  setTimeout(function(){
    var container = $('#slide-out')
    var pos = container.find('li.menu_active').offset().top
    var winHeight = $(window).height()
    if (pos > winHeight-100) {
      container.animate({scrollTop: pos-(winHeight/4)})
    }
  }, 500)
}

function getUrlVars(_key) {
  var vars = [], hash, nbVars = 0;
  var hashes = window.location.search.replace('?','').split('&');
  for (var i = 0; i < hashes.length; i++) {
    if (hashes[i] !== "" && hashes[i] !== "?") {
      hash = hashes[i].split('=');
      nbVars++;
      vars[hash[0]] = hash[1];
      if (_key && _key == hash[0]) {
        return hash[1];
      }
    }
  }
  if (!_key) {
    return false;
  }
  vars.length = nbVars;
  return vars;
}

if($('#div_searchBar')){
  var html = "<div>";
  html += "<script>";
  html += "(function() {";
  html += "var cx = '007992890294536312136:75s0-jhumye';";
  html += "var gcse = document.createElement('script');";
  html += "gcse.type = 'text/javascript';";
  html += "gcse.async = true;";
  html += "gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;";
  html += "var s = document.getElementsByTagName('script')[0];";
  html += "s.parentNode.insertBefore(gcse, s);";
  html += "})();";
  html += "window.onload = function(){";
  html += "$('#gsc-i-id1').removeAttr( 'style' );";
  html += "$('#gsc-i-id1').attr('style','width: 100%; padding: 0px; border: none; margin: -0.0625em 0px 0px; height: 1.25em; outline: none; background-image: url(https://www.google.com/cse/static/images/1x/googlelogo_lightgrey_46x16dp.png); text-indent: 48px; background-position: left center; background-repeat: no-repeat no-repeat;');";
    if(lang == 'fr_FR'){
      html += "$('#gsc-i-id1').attr('placeholder','Rechercher...');";
    }else if(lang == 'en_US'){
      html += "$('#gsc-i-id1').attr('placeholder','Search...');";
    }else if(lang == 'es_ES'){
      html += "$('#gsc-i-id1').attr('placeholder','Buscar...');";
    }else if(lang == 'de_DE'){
      html += "$('#gsc-i-id1').attr('placeholder','Suche...');";
    }
    html += "};";
    html += "</script>";
    html += "<gcse:search></gcse:search>";
    html += "</div>";
    $('#div_searchBar').empty().append(html);
    setTimeout(function(){
      $('.gsib_a input').addClass('browser-default');
    }, 1000);
  }
