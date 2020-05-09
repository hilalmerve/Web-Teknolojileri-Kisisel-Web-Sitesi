

	<?php
	$emailErr = $kullanicivesifre = "";
		if($_POST){
			session_start();
			$email = $_POST['kullanici'];

}
			$sifre = $_POST["sifre"];
			if($email == "" and $sifre == "")
			{
				echo "Kullanıcı adını veya şifrey alanını boş bırakmayınız."
			}else{
				
			}
			if($email == "b181210053@ogr.sakarya.edu.tr" and $sifre=="123"){
				$_SESSION["oturum"] = true;
				$_SESSION["kullanici"] = $email;
				$kulllanicivesifreD = "Hoşgeldin B181210053!";
				echo $kulllanicivesifreD;
				echo "&nbsp";
				echo "Hosgeldiniz B181210053";
				echo "Siteye Yönlendiriliyorsunuz..";
				header("Refresh:2; url= hakkimda.html");
			}else if($email != "b181210053@ogr.sakarya.edu.tr" and $sifre!="123"){
				$kullanicivesifre = "Kullanıcı Adı veya Şifreniz Yanlıştır.";
				echo $kullanicivesifre;
			}
			else if($email == ""){
				echo "Lütfen kullanıcı adınızı giriniz.";
			}
			else if($sifre == ""){
				echo "Lütfen şifrenizi giriniz.";
			}
		}
		
	?>
