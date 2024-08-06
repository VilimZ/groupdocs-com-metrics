---
title: PDF API voor .NET om PDF-documenten te verwerken, bewerken en converteren
description: Een geavanceerde .NET PDF-bibliotheek om PDF-documenten te genereren en samen te voegen. Converteer PDF naar JPG, PDF naar Excel en PDF naar Word in C#-, ASP.NET- en VB.NET-apps.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="PDF API voor .NET om PDF-documenten te verwerken, bewerken en nauwkeurig te converteren"
  inheadertext="Ervaar krachtige PDF-bewerkingsfunctionaliteit, conversie en parseermogelijkheden zonder Adobe Acrobat. Render PDF-documenten naar DOC, DOCX, PPTX, XLS, JPG, PNG, GIF, SVG en andere indelingen in uw .NET-apps."
  ctabtn="Download gratis proefversie"
  ctabtn="Download gratis proefversie"
  ctalink="https://releases.aspose.com/pdf/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Bekijk alle API's"
  bchomelink="/"
  bchome="Thuis"
  bcpage="Pdf"
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
subnav5="https://purchase.aspose.com/pricing/pdf/net"
subnavtxt5="prijzen" 
subbtn1="https://docs.aspose.com/pdf/net/"
subbtntxt1="Leren"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="Kopen"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="Til de verwerking van PDF-documenten naar een hoger niveau in C# .NET"
   subtext="Upgrade uw .NET-documentverwerkingstoepassingen door uitgebreide PDF-manipulatiefuncties te integreren met behulp van Aspose.PDF voor .NET. Deze native bibliotheek zit boordevol onberispelijke mogelijkheden voor het verwerken van PDF-bestanden, waardoor .NET-ontwikkelaars niet alleen PDF's kunnen genereren, verwerken, bewerken en parseren, maar ook nauwkeurig PDF-documenten kunnen converteren. Voeg snel en eenvoudig tekst, annotaties en afbeeldingen toe aan PDF-documenten, voeg bijlagen, watermerken en bladwijzers toe of verwijder ze, splits of voeg PDF-pagina's samen en verwerk formuliervelden in uw PDF-bestanden met behulp van deze PDF API voor .NET."
   subtext2="Aspose.PDF voor .NET biedt ongeëvenaarde platformonafhankelijke compatibiliteit en is ontworpen om naadloos te functioneren in meerdere frameworks, zoals onder andere .NET Framework en .NET Core. Bovendien kunt u deze .NET PDF API gebruiken om PDF-conversietoepassingen in C#, ASP.NET en VB.NET te bouwen en PDF naar JPG, PDF naar Excel, PDF naar Word, PDF naar PowerPoint en verschillende andere bestandsindelingen te converteren met zeer betrouwbaar."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Aan de slag</h2>
   <p>Raadpleeg de onderstaande informatie om Aspose.PDF voor .NET API correct in te stellen en te gebruiken. Raadpleeg de pagina <a href="https://docs.aspose.com/pdf/net/system-requirements/">Systeemvereisten</a> voor een lijst met vereisten om de PDF API voor succesvol in te stellen. NETTO</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.PDF voor .NET-installatie"
>}}
<p>Om Aspose.PDF voor .NET op uw systeem in te stellen, kunt u de DLL's of het MSI-installatieprogramma rechtstreeks downloaden van de <a href="https://releases.aspose.com/pdf/net/">downloadsectie</ een>. U kunt ook gebruikmaken van het <a href="https://www.nuget.org/packages/Aspose.PDF/">NuGet-pakket</a> voor de installatie van de .NET PDF API. De API-opdracht van de pakketbeheerder wordt hieronder gegeven.</p>
{{< products/product-feature-blocks-snip
 snipclass="greysnipp"
 copyID="snipp1"
>}}
PM> Install-Package Aspose.PDF
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="PDF converteren naar Word in .NET en snel PDF's samenvoegen"
featuretext="Aspose.PDF voor .NET ondersteunt een breed scala aan documentverwerkingsfuncties, waaronder het converteren van PDF naar Word en andere bestandsindelingen en het samenvoegen van PDF's in .NET. Met deze .NET-bibliotheek ervaart u volledig onafhankelijke verwerking van PDF-documenten zonder afhankelijk te zijn van software van derden."
>}}
{{< products/product-feature-blocks-col
 featurecolheading="Converteer PDF naar Word in .NET"
>}}
<p>Upgrade uw bestaande .NET PDF-conversie-apps door PDF naar Word-conversiefunctionaliteit te integreren. Met Aspose.PDF voor .NET API kunt u PDF naar DOC en PDF naar DOCX converteren binnen uw .NET-documentconversie-apps. Raadpleeg de volgende instructies en het codefragment om uzelf te helpen bij het converteren van PDF naar Word in .NET:</p>
<ul>
   <li>Maak een instantie van het <a href="https://reference.aspose.com/pdf/net/aspose.pdf/document/">Document</a>-object met het PDF-brondocument.</li>
   <li>Sla het op in de indeling <strong>SaveFormat.Doc</strong> door de methode <strong>Document.Save()</strong> aan te roepen.</li>
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
 featurecolheading="PDF-bestanden samenvoegen in .NET"
>}}
<p>Het samenvoegen van PDF-bestanden wordt ondersteund door Aspose.PDF voor .NET API. Bekijk de onderstaande instructies en het codefragment om snel en eenvoudig PDF-bestanden samen te voegen in uw C# .NET-apps:</p>
<ul>
   <li>Maak twee <a href="https://reference.aspose.com/pdf/net/aspose.pdf/document">Document</a>-objecten, die elk een van de ingevoerde PDF-bestanden bevatten.</li>
   <li>Roep vervolgens de methode Toevoegen van de <a href="https://reference.aspose.com/pdf/net/aspose.pdf/pagecollection">PageCollection</a>-collectie aan voor het documentobject waaraan u het andere PDF-bestand wilt toevoegen .</li>
   <li>Geef de PageCollection-collectie van het tweede Document-object door aan de Add-methode van de eerste PageCollection-collectie.</li>
   <li>Sla ten slotte het PDF-uitvoerbestand op met behulp van de methode <a href="https://reference.aspose.com/pdf/net/aspose.pdf.document/save/methods/4">Opslaan</a>.</li>
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
   <p class="col-lg-12">Ga voor meer werkvoorbeelden en codevoorbeelden van Aspose.PDF voor .NET API naar onze <a href="https://github.com/aspose-pdf/Aspose.PDF-for-.NET/tree/master/Examples">GitHub voorbeelden</a> pagina. Als u PDF-documenten direct wilt bekijken, bewerken, samenvoegen, splitsen, annoteren, vergelijken of converteren, bekijk dan onze gratis online <a href="https://products.aspose.app/pdf/family" >PDF-verwerkingsapps.</a></p>
{{< products/product-feature-blocks
featureheading="Veilige PDF-bestandsverwerking in .NET"
featuretext="Aspose.PDF voor .NET is een volledig beveiligde PDF-verwerkingsbibliotheek die beveiligingsfuncties biedt zoals ondersteuning voor digitale handtekeningen, wachtwoordbeveiliging en codering. Dit zorgt voor betrouwbare toegang, verwerking en verzending van uw PDF-documenten en voorkomt ongeoorloofde toegang en wijziging. Bovendien hoeft u Adobe Acrobat niet te installeren om deze .NET PDF-verwerkings-API te gebruiken."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="FAQ"
>}}
   {{< products/faq-block
 faqquery="1. Hoe kan ik PDF converteren naar .NET?"
 faqanswer="Het converteren van PDF naar .NET is eenvoudig en ongecompliceerd met Aspose.PDF voor .NET API. Het vereist slechts een paar regels code en u kunt PDF-bestanden naar meerdere bestandsindelingen converteren."
>}}
   {{< products/faq-block 
 faqquery="2. Hoe lang duurt het om PDF samen te voegen of te converteren?"
 faqanswer="De .NET PDF API werkt snel en verwerkt uw documentverzoeken voor samenvoegen of converteren in een mum van tijd."
>}}
   {{< products/faq-block
 faqquery="3. Is het veilig om PDF te verwerken met behulp van de .NET PDF API?"
 faqanswer="Natuurlijk! U kunt gerust zijn over de veiligheid van uw documenten terwijl u ze verwerkt met Aspose.PDF voor .NET API. We waarborgen de privacy van uw gegevens en nemen alle vereiste maatregelen om u een veilige gebruikerservaring te bieden."
>}}
   {{< products/faq-block
 faqquery="4. Kan ik PDF verwerken op Mac OS, Windows of Linux?"
 faqanswer="Ja, de .NET PDF-manipulatie-API werkt in verschillende besturingssystemen, frameworks en besturingsomgevingen. U kunt het gebruiken op het platform van uw keuze. Onze .NET PDF-bibliotheek vereist geen extra software-installatie om te functioneren."
>}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="Tools voor PDF-manipulatie"
   >}}
   {{< products/popularapp-anchor
 anchorlink="PDF naar Word"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-word/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF naar DOC"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-doc/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF naar DOCX"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-docx/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF naar EXCEL"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-excel/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF naar XLS"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-xls/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF naar XLSX"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-xlsx/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF naar PPTX"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-pptx/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF naar HTML"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-html/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF naar BMP"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-bmp/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF naar TIFF"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-tiff/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF naar PNG"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-png/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF naar GIF"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-gif/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF naar BMP"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-bmp/"
>}}  
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Op zoek naar hulp?"
bartext="Bekijk onze ondersteuningskanalen voor hulp bij uw vragen met betrekking tot Aspose-product-API-functies en -werking."
 resourcetxt1="Docs"
 resourcelinks1="https://docs.aspose.com/pdf/net/"
 resourcetxt2="API-referentie"
 resourcelinks2="https://reference.aspose.com/pdf/" 
 resourcetxt3="Kennis basis"
 resourcelinks3="https://kb.aspose.com/pdf/net/"
 resourcetxt4="Gratis ondersteuning"
 resourcelinks4="https://forum.aspose.com/c/pdf/10"
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
 resourcelistlink="https://blog.aspose.com/pdf/convert-latex-to-pdf-in-python/"
 resourcelistlink2="https://blog.aspose.com/pdf/convert-pdf-to-ppt-in-python/"
 resourcelistlink3="https://blog.aspose.com/pdf/convert-pdf-to-latex-in-python/"
 resourcelisttext="Converteer LaTeX naar PDF in Python"
 resourcelisttext2="Converteer PDF naar PPT in Python"
 resourcelisttext3="Converteer PDF naar LaTeX in Python"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://docs.aspose.com/"
 resourcetitle="Documentatie"
 resourcealt="Documentatie"
 resourceimg="/img/docs1.svg"
 resourcelistlink="https://docs.aspose.com/pdf/net/key-features/"
 resourcelistlink2="https://www.nuget.org/packages/Aspose.PDF/"
 resourcelistlink3="https://helpdesk.aspose.com/"
 resourcelisttext="Aspose.PDF voor .NET-functies"
 resourcelisttext2="Installeer Aspose.PDF voor .NET NuGet-pakket"
 resourcelisttext3="Aspose.PDF voor .NET betaalde ondersteuningshelpdesk"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://kb.aspose.com/"
 resourcetitle="Kennis basis"
 resourcealt="Codevoorbeelden"
 resourceimg="/images/code1.svg"
 resourcelistlink="https://kb.aspose.com/words/net/how-to-insert-hyperlink-in-word-using-csharp/"
 resourcelistlink2="https://kb.aspose.com/total/python/how-to-install-python-to-run-aspose-pdf-for-python-via-net/"
 resourcelistlink3="https://kb.aspose.com/pdf/net/how-to-add-hyperlink-in-pdf-using-csharp/"
 resourcelisttext="Hyperlink in Word invoegen met C#"
resourcelisttext2="Python installeren om Aspose.PDF voor Python uit te voeren via .NET"
resourcelisttext3="Hyperlink in PDF toevoegen met C#"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="klaar om te beginnen?"
rtstext="Download gratis proefversie"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="Bekijk alle API's"
>}}
