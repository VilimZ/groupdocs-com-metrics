---
title: Excel-regnearkfilformater behandler API for C# .NET
description: Et robust .NET Excel-bibliotek for å lage, vise og behandle Excel-regneark i C#, ASP.NET og VB.NET. Konverter Excel til PDF, JPEG, HTML og andre formater.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="Excel-regnearkfilformater behandler API for C# .NET"
  inheadertext="Last inn, gjengi og manipuler XLS, XLSX, XLSM, XLT, ODS, CSV og andre Microsoft Excel-filformater på .NET Core- og Xamarin-plattformer. Bygg regnearkbehandlingsapper i ASP.NET og VB.NET for å konvertere Excel til PDF, Excel til JPG og mange andre formater."
  ctabtn="Last ned gratis prøveversjon"
  ctabtn="Last ned gratis prøveversjon"
  ctalink="https://releases.aspose.com/cells/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Se alle APIer"
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
subnavtxt1="Oversikt" 
subnav2="#features"
subnavtxt2="Egenskaper" 
subnav3="#support" 
subnavtxt3="Brukerstøtte" 
subnav4="#examples" 
subnavtxt4="Eksempler" 
subnav5="https://purchase.aspose.com/pricing/cells/net" 
subnavtxt5="Prissetting" 
subbtn1="https://docs.aspose.com/cells/net/" 
subbtntxt1="Lære"
subbtn2="https://purchase.aspose.com/buy" 
subbtntxt2="Kjøpe"
>}}
   {{< products/subtext-wrapper 
   sectionid="overview"
   subtitle="Høyytelses Excel-regnearkbehandling i .NET"
   subtext="Aspose.Cells for .NET er et pålitelig og funksjonsrikt bibliotek som gjør det mulig for .NET-utviklere å lage, laste, gjengi og eksportere Excel-regnearkfiler i C#-, ASP.NET- og VB.NET-apper. Ved å bruke dette biblioteket kan du lese, vise, redigere og skrive Excel-ark og utføre avanserte oppgaver som å beregne formler, administrere diagrammer og pivottabeller og formatere tekst i regneark. Videre kan du også jobbe med funksjoner som å administrere regnearkrader, kolonner og celler, bruke betinget formatering, manipulere datavalideringsregler, navngitte områder og mye mer. Aspose.Cells for .NET API støtter et bredt spekter av kjente filformater som XLS, XLT, XLSM, XLSX, XLTX, XLTM, ODS, CSV, TSV og HTML." 
   subtext2="Det er ingen avhengighet av Microsoft Excel eller annen ekstern programvare mens du bruker Aspose.Cells for .NET, noe som lar brukere nyte en fullstendig uavhengig, plattformbasert regnearkmanipulasjonsopplevelse. Utviklere kan bygge smarte Excel-filkonverteringsapper for å feilfritt konvertere Excel til PDF, Excel til JPG, Excel til HTML og andre filtyper ved å bruke dette regnearkbehandlings-APIet for C# .NET."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Starter</h2>
   <p>Vennligst sjekk følgende informasjon for å konfigurere og bruke Aspose.Cells for .NET API på riktig måte. Se også <a href="https://docs.aspose.com/cells/net/system-requirements/">Systemkrav</a>-siden for en liste over forutsetninger for å konfigurere Excel Documents API. for .NET</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper 
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.Cells for .NET-installasjon"
>}}
<p>For å sette opp Aspose.Cells for .NET på systemet ditt, last ned DLL-ene eller MSI-installasjonsprogrammet direkte fra <a href="https://releases.aspose.com/cells/net/">nedlastingsdelen</a >. Eller du kan bruke <a href="https://www.nuget.org/packages/Aspose.Cells/">NuGet-pakken</a> for .NET-regnearkbehandlings-API-installasjonen. Pakkebehandlingskommandoen er gitt nedenfor.</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp1"
>}}
PM> Install-Package Aspose.Cells
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Hvordan konvertere Excel til PDF i .NET og raskt slå sammen Excel-arbeidsbøker"
featuretext="Aspose.Cells for .NET API gjør det mulig for .NET-utviklere å konvertere Microsoft Excel-arbeidsbøker til forskjellige filformater. Konvertering av Excel til PDF er enkelt ved å bruke .NET Excel API som lar deg konvertere XLS til PDF og XLSX til PDF i .NET-filkonverteringsappene dine. I tillegg kan du slå sammen Excel-arbeidsbøker og lagre det behandlede dokumentet som en enhetlig fil ved hjelp av .NET-regnearkbehandlings-API."
>}}
{{< products/product-feature-blocks-col
featurecolheading="Konverter Excel til PDF i .NET"
>}}
<p>Oppgrader .NET-filkonverteringsappene dine ved å integrere Excel til PDF-konverteringsfunksjonaliteten ved å bruke Aspose.Cells for .NET-biblioteket. Konverter XLS- og XLSX-filer enkelt til PDF-format ved å bruke en minimumsmengde kode. Se følgende informasjon og eksempelkoding for å konvertere Excel til PDF i .NET-plattformen:</p>
<ul>
   <li>Opprett en forekomst av <a href="https://reference.aspose.com/net/cells/aspose.cells/workbook">Workbook</a>-klassen og legg til Excel-dokumentet du ønsker å konvertere.</li>
   <li>Lagre Excel-dokumentet i PDF-format ved å bruke <a href="https://reference.aspose.com/cells/net/aspose.cells/workbook/save/#save_3">Lagre</a>-metoden. Spesifiser PDF-format ved å bruke <a href="https://reference.aspose.com/net/cells/aspose.cells/saveformat">SaveFormat</a>-oppregningen.</li>
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
featurecolheading="Slå sammen MS Excel-arbeidsbøker i .NET"
>}}
<p>Slå sammen flere Excel-arbeidsbøker og kombiner dem til én enkelt Excel-fil ved hjelp av Aspose.Cells for .NET API. Forbedre .NET dokumentsammenslåingsappene dine ved å injisere MS Excel-arbeidsbøkers fusjonsfunksjonalitet. Se gjennom kodebiten nedenfor og informasjonen for å kombinere flere arbeidsbøker:</p>
<ul>
   <li>Opprett to forekomster av <a href="https://reference.aspose.com/net/cells/aspose.cells/workbook">Workbook</a>-klassen, en hver for de to arbeidsbøkene som skal kombineres.</li>
   <li>Slå sammen de to arbeidsbøkene ved å bruke <a href="https://reference.aspose.com/cells/net/aspose.cells/workbook/combine/">Kombiner</a>-metoden</li>
   <li>Lagre den kombinerte Excel-arbeidsboken ved å bruke <a href="https://reference.aspose.com/cells/net/aspose.cells/workbook/save#save_2">Lagre</a>-metoden.</li>
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
   <p class="col-lg-12">For å sjekke flere fungerende eksempler på Aspose.Cells for .NET API, besøk <a href="https://github.com/aspose-cells/Aspose.Cells-for-.NET/tree/master/Examples"> GitHub-eksempler</a>-side. Du kan vise, redigere, konvertere, slå sammen, dele, kommentere, vannmerke, analysere, sammenligne, komprimere eller søke i Excel-dokumenter fra hvor som helst ved hjelp av mobile enheter. Vennligst sjekk <a href="https://products.aspose.app/cells/family">Aspose.Cells Free Online Apps</a> for manipulering av Excel-regneark underveis.</p>
{{< products/product-feature-blocks
featureheading="GUI-kontroller og avanserte formelberegninger i .NET"
featuretext="Generer raskt regneark med et profesjonelt utseende komplett med pivottabeller og diagrammer ved å bruke GUI-kontrollene som tilbys av Aspose.Cells for .NET API. Hjelp deg selv å lage interaktive skrivebords- og nettbaserte Excel-regnearkapper uten behov for omfattende koding. I tillegg til funksjonene i det grafiske grensesnittet, støtter dette .NET regnearkbehandlingsbiblioteket mange standard og avanserte funksjoner, operatører og et omfattende formelberegningssystem som kan håndtere komplekse formler."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper 
   faqtitle="FAQ"
>}}
   {{< products/faq-block
   faqquery="1. Hvordan kan jeg konvertere Excel-dokumenter i .NET?"
   faqanswer="Konvertering av Microsoft Excel-dokumenter i .NET er raskt og enkelt ved å bruke Aspose.Cells for .NET API. Du kan konvertere Microsoft Excel-regneark i .NET til forskjellige filformater ved å bruke minimumskoding."
>}}
   {{< products/faq-block
   faqquery="2. Hvor lang tid tar det å konvertere eller behandle Excel-regneark?"
   faqanswer=".NET-regneark-APIet tilbyr lynraske behandlingshastigheter og utfører dokumentkonvertering og -behandling veldig raskt."
>}}
   {{< products/faq-block
   faqquery="3. Er det trygt å behandle MS Excel-dokumenter ved å bruke et .NET-regnearkbehandlings-API?"
   faqanswer="Selvfølgelig! Du kan være trygg på sikkerheten til dokumentene dine mens du behandler dem ved hjelp av Aspose.Cells for .NET API. Vi sikrer personvernet til dataene dine og tar alle nødvendige tiltak for å gi deg en sikker brukeropplevelse."
>}}
   {{< products/faq-block
   faqquery="4. Kan jeg behandle Microsoft Excel-dokumenter på Mac OS, Windows eller Linux?"
   faqanswer="Ja, .NET API fungerer på tvers av forskjellige operativsystemer, rammeverk og driftsmiljøer. Du kan bruke den på plattformen du ønsker. .NET Excel-dokumentbehandlingsbiblioteket krever ingen ekstra programvareinstallasjon for å fungere."
>}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="Manipulasjonsverktøy for Excel-regneark"
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
bartitle="Leter du etter hjelp?"
bartext="Ta en titt på støttekanalene våre for å få hjelp med spørsmål knyttet til Aspose-produktets API-funksjoner og arbeid."
resourcetxt1="Docs"
resourcelinks1="https://docs.aspose.com/cells/net/"
resourcetxt2="API-referanse"
resourcelinks2="https://reference.aspose.com/cells/" 
resourcetxt3="Kunnskapsbase"
resourcelinks3="https://kb.aspose.com/cells/net/"
resourcetxt4="Gratis støtte"
resourcelinks4="https://forum.aspose.com/c/cells/9"
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
resourcelistlink="https://blog.aspose.com/cells/convert-csv-to-json-csharp/"
resourcelistlink2="https://blog.aspose.com/cells/adjust-row-height-column-width-in-excel-csharp/"
resourcelistlink3="https://blog.aspose.com/cells/excel-to-csv-csharp/"
resourcelisttext="Konverter CSV til JSON i C#"
resourcelisttext2="Juster radhøyde og kolonnebredde i Excel"
resourcelisttext3="Konverter Excel XLS XLSX til CSV i C#"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://docs.aspose.com/"
resourcetitle="Dokumentasjon"
resourcealt="Dokumentasjon"
resourceimg="/img/docs1.svg"
resourcelistlink="https://docs.aspose.com/cells/net/"
resourcelistlink2="https://www.nuget.org/packages/Aspose.Cells/"
resourcelistlink3="https://helpdesk.aspose.com/"
resourcelisttext="Aspose.Cells for .NET Docs"
resourcelisttext2="Installer Aspose.Cells for .NET NuGet Package"
resourcelisttext3="Aspose.Cells for .NET Paid Support Helpdesk"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://kb.aspose.com/"
resourcetitle="Kunnskapsbase"
resourcealt="Kodeeksempler"
resourceimg="/images/code1.svg"
resourcelistlink="https://kb.aspose.com/cells/net/how-to-insert-comment-in-excel-using-csharp/"
resourcelistlink2="https://kb.aspose.com/cells/net/how-to-create-pivot-table-in-excel-using-csharp/"
resourcelistlink3="https://kb.aspose.com/cells/net/how-to-rotate-a-cell-in-excel-using-csharp/"
resourcelisttext="Hvordan sette inn en kommentar i Excel ved hjelp av C#"
resourcelisttext2="Hvordan lage en pivottabell i Excel ved hjelp av C#"
resourcelisttext3="Hvordan rotere en celle i Excel ved hjelp av C#"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Klar til å komme i gang?"
rtstext="Last ned gratis prøveversjon"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="Se alle APIer"
>}}
