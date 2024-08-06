---
title: C# .NET Image Processing API för att manipulera och redigera foton
description: .NET Image Processing API för att skapa, manipulera och redigera foton i C#-, ASP.NET- eller VB.NET-appar. Konvertera bilder till PDF-, JPG-, PNG- och GIF-format.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="C# .NET Image Processing API för att ladda, manipulera och redigera foton"
  inheadertext="Effektivisera din bildbehandling med detta kraftfulla och funktionsrika .NET-bildbehandlings-API. Skapa, modifiera och exportera bilder programmatiskt eller använd snabbt olika effekter och filter på foton. Du kan också konvertera dina bilder till PDF, JPG, PNG, GIF, SVG, PSD, BMP och andra format."
  ctabtn="Ladda ner gratis provversion"
  ctabtn="Ladda ner gratis provversion"
  ctalink="https://releases.aspose.com/imaging/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Visa alla API:er"
  bchomelink="/"
  bchome="Hem"
  bcpage="Avbildning"
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
subnav5="https://purchase.aspose.com/pricing/imaging/net"
subnavtxt5="Prissättning" 
subbtn1="https://docs.aspose.com/imaging/net/"
subbtntxt1="Lära sig"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="köpa"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="Avancerad fotoredigering och manipulation i C# .NET"
   subtext="Aspose.Imaging for .NET är ett robust och flexibelt bildbehandlings-API som gör det möjligt för C#-, ASP.NET- och VB.NET-utvecklare att skapa, ladda, redigera, manipulera och konvertera välkända bildfilformat som JPG, PNG, GIF , BMP, TIFF, EMG, SVG och WebP bland andra. Med ett brett spektrum av funktioner som stöds och utsökta bildbehandlingsmöjligheter är Aspose.Imaging för .NET den idealiska lösningen för utvecklare att integrera bildmanipuleringsfunktioner i sina .NET-appar."
   subtext2="Förvandla dina foton till gråskala, justera ljusstyrkan och kontrasten på bilder eller använd andra effekter och filter med hjälp av detta .NET fotoredigerings-API. Det stöder också programmatiskt storleksändring, komprimering, beskärning, snedställning och sammanfogning av bilder. Du kan konvertera de redigerade bilderna till PDF, PSD, GIF, PNG, JPEG och andra filtyper. Detta bildbehandlings-API för .NET håller dig uppdaterad om dina fotoredigerings- och manipuleringsbehov."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Komma igång</h2>
   <p>Gå igenom sidan <a href="https://docs.aspose.com/imaging/net/system-requirements/">Systemkrav</a> för att kontrollera förutsättningarna för att ställa in .NET image API vid din sida utan problem.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}} 
{{< products/product-feature-blocks-col
featurecolheading="Aspose.Imaging för .NET-installation"
>}} 
<p>Ladda ner DLL-filerna eller MSI-installationsprogrammet från <a href="https://releases.aspose.com/imaging/net/">nedladdningssektionen</a> för att installera .NET-bildbehandlings-API:et. Alternativt kan du också använda <a href="https://www.nuget.org/packages/Aspose.Imaging/">NuGet-paketet</a> för att ställa in API:et. Kommandot för pakethanterarens konsol finns nedan:</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp1"
>}} 
PM > Install-Package Aspose.Imaging 
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Hur man konverterar bilder i .NET och roterar eller vänder en bild"
featuretext="Aspose.Imaging för .NET möjliggör programmatisk konvertering av bilder till olika filformat. Det låter .NET-utvecklare konvertera välkända raster- och vektorbilder som PNG, JPG, BMP, GIF, TIFF, SVG, EPS, CDR, EMF och WebP. Du kan också vända och rotera bilder i dina .NET-bildbehandlingsappar."
>}} 
{{< products/product-feature-blocks-col
featurecolheading="Konvertera bilder till PDF, JPG, PNG och andra format i .NET"
>}} 
<p>Med hjälp av .NET imaging API kan utvecklare enkelt konvertera bilder till PDF, JPG, PNG, BMP, GIF, SVG och andra format. Att konvertera PNG till JPG är ett populärt bildkonverteringsalternativ som hjälper dig att omvandla foton eller skannade bilder från ett filformat till ett annat. Aspose.Imaging för .NET-bibliotek tillåter denna konvertering med minimal kodning. Kontrollera följande information för mer hjälp:</p>
<ul>
   <li>Ladda käll-PNG-filen med klassen <a href="https://reference.aspose.com/imaging/net/aspose.imaging/image">Image</a>.</li>
   <li>Konvertera PNG till JPG med metoden Image.Save(string, JpegOptions).</li>
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
featurecolheading="Vänd eller rotera bilder i dina .NET-bildbehandlingsappar"
>}} 
<p>Du kan utöka dina .NET-appar för bildmanipulation genom att inkludera fotoredigeringsfunktioner som att vända och rotera bilder. Aspose.Imaging för .NET API låter dig rotera en bild med 90, 180 och 270 grader utöver möjligheten att vända den horisontellt eller vertikalt. De nedan givna stegen och C#-kodavsnittet ger mer hjälp:</p>
<ul>
   <li>Ladda bildfilen med klassen <a href="https://reference.aspose.com/imaging/net/aspose.imaging/image">Bild</a>.</li>
   <li>Rotera bilden 180 grader och vänd den horisontellt med <a href="https://reference.aspose.com/imaging/net/aspose.imaging/image/methods/rotateflip">Image.RotateFlip(RotateFlipType.Rotate180FlipX)</a>-metoden.</li>
   <li>Spara den uppdaterade bilden med metoden <a href="https://reference.aspose.com/imaging/net/aspose.imaging.image/save/methods/3">Image.Save(string)</a>.</li>
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
   <p class="col-lg-12">För fler fungerande exempel på Aspose.Imaging för .NET API, besök <a href="https://github.com/aspose-imaging/Aspose.Imaging-for-.NET/tree/master/Examples">GitHub Exempel</a> sida. Om du vill konvertera, ändra storlek, komprimera, vattenstämpla, rotera, vända, beskära, förvränga, redigera eller slå samman dina multiformatbilder i farten, kolla in <a href="https://products.aspose.app/imaging/family">gratis onlineappar</a> från Aspose.Imaging.</p>
{{< products/product-feature-blocks
featureheading="Lägg till bildkomprimeringsmöjlighet till dina .NET-appar för bildmanipulering"
featuretext="Aspose.Imaging för .NET tillåter komprimering av bilder för att minska storleken på bildfiler. De utmärkta bildkomprimeringsalgoritmerna i detta .NET-bildbehandlings-API låter dig minska filstorleken med 30–70 % utan att kompromissa med bildkvaliteten. På så sätt kan du effektivt lagra och överföra bildfiler utan att behöva oroa dig för filstorleken."
>}} 
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="FAQ"
>}} 
   {{< products/faq-block
 faqquery="1. Hur kan jag konvertera bildfiler i .NET?"
 faqanswer="Att konvertera bilder som JPG, PNG, BMP, GIF, SVG, CDR, TIFF, EMF, EPS och kanske mer i .NET är snabbt och enkelt med Aspose.Imaging för .NET API. Endast några rader med .NET-kodning behövs för att konvertera dina flerformatsbilder till olika filformat."
>}} 
   {{< products/faq-block 
 faqquery="2. Hur lång tid tar det att slå samman eller konvertera bilder?"
 faqanswer=".NET-bildbehandlings-API:et fungerar snabbt och slutför dina bildkonverterings- och sammanslagningsförfrågningar på nolltid."
>}} 
   {{< products/faq-block
 faqquery="3. Är det säkert att bearbeta foton och bilder med .NET API?"
 faqanswer="Du kan vara säker på säkerheten för dina foton och bilder medan du bearbetar dem med Aspose.Imaging för .NET API. Vi säkerställer integriteten för dina uppgifter och vidtar alla nödvändiga åtgärder för att ge dig en säker användarupplevelse."
>}} 
   {{< products/faq-block
 faqquery="4. Kan jag bearbeta bildfiler på Mac OS, Windows eller Linux?"
 faqanswer="Ja, bildbehandlings-API:et för .NET fungerar över olika operativsystem, ramverk och operativa miljöer. Du kan använda den på den plattform du väljer och den kräver ingen ytterligare programvaruinstallation för att fungera."
>}} 
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper 
   popularheading="Foto- och bildmanipuleringsverktyg"
>}} 
   {{< products/popularapp-anchor
 anchorlink="JPEG till PDF"
moreproducts="https://products.aspose.com/imaging/en/net/conversion/jpeg-to-PDF/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PNG till PDF"
moreproducts="https://products.aspose.com/imaging/en/net/conversion/png-to-PDF/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="SVG till PDF"
moreproducts="https://products.aspose.com/imaging/en/net/conversion/svg-to-PDF/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="JPEG till PSD"
moreproducts="https://products.aspose.com/imaging/net/conversion/jpeg-to-psd/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="SVG till JPEG"
moreproducts="https://products.aspose.com/imaging/en/net/conversion/SVG-to-jpeg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="BMP till WEBP"
moreproducts="https://products.aspose.com/imaging/net/conversion/bmp-to-webp/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="GIF till SVG"
moreproducts="https://products.aspose.com/imaging/net/conversion/gif-to-svg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="GIF till JPEG"
moreproducts="https://products.aspose.com/imaging/net/conversion/gif-to-jpeg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="CDR till PNG"
moreproducts="https://products.aspose.com/imaging/net/conversion/cdr-to-png/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Slå samman JPG"
moreproducts="https://products.aspose.com/imaging/net/merge/jpg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Slå samman TIFF"
moreproducts="https://products.aspose.com/imaging/net/merge/tiff/"
>}}  
   {{< products/popularapp-anchor
 anchorlink="Slå samman PNG"
moreproducts="https://products.aspose.com/imaging/net/merge/png/"
>}} 
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Letar du efter hjälp?"
bartext="Kolla in våra supportkanaler för hjälp med dina frågor relaterade till Aspose-produktens API-funktioner och arbete."
 resourcetxt1="Docs"
 resourcelinks1="https://docs.aspose.com/imaging/net/"
 resourcetxt2="API-referens"
 resourcelinks2="https://reference.aspose.com/imaging/" 
 resourcetxt3="Kunskapsbas"
 resourcelinks3="https://kb.aspose.com/imaging/net/"
 resourcetxt4="Gratis support"
 resourcelinks4="https://forum.aspose.com/c/imaging/14"
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
 resourcelistlink="https://blog.aspose.com/imaging/draw-shapes-in-csharp/"
 resourcelistlink2="https://blog.aspose.com/imaging/blur-images-in-csharp/"
 resourcelistlink3="https://blog.aspose.com/imaging/adjust-image-contrast-brightness-gamma-csharp/"
 resourcelisttext="Rita former i C# - Linjer, bågar och rektanglar"
 resourcelisttext2="Oskärpa bilder programmatiskt i C#"
 resourcelisttext3="Justera bildkontrakt, ljusstyrka och gamma"
>}} 
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://docs.aspose.com/"
 resourcetitle="Dokumentation"
 resourcealt="Dokumentation"
 resourceimg="/img/docs1.svg"
 resourcelistlink="https://docs.aspose.com/imaging/net/features/"
 resourcelistlink2="https://www.nuget.org/packages/Aspose.Imaging/"
 resourcelistlink3="https://helpdesk.aspose.com/"
 resourcelisttext="Aspose.Imaging för .NET-funktioner"
 resourcelisttext2="Installera Aspose.Imaging för .NET NuGet Package"
 resourcelisttext3="Aspose.Imaging för .NET Betald Support Helpdesk"
>}} 
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://kb.aspose.com/"
 resourcetitle="Kunskapsbas"
 resourcealt="Kodprover"
 resourceimg="/images/code1.svg"
 resourcelistlink="https://kb.aspose.com/imaging/net/how-to-compress-image-size-in-csharp/"
 resourcelistlink2="https://kb.aspose.com/imaging/net/how-to-draw-graphics-in-csharp/"
 resourcelistlink3="https://kb.aspose.com/imaging/net/how-to-resize-image-in-c-sharp/"
 resourcelisttext="Hur man komprimerar bildstorlek i C#"
resourcelisttext2="Hur man ritar grafik i C#"
resourcelisttext3="Hur man ändrar storlek på bild i C#"
>}} 
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Redo att börja?"
rtstext="Ladda ner gratis provversion"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="Visa alla API:er"
>}} 
