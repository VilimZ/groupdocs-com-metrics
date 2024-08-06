---
title: PDF API för .NET för att bearbeta, redigera och konvertera PDF-dokument
description: Ett avancerat .NET PDF-bibliotek för att generera och slå samman PDF-dokument. Konvertera PDF till JPG, PDF till Excel och PDF till Word i apparna C#, ASP.NET och VB.NET.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="PDF API för .NET för att bearbeta, redigera och korrekt konvertera PDF-dokument"
  inheadertext="Upplev kraftfulla PDF-redigeringsfunktioner, konvertering och analysfunktioner utan att behöva Adobe Acrobat. Återge PDF-dokument till DOC, DOCX, PPTX, XLS, JPG, PNG, GIF, SVG och andra format i dina .NET-appar."
  ctabtn="Ladda ner gratis provversion"
  ctabtn="Ladda ner gratis provversion"
  ctalink="https://releases.aspose.com/pdf/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Visa alla API:er"
  bchomelink="/"
  bchome="Hem"
  bcpage="PDF"
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
subnav5="https://purchase.aspose.com/pricing/pdf/net"
subnavtxt5="Prissättning" 
subbtn1="https://docs.aspose.com/pdf/net/"
subbtntxt1="Lära sig"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="köpa"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="Ta PDF-dokumentbehandling till nästa nivå i C# .NET"
   subtext="Uppgradera dina .NET-dokumentbehandlingsprogram genom att integrera omfattande PDF-manipuleringsfunktioner med hjälp av Aspose.PDF för .NET. Det här inbyggda biblioteket är laddat med obefläckade PDF-filbearbetningsförmåga som gör det möjligt för .NET-utvecklare att inte bara generera, bearbeta, redigera och analysera PDF-filer utan även konvertera PDF-dokument korrekt. Infoga snabbt och enkelt text, kommentarer och bilder i PDF-dokument, lägg till eller ta bort bilagor, vattenstämplar och bokmärken, dela eller slå samman PDF-sidor och bearbeta formulärfält i dina PDF-filer med detta PDF-API för .NET."
   subtext2="Aspose.PDF för .NET erbjuder makalös plattformsoberoende kompatibilitet och är designad för att fungera sömlöst över flera ramverk som .NET Framework och .NET Core bland andra. Dessutom kan du använda detta .NET PDF API för att bygga PDF-konverteringsapplikationer i C#, ASP.NET och VB.NET och konvertera PDF till JPG, PDF till Excel, PDF till Word, PDF till PowerPoint och flera andra filformat med hifi."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Komma igång</h2>
   <p>För att korrekt ställa in och använda Aspose.PDF för .NET API, kontrollera nedanstående information. Se sidan <a href="https://docs.aspose.com/pdf/net/system-requirements/">Systemkrav</a> för en lista över förutsättningar för att lyckas konfigurera PDF-API:et för . NETTO</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.PDF för .NET-installation"
>}}
<p>För att ställa in Aspose.PDF för .NET på ditt system kan du ladda ner DLL:erna eller MSI Installer direkt från <a href="https://releases.aspose.com/pdf/net/">nedladdningssektionen</a> a>. Alternativt kan du använda <a href="https://www.nuget.org/packages/Aspose.PDF/">NuGet-paketet</a> för installationen av .NET PDF API. Pakethanterarens API-kommando ges nedan.</p>
{{< products/product-feature-blocks-snip
 snipclass="greysnipp"
 copyID="snipp1"
>}}
PM> Install-Package Aspose.PDF
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Hur man konverterar PDF till Word i .NET och slår samman PDF-filer snabbt"
featuretext="Aspose.PDF för .NET stöder ett brett utbud av dokumentbehandlingsfunktioner, inklusive konvertering av PDF till Word och andra filformat och sammanslagning av PDF-filer i .NET. Genom att använda detta .NET-bibliotek kan du uppleva helt oberoende PDF-dokumentbearbetning utan att förlita dig på någon programvara från tredje part."
>}}
{{< products/product-feature-blocks-col
 featurecolheading="Konvertera PDF till Word i .NET"
>}}
<p>Uppgradera dina befintliga .NET PDF-konverteringsappar genom att integrera PDF till Word-konverteringsfunktioner. Aspose.PDF för .NET API låter dig konvertera PDF till DOC och PDF till DOCX i dina .NET dokumentkonverteringsappar. Se följande instruktioner och kodavsnittet för att hjälpa dig själv att konvertera PDF till Word i .NET:</p>
<ul>
   <li>Skapa en instans av <a href="https://reference.aspose.com/pdf/net/aspose.pdf/document/">Dokument</a>-objekt med PDF-källdokumentet.</li>
   <li>Spara det i <strong>SaveFormat.Doc</strong>-format genom att anropa metoden <strong>Document.Save()</strong>.</li>
</ul>
{{< products/product-feature-blocks-snip
 snipclass="greysnipp"
 copyID="snipp2"
>}}
public static void ConvertPDFtoWord()
{
    // Open the source PDF document
    Document pdfDocument = new Document(_dataDir + "PDFToDOC.pdf");
    // Save the file into MS document format
    pdfDocument.Save(_dataDir + "PDFToDOC_out.doc", SaveFormat.Doc);
}
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks-col
 featurecolheading="Slå ihop PDF-filer i .NET"
>}}
<p>Sammanfogning av PDF-filer stöds av Aspose.PDF för .NET API. Kontrollera nedanstående instruktioner och kodavsnitt för att snabbt och enkelt slå samman PDF-filer i dina C# .NET-appar:</p>
<ul>
   <li>Skapa två <a href="https://reference.aspose.com/pdf/net/aspose.pdf/document">dokument</a>-objekt, som vart och ett innehåller en av de ingående PDF-filerna.</li>
   <li>Anropa sedan <a href="https://reference.aspose.com/pdf/net/aspose.pdf/pagecollection">PageCollection</a>-samlingens Add-metod för det dokumentobjekt du vill lägga till den andra PDF-filen till .</li>
   <li>Överför PageCollection-samlingen för det andra dokumentobjektet till den första PageCollection-samlingens Add-metod.</li>
   <li>Slutligen sparar du den utgående PDF-filen med metoden <a href="https://reference.aspose.com/pdf/net/aspose.pdf.document/save/methods/4">Spara</a>.</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp3"
>}}
// The path to the documents directory.
string dataDir = RunExamples.GetDataDir_AsposePdf_Pages();
// Open first document
Document pdfDocument1 = new Document(dataDir + "Concat1.pdf");
// Open second document
Document pdfDocument2 = new Document(dataDir + "Concat2.pdf");
// Add pages of second document to the first
pdfDocument1.Pages.Add(pdfDocument2.Pages);
dataDir = dataDir + "ConcatenatePdfFiles_out.pdf";
// Save concatenated output file
pdfDocument1.Save(dataDir);
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< /products/product-feature-blocks >}}
   <p class="col-lg-12">För fler fungerande exempel och kodexempel av Aspose.PDF för .NET API, besök vår <a href="https://github.com/aspose-pdf/Aspose.PDF-for-.NET/tree/master/Examples">GitHub-exempel</a>-sida. Om du vill visa, redigera, slå samman, dela, kommentera, jämföra eller konvertera PDF-dokument i farten, kolla in vår gratis online <a href="https://products.aspose.app/pdf/family" >PDF-bearbetningsappar.</a></p>
{{< products/product-feature-blocks
featureheading="Säker bearbetning av PDF-filer i .NET"
featuretext="Aspose.PDF för .NET är ett helt säkert PDF-behandlingsbibliotek som tillhandahåller säkerhetsfunktioner som stöd för digitala signaturer, lösenordsskydd och kryptering. Detta säkerställer pålitlig åtkomst, bearbetning och överföring av dina PDF-dokument samtidigt som obehörig åtkomst och modifiering förhindras. Dessutom behöver du inte installera Adobe Acrobat för att använda detta .NET PDF-bearbetnings-API."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="FAQ"
>}}
   {{< products/faq-block
 faqquery="1. Hur kan jag konvertera PDF till .NET?"
 faqanswer="Att konvertera PDF till .NET är enkelt och okomplicerat med Aspose.PDF för .NET API. Det kräver bara några rader kod och du kan konvertera PDF-filer till flera filformat."
>}}
   {{< products/faq-block 
 faqquery="2. Hur lång tid tar det att slå samman eller konvertera PDF?"
 faqanswer=".NET PDF API fungerar snabbt och bearbetar dina sammanslagnings- eller konverteringsförfrågningar på nolltid."
>}}
   {{< products/faq-block
 faqquery="3. Är det säkert att bearbeta PDF med ett .NET PDF API?"
 faqanswer="Självklart! Du kan vara säker på säkerheten för dina dokument medan du bearbetar dem med Aspose.PDF för .NET API. Vi säkerställer integriteten för dina uppgifter och vidtar alla nödvändiga åtgärder för att ge dig en säker användarupplevelse."
>}}
   {{< products/faq-block
 faqquery="4. Kan jag bearbeta PDF på Mac OS, Windows eller Linux?"
 faqanswer="Ja, API:et för manipulering av .NET PDF fungerar över olika operativsystem, ramverk och operativsystem. Du kan använda den på den plattform du väljer. Vårt .NET PDF-bibliotek kräver ingen ytterligare programvaruinstallation för att fungera."
>}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="PDF-manipuleringsverktyg"
   >}}
   {{< products/popularapp-anchor
 anchorlink="Pdf till Word"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-word/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF till DOC"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-doc/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF till DOCX"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-docx/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF till EXCEL"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-excel/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF till XLS"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-xls/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF till XLSX"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-xlsx/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF till PPTX"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-pptx/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF till HTML"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-html/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF till BMP"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-bmp/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF till TIFF"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-tiff/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF till PNG"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-png/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF till GIF"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-gif/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF till BMP"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-bmp/"
>}}  
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Letar du efter hjälp?"
bartext="Kolla in våra supportkanaler för hjälp med dina frågor relaterade till Aspose-produktens API-funktioner och arbete."
 resourcetxt1="Docs"
 resourcelinks1="https://docs.aspose.com/pdf/net/"
 resourcetxt2="API-referens"
 resourcelinks2="https://reference.aspose.com/pdf/" 
 resourcetxt3="Kunskapsbas"
 resourcelinks3="https://kb.aspose.com/pdf/net/"
 resourcetxt4="Gratis support"
 resourcelinks4="https://forum.aspose.com/c/pdf/10"
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
 resourcelistlink="https://blog.aspose.com/pdf/convert-latex-to-pdf-in-python/"
 resourcelistlink2="https://blog.aspose.com/pdf/convert-pdf-to-ppt-in-python/"
 resourcelistlink3="https://blog.aspose.com/pdf/convert-pdf-to-latex-in-python/"
 resourcelisttext="Konvertera LaTeX till PDF i Python"
 resourcelisttext2="Konvertera PDF till PPT i Python"
 resourcelisttext3="Konvertera PDF till LaTeX i Python"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://docs.aspose.com/"
 resourcetitle="Dokumentation"
 resourcealt="Dokumentation"
 resourceimg="/img/docs1.svg"
 resourcelistlink="https://docs.aspose.com/pdf/net/key-features/"
 resourcelistlink2="https://www.nuget.org/packages/Aspose.PDF/"
 resourcelistlink3="https://helpdesk.aspose.com/"
 resourcelisttext="Aspose.PDF för .NET-funktioner"
 resourcelisttext2="Installera Aspose.PDF för .NET NuGet Package"
 resourcelisttext3="Aspose.PDF för .NET Betald Support Helpdesk"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://kb.aspose.com/"
 resourcetitle="Kunskapsbas"
 resourcealt="Kodprover"
 resourceimg="/images/code1.svg"
 resourcelistlink="https://kb.aspose.com/words/net/how-to-insert-hyperlink-in-word-using-csharp/"
 resourcelistlink2="https://kb.aspose.com/total/python/how-to-install-python-to-run-aspose-pdf-for-python-via-net/"
 resourcelistlink3="https://kb.aspose.com/pdf/net/how-to-add-hyperlink-in-pdf-using-csharp/"
 resourcelisttext="Hur man infogar hyperlänk i Word med C#"
resourcelisttext2="Hur man installerar Python för att köra Aspose.PDF för Python via .NET"
resourcelisttext3="Hur man lägger till hyperlänk i PDF med C#"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Redo att komma igång?"
rtstext="Ladda ner gratis provversion"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="Visa alla API:er"
>}}
