---
title: PDF API for .NET for å behandle, redigere og konvertere PDF-dokumenter
description: Et avansert .NET PDF-bibliotek for å generere og slå sammen PDF-dokumenter. Konverter PDF til JPG, PDF til Excel og PDF til Word i C#, ASP.NET og VB.NET apper.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="PDF API for .NET for å behandle, redigere og nøyaktig konvertere PDF-dokumenter"
  inheadertext="Opplev kraftig PDF-redigeringsfunksjonalitet, konvertering og analysefunksjoner uten å trenge Adobe Acrobat. Gjengi PDF-dokumenter til DOC, DOCX, PPTX, XLS, JPG, PNG, GIF, SVG og andre formater i .NET-appene dine."
  ctabtn="Last ned gratis prøveversjon"
  ctabtn="Last ned gratis prøveversjon"
  ctalink="https://releases.aspose.com/pdf/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Se alle APIer"
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
subnavtxt1="Oversikt" 
subnav2="#features"
subnavtxt2="Egenskaper" 
subnav3="#support"
subnavtxt3="Brukerstøtte" 
subnav4="#examples"
subnavtxt4="Eksempler" 
subnav5="https://purchase.aspose.com/pricing/pdf/net"
subnavtxt5="Prissetting" 
subbtn1="https://docs.aspose.com/pdf/net/"
subbtntxt1="Lære"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="Kjøpe"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="Ta PDF-dokumentbehandling til neste nivå i C# .NET"
   subtext="Oppgrader .NET dokumentbehandlingsapplikasjonene dine ved å integrere omfattende PDF-manipuleringsfunksjoner ved hjelp av Aspose.PDF for .NET. Dette opprinnelige biblioteket er lastet med plettfrie PDF-filbehandlingsevner som gjør det mulig for .NET-utviklere ikke bare å generere, behandle, redigere og analysere PDF-er, men også konvertere PDF-dokumenter nøyaktig. Sett raskt og enkelt inn tekst, merknader og bilder til PDF-dokumenter, legg til eller fjern vedlegg, vannmerker og bokmerker, del opp eller slå sammen PDF-sider, og bearbeid skjemafelt i PDF-filene dine ved å bruke denne PDF API for .NET."
   subtext2="Aspose.PDF for .NET tilbyr uovertruffen kompatibilitet på tvers av plattformer, og er designet for å fungere sømløst på tvers av flere rammeverk som blant annet .NET Framework og .NET Core. I tillegg kan du bruke denne .NET PDF API til å bygge PDF-konverteringsapplikasjoner i C#, ASP.NET og VB.NET og konvertere PDF til JPG, PDF til Excel, PDF til Word, PDF til PowerPoint og flere andre filformater med høy troskap."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Starter</h2>
   <p>For å konfigurere og bruke Aspose.PDF for .NET API riktig, vennligst sjekk informasjonen nedenfor. Vennligst se <a href="https://docs.aspose.com/pdf/net/system-requirements/">Systemkrav</a>-siden for en liste over forutsetninger for å konfigurere PDF API for . NETT</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.PDF for .NET-installasjon"
>}}
<p>For å sette opp Aspose.PDF for .NET på systemet ditt, kan du laste ned DLL-ene eller MSI Installer direkte fra <a href="https://releases.aspose.com/pdf/net/">nedlastingsdelen</a> a>. Alternativt kan du bruke <a href="https://www.nuget.org/packages/Aspose.PDF/">NuGet-pakken</a> for installasjonen av .NET PDF API. Pakkebehandlings-API-kommandoen er gitt nedenfor.</p>
{{< products/product-feature-blocks-snip
 snipclass="greysnipp"
 copyID="snipp1"
>}}
PM> Install-Package Aspose.PDF
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Hvordan konvertere PDF til Word i .NET og raskt slå sammen PDF-er"
featuretext="Aspose.PDF for .NET støtter et stort utvalg dokumentbehandlingsfunksjoner, inkludert konvertering av PDF til Word og andre filformater og sammenslåing av PDF-er i .NET. Ved å bruke dette .NET-biblioteket kan du oppleve fullstendig uavhengig PDF-dokumentbehandling uten å stole på tredjepartsprogramvare."
>}}
{{< products/product-feature-blocks-col
 featurecolheading="Konverter PDF til Word i .NET"
>}}
<p>Oppgrader dine eksisterende .NET PDF-konverteringsapper ved å integrere PDF til Word-konverteringsfunksjonalitet. Aspose.PDF for .NET API lar deg konvertere PDF til DOC og PDF til DOCX i .NET dokumentkonverteringsappene dine. Se følgende instruksjoner og kodebiten for å hjelpe deg selv med å konvertere PDF til Word i .NET:</p>
<ul>
   <li>Opprett en forekomst av <a href="https://reference.aspose.com/pdf/net/aspose.pdf/document/">Dokument</a>-objektet med PDF-kildedokumentet.</li>
   <li>Lagre det i <strong>SaveFormat.Doc</strong>-format ved å kalle <strong>Document.Save()</strong>-metoden.</li>
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
 featurecolheading="Slå sammen PDF-filer i .NET"
>}}
<p>Sammenslåing av PDF-filer støttes av Aspose.PDF for .NET API. Vennligst sjekk instruksjonene og kodebiten nedenfor for raskt og enkelt å slå sammen PDF-filer i C# .NET-appene dine:</p>
<ul>
   <li>Lag to <a href="https://reference.aspose.com/pdf/net/aspose.pdf/document">dokument</a>-objekter, som hver inneholder én av PDF-inndatafilene.</li>
   <li>Deretter kaller du <a href="https://reference.aspose.com/pdf/net/aspose.pdf/pagecollection">PageCollection</a>-samlingens Add-metode for dokumentobjektet du vil legge til den andre PDF-filen til .</li>
   <li>Send PageCollection-samlingen til det andre Document-objektet til den første PageCollection-samlingens Add-metode.</li>
   <li>Til slutt lagrer du utdata-PDF-filen ved å bruke <a href="https://reference.aspose.com/pdf/net/aspose.pdf.document/save/methods/4">Lagre</a>-metoden.</li>
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
   <p class="col-lg-12">For flere fungerende eksempler og kodeeksempler av Aspose.PDF for .NET API, besøk vår <a href="https://github.com/aspose-pdf/Aspose.PDF-for-.NET/tree/master/Examples">GitHub-eksempler</a>-siden. Hvis du ønsker å se, redigere, slå sammen, dele, kommentere, sammenligne eller konvertere PDF-dokumenter umiddelbart, kan du sjekke ut vår gratis online <a href="https://products.aspose.app/pdf/family" >PDF-behandlingsapper.</a></p>
{{< products/product-feature-blocks
featureheading="Sikker PDF-filbehandling i .NET"
featuretext="Aspose.PDF for .NET er et fullstendig sikkert PDF-behandlingsbibliotek som tilbyr sikkerhetsfunksjoner som støtte for digital signatur, passordbeskyttelse og kryptering. Dette sikrer pålitelig tilgang, behandling og overføring av PDF-dokumentene dine, samtidig som uautorisert tilgang og endring forhindres. Dessuten trenger du ikke å installere Adobe Acrobat for å bruke denne .NET PDF-behandlings-API."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="FAQ"
>}}
   {{< products/faq-block
 faqquery="1. Hvordan kan jeg konvertere PDF til .NET?"
 faqanswer="Konvertering av PDF i .NET er enkelt og greit ved å bruke Aspose.PDF for .NET API. Det krever bare noen få linjer med kode, og du kan konvertere PDF-filer til flere filformater."
>}}
   {{< products/faq-block 
 faqquery="2. Hvor lang tid tar det å slå sammen eller konvertere PDF?"
 faqanswer=".NET PDF API fungerer raskt og behandler forespørslene om sammenslåing eller konvertering av dokumenter på kort tid."
>}}
   {{< products/faq-block
 faqquery="3. Er det trygt å behandle PDF ved hjelp av en .NET PDF API?"
 faqanswer="Selvfølgelig! Du kan være trygg på sikkerheten til dokumentene dine mens du behandler dem ved hjelp av Aspose.PDF for .NET API. Vi sikrer personvernet til dataene dine og tar alle nødvendige tiltak for å gi deg en sikker brukeropplevelse."
>}}
   {{< products/faq-block
 faqquery="4. Kan jeg behandle PDF på Mac OS, Windows eller Linux?"
 faqanswer="Ja, .NET PDF-manipulasjons-API fungerer på tvers av forskjellige operativsystemer, rammeverk og driftsmiljøer. Du kan bruke den på plattformen du ønsker. Vårt .NET PDF-bibliotek krever ingen ekstra programvareinstallasjon for å fungere."
>}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="PDF-manipulasjonsverktøy"
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
bartitle="Leter du etter hjelp?"
bartext="Ta en titt på støttekanalene våre for å få hjelp med spørsmål knyttet til Aspose-produktets API-funksjoner og arbeid."
 resourcetxt1="Docs"
 resourcelinks1="https://docs.aspose.com/pdf/net/"
 resourcetxt2="API-referanse"
 resourcelinks2="https://reference.aspose.com/pdf/" 
 resourcetxt3="Kunnskapsbase"
 resourcelinks3="https://kb.aspose.com/pdf/net/"
 resourcetxt4="Gratis støtte"
 resourcelinks4="https://forum.aspose.com/c/pdf/10"
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
 resourcelistlink="https://blog.aspose.com/pdf/convert-latex-to-pdf-in-python/"
 resourcelistlink2="https://blog.aspose.com/pdf/convert-pdf-to-ppt-in-python/"
 resourcelistlink3="https://blog.aspose.com/pdf/convert-pdf-to-latex-in-python/"
 resourcelisttext="Konverter LaTeX til PDF i Python"
 resourcelisttext2="Konverter PDF til PPT i Python"
 resourcelisttext3="Konverter PDF til LaTeX i Python"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://docs.aspose.com/"
 resourcetitle="Dokumentasjon"
 resourcealt="Dokumentasjon"
 resourceimg="/img/docs1.svg"
 resourcelistlink="https://docs.aspose.com/pdf/net/key-features/"
 resourcelistlink2="https://www.nuget.org/packages/Aspose.PDF/"
 resourcelistlink3="https://helpdesk.aspose.com/"
 resourcelisttext="Aspose.PDF for .NET-funksjoner"
 resourcelisttext2="Installer Aspose.PDF for .NET NuGet Package"
 resourcelisttext3="Aspose.PDF for .NET Paid Support Helpdesk"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://kb.aspose.com/"
 resourcetitle="Kunnskapsbase"
 resourcealt="Kodeeksempler"
 resourceimg="/images/code1.svg"
 resourcelistlink="https://kb.aspose.com/words/net/how-to-insert-hyperlink-in-word-using-csharp/"
 resourcelistlink2="https://kb.aspose.com/total/python/how-to-install-python-to-run-aspose-pdf-for-python-via-net/"
 resourcelistlink3="https://kb.aspose.com/pdf/net/how-to-add-hyperlink-in-pdf-using-csharp/"
 resourcelisttext="Hvordan sette inn hyperkobling i Word ved hjelp av C#"
resourcelisttext2="Hvordan installere Python for å kjøre Aspose.PDF for Python via .NET"
resourcelisttext3="Hvordan legge til hyperkobling i PDF ved hjelp av C#"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Klar til å komme i gang?"
rtstext="Last ned gratis prøveversjon"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="Se alle APIer"
>}}
