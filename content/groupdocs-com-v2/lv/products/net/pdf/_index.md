---
title: PDF API, kas paredzēts .NET, lai apstrādātu, rediģētu un konvertētu PDF dokumentus
description: Uzlabota .NET PDF bibliotēka PDF dokumentu ģenerēšanai un sapludināšanai. Pārveidojiet PDF uz JPG, PDF par Excel un PDF uz Word programmās C#, ASP.NET un VB.NET.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="PDF API .NET, lai apstrādātu, rediģētu un precīzi konvertētu PDF dokumentus"
  inheadertext="Izbaudiet jaudīgu PDF rediģēšanas funkcionalitāti, konvertēšanu un parsēšanas iespējas, neizmantojot Adobe Acrobat. Atveidojiet PDF dokumentus DOC, DOCX, PPTX, XLS, JPG, PNG, GIF, SVG un citos formātos savās .NET lietotnēs."
  ctabtn="Lejupielādēt bezmaksas izmēģinājuma versiju"
  ctabtn="Lejupielādēt bezmaksas izmēģinājuma versiju"
  ctalink="https://releases.aspose.com/pdf/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Skatīt visas API"
  bchomelink="/"
  bchome="Mājas"
  bcpage="PDF"
  bclink2="Produkti"
  bclink3=".NET"
  bclink2url="/products/"
  bclink3url="/products/net/"
  >}}
{{< homepage/conholdate/com/inner-wrapper/sub-nav 
subnav1="#overview"
subnavtxt1="Pārskats" 
subnav2="#features"
subnavtxt2="Iespējas" 
subnav3="#support"
subnavtxt3="Atbalsts" 
subnav4="#examples"
subnavtxt4="Piemēri" 
subnav5="https://purchase.aspose.com/pricing/pdf/net"
subnavtxt5="Cenu noteikšana" 
subbtn1="https://docs.aspose.com/pdf/net/"
subbtntxt1="Uzziniet"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="Pirkt"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="Paceliet PDF dokumentu apstrādi uz nākamo līmeni C#.NET"
   subtext="Jauniniet savas .NET dokumentu apstrādes lietojumprogrammas, integrējot visaptverošus PDF manipulācijas līdzekļus, izmantojot Aspose.PDF for .NET. Šī vietējā bibliotēka ir aprīkota ar nevainojamām PDF failu apstrādes iespējām, kas ļauj .NET izstrādātājiem ne tikai ģenerēt, apstrādāt, rediģēt un parsēt PDF failus, bet arī precīzi konvertēt PDF dokumentus. Ātri un vienkārši ievietojiet tekstu, anotācijas un attēlus PDF dokumentos, pievienojiet vai noņemiet pielikumus, ūdenszīmes un grāmatzīmes, sadaliet vai apvienojiet PDF lapas un apstrādājiet veidlapas laukus savos PDF failos, izmantojot šo PDF API for .NET."
   subtext2="Piedāvājot nepārspējamu starpplatformu saderību, Aspose.PDF for .NET ir izstrādāts, lai nevainojami darbotos vairākos ietvaros, piemēram, .NET Framework un .NET Core. Turklāt varat izmantot šo .NET PDF API, lai izveidotu PDF pārveidotāju lietojumprogrammas C#, ASP.NET un VB.NET formātā un pārvērstu PDF formātā JPG, PDF uz Excel, PDF uz Word, PDF uz PowerPoint un vairākus citus failu formātus, izmantojot augsta precizitāte."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Darba sākšana</h2>
   <p>Lai pareizi iestatītu un izmantotu Aspose.PDF .NET API, lūdzu, pārbaudiet tālāk sniegto informāciju. Lūdzu, skatiet lapu <a href="https://docs.aspose.com/pdf/net/system-requirements/">Sistēmas prasības</a>, lai skatītu priekšnosacījumu sarakstu, lai veiksmīgi iestatītu PDF API. TĪKLS</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.PDF .NET instalēšanai"
>}}
<p>Lai savā sistēmā iestatītu Aspose.PDF vietnei .NET, varat lejupielādēt DLL vai MSI instalēšanas programmu tieši no <a href="https://releases.aspose.com/pdf/net/">lejupielādes sadaļas</. a>. Varat arī izmantot <a href="https://www.nuget.org/packages/Aspose.PDF/">NuGet pakotni</a> .NET PDF API instalēšanai. Pakešu pārvaldnieka API komanda ir dota zemāk.</p>
{{< products/product-feature-blocks-snip
 snipclass="greysnipp"
 copyID="snipp1"
>}}
PM> Install-Package Aspose.PDF
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Kā konvertēt PDF uz Word programmā .NET un ātri sapludināt PDF failus"
featuretext="Aspose.PDF for .NET atbalsta plašu dokumentu apstrādes funkciju klāstu, tostarp PDF konvertēšanu uz Word un citiem failu formātiem un PDF failu apvienošanu .NET. Izmantojot šo .NET bibliotēku, izbaudiet pilnīgi neatkarīgu PDF dokumentu apstrādi, nepaļaujoties uz trešās puses programmatūru."
>}}
{{< products/product-feature-blocks-col
 featurecolheading="Pārvērst PDF uz Word .NET"
>}}
<p>Jauniniet savas esošās .NET PDF konvertēšanas lietotnes, integrējot PDF konvertēšanas uz Word funkcionalitāti. Aspose.PDF for .NET API ļauj pārvērst PDF par DOC un PDF par DOCX jūsu .NET dokumentu konvertēšanas lietotnēs. Lūdzu, skatiet tālāk sniegtos norādījumus un koda fragmentu, lai palīdzētu pārvērst PDF par Word formātā .NET:</p>
<ul>
   <li>Izveidojiet <a href="https://reference.aspose.com/pdf/net/aspose.pdf/document/">Dokumenta</a> objekta gadījumu ar avota PDF dokumentu.</li>
   <li>Saglabājiet to formātā <strong>SaveFormat.Doc</strong>, izsaucot metodi <strong>Document.Save()</strong>.</li>
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
 featurecolheading="Apvienojiet PDF failus .NET"
>}}
<p>PDF failu sapludināšanu atbalsta Aspose.PDF .NET API. Lūdzu, pārbaudiet tālāk sniegtos norādījumus un koda fragmentu, lai ātri un viegli sapludinātu PDF failus savās C# .NET lietotnēs:</p>
<ul>
   <li>Izveidojiet divus <a href="https://reference.aspose.com/pdf/net/aspose.pdf/document">dokumenta</a> objektus, kuros katrā ir viens no ievades PDF failiem.</li>
   <li>Pēc tam izsauciet <a href="https://reference.aspose.com/pdf/net/aspose.pdf/pagecollection">PageCollection</a> kolekcijas pievienošanas metodi dokumenta objektam, kuram vēlaties pievienot citu PDF failu. .</li>
   <li>Nododiet otrā dokumenta objekta PageCollection kolekciju pirmās PageCollection kolekcijas Pievienošanas metodei.</li>
   <li>Visbeidzot saglabājiet izvadīto PDF failu, izmantojot <a href="https://reference.aspose.com/pdf/net/aspose.pdf.document/save/methods/4">Saglabāšanas</a> metodi.</li>
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
   <p class="col-lg-12">Lai iegūtu vairāk darba piemēru un koda paraugus Aspose.PDF for .NET API, lūdzu, apmeklējiet mūsu <a href="https://github.com/aspose-pdf/Aspose.PDF-for-.NET/tree/master/Examples">GitHub piemēru</a> lapa. Ja vēlaties skatīt, rediģēt, apvienot, sadalīt, komentēt, salīdzināt vai konvertēt PDF dokumentus, lūdzu, skatiet mūsu bezmaksas tiešsaistes <a href="https://products.aspose.app/pdf/family" >PDF apstrādes lietotnes.</a></p>
{{< products/product-feature-blocks
featureheading="Droša PDF failu apstrāde .NET"
featuretext="Aspose.PDF for .NET ir pilnībā droša PDF apstrādes bibliotēka, kas nodrošina tādus drošības līdzekļus kā ciparparaksta atbalsts, paroles aizsardzība un šifrēšana. Tas nodrošina uzticamu piekļuvi, apstrādi un pārsūtīšanu jūsu PDF dokumentiem, vienlaikus novēršot nesankcionētu piekļuvi un modifikācijas. Turklāt, lai izmantotu šo .NET PDF apstrādes API, jums nav jāinstalē programma Adobe Acrobat."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="FAQ"
>}}
   {{< products/faq-block
 faqquery="1. Kā es varu konvertēt PDF .NET?"
 faqanswer="PDF konvertēšana .NET ir vienkārša un vienkārša, izmantojot Aspose.PDF .NET API. Tam nepieciešamas tikai dažas koda rindiņas, un jūs varat konvertēt PDF failus vairākos failu formātos."
>}}
   {{< products/faq-block 
 faqquery="2. Cik ilgs laiks nepieciešams, lai apvienotu vai konvertētu PDF?"
 faqanswer=".NET PDF API darbojas ātri un ātri apstrādā jūsu sapludināšanas vai konvertēšanas pieprasījumus."
>}}
   {{< products/faq-block
 faqquery="3. Vai ir droši apstrādāt PDF, izmantojot .NET PDF API?"
 faqanswer="Protams! Varat būt drošs par savu dokumentu drošību, tos apstrādājot, izmantojot Aspose.PDF for .NET API. Mēs nodrošinām jūsu datu privātumu un veicam visus nepieciešamos pasākumus, lai nodrošinātu jums drošu lietošanas pieredzi."
>}}
   {{< products/faq-block
 faqquery="4. Vai es varu apstrādāt PDF failu operētājsistēmā Mac OS, Windows vai Linux?"
 faqanswer="Jā, .NET PDF manipulācijas API darbojas dažādās operētājsistēmās, ietvaros un darbības vidēs. Varat to izmantot jūsu izvēlētajā platformā. Mūsu .NET PDF bibliotēkas darbībai nav nepieciešama papildu programmatūras instalēšana."
>}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="PDF manipulācijas rīki"
   >}}
   {{< products/popularapp-anchor
 anchorlink="PDF uz WORD"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-word/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF uz DOC"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-doc/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF uz DOCX"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-docx/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF uz EXCEL"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-excel/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF uz XLS"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-xls/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF uz XLSX"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-xlsx/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF uz PPTX"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-pptx/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF uz HTML"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-html/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF uz BMP"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-bmp/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF uz TIFF"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-tiff/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF uz PNG"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-png/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF uz GIF"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-gif/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF uz BMP"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-bmp/"
>}}  
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Vai meklējat palīdzību?"
bartext="Apskatiet mūsu atbalsta kanālus, lai saņemtu palīdzību saistībā ar jautājumiem par Aspose produkta API funkcijām un darbību."
 resourcetxt1="Docs"
 resourcelinks1="https://docs.aspose.com/pdf/net/"
 resourcetxt2="API atsauce"
 resourcelinks2="https://reference.aspose.com/pdf/" 
 resourcetxt3="Zināšanu pamats"
 resourcelinks3="https://kb.aspose.com/pdf/net/"
 resourcetxt4="Bezmaksas atbalsts"
 resourcelinks4="https://forum.aspose.com/c/pdf/10"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-wrapper
 resource-heading="Resursi"
 sectionid="support"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://blog.aspose.com/"
 resourcetitle="Blogi"
 resourcealt="Blogi"
 resourceimg="/images/blog1.svg"
 resourcelistlink="https://blog.aspose.com/pdf/convert-latex-to-pdf-in-python/"
 resourcelistlink2="https://blog.aspose.com/pdf/convert-pdf-to-ppt-in-python/"
 resourcelistlink3="https://blog.aspose.com/pdf/convert-pdf-to-latex-in-python/"
 resourcelisttext="Pārvērtiet LaTeX uz PDF programmā Python"
 resourcelisttext2="Konvertējiet PDF uz PPT programmā Python"
 resourcelisttext3="Konvertējiet PDF uz LaTeX programmā Python"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://docs.aspose.com/"
 resourcetitle="Dokumentācija"
 resourcealt="Dokumentācija"
 resourceimg="/img/docs1.svg"
 resourcelistlink="https://docs.aspose.com/pdf/net/key-features/"
 resourcelistlink2="https://www.nuget.org/packages/Aspose.PDF/"
 resourcelistlink3="https://helpdesk.aspose.com/"
 resourcelisttext="Aspose.PDF .NET funkcijām"
 resourcelisttext2="Instalējiet Aspose.PDF .NET NuGet pakotnei"
 resourcelisttext3="Aspose.PDF .NET apmaksātā atbalsta palīdzības dienestam"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://kb.aspose.com/"
 resourcetitle="Zināšanu pamats"
 resourcealt="Kodu paraugi"
 resourceimg="/images/code1.svg"
 resourcelistlink="https://kb.aspose.com/words/net/how-to-insert-hyperlink-in-word-using-csharp/"
 resourcelistlink2="https://kb.aspose.com/total/python/how-to-install-python-to-run-aspose-pdf-for-python-via-net/"
 resourcelistlink3="https://kb.aspose.com/pdf/net/how-to-add-hyperlink-in-pdf-using-csharp/"
 resourcelisttext="Kā ievietot hipersaiti programmā Word, izmantojot C#"
resourcelisttext2="Kā instalēt Python, lai palaistu Aspose.PDF for Python, izmantojot .NET"
resourcelisttext3="Kā pievienot hipersaiti PDF failam, izmantojot C#"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Vai esat gatavs sākt?"
rtstext="Lejupielādēt bezmaksas izmēģinājuma versiju"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="Skatīt visas API"
>}}
