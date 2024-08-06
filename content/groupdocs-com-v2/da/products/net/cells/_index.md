---
title: Excel-regnearkfilformater, der behandler API til C# .NET
description: Et robust .NET Excel-bibliotek til at oprette, se og behandle Excel-regneark i C#, ASP.NET og VB.NET. Konverter Excel til PDF, JPEG, HTML og andre formater.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="Excel-regnearkfilformater, der behandler API til C# .NET"
  inheadertext="Indlæs, gengiv og manipuler XLS, XLSX, XLSM, XLT, ODS, CSV og andre Microsoft Excel-filformater på .NET Core- og Xamarin-platforme. Byg regnearksbehandlingsapps i ASP.NET og VB.NET for at konvertere Excel til PDF, Excel til JPG og mange andre formater."
  ctabtn="Download gratis prøveversion"
  ctabtn="Download gratis prøveversion"
  ctalink="https://releases.aspose.com/cells/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Se alle API'er"
  bchomelink="/"
  bchome="Hjem"
  bcpage="Celler"
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
subnav5="https://purchase.aspose.com/pricing/cells/net" 
subnavtxt5="Prissætning" 
subbtn1="https://docs.aspose.com/cells/net/" 
subbtntxt1="Lære"
subbtn2="https://purchase.aspose.com/buy" 
subbtntxt2="Købe"
>}}
   {{< products/subtext-wrapper 
   sectionid="overview"
   subtitle="Højtydende Excel-regnearkbehandling i .NET"
   subtext="Aspose.Cells for .NET er et pålideligt og funktionsrigt bibliotek, der gør det muligt for .NET-udviklere at oprette, indlæse, gengive og eksportere Excel-regnearksfiler i C#-, ASP.NET- og VB.NET-apps. Ved at bruge dette bibliotek kan du læse, se, redigere og skrive Excel-ark og udføre avancerede opgaver såsom at beregne formler, administrere diagrammer og pivottabeller og formatere tekst i regneark. Desuden kan du også arbejde med funktioner som at administrere regnearksrækker, kolonner og celler, anvende betinget formatering, manipulere datavalideringsregler, navngivne områder og meget mere. Aspose.Cells for .NET API understøtter en bred vifte af velkendte filformater såsom XLS, XLT, XLSM, XLSX, XLTX, XLTM, ODS, CSV, TSV og HTML." 
   subtext2="Der er ingen afhængighed af Microsoft Excel eller nogen ekstern software, mens du bruger Aspose.Cells til .NET, hvilket giver brugerne mulighed for at nyde en fuldstændig uafhængig, cross-platform regneark manipulation oplevelse. Udviklere kan bygge smarte Excel-filkonverteringsapps til fejlfrit at konvertere Excel til PDF, Excel til JPG, Excel til HTML og andre filtyper ved hjælp af denne regnearksbehandlings-API til C# .NET."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Kom godt i gang</h2>
   <p>Tjek venligst følgende oplysninger for korrekt opsætning og brug af Aspose.Cells til .NET API. Se også siden <a href="https://docs.aspose.com/cells/net/system-requirements/">Systemkrav</a> for at få en liste over forudsætninger for vellykket opsætning af Excel Documents API til .NET</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper 
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.Cells til .NET-installation"
>}}
<p>For at konfigurere Aspose.Cells til .NET på dit system skal du downloade DLL'erne eller MSI Installer direkte fra <a href="https://releases.aspose.com/cells/net/">downloadsektionen</a >. Eller du kan bruge <a href="https://www.nuget.org/packages/Aspose.Cells/">NuGet-pakken</a> til .NET-regnearkbehandlings-API-installationen. Pakkehåndteringskommandoen er givet nedenfor.</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp1"
>}}
PM> Install-Package Aspose.Cells
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Sådan konverteres Excel til PDF i .NET og flette Excel-projektmapper hurtigt"
featuretext="Aspose.Cells for .NET API gør det muligt for .NET-udviklere dygtigt at konvertere Microsoft Excel-projektmapper til forskellige filformater. Konvertering af Excel til PDF er let ved at bruge .NET Excel API, der lader dig konvertere XLS til PDF og XLSX til PDF i dine .NET filkonverteringsapps. Derudover kan du flette Excel-projektmapper og gemme det behandlede dokument som en samlet fil ved hjælp af .NET-regnearksbehandlings-API'en."
>}}
{{< products/product-feature-blocks-col
featurecolheading="Konverter Excel til PDF i .NET"
>}}
<p>Opgrader dine .NET-filkonverteringsapps ved at integrere Excel til PDF-konverteringsfunktionaliteten ved hjælp af Aspose.Cells til .NET-biblioteket. Konverter ubesværet XLS- og XLSX-filer til PDF-format ved at bruge et minimum af kode. Se venligst følgende oplysninger og eksempelkodning for at konvertere Excel til PDF i .NET-platformen:</p>
<ul>
   <li>Opret en forekomst af klassen <a href="https://reference.aspose.com/net/cells/aspose.cells/workbook">Workbook</a>, og tilføj det Excel-dokument, du ønsker at konvertere.</li>
   <li>Gem Excel-dokumentet i PDF-format ved hjælp af <a href="https://reference.aspose.com/cells/net/aspose.cells/workbook/save/#save_3">Gem</a>-metoden. Angiv PDF-format ved hjælp af <a href="https://reference.aspose.com/net/cells/aspose.cells/saveformat">SaveFormat</a>-optællingen.</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp2"
>}}
// Instantiate the Workbook object with the Excel file
Workbook workbook = new Workbook("SampleExcel.xls");
// Save the document in PDF format
workbook.Save("outputPDF.pdf", SaveFormat.Pdf);
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks-col 
featurecolheading="Flet MS Excel-arbejdsbøger i .NET"
>}}
<p>Programmatisk flette flere Excel-projektmapper og kombiner dem til en enkelt Excel-fil ved hjælp af Aspose.Cells for .NET API. Forbedre dine .NET-dokumentfusionsapps ved at injicere MS Excel-projektmappers fusionsfunktionalitet. Gennemgå venligst nedenstående kodestykke og oplysningerne om at kombinere flere projektmapper:</p>
<ul>
   <li>Opret to forekomster af klassen <a href="https://reference.aspose.com/net/cells/aspose.cells/workbook">Workbook</a>, en hver for de to projektmapper, der skal kombineres.</li>
   <li>Flet de to projektmapper ved hjælp af <a href="https://reference.aspose.com/cells/net/aspose.cells/workbook/combine/">Kombiner</a>-metoden</li>
   <li>Gem den kombinerede Excel-projektmappe ved hjælp af <a href="https://reference.aspose.com/cells/net/aspose.cells/workbook/save#save_2">Gem</a>-metoden.</li>
</ul>
{{< products/product-feature-blocks-snip 
snipclass="greysnipp" 
copyID="snipp3"
>}}
// Define the first source workbook
// Open the first excel file.
Workbook SourceBook1 = new Workbook(dataDir+ "SampleChart.xlsx");
// Define the second source workbook.
// Open the second excel file.
Workbook SourceBook2 = new Workbook(dataDir+ "SampleImage.xlsx");
// Combine the two workbooks
SourceBook1.Combine(SourceBook2);
// Save the target book file.
SourceBook1.Save("Combined.out.xlsx");
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< /products/product-feature-blocks >}}
   <p class="col-lg-12">For at se flere fungerende eksempler på Aspose.Cells til .NET API, besøg venligst <a href="https://github.com/aspose-cells/Aspose.Cells-for-.NET/tree/master/Examples"> GitHub eksempler</a> side. Du kan se, redigere, konvertere, flette, opdele, kommentere, vandmærke, parse, sammenligne, komprimere eller søge i Excel-dokumenter fra hvor som helst ved hjælp af dine mobile enheder. Tjek venligst <a href="https://products.aspose.app/cells/family">Aspose.Cells gratis online-apps</a> for on-the-fly manipulation af Excel-regneark.</p>
{{< products/product-feature-blocks
featureheading="GUI-kontroller og avancerede formelberegninger i .NET"
featuretext="Generer hurtigt professionelt udseende regneark komplet med pivottabeller og diagrammer ved hjælp af GUI-kontrollerne, der tilbydes af Aspose.Cells til .NET API. Hjælp dig selv med at skabe interaktive desktop- og webbaserede Excel-regneark-apps uden behov for omfattende kodning. Ud over de grafiske interface-funktioner understøtter dette .NET regnearksbehandlingsbibliotek mange standard- og avancerede funktioner, operatører og et omfattende formelberegningssystem, der er i stand til at håndtere komplekse formler."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper 
   faqtitle="FAQ"
>}}
   {{< products/faq-block
   faqquery="1. Hvordan kan jeg konvertere Excel-dokumenter til .NET?"
   faqanswer="Konvertering af Microsoft Excel-dokumenter i .NET er hurtigt og nemt ved at bruge Aspose.Cells til .NET API. Du kan konvertere Microsoft Excel-regneark i .NET til forskellige filformater ved at bruge minimumskodning."
>}}
   {{< products/faq-block
   faqquery="2. Hvor lang tid tager det at konvertere eller behandle Excel-regneark?"
   faqanswer=".NET regneark API tilbyder lynhurtige behandlingshastigheder og udfører dokumentkonvertering og -behandling meget hurtigt."
>}}
   {{< products/faq-block
   faqquery="3. Er det sikkert at behandle MS Excel-dokumenter ved hjælp af en .NET-regnearkbehandlings-API?"
   faqanswer="Selvfølgelig! Du kan være sikker på sikkerheden af dine dokumenter, mens du behandler dem ved hjælp af Aspose.Cells til .NET API. Vi sikrer privatlivets fred for dine data og træffer alle nødvendige foranstaltninger for at give dig en sikker brugeroplevelse."
>}}
   {{< products/faq-block
   faqquery="4. Kan jeg behandle Microsoft Excel-dokumenter på Mac OS, Windows eller Linux?"
   faqanswer="Ja, .NET API fungerer på tværs af forskellige operativsystemer, rammer og driftsmiljøer. Du kan bruge det på den platform, du vælger. .NET Excel-dokumentbehandlingsbiblioteket kræver ingen yderligere softwareinstallation for at fungere."
>}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="Excel regnearks manipulationsværktøjer"
>}}
   {{< products/popularapp-anchor
anchorlink="Excel til PDF"
moreproducts="https://products.aspose.com/cells/net/conversion/excel-to-pdf/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Excel til JPG"
moreproducts="https://products.aspose.com/cells/net/conversion/excel-to-jpg/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Excel til PNG"
moreproducts="https://products.aspose.com/cells/net/conversion/excel-to-png/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Excel til HTML"
moreproducts="https://products.aspose.com/cells/net/conversion/excel-to-html/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Excel til ODS"
moreproducts="https://products.aspose.com/cells/net/conversion/excel-to-ods/"
>}} 
   {{< products/popularapp-anchor
anchorlink="XLSX til CSV"
moreproducts="https://products.aspose.com/cells/net/conversion/xlsx-to-csv/"
>}} 
   {{< products/popularapp-anchor
anchorlink="XLSX til XPS"
moreproducts="https://products.aspose.com/cells/net/conversion/xlsx-to-xps/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Excel til JSON"
moreproducts="https://products.aspose.com/cells/net/conversion/excel-to-json/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Excel til SVG"
moreproducts="https://products.aspose.com/cells/net/conversion/excel-to-svg/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Excel til TSV"
moreproducts="https://products.aspose.com/cells/net/conversion/excel-to-tsv/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Excel til MD"
moreproducts="https://products.aspose.com/cells/net/conversion/excel-to-md/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Excel til TXT"
moreproducts="https://products.aspose.com/cells/net/conversion/excel-to-txt/"
>}} 
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Leder du efter hjælp?"
bartext="Tjek vores supportkanaler for at få hjælp til dine spørgsmål relateret til Aspose-produkt API-funktioner og arbejde."
resourcetxt1="Docs"
resourcelinks1="https://docs.aspose.com/cells/net/"
resourcetxt2="API-reference"
resourcelinks2="https://reference.aspose.com/cells/" 
resourcetxt3="Vidensbase"
resourcelinks3="https://kb.aspose.com/cells/net/"
resourcetxt4="Gratis support"
resourcelinks4="https://forum.aspose.com/c/cells/9"
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
resourcelistlink="https://blog.aspose.com/cells/convert-csv-to-json-csharp/"
resourcelistlink2="https://blog.aspose.com/cells/adjust-row-height-column-width-in-excel-csharp/"
resourcelistlink3="https://blog.aspose.com/cells/excel-to-csv-csharp/"
resourcelisttext="Konverter CSV til JSON i C#"
resourcelisttext2="Juster rækkehøjde og kolonnebredde i Excel"
resourcelisttext3="Konverter Excel XLS XLSX til CSV i C#"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://docs.aspose.com/"
resourcetitle="Dokumentation"
resourcealt="Dokumentation"
resourceimg="/img/docs1.svg"
resourcelistlink="https://docs.aspose.com/cells/net/"
resourcelistlink2="https://www.nuget.org/packages/Aspose.Cells/"
resourcelistlink3="https://helpdesk.aspose.com/"
resourcelisttext="Aspose.Cells til .NET Docs"
resourcelisttext2="Installer Aspose.Cells til .NET NuGet Package"
resourcelisttext3="Aspose.Cells for .NET Paid Support Helpdesk"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://kb.aspose.com/"
resourcetitle="Vidensbase"
resourcealt="Kodeprøver"
resourceimg="/images/code1.svg"
resourcelistlink="https://kb.aspose.com/cells/net/how-to-insert-comment-in-excel-using-csharp/"
resourcelistlink2="https://kb.aspose.com/cells/net/how-to-create-pivot-table-in-excel-using-csharp/"
resourcelistlink3="https://kb.aspose.com/cells/net/how-to-rotate-a-cell-in-excel-using-csharp/"
resourcelisttext="Sådan indsætter du en kommentar i Excel ved hjælp af C#"
resourcelisttext2="Sådan opretter du en pivottabel i Excel ved hjælp af C#"
resourcelisttext3="Sådan roteres en celle i Excel ved hjælp af C#"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Klar til at komme i gang?"
rtstext="Download gratis prøveversion"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="Se alle API'er"
>}}
