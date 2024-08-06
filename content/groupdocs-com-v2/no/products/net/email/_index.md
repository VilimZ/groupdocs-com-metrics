---
title: .NET Email Processing API for å manipulere Outlook-e-postfiler
description: Ledende e-postbehandlingsbibliotek for .NET for å administrere Thunderbird- og Outlook-filformater inkludert MSG, EML og MBOX via SMPT-, POP3- og IMAP-protokoller.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle=".NET Email Processing API for å manipulere Outlook-e-postfiler"
  inheadertext="Forenkle prosessen med å manipulere Microsoft Outlook og Mozilla Thunderbird e-postfiler på tvers av C#-, ASP.NET- og VB.NET-appene dine. Arbeid med filformatene MSG, EML, PST, OST, MBOX, VCF og HTML. Administrer e-postmeldinger og vedlegg programmert via POP3, SMTP, IMAP eller Microsoft Exchange Server."
  ctabtn="Last ned gratis prøveversjon"
  ctabtn="Last ned gratis prøveversjon"
  ctalink="https://releases.aspose.com/email/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Se alle APIer"
  bchomelink="/"
  bchome="Hjem"
  bcpage="E-post"
  bclink2="Produkter"
  bclink3=".NET"
  bclink2url="/products/"
  bclink3url="/products/net/"
  >}}
{{< homepage/conholdate/com/inner-wrapper/sub-nav 
subnav1="#overview"
subnavtxt1="Oversikt" 
subnav2="#features"
subnavtxt2="Egenskaper" 
subnav3="#support"
subnavtxt3="Brukerstøtte" 
subnav4="#examples"
subnavtxt4="Eksempler" 
subnav5="https://purchase.aspose.com/pricing/email/net"
subnavtxt5="Prissetting" 
subbtn1="https://docs.aspose.com/email/net/"
subbtntxt1="Lære"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="Kjøpe"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="En omfattende .NET Email API for å manipulere og behandle e-postmeldinger"
   subtext="Aspose.Email for .NET er et fleksibelt, robust og brukervennlig e-postbehandlings-API som gjør det mulig for brukere å lage, endre og analysere populære e-postfilformater som MSG, PST, OST, EML, EMLX, MBOX, også som VCF, HTML og MHTML i .NET-plattformen. Dette lar brukerne jobbe med forskjellige e-postmeldingsformater uten å bekymre seg for problemer med formatkompatibilitet. I tillegg til å få tilgang til og administrere e-poster fra Thunderbird og Outlook, kan utviklere bruke .NET Email API til å programmere manipulere e-postvedlegg, legge til eller fjerne mottakere, endre meldingsemnet og gjøre mye mer. "
   subtext2="Videre gjør muligheten til å konvertere e-postmeldinger fra ett format til et annet på tvers av C#, ASP.NET og VB.NET dette .NET e-postbehandlings-APIet skiller seg ut i bruk og funksjonssett. Du kan enkelt sende og motta e-postmeldinger ved å bruke protokollen du velger blant POP3, SMTP, IMAP eller koble til Microsoft Exchange Server. Aspose.Email for .NET hjelper deg med å automatisere e-postbehandlingsprosessen effektivt."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Starter</h2>
   <p>Vennligst sjekk <a href="https://docs.aspose.com/email/net/system-requirements/">Systemkrav</a>-siden for forutsetninger før du setter opp Aspose.Email for .NET på slutten . Følgende informasjon vil hjelpe deg med å konfigurere .NET e-post-API-en på riktig måte.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.Email for .NET-installasjon"
>}}
<p>For å laste ned DLL-ene eller MSI-installasjonsprogrammet, gå til <a href="https://releases.aspose.com/email/net/">nedlastingsdelen</a>. Alternativt kan du bruke <a href="https://www.nuget.org/packages/Aspose.Email/">NuGet-pakken</a> for API-installasjon. Pakkebehandlingskommandoen for å konfigurere .NET e-postbehandlings-API er delt nedenfor:</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp3"
>}}
PM > Install-Package Aspose.Email
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Hvordan konvertere Outlook-e-post til HTML og åpne e-postmeldinger uten Outlook i .NET"
featuretext="Aspose.Email for .NET API muliggjør programmatisk konvertering av MSG- og EML-meldinger til HTML-format. Den støtter også tilgang til og åpning av Outlook-e-poster i .NET-appene dine uten at du trenger Microsoft Outlook."
>}}  
{{< products/product-feature-blocks-col
featurecolheading="Konverter MSG- eller EML-filer til HTML i .NET"
>}}
<p>Transform Outlook-e-poster sømløst til HTML-format ved hjelp av Aspose.Email for .NET-biblioteket. Du kan utvikle et e-postbehandlingsprogram med alle funksjoner ved å bruke .NET e-post-API og inkorporere e-postkonverteringsfunksjonaliteten for å konvertere MSG- eller EML-formater til HTML. Vennligst se kodebiten og annen informasjon som deles nedenfor for dette formålet:</p>
<ul>
   <li>Instantier <a href="https://reference.aspose.com/email/net/aspose.email/mailmessage/">MailMessage</a>-klasseobjektet for å få tilgang til kilde-MSG- eller EML-filen.</li>
   <li>Bruk HTML-lagringsalternativene for HTML-utdatafilen.</li>
   <li>Lagre eller eksporter MSG-filen i HTML-format ved å bruke Lagre-metoden.</li>
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
featurecolheading="Åpne e-poster i .NET uten Outlook"
>}}
<p>Ønsker du å åpne Outlook-meldinger i .NET e-postbehandlingsappene dine uten å installere Microsoft Outlook? Hvis ja, er Aspose.Email for .NET API det riktige valget for deg. Den lar .NET-utviklere få tilgang til og åpne MSG-e-postfiler og hente informasjon som e-postemne, avsenderadresse og vedlegg. Vennligst sjekk følgende informasjon for å lære mer:</p>
<ul>
   <li>Last inn kilde-MSG-e-postfilen i et <a href="https://reference.aspose.com/email/net/aspose.email.mapi/mapimessage/">MapiMessage</a> klasseobjekt.</li>
   <li>Les og vis ulike egenskaper for MSG-filen.</li>
   <li>Les gjennom <a href="https://reference.aspose.com/email/net/aspose.email.mapi/mapimessageitembase/attachments">vedleggene</a> og les/vis forskjellige egenskaper for vedleggene i MSG fil.</li>
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
   <p class="col-lg-12">For å se flere arbeidseksempler og kodeeksempler av Aspose.Email for .NET API, besøk <a href="https://github.com/aspose-email/Aspose.Email-for-.NET/tree/master/">GitHub-eksempler</a>-side. Vi tilbyr også <a href="https://products.aspose.app/email/family">gratis nettapper</a> for Aspose.Email for å hjelpe deg med å konvertere, sammenligne, se, vannmerke, slå sammen, redigere og signer e-postfilene dine digitalt når du er på farten ved hjelp av dine mobile enheter.</p>
{{< products/product-feature-blocks
featureheading="E-postparsing uten avhengigheter i .NET"
featuretext=".NET-utviklere som jobber med flere e-postfilformater kan bruke de omfattende funksjonene til Aspose.Email for .NET for å bygge e-postbehandlingsapper lastet med muligheten til å analysere og lagre e-postmeldinger på en sikker og uavhengig måte. Microsoft Automation eller annen tredjepartsprogramvare er ikke nødvendig fordi dette .NET e-post-APIet er bygget med administrert kode."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="FAQ"
>}}
   {{< products/faq-block
 faqquery="1. Hvordan kan jeg konvertere e-postfiler i .NET?"
 faqanswer="Konvertering av Microsoft Exchange- eller Thunderbird-e-postfiler i .NET er raskt og enkelt ved å bruke Aspose.Email for .NET API. Bare noen få linjer med .NET-koding er nødvendig for å konvertere MSG-, PST-, OST-, EML-, EMLX-, MBOX- og HTML-filer til forskjellige filformater."
>}}
   {{< products/faq-block 
 faqquery="2. Hvor lang tid tar det å konvertere eller behandle e-postfiler?"
 faqanswer=".NET API for manipulering og behandling av e-postfiler fungerer raskt og fullfører forespørslene om konvertering av e-postfiler på kort tid."
>}}
   {{< products/faq-block
 faqquery="3. Er det trygt å behandle e-poster ved hjelp av .NET API?"
 faqanswer="Du kan være sikker på sikkerheten til e-postmeldingsfilene dine mens du behandler dem ved hjelp av Aspose.Email for .NET API. Vi sikrer personvernet til dataene dine og tar alle nødvendige tiltak for å gi deg en sikker brukeropplevelse."
>}}
   {{< products/faq-block
 faqquery="4. Kan jeg behandle e-postfiler på Mac OS, Windows eller Linux?"
 faqanswer="Ja, e-postbehandlings-APIet for .NET fungerer på tvers av forskjellige operativsystemer, rammeverk og driftsmiljøer. Du kan bruke den på plattformen du ønsker, og den krever ingen ekstra programvareinstallasjon for å fungere."
>}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="Verktøy for manipulering av e-postfiler"
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
bartitle="Leter du etter hjelp?"
bartext="Ta en titt på støttekanalene våre for å få hjelp med spørsmål knyttet til Aspose-produktets API-funksjoner og arbeid."
 resourcetxt1="Docs"
 resourcelinks1="https://docs.aspose.com/email/net/"
 resourcetxt2="API-referanse"
 resourcelinks2="https://reference.aspose.com/email/" 
 resourcetxt3="Kunnskapsbase"
 resourcelinks3="https://kb.aspose.com/email/net/"
 resourcetxt4="Gratis støtte"
 resourcelinks4="https://forum.aspose.com/c/email/12"  >}}
{{< homepage/aspose/com/inner-wrapper/resources-wrapper
 resource-heading="Ressurser sectionid=support"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://blog.aspose.com/"
 resourcetitle="Blogger"
 resourcealt="Blogger"
 resourceimg="/images/blog1.svg"
 resourcelistlink="https://blog.aspose.com/email/create-mime-messages-in-csharp/"
 resourcelistlink2="https://blog.aspose.com/email/merge-multiple-mbox-files-in-csharp/"
 resourcelistlink3="https://blog.aspose.com/cells/send-excel-data-in-email-body-using-csharp-net/"
 resourcelisttext="Lag MIME-meldinger i C# .NET"
 resourcelisttext2="Slå sammen flere MBOX-filer i C#"
 resourcelisttext3="Send Excel-data i e-posttekst ved å bruke C# .NET"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://docs.aspose.com/"
 resourcetitle="Dokumentasjon"
 resourcealt="Dokumentasjon"
 resourceimg="/img/docs1.svg"
 resourcelistlink="https://docs.aspose.com/email/net/features-overview/"
 resourcelistlink2="https://www.nuget.org/packages/Aspose.Email/"
 resourcelistlink3="https://helpdesk.aspose.com/"
 resourcelisttext="Aspose.Email for .NET-funksjoner"
 resourcelisttext2="Installer Aspose.Email for .NET NuGet Package"
 resourcelisttext3="Aspose.Email for .NET Paid Support Helpdesk"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://kb.aspose.com/"
 resourcetitle="Kunnskapsbase"
 resourcealt="Kodeeksempler"
 resourceimg="/images/code1.svg"
 resourcelistlink="https://kb.aspose.com/email/net/how-to-send-email-in-c-sharp/"
 resourcelistlink2="https://kb.aspose.com/email/net/how-to-create-a-pst-file-in-csharp/"
 resourcelistlink3="https://kb.aspose.com/email/net/how-to-add-mapicalendar-to-pst-using-csharp/"
 resourcelisttext="Hvordan sende e-post i C#"
resourcelisttext2="Hvordan lage en PST-fil i C#"
resourcelisttext3="Hvordan legge til MapiCalendar til PST ved hjelp av C#"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Klar til å komme i gang?"
rtstext="Last ned gratis prøveversjon"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="Se alle APIer"
>}}
