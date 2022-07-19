function daymonthyear() {
    var ngay = document.forms["ngaythangnamform"]["ngay"].value ;
    var thang = document.forms["ngaythangnamform"]["thang"].value ;
    var nam = document.forms["ngaythangnamform"]["nam"].value ;
    var ngaythangnam = ngay + thang + nam;
    document.getElementById("ngaythangnam").innerHTML= ngay + " - " + thang + " - " + nam;
}