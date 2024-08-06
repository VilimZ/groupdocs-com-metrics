---
title: C# .NET Image Processing API fényképek kezeléséhez és szerkesztéséhez
description: .NET Image Processing API fényképek létrehozásához, kezeléséhez és szerkesztéséhez C#, ASP.NET vagy VB.NET alkalmazásokban. Konvertálja a képeket PDF, JPG, PNG és GIF formátumba.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="C# .NET Image Processing API fényképek betöltéséhez, manipulálásához és szerkesztéséhez"
  inheadertext="Egyszerűsítse képfeldolgozását ezzel a nagy teljesítményű és funkciókban gazdag .NET képalkotó API-val. Létrehozhat, módosíthat és exportálhat képeket programozottan, vagy gyorsan alkalmazhat különböző effektusokat és szűrőket a fényképekre. A képeket PDF, JPG, PNG, GIF, SVG, PSD, BMP és más formátumokba is konvertálhatja."
  ctabtn="Ingyenes próbaverzió letöltése"
  ctabtn="Ingyenes próbaverzió letöltése"
  ctalink="https://releases.aspose.com/imaging/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Az összes API megtekintése"
  bchomelink="/"
  bchome="itthon"
  bcpage="Képalkotás"
  bclink2="Termékek"
  bclink3=".NET"
  bclink2url="/products/"
  bclink3url="/products/net/"
  >}}
{{< homepage/conholdate/com/inner-wrapper/sub-nav 
subnav1="#overview"
subnavtxt1="Áttekintés" 
subnav2="#features"
subnavtxt2="Jellemzők" 
subnav3="#support"
subnavtxt3="Támogatás" 
subnav4="#examples"
subnavtxt4="Példák" 
subnav5="https://purchase.aspose.com/pricing/imaging/net"
subnavtxt5="Árazás" 
subbtn1="https://docs.aspose.com/imaging/net/"
subbtntxt1="Tanul"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="megvesz"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="Speciális képszerkesztés és -manipuláció C# .NET-ben"
   subtext="Az Aspose.Imaging for .NET egy robusztus és rugalmas képfeldolgozó API, amely lehetővé teszi a C#, ASP.NET és VB.NET fejlesztők számára jól ismert képfájlformátumok, például JPG, PNG, GIF létrehozását, betöltését, szerkesztését, kezelését és konvertálását. , BMP, TIFF, EMG, SVG és WebP többek között. A támogatott funkciók széles skálájával és kitűnő képfeldolgozási lehetőségeivel az Aspose.Imaging for .NET ideális megoldás a fejlesztők számára, hogy képmanipulációs funkciókat építsenek be .NET-alkalmazásaikba."
   subtext2="A .NET fotószerkesztő API segítségével fotóit szürkeárnyalatossá alakíthatja, beállíthatja a képek fényerejét és kontrasztját, vagy alkalmazhat más effektusokat és szűrőket. Támogatja továbbá a képek programozott átméretezését, tömörítését, levágását, elferdítését és egyesítését. A szerkesztett képeket PDF, PSD, GIF, PNG, JPEG és más fájltípusokká konvertálhatja. Ez a .NET-hez készült képfeldolgozó API folyamatosan a képszerkesztési és -manipulációs igények tetején tart."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Elkezdeni</h2>
   <p>Kérjük, tekintse át a <a href="https://docs.aspose.com/imaging/net/system-requirements/">Rendszerkövetelmények</a> oldalt, és ellenőrizze a .NET image API beállításának előfeltételeit. minden probléma nélkül.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}} 
{{< products/product-feature-blocks-col
featurecolheading="Aspose.Imaging .NET telepítéshez"
>}} 
<p>A .NET képfeldolgozó API telepítéséhez töltse le a DLL-eket vagy az MSI-telepítőt a <a href="https://releases.aspose.com/imaging/net/">letöltések részből</a>. Alternatív megoldásként használhatja a <a href="https://www.nuget.org/packages/Aspose.Imaging/">NuGet csomagot</a> is az API beállításához. A csomagkezelő konzol parancsa alább található:</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp1"
>}} 
PM > Install-Package Aspose.Imaging 
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Képek konvertálása .NET-ben és kép elforgatása vagy megfordítása"
featuretext="Az Aspose.Imaging for .NET lehetővé teszi a képek programozott konvertálását különböző fájlformátumokba. Lehetővé teszi a .NET fejlesztők számára a jól ismert raszteres és vektoros képek, például PNG, JPG, BMP, GIF, TIFF, SVG, EPS, CDR, EMF és WebP konvertálását. A képeket a .NET képfeldolgozó alkalmazásaiban is megfordíthatja és elforgathatja."
>}} 
{{< products/product-feature-blocks-col
featurecolheading="Konvertálja a képeket PDF, JPG, PNG és más formátumokká .NET-ben"
>}} 
<p>A .NET képalkotó API segítségével a fejlesztők könnyedén konvertálhatják a képeket PDF, JPG, PNG, BMP, GIF, SVG és egyéb formátumokká. A PNG konvertálása JPG-be egy népszerű képkonverziós lehetőség, amellyel a fényképeket vagy a beolvasott képeket egyik fájlformátumból a másikba alakíthatja át. Az Aspose.Imaging for .NET könyvtár lehetővé teszi ezt az átalakítást minimális kódolás használatával. További segítségért ellenőrizze az alábbi információkat:</p>
<ul>
   <li>Töltse be a forrás PNG-fájlt az <a href="https://reference.aspose.com/imaging/net/aspose.imaging/image">Image</a> osztály használatával.</li>
   <li>Konvertálja a PNG-t JPG-be az Image.Save(string, JpegOptions) módszerrel.</li>
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
featurecolheading="Fordítsa meg vagy forgassa el a képeket a .NET képfeldolgozó alkalmazásokban"
>}} 
<p>Kibővítheti .NET képszerkesztő alkalmazásait olyan fotószerkesztő funkciókkal, mint a képek megfordítása és elforgatása. Az Aspose.Imaging for .NET API lehetővé teszi a kép 90, 180 és 270 fokkal történő elforgatását, valamint vízszintes vagy függőleges megfordítását. Az alábbi lépések és a C# kódrészlet további segítséget nyújtanak:</p>
<ul>
   <li>Töltse be a képfájlt az <a href="https://reference.aspose.com/imaging/net/aspose.imaging/image">Image</a> osztály használatával.</li>
   <li>Forgassa el a képet 180 fokkal, és fordítsa vízszintesen az <a href="https://reference.aspose.com/imaging/net/aspose.imaging/image/methods/rotateflip">Image.RotateFlip(RotateFlipType.Rotate180FlipX)< segítségével. /a> módszer.</li>
   <li>Mentse el a frissített képet az <a href="https://reference.aspose.com/imaging/net/aspose.imaging.image/save/methods/3">Image.Save(string)</a> metódussal.</li>
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
   <p class="col-lg-12">Az Aspose.Imaging for .NET API további működő példáiért keresse fel a <a href="https://github.com/aspose-imaging/Aspose.Imaging-for-.NET/tree/master/Examples">GitHub webhelyet. Példák</a> oldalon. Ha menet közben szeretné konvertálni, átméretezni, tömöríteni, vízjelezni, forgatni, átfordítani, körbevágni, torzítani, szerkeszteni vagy egyesíteni több formátumú képeit, kérjük, ellenőrizze a <a href="https://products.aspose.app/imaging/family">az Aspose.Imaging ingyenes online alkalmazásai</a>.</p>
{{< products/product-feature-blocks
featureheading="Adjon hozzá képtömörítési képességet .NET képszerkesztő alkalmazásaihoz"
featuretext="Az Aspose.Imaging for .NET lehetővé teszi a képek tömörítését a képfájlok méretének csökkentése érdekében. A .NET képalkotási API kiváló képtömörítési algoritmusai lehetővé teszik a fájlméret 30–70%-os csökkentését a képminőség romlása nélkül. Így hatékonyan tárolhatja és viheti át a képfájlokat anélkül, hogy aggódnia kellene a fájlméret miatt."
>}} 
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="GYIK"
>}} 
   {{< products/faq-block
 faqquery="1. Hogyan konvertálhatok képfájlokat .NET-ben?"
 faqanswer="A JPG, PNG, BMP, GIF, SVG, CDR, TIFF, EMF, EPS és más képek konvertálása .NET-ben gyors és egyszerű az Aspose.Imaging for .NET API használatával. Csak néhány sornyi .NET kód szükséges a többformátumú képek különböző fájlformátumokká konvertálásához."
>}} 
   {{< products/faq-block 
 faqquery="2. Mennyi ideig tart a képek egyesítése vagy konvertálása?"
 faqanswer="A .NET képfeldolgozó API gyorsan működik, és pillanatok alatt teljesíti a képátalakítási és egyesítési kérelmeket."
>}} 
   {{< products/faq-block
 faqquery="3. Biztonságos a fényképek és képek feldolgozása a .NET API használatával?"
 faqanswer="Az Aspose.Imaging for .NET API-val való feldolgozás során biztos lehetsz fényképei és képei biztonságában. Biztosítjuk adatainak védelmét, és minden szükséges intézkedést megteszünk a biztonságos felhasználói élmény biztosítása érdekében."
>}} 
   {{< products/faq-block
 faqquery="4. Feldolgozhatok képfájlokat Mac OS, Windows vagy Linux rendszeren?"
 faqanswer="Igen, a .NET képalkotó API-ja különböző operációs rendszereken, keretrendszereken és operációs környezetekben működik. Használhatja a választott platformon, és működéséhez nincs szükség további szoftver telepítésére."
>}} 
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper 
   popularheading="Fénykép- és képkezelési eszközök"
>}} 
   {{< products/popularapp-anchor
 anchorlink="JPEG-ből PDF-be"
moreproducts="https://products.aspose.com/imaging/en/net/conversion/jpeg-to-PDF/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PNG-ből PDF-be"
moreproducts="https://products.aspose.com/imaging/en/net/conversion/png-to-PDF/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="SVG-ből PDF-be"
moreproducts="https://products.aspose.com/imaging/en/net/conversion/svg-to-PDF/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="JPEG-ből PSD-be"
moreproducts="https://products.aspose.com/imaging/net/conversion/jpeg-to-psd/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="SVG-ből JPEG-be"
moreproducts="https://products.aspose.com/imaging/en/net/conversion/SVG-to-jpeg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="BMP a WEBP-re"
moreproducts="https://products.aspose.com/imaging/net/conversion/bmp-to-webp/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="GIF-ből SVG-be"
moreproducts="https://products.aspose.com/imaging/net/conversion/gif-to-svg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="GIF-ből JPEG-be"
moreproducts="https://products.aspose.com/imaging/net/conversion/gif-to-jpeg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="CDR PNG-re"
moreproducts="https://products.aspose.com/imaging/net/conversion/cdr-to-png/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="JPG egyesítése"
moreproducts="https://products.aspose.com/imaging/net/merge/jpg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="TIFF egyesítése"
moreproducts="https://products.aspose.com/imaging/net/merge/tiff/"
>}}  
   {{< products/popularapp-anchor
 anchorlink="PNG egyesítése"
moreproducts="https://products.aspose.com/imaging/net/merge/png/"
>}} 
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Segítséget keres?"
bartext="Az Aspose termék API funkcióival és működésével kapcsolatos kérdéseivel kapcsolatban keresse fel támogatási csatornáinkat."
 resourcetxt1="Docs"
 resourcelinks1="https://docs.aspose.com/imaging/net/"
 resourcetxt2="API-referencia"
 resourcelinks2="https://reference.aspose.com/imaging/" 
 resourcetxt3="Tudásbázis"
 resourcelinks3="https://kb.aspose.com/imaging/net/"
 resourcetxt4="Ingyenes támogatás"
 resourcelinks4="https://forum.aspose.com/c/imaging/14"
 >}}
{{< homepage/aspose/com/inner-wrapper/resources-wrapper
 resource-heading="Erőforrások"
 sectionid="support"
 >}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://blog.aspose.com/"
 resourcetitle="Blogok"
 resourcealt="Blogok"
 resourceimg="/images/blog1.svg"
 resourcelistlink="https://blog.aspose.com/imaging/draw-shapes-in-csharp/"
 resourcelistlink2="https://blog.aspose.com/imaging/blur-images-in-csharp/"
 resourcelistlink3="https://blog.aspose.com/imaging/adjust-image-contrast-brightness-gamma-csharp/"
 resourcelisttext="Alakzatok rajzolása C#-ban – vonalak, ívek és téglalapok"
 resourcelisttext2="Képek elmosása programozottan C# nyelven"
 resourcelisttext3="Állítsa be a képösszehúzódást, a fényerőt és a gammát"
>}} 
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://docs.aspose.com/"
 resourcetitle="Dokumentáció"
 resourcealt="Dokumentáció"
 resourceimg="/img/docs1.svg"
 resourcelistlink="https://docs.aspose.com/imaging/net/features/"
 resourcelistlink2="https://www.nuget.org/packages/Aspose.Imaging/"
 resourcelistlink3="https://helpdesk.aspose.com/"
 resourcelisttext="Aspose.Imaging a .NET-szolgáltatásokhoz"
 resourcelisttext2="Telepítse az Aspose.Imaging for .NET NuGet csomagot"
 resourcelisttext3="Aspose.Imaging a .NET fizetett támogatási ügyfélszolgálatához"
>}} 
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://kb.aspose.com/"
 resourcetitle="Tudásbázis"
 resourcealt="Kódminták"
 resourceimg="/images/code1.svg"
 resourcelistlink="https://kb.aspose.com/imaging/net/how-to-compress-image-size-in-csharp/"
 resourcelistlink2="https://kb.aspose.com/imaging/net/how-to-draw-graphics-in-csharp/"
 resourcelistlink3="https://kb.aspose.com/imaging/net/how-to-resize-image-in-c-sharp/"
 resourcelisttext="A képméret tömörítése C#-ban"
resourcelisttext2="Hogyan rajzoljunk grafikát C#-ban"
resourcelisttext3="Hogyan lehet átméretezni a képet C#-ban"
>}} 
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Készen áll az indulásra?"
rtstext="Ingyenes próbaverzió letöltése"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="Az összes API megtekintése"
>}} 
