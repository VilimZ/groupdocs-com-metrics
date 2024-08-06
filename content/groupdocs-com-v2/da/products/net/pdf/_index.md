---
title: PDF API til .NET til at behandle, redigere og konvertere PDF-dokumenter
description: Et avanceret .NET PDF-bibliotek til at generere og flette PDF-dokumenter. Konverter PDF til JPG, PDF til Excel og PDF til Word i C#, ASP.NET & VB.NET apps.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="PDF API til .NET til at behandle, redigere og nøjagtigt konvertere PDF-dokumenter"
  inheadertext="Oplev kraftfulde PDF-redigeringsfunktioner, konvertering og parsing-funktioner uden at skulle bruge Adobe Acrobat. Gengiv PDF-dokumenter til DOC, DOCX, PPTX, XLS, JPG, PNG, GIF, SVG og andre formater i dine .NET-apps."
  ctabtn="Download gratis prøveversion"
  ctabtn="Download gratis prøveversion"
  ctalink="https://releases.aspose.com/pdf/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Se alle API'er"
  bchomelink="/"
  bchome="Hjem"
  bcpage="PDF"
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
subnav5="https://purchase.aspose.com/pricing/pdf/net"
subnavtxt5="Prissætning" 
subbtn1="https://docs.aspose.com/pdf/net/"
subbtntxt1="Lære"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="Købe"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="Tag PDF-dokumentbehandling til det næste niveau i C# .NET"
   subtext="Opgrader dine .NET-dokumentbehandlingsapplikationer ved at integrere omfattende PDF-manipulationsfunktioner ved hjælp af Aspose.PDF til .NET. Dette oprindelige bibliotek er fyldt med ulastelige PDF-filbehandlingsevner, der gør det muligt for .NET-udviklere ikke kun at generere, behandle, redigere og parse PDF-filer, men også nøjagtigt konvertere PDF-dokumenter. Indsæt hurtigt og nemt tekst, anmærkninger og billeder til PDF-dokumenter, tilføj eller fjern vedhæftede filer, vandmærker og bogmærker, opdel eller flet PDF-sider, og bearbejd formularfelter i dine PDF-filer ved hjælp af denne PDF API til .NET."
   subtext2="Aspose.PDF til .NET tilbyder uforlignelig kompatibilitet på tværs af platforme og er designet til at fungere problemfrit på tværs af flere frameworks, såsom .NET Framework og .NET Core blandt andre. Derudover kan du bruge denne .NET PDF API til at bygge PDF-konverteringsprogrammer i C#, ASP.NET og VB.NET og konvertere PDF til JPG, PDF til Excel, PDF til Word, PDF til PowerPoint og flere andre filformater med høj troskab."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Kom godt i gang</h2>
   <p>For at konfigurere og bruge Aspose.PDF til .NET API korrekt, skal du tjekke nedenstående oplysninger. Se venligst siden <a href="https://docs.aspose.com/pdf/net/system-requirements/">Systemkrav</a> for at få en liste over forudsætninger for vellykket opsætning af PDF API for . NET</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.PDF til .NET-installation"
>}}
<p>For at konfigurere Aspose.PDF til .NET på dit system kan du downloade DLL'erne eller MSI Installer direkte fra <a href="https://releases.aspose.com/pdf/net/">downloadsektionen</a> a>. Alternativt kan du gøre brug af <a href="https://www.nuget.org/packages/Aspose.PDF/">NuGet-pakken</a> til installationen af .NET PDF API. Pakkemanager API-kommandoen er givet nedenfor.</p>
{{< products/product-feature-blocks-snip
 snipclass="greysnipp"
 copyID="snipp1"
>}}
PM> Install-Package Aspose.PDF
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Sådan konverteres PDF til Word i .NET og flette PDF'er hurtigt"
featuretext="Aspose.PDF til .NET understøtter en bred vifte af dokumentbehandlingsfunktioner, herunder konvertering af PDF til Word og andre filformater og sammenlægning af PDF-filer i .NET. Ved at bruge dette .NET-bibliotek kan du opleve fuldstændig uafhængig PDF-dokumentbehandling uden at være afhængig af tredjepartssoftware."
>}}
{{< products/product-feature-blocks-col
 featurecolheading="Konverter PDF til Word i .NET"
>}}
<p>Opgrader dine eksisterende .NET PDF-konverteringsapps ved at integrere PDF til Word-konverteringsfunktionalitet. Aspose.PDF til .NET API lader dig konvertere PDF til DOC og PDF til DOCX i dine .NET dokumentkonverteringsapps. Se venligst følgende instruktioner og kodestykket for at hjælpe dig selv med at konvertere PDF til Word i .NET:</p>
<ul>
   <li>Opret en forekomst af <a href="https://reference.aspose.com/pdf/net/aspose.pdf/document/">Dokument</a>-objekt med PDF-kildedokumentet.</li>
   <li>Gem det i <strong>SaveFormat.Doc</strong>-format ved at kalde metoden <strong>Document.Save()</strong>.</li>
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
 featurecolheading="Flet PDF-filer i .NET"
>}}
<p>Sammenlægning af PDF-filer understøttes af Aspose.PDF for .NET API. Tjek venligst nedenstående instruktioner og kodestykket for hurtigt og nemt at flette PDF-filer i dine C# .NET apps:</p>
<ul>
   <li>Opret to <a href="https://reference.aspose.com/pdf/net/aspose.pdf/document">Dokument</a>-objekter, der hver indeholder en af input-PDF-filerne.</li>
   <li>Kald derefter <a href="https://reference.aspose.com/pdf/net/aspose.pdf/pagecollection">PageCollection</a>-samlingens Tilføj metode for det dokumentobjekt, du vil tilføje den anden PDF-fil til .</li>
   <li>Overfør PageCollection-samlingen for det andet Document-objekt til den første PageCollection-samlings Tilføj-metode.</li>
   <li>Gem til sidst output-PDF-filen ved hjælp af <a href="https://reference.aspose.com/pdf/net/aspose.pdf.document/save/methods/4">Gem</a>-metoden.</li>
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
   <p class="col-lg-12">For flere arbejdseksempler og kodeeksempler af Aspose.PDF til .NET API, besøg venligst vores <a href="https://github.com/aspose-pdf/Aspose.PDF-for-.NET/tree/master/Examples">GitHub-eksempler</a>-side. Hvis du ønsker at se, redigere, flette, opdele, kommentere, sammenligne eller konvertere PDF-dokumenter med det samme, kan du tjekke vores gratis online <a href="https://products.aspose.app/pdf/family" >PDF-behandlingsapps.</a></p>
{{< products/product-feature-blocks
featureheading="Sikker PDF-filbehandling i .NET"
featuretext="Aspose.PDF til .NET er et fuldt sikkert PDF-behandlingsbibliotek, der giver sikkerhedsfunktioner såsom understøttelse af digital signatur, adgangskodebeskyttelse og kryptering. Dette sikrer pålidelig adgang, behandling og transmission af dine PDF-dokumenter og forhindrer samtidig uautoriseret adgang og ændring. Desuden behøver du ikke installere Adobe Acrobat for at bruge denne .NET PDF-behandlings-API."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="FAQ"
>}}
   {{< products/faq-block
 faqquery="1. Hvordan kan jeg konvertere PDF til .NET?"
 faqanswer="Konvertering af PDF til .NET er let og ligetil ved at bruge Aspose.PDF til .NET API. Det kræver kun et par linjer kode, og du kan konvertere PDF-filer til flere filformater."
>}}
   {{< products/faq-block 
 faqquery="2. Hvor lang tid tager det at flette eller konvertere PDF?"
 faqanswer=".NET PDF API arbejder hurtigt og behandler dine anmodninger om fletning eller konvertering af dokumenter på ingen tid."
>}}
   {{< products/faq-block
 faqquery="3. Er det sikkert at behandle PDF ved hjælp af en .NET PDF API?"
 faqanswer="Selvfølgelig! Du kan være sikker på sikkerheden af dine dokumenter, mens du behandler dem ved hjælp af Aspose.PDF til .NET API. Vi sikrer privatlivets fred for dine data og træffer alle nødvendige foranstaltninger for at give dig en sikker brugeroplevelse."
>}}
   {{< products/faq-block
 faqquery="4. Kan jeg behandle PDF på Mac OS, Windows eller Linux?"
 faqanswer="Ja, .NET PDF-manipulations-API'en fungerer på tværs af forskellige operativsystemer, rammer og driftsmiljøer. Du kan bruge det på den platform, du vælger. Vores .NET PDF-bibliotek kræver ingen yderligere softwareinstallation for at fungere."
>}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="PDF-manipulationsværktøjer"
   >}}
   {{< products/popularapp-anchor
 anchorlink="PDF til WORD"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-word/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF til DOC"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-doc/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF til DOCX"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-docx/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF til EXCEL"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-excel/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF til XLS"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-xls/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF til XLSX"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-xlsx/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF til PPTX"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-pptx/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF til HTML"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-html/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF til BMP"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-bmp/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF til TIFF"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-tiff/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF til PNG"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-png/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF til GIF"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-gif/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF til BMP"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-bmp/"
>}}  
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Leder du efter hjælp?"
bartext="Tjek vores supportkanaler for at få hjælp til dine spørgsmål relateret til Aspose-produkt API-funktioner og arbejde."
 resourcetxt1="Docs"
 resourcelinks1="https://docs.aspose.com/pdf/net/"
 resourcetxt2="API-reference"
 resourcelinks2="https://reference.aspose.com/pdf/" 
 resourcetxt3="Vidensbase"
 resourcelinks3="https://kb.aspose.com/pdf/net/"
 resourcetxt4="Gratis support"
 resourcelinks4="https://forum.aspose.com/c/pdf/10"
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
 resourcelistlink="https://blog.aspose.com/pdf/convert-latex-to-pdf-in-python/"
 resourcelistlink2="https://blog.aspose.com/pdf/convert-pdf-to-ppt-in-python/"
 resourcelistlink3="https://blog.aspose.com/pdf/convert-pdf-to-latex-in-python/"
 resourcelisttext="Konverter LaTeX til PDF i Python"
 resourcelisttext2="Konverter PDF til PPT i Python"
 resourcelisttext3="Konverter PDF til LaTeX i Python"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://docs.aspose.com/"
 resourcetitle="Dokumentation"
 resourcealt="Dokumentation"
 resourceimg="/img/docs1.svg"
 resourcelistlink="https://docs.aspose.com/pdf/net/key-features/"
 resourcelistlink2="https://www.nuget.org/packages/Aspose.PDF/"
 resourcelistlink3="https://helpdesk.aspose.com/"
 resourcelisttext="Aspose.PDF til .NET-funktioner"
 resourcelisttext2="Installer Aspose.PDF til .NET NuGet Package"
 resourcelisttext3="Aspose.PDF til .NET Paid Support Helpdesk"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://kb.aspose.com/"
 resourcetitle="Vidensbase"
 resourcealt="Kodeprøver"
 resourceimg="/images/code1.svg"
 resourcelistlink="https://kb.aspose.com/words/net/how-to-insert-hyperlink-in-word-using-csharp/"
 resourcelistlink2="https://kb.aspose.com/total/python/how-to-install-python-to-run-aspose-pdf-for-python-via-net/"
 resourcelistlink3="https://kb.aspose.com/pdf/net/how-to-add-hyperlink-in-pdf-using-csharp/"
 resourcelisttext="Sådan indsætter du hyperlink i Word ved hjælp af C#"
resourcelisttext2="Sådan installeres Python for at køre Aspose.PDF for Python via .NET"
resourcelisttext3="Sådan tilføjes hyperlink i PDF ved hjælp af C#"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Klar til at komme i gang?"
rtstext="Download gratis prøveversion"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="Se alle API'er"
>}}
