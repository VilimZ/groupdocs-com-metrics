---
title: .NET Barcode API til at læse, genkende og generere stregkoder
description: Brug C# .NET Barcode API til at læse, genkende og generere 1D- og 2D-stregkoder. Opret QR-kodegenerator eller scanner-apps i ASP.NET & VB.NET.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle=".NET Barcode API til at læse, genkende og generere stregkoder og QR-koder"
  inheadertext="Generer stregkoder i .NET med uovertruffen nøjagtighed, og scan, læs og genkend lineære, 2D- og poststregkoder med forskellige symbologier ved hjælp af C# .NET stregkode-API. Det understøtter scanning og registrering af stregkoder og QR-koder i formaterne JPG, PNG, GIF, BMP og TIFF."
  ctabtn="Download gratis prøveversion"
  ctabtn="Download gratis prøveversion"
  ctalink="https://releases.aspose.com/barcode/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Se alle API'er"
  bchomelink="/"
  bchome="Hjem"
  bcpage="Stregkode"
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
subnav5="https://purchase.aspose.com/pricing/barcode/net"
subnavtxt5="Prissætning" 
subbtn1="https://docs.aspose.com/barcode/net/"
subbtntxt1="Lære"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="Købe"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="Byg stregkodegenkendelse og QR-kodegenerator apps i C# .NET"
   subtext="Aspose.BarCode for .NET er en højtydende stregkodegenerering og genkendelses-API, der gør det muligt for .NET-udviklere at oprette, scanne, læse, detektere og eksportere forskellige typer 1D (lineær), 2D og poststregkoder. Denne .NET stregkodegenerator API kan prale af et fantastisk sæt funktioner og tilbyder upåklagelig nøjagtighed, mens du læser eller scanner stregkodebillederne i PNG, BMP, JPG, GIF, TIFF og andre formater. Ydermere kan du også eksportere stregkoderne til populære rasterbilleder eller EMF- og SVG-vektorfiler. Sammen med stregkode- og QR-kodescanningsfunktionerne giver Aspose.BarCode for .NET dig mulighed for at manipulere flere elementer af stregkodens udseende, herunder billedkvalitet, filstørrelse, baggrund og stregfarve, billedkvalitet og opløsning, rotationsvinkel, billedtekster og mange mere."
   subtext2="Ved at bruge stregkode-API'en til .NET kan du hurtigt og nemt integrere QR-kodescannerfunktionalitet i dine eksisterende .NET stregkodebehandlingsløsninger eller bygge omfattende stregkodegenkendelsesapps i C#, ASP.NET eller VB.NET fra bunden. Aspose.BarCode for .NET bibliotek understøtter mere end 50 lineære, 2D og poststregkode symbologier såsom Code 128, Code 39 Extended, Data Matrix, QR Code, PDF 417 og Postnet."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Kom godt i gang</h2>
   <p>Før du opsætter .NET stregkode-API'en i din ende, skal du kontrollere forudsætningerne på siden <a href="https://docs.aspose.com/barcode/net/system-requirements/">Systemkrav</a> for at sikre en smidig API-opsætning og brugeroplevelse.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples">}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.BarCode til .NET installation"
>}}
<p>Besøg venligst <a href="https://releases.aspose.com/barcode/net/">downloadsektionen</a> for direkte at downloade DLL'erne eller MSI-installationsprogrammet til .NET stregkodegenkendelses- og genererings-API'en. Du kan også installere API'et ved hjælp af <a href="https://www.nuget.org/packages/Aspose.BarCode/">NuGet-pakken</a>. Find venligst kommandoen til pakkehåndteringskonsollen nedenfor:</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp1"
>}}
PM > Install-Package Aspose.BarCode 
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Sådan genererer du QR-koder i .NET og læser stregkoder fra billeder"
featuretext="Med Aspose.BarCode for .NET kan udviklere inkorporere QR-kodegenereringskapacitet i deres .NET stregkodebehandlingsapps. Desuden er det også muligt at genkende forskellige typer stregkoder fra PNG, JPEG, BMP og andre billeder. Du kan scanne og læse flere stregkodetyper fra den samme billedfil." 
>}}  
{{< products/product-feature-blocks-col
featurecolheading="Generer hurtigt QR-koder i .NET"
>}}
<p>.NET stregkode API understøtter generering af QR-koder med forskellige typer kodning. Du kan tilføje denne funktionalitet til dine stregkodemanipulationsapplikationer og forbedre dine tilbud yderligere. Tjek venligst følgende oplysninger og C#-kodning for hurtigt og nemt at generere QR-koder ved hjælp af Aspose.BarCode for .NET-biblioteket:</p>
<ul>
   <li>Instantiér klassen <a href="https://reference.aspose.com/barcode/net/aspose.barcode.generation/barcodegenerator">BarcodeGenerator</a> og angiv <a href="https://reference.aspose.com/barcode/net/aspose.barcode.generation/encodetypes">EncodeType</a> og inputteksten.</li>
   <li>Indstil QR-kodeversion og kodningstype.</li>
   <li>Generer og gem QR-kodebilledet i PNG-format.</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp2"
>}}
// Initialize an instance of BarcodeGenerator class
BarcodeGenerator gen = new BarcodeGenerator(EncodeTypes.QR, "Aspose");
gen.Parameters.Barcode.XDimension.Pixels = 4;
// Set Auto version
gen.Parameters.Barcode.QR.QrVersion = QRVersion.Auto;
//Set ForceMicroQR QR encode type
gen.Parameters.Barcode.QR.QrEncodeType = QREncodeType.ForceMicroQR;
gen.Save(dataDir + "QREncodeTypeForceMicroQR.png", BarCodeImageFormat.Png);
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks-col
featurecolheading="Læs stregkoder fra billeder i .NET"
>}}
<p>Aspose.BarCode for .NET API gør det nemmere at læse stregkoder af forskellige symbologier fra PNG, JPEG, BMP, GIF og andre billedfilformater. Denne .NET stregkodegenkendelse og generering API understøtter scanning og læsning <a href="https://blog.aspose.com/barcode/read-barcode-from-image-in-csharp/#Read-Barcode-of-Multiple- Types-from-Image-in-CSharp">flere stregkoder fra det samme billede</a>. Tjek venligst følgende oplysninger for mere hjælp:</p>
<ul>
   <li>Indlæs kildestregkodebilledet ved hjælp af <a href="https://reference.aspose.com/barcode/net/aspose.barcode.barcoderecognition/barcodereader/">BarCodeReader</a>-klassen.</li>
   <li>Kald <a href="https://reference.aspose.com/barcode/net/aspose.barcode.barcoderecognition/barcodereader/readbarcodes/">ReadBarCodes()</a>-metoden for at få genkendelsesresultater i <a href ="https://reference.aspose.com/barcode/net/aspose.barcode.barcoderecognition/barcoderesult/">BarCodeResult</a> klasseobjekt.</li>
   <li>Gå gennem de opnåede resultater og vis stregkodens type og tekst.</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp3"
>}}
// Initialize barcode reader
BarCodeReader reader = new BarCodeReader("C:\\Files\\BarCode\\Sample.png");
// Read the barcode and show the results
foreach(BarCodeResult result in reader.ReadBarCodes()) 
{
    Console.Out.WriteLine("CodeText: " + result.CodeText);
    Console.Out.WriteLine("Symbology type: " + result.CodeType);
}
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< /products/product-feature-blocks >}}
   <p class="col-lg-12">Besøg siden <a href="https://github.com/aspose-barcode/Aspose.BarCode-for-.NET/tree/master/Examples">GitHub-eksempler</a> for at få flere eksempler på . NET stregkode API. Hvis du ønsker at scanne, genkende og generere 1D-, 2D- og poststregkoder eller QR-koder på farten ved hjælp af dine mobile enheder, bedes du tjekke <a href="https://products.aspose.app/barcode/family ">gratis online apps</a> af Aspose.BarCode.</p>
{{< products/product-feature-blocks
featureheading="Nem integration og avancerede betjeninger"
featuretext="Aspose.BarCode for .NET tillader superlette operationer, der kun kræver et par linjers .NET-kodning for at begynde at generere, læse og genkende forskellige typer stregkoder. Som .NET-udvikler kan du ubesværet integrere .NET stregkodegenerator-API'en med enhver af dine .NET-apps. En af de bedste funktioner i dette bibliotek er evnen til at læse beskadigede stregkoder og QR-koder ved hjælp af indviklede algoritmer og filtreringsmekanismer, der gør det muligt for dig at holde styr på dine stregkodebehandlingsbehov."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="FAQ"
   >}}
   {{< products/faq-block
   faqquery="1. Hvordan kan jeg generere stregkoder i .NET?"
   faqanswer="Generering af 1D-, 2D- og poststregkoder i .NET er hurtigt og nemt ved at bruge Aspose.BarCode for .NET API. Kun et par linjer med .NET-kodning er nødvendige for at generere stregkoden af din ønskede type." 
   >}}
   {{< products/faq-block
   faqquery="2. Hvor lang tid tager det at læse eller generere stregkoder?"
   faqanswer=".NET stregkodegenkendelses- og genererings-API'en fungerer hurtigt og fuldender dine anmodninger på ingen tid." 
   >}}
   {{< products/faq-block
   faqquery="3. Er det sikkert at behandle filer ved hjælp af .NET API?"
   faqanswer="Du kan være sikker på sikkerheden af dine stregkodefiler, mens du behandler dem ved hjælp af Aspose.BarCode for .NET API. Vi sikrer privatlivets fred for dine data og træffer alle nødvendige foranstaltninger for at give dig en sikker brugeroplevelse." 
   >}}
   {{< products/faq-block
   faqquery="4. Kan jeg genkende og generere stregkoder på Mac OS, Windows eller Linux?"
   faqanswer="Ja, stregkode-API'en til .NET fungerer på tværs af forskellige OS, frameworks og driftsmiljøer. Du kan bruge det på den platform, du vælger, og det kræver ikke nogen yderligere softwareinstallation for at fungere." 
   >}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="Værktøjer til generering og genkendelse af stregkoder"
   >}}
   {{< products/popularapp-anchor
anchorlink="Generer PDF417 stregkode"
moreproducts="https://products.aspose.com/barcode/net/generate/pdf417/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Generer CODE39 stregkode"
moreproducts="https://products.aspose.com/barcode/net/generate/code39/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Generer CODE128 stregkode"
moreproducts="https://products.aspose.com/barcode/net/generate/code128/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Generer QR-kode"
moreproducts="https://products.aspose.com/barcode/net/generate/qr/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Generer POSTNET stregkode"
moreproducts="https://products.aspose.com/barcode/net/generate/postnet/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Generer PLANET stregkode"
moreproducts="https://products.aspose.com/total/python-net/generate-barcode/planet/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Genkend CODE39 stregkode"
moreproducts="https://products.aspose.com/barcode/net/recognize/code39/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Genkend QR-koden"
moreproducts="https://products.aspose.com/barcode/net/recognize/qr/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Genkend PDF417 stregkode"
moreproducts="https://products.aspose.com/barcode/net/recognize/pdf417/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Genkend POSTNET stregkode"
moreproducts="https://products.aspose.com/barcode/net/recognize/postnet/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Genkend AZTEC stregkode"
moreproducts="https://products.aspose.com/barcode/net/recognize/aztec/"
>}}  
   {{< products/popularapp-anchor
anchorlink="Genkend ISBN-stregkode"
moreproducts="https://products.aspose.com/barcode/net/recognize/isbn/"
>}}
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Leder du efter hjælp?"
bartext="Tjek vores supportkanaler for at få hjælp til dine spørgsmål relateret til Aspose-produkt API-funktioner og arbejde."
resourcetxt1="Docs"
resourcelinks1="https://docs.aspose.com/barcode/net/"
resourcetxt2="API-reference"
resourcelinks2="https://reference.aspose.com/barcode/" 
resourcetxt3="Vidensbase"
resourcelinks3="https://kb.aspose.com/barcode/net/"
resourcetxt4="Gratis support"
resourcelinks4="https://forum.aspose.com/c/barcode/13"
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
resourcelistlink="https://blog.aspose.com/barcode/generate-dotcode-barcodes/"
resourcelistlink2="https://blog.aspose.com/barcode/generate-hibc-lic-barcodes/"
resourcelistlink3="https://blog.aspose.com/barcode/read-barcode-from-multipage-tiff-in-csharp/"
resourcelisttext="Generer DotCode-stregkoder i C#"
resourcelisttext2="Generer HIBC LIC-stregkoder i C#"
resourcelisttext3="Læs stregkode fra flersidet TIFF-billede i C#" 
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://docs.aspose.com/"
resourcetitle="Dokumentation"
resourcealt="Dokumentation"
resourceimg="/img/docs1.svg"
resourcelistlink="https://docs.aspose.com/barcode/net/product-features/"
resourcelistlink2="https://www.nuget.org/packages/Aspose.BarCode/"
resourcelistlink3="https://helpdesk.aspose.com/"
resourcelisttext="Aspose.BarCode til .NET funktioner"
resourcelisttext2="Installer Aspose.BarCode for .NET NuGet Package"
resourcelisttext3="Aspose.BarCode for .NET Betalt Support Helpdesk" 
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://kb.aspose.com/"
resourcetitle="Vidensbase"
resourcealt="Kodeprøver"
resourceimg="/images/code1.svg"
resourcelistlink="https://kb.aspose.com/barcode/net/how-to-rotate-barcode-image-in-c-sharp/"
resourcelistlink2="https://kb.aspose.com/barcode/net/how-to-generate-barcode-image-in-csharp/"
resourcelistlink3="https://kb.aspose.com/barcode/net/how-to-convert-barcode-to-svg-in-csharp/"
resourcelisttext="Sådan roteres stregkodebillede i C#"
resourcelisttext2="Sådan genereres stregkodebillede i C#"
resourcelisttext3="Sådan konverteres stregkode til SVG i C#" 
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper 
rtsheading="Klar til at komme i gang?" 
rtstext="Download gratis prøveversion" 
rtslink="https://releases.aspose.com/" 
rtslink2="https://products.aspose.com" 
rtstext2="Se alle API'er" 
>}}
