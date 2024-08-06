---
title: .NET Email Processing API för att manipulera Outlook e-postfiler
description: Ledande e-postbehandlingsbibliotek för .NET för att hantera Thunderbird- och Outlook-filformat inklusive MSG, EML och MBOX via SMPT-, POP3- och IMAP-protokoll.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle=".NET Email Processing API för att manipulera Outlook e-postfiler"
  inheadertext="Förenkla processen att manipulera Microsoft Outlook och Mozilla Thunderbird e-postfiler över dina C#-, ASP.NET- och VB.NET-appar. Arbeta med filformaten MSG, EML, PST, OST, MBOX, VCF och HTML. Hantera e-postmeddelanden och bilagor programmerat via POP3, SMTP, IMAP eller Microsoft Exchange Server."
  ctabtn="Ladda ner gratis provversion"
  ctabtn="Ladda ner gratis provversion"
  ctalink="https://releases.aspose.com/email/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Visa alla API:er"
  bchomelink="/"
  bchome="Hem"
  bcpage="E-post"
  bclink2="Produkter"
  bclink3=".NET"
  bclink2url="/products/"
  bclink3url="/products/net/"
  >}}
{{< homepage/conholdate/com/inner-wrapper/sub-nav 
subnav1="#overview"
subnavtxt1="Översikt" 
subnav2="#features"
subnavtxt2="Funktioner" 
subnav3="#support"
subnavtxt3="Stöd" 
subnav4="#examples"
subnavtxt4="Exempel" 
subnav5="https://purchase.aspose.com/pricing/email/net"
subnavtxt5="Prissättning" 
subbtn1="https://docs.aspose.com/email/net/"
subbtntxt1="Lära sig"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="köpa"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="Ett omfattande .NET Email API för att manipulera och bearbeta e-postmeddelanden"
   subtext="Aspose.Email för .NET är ett flexibelt, robust och lättanvänt API för e-postbearbetning som gör det möjligt för användare att skapa, ändra och analysera populära e-postfilformat som MSG, PST, OST, EML, EMLX, MBOX, samt som VCF, HTML och MHTML i .NET-plattformen. Detta gör att användarna kan arbeta med olika format för e-postmeddelanden utan att oroa sig för problem med formatkompatibilitet. Förutom att komma åt och hantera e-postmeddelanden från Thunderbird och Outlook kan utvecklare använda .NET Email API för att programmässigt manipulera e-postbilagor, lägga till eller ta bort mottagare, ändra meddelandets ämne och göra mycket mer. "
   subtext2="Möjligheten att konvertera e-postmeddelanden från ett format till ett annat över C#, ASP.NET och VB.NET gör dessutom att detta .NET-e-postbearbetnings-API sticker ut i användning och funktionsuppsättning. Du kan enkelt skicka och ta emot e-postmeddelanden med det protokoll du väljer bland POP3, SMTP, IMAP eller ansluta till Microsoft Exchange Server. Aspose.Email för .NET hjälper dig att automatisera e-posthanteringsprocessen effektivt."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Komma igång</h2>
   <p>Vänligen kontrollera sidan <a href="https://docs.aspose.com/email/net/system-requirements/">Systemkrav</a> för förutsättningarna innan du ställer in Aspose.Email för .NET. . Följande information hjälper dig att korrekt ställa in .NET e-post API.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.Email för .NET-installation"
>}}
<p>För att ladda ner DLL-filerna eller MSI-installationsprogrammet, besök <a href="https://releases.aspose.com/email/net/">nedladdningssektionen</a>. Alternativt kan du använda <a href="https://www.nuget.org/packages/Aspose.Email/">NuGet-paketet</a> för API-installation. Pakethanterarens kommando för att ställa in .NET e-postbearbetnings-API:t delas nedan:</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp3"
>}}
PM > Install-Package Aspose.Email
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Hur man konverterar Outlook-e-postmeddelanden till HTML och öppnar e-postmeddelanden utan Outlook i .NET"
featuretext="Aspose.Email för .NET API möjliggör programmatisk konvertering av MSG- och EML-meddelanden till HTML-format. Det stöder också åtkomst och öppning av Outlook-e-postmeddelanden i dina .NET-appar utan att behöva Microsoft Outlook."
>}}  
{{< products/product-feature-blocks-col
featurecolheading="Konvertera MSG- eller EML-filer till HTML i .NET"
>}}
<p>Förvandla sömlöst Outlook-e-post till HTML-format med hjälp av Aspose.Email för .NET-biblioteket. Du kan utveckla ett fullfjädrat e-postbehandlingsprogram med hjälp av .NET e-post-API och införliva e-postkonverteringsfunktionen för att konvertera MSG- eller EML-format till HTML. Se kodavsnittet och annan information som delas nedan för detta ändamål:</p>
<ul>
   <li>Instantiera klassobjektet <a href="https://reference.aspose.com/email/net/aspose.email/mailmessage/">MailMessage</a> för att komma åt MSG- eller EML-källfilen.</li>
   <li>Använd HTML-sparalternativen för HTML-utdatafilen.</li>
   <li>Spara eller exportera MSG-filen i HTML-format med hjälp av Spara-metoden.</li>
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
featurecolheading="Öppna e-postmeddelanden i .NET utan Outlook"
>}}
<p>Vill du öppna Outlook-meddelanden i dina .NET-appar för e-postbehandling utan att installera Microsoft Outlook? Om ja, är Aspose.Email för .NET API det rätta valet för dig. Det tillåter .NET-utvecklare att komma åt och öppna MSG-e-postfiler och hämta information som e-postämne, avsändaradress och bilagor. Kontrollera följande information om du vill veta mer:</p>
<ul>
   <li>Ladda källfilen för MSG-e-post till ett <a href="https://reference.aspose.com/email/net/aspose.email.mapi/mapimessage/">MapiMessage</a> klassobjekt.</li>
   <li>Läs och visa olika egenskaper för MSG-filen.</li>
   <li>Analysera genom <a href="https://reference.aspose.com/email/net/aspose.email.mapi/mapimessageitembase/attachments">bilagor</a> och läs/visa olika egenskaper för bilagorna i MSG:n fil.</li>
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
   <p class="col-lg-12">För att se fler fungerande exempel och kodningsexempel av Aspose.Email för .NET API, besök <a href="https://github.com/aspose-email/Aspose.Email-for-.NET/tree/master/">GitHub-exempel</a>-sida. Vi tillhandahåller även <a href="https://products.aspose.app/email/family">gratis onlineappar</a> för Aspose.Email för att hjälpa dig konvertera, jämföra, visa, vattenstämpla, slå samman, redigera och signera dina e-postfiler digitalt i farten med dina mobila enheter.</p>
{{< products/product-feature-blocks
featureheading="E-postanalys utan beroenden i .NET"
featuretext=".NET-utvecklare som arbetar med flera e-postfilformat kan använda de omfattande funktionerna i Aspose.Email för .NET för att bygga e-postbehandlingsappar laddade med förmågan att säkert och oberoende analysera och lagra e-postmeddelanden. Microsoft Automation eller någon annan programvara från tredje part krävs inte eftersom detta .NET-e-post-API är byggt med hanterad kod."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="FAQ"
>}}
   {{< products/faq-block
 faqquery="1. Hur kan jag konvertera e-postfiler i .NET?"
 faqanswer="Att konvertera Microsoft Exchange eller Thunderbird e-postfiler i .NET är snabbt och enkelt med Aspose.Email för .NET API. Endast några rader .NET-kodning behövs för att konvertera MSG-, PST-, OST-, EML-, EMLX-, MBOX- och HTML-filer till olika filformat."
>}}
   {{< products/faq-block 
 faqquery="2. Hur lång tid tar det att konvertera eller bearbeta e-postfiler?"
 faqanswer=".NET API för att manipulera och bearbeta e-postfiler fungerar snabbt och slutför dina e-postfilkonverteringsförfrågningar på nolltid."
>}}
   {{< products/faq-block
 faqquery="3. Är det säkert att behandla e-postmeddelanden med .NET API?"
 faqanswer="Du kan vara säker på säkerheten för dina e-postmeddelandefiler när du bearbetar dem med Aspose.Email för .NET API. Vi säkerställer integriteten för dina uppgifter och vidtar alla nödvändiga åtgärder för att ge dig en säker användarupplevelse."
>}}
   {{< products/faq-block
 faqquery="4. Kan jag bearbeta e-postfiler på Mac OS, Windows eller Linux?"
 faqanswer="Ja, API:et för e-postbearbetning för .NET fungerar över olika operativsystem, ramverk och operativa miljöer. Du kan använda den på den plattform du väljer och den kräver ingen ytterligare programvaruinstallation för att fungera."
>}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="E-postfilhanteringsverktyg"
   >}}
   {{< products/popularapp-anchor
 anchorlink="MSG till PDF"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-pdf/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MSG till EML"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-eml/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MSG till HTML"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-html/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MSG till MBOX"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-mbox/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MSG till PST"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-pst/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MSG till VCF"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-vcf/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="EML till PDF"
 moreproducts="https://products.aspose.com/email/net/conversion/eml-to-pdf/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="EML till HTML"
 moreproducts="https://products.aspose.com/email/net/conversion/eml-to-html/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="EML till MSG"
 moreproducts="https://products.aspose.com/email/net/conversion/eml-to-msg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MBOX till XPS"
 moreproducts="https://products.aspose.com/email/net/conversion/mbox-to-xps/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="OST till PST"
 moreproducts="https://products.aspose.com/email/net/conversion/ost-to-pst/"
>}}  
   {{< products/popularapp-anchor
 anchorlink="PST till EML"
 moreproducts="https://products.aspose.com/email/net/conversion/pst-to-eml/"
 >}}
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Letar du efter hjälp?"
bartext="Kolla in våra supportkanaler för hjälp med dina frågor relaterade till Aspose-produktens API-funktioner och arbete."
 resourcetxt1="Docs"
 resourcelinks1="https://docs.aspose.com/email/net/"
 resourcetxt2="API-referens"
 resourcelinks2="https://reference.aspose.com/email/" 
 resourcetxt3="Kunskapsbas"
 resourcelinks3="https://kb.aspose.com/email/net/"
 resourcetxt4="Gratis support"
 resourcelinks4="https://forum.aspose.com/c/email/12"  >}}
{{< homepage/aspose/com/inner-wrapper/resources-wrapper
 resource-heading="Resurser sectionid=support"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://blog.aspose.com/"
 resourcetitle="Bloggar"
 resourcealt="Bloggar"
 resourceimg="/images/blog1.svg"
 resourcelistlink="https://blog.aspose.com/email/create-mime-messages-in-csharp/"
 resourcelistlink2="https://blog.aspose.com/email/merge-multiple-mbox-files-in-csharp/"
 resourcelistlink3="https://blog.aspose.com/cells/send-excel-data-in-email-body-using-csharp-net/"
 resourcelisttext="Skapa MIME-meddelanden i C# .NET"
 resourcelisttext2="Slå samman flera MBOX-filer i C#"
 resourcelisttext3="Skicka Excel-data i e-posttexten med C# .NET"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://docs.aspose.com/"
 resourcetitle="Dokumentation"
 resourcealt="Dokumentation"
 resourceimg="/img/docs1.svg"
 resourcelistlink="https://docs.aspose.com/email/net/features-overview/"
 resourcelistlink2="https://www.nuget.org/packages/Aspose.Email/"
 resourcelistlink3="https://helpdesk.aspose.com/"
 resourcelisttext="Aspose.Email för .NET-funktioner"
 resourcelisttext2="Installera Aspose.Email för .NET NuGet Package"
 resourcelisttext3="Aspose.Email för .NET Paid Support Helpdesk"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://kb.aspose.com/"
 resourcetitle="Kunskapsbas"
 resourcealt="Kodprover"
 resourceimg="/images/code1.svg"
 resourcelistlink="https://kb.aspose.com/email/net/how-to-send-email-in-c-sharp/"
 resourcelistlink2="https://kb.aspose.com/email/net/how-to-create-a-pst-file-in-csharp/"
 resourcelistlink3="https://kb.aspose.com/email/net/how-to-add-mapicalendar-to-pst-using-csharp/"
 resourcelisttext="Hur man skickar e-post i C#"
resourcelisttext2="Hur man skapar en PST-fil i C#"
resourcelisttext3="Hur man lägger till MapiCalendar till PST med C#"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Redo att börja?"
rtstext="Ladda ner gratis provversion"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="Visa alla API:er"
>}}
