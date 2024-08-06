---
title: .NET Visio Diagram API til at oprette, redigere og behandle diagrammer
description: C# .NET Visio Diagram API til oprettelse, redigering og behandling af VSD, VSX, VTX, VSDX og andre Visio-filer. Konverter diagrammer til PDF-, PNG- og HTML-formater.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle=".NET Visio Diagram API til at oprette, redigere, eksportere og behandle diagrammer"
  inheadertext="Den ultimative .NET-diagram-API til fejlfrit at generere, manipulere og konvertere Microsoft Visio-filformater som VSD, VDX, VSX, VSX, VSSX, VTX og VTSX med C#, ASP.NET og VB.NET-baseret Visio-diagramfil behandler apps."
  ctabtn="Download gratis prøveversion"
  ctabtn="Download gratis prøveversion"
  ctalink="https://releases.aspose.com/diagram/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Se alle API'er"
  bchomelink="/"
  bchome="Hjem"
  bcpage="Diagram"
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
subnav5="https://purchase.aspose.com/pricing/diagram/net"
subnavtxt5="Prissætning" 
subbtn1="https://docs.aspose.com/diagram/net/"
subbtntxt1="Lære"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="Købe"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="Et fuldt udstyret .NET API til behandling af Microsoft Visio-diagrammer"
   subtext="Aspose.Diagram for .NET er en fleksibel og omfattende Visio-diagram API, der giver software- og appudviklere mulighed for at skabe kraftfulde Visio-filbehandlingsapps på tværs af C#, ASP.NET og VB.NET. Ved hjælp af denne indbyggede .NET-diagram-API kan du bygge mobilapplikationer, desktopløsninger og værktøjer til webgrænseflader til at oprette, ændre, transformere og eksportere Microsoft Visio-diagrammer. Aspose.Diagram for .NET-bibliotek understøtter populære Visio-filformater som VSD, VSDX, VTX, VDX, VSX, VSSX, VTSX, VSDM og VSSM. Du kan hurtigt og nemt udvikle sofistikerede diagramkonverteringsløsninger ved hjælp af denne .NET Visio diagram API og konvertere dine Visio filer til PDF, JPG, PNG, BMP, HTML, XPS, SVG og EMF filformater."
   subtext2="Blandt mange af dets avancerede Visio-filbehandlingsfunktioner gør Aspose.Diagram til .NET det muligt at rotere figurer, hente information om stik og skrifttyper, gruppere figurer, indsætte billeder i tegninger, tilføje nye sider til Visio-tegninger og gøre meget mere. Desuden kan du også tegne rektangler, polylinjer, Bezier og mange andre former på Visio-sider."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Kom godt i gang</h2>
   <p>Tjek venligst forudsætningerne på siden <a href="https://docs.aspose.com/diagram/net/system-requirements/">Systemkrav</a>, før du opsætter .NET diagramming API til en optimeret installation og API-brugserfaring.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.Diagram for .NET installation"
>}}
<p>For at installere Aspose.Diagram for .NET API kan du downloade DLL'erne eller MSI-installationsprogrammet fra <a href="https://releases.aspose.com/diagram/net/">downloadsektionen</a>. Eller du kan bruge <a href="https://www.nuget.org/packages/Aspose.Diagram/">NuGet-pakken</a> til at konfigurere Visio diagram API til .NET. Kommandoen til pakkehåndteringskonsollen er givet nedenfor:</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp1"
>}}
PM > Install-Package Aspose.Diagram 
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Sådan opretter du Visio-diagrammer fra bunden og konverterer Visio til PDF i .NET"
featuretext="Udviklere kan programmatisk oprette MS Visio-diagrammer fra bunden ved hjælp af Aspose.Diagram til .NET-bibliotek. Du kan nemt indsætte nye sider og figurer eller manipulere forskellige formegenskaber i de diagramfiler, du opretter. Uafhængig konvertering af VSD- og VSDX Visio-diagramformaterne til PDF-filer i høj kvalitet understøttes også af .NET-diagram-API'en."
>}}
{{< products/product-feature-blocks-col
featurecolheading="Opret Visio-diagrammer fra bunden i .NET"
>}}
<p>Aspose.Diagram for .NET API er en komplet diagrammanipulationsløsning, der gør det muligt for udviklere at skabe Visio-diagrammer fyldt med alle væsentlige elementer såsom former, flowcharts, kommentarer og meget mere. Du kan bruge .NET diagram API til at oprette Visio-dokumenter fra bunden ved hjælp af nedenstående trin og oplysninger:</p>
<ul>
   <li>Kontroller, om mappen til at gemme filen findes.</li>
   <li>Opret en mappe, hvis den ikke eksisterer.</li>
   <li>Initialiser et objekt af klassen <a href="https://reference.aspose.com/diagram/net/aspose.diagram/diagram">Diagram</a>.</li>
   <li>Gem diagrammet som VSDX ved hjælp af <a href="https://reference.aspose.com/diagram/net/aspose.diagram.diagram/save/methods/2">Diagram.Save(String fileName, SaveFileFormat.VSDX)</a> metode.</li>
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
featurecolheading="Konverter MS Visio-diagrammer til PDF i .NET"
>}}
<p>Konvertering af filer til PDF-format gør det nemmere at dele og få adgang til dem på tværs af flere enheder. Aspose.Diagram for .NET API gør det muligt at konvertere Visio-diagrammer til PDF-format i dine C# .NET-apps. Du kan programmæssigt konvertere VSD eller VSDX til PDF med høj konverteringskvalitet. Følgende trin og oplysninger vil hjælpe dig med at opnå dette:</p>
<ul>
   <li>Initialiser klasseobjektet <a href="https://apireference.aspose.com/diagram/net/aspose.diagram">Diagram</a> for at indlæse input-Visio-filen, der skal konverteres.</li>
   <li>Instantiér klasseobjektet <a href="https://reference.aspose.com/diagram/net/aspose.diagram.saving/pdfsaveoptions/">PdfSaveOptions</a>.</li>
   <li>Indstil filegenskaber som sideantal og sideindeks.</li>
   <li>Gem outputfilen som PDF.</li>
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
   <p class="col-lg-12">Flere fungerende eksempler på Aspose.Diagram for .NET API er tilgængelige på <a href="https://github.com/aspose-diagram/Aspose.Diagram-for-.NET/tree/master/Examples">GitHub-eksempler </a> side. Vi tilbyder <a href="https://products.aspose.app/diagram/family/">gratis online apps</a> af Aspose.Diagram til at redigere, se, konvertere, flette, vandmærke, opdele og komprimere Microsoft Visio-diagramfiler på farten ved hjælp af dine mobile eller stationære enheder. Du er velkommen til at prøve online-apps til at manipulere Visio-diagrammer hvor som helst.</p>
{{< products/product-feature-blocks
featureheading="Uafhængigt manipulere og udskrive Visio-filer"
featuretext="Aspose.Diagram for .NET API gør det muligt at få adgang til og læse data fra Microsoft Visio-filer, behandle dem og udskrive de behandlede filer i høj kvalitet med flere udskrivningsmuligheder, ved brug af minimal kodning. Du behøver ikke at installere Microsoft Office eller Microsoft Visio, når du behandler Visio-diagramfiler med Aspose.Diagram til .NET, hvilket giver dig en uafhængig brugeroplevelse."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="FAQ"
   >}}
   {{< products/faq-block
   faqquery="1. Hvordan kan jeg konvertere Microsoft Visio-diagrammer til .NET?"
   faqanswer="Konvertering af Visio-diagrammer i .NET er hurtigt og nemt ved at bruge Aspose.Diagram til .NET API. Kun et par linjer med .NET-kodning er nødvendige for at konvertere dine VSD, VSDX, VSX, VTX, VDX, VSDM og andre diagramfiler til forskellige filformater."
   >}}
   {{< products/faq-block
   faqquery="2. Hvor lang tid tager det at konvertere eller behandle Visio-diagrammer?"
   faqanswer=".NET diagram API arbejder hurtigt og fuldender dine anmodninger om diagramkonvertering på ingen tid."
   >}}
   {{< products/faq-block
   faqquery="3. Er det sikkert at behandle Visio-diagrammer ved hjælp af .NET API?"
   faqanswer="Du kan være sikker på sikkerheden af dine diagramfiler, mens du behandler dem ved hjælp af Aspose.Diagram for .NET API. Vi sikrer privatlivets fred for dine data og træffer alle nødvendige foranstaltninger for at give dig en sikker brugeroplevelse."
   >}}
   {{< products/faq-block
   faqquery="4. Kan jeg behandle MS Visio-diagrammer på Mac OS, Windows eller Linux?"
   faqanswer="Ja, diagrammerings-API'en til .NET fungerer på tværs af forskellige OS, frameworks og driftsmiljøer. Du kan bruge det på den platform, du vælger, og det kræver ingen yderligere softwareinstallation for at fungere."
   >}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="Visio Diagrams Manipulationsværktøjer"
>}}
   {{< products/popularapp-anchor
anchorlink="VSD til VSSX"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsd-to-vssx/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSDX til VSTM"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsdx-to-vstm/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VDX til VSDX"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vdx-to-vsdx/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSDM til VSSM"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsdm-to-vssm/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSD til TIFF"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsd-to-tiff/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSDX til BMP"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsdx-to-bmp/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSDM til JPEG"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsdm-to-jpeg/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VDX til PNG"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vdx-to-png/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSD til PDF"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsd-to-pdf/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSDX til PDF"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsdx-to-pdf/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSX til PDF"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsx-to-pdf/"
>}}  
   {{< products/popularapp-anchor
anchorlink="VSTM til PDF"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vstm-to-pdf/"
>}}
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Leder du efter hjælp?"
bartext="Tjek vores supportkanaler for at få hjælp til dine spørgsmål relateret til Aspose-produkt API-funktioner og arbejde."
resourcetxt1="Docs"
resourcelinks1="https://docs.aspose.com/diagram/net/"
resourcetxt2="API-reference"
resourcelinks2="https://reference.aspose.com/diagram/" 
resourcetxt3="Vidensbase"
resourcelinks3="https://kb.aspose.com/diagram/net/"
resourcetxt4="Gratis support"
resourcelinks4="https://forum.aspose.com/c/diagram/17"
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
resourcelistlink="https://blog.aspose.com/diagram/convert-image-to-visio-in-csharp/"
resourcelistlink2="https://blog.aspose.com/diagram/create-org-chart-csharp/"
resourcelistlink3="https://blog.aspose.com/diagram/find-replace-visio-text-csharp/"
resourcelisttext="Konverter billede til Visio i C#"
resourcelisttext2="Opret ORG-diagram programmatisk i C#"
resourcelisttext3="Find og erstat tekst i Visio-filer i C#"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://docs.aspose.com/"
resourcetitle="Dokumentation"
resourcealt="Dokumentation"
resourceimg="/img/docs1.svg"
resourcelistlink="https://docs.aspose.com/diagram/net/feature-list/"
resourcelistlink2="https://www.nuget.org/packages/Aspose.Diagram/"
resourcelistlink3="https://helpdesk.aspose.com/"
resourcelisttext="Aspose.Diagram for .NET-funktioner"
resourcelisttext2="Installer Aspose.Diagram til .NET NuGet Package"
resourcelisttext3="Aspose.Diagram for .NET Paid Support Helpdesk"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://kb.aspose.com/"
resourcetitle="Vidensbase"
resourcealt="Kodeprøver"
resourceimg="/images/code1.svg"
resourcelistlink="https://kb.aspose.com/diagram/net/how-to-add-comment-to-visio-drawings-in-c-sharp/"
resourcelistlink2="https://kb.aspose.com/diagram/net/how-to-merge-visio-files-in-csharp/"
resourcelistlink3="https://kb.aspose.com/diagram/net/how-to-convert-vsx-to-html-in-c-sharp/"
resourcelisttext="Sådan tilføjes kommentarer til Visio-tegninger i C#"
resourcelisttext2="Sådan flettes Visio-filer i C#"
resourcelisttext3="Sådan konverteres VSX til HTML i C#"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Klar til at komme i gang?"
rtstext="Download gratis prøveversion"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="Se alle API'er"
>}}
