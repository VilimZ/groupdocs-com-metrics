---
title: .NET Email Processing API om Outlook e-mailbestanden te manipuleren
description: Toonaangevende e-mailverwerkingsbibliotheek voor .NET voor het beheer van Thunderbird- en Outlook-bestandsindelingen, waaronder MSG, EML en MBOX via SMPT-, POP3- en IMAP-protocollen.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle=".NET Email Processing API om Outlook e-mailbestanden te manipuleren"
  inheadertext="Vereenvoudig het proces van het manipuleren van e-mailbestanden van Microsoft Outlook en Mozilla Thunderbird in uw C#-, ASP.NET- en VB.NET-apps. Werk met MSG-, EML-, PST-, OST-, MBOX-, VCF- en HTML-bestandsindelingen. Beheer e-mailberichten en bijlagen programmatisch via POP3, SMTP, IMAP of Microsoft Exchange Server."
  ctabtn="Download gratis proefversie"
  ctabtn="Download gratis proefversie"
  ctalink="https://releases.aspose.com/email/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Bekijk alle API's"
  bchomelink="/"
  bchome="Thuis"
  bcpage="E-mail"
  bclink2="Producten"
  bclink3=".NET"
  bclink2url="/products/"
  bclink3url="/products/net/"
  >}}
{{< homepage/conholdate/com/inner-wrapper/sub-nav 
subnav1="#overview"
subnavtxt1="Overzicht" 
subnav2="#features"
subnavtxt2="Functies" 
subnav3="#support"
subnavtxt3="Steun" 
subnav4="#examples"
subnavtxt4="Voorbeelden" 
subnav5="https://purchase.aspose.com/pricing/email/net"
subnavtxt5="prijzen" 
subbtn1="https://docs.aspose.com/email/net/"
subbtntxt1="Leren"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="Kopen"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="Een uitgebreide .NET Email API voor het manipuleren en verwerken van e-mailberichten"
   subtext="Aspose.Email voor .NET is een flexibele, robuuste en gebruiksvriendelijke API voor e-mailverwerking waarmee gebruikers populaire e-mailbestandsindelingen zoals MSG, PST, OST, EML, EMLX en MBOX kunnen maken, wijzigen en analyseren als VCF, HTML en MHTML in het .NET-platform. Hierdoor kunnen gebruikers met verschillende indelingen voor e-mailberichten werken zonder zich zorgen te hoeven maken over problemen met de compatibiliteit van indelingen. Naast toegang tot en beheer van Thunderbird- en Outlook-e-mails, kunnen ontwikkelaars de .NET Email API gebruiken om e-mailbijlagen programmatisch te manipuleren, ontvangers toe te voegen of te verwijderen, het onderwerp van het bericht te wijzigen en nog veel meer. "
   subtext2="Bovendien zorgt de mogelijkheid om e-mailberichten van het ene formaat naar het andere te converteren in C#, ASP.NET en VB.NET ervoor dat deze .NET-API voor e-mailverwerking opvalt in gebruik en functieset. U kunt moeiteloos e-mailberichten verzenden en ontvangen met behulp van het protocol van uw keuze uit POP3, SMTP, IMAP of verbinding maken met Microsoft Exchange Server. Aspose.Email voor .NET helpt u het e-mailbeheerproces efficiënt te automatiseren."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Aan de slag</h2>
   <p>Controleer de pagina <a href="https://docs.aspose.com/email/net/system-requirements/">Systeemvereisten</a> voor de vereisten voordat u Aspose.Email voor .NET aan uw kant instelt . De volgende informatie zal u helpen de .NET e-mail API correct in te stellen.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.Email voor .NET-installatie"
>}}
<p>Om de DLL's of het MSI-installatieprogramma te downloaden, gaat u naar de <a href="https://releases.aspose.com/email/net/">downloadsectie</a>. U kunt ook het <a href="https://www.nuget.org/packages/Aspose.Email/">NuGet-pakket</a> gebruiken voor API-installatie. De opdracht voor pakketbeheer om de .NET-API voor e-mailverwerking in te stellen, wordt hieronder gedeeld:</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp3"
>}}
PM > Install-Package Aspose.Email
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Outlook-e-mails converteren naar HTML en e-mailberichten openen zonder Outlook in .NET"
featuretext="Aspose.Email voor .NET API maakt het programmatisch converteren van MSG- en EML-berichten naar HTML-indeling mogelijk. Het ondersteunt ook het openen en openen van Outlook-e-mails binnen uw .NET-apps zonder Microsoft Outlook."
>}}  
{{< products/product-feature-blocks-col
featurecolheading="Converteer MSG- of EML-bestanden naar HTML in .NET"
>}}
<p>Transformeer Outlook-e-mails naadloos naar HTML-indeling met behulp van Aspose.Email voor .NET-bibliotheek. U kunt een complete toepassing voor e-mailverwerking ontwikkelen met behulp van de .NET-e-mailing-API en de functionaliteit voor e-mailconversie integreren om MSG- of EML-indelingen naar HTML te converteren. Raadpleeg hiervoor het codefragment en andere informatie die hieronder wordt gedeeld:</p>
<ul>
   <li>Maak een instantiëring van het klasseobject <a href="https://reference.aspose.com/email/net/aspose.email/mailmessage/">MailMessage</a> om toegang te krijgen tot het MSG- of EML-bronbestand.</li>
   <li>Pas de HTML-opslagopties toe voor het uitvoer-HTML-bestand.</li>
   <li>Bewaar of exporteer het MSG-bestand in HTML-indeling met behulp van de methode Opslaan.</li>
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
featurecolheading="Open e-mails in .NET zonder Outlook"
>}}
<p>Wilt u Outlook-berichten openen in uw .NET-apps voor e-mailverwerking zonder Microsoft Outlook te installeren? Zo ja, dan is Aspose.Email voor .NET API de juiste keuze voor u. Hiermee kunnen .NET-ontwikkelaars MSG-e-mailbestanden openen en openen en informatie ophalen, zoals het e-mailonderwerp, het adres van de afzender en bijlagen. Controleer de volgende informatie voor meer informatie:</p>
<ul>
   <li>Laad het bron-MSG-e-mailbestand in een <a href="https://reference.aspose.com/email/net/aspose.email.mapi/mapimessage/">MapiMessage</a> klasse-object.</li>
   <li>Lees en toon verschillende eigenschappen van het MSG-bestand.</li>
   <li>Analyseer de <a href="https://reference.aspose.com/email/net/aspose.email.mapi/mapimessageitembase/attachments">bijlagen</a> en lees/toon verschillende eigenschappen van de bijlagen in de MSG bestand.</li>
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
   <p class="col-lg-12">Ga naar de <a href="https://github.com/aspose-email/Aspose.Email-for-.NET/tree/master/">GitHub voorbeelden</a> pagina. We bieden ook <a href="https://products.aspose.app/email/family">gratis online apps</a> voor Aspose.Email om u te helpen bij het converteren, vergelijken, bekijken, watermerken, samenvoegen, bewerken en onderteken uw e-mailbestanden on-the-fly digitaal met uw mobiele apparaten.</p>
{{< products/product-feature-blocks
featureheading="E-mailparsing zonder afhankelijkheden in .NET"
featuretext=".NET-ontwikkelaars die met meerdere e-mailbestandsindelingen werken, kunnen de uitgebreide functies van Aspose.Email voor .NET gebruiken om e-mailverwerkingsapps te bouwen die zijn geladen met de mogelijkheid om veilig en onafhankelijk e-mailberichten te parseren en op te slaan. Microsoft Automation of andere software van derden is niet vereist omdat deze .NET e-mail-API is gebouwd met behulp van beheerde code."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="FAQ"
>}}
   {{< products/faq-block
 faqquery="1. Hoe kan ik e-mailbestanden converteren naar .NET?"
 faqanswer="Het converteren van e-mailbestanden van Microsoft Exchange of Thunderbird in .NET is snel en eenvoudig met Aspose.Email voor .NET API. Er zijn slechts een paar regels .NET-codering nodig om MSG-, PST-, OST-, EML-, EMLX-, MBOX- en HTML-bestanden naar verschillende bestandsindelingen te converteren."
>}}
   {{< products/faq-block 
 faqquery="2. Hoe lang duurt het om e-mailbestanden te converteren of te verwerken?"
 faqanswer="De .NET API voor het manipuleren en verwerken van e-mailbestanden werkt snel en voltooit uw conversieverzoeken voor e-mailbestanden in een mum van tijd."
>}}
   {{< products/faq-block
 faqquery="3. Is het veilig om e-mails te verwerken met de .NET API?"
 faqanswer="U kunt zeker zijn van de veiligheid van uw e-mailberichtbestanden terwijl u ze verwerkt met Aspose.Email for .NET API. We waarborgen de privacy van uw gegevens en nemen alle vereiste maatregelen om u een veilige gebruikerservaring te bieden."
>}}
   {{< products/faq-block
 faqquery="4. Kan ik e-mailbestanden verwerken op Mac OS, Windows of Linux?"
 faqanswer="Ja, de e-mailverwerkings-API voor .NET werkt in verschillende besturingssystemen, frameworks en besturingsomgevingen. U kunt het gebruiken op het platform van uw keuze en er is geen extra software-installatie nodig om te functioneren."
>}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="Tools voor het manipuleren van e-mailbestanden"
   >}}
   {{< products/popularapp-anchor
 anchorlink="MSG naar PDF"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-pdf/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MSG naar EML"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-eml/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MSG naar HTML"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-html/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MSG naar MBOX"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-mbox/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MSG naar PST"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-pst/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MSG naar VCF"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-vcf/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="EML naar PDF"
 moreproducts="https://products.aspose.com/email/net/conversion/eml-to-pdf/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="EML naar HTML"
 moreproducts="https://products.aspose.com/email/net/conversion/eml-to-html/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="EML naar MSG"
 moreproducts="https://products.aspose.com/email/net/conversion/eml-to-msg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MBOX naar XPS"
 moreproducts="https://products.aspose.com/email/net/conversion/mbox-to-xps/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="OST naar PST"
 moreproducts="https://products.aspose.com/email/net/conversion/ost-to-pst/"
>}}  
   {{< products/popularapp-anchor
 anchorlink="PST naar EML"
 moreproducts="https://products.aspose.com/email/net/conversion/pst-to-eml/"
 >}}
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Op zoek naar hulp?"
bartext="Bekijk onze ondersteuningskanalen voor hulp bij uw vragen met betrekking tot Aspose-product-API-functies en -werking."
 resourcetxt1="Docs"
 resourcelinks1="https://docs.aspose.com/email/net/"
 resourcetxt2="API-referentie"
 resourcelinks2="https://reference.aspose.com/email/" 
 resourcetxt3="Kennis basis"
 resourcelinks3="https://kb.aspose.com/email/net/"
 resourcetxt4="Gratis ondersteuning"
 resourcelinks4="https://forum.aspose.com/c/email/12"  >}}
{{< homepage/aspose/com/inner-wrapper/resources-wrapper
 resource-heading="Bronnensectionid=support"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://blog.aspose.com/"
 resourcetitle="Blogs"
 resourcealt="Blogs"
 resourceimg="/images/blog1.svg"
 resourcelistlink="https://blog.aspose.com/email/create-mime-messages-in-csharp/"
 resourcelistlink2="https://blog.aspose.com/email/merge-multiple-mbox-files-in-csharp/"
 resourcelistlink3="https://blog.aspose.com/cells/send-excel-data-in-email-body-using-csharp-net/"
 resourcelisttext="Maak MIME-berichten in C# .NET"
 resourcelisttext2="Meerdere MBOX-bestanden samenvoegen in C#"
 resourcelisttext3="Verzend Excel-gegevens in e-mailtekst met behulp van C# .NET"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://docs.aspose.com/"
 resourcetitle="Documentatie"
 resourcealt="Documentatie"
 resourceimg="/img/docs1.svg"
 resourcelistlink="https://docs.aspose.com/email/net/features-overview/"
 resourcelistlink2="https://www.nuget.org/packages/Aspose.Email/"
 resourcelistlink3="https://helpdesk.aspose.com/"
 resourcelisttext="Aspose.Email voor .NET-functies"
 resourcelisttext2="Installeer Aspose.Email voor .NET NuGet-pakket"
 resourcelisttext3="Aspose.Email voor .NET betaalde ondersteuningshelpdesk"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://kb.aspose.com/"
 resourcetitle="Kennis basis"
 resourcealt="Codevoorbeelden"
 resourceimg="/images/code1.svg"
 resourcelistlink="https://kb.aspose.com/email/net/how-to-send-email-in-c-sharp/"
 resourcelistlink2="https://kb.aspose.com/email/net/how-to-create-a-pst-file-in-csharp/"
 resourcelistlink3="https://kb.aspose.com/email/net/how-to-add-mapicalendar-to-pst-using-csharp/"
 resourcelisttext="E-mail verzenden in C#"
resourcelisttext2="Hoe maak je een PST-bestand aan in C#"
resourcelisttext3="MapiCalendar aan PST toevoegen met C#"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="klaar om te beginnen?"
rtstext="Download gratis proefversie"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="Bekijk alle API's"
>}}
