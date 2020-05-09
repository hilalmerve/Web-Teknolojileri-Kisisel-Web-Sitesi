

function isValid()
{
    var adi = document.getElementById("adi").value;
    var soyadi = document.getElementById("soyadi").value;
    var email = document.getElementById("email").value;
	var mesaj = document.getElementById("mesaj").value;
	var radiob = document.getElementsByName("cinsiyet");
	var radioadet;
	radioadet = radiob.length;
	var value;
	value = "";
	
	
	for(var i = 0; i < radioadet; i++)
	{
		if(radiob[i].checked){
			value = radiob[i].value;
		}
	}
    var atpos=email.indexOf("@");
    var dotpos=email.lastIndexOf(".");
    if ( adi==null || adi=="" || adi.length < 2 )
    {
        alert("Lütfen adınızı giriniz.");
        return false;
    }
	if ( soyadi==null || soyadi=="" || soyadi.length < 2 )
    {
        alert("Lütfen soyadınızı giriniz.");
        return false;
    }
	 if ( atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length )
    {
        alert("Geçerli email adresi girin");
        return false;
    }     
	if (email == "" || email == null)
	{
			alert("Lütfen email adresinizi giriniz.")
	}	
	if(value == "")
	{
		alert("Cinsiyetinizi işaretleyiniz.");
return false ;
	}
	if(sayac == "")
	{
		alert("Bir şehir seçiniz.");
return false ;
	}
	if ( mesaj==null || mesaj=="")
    {
        alert("Mesaj kutusunu boş bırakmayınız.");
        return false;
    }
    return true;
}










