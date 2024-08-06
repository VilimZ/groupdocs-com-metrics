---
title: C# .NET Image Processing API om foto's te manipuleren en te bewerken
description: .NET Image Processing API voor het maken, manipuleren en bewerken van foto's in C#-, ASP.NET- of VB.NET-apps. Converteer afbeeldingen naar PDF-, JPG-, PNG- en GIF-indelingen.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="C# .NET Image Processing API om foto's te laden, manipuleren en bewerken"
  inheadertext="Stroomlijn uw beeldverwerking met deze krachtige en feature-rijke .NET imaging API. Maak, wijzig en exporteer afbeeldingen programmatisch of pas snel verschillende effecten en filters toe op foto's. U kunt uw afbeeldingen ook converteren naar PDF, JPG, PNG, GIF, SVG, PSD, BMP en andere indelingen."
  ctabtn="Download gratis proefversie"
  ctabtn="Download gratis proefversie"
  ctalink="https://releases.aspose.com/imaging/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Bekijk alle API's"
  bchomelink="/"
  bchome="Thuis"
  bcpage="In beeld brengen"
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
subnav5="https://purchase.aspose.com/pricing/imaging/net"
subnavtxt5="prijzen" 
subbtn1="https://docs.aspose.com/imaging/net/"
subbtntxt1="Leren"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="Kopen"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="Geavanceerde fotobewerking en -manipulatie in C# .NET"
   subtext="Aspose.Imaging voor .NET is een robuuste en flexibele beeldverwerkings-API waarmee C#-, ASP.NET- en VB.NET-ontwikkelaars bekende afbeeldingsbestandsindelingen zoals JPG, PNG, GIF kunnen maken, laden, bewerken, manipuleren en converteren , BMP, TIFF, EMG, SVG en WebP onder andere. Met een breed spectrum aan ondersteunde functies en voortreffelijke beeldverwerkingsmogelijkheden, is Aspose.Imaging voor .NET de ideale oplossing voor ontwikkelaars om functionaliteit voor beeldmanipulatie in hun .NET-apps op te nemen."
   subtext2="Transformeer uw foto's naar grijstinten, pas de helderheid en het contrast van afbeeldingen aan of pas andere effecten en filters toe met behulp van deze .NET fotobewerkings-API. Het ondersteunt ook programmatisch formaat wijzigen, comprimeren, bijsnijden, rechtzetten en samenvoegen van afbeeldingen. U kunt de bewerkte afbeeldingen converteren naar PDF, PSD, GIF, PNG, JPEG en andere bestandstypen. Deze beeldverwerkings-API voor .NET houdt u op de hoogte van uw behoeften op het gebied van fotobewerking en -manipulatie."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Aan de slag</h2>
   <p>Bekijk de pagina <a href="https://docs.aspose.com/imaging/net/system-requirements/">Systeemvereisten</a> om de vereisten voor het instellen van de .NET image API aan uw kant te controleren probleemloos.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}} 
{{< products/product-feature-blocks-col
featurecolheading="Aspose.Imaging voor .NET-installatie"
>}} 
<p>Download de DLL's of het MSI-installatieprogramma van de <a href="https://releases.aspose.com/imaging/net/">downloadsectie</a> om de .NET API voor beeldverwerking te installeren. U kunt ook het <a href="https://www.nuget.org/packages/Aspose.Imaging/">NuGet-pakket</a> gebruiken om de API in te stellen. De opdracht voor de pakketbeheerconsole wordt hieronder gegeven:</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp1"
>}} 
PM > Install-Package Aspose.Imaging 
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Afbeeldingen converteren in .NET en een afbeelding roteren of spiegelen"
featuretext="Aspose.Imaging voor .NET maakt het programmatisch converteren van afbeeldingen naar verschillende bestandsindelingen mogelijk. Hiermee kunnen .NET-ontwikkelaars bekende raster- en vectorafbeeldingen zoals PNG, JPG, BMP, GIF, TIFF, SVG, EPS, CDR, EMF en WebP converteren. U kunt ook afbeeldingen spiegelen en roteren binnen uw .NET-apps voor beeldverwerking."
>}} 
{{< products/product-feature-blocks-col
featurecolheading="Converteer afbeeldingen naar PDF, JPG, PNG en andere formaten in .NET"
>}} 
<p>Met behulp van de .NET imaging API kunnen ontwikkelaars moeiteloos afbeeldingen converteren naar PDF, JPG, PNG, BMP, GIF, SVG en andere indelingen. Het converteren van PNG naar JPG is een populaire optie voor het converteren van afbeeldingen om foto's of gescande afbeeldingen van het ene bestandsformaat naar het andere te transformeren. Aspose.Imaging voor .NET-bibliotheek maakt deze conversie mogelijk met minimale codering. Controleer de volgende informatie voor meer hulp:</p>
<ul>
   <li>Laad het PNG-bronbestand met behulp van de klasse <a href="https://reference.aspose.com/imaging/net/aspose.imaging/image">Image</a>.</li>
   <li>Converteer PNG naar JPG met de methode Image.Save(string, JpegOptions).</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp2"
>}} 
// Load the PNG image
using (Image image = Image.Load("test.png"))
{              
    // Save the image as JPG
    image.Save("PNG-to-JPG.jpg", new JpegOptions());
}
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks-col
featurecolheading="Draai of spiegel afbeeldingen in uw .NET Image Processing Apps"
>}} 
<p>U kunt uw .NET-apps voor beeldmanipulatie uitbreiden door functies voor het bewerken van foto's op te nemen, zoals het spiegelen en roteren van afbeeldingen. Met Aspose.Imaging voor .NET API kunt u een afbeelding 90, 180 en 270 graden draaien, naast de mogelijkheid om deze horizontaal of verticaal om te draaien. De onderstaande stappen en het C#-codefragment bieden meer hulp:</p>
<ul>
   <li>Laad het afbeeldingsbestand met behulp van de klasse <a href="https://reference.aspose.com/imaging/net/aspose.imaging/image">Image</a>.</li>
   <li>Draai de afbeelding 180 graden en spiegel hem horizontaal met behulp van <a href="https://reference.aspose.com/imaging/net/aspose.imaging/image/methods/rotateflip">Image.RotateFlip(RotateFlipType.Rotate180FlipX)</a> methode.</li>
   <li>Sla de bijgewerkte afbeelding op met de methode <a href="https://reference.aspose.com/imaging/net/aspose.imaging.image/save/methods/3">Image.Save(string)</a>.</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp3"
>}} 
// Load an image in an instance of Image
using (Image image = Image.Load("image.bmp"))
{
    // Rotate and flip the image
    image.RotateFlip(RotateFlipType.Rotate180FlipX);
    // Save the processed image
    image.Save("image-rotated-flipped.bmp");
}
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< /products/product-feature-blocks >}}
   <p class="col-lg-12">Ga voor meer werkende voorbeelden van Aspose.Imaging voor .NET API naar <a href="https://github.com/aspose-imaging/Aspose.Imaging-for-.NET/tree/master/Examples">GitHub Voorbeelden</a> pagina. Als u uw afbeeldingen in meerdere indelingen direct wilt converteren, vergroten of verkleinen, comprimeren, van een watermerk voorzien, roteren, spiegelen, bijsnijden, rechttrekken, bewerken of samenvoegen, raadpleegt u de <a href="https://products.aspose.app/imaging/family">gratis online apps</a> van Aspose.Imaging.</p>
{{< products/product-feature-blocks
featureheading="Voeg mogelijkheden voor beeldcompressie toe aan uw .NET-apps voor beeldmanipulatie"
featuretext="Met Aspose.Imaging voor .NET kunnen afbeeldingen worden gecomprimeerd om de grootte van afbeeldingsbestanden te verkleinen. Dankzij de uitstekende algoritmen voor beeldcompressie van deze .NET-beeldvormings-API kunt u de bestandsgrootte met 30 – 70% verkleinen zonder dat dit ten koste gaat van de beeldkwaliteit. Op deze manier kunt u afbeeldingsbestanden efficiënt opslaan en overbrengen zonder u zorgen te hoeven maken over de bestandsgrootte."
>}} 
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="FAQ"
>}} 
   {{< products/faq-block
 faqquery="1. Hoe kan ik afbeeldingsbestanden converteren naar .NET?"
 faqanswer="Het converteren van afbeeldingen zoals JPG, PNG, BMP, GIF, SVG, CDR, TIFF, EMF, EPS en nog veel meer in .NET gaat snel en eenvoudig met Aspose.Imaging voor .NET API. Er zijn slechts een paar regels .NET-codering nodig om uw afbeeldingen met meerdere indelingen naar verschillende bestandsindelingen te converteren."
>}} 
   {{< products/faq-block 
 faqquery="2. Hoe lang duurt het om afbeeldingen samen te voegen of te converteren?"
 faqanswer="De .NET beeldverwerkings-API werkt snel en voltooit uw beeldconversie- en fusieverzoeken in een mum van tijd."
>}} 
   {{< products/faq-block
 faqquery="3. Is het veilig om foto's en afbeeldingen te verwerken met de .NET API?"
 faqanswer="U kunt zeker zijn van de veiligheid van uw foto's en afbeeldingen terwijl u ze verwerkt met Aspose.Imaging for .NET API. We waarborgen de privacy van uw gegevens en nemen alle vereiste maatregelen om u een veilige gebruikerservaring te bieden."
>}} 
   {{< products/faq-block
 faqquery="4. Kan ik afbeeldingsbestanden verwerken op Mac OS, Windows of Linux?"
 faqanswer="Ja, de imaging API voor .NET werkt in verschillende besturingssystemen, frameworks en besturingsomgevingen. U kunt het gebruiken op het platform van uw keuze en er is geen extra software-installatie nodig om te functioneren."
>}} 
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper 
   popularheading="Tools voor foto- en beeldmanipulatie"
>}} 
   {{< products/popularapp-anchor
 anchorlink="JPEG naar PDF"
moreproducts="https://products.aspose.com/imaging/en/net/conversion/jpeg-to-PDF/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PNG naar PDF"
moreproducts="https://products.aspose.com/imaging/en/net/conversion/png-to-PDF/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="SVG naar PDF"
moreproducts="https://products.aspose.com/imaging/en/net/conversion/svg-to-PDF/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="JPEG naar PSD"
moreproducts="https://products.aspose.com/imaging/net/conversion/jpeg-to-psd/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="SVG naar JPEG"
moreproducts="https://products.aspose.com/imaging/en/net/conversion/SVG-to-jpeg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="BMP naar WEBP"
moreproducts="https://products.aspose.com/imaging/net/conversion/bmp-to-webp/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="GIF naar SVG"
moreproducts="https://products.aspose.com/imaging/net/conversion/gif-to-svg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="GIF naar JPEG"
moreproducts="https://products.aspose.com/imaging/net/conversion/gif-to-jpeg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="CDR naar PNG"
moreproducts="https://products.aspose.com/imaging/net/conversion/cdr-to-png/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="JPG samenvoegen"
moreproducts="https://products.aspose.com/imaging/net/merge/jpg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="TIFF samenvoegen"
moreproducts="https://products.aspose.com/imaging/net/merge/tiff/"
>}}  
   {{< products/popularapp-anchor
 anchorlink="PNG samenvoegen"
moreproducts="https://products.aspose.com/imaging/net/merge/png/"
>}} 
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Op zoek naar hulp?"
bartext="Bekijk onze ondersteuningskanalen voor hulp bij uw vragen met betrekking tot Aspose-product-API-functies en -werking."
 resourcetxt1="Docs"
 resourcelinks1="https://docs.aspose.com/imaging/net/"
 resourcetxt2="API-referentie"
 resourcelinks2="https://reference.aspose.com/imaging/" 
 resourcetxt3="Kennis basis"
 resourcelinks3="https://kb.aspose.com/imaging/net/"
 resourcetxt4="Gratis ondersteuning"
 resourcelinks4="https://forum.aspose.com/c/imaging/14"
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
 resourcelistlink="https://blog.aspose.com/imaging/draw-shapes-in-csharp/"
 resourcelistlink2="https://blog.aspose.com/imaging/blur-images-in-csharp/"
 resourcelistlink3="https://blog.aspose.com/imaging/adjust-image-contrast-brightness-gamma-csharp/"
 resourcelisttext="Vormen tekenen in C# - Lijnen, bogen en rechthoeken"
 resourcelisttext2="Afbeeldingen programmatisch vervagen in C#"
 resourcelisttext3="Pas het beeldcontract, de helderheid en het gamma aan"
>}} 
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://docs.aspose.com/"
 resourcetitle="Documentatie"
 resourcealt="Documentatie"
 resourceimg="/img/docs1.svg"
 resourcelistlink="https://docs.aspose.com/imaging/net/features/"
 resourcelistlink2="https://www.nuget.org/packages/Aspose.Imaging/"
 resourcelistlink3="https://helpdesk.aspose.com/"
 resourcelisttext="Aspose.Imaging voor .NET-functies"
 resourcelisttext2="Installeer Aspose.Imaging voor .NET NuGet-pakket"
 resourcelisttext3="Aspose.Imaging voor .NET betaalde helpdesk"
>}} 
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://kb.aspose.com/"
 resourcetitle="Kennis basis"
 resourcealt="Codevoorbeelden"
 resourceimg="/images/code1.svg"
 resourcelistlink="https://kb.aspose.com/imaging/net/how-to-compress-image-size-in-csharp/"
 resourcelistlink2="https://kb.aspose.com/imaging/net/how-to-draw-graphics-in-csharp/"
 resourcelistlink3="https://kb.aspose.com/imaging/net/how-to-resize-image-in-c-sharp/"
 resourcelisttext="Hoe de afbeeldingsgrootte in C # te comprimeren"
resourcelisttext2="Afbeeldingen tekenen in C#"
resourcelisttext3="Hoe het formaat van een afbeelding in C # te wijzigen"
>}} 
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="klaar om te beginnen?"
rtstext="Download gratis proefversie"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="Bekijk alle API's"
>}} 
