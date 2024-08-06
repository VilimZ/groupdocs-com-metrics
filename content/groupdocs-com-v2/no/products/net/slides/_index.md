---
title: C# .NET PowerPoint API for behandling av presentasjonsfiler
description: Et kraftig .NET PowerPoint API for behandling av presentasjonsfilformater som PPT, POT, PPS og ODP. Opprett, rediger og konverter lysbilder programmatisk.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="C# .NET PowerPoint API for behandling av presentasjonsfilformater"
  inheadertext="Gi .NET-presentasjonene superlading ved å utvikle apper for å generere, behandle og manipulere Microsoft PowerPoint-lysbilder. Administrer forskjellige presentasjonsfilformater, inkludert PPT, PPTX, POT, POTX, PPS, PPSX og ODP. Konverter PowerPoint-dokumenter til PDF, HTML, rasterbilder og SVG-vektorer."
  ctabtn="Last ned gratis prøveversjon"
  ctabtn="Last ned gratis prøveversjon"
  ctalink="https://releases.aspose.com/slides/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Se alle APIer"
  bchomelink="/"
  bchome="Hjem"
  bcpage="Lysbilder"
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
subnav5="https://purchase.aspose.com/pricing/slides/net"
subnavtxt5="Prissetting" 
subbtn1="https://docs.aspose.com/slides/net/"
subbtntxt1="Lære"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="Kjøpe"
>}}
   {{< products/subtext-wrapper sectionid="overview"
   subtitle="Manipuler PowerPoint-lysbilder ved hjelp av .NET presentasjons-API"
   subtext="Aspose.Slides for .NET er et fullverdig og fleksibelt .NET PowerPoint API som gjør det mulig for programvare- og apputviklere å programmatisk generere, modifisere, manipulere og eksportere Microsoft PowerPoint-presentasjoner i .NET-plattformen. Den støtter behandling av ulike populære PowerPoint-filformater som PPT, POT, PPTX, PPS, POTX og PPTM samt OpenOffice (ODP) dokumenter. Programmerere kan bruke de avanserte formaterings- og presentasjonsbehandlingsmulighetene til dette .NET-biblioteket til å legge til, fjerne, dele opp eller slå sammen presentasjonslysbilder, bruke tekstformatering, administrere animasjoner og lysbildeoverganger, jobbe med bilder, former, tabeller og diagrammer og gjøre så mye mer."
   subtext2="Aspose.Slides for .NET API har en intrikat gjengivelsesmotor og hjelper deg med å konvertere PowerPoint-presentasjoner til flere filformater som PowerPoint til PDF, PowerPoint til JPG og PowerPoint til HTML."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Starter</h2>
   <p>Før du setter opp .NET PowerPoint presentations API, vennligst sjekk <a href="https://docs.aspose.com/slides/net/system-requirements/">Systemkrav</a>-siden for forutsetningene for å hjelpe du installerer API-en uten problemer.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.Slides for .NET-installasjon"
>}}
<p>Du kan laste ned DLL-ene eller MSI-installasjonsprogrammet til Aspose.Slides for .NET direkte ved å gå til <a href="https://releases.aspose.com/slides/net/">nedlastingsdelen</a>. Du kan også bruke <a href="https://www.nuget.org/packages/Aspose.Slides.Net/">NuGet-pakken</a> for å installere .NET PowerPoint API. Kommandoen for å sette opp biblioteket i pakkebehandlingskonsollen er gitt nedenfor:</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp1"
>}}
PM > Install-Package Aspose.Slides.NET
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Hvordan konvertere PowerPoint til PDF i .NET og raskt slå sammen presentasjoner"
featuretext="Aspose.Slides for .NET er det ledende API for å manipulere PowerPoint-presentasjoner som inkluderer et flott funksjonssett med muligheten til å konvertere presentasjoner. Konverter sømløst PowerPoint til PDF og andre filformater i .NET og slå sammen presentasjonslysbilder ved hjelp av .NET PowerPoint API."
>}}
{{< products/product-feature-blocks-col
featurecolheading="Konverter PowerPoint til PDF i .NET"
>}}
<p>Utfør plettfrie PowerPoint-presentasjoner til PDF-konverteringer i C# .NET ved å bruke Aspose.Slides for .NET API mens du angir forskjellige egenskaper for det resulterende PDF-dokumentet i prosessen. Se følgende trinn og eksempelkodingen for å konvertere PowerPoint PPT til PDF i .NET-plattformen:</p>
<ul>
   <li>Opprett en forekomst av klasseobjektet <a href="https://apireference.aspose.com/slides/net/aspose.slides/presentation">Presentation</a> for å laste kildepresentasjonsfilen.</li>
   <li>Initialiser klasseobjektet <a href="https://apireference.aspose.com/slides/net/aspose.slides.export/pdfoptions/">PdfOptions</a> for å angi de ønskede bildealternativene.</li>
   <li>Angi de ønskede PDF-alternativene for den resulterende PDF-filen.</li>
   <li>Konverter presentasjonen til PDF-format ved å bruke Lagre-metoden.</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp2"
>}}
// Create an instance of the Presentation class object to load the PPT file
 Presentation presPPT = new Presentation("TestPresentation.ppt");
// Create the PdfOptions class object
PdfOptions exportPdfOptions = new PdfOptions();
// Set the JPEG quality for images inside the presentation
exportPdfOptions.JpegQuality = 90;
// Set the metafiles behavior
exportPdfOptions.SaveMetafilesAsPng = true;
// Apply the text compression level
exportPdfOptions.TextCompression = PdfTextCompression.Flate;
// Set the output PDF standard
exportPdfOptions.Compliance = PdfCompliance.Pdf15;
// Convert and Save the Presentation to PDF
presPPT.Save("PPT-to-PDF.pdf", SaveFormat.Pdf, exportPdfOptions);
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks-col
featurecolheading="Slå sammen presentasjoner i .NET"
>}}
<p>Å slå sammen presentasjoner til et enhetlig PowerPoint-dokument er en fremtredende funksjon i Aspose.Slides for .NET API. Vennligst sjekk trinnene og informasjonen nedenfor for raskt og enkelt å kombinere flere PowerPoint PPTX-presentasjoner i dokumentsammenslåingsappene dine ved å bruke .NET Presents API:</p>
<ul>
   <li>Opprett en forekomst av klassen <a href="https://apireference.aspose.com/slides/net/aspose.slides/presentation">Presentasjon</a> for å laste inn kildepresentasjonen.</li>
   <li>Initialiser separate presentasjonsklasseobjekter for de nødvendige målpresentasjonene.</li>
   <li>Gå gjennom alle <a href="https://apireference.aspose.com/slides/net/aspose.slides/islide">lysbildene</a> i målpresentasjonene i en sløyfe.</li>
   <li>Kall AddClone()-metoden for lysbildesamlingen til kildepresentasjonen der andre presentasjoner skal kombineres.</li>
   <li>Lagre den resulterende presentasjonen med alle lysbildene fra målpresentasjonene.</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp3"
>}}
// Load the source presentation
Presentation prest1 = new Presentation("prest1.pptx");
// Initialize separate Presentation class objects for the target presentations
Presentation prest2 = new Presentation("prest2.pptx");
Presentation prest3 = new Presentation("prest3.pptx");
// Loop through all target presentations slides
foreach (ISlide slide in prest2.Slides)
    prest1.Slides.AddClone(slide);
 foreach (ISlide slide in prest3.Slides)
    prest1.Slides.AddClone(slide);
// Save the resultant presentation with all the slides from the target presentations
prest1.Save("combined.pptx", SaveFormat.Pptx);
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< /products/product-feature-blocks >}}
   <p class="col-lg-12">Flere fungerende eksempler og fullstendige kodeeksempler av Aspose.Slides for .NET API er tilgjengelig på <a href="https://github.com/aspose-slides/Aspose.Slides-for-.NET/tree/master/Examples">GitHub-eksempler</a>-siden. Ta en titt på <a href="https://products.aspose.app/slides/family">gratis nettapper</a> til Aspose.Slides som lar deg se, konvertere, analysere, sammenligne, vannmerke, redigere, del og rediger PowerPoint-presentasjonsfiler fra hvor som helst ved hjelp av mobile eller stasjonære enheter.</p>
{{< products/product-feature-blocks
featureheading="Sikker og uavhengig .NET presentasjon API"
featuretext="Med Aspose.Slides for .NET har du tilgang til noen utmerkede sikkerhetsfunksjoner som muliggjør pålitelig presentasjonsbehandling i .NET. Dette inkluderer muligheten til å passordbeskytte presentasjonene og støtte for skrivebeskyttet modus. I tillegg er installasjon av Microsoft PowerPoint ikke nødvendig mens du bruker .NET presentasjons-API, noe som gir deg en fullstendig uavhengig og unik brukeropplevelse."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="FAQ"
>}}
   {{< products/faq-block
faqquery="1. Hvordan kan jeg konvertere PowerPoint-filer i .NET?"
 faqanswer="Konvertering av Microsoft PowerPoint-filer i .NET er raskt og enkelt ved å bruke Aspose.Slides for .NET API. Bare noen få linjer med .NET-koding er nødvendig for å konvertere PPT-, PPTX-, PPS-, PPSX-, POT-, POTX-, PPTM- og ODP-filer til forskjellige filformater."
>}}
   {{< products/faq-block 
faqquery="2. Hvor lang tid tar det å slå sammen eller konvertere PowerPoint-lysbilder?"
 faqanswer=".NET API for manipulering og behandling av presentasjonslysbilder fungerer raskt og fullfører konverterings- og sammenslåingsforespørslene dine for presentasjonsfiler på kort tid."
>}}
   {{< products/faq-block
faqquery="3. Er det trygt å behandle presentasjoner ved hjelp av .NET API?"
 faqanswer="Du kan være sikker på sikkerheten til PowerPoint-presentasjonsfilene dine mens du behandler dem ved hjelp av Aspose.Slides for .NET API. Vi sikrer personvernet til dataene dine og tar alle nødvendige tiltak for å gi deg en sikker brukeropplevelse."
>}}
   {{< products/faq-block
faqquery="4. Kan jeg behandle PowerPoint-presentasjoner på Mac OS, Windows eller Linux?"
 faqanswer="Ja, API for PowerPoint-presentasjoner for .NET fungerer på tvers av forskjellige operativsystemer, rammeverk og operativsystemer. Du kan bruke den på plattformen du ønsker, og den krever ingen ekstra programvareinstallasjon for å fungere."
>}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="Manipulasjonsverktøy for PowerPoint-presentasjoner"
>}}
   {{< products/popularapp-anchor
 anchorlink="PowerPoint til PDF"
 moreproducts="https://products.aspose.com/slides/net/conversion/ppt-to-pdf/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PowerPoint til JPEG"
 moreproducts="https://products.aspose.com/slides/net/conversion/ppt-to-jpeg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PowerPoint til HTML"
 moreproducts="https://products.aspose.com/slides/net/conversion/ppt-to-html/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PPTX til PDF"
 moreproducts="https://products.aspose.com/slides/net/conversion/pptx-to-pdf/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PPTX til GIF"
 moreproducts="https://products.aspose.com/slides/net/conversion/pptx-to-gif/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PPTX til PNG"
 moreproducts="https://products.aspose.com/slides/net/conversion/pptx-to-png/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Slå sammen PPT"
 moreproducts="https://products.aspose.com/slides/net/merger/ppt/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Slå sammen PPTX"
 moreproducts="https://products.aspose.com/slides/net/merger/pptx/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Slå sammen ODP"
 moreproducts="https://products.aspose.com/slides/net/merger/odp/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Slå sammen POT"
 moreproducts="https://products.aspose.com/slides/net/merger/pot/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Slå sammen PPTM"
 moreproducts="https://products.aspose.com/slides/net/merger/pptm/"
>}}  
   {{< products/popularapp-anchor
 anchorlink="Slå sammen PPS"
 moreproducts="https://products.aspose.com/slides/net/merger/pps/"
>}}
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Leter du etter hjelp?"
bartext="Ta en titt på støttekanalene våre for å få hjelp med spørsmål knyttet til Aspose-produktets API-funksjoner og arbeid."
 resourcetxt1="Docs"
 resourcelinks1="https://docs.aspose.com/slides/net/"
 resourcetxt2="API-referanse"
 resourcelinks2="https://reference.aspose.com/slides/" 
 resourcetxt3="Kunnskapsbase"
 resourcelinks3="https://kb.aspose.com/slides/net/"
 resourcetxt4="Gratis støtte"
 resourcelinks4="https://forum.aspose.com/c/slides/11"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-wrapper
 resource-heading="Ressurser"
 sectionid="support"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://blog.aspose.com/"
 resourcetitle="Blogger"
 resourcealt="Blogger"
 resourceimg="/images/blog1.svg"
 resourcelistlink="https://blog.aspose.com/slides/convert-ppt-to-video-csharp/"
 resourcelistlink2="https://blog.aspose.com/slides/encrypt-ppt-csharp/"
 resourcelistlink3="https://blog.aspose.com/slides/convert-jpg-to-ppt-csharp/"
 resourcelisttext="Konverter PPT til video i C#"
 resourcelisttext2="Krypter PowerPoint i C#"
 resourcelisttext3="Konverter JPG til PPT i C# .NET"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://docs.aspose.com/"
 resourcetitle="Dokumentasjon"
 resourcealt="Dokumentasjon"
 resourceimg="/img/docs1.svg"
 resourcelistlink="https://docs.aspose.com/slides/net/features-overview/"
 resourcelistlink2="https://www.nuget.org/packages/Aspose.Slides.Net/"
 resourcelistlink3="https://helpdesk.aspose.com/"
 resourcelisttext="Aspose.Slides for .NET-funksjoner"
 resourcelisttext2="Installer Aspose.Slides for .NET NuGet Package"
 resourcelisttext3="Aspose.Slides for .NET Paid Support Helpdesk"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://kb.aspose.com/"
 resourcetitle="Kunnskapsbase"
 resourcealt="Kodeeksempler"
 resourceimg="/images/code1.svg"
 resourcelistlink="https://kb.aspose.com/slides/net/how-to-merge-slides-in-csharp/"
 resourcelistlink2="https://kb.aspose.com/slides/net/how-to-insert-signature-in-powerpoint-using-csharp/"
 resourcelistlink3="https://kb.aspose.com/slides/net/how-to-create-a-table-in-powerpoint-using-csharp/"
 resourcelisttext="Hvordan slå sammen lysbilder i C#"
resourcelisttext2="Hvordan sette inn signatur i PowerPoint ved hjelp av C#"
resourcelisttext3="Hvordan lage en tabell i PowerPoint ved hjelp av C#"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Klar til å komme i gang?"
rtstext="Last ned gratis prøveversjon"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="Se alle APIer"
>}}
