---
title: C# .NET Image Processing API til at manipulere og redigere billeder
description: .NET Image Processing API til at skabe, manipulere og redigere fotos i C#, ASP.NET eller VB.NET apps. Konverter billeder til PDF-, JPG-, PNG- og GIF-formater.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="C# .NET Image Processing API til at indlæse, manipulere og redigere fotos"
  inheadertext="Strømlin din billedbehandling ved hjælp af denne kraftfulde og funktionsrige .NET billedbehandlings-API. Opret, rediger og eksporter billeder programmatisk eller anvend hurtigt forskellige effekter og filtre på fotos. Du kan også konvertere dine billeder til PDF, JPG, PNG, GIF, SVG, PSD, BMP og andre formater."
  ctabtn="Download gratis prøveversion"
  ctabtn="Download gratis prøveversion"
  ctalink="https://releases.aspose.com/imaging/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Se alle API'er"
  bchomelink="/"
  bchome="Hjem"
  bcpage="Billedbehandling"
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
subnav5="https://purchase.aspose.com/pricing/imaging/net"
subnavtxt5="Prissætning" 
subbtn1="https://docs.aspose.com/imaging/net/"
subbtntxt1="Lære"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="Købe"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="Avanceret billedredigering og -manipulation i C# .NET"
   subtext="Aspose.Imaging for .NET er en robust og fleksibel billedbehandlings-API, der gør det muligt for C#-, ASP.NET- og VB.NET-udviklere at oprette, indlæse, redigere, manipulere og konvertere velkendte billedfilformater såsom JPG, PNG, GIF , BMP, TIFF, EMG, SVG og WebP blandt andre. Med et bredt spektrum af understøttede funktioner og udsøgte billedbehandlingsmuligheder er Aspose.Imaging for .NET den ideelle løsning for udviklere til at inkorporere billedmanipulationsfunktionalitet i deres .NET-apps."
   subtext2="Omdan dine billeder til gråtoner, juster lysstyrken og kontrasten af billeder, eller anvend andre effekter og filtre ved hjælp af denne .NET fotoredigering API. Det understøtter også programmatisk ændring af størrelse, komprimering, beskæring, afskrækkelse og fletning af billeder. Du kan konvertere de redigerede billeder til PDF, PSD, GIF, PNG, JPEG og andre filtyper. Denne billedbehandlings-API til .NET holder dig på toppen af dine behov for fotoredigering og -manipulation."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Kom godt i gang</h2>
   <p>Se venligst siden <a href="https://docs.aspose.com/imaging/net/system-requirements/">Systemkrav</a> for at kontrollere forudsætningerne for opsætning af .NET image API i din ende uden problemer.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}} 
{{< products/product-feature-blocks-col
featurecolheading="Aspose.Imaging til .NET-installation"
>}} 
<p>Download venligst DLL'erne eller MSI-installationsprogrammet fra <a href="https://releases.aspose.com/imaging/net/">downloadsektionen</a> for at installere .NET billedbehandlings-API'en. Alternativt kan du også bruge <a href="https://www.nuget.org/packages/Aspose.Imaging/">NuGet-pakken</a> til opsætning af API. Kommandoen til pakkehåndteringskonsollen findes nedenfor:</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp1"
>}} 
PM > Install-Package Aspose.Imaging 
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Sådan konverteres billeder i .NET og rotere eller vende et billede"
featuretext="Aspose.Imaging til .NET gør det muligt programmæssigt at konvertere billeder til forskellige filformater. Det giver .NET-udviklere mulighed for at konvertere velkendte raster- og vektorbilleder såsom PNG, JPG, BMP, GIF, TIFF, SVG, EPS, CDR, EMF og WebP. Du kan også vende og rotere billeder i dine .NET billedbehandlingsapps."
>}} 
{{< products/product-feature-blocks-col
featurecolheading="Konverter billeder til PDF, JPG, PNG og andre formater i .NET"
>}} 
<p>Ved hjælp af .NET billedbehandlings-API'en kan udviklere uden besvær konvertere billeder til PDF, JPG, PNG, BMP, GIF, SVG og andre formater. Konvertering af PNG til JPG er en populær billedkonverteringsmulighed, der hjælper med at transformere fotos eller scannede billeder fra et filformat til et andet. Aspose.Imaging til .NET-biblioteket tillader denne konvertering ved brug af minimumskodning. Tjek venligst følgende oplysninger for mere hjælp:</p>
<ul>
   <li>Indlæs kilde-PNG-filen ved hjælp af <a href="https://reference.aspose.com/imaging/net/aspose.imaging/image">Image</a>-klassen.</li>
   <li>Konverter PNG til JPG ved hjælp af Image.Save(streng, JpegOptions) metode.</li>
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
featurecolheading="Vend eller roter billeder i dine .NET billedbehandlingsapps"
>}} 
<p>Du kan udvide dine .NET billedmanipulationsapps ved at inkorporere fotoredigeringsfunktioner som f.eks. at vende og rotere billeder. Aspose.Imaging for .NET API lader dig rotere et billede 90, 180 og 270 grader ud over muligheden for at vende det vandret eller lodret. Nedenstående trin og C#-kodestykke giver mere hjælp:</p>
<ul>
   <li>Indlæs billedfilen ved hjælp af <a href="https://reference.aspose.com/imaging/net/aspose.imaging/image">Image</a>-klassen.</li>
   <li>Roter billedet 180 grader, og vend det vandret ved hjælp af <a href="https://reference.aspose.com/imaging/net/aspose.imaging/image/methods/rotateflip">Image.RotateFlip(RotateFlipType.Rotate180FlipX)</a> metode.</li>
   <li>Gem det opdaterede billede ved hjælp af <a href="https://reference.aspose.com/imaging/net/aspose.imaging.image/save/methods/3">Image.Save(string)</a>-metoden.</li>
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
   <p class="col-lg-12">For flere eksempler på Aspose.Imaging til .NET API, besøg venligst <a href="https://github.com/aspose-imaging/Aspose.Imaging-for-.NET/tree/master/Examples">GitHub Eksempler</a> side. Hvis du ønsker at konvertere, ændre størrelse, komprimere, vandmærke, rotere, vende, beskære, forskyde, redigere eller flette dine multi-formatbilleder på farten, så tjek venligst <a href="https://products.aspose.app/imaging/family">gratis online apps</a> af Aspose.Imaging.</p>
{{< products/product-feature-blocks
featureheading="Tilføj billedkomprimeringsevne til dine .NET billedmanipulationsapps"
featuretext="Aspose.Imaging til .NET gør det muligt at komprimere billeder for at hjælpe med at reducere størrelsen af billedfiler. De fremragende billedkomprimeringsalgoritmer i denne .NET billedbehandlings-API giver dig mulighed for at reducere filstørrelsen med 30 – 70 % uden at gå på kompromis med billedkvaliteten. På denne måde kan du effektivt gemme og overføre billedfiler uden at bekymre dig om filstørrelsen."
>}} 
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="FAQ"
>}} 
   {{< products/faq-block
 faqquery="1. Hvordan kan jeg konvertere billedfiler i .NET?"
 faqanswer="Konvertering af billeder såsom JPG, PNG, BMP, GIF, SVG, CDR, TIFF, EMF, EPS og måske mere i .NET er hurtigt og nemt ved at bruge Aspose.Imaging til .NET API. Kun et par linjer med .NET-kodning er nødvendige for at konvertere dine multi-format billeder til forskellige filformater."
>}} 
   {{< products/faq-block 
 faqquery="2. Hvor lang tid tager det at flette eller konvertere billeder?"
 faqanswer=".NET billedbehandlings-API'en fungerer hurtigt og fuldender dine billedkonverterings- og fusionsanmodninger på ingen tid."
>}} 
   {{< products/faq-block
 faqquery="3. Er det sikkert at behandle fotos og billeder ved hjælp af .NET API?"
 faqanswer="Du kan være sikker på sikkerheden af dine fotos og billeder, mens du behandler dem ved hjælp af Aspose.Imaging for .NET API. Vi sikrer privatlivets fred for dine data og træffer alle nødvendige foranstaltninger for at give dig en sikker brugeroplevelse."
>}} 
   {{< products/faq-block
 faqquery="4. Kan jeg behandle billedfiler på Mac OS, Windows eller Linux?"
 faqanswer="Ja, billedbehandlings-API'en til .NET fungerer på tværs af forskellige OS, frameworks og driftsmiljøer. Du kan bruge det på den platform, du vælger, og det kræver ikke nogen yderligere softwareinstallation for at fungere."
>}} 
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper 
   popularheading="Foto- og billedmanipulationsværktøjer"
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
 anchorlink="Flet JPG"
moreproducts="https://products.aspose.com/imaging/net/merge/jpg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Flet TIFF"
moreproducts="https://products.aspose.com/imaging/net/merge/tiff/"
>}}  
   {{< products/popularapp-anchor
 anchorlink="Flet PNG"
moreproducts="https://products.aspose.com/imaging/net/merge/png/"
>}} 
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Leder du efter hjælp?"
bartext="Tjek vores supportkanaler for at få hjælp til dine spørgsmål relateret til Aspose-produkt API-funktioner og arbejde."
 resourcetxt1="Docs"
 resourcelinks1="https://docs.aspose.com/imaging/net/"
 resourcetxt2="API-reference"
 resourcelinks2="https://reference.aspose.com/imaging/" 
 resourcetxt3="Vidensbase"
 resourcelinks3="https://kb.aspose.com/imaging/net/"
 resourcetxt4="Gratis support"
 resourcelinks4="https://forum.aspose.com/c/imaging/14"
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
 resourcelistlink="https://blog.aspose.com/imaging/draw-shapes-in-csharp/"
 resourcelistlink2="https://blog.aspose.com/imaging/blur-images-in-csharp/"
 resourcelistlink3="https://blog.aspose.com/imaging/adjust-image-contrast-brightness-gamma-csharp/"
 resourcelisttext="Tegn figurer i C# - Linjer, buer og rektangler"
 resourcelisttext2="Slør billeder programmatisk i C#"
 resourcelisttext3="Juster billedkontrakt, lysstyrke og gamma"
>}} 
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://docs.aspose.com/"
 resourcetitle="Dokumentation"
 resourcealt="Dokumentation"
 resourceimg="/img/docs1.svg"
 resourcelistlink="https://docs.aspose.com/imaging/net/features/"
 resourcelistlink2="https://www.nuget.org/packages/Aspose.Imaging/"
 resourcelistlink3="https://helpdesk.aspose.com/"
 resourcelisttext="Aspose.Imaging til .NET funktioner"
 resourcelisttext2="Installer Aspose.Imaging til .NET NuGet Package"
 resourcelisttext3="Aspose.Imaging for .NET Paid Support Helpdesk"
>}} 
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://kb.aspose.com/"
 resourcetitle="Vidensbase"
 resourcealt="Kodeprøver"
 resourceimg="/images/code1.svg"
 resourcelistlink="https://kb.aspose.com/imaging/net/how-to-compress-image-size-in-csharp/"
 resourcelistlink2="https://kb.aspose.com/imaging/net/how-to-draw-graphics-in-csharp/"
 resourcelistlink3="https://kb.aspose.com/imaging/net/how-to-resize-image-in-c-sharp/"
 resourcelisttext="Sådan komprimeres billedstørrelse i C#"
resourcelisttext2="Sådan tegner du grafik i C#"
resourcelisttext3="Sådan ændrer du størrelse på billede i C#"
>}} 
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Klar til at komme i gang?"
rtstext="Download gratis prøveversion"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="Se alle API'er"
>}} 
