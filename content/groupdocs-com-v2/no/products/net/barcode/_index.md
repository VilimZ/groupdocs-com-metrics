---
title: .NET Barcode API for å lese, gjenkjenne og generere strekkoder
description: Bruk C# .NET Barcode API for å lese, gjenkjenne og generere 1D- og 2D-strekkoder. Lag QR-kodegenerator eller skannerapper i ASP.NET og VB.NET.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle=".NET Barcode API for å lese, gjenkjenne og generere strekkoder og QR-koder"
  inheadertext="Generer strekkoder i .NET med uovertruffen nøyaktighet og skann, les og gjenkjenne lineære strekkoder, 2D- og poststrekkoder med forskjellige symboler ved å bruke C# .NET strekkode-API. Den støtter skanning og gjenkjenning av strekkoder og QR-koder i formatene JPG, PNG, GIF, BMP og TIFF."
  ctabtn="Last ned gratis prøveversjon"
  ctabtn="Last ned gratis prøveversjon"
  ctalink="https://releases.aspose.com/barcode/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Se alle APIer"
  bchomelink="/"
  bchome="Hjem"
  bcpage="Strekkode"
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
subnav5="https://purchase.aspose.com/pricing/barcode/net"
subnavtxt5="Prissetting" 
subbtn1="https://docs.aspose.com/barcode/net/"
subbtntxt1="Lære"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="Kjøpe"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="Bygg strekkodegjenkjenning og QR-kodegenerator-apper i C# .NET"
   subtext="Aspose.BarCode for .NET er en høyytelses strekkodegenerering og gjenkjennings-API som gjør det mulig for .NET-utviklere å lage, skanne, lese, oppdage og eksportere forskjellige typer 1D (lineær), 2D og poststrekkoder. Denne .NET strekkodegenerator-API-en har et stort funksjonssett og tilbyr ulastelig nøyaktighet mens du leser eller skanner strekkodebildene i PNG, BMP, JPG, GIF, TIFF og andre formater. Videre kan du også eksportere strekkodene til populære rasterbilder eller EMF- og SVG-vektorfiler. Sammen med funksjonene for strekkode- og QR-kodeskanning lar Aspose.BarCode for .NET deg manipulere flere elementer av strekkodens utseende, inkludert bildekvalitet, filstørrelse, bakgrunn og strekfarge, bildekvalitet og oppløsning, rotasjonsvinkel, bildetekster og mange mer."
   subtext2="Ved å bruke strekkode-API for .NET kan du raskt og enkelt integrere QR-kodeskannerfunksjonalitet i dine eksisterende .NET strekkodebehandlingsløsninger eller bygge omfattende strekkodegjenkjenningsapper i C#, ASP.NET eller VB.NET fra bunnen av. Aspose.BarCode for .NET-biblioteket støtter mer enn 50 lineære, 2D- og poststrekkodesymbologier som Code 128, Code 39 Extended, Data Matrix, QR Code, PDF 417 og Postnet."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Starter</h2>
   <p>Før du setter opp .NET strekkode-API-en på din side, vennligst sjekk forutsetningene på <a href="https://docs.aspose.com/barcode/net/system-requirements/">Systemkrav</a>-siden for å sikre et jevnt API-oppsett og brukeropplevelse.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples">}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.BarCode for .NET-installasjon"
>}}
<p>Gå til <a href="https://releases.aspose.com/barcode/net/">nedlastingsdelen</a> for å laste ned DLL-ene eller MSI-installasjonsprogrammet for .NET strekkodegjenkjenning og generering API. Du kan installere API-en ved å bruke <a href="https://www.nuget.org/packages/Aspose.BarCode/">NuGet-pakken</a> også. Nedenfor finner du kommandoen for pakkebehandlingskonsollen:</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp1"
>}}
PM > Install-Package Aspose.BarCode 
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Hvordan generere QR-koder i .NET og lese strekkoder fra bilder"
featuretext="Med Aspose.BarCode for .NET kan utviklere integrere QR-kodegenerering i sine .NET strekkodebehandlingsapper. Dessuten er det også mulig å gjenkjenne ulike typer strekkoder fra PNG, JPEG, BMP og andre bilder. Du kan skanne og lese flere strekkodetyper fra samme bildefil." 
>}}  
{{< products/product-feature-blocks-col
featurecolheading="Generer QR-koder raskt i .NET"
>}}
<p>.NET strekkode API støtter generering av QR-koder med forskjellige typer koding. Du kan legge til denne funksjonaliteten til strekkodemanipuleringsapplikasjonene dine og forbedre tilbudene dine ytterligere. Vennligst sjekk følgende informasjon og C#-koding for raskt og enkelt å generere QR-koder ved å bruke Aspose.BarCode for .NET-biblioteket:</p>
<ul>
   <li>Instantier <a href="https://reference.aspose.com/barcode/net/aspose.barcode.generation/barcodegenerator">BarcodeGenerator</a>-klassen og spesifiser <a href="https://reference.aspose.com/barcode/net/aspose.barcode.generation/encodetypes">EncodeType</a> og inndatateksten.</li>
   <li>Angi QR-kodeversjon og kodingstype.</li>
   <li>Generer og lagre QR-kodebildet i PNG-format.</li>
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
featurecolheading="Les strekkoder fra bilder i .NET"
>}}
<p>Aspose.BarCode for .NET API gjør det enklere å lese strekkoder med forskjellige symbologier fra PNG, JPEG, BMP, GIF og andre bildefilformater. Denne .NET strekkodegjenkjenning og generering API støtter skanning og lesing av <a href="https://blog.aspose.com/barcode/read-barcode-from-image-in-csharp/#Read-Barcode-of-Multiple- Types-from-Image-in-CSharp">flere strekkoder fra samme bilde</a>. Vennligst sjekk følgende informasjon for mer hjelp:</p>
<ul>
   <li>Last inn kildestrekkodebildet ved å bruke <a href="https://reference.aspose.com/barcode/net/aspose.barcode.barcoderecognition/barcodereader/">BarCodeReader</a>-klassen.</li>
   <li>Ring <a href="https://reference.aspose.com/barcode/net/aspose.barcode.barcoderecognition/barcodereader/readbarcodes/">ReadBarCodes()</a>-metoden for å få gjenkjenningsresultater i <a href ="https://reference.aspose.com/barcode/net/aspose.barcode.barcoderecognition/barcoderesult/">BarCodeResult</a> klasseobjekt.</li>
   <li>Gå gjennom de oppnådde resultatene og vis strekkodens type og tekst.</li>
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
   <p class="col-lg-12">Besøk siden <a href="https://github.com/aspose-barcode/Aspose.BarCode-for-.NET/tree/master/Examples">GitHub-eksempler</a> for flere fungerende eksempler på . NET strekkode API. Hvis du ønsker å skanne, gjenkjenne og generere 1D-, 2D- og poststrekkoder eller QR-koder på farten ved hjelp av mobile enheter, vennligst sjekk <a href="https://products.aspose.app/barcode/family ">gratis nettbaserte apper</a> av Aspose.BarCode.</p>
{{< products/product-feature-blocks
featureheading="Enkel integrasjon og avanserte operasjoner"
featuretext="Aspose.BarCode for .NET tillater superenkle operasjoner som krever bare noen få linjer med .NET-koding for å begynne å generere, lese og gjenkjenne ulike typer strekkoder. Som .NET-utvikler kan du enkelt integrere .NET strekkodegenerator-API med alle .NET-appene dine. En av de beste funksjonene til dette biblioteket er muligheten til å lese skadede strekkoder og QR-koder ved hjelp av intrikate algoritmer og filtreringsmekanismer som lar deg holde deg oppdatert på dine strekkodebehandlingsbehov."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="FAQ"
   >}}
   {{< products/faq-block
   faqquery="1. Hvordan kan jeg generere strekkoder i .NET?"
   faqanswer="Generering av 1D-, 2D- og poststrekkoder i .NET er raskt og enkelt ved å bruke Aspose.BarCode for .NET API. Bare noen få linjer med .NET-koding er nødvendig for å generere strekkoden av ønsket type." 
   >}}
   {{< products/faq-block
   faqquery="2. Hvor lang tid tar det å lese eller generere strekkoder?"
   faqanswer=".NET strekkodegjenkjenning og generering API fungerer raskt og fullfører forespørslene dine på kort tid." 
   >}}
   {{< products/faq-block
   faqquery="3. Er det trygt å behandle filer ved hjelp av .NET API?"
   faqanswer="Du kan være sikker på sikkerheten til strekkodefilene dine mens du behandler dem ved å bruke Aspose.BarCode for .NET API. Vi sikrer personvernet til dataene dine og tar alle nødvendige tiltak for å gi deg en sikker brukeropplevelse." 
   >}}
   {{< products/faq-block
   faqquery="4. Kan jeg gjenkjenne og generere strekkoder på Mac OS, Windows eller Linux?"
   faqanswer="Ja, strekkode-APIet for .NET fungerer på tvers av forskjellige operativsystemer, rammeverk og driftsmiljøer. Du kan bruke den på plattformen du ønsker, og den krever ingen ekstra programvareinstallasjon for å fungere." 
   >}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="Verktøy for generering og gjenkjenning av strekkoder"
   >}}
   {{< products/popularapp-anchor
anchorlink="Generer PDF417 strekkode"
moreproducts="https://products.aspose.com/barcode/net/generate/pdf417/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Generer CODE39 strekkode"
moreproducts="https://products.aspose.com/barcode/net/generate/code39/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Generer CODE128 strekkode"
moreproducts="https://products.aspose.com/barcode/net/generate/code128/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Generer QR-kode"
moreproducts="https://products.aspose.com/barcode/net/generate/qr/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Generer POSTNET strekkode"
moreproducts="https://products.aspose.com/barcode/net/generate/postnet/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Generer PLANET strekkode"
moreproducts="https://products.aspose.com/total/python-net/generate-barcode/planet/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Gjenkjenne CODE39 strekkode"
moreproducts="https://products.aspose.com/barcode/net/recognize/code39/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Gjenkjenne QR-koden"
moreproducts="https://products.aspose.com/barcode/net/recognize/qr/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Gjenkjenne PDF417 strekkode"
moreproducts="https://products.aspose.com/barcode/net/recognize/pdf417/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Gjenkjenne POSTNET strekkode"
moreproducts="https://products.aspose.com/barcode/net/recognize/postnet/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Gjenkjenne AZTEC strekkode"
moreproducts="https://products.aspose.com/barcode/net/recognize/aztec/"
>}}  
   {{< products/popularapp-anchor
anchorlink="Gjenkjenne ISBN strekkode"
moreproducts="https://products.aspose.com/barcode/net/recognize/isbn/"
>}}
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Leter du etter hjelp?"
bartext="Ta en titt på støttekanalene våre for å få hjelp med spørsmål knyttet til Aspose-produktets API-funksjoner og arbeid."
resourcetxt1="Docs"
resourcelinks1="https://docs.aspose.com/barcode/net/"
resourcetxt2="API-referanse"
resourcelinks2="https://reference.aspose.com/barcode/" 
resourcetxt3="Kunnskapsbase"
resourcelinks3="https://kb.aspose.com/barcode/net/"
resourcetxt4="Gratis støtte"
resourcelinks4="https://forum.aspose.com/c/barcode/13"
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
resourcelistlink="https://blog.aspose.com/barcode/generate-dotcode-barcodes/"
resourcelistlink2="https://blog.aspose.com/barcode/generate-hibc-lic-barcodes/"
resourcelistlink3="https://blog.aspose.com/barcode/read-barcode-from-multipage-tiff-in-csharp/"
resourcelisttext="Generer punktkodestrekkoder i C#"
resourcelisttext2="Generer HIBC LIC-strekkoder i C#"
resourcelisttext3="Les strekkode fra flersidet TIFF-bilde i C#" 
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://docs.aspose.com/"
resourcetitle="Dokumentasjon"
resourcealt="Dokumentasjon"
resourceimg="/img/docs1.svg"
resourcelistlink="https://docs.aspose.com/barcode/net/product-features/"
resourcelistlink2="https://www.nuget.org/packages/Aspose.BarCode/"
resourcelistlink3="https://helpdesk.aspose.com/"
resourcelisttext="Aspose.BarCode for .NET-funksjoner"
resourcelisttext2="Installer Aspose.BarCode for .NET NuGet Package"
resourcelisttext3="Aspose.BarCode for .NET Paid Support Helpdesk" 
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://kb.aspose.com/"
resourcetitle="Kunnskapsbase"
resourcealt="Kodeeksempler"
resourceimg="/images/code1.svg"
resourcelistlink="https://kb.aspose.com/barcode/net/how-to-rotate-barcode-image-in-c-sharp/"
resourcelistlink2="https://kb.aspose.com/barcode/net/how-to-generate-barcode-image-in-csharp/"
resourcelistlink3="https://kb.aspose.com/barcode/net/how-to-convert-barcode-to-svg-in-csharp/"
resourcelisttext="Hvordan rotere strekkodebilde i C#"
resourcelisttext2="Hvordan generere strekkodebilde i C#"
resourcelisttext3="Hvordan konvertere strekkode til SVG i C#" 
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper 
rtsheading="Klar til å komme i gang?" 
rtstext="Last ned gratis prøveversjon" 
rtslink="https://releases.aspose.com/" 
rtslink2="https://products.aspose.com" 
rtstext2="Se alle APIer" 
>}}
