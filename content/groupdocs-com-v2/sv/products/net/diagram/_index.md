---
title: .NET Visio Diagram API för att skapa, redigera och bearbeta diagram
description: C# .NET Visio Diagram API för att skapa, redigera och bearbeta VSD, VSX, VTX, VSDX och andra Visio-filer. Konvertera diagram till PDF-, PNG- och HTML-format.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle=".NET Visio Diagram API för att skapa, redigera, exportera och bearbeta diagram"
  inheadertext="Det ultimata .NET-diagrammet API för att felfritt generera, manipulera och konvertera Microsoft Visio-filformat som VSD, VDX, VSX, VSX, VSSX, VTX och VTSX med C#, ASP.NET och VB.NET-baserad Visio-diagramfil bearbetar appar."
  ctabtn="Ladda ner gratis provversion"
  ctabtn="Ladda ner gratis provversion"
  ctalink="https://releases.aspose.com/diagram/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Visa alla API:er"
  bchomelink="/"
  bchome="Hem"
  bcpage="Diagram"
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
subnav5="https://purchase.aspose.com/pricing/diagram/net"
subnavtxt5="Prissättning" 
subbtn1="https://docs.aspose.com/diagram/net/"
subbtntxt1="Lära sig"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="köpa"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="En fullfjädrad .NET API för bearbetning av Microsoft Visio-diagram"
   subtext="Aspose.Diagram för .NET är ett flexibelt och heltäckande Visio-diagram API som tillåter program- och apputvecklare att skapa kraftfulla Visio-filbearbetningsappar över C#, ASP.NET och VB.NET. Med hjälp av detta inbyggda .NET-diagram-API kan du bygga mobila applikationer, skrivbordslösningar och verktyg för webbgränssnitt för att skapa, ändra, transformera och exportera Microsoft Visio-diagram. Aspose.Diagram för .NET-biblioteket stöder populära Visio-filformat som VSD, VSDX, VTX, VDX, VSX, VSSX, VTSX, VSDM och VSSM. Du kan snabbt och enkelt utveckla sofistikerade diagramkonverteringslösningar med hjälp av detta .NET Visio diagram API och konvertera dina Visio-filer till filformaten PDF, JPG, PNG, BMP, HTML, XPS, SVG och EMF."
   subtext2="Bland många av dess avancerade Visio-filbehandlingsfunktioner möjliggör Aspose.Diagram för .NET att rotera former, hämta information om kopplingar och typsnitt, gruppera former, injicera bilder i ritningar, lägga till nya sidor i Visio-ritningar och göra mycket mer. Dessutom kan du också rita rektanglar, polylinjer, Bezier och många andra former på Visio-sidor."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Komma igång</h2>
   <p>Kontrollera förutsättningarna på sidan <a href="https://docs.aspose.com/diagram/net/system-requirements/">Systemkrav</a> innan du ställer in .NET-diagrammets API för en optimerad installation och erfarenhet av API-användning.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.Diagram för .NET-installation"
>}}
<p>För att installera Aspose.Diagram för .NET API kan du ladda ner DLL-filerna eller MSI-installationsprogrammet från <a href="https://releases.aspose.com/diagram/net/">nedladdningssektionen</a>. Eller så kan du använda <a href="https://www.nuget.org/packages/Aspose.Diagram/">NuGet-paketet</a> för att ställa in Visio diagram API för .NET. Kommandot för pakethanterarens konsol ges nedan:</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp1"
>}}
PM > Install-Package Aspose.Diagram 
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Hur man skapar Visio-diagram från början och konverterar Visio till PDF i .NET"
featuretext="Utvecklare kan programmatiskt skapa MS Visio-diagram från grunden med Aspose.Diagram för .NET-biblioteket. Du kan enkelt infoga nya sidor och former, eller manipulera olika formegenskaper i diagramfilerna du skapar. Oberoende konvertering av VSD- och VSDX Visio-diagramformaten till PDF-filer i hög kvalitet stöds också av .NET-diagrammets API."
>}}
{{< products/product-feature-blocks-col
featurecolheading="Skapa Visio-diagram från början i .NET"
>}}
<p>Aspose.Diagram för .NET API är en komplett lösning för diagrammanipulering som gör det möjligt för utvecklare att skapa Visio-diagram laddade med alla viktiga element som former, flödesscheman, kommentarer och mycket mer. Du kan använda .NET diagram API för att skapa Visio-dokument från grunden med hjälp av nedanstående steg och information:</p>
<ul>
   <li>Kontrollera om katalogen för att spara filen finns.</li>
   <li>Skapa en katalog om den inte finns.</li>
   <li>Initiera ett objekt i klassen <a href="https://reference.aspose.com/diagram/net/aspose.diagram/diagram">Diagram</a>.</li>
   <li>Spara diagrammet som VSDX med <a href="https://reference.aspose.com/diagram/net/aspose.diagram.diagram/save/methods/2">Diagram.Save(String fileName, SaveFileFormat.VSDX)</a>-metoden.</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp2"
>}}
// The path to the documents directory.
string dataDir = RunExamples.GetDataDir_Diagrams();
// Create a directory if it is not already present.
bool IsExists = System.IO.Directory.Exists(dataDir);
if (!IsExists)
    System.IO.Directory.CreateDirectory(dataDir);
// Initialize a new Visio
Diagram diagram = new Diagram();
dataDir = dataDir + "CreateDiagram_out.vsdx";
// Save in the VSDX format
diagram.Save(dataDir, SaveFileFormat.VSDX);
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks-col
featurecolheading="Konvertera MS Visio-diagram till PDF i .NET"
>}}
<p>Att konvertera filer till PDF-format gör det lättare att dela och komma åt dem på flera enheter. Aspose.Diagram för .NET API gör det möjligt att konvertera Visio-diagram till PDF-format i dina C# .NET-appar. Du kan programmässigt konvertera VSD eller VSDX till PDF med hög konverteringskvalitet. Följande steg och information hjälper dig att uppnå detta:</p>
<ul>
   <li>Initiera klassobjektet <a href="https://apireference.aspose.com/diagram/net/aspose.diagram">Diagram</a> för att ladda indatafilen från Visio som ska konverteras.</li>
   <li>Instantiera klassobjektet <a href="https://reference.aspose.com/diagram/net/aspose.diagram.saving/pdfsaveoptions/">PdfSaveOptions</a>.</li>
   <li>Ställ in filegenskaper som sidantal och sidindex.</li>
   <li>Spara utdatafilen som PDF.</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp3"
>}}
// Load Visio diagram
Aspose.Diagram.Diagram diagram = new Aspose.Diagram.Diagram("Sample.vsd");
// Declare PdfSaveOptions object
Aspose.Diagram.Saving.PdfSaveOptions saveOptions = new Aspose.Diagram.Saving.PdfSaveOptions();
// Number of pages to render
saveOptions.PageCount = 2;
// Set first page index
saveOptions.PageIndex = 1;
// Save Visio diagram to PDF
diagram.Save("PDF_out.pdf", saveOptions);
Console.WriteLine("Done");
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< /products/product-feature-blocks >}}
   <p class="col-lg-12">Fler fungerande exempel på Aspose.Diagram för .NET API finns på <a href="https://github.com/aspose-diagram/Aspose.Diagram-for-.NET/tree/master/Examples">GitHub-exempel </a> sida. Vi erbjuder <a href="https://products.aspose.app/diagram/family/">gratis onlineappar</a> av Aspose.Diagram för att redigera, visa, konvertera, sammanfoga, vattenstämpla, dela och komprimera Microsoft Visio-diagramfiler i farten med dina mobila eller stationära enheter. Testa gärna onlineapparna för att manipulera Visio-diagram var som helst.</p>
{{< products/product-feature-blocks
featureheading="Självständigt manipulera och skriva ut Visio-filer"
featuretext="Aspose.Diagram för .NET API gör det möjligt att komma åt och läsa data från Microsoft Visio-filer, bearbeta dem och skriva ut de bearbetade filerna i hög kvalitet med flera utskriftsalternativ, med minimal kodning. Du behöver inte installera Microsoft Office eller Microsoft Visio när du bearbetar Visio-diagramfiler med Aspose.Diagram för .NET, vilket ger dig en oberoende användarupplevelse."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="FAQ"
   >}}
   {{< products/faq-block
   faqquery="1. Hur kan jag konvertera Microsoft Visio-diagram till .NET?"
   faqanswer="Att konvertera Visio-diagram i .NET är snabbt och enkelt med Aspose.Diagram för .NET API. Endast några rader med .NET-kodning behövs för att konvertera dina VSD, VSDX, VSX, VTX, VDX, VSDM och andra diagramfiler till olika filformat."
   >}}
   {{< products/faq-block
   faqquery="2. Hur lång tid tar det att konvertera eller bearbeta Visio-diagram?"
   faqanswer=".NET diagram API fungerar snabbt och slutför dina diagramkonverteringsförfrågningar på nolltid."
   >}}
   {{< products/faq-block
   faqquery="3. Är det säkert att bearbeta Visio-diagram med .NET API?"
   faqanswer="Du kan vara säker på säkerheten för dina diagramfiler medan du bearbetar dem med Aspose.Diagram för .NET API. Vi säkerställer integriteten för dina uppgifter och vidtar alla nödvändiga åtgärder för att ge dig en säker användarupplevelse."
   >}}
   {{< products/faq-block
   faqquery="4. Kan jag bearbeta MS Visio-diagram på Mac OS, Windows eller Linux?"
   faqanswer="Ja, diagrammets API för .NET fungerar över olika operativsystem, ramverk och operativa miljöer. Du kan använda den på den plattform du väljer och den kräver ingen ytterligare programvaruinstallation för att fungera."
   >}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="Visio Diagrams Manipulation Tools"
>}}
   {{< products/popularapp-anchor
anchorlink="VSD till VSSX"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsd-to-vssx/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSDX till VSTM"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsdx-to-vstm/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VDX till VSDX"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vdx-to-vsdx/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSDM till VSSM"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsdm-to-vssm/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSD till TIFF"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsd-to-tiff/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSDX till BMP"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsdx-to-bmp/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSDM till JPEG"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsdm-to-jpeg/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VDX till PNG"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vdx-to-png/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSD till PDF"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsd-to-pdf/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSDX till PDF"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsdx-to-pdf/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSX till PDF"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsx-to-pdf/"
>}}  
   {{< products/popularapp-anchor
anchorlink="VSTM till PDF"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vstm-to-pdf/"
>}}
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Letar du efter hjälp?"
bartext="Kolla in våra supportkanaler för hjälp med dina frågor relaterade till Aspose-produktens API-funktioner och arbete."
resourcetxt1="Docs"
resourcelinks1="https://docs.aspose.com/diagram/net/"
resourcetxt2="API-referens"
resourcelinks2="https://reference.aspose.com/diagram/" 
resourcetxt3="Kunskapsbas"
resourcelinks3="https://kb.aspose.com/diagram/net/"
resourcetxt4="Gratis support"
resourcelinks4="https://forum.aspose.com/c/diagram/17"
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
resourcelistlink="https://blog.aspose.com/diagram/convert-image-to-visio-in-csharp/"
resourcelistlink2="https://blog.aspose.com/diagram/create-org-chart-csharp/"
resourcelistlink3="https://blog.aspose.com/diagram/find-replace-visio-text-csharp/"
resourcelisttext="Konvertera bild till Visio i C#"
resourcelisttext2="Skapa ORG-diagram programmatiskt i C#"
resourcelisttext3="Hitta och ersätt text i Visio-filer i C#"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://docs.aspose.com/"
resourcetitle="Dokumentation"
resourcealt="Dokumentation"
resourceimg="/img/docs1.svg"
resourcelistlink="https://docs.aspose.com/diagram/net/feature-list/"
resourcelistlink2="https://www.nuget.org/packages/Aspose.Diagram/"
resourcelistlink3="https://helpdesk.aspose.com/"
resourcelisttext="Aspose.Diagram för .NET-funktioner"
resourcelisttext2="Installera Aspose.Diagram för .NET NuGet Package"
resourcelisttext3="Aspose.Diagram för .NET Betald Support Helpdesk"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://kb.aspose.com/"
resourcetitle="Kunskapsbas"
resourcealt="Kodprover"
resourceimg="/images/code1.svg"
resourcelistlink="https://kb.aspose.com/diagram/net/how-to-add-comment-to-visio-drawings-in-c-sharp/"
resourcelistlink2="https://kb.aspose.com/diagram/net/how-to-merge-visio-files-in-csharp/"
resourcelistlink3="https://kb.aspose.com/diagram/net/how-to-convert-vsx-to-html-in-c-sharp/"
resourcelisttext="Hur man lägger till kommentarer till Visio-ritningar i C#"
resourcelisttext2="Hur man slår ihop Visio-filer i C#"
resourcelisttext3="Hur man konverterar VSX till HTML i C#"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Redo att komma igång?"
rtstext="Ladda ner gratis provversion"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="Visa alla API:er"
>}}
