---
title: Kraftig OCR API for .NET for å utføre presis tekstgjenkjenning
description: Bruk Aspose Optical Character Recognition (OCR) API for .NET for nøyaktig å gjenkjenne og trekke ut tekst fra bilder, konvertere bilder og PDF-er til tekst og mer.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="Kraftig .NET OCR API for å utføre tekstgjenkjenning"
  inheadertext="Integrer avanserte OCR-funksjoner i appene dine med Aspose Optical Character Recognition API for .NET. Gjenkjenne og trekk ut tekst sømløst fra PNG-, JPG-, GIF- og BMP-bilder, skannede bilder og PDF-er, eller konverter bilder eller PDF-er til tekst."
  ctabtn="Last ned gratis prøveversjon"
  ctabtn="Last ned gratis prøveversjon"
  ctalink="https://releases.aspose.com/ocr/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Se alle APIer"
  bchomelink="/"
  bchome="Hjem"
  bcpage="OCR"
  bclink2="Produkter"
  bclink3=".NET"
  bclink2url="/products/"
  bclink3url="/products/net/"
  >}}
{{< homepage/conholdate/com/inner-wrapper/sub-nav 
subnav1="#overview" subnavtxt1="Oversikt" 
subnav2="#features" subnavtxt2="Egenskaper" 
subnav3="#support" subnavtxt3="Brukerstøtte" 
subnav4="#examples" subnavtxt4="Eksempler" 
subnav5="https://purchase.aspose.com/pricing/ocr/net"
subnavtxt5="Prissetting" 
subbtn1="https://docs.aspose.com/ocr/net/"
subbtntxt1="Lære"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="Kjøpe"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle=".NET OCR-motor med overlegen hastighet og nøyaktighet"
   subtext="Aspose.OCR for .NET er en avansert, effektiv og nøyaktig optisk tegngjenkjennings-API for enkel gjenkjenning av tekst i bilder og PDF-er. Den bidrar til å utvikle OCR-funksjonalitet for .NET-applikasjoner og tilbyr forbedret prosesseringshastighet, nøyaktighet og et omfattende funksjonssett. Den kraftige .NET OCR-motoren lar deg utføre presis tekstgjenkjenning og utvinning fra PDF-filer og JPEG-, GIF-, PNG-, TIFF- og BMP-bilder. Du kan bygge automatiserte løsninger for konvertering av bilder og PDF-dokumenter til tekst-, Word-, Excel-, XML- og JSON-formater ved hjelp av OCR API for .NET."
   subtext2="Utviklere kan glede seg over en tekstutvinningsopplevelse på tvers av plattformer ved å bruke Aspose.OCR for .NET API, siden den kan utføre identisk på tvers av Windows, Mac OS og Linux-baserte miljøer. API-en støtter 27 forskjellige språk i latinske og kyrilliske skrifter og tusenvis av kinesiske tegn og gjør det mulig å oppdage og gjenkjenne kjente skrifttyper. I tillegg kan du gjenkjenne tekst fra de skannede bildene dine med den innebygde muligheten til å behandle støyende, skjeve eller roterte bilder. Aspose.OCR for .NET-biblioteket er en komplett løsning for bildeanalyse og tekstutvinning som kan utvide eksisterende apper eller hjelpe deg med å lage profesjonelle OCR-løsninger fra bunnen av."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Starter</h2>
   <p>For å konfigurere og bruke .NET OCR API på riktig måte, sjekk detaljene nedenfor. Det anbefales å se listen over forutsetninger på <a href="https://docs.aspose.com/ocr/net/system-requirements/">Systemkrav</a>-siden for problemfri installasjon av API for optisk tegngjenkjenning for .NET.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.OCR for .NET-installasjon"
>}}
<p>Du kan installere OCR-biblioteket for C# .NET ved å laste ned MSI-installasjonsprogrammet eller DLL-ene fra <a href="https://releases.aspose.com/ocr/net/">nedlastingsdelen</a>. Eller du kan bruke <a href="https://www.nuget.org/packages/Aspose.OCR/">NuGet-pakken</a> for å konfigurere den. Kommandoen for Visual Studio-pakkebehandlingskonsollen er gitt nedenfor:</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp1"
>}}
PM > Install-Package Aspose.OCR
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Utfør OCR effektivt på PDF-dokumenter og konverter bilder til tekst"
featuretext="Aspose.OCR for .NET API er et utmerket valg for sømløst å utføre optisk tegngjenkjenning (OCR) for .NET-utviklere. Å bruke OCR på PDF-dokumenter og konvertere den gjenkjente teksten til Word-format krever bare noen få linjer med kode. På samme måte kan du bygge bilde til tekst-konverteringsløsninger ved å bruke tekstgjenkjenningsbiblioteket for C# .NET."
>}}
{{< products/product-feature-blocks-col
featurecolheading="Gjenkjenne og trekke ut tekst fra PDF-dokumenter i .NET"
>}}
<p>Optisk tegngjenkjenning for skannede PDF-dokumenter er gjort enkelt ved hjelp av Aspose.OCR for .NET. Det er en av de mest populære funksjonene til .NET PDF-dokument OCR API og utstyrer alle som arbeider med API med alle nødvendige verktøy for å gjenkjenne, trekke ut og konvertere tekst fra PDF-dokumenter til flere formater. La oss ta en titt på trinnene som trengs for å utføre OCR på PDF-dokumenter og konvertere den utpakkede teksten fra PDF til Word-format:</p>
<ul>
   <li>Instantier <strong>AsposeOcr</strong>-klassen.</a></li>
   <li>Opprett et objekt av klassen <strong>DocumentRecognitionSettings</strong>.</li>
   <li>Angi OCR-språket.</li>
   <li>Kall metoden <strong>RecognizePdf()</strong> for å få <strong>RecognitionResult</strong>. Legg til filbane og <strong>DocumentRecognitionSettings</strong>-objekt som argumenter.</li>
   <li>Lagre teksten ved å bruke <strong>SaveMultipageDocument()</strong>-metoden. Legg til utdatafilbanen, <strong>SaveFormat</strong>- og <strong>RecognitionResult</strong>-objektene som argumenter</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp2"
>}}
// This code example demonstrates how to OCR PDF documents and save the recognized text as DOCX.
// Initialize the PCR engine
AsposeOcr recognitionEngine = new AsposeOcr();
// Initialize recognition settings
DocumentRecognitionSettings recognitionSettings = new DocumentRecognitionSettings();
// Specify language for OCR. Multi-language by default
recognitionSettings.Language = Language.Eng;
// Recognize text from PDF
List<RecognitionResult> results = recognitionEngine.RecognizePdf("C:\\MyFiles\\test.pdf", recognitionSettings);
// Save the recognized text as Word (DOCX) file
AsposeOcr.SaveMultipageDocument("C:\\Files\\OCR_result.docx", SaveFormat.Docx, results);
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks-col
featurecolheading="Konverter bilder enkelt til søkbare PDF-filer i .NET"
>}}
<p>Høyytelses .NET OCR API lar utviklere trekke ut søkbar tekst fra skannede bilder og bilder av forskjellige ofte brukte bildeformater som GIF, PNG, JPG, BMP og TIFF. Hvis du ønsker å integrere OCR-funksjoner i .NET-appene dine, kan funksjonen for konvertering av bilde til tekst styrke dem. Her vil vi gå gjennom trinnene som kreves for å effektivt konvertere JPG til PDF ved å bruke det robuste OCR API for .NET:</p>
<ul>
   <li>Angi inngangsbildefilbane for tekstgjenkjenning.</li>
   <li>Opprett en klasseforekomst <strong>AsposeOcr</strong></li>
   <li>Bruk <strong>RecognizeImage</strong>-metoden for å gjenkjenne tekst i den valgte bildefilen.</li>
   <li>Lagre den behandlede filen ved å bruke <strong>Lagre</strong>-metoden, og legg til utdatafilnavnet og <strong>SaveFormat</strong> som argumenter.</li>
   <li>Sørg for å sette den resulterende filen til et søkbart PDF-dokument ved hjelp av <strong>SaveFormat</strong>.</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp3"
>}}
// Set path for input image to recognize
string image = "OCR_test.jpg";
// Initialize AsposeOcr class instance
AsposeOcr api = new AsposeOcr();
// Recognize input image with RecognizeImage method
RecognitionResult result = api.RecognizeImage(image, new RecognitionSettings());
// Save output to searchable PDF file
result.Save("OCR_output.pdf", SaveFormat.Pdf);
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< /products/product-feature-blocks >}}
   <p class="col-lg-12">GitHub <a href="https://github.com/aspose-ocr/Aspose.OCR-for-.NET/tree/master/Examples">eksempelsiden</a> i Aspose Optical Character Recognition API for . NET inkluderer flere fungerende kodeeksempler, sjekk dem gjerne ut. Vi tilbyr også <a href="https://products.aspose.app/ocr/family">gratis online PDF OCR og bilde til tekstkonvertering</a>, tekstgjenkjenning og uttrekksapper. Du kan bruke disse gratis OCR-appene på farten ved hjelp av mobile enheter.</p>
{{< products/product-feature-blocks
featureheading="Enkelt å bruke .NET OCR-bibliotek for tekstutvinning i bilder"
featuretext="Har du problemer med å lese og trekke ut tekst fra skannede bilder? Hvis ja, bruk Aspose.OCR for .NET, siden det er den beste OCR API for bildeanalyse og tekstutvinning fra skannede bilder, smarttelefonbilder og mer. Ved å bruke denne API-en kan du programmatisk gjenkjenne tekst i bilder og konvertere den til forskjellige filformater. Videre inkluderer API for konvertering av bilde til tekst avanserte funksjoner som stavekontroll og tegnerstatning for visuelt defekte tekster. Den kan enkelt lese slike tekster, kontrollere stavemåten og erstatte eventuelle forvrengte tegn fra den feilstavede teksten på bildet. Mens du kjører bilde-OCR, kan du gi koblingen til en bildefil som kilde. Det er mulig å skanne og gjenkjenne tekst fra et fullstendig bilde eller bare en utvalgt del av bildet for denne prosessen. Utvikle dyktige bilde-til-tekst-konverteringsapper med .NET image OCR API og konverter enkelt JPEG til tekst, PNG til tekst, BMP til tekst og mer."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="FAQ"
>}}
   {{< products/faq-block
 faqquery="1. Hvordan kan jeg konvertere bilder til tekst i .NET?"
 faqanswer="Konvertering av bilder til tekst i .NET er raskt og enkelt ved å bruke .NET OCR API. Bare noen få linjer med .NET-koding er nødvendig for å konvertere JPG-, BMP-, GIF-, PNG-, TIFF- og andre bildefiler til PDF-, Word-, Excel-, JSON-, ren tekst- og XML-formater."
>}}
   {{< products/faq-block 
 faqquery="2. Hvor lang tid tar det å konvertere bilde- eller PDF-filer til tekst?"
 faqanswer="Det beste OCR API for .NET fungerer raskt og fullfører tekstgjenkjenning, utvinning og konverteringsforespørsler på kort tid."
>}}
   {{< products/faq-block
 faqquery="3. Er det trygt å behandle skannede bilder og PDF-filer ved hjelp av .NET API?"
 faqanswer="Du kan være sikker på sikkerheten til datafilene dine mens du behandler dem ved å bruke API for optisk tegngjenkjenning for .NET. Vi sikrer personvernet til dataene dine og tar alle nødvendige tiltak for å gi deg en sikker brukeropplevelse."
>}}
   {{< products/faq-block
 faqquery="4. Kan jeg behandle bilder og PDF-filer på Mac OS, Windows eller Linux?"
 faqanswer="Ja, programmeringsgrensesnittet for tekstgjenkjenning og bilde-til-tekstkonvertering for .NET fungerer på tvers av forskjellige operativsystemer, rammeverk og driftsmiljøer. Du kan bruke den på plattformen du ønsker, og den krever ingen ekstra programvareinstallasjon for å fungere."
>}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper popularheading="Verktøy for optisk tegngjenkjenning"
>}}
   {{< products/popularapp-anchor
 anchorlink="JPEG til TXT"
 moreproducts="https://products.aspose.com/ocr/net/conversion/jpeg-to-txt/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PNG til TXT"
 moreproducts="https://products.aspose.com/ocr/net/conversion/png-to-txt/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="GIF til TXT"
 moreproducts="https://products.aspose.com/ocr/net/conversion/gif-to-txt/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="BMP til TXT"
 moreproducts="https://products.aspose.com/ocr/net/conversion/bmp-to-txt/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="TIFF til TXT"
 moreproducts="https://products.aspose.com/ocr/net/conversion/tiff-to-txt/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="JPEG til PDF"
 moreproducts="https://products.aspose.com/ocr/net/conversion/jpeg-to-pdf"
>}} 
   {{< products/popularapp-anchor
 anchorlink="JPEG til Word"
 moreproducts="https://products.aspose.com/ocr/net/conversion/jpeg-to-docx"
>}} 
   {{< products/popularapp-anchor
 anchorlink="JPEG til Excel"
 moreproducts="https://products.aspose.com/ocr/net/conversion/jpeg-to-xlsx"
>}} 
   {{< products/popularapp-anchor
 anchorlink="JPEG til XML"
 moreproducts="https://products.aspose.com/ocr/net/conversion/jpeg-to-xml"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PNG til Word"
 moreproducts="https://products.aspose.com/ocr/net/conversion/png-to-docx"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PNG til Excel"
 moreproducts="https://products.aspose.com/ocr/net/conversion/png-to-xls"
>}}  
   {{< products/popularapp-anchor
 anchorlink="PNG til PDF"
 moreproducts="https://products.aspose.com/ocr/net/conversion/png-to-pdf"
>}}  
   {{< products/popularapp-anchor
 anchorlink="GIF til Word"
 moreproducts="https://products.aspose.com/ocr/net/conversion/gif-to-doc"
>}} 
   {{< products/popularapp-anchor
 anchorlink="GIF til PDF"
 moreproducts="https://products.aspose.com/ocr/net/conversion/gif-to-pdf"
>}}
   {{< products/popularapp-anchor
 anchorlink="BMP til Word"
 moreproducts="https://products.aspose.com/ocr/net/conversion/bmp-to-docx"
>}}
   {{< products/popularapp-anchor
 anchorlink="BMP til Excel"
 moreproducts="https://products.aspose.com/ocr/net/conversion/bmp-to-xls"
>}}
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Leter du etter hjelp?"
bartext="Ta en titt på støttekanalene våre for å få hjelp med spørsmål knyttet til Aspose-produktets API-funksjoner og arbeid."
 resourcetxt1="Docs"
 resourcelinks1="https://docs.aspose.com/ocr/net/"
 resourcetxt2="API-referanse"
 resourcelinks2="https://reference.aspose.com/ocr/net/" 
 resourcetxt3="Kunnskapsbase"
 resourcelinks3="https://kb.aspose.com/ocr/net/"
 resourcetxt4="Gratis støtte"
 resourcelinks4="https://forum.aspose.com/c/ocr/16"
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
 resourcelistlink="https://blog.aspose.com/ocr/skew-correction-in-image-processing-using-csharp/"
 resourcelistlink2="https://blog.aspose.com/ocr/convert-screenshot-to-text-with-ocr-in-csharp/"
 resourcelistlink3="https://blog.aspose.com/ocr/image-to-excel-ocr-csharp/"
 resourcelisttext="Skjevhetskorreksjon i bildebehandling med C#"
 resourcelisttext2="Konverter skjermbilder til tekst med OCR i C#"
 resourcelisttext3="Konverter bilde til Excel med OCR i C#"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://docs.aspose.com/"
 resourcetitle="Dokumentasjon"
 resourcealt="Dokumentasjon"
 resourceimg="/img/docs1.svg"
 resourcelistlink="https://docs.aspose.com/ocr/net/how-to-run-the-examples/"
 resourcelistlink2="https://www.nuget.org/packages/Aspose.OCR/"
 resourcelistlink3="https://helpdesk.aspose.com/"
 resourcelisttext="Hvordan kjøre eksempler"
 resourcelisttext2="Installer Aspose.OCR for .NET NuGet Package"
 resourcelisttext3="Aspose.OCR for .NET Paid Support Helpdesk"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://kb.aspose.com/"
 resourcetitle="Kunnskapsbase"
 resourcealt="Kodeeksempler"
 resourceimg="/images/code1.svg"
 resourcelistlink="https://kb.aspose.com/ocr/net/how-to-extract-text-from-scanned-pdf-in-c-sharp/"
 resourcelistlink2="https://kb.aspose.com/ocr/net/how-to-extract-text-from-image-in-csharp/"
 resourcelisttext="Hvordan trekke ut tekst fra skannet PDF i C#"
resourcelisttext2="Hvordan trekke ut tekst fra bilde i C#"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Klar til å komme i gang?"
rtstext="Last ned gratis prøveversjon"
rtslink="https://releases.aspose.com/ocr/net/" 
rtslink2="https://products.aspose.com" 
rtstext2="Se alle APIer"
>}}
