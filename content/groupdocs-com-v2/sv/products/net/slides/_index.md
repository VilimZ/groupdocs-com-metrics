---
title: C# .NET PowerPoint API för bearbetning av presentationsfiler
description: Ett kraftfullt .NET PowerPoint API för bearbetning av presentationsfilformat som PPT, POT, PPS och ODP. Skapa, redigera och konvertera bilder programmatiskt.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="C# .NET PowerPoint API för bearbetning av presentationsfilformat"
  inheadertext="Överladda dina .NET-presentationer genom att utveckla appar för att generera, bearbeta och manipulera Microsoft PowerPoint-bilder. Hantera olika presentationsfilformat inklusive PPT, PPTX, POT, POTX, PPS, PPSX och ODP. Konvertera PowerPoint-dokument till PDF, HTML, rasterbilder och SVG-vektorer."
  ctabtn="Ladda ner gratis provversion"
  ctabtn="Ladda ner gratis provversion"
  ctalink="https://releases.aspose.com/slides/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Visa alla API:er"
  bchomelink="/"
  bchome="Hem"
  bcpage="Bilder"
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
subnav5="https://purchase.aspose.com/pricing/slides/net"
subnavtxt5="Prissättning" 
subbtn1="https://docs.aspose.com/slides/net/"
subbtntxt1="Lära sig"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="köpa"
>}}
   {{< products/subtext-wrapper sectionid="overview"
   subtitle="Manipulera PowerPoint-bilder med .NET presentation API"
   subtext="Aspose.Slides för .NET är ett fullfjädrat och flexibelt .NET PowerPoint API som gör det möjligt för program- och apputvecklare att programmatiskt generera, modifiera, manipulera och exportera Microsoft PowerPoint-presentationer i .NET-plattformen. Den stöder bearbetning av olika populära PowerPoint-filformat som PPT, POT, PPTX, PPS, POTX och PPTM samt OpenOffice (ODP) dokument. Programmerare kan använda de avancerade formaterings- och presentationsbearbetningsfunktionerna i detta .NET-bibliotek för att lägga till, ta bort, dela eller slå samman presentationsbilder, tillämpa textformatering, hantera animationer och bildövergångar, arbeta med bilder, former, tabeller och diagram och göra så mycket mer."
   subtext2="Aspose.Slides för .NET API har en intrikat renderingsmotor och hjälper dig att obefläckat konvertera PowerPoint-presentationer till flera filformat som PowerPoint till PDF, PowerPoint till JPG och PowerPoint till HTML."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Komma igång</h2>
   <p>Innan du ställer in .NET PowerPoint presentations API, kontrollera sidan <a href="https://docs.aspose.com/slides/net/system-requirements/">Systemkrav</a> för att få hjälp du installerar API:t utan problem.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.Slides för .NET-installation"
>}}
<p>Du kan ladda ner DLL-filerna eller MSI-installationsprogrammet för Aspose.Slides för .NET direkt genom att besöka <a href="https://releases.aspose.com/slides/net/">nedladdningssektionen</a>. Du kan också använda <a href="https://www.nuget.org/packages/Aspose.Slides.Net/">NuGet-paketet</a> för att installera .NET PowerPoint API. Kommandot för att ställa in biblioteket i pakethanterarens konsol ges nedan:</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp1"
>}}
PM > Install-Package Aspose.Slides.NET
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Hur man konverterar PowerPoint till PDF i .NET och slår samman presentationer snabbt"
featuretext="Aspose.Slides för .NET är det ledande API:et för att manipulera PowerPoint-presentationer som inkluderar en fantastisk funktionsuppsättning med möjligheten att konvertera presentationer. Konvertera sömlöst PowerPoint till PDF och andra filformat i .NET och slå samman presentationsbilder med .NET PowerPoint API."
>}}
{{< products/product-feature-blocks-col
featurecolheading="Konvertera PowerPoint till PDF i .NET"
>}}
<p>Utför obefläckade PowerPoint-presentationer till PDF-konverteringar i C# .NET med Aspose.Slides för .NET API samtidigt som du ställer in olika egenskaper för det resulterande PDF-dokumentet i processen. Se följande steg och exempelkodningen för att konvertera PowerPoint PPT till PDF i .NET-plattformen:</p>
<ul>
   <li>Skapa en instans av klassobjektet <a href="https://apireference.aspose.com/slides/net/aspose.slides/presentation">Presentation</a> för att ladda källpresentationsfilen.</li>
   <li>Initiera klassobjektet <a href="https://apireference.aspose.com/slides/net/aspose.slides.export/pdfoptions/">PdfOptions</a> för att ställa in önskade bildalternativ.</li>
   <li>Ställ in önskade PDF-alternativ för den resulterande PDF-filen.</li>
   <li>Konvertera presentationen till PDF-format med hjälp av Spara-metoden.</li>
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
featurecolheading="Slå samman presentationer i .NET"
>}}
<p>Att slå samman presentationer till ett enhetligt PowerPoint-dokument är en framträdande funktion i Aspose.Slides för .NET API. Kontrollera nedanstående steg och information för att snabbt och enkelt kombinera flera PowerPoint PPTX-presentationer i dina dokumentsammanslagningsappar med hjälp av .NET presentations API:</p>
<ul>
   <li>Skapa en instans av klassen <a href="https://apireference.aspose.com/slides/net/aspose.slides/presentation">Presentation</a> för att ladda källpresentationen.</li>
   <li>Initiera separata presentationsklassobjekt för de nödvändiga målpresentationerna.</li>
   <li>I en slinga, iterera genom alla <a href="https://apireference.aspose.com/slides/net/aspose.slides/islide">bilder</a> i målpresentationerna.</li>
   <li>Anropa metoden AddClone() för bildsamlingen i källpresentationen där andra presentationer ska kombineras.</li>
   <li>Spara den resulterande presentationen med alla bilder från målpresentationerna.</li>
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
   <p class="col-lg-12">Fler fungerande exempel och kompletta kodningsexempel av Aspose.Slides för .NET API finns på <a href="https://github.com/aspose-slides/Aspose.Slides-for-.NET/tree/master/Examples">GitHub-exempel</a>. Kolla in <a href="https://products.aspose.app/slides/family">gratis onlineappar</a> av Aspose.Slides som låter dig visa, konvertera, analysera, jämföra, vattenstämpla, redigera, dela och redigera PowerPoint-presentationsfiler var som helst med hjälp av dina mobila eller stationära enheter.</p>
{{< products/product-feature-blocks
featureheading="Säkert och oberoende .NET presentation API"
featuretext="Med Aspose.Slides för .NET har du tillgång till några utmärkta säkerhetsfunktioner som möjliggör pålitlig presentationsbearbetning i .NET. Detta inkluderar möjligheten att lösenordsskydda presentationerna och stöd för skrivskyddat läge. Dessutom behövs ingen installation av Microsoft PowerPoint när du använder .NET presentation API vilket ger dig en helt oberoende och unik användarupplevelse."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="FAQ"
>}}
   {{< products/faq-block
faqquery="1. Hur kan jag konvertera PowerPoint-filer till .NET?"
 faqanswer="Att konvertera Microsoft PowerPoint-filer till .NET går snabbt och enkelt med Aspose.Slides för .NET API. Endast några rader .NET-kodning behövs för att konvertera PPT-, PPTX-, PPS-, PPSX-, POT-, POTX-, PPTM- och ODP-filer till olika filformat."
>}}
   {{< products/faq-block 
faqquery="2. Hur lång tid tar det att slå samman eller konvertera PowerPoint-bilder?"
 faqanswer=".NET API för att manipulera och bearbeta presentationsbilder fungerar snabbt och slutför dina presentationsfilers konvertering och sammanslagningsförfrågningar på nolltid."
>}}
   {{< products/faq-block
faqquery="3. Är det säkert att bearbeta presentationer med .NET API?"
 faqanswer="Du kan vara säker på säkerheten för dina PowerPoint-presentationsfiler medan du bearbetar dem med Aspose.Slides för .NET API. Vi säkerställer integriteten för dina uppgifter och vidtar alla nödvändiga åtgärder för att ge dig en säker användarupplevelse."
>}}
   {{< products/faq-block
faqquery="4. Kan jag bearbeta PowerPoint-presentationer på Mac OS, Windows eller Linux?"
 faqanswer="Ja, API:et för bearbetning av PowerPoint-presentationer för .NET fungerar över olika operativsystem, ramverk och operativa miljöer. Du kan använda den på den plattform du väljer och den kräver ingen ytterligare programvaruinstallation för att fungera."
>}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="Manipulationsverktyg för PowerPoint-presentationer"
>}}
   {{< products/popularapp-anchor
 anchorlink="PowerPoint till PDF"
 moreproducts="https://products.aspose.com/slides/net/conversion/ppt-to-pdf/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PowerPoint till JPEG"
 moreproducts="https://products.aspose.com/slides/net/conversion/ppt-to-jpeg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PowerPoint till HTML"
 moreproducts="https://products.aspose.com/slides/net/conversion/ppt-to-html/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PPTX till PDF"
 moreproducts="https://products.aspose.com/slides/net/conversion/pptx-to-pdf/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PPTX till GIF"
 moreproducts="https://products.aspose.com/slides/net/conversion/pptx-to-gif/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PPTX till PNG"
 moreproducts="https://products.aspose.com/slides/net/conversion/pptx-to-png/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Slå samman PPT"
 moreproducts="https://products.aspose.com/slides/net/merger/ppt/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Slå samman PPTX"
 moreproducts="https://products.aspose.com/slides/net/merger/pptx/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Slå samman ODP"
 moreproducts="https://products.aspose.com/slides/net/merger/odp/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Slå ihop POT"
 moreproducts="https://products.aspose.com/slides/net/merger/pot/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Slå samman PPTM"
 moreproducts="https://products.aspose.com/slides/net/merger/pptm/"
>}}  
   {{< products/popularapp-anchor
 anchorlink="Slå samman PPS"
 moreproducts="https://products.aspose.com/slides/net/merger/pps/"
>}}
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Letar du efter hjälp?"
bartext="Kolla in våra supportkanaler för hjälp med dina frågor relaterade till Aspose-produktens API-funktioner och arbete."
 resourcetxt1="Docs"
 resourcelinks1="https://docs.aspose.com/slides/net/"
 resourcetxt2="API-referens"
 resourcelinks2="https://reference.aspose.com/slides/" 
 resourcetxt3="Kunskapsbas"
 resourcelinks3="https://kb.aspose.com/slides/net/"
 resourcetxt4="Gratis support"
 resourcelinks4="https://forum.aspose.com/c/slides/11"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-wrapper
 resource-heading="Resurser"
 sectionid="support"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://blog.aspose.com/"
 resourcetitle="Bloggar"
 resourcealt="Bloggar"
 resourceimg="/images/blog1.svg"
 resourcelistlink="https://blog.aspose.com/slides/convert-ppt-to-video-csharp/"
 resourcelistlink2="https://blog.aspose.com/slides/encrypt-ppt-csharp/"
 resourcelistlink3="https://blog.aspose.com/slides/convert-jpg-to-ppt-csharp/"
 resourcelisttext="Konvertera PPT till video i C#"
 resourcelisttext2="Kryptera PowerPoint i C#"
 resourcelisttext3="Konvertera JPG till PPT i C# .NET"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://docs.aspose.com/"
 resourcetitle="Dokumentation"
 resourcealt="Dokumentation"
 resourceimg="/img/docs1.svg"
 resourcelistlink="https://docs.aspose.com/slides/net/features-overview/"
 resourcelistlink2="https://www.nuget.org/packages/Aspose.Slides.Net/"
 resourcelistlink3="https://helpdesk.aspose.com/"
 resourcelisttext="Aspose.Slides för .NET-funktioner"
 resourcelisttext2="Installera Aspose.Slides för .NET NuGet Package"
 resourcelisttext3="Aspose.Slides för .NET Betald Support Helpdesk"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://kb.aspose.com/"
 resourcetitle="Kunskapsbas"
 resourcealt="Kodprover"
 resourceimg="/images/code1.svg"
 resourcelistlink="https://kb.aspose.com/slides/net/how-to-merge-slides-in-csharp/"
 resourcelistlink2="https://kb.aspose.com/slides/net/how-to-insert-signature-in-powerpoint-using-csharp/"
 resourcelistlink3="https://kb.aspose.com/slides/net/how-to-create-a-table-in-powerpoint-using-csharp/"
 resourcelisttext="Hur man slår samman bilder i C#"
resourcelisttext2="Hur man infogar signatur i PowerPoint med C#"
resourcelisttext3="Hur man skapar en tabell i PowerPoint med C#"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Redo att börja?"
rtstext="Ladda ner gratis provversion"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="Visa alla API:er"
>}}
