---
title: API voor verwerking van Excel-spreadsheetbestandsindelingen voor C# .NET
description: Een robuuste .NET Excel-bibliotheek voor het maken, bekijken en verwerken van Excel-spreadsheets in C#, ASP.NET en VB.NET. Converteer Excel naar PDF, JPEG, HTML en andere formaten.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="API voor verwerking van Excel-spreadsheetbestandsindelingen voor C# .NET"
  inheadertext="Laad, render en manipuleer XLS-, XLSX-, XLSM-, XLT-, ODS-, CSV- en andere Microsoft Excel-bestandsindelingen op .NET Core- en Xamarin-platforms. Bouw apps voor spreadsheetverwerking in ASP.NET en VB.NET om Excel naar PDF, Excel naar JPG en vele andere formaten te converteren."
  ctabtn="Download gratis proefversie"
  ctabtn="Download gratis proefversie"
  ctalink="https://releases.aspose.com/cells/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Bekijk alle API's"
  bchomelink="/"
  bchome="Thuis"
  bcpage="Cellen"
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
subnav5="https://purchase.aspose.com/pricing/cells/net" 
subnavtxt5="prijzen" 
subbtn1="https://docs.aspose.com/cells/net/" 
subbtntxt1="Leren"
subbtn2="https://purchase.aspose.com/buy" 
subbtntxt2="Kopen"
>}}
   {{< products/subtext-wrapper 
   sectionid="overview"
   subtitle="Krachtige verwerking van Excel-spreadsheets in .NET"
   subtext="Aspose.Cells voor .NET is een betrouwbare bibliotheek met veel functies waarmee .NET-ontwikkelaars Excel-spreadsheetbestanden kunnen maken, laden, renderen en exporteren binnen C#-, ASP.NET- en VB.NET-apps. Met deze bibliotheek kunt u Excel-bladen lezen, bekijken, bewerken en schrijven en geavanceerde taken uitvoeren, zoals het berekenen van formules, het beheren van grafieken en draaitabellen en het opmaken van tekst in spreadsheets. Bovendien kunt u ook werken met functies zoals het beheren van rijen, kolommen en cellen in werkbladen, het toepassen van voorwaardelijke opmaak, het manipuleren van regels voor gegevensvalidatie, benoemde bereiken en nog veel meer. Aspose.Cells voor .NET API ondersteunt een breed scala aan bekende bestandsindelingen zoals XLS, XLT, XLSM, XLSX, XLTX, XLTM, ODS, CSV, TSV en HTML." 
   subtext2="Er is geen afhankelijkheid van Microsoft Excel of externe software tijdens het gebruik van Aspose.Cells voor .NET, waardoor gebruikers kunnen genieten van een volledig onafhankelijke, platformonafhankelijke spreadsheetmanipulatie. Ontwikkelaars kunnen slimme Excel-bestandsconversie-apps bouwen om Excel feilloos naar PDF, Excel naar JPG, Excel naar HTML en andere bestandstypen te converteren met behulp van deze spreadsheetverwerkings-API voor C# .NET."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Aan de slag</h2>
   <p>Controleer de volgende informatie om Aspose.Cells voor .NET API correct in te stellen en te gebruiken. Raadpleeg ook de pagina <a href="https://docs.aspose.com/cells/net/system-requirements/">Systeemvereisten</a> voor een lijst met vereisten voor het succesvol instellen van de Excel Documents API voor .NET</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper 
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.Cells voor .NET-installatie"
>}}
<p>Om Aspose.Cells voor .NET op uw systeem in te stellen, downloadt u de DLL's of het MSI-installatieprogramma rechtstreeks van de <a href="https://releases.aspose.com/cells/net/">downloadsectie</a >. Of u kunt het <a href="https://www.nuget.org/packages/Aspose.Cells/">NuGet-pakket</a> gebruiken voor de installatie van de .NET-spreadsheetverwerkings-API. De opdracht pakketbeheerder wordt hieronder gegeven.</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp1"
>}}
PM> Install-Package Aspose.Cells
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Excel naar PDF converteren in .NET en Excel-werkmappen snel samenvoegen"
featuretext="Aspose.Cells voor .NET API stelt .NET-ontwikkelaars in staat Microsoft Excel-werkmappen vakkundig om te zetten naar verschillende bestandsindelingen. Het converteren van Excel naar PDF is eenvoudig met behulp van de .NET Excel API waarmee u XLS naar PDF en XLSX naar PDF kunt converteren binnen uw .NET-bestandsconversie-apps. Bovendien kunt u Excel-werkmappen samenvoegen en het verwerkte document opslaan als een uniform bestand met behulp van de .NET-spreadsheetverwerkings-API."
>}}
{{< products/product-feature-blocks-col
featurecolheading="Converteer Excel naar PDF in .NET"
>}}
<p>Upgrade uw .NET-bestandsconversie-apps door de Excel naar PDF-conversiefunctionaliteit te integreren met Aspose.Cells voor .NET-bibliotheek. Converteer moeiteloos XLS- en XLSX-bestanden naar PDF-indeling met een minimale hoeveelheid code. Raadpleeg de volgende informatie en voorbeeldcodering om Excel naar PDF te converteren in het .NET-platform:</p>
<ul>
   <li>Maak een instantie van de klasse <a href="https://reference.aspose.com/net/cells/aspose.cells/workbook">Werkmap</a> en voeg het Excel-document toe dat u wilt converteren.</li>
   <li>Sla het Excel-document op in PDF-indeling met de methode <a href="https://reference.aspose.com/cells/net/aspose.cells/workbook/save/#save_3">Opslaan</a>. Geef het PDF-formaat op met behulp van de <a href="https://reference.aspose.com/net/cells/aspose.cells/saveformat">SaveFormat</a>-opsomming.</li>
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
featurecolheading="MS Excel-werkmappen samenvoegen in .NET"
>}}
<p>Voeg meerdere Excel-werkmappen programmatisch samen en combineer ze tot één Excel-bestand met behulp van Aspose.Cells voor .NET API. Verbeter uw .NET-apps voor het samenvoegen van documenten door de functionaliteit voor het samenvoegen van MS Excel-werkmappen te injecteren. Bekijk het onderstaande codefragment en de informatie voor het combineren van meerdere werkmappen:</p>
<ul>
   <li>Maak twee instanties van de klasse <a href="https://reference.aspose.com/net/cells/aspose.cells/workbook">Werkmap</a>, één voor de twee te combineren werkmappen.</li>
   <li>Voeg de twee werkmappen samen met de methode <a href="https://reference.aspose.com/cells/net/aspose.cells/workbook/combine/">Combine</a></li>
   <li>Sla de gecombineerde Excel-werkmap op met de methode <a href="https://reference.aspose.com/cells/net/aspose.cells/workbook/save#save_2">Opslaan</a>.</li>
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
   <p class="col-lg-12">Ga voor meer werkende voorbeelden van Aspose.Cells voor .NET API naar de <a href="https://github.com/aspose-cells/Aspose.Cells-for-.NET/tree/master/Examples"> GitHub voorbeelden</a> pagina. U kunt de Excel-documenten overal bekijken, bewerken, converteren, samenvoegen, splitsen, annoteren, watermerken, parseren, vergelijken, comprimeren of doorzoeken met uw mobiele apparaten. Controleer <a href="https://products.aspose.app/cells/family">Aspose.Cells gratis online apps</a> voor on-the-fly Excel-spreadsheetmanipulatie.</p>
{{< products/product-feature-blocks
featureheading="GUI-besturingselementen en geavanceerde formuleberekeningen in .NET"
featuretext="Genereer snel professioneel ogende spreadsheets compleet met draaitabellen en grafieken met behulp van de GUI-besturingselementen aangeboden door Aspose.Cells voor .NET API. Help uzelf interactieve desktop- en webgebaseerde Excel-spreadsheet-apps te maken zonder uitgebreide codering. Bovenop de functies van de grafische interface ondersteunt deze .NET spreadsheetverwerkingsbibliotheek vele standaard en geavanceerde functies, operators en een uitgebreid formuleberekeningssysteem dat in staat is om complexe formules te verwerken."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper 
   faqtitle="FAQ"
>}}
   {{< products/faq-block
   faqquery="1. Hoe kan ik Excel-documenten converteren naar .NET?"
   faqanswer="Het converteren van Microsoft Excel-documenten naar .NET gaat snel en eenvoudig met Aspose.Cells for .NET API. U kunt Microsoft Excel-spreadsheets in .NET converteren naar verschillende bestandsindelingen met minimale codering."
>}}
   {{< products/faq-block
   faqquery="2. Hoe lang duurt het om Excel-spreadsheets te converteren of te verwerken?"
   faqanswer="De .NET spreadsheet-API biedt razendsnelle verwerkingssnelheden en voert documentconversie en -verwerking zeer snel uit."
>}}
   {{< products/faq-block
   faqquery="3. Is het veilig om MS Excel-documenten te verwerken met behulp van de .NET spreadsheetverwerkings-API?"
   faqanswer="Natuurlijk! U kunt gerust zijn over de veiligheid van uw documenten terwijl u ze verwerkt met Aspose.Cells voor .NET API. We waarborgen de privacy van uw gegevens en nemen alle vereiste maatregelen om u een veilige gebruikerservaring te bieden."
>}}
   {{< products/faq-block
   faqquery="4. Kan ik Microsoft Excel-documenten verwerken op Mac OS, Windows of Linux?"
   faqanswer="Ja, de .NET API werkt met verschillende besturingssystemen, frameworks en besturingsomgevingen. U kunt het gebruiken op het platform van uw keuze. De .NET Excel-documentverwerkingsbibliotheek vereist geen extra software-installatie om te werken."
>}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="Hulpmiddelen voor het manipuleren van Excel-spreadsheets"
>}}
   {{< products/popularapp-anchor
anchorlink="Excel naar pdf"
moreproducts="https://products.aspose.com/cells/net/conversion/excel-to-pdf/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Excel naar JPG"
moreproducts="https://products.aspose.com/cells/net/conversion/excel-to-jpg/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Excel naar PNG"
moreproducts="https://products.aspose.com/cells/net/conversion/excel-to-png/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Excel naar HTML"
moreproducts="https://products.aspose.com/cells/net/conversion/excel-to-html/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Excel naar ODS"
moreproducts="https://products.aspose.com/cells/net/conversion/excel-to-ods/"
>}} 
   {{< products/popularapp-anchor
anchorlink="XLSX naar CSV"
moreproducts="https://products.aspose.com/cells/net/conversion/xlsx-to-csv/"
>}} 
   {{< products/popularapp-anchor
anchorlink="XLSX naar XPS"
moreproducts="https://products.aspose.com/cells/net/conversion/xlsx-to-xps/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Excel naar JSON"
moreproducts="https://products.aspose.com/cells/net/conversion/excel-to-json/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Excel naar SVG"
moreproducts="https://products.aspose.com/cells/net/conversion/excel-to-svg/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Excel naar TSV"
moreproducts="https://products.aspose.com/cells/net/conversion/excel-to-tsv/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Excel naar MD"
moreproducts="https://products.aspose.com/cells/net/conversion/excel-to-md/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Excel naar TXT"
moreproducts="https://products.aspose.com/cells/net/conversion/excel-to-txt/"
>}} 
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Op zoek naar hulp?"
bartext="Bekijk onze ondersteuningskanalen voor hulp bij uw vragen met betrekking tot Aspose-product-API-functies en -werking."
resourcetxt1="Docs"
resourcelinks1="https://docs.aspose.com/cells/net/"
resourcetxt2="API-referentie"
resourcelinks2="https://reference.aspose.com/cells/" 
resourcetxt3="Kennis basis"
resourcelinks3="https://kb.aspose.com/cells/net/"
resourcetxt4="Gratis ondersteuning"
resourcelinks4="https://forum.aspose.com/c/cells/9"
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
resourcelistlink="https://blog.aspose.com/cells/convert-csv-to-json-csharp/"
resourcelistlink2="https://blog.aspose.com/cells/adjust-row-height-column-width-in-excel-csharp/"
resourcelistlink3="https://blog.aspose.com/cells/excel-to-csv-csharp/"
resourcelisttext="Converteer CSV naar JSON in C#"
resourcelisttext2="Pas rijhoogte en kolombreedte aan in Excel"
resourcelisttext3="Converteer Excel XLS XLSX naar CSV in C#"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://docs.aspose.com/"
resourcetitle="Documentatie"
resourcealt="Documentatie"
resourceimg="/img/docs1.svg"
resourcelistlink="https://docs.aspose.com/cells/net/"
resourcelistlink2="https://www.nuget.org/packages/Aspose.Cells/"
resourcelistlink3="https://helpdesk.aspose.com/"
resourcelisttext="Aspose.Cells voor .NET Docs"
resourcelisttext2="Installeer Aspose.Cells voor .NET NuGet-pakket"
resourcelisttext3="Aspose.Cells voor .NET betaalde helpdesk"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://kb.aspose.com/"
resourcetitle="Kennis basis"
resourcealt="Codevoorbeelden"
resourceimg="/images/code1.svg"
resourcelistlink="https://kb.aspose.com/cells/net/how-to-insert-comment-in-excel-using-csharp/"
resourcelistlink2="https://kb.aspose.com/cells/net/how-to-create-pivot-table-in-excel-using-csharp/"
resourcelistlink3="https://kb.aspose.com/cells/net/how-to-rotate-a-cell-in-excel-using-csharp/"
resourcelisttext="Een opmerking in Excel invoegen met C#"
resourcelisttext2="Een draaitabel maken in Excel met C#"
resourcelisttext3="Een cel roteren in Excel met C#"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="klaar om te beginnen?"
rtstext="Download gratis proefversie"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="Bekijk alle API's"
>}}
