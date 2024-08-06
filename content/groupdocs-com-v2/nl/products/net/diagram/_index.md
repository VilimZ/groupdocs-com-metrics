---
title: .NET Visio Diagram API voor het maken, bewerken en verwerken van diagrammen
description: C# .NET Visio Diagram API voor het maken, bewerken en verwerken van VSD-, VSX-, VTX-, VSDX- en andere Visio-bestanden. Converteer diagrammen naar PDF-, PNG- en HTML-formaten.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle=".NET Visio Diagram API voor het maken, bewerken, exporteren en verwerken van diagrammen"
  inheadertext="De ultieme .NET-diagrammen-API voor het feilloos genereren, manipuleren en converteren van Microsoft Visio-bestandsindelingen zoals VSD, VDX, VSX, VSX, VSSX, VTX en VTSX met op C#, ASP.NET en VB.NET gebaseerd Visio-diagrambestand apps verwerken."
  ctabtn="Download gratis proefversie"
  ctabtn="Download gratis proefversie"
  ctalink="https://releases.aspose.com/diagram/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Bekijk alle API's"
  bchomelink="/"
  bchome="Thuis"
  bcpage="Diagram"
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
subnav5="https://purchase.aspose.com/pricing/diagram/net"
subnavtxt5="prijzen" 
subbtn1="https://docs.aspose.com/diagram/net/"
subbtntxt1="Leren"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="Kopen"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="Een complete .NET API voor het verwerken van Microsoft Visio-diagrammen"
   subtext="Aspose.Diagram voor .NET is een flexibele en uitgebreide Visio-diagram-API waarmee software- en app-ontwikkelaars krachtige Visio-apps voor bestandsverwerking kunnen maken in C#, ASP.NET en VB.NET. Met behulp van deze native .NET-API voor diagrammen kunt u mobiele toepassingen, desktopoplossingen en tools voor webinterfaces bouwen om Microsoft Visio-diagrammen te maken, aan te passen, te transformeren en te exporteren. Aspose.Diagram voor .NET-bibliotheek ondersteunt populaire Visio-bestandsindelingen zoals VSD, VSDX, VTX, VDX, VSX, VSSX, VTSX, VSDM en VSSM. Met deze .NET Visio-diagram-API kunt u snel en eenvoudig geavanceerde oplossingen voor diagramconversie ontwikkelen en uw Visio-bestanden converteren naar PDF-, JPG-, PNG-, BMP-, HTML-, XPS-, SVG- en EMF-bestandsindelingen."
   subtext2="Van de vele geavanceerde Visio-bestandsverwerkingsfuncties maakt Aspose.Diagram voor .NET het roteren van vormen mogelijk, het ophalen van informatie over connectoren en lettertypen, het groeperen van vormen, het injecteren van afbeeldingen in tekeningen, het toevoegen van nieuwe pagina's aan Visio-tekeningen en nog veel meer. Bovendien kunt u ook rechthoeken, polylijnen, Bézier en vele andere vormen tekenen op Visio-pagina's."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Aan de slag</h2>
   <p>Controleer de vereisten op de pagina <a href="https://docs.aspose.com/diagram/net/system-requirements/">Systeemvereisten</a> voordat u de .NET-diagrammen-API instelt voor een optimale installatie en API-gebruikservaring.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.Diagram voor .NET-installatie"
>}}
<p>Om Aspose.Diagram voor .NET API te installeren, kunt u de DLL's of het MSI-installatieprogramma downloaden van de <a href="https://releases.aspose.com/diagram/net/">downloadsectie</a>. Of u kunt het <a href="https://www.nuget.org/packages/Aspose.Diagram/">NuGet-pakket</a> gebruiken om de Visio-diagram-API voor .NET in te stellen. De opdracht voor de pakketbeheerderconsole wordt hieronder gegeven:</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp1"
>}}
PM > Install-Package Aspose.Diagram 
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Visio-diagrammen vanuit het niets maken en Visio naar PDF converteren in .NET"
featuretext="Ontwikkelaars kunnen vanuit het niets programmatisch MS Visio-diagrammen maken met Aspose.Diagram voor .NET-bibliotheek. U kunt moeiteloos nieuwe pagina's en vormen invoegen of verschillende vormeigenschappen manipuleren in de diagrambestanden die u maakt. Het onafhankelijk converteren van de VSD- en VSDX Visio-diagramindelingen naar PDF-bestanden met hoge betrouwbaarheid wordt ook ondersteund door de .NET-diagrammen-API."
>}}
{{< products/product-feature-blocks-col
featurecolheading="Maak vanuit het niets Visio-diagrammen in .NET"
>}}
<p>Aspose.Diagram voor .NET API is een complete oplossing voor het manipuleren van diagrammen waarmee ontwikkelaars Visio-diagrammen kunnen maken die zijn geladen met alle essentiële elementen zoals vormen, stroomdiagrammen, opmerkingen en nog veel meer. U kunt de .NET-diagram-API gebruiken om Visio-documenten helemaal opnieuw te maken met behulp van de onderstaande stappen en informatie:</p>
<ul>
   <li>Controleer of de map om het bestand op te slaan bestaat.</li>
   <li>Maak een directory aan als deze nog niet bestaat.</li>
   <li>Initialiseer een object van de klasse <a href="https://reference.aspose.com/diagram/net/aspose.diagram/diagram">Diagram</a>.</li>
   <li>Sla het diagram op als VSDX met <a href="https://reference.aspose.com/diagram/net/aspose.diagram.diagram/save/methods/2">Diagram.Save(String fileName, SaveFileFormat.VSDX)</a> methode.</li>
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
featurecolheading="Converteer MS Visio-diagrammen naar PDF in .NET"
>}}
<p>Door bestanden naar PDF-indeling te converteren, kunt u ze gemakkelijker delen en openen op meerdere apparaten. Met Aspose.Diagram voor .NET API kunt u Visio-diagrammen converteren naar PDF-indeling binnen uw C# .NET-apps. U kunt VSD of VSDX programmatisch naar PDF converteren met een hoge conversiekwaliteit. De volgende stappen en informatie helpen u daarbij:</p>
<ul>
   <li>Initialiseer het klasseobject <a href="https://apireference.aspose.com/diagram/net/aspose.diagram">Diagram</a> om het Visio-invoerbestand te laden dat moet worden geconverteerd.</li>
   <li>Instantieer het klasseobject <a href="https://reference.aspose.com/diagram/net/aspose.diagram.saving/pdfsaveoptions/">PdfSaveOptions</a>.</li>
   <li>Stel bestandseigenschappen in zoals het aantal pagina's en de pagina-index.</li>
   <li>Sla het uitvoerbestand op als PDF.</li>
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
   <p class="col-lg-12">Meer werkende voorbeelden van Aspose.Diagram voor .NET API zijn beschikbaar op de <a href="https://github.com/aspose-diagram/Aspose.Diagram-for-.NET/tree/master/Examples">GitHub-voorbeelden </a> pagina. We bieden <a href="https://products.aspose.app/diagram/family/">gratis online apps</a> van Aspose.Diagram om Microsoft Visio-diagrambestanden direct met uw mobiele of desktopapparaten. Aarzel niet om de online apps uit te proberen voor het manipuleren van Visio-diagrammen waar u ook bent.</p>
{{< products/product-feature-blocks
featureheading="Zelfstandig Visio-bestanden manipuleren en afdrukken"
featuretext="Met Aspose.Diagram voor .NET API kunnen gegevens uit Microsoft Visio-bestanden worden geopend en gelezen, verwerkt en de verwerkte bestanden in hoge kwaliteit worden afgedrukt met meerdere afdrukopties, met minimale codering. U hoeft Microsoft Office of Microsoft Visio niet te installeren bij het verwerken van Visio-diagrambestanden met Aspose.Diagram voor .NET, waardoor u een onafhankelijke gebruikerservaring krijgt."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="FAQ"
   >}}
   {{< products/faq-block
   faqquery="1. Hoe kan ik Microsoft Visio-diagrammen converteren naar .NET?"
   faqanswer="Het converteren van Visio-diagrammen in .NET gaat snel en eenvoudig met Aspose.Diagram voor .NET API. Er zijn slechts een paar regels .NET-codering nodig om uw VSD-, VSDX-, VSX-, VTX-, VDX-, VSDM- en andere diagrambestanden naar verschillende bestandsindelingen te converteren."
   >}}
   {{< products/faq-block
   faqquery="2. Hoe lang duurt het om Visio-diagrammen te converteren of te verwerken?"
   faqanswer="De .NET diagram API werkt snel en voltooit uw diagramconversieverzoeken in een mum van tijd."
   >}}
   {{< products/faq-block
   faqquery="3. Is het veilig om Visio-diagrammen te verwerken met de .NET API?"
   faqanswer="U kunt zeker zijn van de veiligheid van uw diagrambestanden terwijl u ze verwerkt met Aspose.Diagram voor .NET API. We waarborgen de privacy van uw gegevens en nemen alle vereiste maatregelen om u een veilige gebruikerservaring te bieden."
   >}}
   {{< products/faq-block
   faqquery="4. Kan ik MS Visio-diagrammen verwerken op Mac OS, Windows of Linux?"
   faqanswer="Ja, de diagram-API voor .NET werkt in verschillende besturingssystemen, frameworks en besturingsomgevingen. U kunt het gebruiken op het platform van uw keuze en er is geen extra software-installatie nodig om te functioneren."
   >}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="Visio-diagrammen Manipulatietools"
>}}
   {{< products/popularapp-anchor
anchorlink="VSD naar VSSX"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsd-to-vssx/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSDX naar VSTM"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsdx-to-vstm/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VDX naar VSDX"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vdx-to-vsdx/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSDM naar VSSM"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsdm-to-vssm/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSD naar TIFF"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsd-to-tiff/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSDX naar BMP"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsdx-to-bmp/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSDM naar JPEG"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsdm-to-jpeg/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VDX naar PNG"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vdx-to-png/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSD naar PDF"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsd-to-pdf/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSDX naar PDF"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsdx-to-pdf/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSX naar PDF"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsx-to-pdf/"
>}}  
   {{< products/popularapp-anchor
anchorlink="VSTM naar PDF"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vstm-to-pdf/"
>}}
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Op zoek naar hulp?"
bartext="Bekijk onze ondersteuningskanalen voor hulp bij uw vragen met betrekking tot Aspose-product-API-functies en -werking."
resourcetxt1="Docs"
resourcelinks1="https://docs.aspose.com/diagram/net/"
resourcetxt2="API-referentie"
resourcelinks2="https://reference.aspose.com/diagram/" 
resourcetxt3="Kennis basis"
resourcelinks3="https://kb.aspose.com/diagram/net/"
resourcetxt4="Gratis ondersteuning"
resourcelinks4="https://forum.aspose.com/c/diagram/17"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-wrapper
resource-heading="Bronnen"
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
resourcelisttext="Converteer afbeelding naar Visio in C#"
resourcelisttext2="ORG-diagram programmatisch maken in C#"
resourcelisttext3="Zoek en vervang tekst in Visio-bestanden in C#"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://docs.aspose.com/"
resourcetitle="Documentatie"
resourcealt="Documentatie"
resourceimg="/img/docs1.svg"
resourcelistlink="https://docs.aspose.com/diagram/net/feature-list/"
resourcelistlink2="https://www.nuget.org/packages/Aspose.Diagram/"
resourcelistlink3="https://helpdesk.aspose.com/"
resourcelisttext="Aspose.Diagram voor .NET-functies"
resourcelisttext2="Installeer Aspose.Diagram voor .NET NuGet-pakket"
resourcelisttext3="Aspose.Diagram voor .NET betaalde ondersteuningshelpdesk"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://kb.aspose.com/"
resourcetitle="Kennis basis"
resourcealt="Codevoorbeelden"
resourceimg="/images/code1.svg"
resourcelistlink="https://kb.aspose.com/diagram/net/how-to-add-comment-to-visio-drawings-in-c-sharp/"
resourcelistlink2="https://kb.aspose.com/diagram/net/how-to-merge-visio-files-in-csharp/"
resourcelistlink3="https://kb.aspose.com/diagram/net/how-to-convert-vsx-to-html-in-c-sharp/"
resourcelisttext="Opmerkingen toevoegen aan Visio-tekeningen in C#"
resourcelisttext2="Visio-bestanden samenvoegen in C#"
resourcelisttext3="Hoe VSX naar HTML te converteren in C #"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="klaar om te beginnen?"
rtstext="Download gratis proefversie"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="Bekijk alle API's"
>}}
