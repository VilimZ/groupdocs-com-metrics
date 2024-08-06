---
title: .NET Barcode API för att läsa, känna igen och generera streckkoder
description: Använd C# .NET Barcode API för att läsa, känna igen och generera 1D- och 2D-streckkoder. Skapa QR-kodgenerator eller skannerappar i ASP.NET & VB.NET.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle=".NET Barcode API för att läsa, känna igen och generera streckkoder och QR-koder"
  inheadertext="Generera streckkoder i .NET med oöverträffad noggrannhet och skanna, läs och identifiera linjära streckkoder, 2D och poststreckkoder för olika symboler med hjälp av C# .NET streckkods-API. Den stöder skanning och detektering av streckkoder och QR-koder i formaten JPG, PNG, GIF, BMP och TIFF."
  ctabtn="Ladda ner gratis provversion"
  ctabtn="Ladda ner gratis provversion"
  ctalink="https://releases.aspose.com/barcode/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Visa alla API:er"
  bchomelink="/"
  bchome="Hem"
  bcpage="Streckkod"
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
subnav5="https://purchase.aspose.com/pricing/barcode/net"
subnavtxt5="Prissättning" 
subbtn1="https://docs.aspose.com/barcode/net/"
subbtntxt1="Lära sig"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="köpa"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="Bygg appar för streckkodsigenkänning och QR-kodgenerator i C# .NET"
   subtext="Aspose.BarCode för .NET är en högpresterande streckkodsgenerering och igenkännings-API som gör det möjligt för .NET-utvecklare att skapa, skanna, läsa, upptäcka och exportera olika typer av 1D (linjär), 2D och poststreckkoder. Denna .NET streckkodsgenerator API har en fantastisk funktionsuppsättning och erbjuder obefläckad noggrannhet när du läser eller skannar streckkodsbilderna i PNG, BMP, JPG, GIF, TIFF och andra format. Dessutom kan du även exportera streckkoderna till populära rasterbilder eller EMF- och SVG-vektorfiler. Tillsammans med streckkods- och QR-kodskanningsfunktionerna låter Aspose.BarCode för .NET dig manipulera flera delar av streckkodens utseende, inklusive bildkvalitet, filstorlek, bakgrund och streckfärg, bildkvalitet och upplösning, rotationsvinkel, bildtexter och många Mer."
   subtext2="Med streckkods-API:et för .NET kan du snabbt och enkelt integrera QR-kodskannerfunktioner i dina befintliga streckkodsbehandlingslösningar för .NET eller bygga omfattande appar för igenkänning av streckkoder i C#, ASP.NET eller VB.NET från grunden. Aspose.BarCode för .NET-biblioteket stöder mer än 50 linjära, 2D- och poststreckkodssymbologier såsom Code 128, Code 39 Extended, Data Matrix, QR Code, PDF 417 och Postnet."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Komma igång</h2>
   <p>Innan du ställer in .NET streckkods-API:t vid din sida, kontrollera förutsättningarna på sidan <a href="https://docs.aspose.com/barcode/net/system-requirements/">Systemkrav</a> för att säkerställa en smidig API-inställning och användarupplevelse.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples">}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.BarCode för .NET-installation"
>}}
<p>Besök <a href="https://releases.aspose.com/barcode/net/">nedladdningssektionen</a> för att direkt ladda ner DLL:erna eller MSI-installationsprogrammet för .NET streckkodsigenkänning och generering API. Du kan installera API:t med <a href="https://www.nuget.org/packages/Aspose.BarCode/">NuGet-paketet</a> också. Nedan hittar du kommandot för pakethanterarens konsol:</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp1"
>}}
PM > Install-Package Aspose.BarCode 
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Hur man genererar QR-koder i .NET och läser streckkoder från bilder"
featuretext="Med Aspose.BarCode för .NET kan utvecklare införliva möjligheten att generera QR-koder i sina appar för .NET streckkodsbearbetning. Dessutom är det också möjligt att känna igen olika typer av streckkoder från PNG, JPEG, BMP och andra bilder. Du kan skanna och läsa flera streckkodstyper från samma bildfil." 
>}}  
{{< products/product-feature-blocks-col
featurecolheading="Generera snabbt QR-koder i .NET"
>}}
<p>.NET streckkods-API stöder generering av QR-koder med olika typer av kodning. Du kan lägga till den här funktionen i dina streckkodsmanipuleringsapplikationer och förbättra dina erbjudanden ytterligare. Kontrollera följande information och C#-kodning för att snabbt och enkelt generera QR-koder med Aspose.BarCode för .NET-biblioteket:</p>
<ul>
   <li>Instantiera klassen <a href="https://reference.aspose.com/barcode/net/aspose.barcode.generation/barcodegenerator">BarcodeGenerator</a> och ange <a href="https://reference.aspose.com/barcode/net/aspose.barcode.generation/encodetypes">EncodeType</a> och inmatningstexten.</li>
   <li>Ställ in QR-kodversion och kodningstyp.</li>
   <li>Skapa och spara QR-kodbilden i PNG-format.</li>
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
featurecolheading="Läs streckkoder från bilder i .NET"
>}}
<p>Aspose.BarCode för .NET API gör det lättare att läsa streckkoder med olika symboler från PNG, JPEG, BMP, GIF och andra bildfilformat. Detta API för .NET streckkodsigenkänning och generering stöder skanning och läsning av <a href="https://blog.aspose.com/barcode/read-barcode-from-image-in-csharp/#Read-Barcode-of-Multiple- Types-from-Image-in-CSharp">flera streckkoder från samma bild</a>. Kontrollera följande information för mer hjälp:</p>
<ul>
   <li>Ladda källstreckkodsbilden med klassen <a href="https://reference.aspose.com/barcode/net/aspose.barcode.barcoderecognition/barcodereader/">BarCodeReader</a>.</li>
   <li>Anropa <a href="https://reference.aspose.com/barcode/net/aspose.barcode.barcoderecognition/barcodereader/readbarcodes/">ReadBarCodes()</a>-metoden för att få igenkänningsresultat i <a href ="https://reference.aspose.com/barcode/net/aspose.barcode.barcoderecognition/barcoderesult/">BarCodeResult</a> klassobjekt.</li>
   <li>Gå igenom de erhållna resultaten och visa streckkodens typ och text.</li>
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
   <p class="col-lg-12">Besök sidan <a href="https://github.com/aspose-barcode/Aspose.BarCode-for-.NET/tree/master/Examples">GitHub-exempel</a> för fler fungerande exempel på . NET streckkod API. Om du vill skanna, känna igen och generera 1D-, 2D- och poststreckkoder eller QR-koder i farten med hjälp av dina mobila enheter, kolla in <a href="https://products.aspose.app/barcode/family ">gratis onlineappar</a> av Aspose.BarCode.</p>
{{< products/product-feature-blocks
featureheading="Enkel integration och avancerade funktioner"
featuretext="Aspose.BarCode för .NET tillåter superenkla operationer som bara kräver några rader .NET-kodning för att börja generera, läsa och känna igen olika typer av streckkoder. Som .NET-utvecklare kan du enkelt integrera .NET streckkodsgeneratorns API med alla dina .NET-appar. En av de bästa funktionerna i det här biblioteket är förmågan att läsa skadade streckkoder och QR-koder med hjälp av invecklade algoritmer och filtreringsmekanismer som gör att du kan hålla koll på dina streckkodsbearbetningsbehov."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="FAQ"
   >}}
   {{< products/faq-block
   faqquery="1. Hur kan jag generera streckkoder i .NET?"
   faqanswer="Att generera 1D-, 2D- och poststreckkoder i .NET är snabbt och enkelt med Aspose.BarCode för .NET API. Endast ett fåtal rader med .NET-kodning behövs för att generera streckkoden av önskad typ." 
   >}}
   {{< products/faq-block
   faqquery="2. Hur lång tid tar det att läsa eller generera streckkoder?"
   faqanswer=".NET streckkodsigenkänning och generering API fungerar snabbt och slutför dina förfrågningar på nolltid." 
   >}}
   {{< products/faq-block
   faqquery="3. Är det säkert att bearbeta filer med .NET API?"
   faqanswer="Du kan vara säker på säkerheten för dina streckkodsfiler medan du bearbetar dem med Aspose.BarCode för .NET API. Vi säkerställer integriteten för dina uppgifter och vidtar alla nödvändiga åtgärder för att ge dig en säker användarupplevelse." 
   >}}
   {{< products/faq-block
   faqquery="4. Kan jag känna igen och generera streckkoder på Mac OS, Windows eller Linux?"
   faqanswer="Ja, streckkods-API:et för .NET fungerar över olika operativsystem, ramverk och operativa miljöer. Du kan använda den på den plattform du väljer och den kräver ingen ytterligare programvaruinstallation för att fungera." 
   >}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="Verktyg för generering och igenkänning av streckkoder"
   >}}
   {{< products/popularapp-anchor
anchorlink="Generera PDF417 streckkod"
moreproducts="https://products.aspose.com/barcode/net/generate/pdf417/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Generera CODE39 streckkod"
moreproducts="https://products.aspose.com/barcode/net/generate/code39/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Generera CODE128 streckkod"
moreproducts="https://products.aspose.com/barcode/net/generate/code128/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Generera QR-kod"
moreproducts="https://products.aspose.com/barcode/net/generate/qr/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Generera POSTNET streckkod"
moreproducts="https://products.aspose.com/barcode/net/generate/postnet/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Generera PLANET streckkod"
moreproducts="https://products.aspose.com/total/python-net/generate-barcode/planet/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Känn igen CODE39 streckkod"
moreproducts="https://products.aspose.com/barcode/net/recognize/code39/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Känn igen QR-koden"
moreproducts="https://products.aspose.com/barcode/net/recognize/qr/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Känn igen PDF417 streckkod"
moreproducts="https://products.aspose.com/barcode/net/recognize/pdf417/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Känn igen POSTNET streckkod"
moreproducts="https://products.aspose.com/barcode/net/recognize/postnet/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Känn igen AZTEC streckkod"
moreproducts="https://products.aspose.com/barcode/net/recognize/aztec/"
>}}  
   {{< products/popularapp-anchor
anchorlink="Känn igen ISBN-streckkoden"
moreproducts="https://products.aspose.com/barcode/net/recognize/isbn/"
>}}
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Letar du efter hjälp?"
bartext="Kolla in våra supportkanaler för hjälp med dina frågor relaterade till Aspose-produktens API-funktioner och arbete."
resourcetxt1="Docs"
resourcelinks1="https://docs.aspose.com/barcode/net/"
resourcetxt2="API-referens"
resourcelinks2="https://reference.aspose.com/barcode/" 
resourcetxt3="Kunskapsbas"
resourcelinks3="https://kb.aspose.com/barcode/net/"
resourcetxt4="Gratis support"
resourcelinks4="https://forum.aspose.com/c/barcode/13"
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
resourcelistlink="https://blog.aspose.com/barcode/generate-dotcode-barcodes/"
resourcelistlink2="https://blog.aspose.com/barcode/generate-hibc-lic-barcodes/"
resourcelistlink3="https://blog.aspose.com/barcode/read-barcode-from-multipage-tiff-in-csharp/"
resourcelisttext="Generera DotCode streckkoder i C#"
resourcelisttext2="Generera HIBC LIC streckkoder i C#"
resourcelisttext3="Läs streckkod från flersidig TIFF-bild i C#" 
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://docs.aspose.com/"
resourcetitle="Dokumentation"
resourcealt="Dokumentation"
resourceimg="/img/docs1.svg"
resourcelistlink="https://docs.aspose.com/barcode/net/product-features/"
resourcelistlink2="https://www.nuget.org/packages/Aspose.BarCode/"
resourcelistlink3="https://helpdesk.aspose.com/"
resourcelisttext="Aspose.BarCode för .NET-funktioner"
resourcelisttext2="Installera Aspose.BarCode för .NET NuGet Package"
resourcelisttext3="Aspose.BarCode för .NET Betald Support Helpdesk" 
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://kb.aspose.com/"
resourcetitle="Kunskapsbas"
resourcealt="Kodprover"
resourceimg="/images/code1.svg"
resourcelistlink="https://kb.aspose.com/barcode/net/how-to-rotate-barcode-image-in-c-sharp/"
resourcelistlink2="https://kb.aspose.com/barcode/net/how-to-generate-barcode-image-in-csharp/"
resourcelistlink3="https://kb.aspose.com/barcode/net/how-to-convert-barcode-to-svg-in-csharp/"
resourcelisttext="Hur man roterar streckkodsbild i C#"
resourcelisttext2="Hur man genererar streckkodsbild i C#"
resourcelisttext3="Hur man konverterar streckkod till SVG i C#" 
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper 
rtsheading="Redo att komma igång?" 
rtstext="Ladda ner gratis provversion" 
rtslink="https://releases.aspose.com/" 
rtslink2="https://products.aspose.com" 
rtstext2="Visa alla API:er" 
>}}
