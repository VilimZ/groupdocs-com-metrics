---
title: C# .NET Image Processing API for å manipulere og redigere bilder
description: .NET Image Processing API for å lage, manipulere og redigere bilder i C#-, ASP.NET- eller VB.NET-apper. Konverter bilder til PDF-, JPG-, PNG- og GIF-formater.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="C# .NET Image Processing API for å laste, manipulere og redigere bilder"
  inheadertext="Strømlinjeform bildebehandlingen ved å bruke dette kraftige og funksjonsrike .NET bildebehandlings-API. Lag, modifiser og eksporter bilder programmatisk eller bruk raskt forskjellige effekter og filtre på bilder. Du kan også konvertere bildene dine til PDF, JPG, PNG, GIF, SVG, PSD, BMP og andre formater."
  ctabtn="Last ned gratis prøveversjon"
  ctabtn="Last ned gratis prøveversjon"
  ctalink="https://releases.aspose.com/imaging/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Se alle APIer"
  bchomelink="/"
  bchome="Hjem"
  bcpage="Bildebehandling"
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
subnav5="https://purchase.aspose.com/pricing/imaging/net"
subnavtxt5="Prissetting" 
subbtn1="https://docs.aspose.com/imaging/net/"
subbtntxt1="Lære"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="Kjøpe"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="Avansert bilderedigering og manipulering i C# .NET"
   subtext="Aspose.Imaging for .NET er et robust og fleksibelt bildebehandlings-API som gjør det mulig for C#-, ASP.NET- og VB.NET-utviklere å lage, laste, redigere, manipulere og konvertere kjente bildefilformater som JPG, PNG, GIF , BMP, TIFF, EMG, SVG og WebP blant andre. Med et bredt spekter av støttede funksjoner og utsøkte bildebehandlingsmuligheter, er Aspose.Imaging for .NET den ideelle løsningen for utviklere for å inkorporere bildemanipuleringsfunksjonalitet i .NET-appene sine."
   subtext2="Forvandle bildene dine til gråtoner, juster lysstyrken og kontrasten til bildene, eller bruk andre effekter og filtre ved hjelp av denne .NET fotoredigerings-API. Den støtter også programmatisk endring av størrelse, komprimering, beskjæring, skråstilling og sammenslåing av bilder. Du kan konvertere de redigerte bildene til PDF, PSD, GIF, PNG, JPEG og andre filtyper. Dette bildebehandlings-APIet for .NET holder deg på toppen av dine behov for bilderedigering og manipulering."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Starter</h2>
   <p>Gå gjennom siden <a href="https://docs.aspose.com/imaging/net/system-requirements/">Systemkrav</a> for å sjekke forutsetningene for å konfigurere .NET image API på din side uten problemer.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}} 
{{< products/product-feature-blocks-col
featurecolheading="Aspose.Imaging for .NET-installasjon"
>}} 
<p>Last ned DLL-ene eller MSI-installasjonsprogrammet fra <a href="https://releases.aspose.com/imaging/net/">nedlastingsdelen</a> for å installere .NET bildebehandlings-API. Alternativt kan du også bruke <a href="https://www.nuget.org/packages/Aspose.Imaging/">NuGet-pakken</a> for å sette opp API. Kommandoen for pakkebehandlingskonsollen er gitt nedenfor:</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp1"
>}} 
PM > Install-Package Aspose.Imaging 
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Hvordan konvertere bilder i .NET og rotere eller snu et bilde"
featuretext="Aspose.Imaging for .NET muliggjør programmatisk konvertering av bilder til forskjellige filformater. Den lar .NET-utviklere konvertere kjente raster- og vektorbilder som PNG, JPG, BMP, GIF, TIFF, SVG, EPS, CDR, EMF og WebP. Du kan også snu og rotere bilder i .NET bildebehandlingsappene dine."
>}} 
{{< products/product-feature-blocks-col
featurecolheading="Konverter bilder til PDF, JPG, PNG og andre formater i .NET"
>}} 
<p>Ved hjelp av .NET Imaging API kan utviklere enkelt konvertere bilder til PDF, JPG, PNG, BMP, GIF, SVG og andre formater. Konvertering av PNG til JPG er et populært bildekonverteringsalternativ for å hjelpe til med å transformere bilder eller skannede bilder fra ett filformat til et annet. Aspose.Imaging for .NET-biblioteket tillater denne konverteringen ved å bruke minimumskoding. Vennligst sjekk følgende informasjon for mer hjelp:</p>
<ul>
   <li>Last inn kilde-PNG-filen ved å bruke <a href="https://reference.aspose.com/imaging/net/aspose.imaging/image">Image</a>-klassen.</li>
   <li>Konverter PNG til JPG ved å bruke Image.Save(streng, JpegOptions)-metoden.</li>
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
featurecolheading="Vend eller roter bilder i .NET bildebehandlingsappene dine"
>}} 
<p>Du kan utvide .NET-bildemanipuleringsappene dine ved å inkludere bilderedigeringsfunksjoner som å snu og rotere bilder. Aspose.Imaging for .NET API lar deg rotere et bilde 90, 180 og 270 grader i tillegg til muligheten til å snu det horisontalt eller vertikalt. Trinnene nedenfor og C#-kodebiten gir mer hjelp:</p>
<ul>
   <li>Last inn bildefilen ved å bruke <a href="https://reference.aspose.com/imaging/net/aspose.imaging/image">Bilde</a>-klassen.</li>
   <li>Roter bildet 180 grader og snu det horisontalt med <a href="https://reference.aspose.com/imaging/net/aspose.imaging/image/methods/rotateflip">Image.RotateFlip(RotateFlipType.Rotate180FlipX)</a>-metoden.</li>
   <li>Lagre det oppdaterte bildet ved å bruke <a href="https://reference.aspose.com/imaging/net/aspose.imaging.image/save/methods/3">Image.Save(string)</a>-metoden.</li>
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
   <p class="col-lg-12">For flere fungerende eksempler på Aspose.Imaging for .NET API, besøk <a href="https://github.com/aspose-imaging/Aspose.Imaging-for-.NET/tree/master/Examples">GitHub Eksempler</a>-siden. Hvis du ønsker å konvertere, endre størrelse, komprimere, vannmerke, rotere, vende, beskjære, forskyve, redigere eller slå sammen multiformatbildene dine umiddelbart, vennligst sjekk <a href="https://products.aspose.app/imaging/family">gratis nettapper</a> av Aspose.Imaging.</p>
{{< products/product-feature-blocks
featureheading="Legg til bildekomprimeringsevne til .NET-bildemanipuleringsappene dine"
featuretext="Aspose.Imaging for .NET gjør det mulig å komprimere bilder for å redusere størrelsen på bildefiler. De utmerkede bildekomprimeringsalgoritmene til dette .NET bildebehandlings-APIet lar deg redusere filstørrelsen med 30 – 70 % uten at det går på bekostning av bildekvaliteten. På denne måten kan du effektivt lagre og overføre bildefiler uten å bekymre deg for filstørrelsen."
>}} 
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="FAQ"
>}} 
   {{< products/faq-block
 faqquery="1. Hvordan kan jeg konvertere bildefiler i .NET?"
 faqanswer="Konvertering av bilder som JPG, PNG, BMP, GIF, SVG, CDR, TIFF, EMF, EPS og kanskje mer i .NET er raskt og enkelt ved å bruke Aspose.Imaging for .NET API. Bare noen få linjer med .NET-koding er nødvendig for å konvertere multiformatbildene dine til forskjellige filformater."
>}} 
   {{< products/faq-block 
 faqquery="2. Hvor lang tid tar det å slå sammen eller konvertere bilder?"
 faqanswer=".NET-bildebehandlings-APIet fungerer raskt og fullfører forespørslene om bildekonvertering og sammenslåing på kort tid."
>}} 
   {{< products/faq-block
 faqquery="3. Er det trygt å behandle bilder og bilder ved hjelp av .NET API?"
 faqanswer="Du kan være sikker på sikkerheten til bildene og bildene dine mens du behandler dem ved hjelp av Aspose.Imaging for .NET API. Vi sikrer personvernet til dataene dine og tar alle nødvendige tiltak for å gi deg en sikker brukeropplevelse."
>}} 
   {{< products/faq-block
 faqquery="4. Kan jeg behandle bildefiler på Mac OS, Windows eller Linux?"
 faqanswer="Ja, bildebehandlings-APIet for .NET fungerer på tvers av forskjellige operativsystemer, rammeverk og driftsmiljøer. Du kan bruke den på plattformen du ønsker, og den krever ingen ekstra programvareinstallasjon for å fungere."
>}} 
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper 
   popularheading="Verktøy for bilde- og bildemanipulering"
>}} 
   {{< products/popularapp-anchor
 anchorlink="JPEG til PDF"
moreproducts="https://products.aspose.com/imaging/en/net/conversion/jpeg-to-PDF/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PNG til PDF"
moreproducts="https://products.aspose.com/imaging/en/net/conversion/png-to-PDF/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="SVG til PDF"
moreproducts="https://products.aspose.com/imaging/en/net/conversion/svg-to-PDF/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="JPEG til PSD"
moreproducts="https://products.aspose.com/imaging/net/conversion/jpeg-to-psd/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="SVG til JPEG"
moreproducts="https://products.aspose.com/imaging/en/net/conversion/SVG-to-jpeg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="BMP til WEBP"
moreproducts="https://products.aspose.com/imaging/net/conversion/bmp-to-webp/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="GIF til SVG"
moreproducts="https://products.aspose.com/imaging/net/conversion/gif-to-svg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="GIF til JPEG"
moreproducts="https://products.aspose.com/imaging/net/conversion/gif-to-jpeg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="CDR til PNG"
moreproducts="https://products.aspose.com/imaging/net/conversion/cdr-to-png/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Slå sammen JPG"
moreproducts="https://products.aspose.com/imaging/net/merge/jpg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Slå sammen TIFF"
moreproducts="https://products.aspose.com/imaging/net/merge/tiff/"
>}}  
   {{< products/popularapp-anchor
 anchorlink="Slå sammen PNG"
moreproducts="https://products.aspose.com/imaging/net/merge/png/"
>}} 
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Leter du etter hjelp?"
bartext="Ta en titt på støttekanalene våre for å få hjelp med spørsmål knyttet til Aspose-produktets API-funksjoner og arbeid."
 resourcetxt1="Docs"
 resourcelinks1="https://docs.aspose.com/imaging/net/"
 resourcetxt2="API-referanse"
 resourcelinks2="https://reference.aspose.com/imaging/" 
 resourcetxt3="Kunnskapsbase"
 resourcelinks3="https://kb.aspose.com/imaging/net/"
 resourcetxt4="Gratis støtte"
 resourcelinks4="https://forum.aspose.com/c/imaging/14"
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
 resourcelistlink="https://blog.aspose.com/imaging/draw-shapes-in-csharp/"
 resourcelistlink2="https://blog.aspose.com/imaging/blur-images-in-csharp/"
 resourcelistlink3="https://blog.aspose.com/imaging/adjust-image-contrast-brightness-gamma-csharp/"
 resourcelisttext="Tegn former i C# - Linjer, buer og rektangler"
 resourcelisttext2="Uskarp bilder programmatisk i C#"
 resourcelisttext3="Juster bildekontrakt, lysstyrke og gamma"
>}} 
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://docs.aspose.com/"
 resourcetitle="Dokumentasjon"
 resourcealt="Dokumentasjon"
 resourceimg="/img/docs1.svg"
 resourcelistlink="https://docs.aspose.com/imaging/net/features/"
 resourcelistlink2="https://www.nuget.org/packages/Aspose.Imaging/"
 resourcelistlink3="https://helpdesk.aspose.com/"
 resourcelisttext="Aspose.Imaging for .NET-funksjoner"
 resourcelisttext2="Installer Aspose.Imaging for .NET NuGet Package"
 resourcelisttext3="Aspose.Imaging for .NET Paid Support Helpdesk"
>}} 
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://kb.aspose.com/"
 resourcetitle="Kunnskapsbase"
 resourcealt="Kodeeksempler"
 resourceimg="/images/code1.svg"
 resourcelistlink="https://kb.aspose.com/imaging/net/how-to-compress-image-size-in-csharp/"
 resourcelistlink2="https://kb.aspose.com/imaging/net/how-to-draw-graphics-in-csharp/"
 resourcelistlink3="https://kb.aspose.com/imaging/net/how-to-resize-image-in-c-sharp/"
 resourcelisttext="Hvordan komprimere bildestørrelse i C#"
resourcelisttext2="Hvordan tegne grafikk i C#"
resourcelisttext3="Hvordan endre størrelse på bilde i C#"
>}} 
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Klar til å komme i gang?"
rtstext="Last ned gratis prøveversjon"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="Se alle APIer"
>}} 
