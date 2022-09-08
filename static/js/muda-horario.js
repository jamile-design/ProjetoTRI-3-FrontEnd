
// Obtém a data/hora atual
var data = new Date();

var dia     = data.getDate();           // 1-31
var dia_sem = data.getDay();            // 0-6 (zero=domingo)
var mes     = data.getMonth();          // 0-11 (zero=janeiro)
var ano2    = data.getYear();           // 2 dígitos
var ano4    = data.getFullYear();       // 4 dígitos
var hora    = data.getHours();          // 0-23
var min     = data.getMinutes();        // 0-59
var seg     = data.getSeconds();        // 0-59
var mseg    = data.getMilliseconds();   // 0-999
var tz      = data.getTimezoneOffset(); // em minutos

// Formata a data e a hora (note o mês + 1)
var str_data = dia + '/' + (mes+1) + '/' + ano4;
var str_hora = hora + ':' + min + ':' + seg;

// Guarda cada pedaço em uma variável

var hora    = data.getHours();          // 0-23

if(hora <= 12){
    document.getElementById("mensagem").style.display = 'block';

} else if(hora > 12 && hora < 19) {
    document.getElementById("mensagem2").style.display = 'block';

} else if(hora > 18){
    document.getElementById("mensagem3").style.display = 'block';
}
