---
title: .NET Email Processing API til at manipulere Outlook-e-mail-filer
description: Førende e-mail-behandlingsbibliotek til .NET til at administrere Thunderbird- og Outlook-filformater inklusive MSG, EML og MBOX via SMPT-, POP3- og IMAP-protokoller.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle=".NET Email Processing API til at manipulere Outlook-e-mail-filer"
  inheadertext="Forenkle processen med at manipulere Microsoft Outlook og Mozilla Thunderbird e-mail-filer på tværs af dine C#-, ASP.NET- og VB.NET-apps. Arbejd med filformaterne MSG, EML, PST, OST, MBOX, VCF og HTML. Administrer e-mail-meddelelser og vedhæftede filer via POP3, SMTP, IMAP eller Microsoft Exchange Server."
  ctabtn="Download gratis prøveversion"
  ctabtn="Download gratis prøveversion"
  ctalink="https://releases.aspose.com/email/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Se alle API'er"
  bchomelink="/"
  bchome="Hjem"
  bcpage="E-mail"
  bclink2="Produkter"
  bclink3=".NET"
  bclink2url="/products/"
  bclink3url="/products/net/"
  >}}
{{< homepage/conholdate/com/inner-wrapper/sub-nav 
subnav1="#overview"
subnavtxt1="Oversigt" 
subnav2="#features"
subnavtxt2="Funktioner" 
subnav3="#support"
subnavtxt3="Support" 
subnav4="#examples"
subnavtxt4="Eksempler" 
subnav5="https://purchase.aspose.com/pricing/email/net"
subnavtxt5="Prissætning" 
subbtn1="https://docs.aspose.com/email/net/"
subbtntxt1="Lære"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="Købe"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="En omfattende .NET Email API til at manipulere og behandle e-mail-meddelelser"
   subtext="Aspose.Email til .NET er en fleksibel, robust og brugervenlig e-mail-behandlings-API, der gør det muligt for brugere at oprette, ændre og analysere populære e-mail-filformater som MSG, PST, OST, EML, EMLX, MBOX, samt som VCF, HTML og MHTML i .NET-platformen. Dette giver brugerne mulighed for at arbejde med forskellige e-mail-meddelelsesformater uden at bekymre sig om problemer med formatkompatibilitet. Ud over at få adgang til og administrere Thunderbird- og Outlook-e-mails kan udviklere bruge .NET Email API til programmæssigt at manipulere vedhæftede filer, tilføje eller fjerne modtagere, ændre meddelelsens emne og gøre meget mere. "
   subtext2="Evnen til at konvertere e-mail-meddelelser fra et format til et andet på tværs af C#, ASP.NET og VB.NET gør desuden, at denne .NET-e-mail-behandlings-API skiller sig ud i brug og funktionssæt. Du kan ubesværet sende og modtage e-mail-beskeder ved hjælp af protokollen efter eget valg blandt POP3, SMTP, IMAP eller oprette forbindelse til Microsoft Exchange Server. Aspose.Email til .NET hjælper dig med at automatisere e-mail-administrationsprocessen effektivt."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Kom godt i gang</h2>
   <p>Tjek venligst siden <a href="https://docs.aspose.com/email/net/system-requirements/">Systemkrav</a> for forudsætningerne, før du opsætter Aspose.Email til .NET i din ende . Følgende oplysninger hjælper dig med at konfigurere .NET emailing API korrekt.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.Email til .NET-installation"
>}}
<p>For at downloade DLL'erne eller MSI-installationsprogrammet skal du besøge <a href="https://releases.aspose.com/email/net/">downloadsektionen</a>. Alternativt kan du bruge <a href="https://www.nuget.org/packages/Aspose.Email/">NuGet-pakken</a> til API-installation. Pakkehåndteringskommandoen til opsætning af .NET-e-mail-behandlings-API'en er delt nedenfor:</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp3"
>}}
PM > Install-Package Aspose.Email
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Sådan konverteres Outlook-e-mails til HTML og åbner e-mail-beskeder uden Outlook i .NET"
featuretext="Aspose.Email for .NET API gør det muligt at konvertere MSG- og EML-meddelelser til HTML-format. Det understøtter også adgang til og åbning af Outlook-e-mails i dine .NET-apps uden brug af Microsoft Outlook."
>}}  
{{< products/product-feature-blocks-col
featurecolheading="Konverter MSG- eller EML-filer til HTML i .NET"
>}}
<p>Forvandl problemfrit Outlook-e-mails til HTML-format ved hjælp af Aspose.Email for .NET-biblioteket. Du kan udvikle et fuldt udstyret e-mailbehandlingsprogram ved hjælp af .NET e-mailing API og inkorporere e-mailkonverteringsfunktionaliteten til at konvertere MSG- eller EML-formater til HTML. Se venligst kodestykket og andre oplysninger, der deles nedenfor til dette formål:</p>
<ul>
   <li>Instantiér klasseobjektet <a href="https://reference.aspose.com/email/net/aspose.email/mailmessage/">MailMessage</a> for at få adgang til kilde-MSG- eller EML-filen.</li>
   <li>Anvend HTML-lagringsindstillingerne for output-HTML-filen.</li>
   <li>Gem eller eksporter MSG-filen i HTML-format ved at bruge metoden Gem.</li>
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
featurecolheading="Åbn e-mails i .NET uden Outlook"
>}}
<p>Ønsker du at åbne Outlook-meddelelser i dine .NET-e-mailbehandlingsapps uden at installere Microsoft Outlook? Hvis ja, er Aspose.Email til .NET API det rigtige valg for dig. Det giver .NET-udviklere mulighed for at få adgang til og åbne MSG-e-mail-filer og hente oplysninger såsom e-mail-emne, afsenderadresse og vedhæftede filer. Tjek venligst følgende oplysninger for at lære mere:</p>
<ul>
   <li>Indlæs kilde-MSG-e-mail-filen i et <a href="https://reference.aspose.com/email/net/aspose.email.mapi/mapimessage/">MapiMessage</a> klasseobjekt.</li>
   <li>Læs og vis forskellige egenskaber for MSG-filen.</li>
   <li>Parse gennem <a href="https://reference.aspose.com/email/net/aspose.email.mapi/mapimessageitembase/attachments">vedhæftede filer</a> og læs/vis forskellige egenskaber for vedhæftede filer i MSG'en fil.</li>
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
   <p class="col-lg-12">For at se flere arbejdseksempler og kodningseksempler af Aspose.Email til .NET API, besøg venligst <a href="https://github.com/aspose-email/Aspose.Email-for-.NET/tree/master/">GitHub-eksempler</a>-side. Vi leverer også <a href="https://products.aspose.app/email/family">gratis online apps</a> til Aspose.Email for at hjælpe dig med at konvertere, sammenligne, se, vandmærke, flette, redigere og signer dine e-mail-filer digitalt på farten ved hjælp af dine mobile enheder.</p>
{{< products/product-feature-blocks
featureheading="E-mail-parsing uden afhængigheder i .NET"
featuretext=".NET-udviklere, der arbejder med flere e-mail-filformater, kan bruge de omfattende funktioner i Aspose.Email for .NET til at bygge e-mail-behandlingsapps fyldt med evnen til sikkert og uafhængigt at analysere og gemme e-mail-beskeder. Microsoft Automation eller anden tredjepartssoftware er ikke påkrævet, fordi denne .NET email API er bygget ved hjælp af administreret kode."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="FAQ"
>}}
   {{< products/faq-block
 faqquery="1. Hvordan kan jeg konvertere e-mail-filer i .NET?"
 faqanswer="Konvertering af Microsoft Exchange- eller Thunderbird-e-mail-filer i .NET er hurtigt og nemt ved at bruge Aspose.Email til .NET API. Kun et par linjer med .NET-kodning er nødvendige for at konvertere MSG-, PST-, OST-, EML-, EMLX-, MBOX- og HTML-filer til forskellige filformater."
>}}
   {{< products/faq-block 
 faqquery="2. Hvor lang tid tager det at konvertere eller behandle e-mail-filer?"
 faqanswer=".NET API til at manipulere og behandle e-mail-filer fungerer hurtigt og fuldender dine anmodninger om e-mail-filkonvertering på ingen tid."
>}}
   {{< products/faq-block
 faqquery="3. Er det sikkert at behandle e-mails ved hjælp af .NET API?"
 faqanswer="Du kan være sikker på sikkerheden af dine e-mail-meddelelsesfiler, mens du behandler dem ved hjælp af Aspose.Email til .NET API. Vi sikrer privatlivets fred for dine data og træffer alle nødvendige foranstaltninger for at give dig en sikker brugeroplevelse."
>}}
   {{< products/faq-block
 faqquery="4. Kan jeg behandle e-mail-filer på Mac OS, Windows eller Linux?"
 faqanswer="Ja, e-mail-behandlings-API'en til .NET fungerer på tværs af forskellige operativsystemer, rammer og driftsmiljøer. Du kan bruge det på den platform, du vælger, og det kræver ingen yderligere softwareinstallation for at fungere."
>}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="E-mail-filmanipulationsværktøjer"
   >}}
   {{< products/popularapp-anchor
 anchorlink="MSG til PDF"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-pdf/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MSG til EML"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-eml/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MSG til HTML"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-html/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MSG til MBOX"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-mbox/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MSG til PST"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-pst/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MSG til VCF"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-vcf/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="EML til PDF"
 moreproducts="https://products.aspose.com/email/net/conversion/eml-to-pdf/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="EML til HTML"
 moreproducts="https://products.aspose.com/email/net/conversion/eml-to-html/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="EML til MSG"
 moreproducts="https://products.aspose.com/email/net/conversion/eml-to-msg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MBOX til XPS"
 moreproducts="https://products.aspose.com/email/net/conversion/mbox-to-xps/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="OST til PST"
 moreproducts="https://products.aspose.com/email/net/conversion/ost-to-pst/"
>}}  
   {{< products/popularapp-anchor
 anchorlink="PST til EML"
 moreproducts="https://products.aspose.com/email/net/conversion/pst-to-eml/"
 >}}
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Leder du efter hjælp?"
bartext="Tjek vores supportkanaler for at få hjælp til dine spørgsmål relateret til Aspose-produkt API-funktioner og arbejde."
 resourcetxt1="Docs"
 resourcelinks1="https://docs.aspose.com/email/net/"
 resourcetxt2="API-reference"
 resourcelinks2="https://reference.aspose.com/email/" 
 resourcetxt3="Vidensbase"
 resourcelinks3="https://kb.aspose.com/email/net/"
 resourcetxt4="Gratis support"
 resourcelinks4="https://forum.aspose.com/c/email/12"  >}}
{{< homepage/aspose/com/inner-wrapper/resources-wrapper
 resource-heading="Ressourcer sectionid=support"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://blog.aspose.com/"
 resourcetitle="Blogs"
 resourcealt="Blogs"
 resourceimg="/images/blog1.svg"
 resourcelistlink="https://blog.aspose.com/email/create-mime-messages-in-csharp/"
 resourcelistlink2="https://blog.aspose.com/email/merge-multiple-mbox-files-in-csharp/"
 resourcelistlink3="https://blog.aspose.com/cells/send-excel-data-in-email-body-using-csharp-net/"
 resourcelisttext="Opret MIME-meddelelser i C# .NET"
 resourcelisttext2="Flet flere MBOX-filer i C#"
 resourcelisttext3="Send Excel-data i Email Body ved hjælp af C# .NET"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://docs.aspose.com/"
 resourcetitle="Dokumentation"
 resourcealt="Dokumentation"
 resourceimg="/img/docs1.svg"
 resourcelistlink="https://docs.aspose.com/email/net/features-overview/"
 resourcelistlink2="https://www.nuget.org/packages/Aspose.Email/"
 resourcelistlink3="https://helpdesk.aspose.com/"
 resourcelisttext="Aspose.Email til .NET-funktioner"
 resourcelisttext2="Installer Aspose.Email til .NET NuGet Package"
 resourcelisttext3="Aspose.Email for .NET Paid Support Helpdesk"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://kb.aspose.com/"
 resourcetitle="Vidensbase"
 resourcealt="Kodeprøver"
 resourceimg="/images/code1.svg"
 resourcelistlink="https://kb.aspose.com/email/net/how-to-send-email-in-c-sharp/"
 resourcelistlink2="https://kb.aspose.com/email/net/how-to-create-a-pst-file-in-csharp/"
 resourcelistlink3="https://kb.aspose.com/email/net/how-to-add-mapicalendar-to-pst-using-csharp/"
 resourcelisttext="Sådan sender du e-mail i C#"
resourcelisttext2="Sådan opretter du en PST-fil i C#"
resourcelisttext3="Sådan tilføjes MapiCalendar til PST ved hjælp af C#"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Klar til at komme i gang?"
rtstext="Download gratis prøveversion"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="Se alle API'er"
>}}
