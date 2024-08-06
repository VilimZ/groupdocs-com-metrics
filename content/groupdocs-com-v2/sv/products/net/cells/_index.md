---
title: Excel-kalkylbladsfilformat bearbetar API för C# .NET
description: Ett robust .NET Excel-bibliotek för att skapa, visa och bearbeta Excel-kalkylblad i C#, ASP.NET och VB.NET. Konvertera Excel till PDF, JPEG, HTML och andra format.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="Excel-kalkylbladsfilformat bearbetar API för C# .NET"
  inheadertext="Ladda, rendera och manipulera XLS, XLSX, XLSM, XLT, ODS, CSV och andra Microsoft Excel-filformat på .NET Core- och Xamarin-plattformar. Bygg kalkylbladsbearbetningsappar i ASP.NET och VB.NET för att konvertera Excel till PDF, Excel till JPG och många andra format."
  ctabtn="Ladda ner gratis provversion"
  ctabtn="Ladda ner gratis provversion"
  ctalink="https://releases.aspose.com/cells/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Visa alla API:er"
  bchomelink="/"
  bchome="Hem"
  bcpage="Celler"
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
subnav5="https://purchase.aspose.com/pricing/cells/net" 
subnavtxt5="Prissättning" 
subbtn1="https://docs.aspose.com/cells/net/" 
subbtntxt1="Lära sig"
subbtn2="https://purchase.aspose.com/buy" 
subbtntxt2="köpa"
>}}
   {{< products/subtext-wrapper 
   sectionid="overview"
   subtitle="Högpresterande Excel-kalkylbladsbearbetning i .NET"
   subtext="Aspose.Cells for .NET är ett pålitligt och funktionsrikt bibliotek som gör det möjligt för .NET-utvecklare att skapa, ladda, rendera och exportera Excel-kalkylbladsfiler i C#-, ASP.NET- och VB.NET-appar. Med det här biblioteket kan du läsa, visa, redigera och skriva Excel-ark och utföra avancerade uppgifter som att beräkna formler, hantera diagram och pivottabeller och formatera text i kalkylblad. Dessutom kan du också arbeta med funktioner som att hantera kalkylbladsrader, kolumner och celler, tillämpa villkorlig formatering, manipulera datavalideringsregler, namngivna intervall och mycket mer. Aspose.Cells for .NET API stöder ett brett utbud av välkända filformat som XLS, XLT, XLSM, XLSX, XLTX, XLTM, ODS, CSV, TSV och HTML." 
   subtext2="Det finns inget beroende av Microsoft Excel eller någon extern programvara när du använder Aspose.Cells för .NET, vilket gör att användarna kan njuta av en helt oberoende upplevelse av hantering av kalkylblad över flera plattformar. Utvecklare kan bygga smarta Excel-filkonverteringsappar för att felfritt konvertera Excel till PDF, Excel till JPG, Excel till HTML och andra filtyper med hjälp av detta kalkylarksbearbetnings-API för C# .NET."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Komma igång</h2>
   <p>Kontrollera följande information för att korrekt ställa in och använda Aspose.Cells för .NET API. Se även sidan <a href="https://docs.aspose.com/cells/net/system-requirements/">Systemkrav</a> för en lista över förutsättningar för att framgångsrikt konfigurera Excel Documents API för .NET</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper 
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.Cells för .NET-installation"
>}}
<p>För att ställa in Aspose.Cells för .NET på ditt system, ladda ner DLL:erna eller MSI Installer direkt från <a href="https://releases.aspose.com/cells/net/">nedladdningssektionen</a >. Eller så kan du använda <a href="https://www.nuget.org/packages/Aspose.Cells/">NuGet-paketet</a> för installationen av .NET-kalkylarksbearbetnings-API. Pakethanterarens kommando ges nedan.</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp1"
>}}
PM> Install-Package Aspose.Cells
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Hur man konverterar Excel till PDF i .NET och slår samman Excel-arbetsböcker snabbt"
featuretext="Aspose.Cells for .NET API gör det möjligt för .NET-utvecklare att skickligt konvertera Microsoft Excel-arbetsböcker till olika filformat. Att konvertera Excel till PDF är enkelt med .NET Excel API som låter dig konvertera XLS till PDF och XLSX till PDF i dina .NET-filkonverteringsappar. Dessutom kan du slå samman Excel-arbetsböcker och spara det bearbetade dokumentet som en enhetlig fil med hjälp av .NET-kalkylarksbearbetnings-API."
>}}
{{< products/product-feature-blocks-col
featurecolheading="Konvertera Excel till PDF i .NET"
>}}
<p>Uppgradera dina .NET-filkonverteringsappar genom att integrera Excel till PDF-konverteringsfunktionen med Aspose.Cells för .NET-biblioteket. Konvertera XLS- och XLSX-filer enkelt till PDF-format med en minimal mängd kod. Se följande information och exempelkodning för att konvertera Excel till PDF i .NET-plattformen:</p>
<ul>
   <li>Skapa en instans av klassen <a href="https://reference.aspose.com/net/cells/aspose.cells/workbook">Arbetsbok</a> och lägg till Excel-dokumentet du vill konvertera.</li>
   <li>Spara Excel-dokumentet i PDF-format med <a href="https://reference.aspose.com/cells/net/aspose.cells/workbook/save/#save_3">Spara</a>-metoden. Ange PDF-format med <a href="https://reference.aspose.com/net/cells/aspose.cells/saveformat">SaveFormat</a>-uppräkningen.</li>
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
featurecolheading="Slå samman MS Excel-arbetsböcker i .NET"
>}}
<p>Slå samman flera Excel-arbetsböcker och kombinera dem till en enda Excel-fil med hjälp av Aspose.Cells for .NET API. Förbättra dina .NET-dokumentsammanslagningsappar genom att införa fusionsfunktioner för MS Excel-arbetsböcker. Vänligen granska nedanstående kodavsnitt och informationen för att kombinera flera arbetsböcker:</p>
<ul>
   <li>Skapa två instanser av klassen <a href="https://reference.aspose.com/net/cells/aspose.cells/workbook">Arbetsbok</a>, en vardera för de två arbetsböckerna som ska kombineras.</li>
   <li>Slå samman de två arbetsböckerna med metoden <a href="https://reference.aspose.com/cells/net/aspose.cells/workbook/combine/">Kombinera</a></li>
   <li>Spara den kombinerade Excel-arbetsboken med metoden <a href="https://reference.aspose.com/cells/net/aspose.cells/workbook/save#save_2">Spara</a>.</li>
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
   <p class="col-lg-12">För att se fler fungerande exempel på Aspose.Cells för .NET API, besök <a href="https://github.com/aspose-cells/Aspose.Cells-for-.NET/tree/master/Examples"> GitHub exempel</a> sida. Du kan visa, redigera, konvertera, slå samman, dela, kommentera, vattenstämpla, analysera, jämföra, komprimera eller söka i Excel-dokument var som helst med dina mobila enheter. Vänligen kontrollera <a href="https://products.aspose.app/cells/family">Aspose.Cells gratis onlineappar</a> för att manipulera Excel-kalkylark i farten.</p>
{{< products/product-feature-blocks
featureheading="GUI-kontroller och avancerade formelberäkningar i .NET"
featuretext="Skapa snabbt kalkylblad med ett professionellt utseende komplett med pivottabeller och diagram med hjälp av GUI-kontrollerna som erbjuds av Aspose.Cells för .NET API. Hjälp dig själv att skapa interaktiva skrivbords- och webbaserade Excel-kalkylbladsappar utan behov av omfattande kodning. Utöver funktionerna i det grafiska gränssnittet stöder detta .NET-kalkylbladsbehandlingsbibliotek många standardfunktioner och avancerade funktioner, operatörer och ett omfattande formelberäkningssystem som kan hantera komplexa formler."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper 
   faqtitle="FAQ"
>}}
   {{< products/faq-block
   faqquery="1. Hur kan jag konvertera Excel-dokument till .NET?"
   faqanswer="Att konvertera Microsoft Excel-dokument i .NET är snabbt och enkelt med Aspose.Cells för .NET API. Du kan konvertera Microsoft Excel-kalkylblad i .NET till olika filformat med minimal kodning."
>}}
   {{< products/faq-block
   faqquery="2. Hur lång tid tar det att konvertera eller bearbeta Excel-kalkylblad?"
   faqanswer=".NET kalkylarks-API erbjuder blixtsnabba bearbetningshastigheter och utför dokumentkonvertering och bearbetning mycket snabbt."
>}}
   {{< products/faq-block
   faqquery="3. Är det säkert att bearbeta MS Excel-dokument med ett .NET-kalkylarksbearbetnings-API?"
   faqanswer="Självklart! Du kan vara säker på säkerheten för dina dokument medan du bearbetar dem med Aspose.Cells för .NET API. Vi säkerställer integriteten för dina uppgifter och vidtar alla nödvändiga åtgärder för att ge dig en säker användarupplevelse."
>}}
   {{< products/faq-block
   faqquery="4. Kan jag bearbeta Microsoft Excel-dokument på Mac OS, Windows eller Linux?"
   faqanswer="Ja, .NET API fungerar över olika operativsystem, ramverk och operativa miljöer. Du kan använda den på den plattform du väljer. .NET Excel-dokumentbehandlingsbiblioteket kräver ingen ytterligare programvaruinstallation för att fungera."
>}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="Manipulationsverktyg för Excel-kalkylblad"
>}}
   {{< products/popularapp-anchor
anchorlink="Excel till PDF"
moreproducts="https://products.aspose.com/cells/net/conversion/excel-to-pdf/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Excel till JPG"
moreproducts="https://products.aspose.com/cells/net/conversion/excel-to-jpg/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Excel till PNG"
moreproducts="https://products.aspose.com/cells/net/conversion/excel-to-png/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Excel till HTML"
moreproducts="https://products.aspose.com/cells/net/conversion/excel-to-html/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Excel till ODS"
moreproducts="https://products.aspose.com/cells/net/conversion/excel-to-ods/"
>}} 
   {{< products/popularapp-anchor
anchorlink="XLSX till CSV"
moreproducts="https://products.aspose.com/cells/net/conversion/xlsx-to-csv/"
>}} 
   {{< products/popularapp-anchor
anchorlink="XLSX till XPS"
moreproducts="https://products.aspose.com/cells/net/conversion/xlsx-to-xps/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Excel till JSON"
moreproducts="https://products.aspose.com/cells/net/conversion/excel-to-json/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Excel till SVG"
moreproducts="https://products.aspose.com/cells/net/conversion/excel-to-svg/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Excel till TSV"
moreproducts="https://products.aspose.com/cells/net/conversion/excel-to-tsv/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Excel till MD"
moreproducts="https://products.aspose.com/cells/net/conversion/excel-to-md/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Excel till TXT"
moreproducts="https://products.aspose.com/cells/net/conversion/excel-to-txt/"
>}} 
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Letar du efter hjälp?"
bartext="Kolla in våra supportkanaler för hjälp med dina frågor relaterade till Aspose-produktens API-funktioner och arbete."
resourcetxt1="Docs"
resourcelinks1="https://docs.aspose.com/cells/net/"
resourcetxt2="API-referens"
resourcelinks2="https://reference.aspose.com/cells/" 
resourcetxt3="Kunskapsbas"
resourcelinks3="https://kb.aspose.com/cells/net/"
resourcetxt4="Gratis support"
resourcelinks4="https://forum.aspose.com/c/cells/9"
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
resourcelistlink="https://blog.aspose.com/cells/convert-csv-to-json-csharp/"
resourcelistlink2="https://blog.aspose.com/cells/adjust-row-height-column-width-in-excel-csharp/"
resourcelistlink3="https://blog.aspose.com/cells/excel-to-csv-csharp/"
resourcelisttext="Konvertera CSV till JSON i C#"
resourcelisttext2="Justera radhöjd och kolumnbredd i Excel"
resourcelisttext3="Konvertera Excel XLS XLSX till CSV i C#"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://docs.aspose.com/"
resourcetitle="Dokumentation"
resourcealt="Dokumentation"
resourceimg="/img/docs1.svg"
resourcelistlink="https://docs.aspose.com/cells/net/"
resourcelistlink2="https://www.nuget.org/packages/Aspose.Cells/"
resourcelistlink3="https://helpdesk.aspose.com/"
resourcelisttext="Aspose.Cells för .NET Docs"
resourcelisttext2="Installera Aspose.Cells för .NET NuGet Package"
resourcelisttext3="Aspose.Cells för .NET Betald Support Helpdesk"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://kb.aspose.com/"
resourcetitle="Kunskapsbas"
resourcealt="Kodprover"
resourceimg="/images/code1.svg"
resourcelistlink="https://kb.aspose.com/cells/net/how-to-insert-comment-in-excel-using-csharp/"
resourcelistlink2="https://kb.aspose.com/cells/net/how-to-create-pivot-table-in-excel-using-csharp/"
resourcelistlink3="https://kb.aspose.com/cells/net/how-to-rotate-a-cell-in-excel-using-csharp/"
resourcelisttext="Hur man infogar en kommentar i Excel med C#"
resourcelisttext2="Hur man skapar en pivottabell i Excel med C#"
resourcelisttext3="Hur man roterar en cell i Excel med C#"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Redo att börja?"
rtstext="Ladda ner gratis provversion"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="Visa alla API:er"
>}}
