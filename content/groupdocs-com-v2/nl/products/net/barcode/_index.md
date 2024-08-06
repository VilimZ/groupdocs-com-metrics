---
title: .NET Barcode API om barcodes te lezen, herkennen en genereren
description: Gebruik de C# .NET Barcode API voor het lezen, herkennen en genereren van 1D- en 2D-barcodes. Creëer QR-codegenerator of scanner-apps in ASP.NET & VB.NET.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle=".NET Barcode API om barcodes en QR-codes te lezen, herkennen en genereren"
  inheadertext="Genereer streepjescodes in .NET met ongeëvenaarde nauwkeurigheid en scan, lees en herken lineaire, 2D- en poststreepjescodes met verschillende symbolieken met behulp van de C# .NET-streepjescode-API. Het ondersteunt het scannen en detecteren van streepjescodes en QR-codes in JPG-, PNG-, GIF-, BMP- en TIFF-indelingen."
  ctabtn="Download gratis proefversie"
  ctabtn="Download gratis proefversie"
  ctalink="https://releases.aspose.com/barcode/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Bekijk alle API's"
  bchomelink="/"
  bchome="Thuis"
  bcpage="Streepjescode"
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
subnav5="https://purchase.aspose.com/pricing/barcode/net"
subnavtxt5="prijzen" 
subbtn1="https://docs.aspose.com/barcode/net/"
subbtntxt1="Leren"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="Kopen"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="Bouw apps voor streepjescodeherkenning en het genereren van QR-codes in C# .NET"
   subtext="Aspose.BarCode voor .NET is een hoogwaardige API voor het genereren en herkennen van streepjescodes waarmee .NET-ontwikkelaars verschillende soorten 1D (lineaire), 2D- en postbarcodes kunnen maken, scannen, lezen, detecteren en exporteren. Deze .NET-barcodegenerator-API biedt geweldige functies en biedt een onberispelijke nauwkeurigheid bij het lezen of scannen van de streepjescodeafbeeldingen in PNG-, BMP-, JPG-, GIF-, TIFF- en andere formaten. Bovendien kunt u de streepjescodes ook exporteren naar populaire rasterafbeeldingen of EMF- en SVG-vectorbestanden. Samen met de scanfuncties voor streepjescodes en QR-codes, kunt u met Aspose.BarCode voor .NET verschillende elementen van het uiterlijk van de streepjescode manipuleren, waaronder de beeldkwaliteit, bestandsgrootte, achtergrond- en balkkleur, beeldkwaliteit en resolutie, rotatiehoek, bijschriften en nog veel meer. meer."
   subtext2="Met behulp van de barcode-API voor .NET kunt u snel en eenvoudig QR-codescannerfunctionaliteit integreren in uw bestaande .NET-oplossingen voor barcodeverwerking of uitgebreide apps voor barcodeherkenning bouwen in C#, ASP.NET of VB.NET. Aspose.BarCode voor .NET-bibliotheek ondersteunt meer dan 50 lineaire, 2D- en postbarcodesymbolen zoals Code 128, Code 39 Extended, Data Matrix, QR Code, PDF 417 en Postnet."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Aan de slag</h2>
   <p>Controleer de vereisten op de pagina <a href="https://docs.aspose.com/barcode/net/system-requirements/">Systeemvereisten</a> voordat u de .NET-barcode-API aan uw kant instelt. om een soepele API-configuratie en gebruikerservaring te garanderen.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples">}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.BarCode voor .NET-installatie"
>}}
<p>Ga naar de <a href="https://releases.aspose.com/barcode/net/">downloadsectie</a> om de DLL's of het MSI-installatieprogramma van de .NET-API voor streepjescodeherkenning en -generatie rechtstreeks te downloaden. U kunt de API ook installeren met het <a href="https://www.nuget.org/packages/Aspose.BarCode/">NuGet-pakket</a>. Hieronder vindt u de opdracht voor de pakketbeheerderconsole:</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp1"
>}}
PM > Install-Package Aspose.BarCode 
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="QR-codes genereren in .NET en streepjescodes lezen van afbeeldingen"
featuretext="Met Aspose.BarCode voor .NET kunnen ontwikkelaars de mogelijkheid voor het genereren van QR-codes integreren in hun .NET-apps voor het verwerken van streepjescodes. Bovendien is het herkennen van verschillende soorten barcodes van PNG, JPEG, BMP en andere afbeeldingen ook mogelijk. U kunt meerdere typen streepjescodes uit hetzelfde afbeeldingsbestand scannen en lezen." 
>}}  
{{< products/product-feature-blocks-col
featurecolheading="Genereer snel QR-codes in .NET"
>}}
<p>De .NET barcode API ondersteunt het genereren van QR-codes met verschillende soorten codering. U kunt deze functionaliteit toevoegen aan uw toepassingen voor het manipuleren van streepjescodes en uw aanbod verder verbeteren. Controleer de volgende informatie en C#-codering om snel en eenvoudig QR-codes te genereren met Aspose.BarCode voor .NET-bibliotheek:</p>
<ul>
   <li>Instantiseer de klasse <a href="https://reference.aspose.com/barcode/net/aspose.barcode.generation/barcodegenerator">BarcodeGenerator</a> en specificeer de klasse <a href="https://reference.aspose.com/barcode/net/aspose.barcode.generation/encodetypes">EncodeType</a> en de invoertekst.</li>
   <li>Stel de QR-codeversie en het coderingstype in.</li>
   <li>Genereer en bewaar de QR Code-afbeelding in PNG-indeling.</li>
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
featurecolheading="Lees streepjescodes van afbeeldingen in .NET"
>}}
<p>Aspose.BarCode voor .NET API maakt het lezen van streepjescodes van verschillende symbologieën van PNG, JPEG, BMP, GIF en andere afbeeldingsbestandsindelingen gemakkelijker. Deze .NET-barcodeherkennings- en generatie-API ondersteunt scannen en lezen <a href="https://blog.aspose.com/barcode/read-barcode-from-image-in-csharp/#Read-Barcode-of-Multiple- Types-from-Image-in-CSharp">meerdere streepjescodes van dezelfde afbeelding</a>. Controleer de volgende informatie voor meer hulp:</p>
<ul>
   <li>Laad de bronstreepjescode-afbeelding met behulp van de klasse <a href="https://reference.aspose.com/barcode/net/aspose.barcode.barcoderecognition/barcodereader/">BarCodeReader</a>.</li>
   <li>Roep de methode <a href="https://reference.aspose.com/barcode/net/aspose.barcode.barcoderecognition/barcodereader/readbarcodes/">ReadBarCodes()</a> aan om herkenningsresultaten te krijgen in de <a href ="https://reference.aspose.com/barcode/net/aspose.barcode.barcoderecognition/barcoderesult/">BarCodeResult</a> klasse-object.</li>
   <li>Doorloop de verkregen resultaten en geef het type en de tekst van de streepjescode weer.</li>
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
   <p class="col-lg-12">Bezoek de pagina <a href="https://github.com/aspose-barcode/Aspose.BarCode-for-.NET/tree/master/Examples">GitHub-voorbeelden</a> voor meer werkende voorbeelden van het . NET-barcode-API. Als u 1D-, 2D- en postbarcodes of QR-codes direct wilt scannen, herkennen en genereren met uw mobiele apparaten, raadpleegt u de <a href="https://products.aspose.app/barcode/family ">gratis online apps</a> van Aspose.BarCode.</p>
{{< products/product-feature-blocks
featureheading="Eenvoudige integratie en geavanceerde bewerkingen"
featuretext="Aspose.BarCode voor .NET maakt supereenvoudige bewerkingen mogelijk waarbij slechts een paar regels .NET-codering nodig zijn om te beginnen met het genereren, lezen en herkennen van verschillende soorten streepjescodes. Als .NET-ontwikkelaar kunt u de .NET-barcodegenerator-API moeiteloos integreren met al uw .NET-apps. Een van de beste eigenschappen van deze bibliotheek is de mogelijkheid om beschadigde streepjescodes en QR-codes te lezen met behulp van ingewikkelde algoritmen en filtermechanismen, zodat u op de hoogte blijft van uw behoeften op het gebied van streepjescodeverwerking."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="FAQ"
   >}}
   {{< products/faq-block
   faqquery="1. Hoe kan ik barcodes genereren in .NET?"
   faqanswer="Het genereren van 1D-, 2D- en postbarcodes in .NET gaat snel en eenvoudig met Aspose.BarCode voor .NET API. Er zijn slechts een paar regels .NET-codering nodig om de barcode van het door u gewenste type te genereren." 
   >}}
   {{< products/faq-block
   faqquery="2. Hoe lang duurt het om streepjescodes te lezen of te genereren?"
   faqanswer="De .NET-API voor het herkennen en genereren van streepjescodes werkt snel en voltooit uw verzoeken in een mum van tijd." 
   >}}
   {{< products/faq-block
   faqquery="3. Is het veilig om bestanden te verwerken met de .NET API?"
   faqanswer="U kunt zeker zijn van de veiligheid van uw barcodebestanden terwijl u ze verwerkt met Aspose.BarCode for .NET API. We waarborgen de privacy van uw gegevens en nemen alle vereiste maatregelen om u een veilige gebruikerservaring te bieden." 
   >}}
   {{< products/faq-block
   faqquery="4. Kan ik streepjescodes herkennen en genereren op Mac OS, Windows of Linux?"
   faqanswer="Ja, de barcode-API voor .NET werkt in verschillende besturingssystemen, frameworks en besturingsomgevingen. U kunt het gebruiken op het platform van uw keuze en er is geen extra software-installatie nodig om te functioneren." 
   >}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="Tools voor het genereren en herkennen van streepjescodes"
   >}}
   {{< products/popularapp-anchor
anchorlink="Genereer PDF417-streepjescode"
moreproducts="https://products.aspose.com/barcode/net/generate/pdf417/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Genereer CODE39-streepjescode"
moreproducts="https://products.aspose.com/barcode/net/generate/code39/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Genereer CODE128 streepjescode"
moreproducts="https://products.aspose.com/barcode/net/generate/code128/"
>}} 
   {{< products/popularapp-anchor
anchorlink="QR-code genereren"
moreproducts="https://products.aspose.com/barcode/net/generate/qr/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Genereer POSTNET-streepjescode"
moreproducts="https://products.aspose.com/barcode/net/generate/postnet/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Genereer PLANET-streepjescode"
moreproducts="https://products.aspose.com/total/python-net/generate-barcode/planet/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Herken CODE39 Barcode"
moreproducts="https://products.aspose.com/barcode/net/recognize/code39/"
>}} 
   {{< products/popularapp-anchor
anchorlink="QR-code herkennen"
moreproducts="https://products.aspose.com/barcode/net/recognize/qr/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Herken de PDF417-streepjescode"
moreproducts="https://products.aspose.com/barcode/net/recognize/pdf417/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Herken POSTNET Barcode"
moreproducts="https://products.aspose.com/barcode/net/recognize/postnet/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Herken AZTEC Barcode"
moreproducts="https://products.aspose.com/barcode/net/recognize/aztec/"
>}}  
   {{< products/popularapp-anchor
anchorlink="Herken de ISBN-streepjescode"
moreproducts="https://products.aspose.com/barcode/net/recognize/isbn/"
>}}
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Op zoek naar hulp?"
bartext="Bekijk onze ondersteuningskanalen voor hulp bij uw vragen met betrekking tot Aspose-product-API-functies en -werking."
resourcetxt1="Docs"
resourcelinks1="https://docs.aspose.com/barcode/net/"
resourcetxt2="API-referentie"
resourcelinks2="https://reference.aspose.com/barcode/" 
resourcetxt3="Kennis basis"
resourcelinks3="https://kb.aspose.com/barcode/net/"
resourcetxt4="Gratis ondersteuning"
resourcelinks4="https://forum.aspose.com/c/barcode/13"
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
resourcelistlink="https://blog.aspose.com/barcode/generate-dotcode-barcodes/"
resourcelistlink2="https://blog.aspose.com/barcode/generate-hibc-lic-barcodes/"
resourcelistlink3="https://blog.aspose.com/barcode/read-barcode-from-multipage-tiff-in-csharp/"
resourcelisttext="Genereer DotCode-streepjescodes in C#"
resourcelisttext2="Genereer HIBC LIC-streepjescodes in C#"
resourcelisttext3="Lees streepjescode van TIFF-afbeelding met meerdere pagina's in C#" 
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://docs.aspose.com/"
resourcetitle="Documentatie"
resourcealt="Documentatie"
resourceimg="/img/docs1.svg"
resourcelistlink="https://docs.aspose.com/barcode/net/product-features/"
resourcelistlink2="https://www.nuget.org/packages/Aspose.BarCode/"
resourcelistlink3="https://helpdesk.aspose.com/"
resourcelisttext="Aspose.BarCode voor .NET-functies"
resourcelisttext2="Installeer Aspose.BarCode voor .NET NuGet-pakket"
resourcelisttext3="Aspose.BarCode voor .NET betaalde helpdesk" 
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://kb.aspose.com/"
resourcetitle="Kennis basis"
resourcealt="Codevoorbeelden"
resourceimg="/images/code1.svg"
resourcelistlink="https://kb.aspose.com/barcode/net/how-to-rotate-barcode-image-in-c-sharp/"
resourcelistlink2="https://kb.aspose.com/barcode/net/how-to-generate-barcode-image-in-csharp/"
resourcelistlink3="https://kb.aspose.com/barcode/net/how-to-convert-barcode-to-svg-in-csharp/"
resourcelisttext="Hoe de streepjescodeafbeelding in C # te roteren"
resourcelisttext2="Hoe een streepjescodeafbeelding te genereren in C #"
resourcelisttext3="Barcode converteren naar SVG in C#" 
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper 
rtsheading="klaar om te beginnen?" 
rtstext="Download gratis proefversie" 
rtslink="https://releases.aspose.com/" 
rtslink2="https://products.aspose.com" 
rtstext2="Bekijk alle API's" 
>}}
