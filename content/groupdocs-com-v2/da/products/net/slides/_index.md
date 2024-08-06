---
title: C# .NET PowerPoint API til behandling af præsentationsfiler
description: En kraftfuld .NET PowerPoint API til behandling af præsentationsfilformater såsom PPT, POT, PPS og ODP. Opret, rediger og konverter dias programmatisk.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="C# .NET PowerPoint API til behandling af præsentationsfilformater"
  inheadertext="Overlad dine .NET-præsentationer ved at udvikle apps til at generere, behandle og manipulere Microsoft PowerPoint-dias. Administrer forskellige præsentationsfilformater, herunder PPT, PPTX, POT, POTX, PPS, PPSX og ODP. Konverter PowerPoint-dokumenter til PDF, HTML, rasterbilleder og SVG-vektorer."
  ctabtn="Download gratis prøveversion"
  ctabtn="Download gratis prøveversion"
  ctalink="https://releases.aspose.com/slides/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Se alle API'er"
  bchomelink="/"
  bchome="Hjem"
  bcpage="Dias"
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
subnav5="https://purchase.aspose.com/pricing/slides/net"
subnavtxt5="Prissætning" 
subbtn1="https://docs.aspose.com/slides/net/"
subbtntxt1="Lære"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="Købe"
>}}
   {{< products/subtext-wrapper sectionid="overview"
   subtitle="Manipuler PowerPoint-slides ved hjælp af .NET presentation API"
   subtext="Aspose.Slides til .NET er et fuldt udstyret og fleksibelt .NET PowerPoint API, der gør det muligt for software- og appudviklere at generere, ændre, manipulere og eksportere Microsoft PowerPoint-præsentationer i .NET-platformen. Det understøtter behandlingen af forskellige populære PowerPoint-filformater såsom PPT, POT, PPTX, PPS, POTX og PPTM samt OpenOffice (ODP) dokumenter. Programmører kan bruge de avancerede formaterings- og præsentationsbehandlingsfunktioner i dette .NET-bibliotek til at tilføje, fjerne, opdele eller flette præsentationsdias, anvende tekstformatering, administrere animationer og diasovergange, arbejde med billeder, figurer, tabeller og diagrammer og gøre så meget mere."
   subtext2="Med en indviklet gengivelsesmotor hjælper Aspose.Slides til .NET API dig med pletfrit at konvertere PowerPoint-præsentationer til flere filformater såsom PowerPoint til PDF, PowerPoint til JPG og PowerPoint til HTML."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Kom godt i gang</h2>
   <p>Før du konfigurerer .NET PowerPoint-præsentations-API'en, skal du tjekke siden <a href="https://docs.aspose.com/slides/net/system-requirements/">Systemkrav</a> for at se forudsætningerne for at hjælpe du installerer API'en uden problemer.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.Slides til .NET-installation"
>}}
<p>Du kan downloade DLL'erne eller MSI-installationsprogrammet til Aspose.Slides til .NET direkte ved at besøge <a href="https://releases.aspose.com/slides/net/">downloadsektionen</a>. Du kan også bruge <a href="https://www.nuget.org/packages/Aspose.Slides.Net/">NuGet-pakken</a> til at installere .NET PowerPoint API. Kommandoen til opsætning af biblioteket i pakkehåndteringskonsollen er givet nedenfor:</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp1"
>}}
PM > Install-Package Aspose.Slides.NET
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Sådan konverteres PowerPoint til PDF i .NET og flette præsentationer hurtigt"
featuretext="Aspose.Slides til .NET er den førende API til at manipulere PowerPoint-præsentationer, der inkluderer et fantastisk funktionssæt med mulighed for at konvertere præsentationer. Konverter problemfrit PowerPoint til PDF og andre filformater i .NET og flet præsentationsdias ved hjælp af .NET PowerPoint API."
>}}
{{< products/product-feature-blocks-col
featurecolheading="Konverter PowerPoint til PDF i .NET"
>}}
<p>Udfør pletfri PowerPoint-præsentationer til PDF-konverteringer i C# .NET ved hjælp af Aspose.Slides til .NET API, mens du indstiller forskellige egenskaber for det resulterende PDF-dokument i processen. Se venligst følgende trin og eksempelkodningen til konvertering af PowerPoint PPT til PDF i .NET-platformen:</p>
<ul>
   <li>Opret en forekomst af klasseobjektet <a href="https://apireference.aspose.com/slides/net/aspose.slides/presentation">Presentation</a> for at indlæse kildepræsentationsfilen.</li>
   <li>Initialiser klasseobjektet <a href="https://apireference.aspose.com/slides/net/aspose.slides.export/pdfoptions/">PdfOptions</a> for at indstille de ønskede billedindstillinger.</li>
   <li>Indstil de ønskede PDF-indstillinger for den resulterende PDF-fil.</li>
   <li>Konverter præsentationen til PDF-format ved hjælp af metoden Gem.</li>
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
featurecolheading="Flet præsentationer i .NET"
>}}
<p>Sammenlægning af præsentationer til et samlet PowerPoint-dokument er et fremtrædende træk ved Aspose.Slides til .NET API. Tjek venligst nedenstående trin og oplysninger for hurtigt og nemt at kombinere flere PowerPoint PPTX-præsentationer i dine dokumentfusionsapps ved hjælp af .NET presentations API:</p>
<ul>
   <li>Opret en forekomst af klassen <a href="https://apireference.aspose.com/slides/net/aspose.slides/presentation">Presentation</a> for at indlæse kildepræsentationen.</li>
   <li>Initialiser separate præsentationsklasseobjekter til de påkrævede målpræsentationer.</li>
   <li>Gentag i en sløjfe gennem alle <a href="https://apireference.aspose.com/slides/net/aspose.slides/islide">slides</a> i målpræsentationerne.</li>
   <li>Kald AddClone()-metoden for diassamlingen af kildepræsentationen, hvor andre præsentationer skal kombineres.</li>
   <li>Gem den resulterende præsentation med alle dias fra målpræsentationerne.</li>
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
   <p class="col-lg-12">Flere arbejdseksempler og komplette kodningseksempler af Aspose.Slides til .NET API er tilgængelige på <a href="https://github.com/aspose-slides/Aspose.Slides-for-.NET/tree/master/Examples">GitHub-eksempler</a>-siden. Tjek venligst de <a href="https://products.aspose.app/slides/family">gratis online apps</a> af Aspose.Slides, der lader dig se, konvertere, analysere, sammenligne, vandmærke, redigere, opdel og rediger PowerPoint-præsentationsfiler fra hvor som helst ved hjælp af dine mobile eller stationære enheder.</p>
{{< products/product-feature-blocks
featureheading="Sikker og uafhængig .NET præsentations API"
featuretext="Med Aspose.Slides til .NET har du adgang til nogle fremragende sikkerhedsfunktioner, der giver mulighed for pålidelig præsentationsbehandling i .NET. Dette inkluderer muligheden for at beskytte præsentationerne med adgangskode og understøttelse af skrivebeskyttet tilstand. Derudover er installation af Microsoft PowerPoint ikke nødvendig, mens du bruger .NET presentation API, hvilket giver dig en fuldstændig uafhængig og unik brugeroplevelse."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="FAQ"
>}}
   {{< products/faq-block
faqquery="1. Hvordan kan jeg konvertere PowerPoint-filer til .NET?"
 faqanswer="Konvertering af Microsoft PowerPoint-filer i .NET er hurtigt og nemt ved at bruge Aspose.Slides til .NET API. Kun et par linjer med .NET-kodning er nødvendige for at konvertere PPT-, PPTX-, PPS-, PPSX-, POT-, POTX-, PPTM- og ODP-filer til forskellige filformater."
>}}
   {{< products/faq-block 
faqquery="2. Hvor lang tid tager det at flette eller konvertere PowerPoint-dias?"
 faqanswer=".NET API'et til at manipulere og behandle præsentationsdias fungerer hurtigt og fuldender dine præsentationsfilers konvertering og fusionsanmodninger på ingen tid."
>}}
   {{< products/faq-block
faqquery="3. Er det sikkert at behandle præsentationer ved hjælp af .NET API?"
 faqanswer="Du kan være sikker på sikkerheden af dine PowerPoint-præsentationsfiler, mens du behandler dem ved hjælp af Aspose.Slides til .NET API. Vi sikrer privatlivets fred for dine data og træffer alle nødvendige foranstaltninger for at give dig en sikker brugeroplevelse."
>}}
   {{< products/faq-block
faqquery="4. Kan jeg behandle PowerPoint-præsentationer på Mac OS, Windows eller Linux?"
 faqanswer="Ja, PowerPoint-præsentationsbehandlings-API'en til .NET fungerer på tværs af forskellige OS, frameworks og driftsmiljøer. Du kan bruge det på den platform, du vælger, og det kræver ikke nogen yderligere softwareinstallation for at fungere."
>}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="PowerPoint-præsentations manipulationsværktøjer"
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
 anchorlink="Flet PPT"
 moreproducts="https://products.aspose.com/slides/net/merger/ppt/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Flet PPTX"
 moreproducts="https://products.aspose.com/slides/net/merger/pptx/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Flet ODP"
 moreproducts="https://products.aspose.com/slides/net/merger/odp/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Flet POT"
 moreproducts="https://products.aspose.com/slides/net/merger/pot/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Flet PPTM"
 moreproducts="https://products.aspose.com/slides/net/merger/pptm/"
>}}  
   {{< products/popularapp-anchor
 anchorlink="Flet PPS"
 moreproducts="https://products.aspose.com/slides/net/merger/pps/"
>}}
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Leder du efter hjælp?"
bartext="Tjek vores supportkanaler for at få hjælp til dine spørgsmål relateret til Aspose-produkt API-funktioner og arbejde."
 resourcetxt1="Docs"
 resourcelinks1="https://docs.aspose.com/slides/net/"
 resourcetxt2="API-reference"
 resourcelinks2="https://reference.aspose.com/slides/" 
 resourcetxt3="Vidensbase"
 resourcelinks3="https://kb.aspose.com/slides/net/"
 resourcetxt4="Gratis support"
 resourcelinks4="https://forum.aspose.com/c/slides/11"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-wrapper
 resource-heading="Ressourcer"
 sectionid="support"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://blog.aspose.com/"
 resourcetitle="Blogs"
 resourcealt="Blogs"
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
 resourcetitle="Dokumentation"
 resourcealt="Dokumentation"
 resourceimg="/img/docs1.svg"
 resourcelistlink="https://docs.aspose.com/slides/net/features-overview/"
 resourcelistlink2="https://www.nuget.org/packages/Aspose.Slides.Net/"
 resourcelistlink3="https://helpdesk.aspose.com/"
 resourcelisttext="Aspose.Slides til .NET-funktioner"
 resourcelisttext2="Installer Aspose.Slides til .NET NuGet Package"
 resourcelisttext3="Aspose.Slides til .NET Betalt Support Helpdesk"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://kb.aspose.com/"
 resourcetitle="Vidensbase"
 resourcealt="Kodeprøver"
 resourceimg="/images/code1.svg"
 resourcelistlink="https://kb.aspose.com/slides/net/how-to-merge-slides-in-csharp/"
 resourcelistlink2="https://kb.aspose.com/slides/net/how-to-insert-signature-in-powerpoint-using-csharp/"
 resourcelistlink3="https://kb.aspose.com/slides/net/how-to-create-a-table-in-powerpoint-using-csharp/"
 resourcelisttext="Sådan flettes slides i C#"
resourcelisttext2="Sådan indsætter du signatur i PowerPoint ved hjælp af C#"
resourcelisttext3="Sådan opretter du en tabel i PowerPoint ved hjælp af C#"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Klar til at komme i gang?"
rtstext="Download gratis prøveversion"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="Se alle API'er"
>}}
