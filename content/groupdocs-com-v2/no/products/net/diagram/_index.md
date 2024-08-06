---
title: .NET Visio Diagram API for å lage, redigere og behandle diagrammer
description: C# .NET Visio Diagram API for å lage, redigere og behandle VSD, VSX, VTX, VSDX og andre Visio-filer. Konverter diagrammer til PDF-, PNG- og HTML-formater.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle=".NET Visio Diagram API for å lage, redigere, eksportere og behandle diagrammer"
  inheadertext="Den ultimate .NET diagramming API for feilfritt å generere, manipulere og konvertere Microsoft Visio-filformater som VSD, VDX, VSX, VSX, VSSX, VTX og VTSX med C#, ASP.NET og VB.NET-basert Visio-diagramfil behandle apper."
  ctabtn="Last ned gratis prøveversjon"
  ctabtn="Last ned gratis prøveversjon"
  ctalink="https://releases.aspose.com/diagram/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Se alle APIer"
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
subnavtxt1="Oversikt" 
subnav2="#features"
subnavtxt2="Egenskaper" 
subnav3="#support"
subnavtxt3="Brukerstøtte" 
subnav4="#examples"
subnavtxt4="Eksempler" 
subnav5="https://purchase.aspose.com/pricing/diagram/net"
subnavtxt5="Prissetting" 
subbtn1="https://docs.aspose.com/diagram/net/"
subbtntxt1="Lære"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="Kjøpe"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="En fullverdig .NET API for behandling av Microsoft Visio-diagrammer"
   subtext="Aspose.Diagram for .NET er en fleksibel og omfattende Visio-diagram API som lar programvare- og apputviklere lage kraftige Visio-filbehandlingsapper på tvers av C#, ASP.NET og VB.NET. Ved hjelp av denne innfødte .NET diagramming API kan du bygge mobilapplikasjoner, skrivebordsløsninger og verktøy for nettgrensesnitt for å lage, endre, transformere og eksportere Microsoft Visio-diagrammer. Aspose.Diagram for .NET-biblioteket støtter populære Visio-filformater som VSD, VSDX, VTX, VDX, VSX, VSSX, VTSX, VSDM og VSSM. Du kan raskt og enkelt utvikle sofistikerte diagramkonverteringsløsninger ved å bruke denne .NET Visio diagram API og konvertere Visio-filene dine til PDF-, JPG-, PNG-, BMP-, HTML-, XPS-, SVG- og EMF-filformater."
   subtext2="Blant mange av sine avanserte Visio-filbehandlingsfunksjoner, muliggjør Aspose.Diagram for .NET roterende former, hente informasjon om koblinger og fonter, gruppere former, injisere bilder i tegninger, legge til nye sider i Visio-tegninger og gjøre mye mer. Videre kan du også tegne rektangler, polylinjer, Bezier og mange andre former på Visio-sider."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Starter</h2>
   <p>Vennligst sjekk forutsetningene på <a href="https://docs.aspose.com/diagram/net/system-requirements/">Systemkrav</a>-siden før du setter opp .NET diagramming API for en optimalisert installasjon og API-brukserfaring.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.Diagram for .NET-installasjon"
>}}
<p>For å installere Aspose.Diagram for .NET API, kan du laste ned DLL-ene eller MSI-installasjonsprogrammet fra <a href="https://releases.aspose.com/diagram/net/">nedlastingsdelen</a>. Eller du kan bruke <a href="https://www.nuget.org/packages/Aspose.Diagram/">NuGet-pakken</a> for å sette opp Visio diagram API for .NET. Kommandoen for pakkebehandlingskonsollen er gitt nedenfor:</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp1"
>}}
PM > Install-Package Aspose.Diagram 
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Hvordan lage Visio-diagrammer fra bunnen av og konvertere Visio til PDF i .NET"
featuretext="Utviklere kan programmatisk lage MS Visio-diagrammer fra bunnen av ved hjelp av Aspose.Diagram for .NET-bibliotek. Du kan enkelt sette inn nye sider og former, eller manipulere forskjellige formegenskaper i diagramfilene du lager. Uavhengig konvertering av VSD- og VSDX Visio-diagramformatene til PDF-filer i høy kvalitet støttes også av .NET-diagrammet API."
>}}
{{< products/product-feature-blocks-col
featurecolheading="Lag Visio-diagrammer fra bunnen av i .NET"
>}}
<p>Aspose.Diagram for .NET API er en komplett løsning for diagrammanipulering som gjør det mulig for utviklere å lage Visio-diagrammer lastet med alle viktige elementer som former, flytskjemaer, kommentarer og mye mer. Du kan bruke .NET diagram API for å lage Visio-dokumenter fra bunnen av ved hjelp av trinnene og informasjonen nedenfor:</p>
<ul>
   <li>Sjekk om katalogen for å lagre filen eksisterer.</li>
   <li>Opprett en katalog hvis den ikke eksisterer.</li>
   <li>Initialiser et objekt av klassen <a href="https://reference.aspose.com/diagram/net/aspose.diagram/diagram">Diagram</a>.</li>
   <li>Lagre diagrammet som VSDX ved å bruke <a href="https://reference.aspose.com/diagram/net/aspose.diagram.diagram/save/methods/2">Diagram.Save(String fileName, SaveFileFormat.VSDX)</a>-metoden.</li>
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
<p>Konvertering av filer til PDF-format gjør det enklere å dele og få tilgang til dem på tvers av flere enheter. Aspose.Diagram for .NET API lar deg konvertere Visio-diagrammer til PDF-format i C# .NET-appene dine. Du kan programmatisk konvertere VSD eller VSDX til PDF med høy konverteringskvalitet. Følgende trinn og informasjon vil hjelpe deg med å oppnå dette:</p>
<ul>
   <li>Initialiser klasseobjektet <a href="https://apireference.aspose.com/diagram/net/aspose.diagram">Diagram</a> for å laste inn Visio-filen som skal konverteres.</li>
   <li>Instantier klasseobjektet <a href="https://reference.aspose.com/diagram/net/aspose.diagram.saving/pdfsaveoptions/">PdfSaveOptions</a>.</li>
   <li>Angi filegenskaper som sideantall og sideindeks.</li>
   <li>Lagre utdatafilen som PDF.</li>
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
   <p class="col-lg-12">Flere fungerende eksempler på Aspose.Diagram for .NET API er tilgjengelig på <a href="https://github.com/aspose-diagram/Aspose.Diagram-for-.NET/tree/master/Examples">GitHub-eksempler </a> siden. Vi tilbyr <a href="https://products.aspose.app/diagram/family/">gratis nettapper</a> av Aspose.Diagram for å redigere, vise, konvertere, slå sammen, vannmerke, dele og komprimere Microsoft Visio-diagramfiler på farten ved hjelp av mobile eller stasjonære enheter. Prøv gjerne nettappene for å manipulere Visio-diagrammer fra hvor som helst.</p>
{{< products/product-feature-blocks
featureheading="Uavhengig manipulere og skrive ut Visio-filer"
featuretext="Aspose.Diagram for .NET API lar deg få tilgang til og lese data fra Microsoft Visio-filer, behandle dem og skrive ut de behandlede filene i høy kvalitet med flere utskriftsalternativer, med minimal koding. Du trenger ikke å installere Microsoft Office eller Microsoft Visio når du behandler Visio-diagramfiler med Aspose.Diagram for .NET, noe som gir deg en uavhengig brukeropplevelse."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="FAQ"
   >}}
   {{< products/faq-block
   faqquery="1. Hvordan kan jeg konvertere Microsoft Visio-diagrammer til .NET?"
   faqanswer="Konvertering av Visio-diagrammer i .NET er raskt og enkelt ved å bruke Aspose.Diagram for .NET API. Bare noen få linjer med .NET-koding er nødvendig for å konvertere VSD, VSDX, VSX, VTX, VDX, VSDM og andre diagramfiler til forskjellige filformater."
   >}}
   {{< products/faq-block
   faqquery="2. Hvor lang tid tar det å konvertere eller behandle Visio-diagrammer?"
   faqanswer=".NET diagram API fungerer raskt og fullfører forespørslene dine om diagramkonvertering på kort tid."
   >}}
   {{< products/faq-block
   faqquery="3. Er det trygt å behandle Visio-diagrammer ved hjelp av .NET API?"
   faqanswer="Du kan være sikker på sikkerheten til diagramfilene dine mens du behandler dem ved hjelp av Aspose.Diagram for .NET API. Vi sikrer personvernet til dataene dine og tar alle nødvendige tiltak for å gi deg en sikker brukeropplevelse."
   >}}
   {{< products/faq-block
   faqquery="4. Kan jeg behandle MS Visio-diagrammer på Mac OS, Windows eller Linux?"
   faqanswer="Ja, API for diagrammer for .NET fungerer på tvers av forskjellige operativsystemer, rammeverk og operativsystemer. Du kan bruke den på plattformen du ønsker, og den krever ingen ekstra programvareinstallasjon for å fungere."
   >}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="Visio Diagrams Manipulasjonsverktøy"
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
bartitle="Leter du etter hjelp?"
bartext="Ta en titt på støttekanalene våre for å få hjelp med spørsmål knyttet til Aspose-produktets API-funksjoner og arbeid."
resourcetxt1="Docs"
resourcelinks1="https://docs.aspose.com/diagram/net/"
resourcetxt2="API-referanse"
resourcelinks2="https://reference.aspose.com/diagram/" 
resourcetxt3="Kunnskapsbase"
resourcelinks3="https://kb.aspose.com/diagram/net/"
resourcetxt4="Gratis støtte"
resourcelinks4="https://forum.aspose.com/c/diagram/17"
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
resourcelistlink="https://blog.aspose.com/diagram/convert-image-to-visio-in-csharp/"
resourcelistlink2="https://blog.aspose.com/diagram/create-org-chart-csharp/"
resourcelistlink3="https://blog.aspose.com/diagram/find-replace-visio-text-csharp/"
resourcelisttext="Konverter bilde til Visio i C#"
resourcelisttext2="Lag ORG-diagram programmatisk i C#"
resourcelisttext3="Finn og erstatt tekst i Visio-filer i C#"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://docs.aspose.com/"
resourcetitle="Dokumentasjon"
resourcealt="Dokumentasjon"
resourceimg="/img/docs1.svg"
resourcelistlink="https://docs.aspose.com/diagram/net/feature-list/"
resourcelistlink2="https://www.nuget.org/packages/Aspose.Diagram/"
resourcelistlink3="https://helpdesk.aspose.com/"
resourcelisttext="Aspose.Diagram for .NET-funksjoner"
resourcelisttext2="Installer Aspose.Diagram for .NET NuGet Package"
resourcelisttext3="Aspose.Diagram for .NET Paid Support Helpdesk"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://kb.aspose.com/"
resourcetitle="Kunnskapsbase"
resourcealt="Kodeeksempler"
resourceimg="/images/code1.svg"
resourcelistlink="https://kb.aspose.com/diagram/net/how-to-add-comment-to-visio-drawings-in-c-sharp/"
resourcelistlink2="https://kb.aspose.com/diagram/net/how-to-merge-visio-files-in-csharp/"
resourcelistlink3="https://kb.aspose.com/diagram/net/how-to-convert-vsx-to-html-in-c-sharp/"
resourcelisttext="Hvordan legge til kommentarer til Visio-tegninger i C#"
resourcelisttext2="Slik slår du sammen Visio-filer i C#"
resourcelisttext3="Hvordan konvertere VSX til HTML i C#"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Klar til å komme i gang?"
rtstext="Last ned gratis prøveversjon"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="Se alle APIer"
>}}
