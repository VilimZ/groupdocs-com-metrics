---
title: .NET Email Processing API az Outlook e-mail fájlok kezeléséhez
description: Vezető e-mail-feldolgozási könyvtár a .NET-hez a Thunderbird és az Outlook fájlformátumok kezelésére, beleértve az MSG-t, EML-t és MBOX-ot SMPT, POP3 és IMAP protokollokon keresztül.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle=".NET Email Processing API az Outlook e-mail fájlok kezeléséhez"
  inheadertext="Egyszerűsítse a Microsoft Outlook és a Mozilla Thunderbird e-mail fájlok kezelését a C#, ASP.NET és VB.NET alkalmazásokban. Dolgozzon MSG, EML, PST, OST, MBOX, VCF és HTML fájlformátumokkal. Az e-mail üzenetek és mellékletek programozott kezelése POP3, SMTP, IMAP vagy Microsoft Exchange Server segítségével."
  ctabtn="Ingyenes próbaverzió letöltése"
  ctabtn="Ingyenes próbaverzió letöltése"
  ctalink="https://releases.aspose.com/email/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Az összes API megtekintése"
  bchomelink="/"
  bchome="itthon"
  bcpage="Email"
  bclink2="Termékek"
  bclink3=".NET"
  bclink2url="/products/"
  bclink3url="/products/net/"
  >}}
{{< homepage/conholdate/com/inner-wrapper/sub-nav 
subnav1="#overview"
subnavtxt1="Áttekintés" 
subnav2="#features"
subnavtxt2="Jellemzők" 
subnav3="#support"
subnavtxt3="Támogatás" 
subnav4="#examples"
subnavtxt4="Példák" 
subnav5="https://purchase.aspose.com/pricing/email/net"
subnavtxt5="Árazás" 
subbtn1="https://docs.aspose.com/email/net/"
subbtntxt1="Tanul"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="megvesz"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="Átfogó .NET Email API az e-mail üzenetek kezeléséhez és feldolgozásához"
   subtext="Az Aspose.Email for .NET egy rugalmas, robusztus és könnyen használható e-mail-feldolgozó API, amely lehetővé teszi a felhasználók számára olyan népszerű e-mail fájlformátumok létrehozását, módosítását és elemzését, mint az MSG, PST, OST, EML, EMLX, MBOX stb. mint VCF, HTML és MHTML a .NET platformon. Ez lehetővé teszi a felhasználók számára, hogy különböző e-mail-formátumokkal dolgozzanak anélkül, hogy aggódnának a formátum-kompatibilitási problémák miatt. A Thunderbird és Outlook e-mailek elérésén és kezelésén túl a fejlesztők a .NET Email API segítségével programozottan kezelhetik az e-mail mellékleteket, hozzáadhatnak vagy eltávolíthatnak címzetteket, módosíthatják az üzenet tárgyát, és még sok mást tehetnek. "
   subtext2="Ezen túlmenően az e-mail üzenetek C#, ASP.NET és VB.NET hálózaton keresztüli egyik formátumból a másikba konvertálhatósága révén ez a .NET e-mail feldolgozó API használatban és szolgáltatáskészletben is kitűnik. Könnyedén küldhet és fogadhat e-mail üzeneteket az Ön által választott POP3, SMTP, IMAP protokoll használatával, vagy csatlakozhat a Microsoft Exchange Serverhez. Az Aspose.Email for .NET segít az e-mail-kezelési folyamat hatékony automatizálásában."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Elkezdeni</h2>
   <p>Kérjük, ellenőrizze az előfeltételeket a <a href="https://docs.aspose.com/email/net/system-requirements/">Rendszerkövetelmények</a> oldalon, mielőtt beállítaná az Aspose.Emailt .NET-hez. . A következő információk segítenek a .NET levelező API helyes beállításában.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.Email .NET telepítéshez"
>}}
<p>A DLL-ek vagy az MSI-telepítő letöltéséhez keresse fel a <a href="https://releases.aspose.com/email/net/">letöltések részt</a>. Alternatív megoldásként használhatja a <a href="https://www.nuget.org/packages/Aspose.Email/">NuGet csomagot</a> az API telepítéséhez. A .NET e-mail feldolgozó API beállításához szükséges csomagkezelő parancs az alábbiakban található:</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp3"
>}}
PM > Install-Package Aspose.Email
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Outlook e-mailek konvertálása HTML formátumba és e-mail üzenetek megnyitása Outlook nélkül a .NET-ben"
featuretext="Az Aspose.Email for .NET API lehetővé teszi az MSG és EML üzenetek programozott konvertálását HTML formátumba. Támogatja továbbá az Outlook e-mailek elérését és megnyitását .NET-alkalmazásaiban anélkül, hogy Microsoft Outlookra lenne szüksége."
>}}  
{{< products/product-feature-blocks-col
featurecolheading="Konvertálja az MSG- vagy EML-fájlokat HTML-vé a .NET-ben"
>}}
<p>Az Aspose.Email for .NET könyvtár segítségével zökkenőmentesen alakíthatja át az Outlook e-mailjeit HTML formátumba. A .NET e-mailezési API használatával teljes funkcionalitású e-mail-feldolgozó alkalmazást fejleszthet, és beépítheti az e-mail-konverziós funkciót az MSG vagy EML formátumok HTML formátumba konvertálásához. Kérjük, tekintse meg a kódrészletet és az alább megosztott egyéb információkat ebből a célból:</p>
<ul>
   <li>Példányosítsa a <a href="https://reference.aspose.com/email/net/aspose.email/mailmessage/">MailMessage</a> osztályobjektumot a forrás MSG- vagy EML-fájl eléréséhez.</li>
   <li>Alkalmazza a HTML mentési beállításokat a kimeneti HTML-fájlhoz.</li>
   <li>Mentse vagy exportálja az MSG fájlt HTML formátumban a Mentés módszerrel.</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp1"
>}}
string FilePath = @"/Users/EmailData/";
// Load the MSG or EML file
MailMessage srcEmlMessage = MailMessage.Load(FilePath + "Message.msg");
// Set the Html rendering options
HtmlSaveOptions HtmlOptions = SaveOptions.DefaultHtml;
HtmlOptions.ResourceRenderingMode= resourceRenderingMode.EmbedIntoHtml;
// Set the email message headers in  output HTML using the formatting options
HtmlOptions.HtmlFormatOptions = HtmlFormatOptions.WriteHeader |
				HtmlFormatOptions.WriteCompleteEmailAddress |
				HtmlFormatOptions.WriteCompleteFromEmailAddress;
// Convert and save the email to HTML format
srcEmlMessage.Save(FilePath + "Message.html", HtmlOptions);
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks-col
featurecolheading="Nyissa meg az E-maileket .NET-ben Outlook nélkül"
>}}
<p>A Microsoft Outlook telepítése nélkül szeretné megnyitni az Outlook-üzeneteket a .NET e-mail-feldolgozó alkalmazásaiban? Ha igen, az Aspose.Email for .NET API a megfelelő választás az Ön számára. Lehetővé teszi a .NET fejlesztők számára az MSG e-mail fájlok elérését és megnyitását, valamint olyan információk lekérését, mint az e-mail tárgya, feladó címe és mellékletei. További információért ellenőrizze az alábbi információkat:</p>
<ul>
   <li>Töltse be a forrás MSG e-mail fájlt egy <a href="https://reference.aspose.com/email/net/aspose.email.mapi/mapimessage/">MapiMessage</a> osztályobjektumba.</li>
   <li>Olvassa el és jelenítse meg az MSG fájl különböző tulajdonságait.</li>
   <li>Elemezze át a <a href="https://reference.aspose.com/email/net/aspose.email.mapi/mapimessageitembase/attachments">mellékleteket</a>, és olvassa el és jelenítse meg a mellékletek különböző tulajdonságait az MSG-ben fájlt.</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp2"
>}}
// Load the MSG file
MapiMessage mapiMsg = MapiMessage.Load("message.msg");
// Display email subject
Console.WriteLine("Subject:" + mapiMsg.Subject);
// Display sender address
Console.WriteLine("From:" + mapiMsg.SenderEmailAddress);
// Display email body
Console.WriteLine("Body" + mapiMsg.Body);
// Display recipients' information
Console.WriteLine("Recipient: " + mapiMsg.Recipients);
// Display email attachments
foreach (MapiAttachment att in mapiMsg.Attachments)
{
     Console.Write("File Name: " + att.FileName);
     Console.Write("Display Name: " + att.DisplayName);
}
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< /products/product-feature-blocks >}}
   <p class="col-lg-12">Az Aspose.Email for .NET API további működő példáinak és kódolási mintáinak megtekintéséhez keresse fel a <a href="https://github.com/aspose-email/Aspose.Email-for-.NET/tree/master/">GitHub-példák</a> oldalon. Emellett <a href="https://products.aspose.app/email/family">ingyenes online alkalmazásokat</a> is biztosítunk az Aspose.Email számára, amelyek segítenek a konvertálásban, összehasonlításban, megtekintésben, vízjellel, egyesítésben, szerkesztésben és digitálisan aláírhatja e-mail fájljait, menet közben a mobileszközök segítségével.</p>
{{< products/product-feature-blocks
featureheading="E-mail-elemzés függőségek nélkül a .NET-ben"
featuretext="A többféle e-mail fájlformátummal dolgozó .NET-fejlesztők az Aspose.Email for .NET kiterjedt szolgáltatásait kihasználva olyan e-mail-feldolgozó alkalmazásokat hozhatnak létre, amelyek képesek az e-mail üzenetek biztonságos és független elemzésére és tárolására. A Microsoft Automation vagy bármely más harmadik féltől származó szoftver nem szükséges, mert ez a .NET e-mail API felügyelt kódot használ."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="GYIK"
>}}
   {{< products/faq-block
 faqquery="1. Hogyan konvertálhatok e-mail fájlokat .NET-ben?"
 faqanswer="A Microsoft Exchange vagy a Thunderbird e-mail fájlok konvertálása .NET-ben gyors és egyszerű az Aspose.Email for .NET API használatával. Csak néhány sornyi .NET kód szükséges az MSG, PST, OST, EML, EMLX, MBOX és HTML fájlok különböző fájlformátumokká konvertálásához."
>}}
   {{< products/faq-block 
 faqquery="2. Mennyi ideig tart az e-mail fájlok konvertálása vagy feldolgozása?"
 faqanswer="Az e-mail fájlok kezelésére és feldolgozására szolgáló .NET API gyorsan működik, és pillanatok alatt teljesíti az e-mail fájlkonverziós kéréseket."
>}}
   {{< products/faq-block
 faqquery="3. Biztonságos az e-mailek feldolgozása a .NET API használatával?"
 faqanswer="Az Aspose.Email for .NET API használatával biztos lehet e-mail üzeneteinek biztonságában. Biztosítjuk adatainak védelmét, és minden szükséges intézkedést megteszünk a biztonságos felhasználói élmény biztosítása érdekében."
>}}
   {{< products/faq-block
 faqquery="4. Feldolgozhatom az e-mail fájlokat Mac OS, Windows vagy Linux rendszeren?"
 faqanswer="Igen, a .NET e-mail-feldolgozási API-ja különböző operációs rendszereken, keretrendszereken és operációs környezeteken működik. Használhatja a választott platformon, és működéséhez nincs szükség további szoftver telepítésére."
>}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="E-mail fájlkezelési eszközök"
   >}}
   {{< products/popularapp-anchor
 anchorlink="MSG-ből PDF-be"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-pdf/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MSG az EML-nek"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-eml/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MSG-ből HTML-be"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-html/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MSG az MBOX-hoz"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-mbox/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MSG a PST-nek"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-pst/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MSG a VCF-hez"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-vcf/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="EML-ből PDF-be"
 moreproducts="https://products.aspose.com/email/net/conversion/eml-to-pdf/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="EML-ből HTML-be"
 moreproducts="https://products.aspose.com/email/net/conversion/eml-to-html/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="EML az MSG-hez"
 moreproducts="https://products.aspose.com/email/net/conversion/eml-to-msg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MBOX-ról XPS-re"
 moreproducts="https://products.aspose.com/email/net/conversion/mbox-to-xps/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="OST - PST"
 moreproducts="https://products.aspose.com/email/net/conversion/ost-to-pst/"
>}}  
   {{< products/popularapp-anchor
 anchorlink="PST az EML-re"
 moreproducts="https://products.aspose.com/email/net/conversion/pst-to-eml/"
 >}}
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Segítséget keres?"
bartext="Az Aspose termék API funkcióival és működésével kapcsolatos kérdéseivel kapcsolatban keresse fel támogatási csatornáinkat."
 resourcetxt1="Docs"
 resourcelinks1="https://docs.aspose.com/email/net/"
 resourcetxt2="API-referencia"
 resourcelinks2="https://reference.aspose.com/email/" 
 resourcetxt3="Tudásbázis"
 resourcelinks3="https://kb.aspose.com/email/net/"
 resourcetxt4="Ingyenes támogatás"
 resourcelinks4="https://forum.aspose.com/c/email/12"  >}}
{{< homepage/aspose/com/inner-wrapper/resources-wrapper
 resource-heading="Források sectionid=támogatás"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://blog.aspose.com/"
 resourcetitle="Blogok"
 resourcealt="Blogok"
 resourceimg="/images/blog1.svg"
 resourcelistlink="https://blog.aspose.com/email/create-mime-messages-in-csharp/"
 resourcelistlink2="https://blog.aspose.com/email/merge-multiple-mbox-files-in-csharp/"
 resourcelistlink3="https://blog.aspose.com/cells/send-excel-data-in-email-body-using-csharp-net/"
 resourcelisttext="Hozzon létre MIME üzeneteket a C# .NET-ben"
 resourcelisttext2="Több MBOX fájl egyesítése C#-ban"
 resourcelisttext3="Excel-adatok küldése az e-mail törzsben a C# .NET használatával"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://docs.aspose.com/"
 resourcetitle="Dokumentáció"
 resourcealt="Dokumentáció"
 resourceimg="/img/docs1.svg"
 resourcelistlink="https://docs.aspose.com/email/net/features-overview/"
 resourcelistlink2="https://www.nuget.org/packages/Aspose.Email/"
 resourcelistlink3="https://helpdesk.aspose.com/"
 resourcelisttext="Aspose.Email a .NET-szolgáltatásokhoz"
 resourcelisttext2="Telepítse az Aspose.Email-t a .NET NuGet csomaghoz"
 resourcelisttext3="Aspose.Email a .NET fizetett támogatási ügyfélszolgálatához"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://kb.aspose.com/"
 resourcetitle="Tudásbázis"
 resourcealt="Kódminták"
 resourceimg="/images/code1.svg"
 resourcelistlink="https://kb.aspose.com/email/net/how-to-send-email-in-c-sharp/"
 resourcelistlink2="https://kb.aspose.com/email/net/how-to-create-a-pst-file-in-csharp/"
 resourcelistlink3="https://kb.aspose.com/email/net/how-to-add-mapicalendar-to-pst-using-csharp/"
 resourcelisttext="Hogyan küldjünk e-mailt C#-ban"
resourcelisttext2="PST-fájl létrehozása C#-ban"
resourcelisttext3="A MapiCalendar hozzáadása a PST-hez a C# használatával"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Készen áll az indulásra?"
rtstext="Ingyenes próbaverzió letöltése"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="Az összes API megtekintése"
>}}
