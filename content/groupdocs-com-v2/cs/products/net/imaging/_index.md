---
title: C# .NET Image Processing API pro manipulaci a úpravu fotografií
description: .NET Image Processing API pro vytváření, manipulaci a úpravu fotografií v aplikacích C#, ASP.NET nebo VB.NET. Převeďte obrázky do formátů PDF, JPG, PNG a GIF.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="C# .NET Image Processing API pro načítání, manipulaci a úpravu fotografií"
  inheadertext="Zjednodušte zpracování obrazu pomocí tohoto výkonného a na funkce bohatého rozhraní .NET pro zpracování obrazu. Vytvářejte, upravujte a exportujte obrázky programově nebo rychle aplikujte na fotografie různé efekty a filtry. Své obrázky můžete také převést do PDF, JPG, PNG, GIF, SVG, PSD, BMP a dalších formátů."
  ctabtn="Stáhněte si zkušební verzi zdarma"
  ctabtn="Stáhněte si zkušební verzi zdarma"
  ctalink="https://releases.aspose.com/imaging/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Zobrazit všechna rozhraní API"
  bchomelink="/"
  bchome="Domov"
  bcpage="Zobrazování"
  bclink2="produkty"
  bclink3=".NET"
  bclink2url="/products/"
  bclink3url="/products/net/"
  >}}
{{< homepage/conholdate/com/inner-wrapper/sub-nav 
subnav1="#overview"
subnavtxt1="Přehled" 
subnav2="#features"
subnavtxt2="Funkce" 
subnav3="#support"
subnavtxt3="Podpěra, podpora" 
subnav4="#examples"
subnavtxt4="Příklady" 
subnav5="https://purchase.aspose.com/pricing/imaging/net"
subnavtxt5="Ceny" 
subbtn1="https://docs.aspose.com/imaging/net/"
subbtntxt1="Učit se"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="Koupit"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="Pokročilé úpravy a manipulace s fotografiemi v C# .NET"
   subtext="Aspose.Imaging for .NET je robustní a flexibilní rozhraní API pro zpracování obrázků, které umožňuje vývojářům C#, ASP.NET a VB.NET vytvářet, načítat, upravovat, manipulovat a převádět známé formáty souborů obrázků, jako jsou JPG, PNG, GIF. , BMP, TIFF, EMG, SVG a WebP mimo jiné. Díky širokému spektru podporovaných funkcí a vynikajícím možnostem zpracování obrazu je Aspose.Imaging for .NET ideálním řešením pro vývojáře, jak do svých aplikací .NET začlenit funkce pro manipulaci s obrázky."
   subtext2="Transformujte své fotografie do stupňů šedi, upravte jas a kontrast obrázků nebo aplikujte další efekty a filtry s pomocí tohoto rozhraní API pro úpravu fotografií .NET. Podporuje také programovou změnu velikosti, kompresi, oříznutí, vyrovnání a sloučení obrázků. Upravené obrázky můžete převést do PDF, PSD, GIF, PNG, JPEG a dalších typů souborů. Toto rozhraní API pro zpracování obrázků pro .NET vás udrží na vrcholu vašich potřeb upravování a manipulace s fotografiemi."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Začínáme</h2>
   <p>Projděte si prosím stránku <a href="https://docs.aspose.com/imaging/net/system-requirements/">Systémové požadavky</a>, kde najdete předpoklady pro nastavení rozhraní API pro obrázky .NET. bez problémů.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}} 
{{< products/product-feature-blocks-col
featurecolheading="Instalace Aspose.Imaging pro .NET"
>}} 
<p>Stáhněte si prosím knihovny DLL nebo instalační program MSI z <a href="https://releases.aspose.com/imaging/net/">části ke stažení</a> a nainstalujte rozhraní API pro zpracování obrazu .NET. Alternativně můžete k nastavení API použít také <a href="https://www.nuget.org/packages/Aspose.Imaging/">balíček NuGet</a>. Příkaz pro konzolu správce balíčků je uveden níže:</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp1"
>}} 
PM > Install-Package Aspose.Imaging 
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Jak převést obrázky v .NET a otočit nebo převrátit obrázek"
featuretext="Aspose.Imaging for .NET umožňuje programově převádět obrázky do různých formátů souborů. Umožňuje vývojářům .NET převádět známé rastrové a vektorové obrázky, jako jsou PNG, JPG, BMP, GIF, TIFF, SVG, EPS, CDR, EMF a WebP. Obrázky můžete také převracet a otáčet v rámci aplikací pro zpracování obrázků .NET."
>}} 
{{< products/product-feature-blocks-col
featurecolheading="Převeďte obrázky do PDF, JPG, PNG a dalších formátů v .NET"
>}} 
<p>S pomocí .NET imaging API mohou vývojáři bez námahy převádět obrázky do PDF, JPG, PNG, BMP, GIF, SVG a dalších formátů. Převod PNG na JPG je oblíbenou možností převodu obrázků, která pomáhá převádět fotografie nebo naskenované obrázky z jednoho formátu souboru do druhého. Knihovna Aspose.Imaging for .NET umožňuje tento převod pomocí minimálního kódování. Další nápovědu naleznete v následujících informacích:</p>
<ul>
   <li>Načtěte zdrojový soubor PNG pomocí třídy <a href="https://reference.aspose.com/imaging/net/aspose.imaging/image">Obrázek</a>.</li>
   <li>Převeďte PNG na JPG pomocí metody Image.Save(string, JpegOptions).</li>
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
featurecolheading="Překlopit nebo otočit obrázky ve vašich aplikacích pro zpracování obrázků .NET"
>}} 
<p>Své aplikace pro manipulaci s obrázky .NET můžete rozšířit začleněním funkcí pro úpravu fotografií, jako je překlápění a otáčení obrázků. Aspose.Imaging for .NET API vám umožňuje otočit obrázek o 90, 180 a 270 stupňů kromě možnosti převrátit jej vodorovně nebo svisle. Níže uvedené kroky a fragment kódu C# nabízejí další pomoc:</p>
<ul>
   <li>Načtěte soubor obrázku pomocí třídy <a href="https://reference.aspose.com/imaging/net/aspose.imaging/image">Obrázek</a>.</li>
   <li>Otočte obrázek o 180 stupňů a otočte jej vodorovně pomocí <a href="https://reference.aspose.com/imaging/net/aspose.imaging/image/methods/rotateflip">Image.RotateFlip(RotateFlipType.Rotate180FlipX)</a> metoda.</li>
   <li>Uložte aktualizovaný obrázek pomocí metody <a href="https://reference.aspose.com/imaging/net/aspose.imaging.image/save/methods/3">Image.Save(string)</a>.</li>
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
   <p class="col-lg-12">Další funkční příklady rozhraní Aspose.Imaging for .NET API naleznete na <a href="https://github.com/aspose-imaging/Aspose.Imaging-for-.NET/tree/master/Examples">GitHub Příklady</a>. Pokud chcete převádět, měnit velikost, komprimovat, vodoznak, otáčet, převracet, ořezávat, vyrovnávat, upravovat nebo slučovat své víceformátové obrázky za běhu, podívejte se na <a href="https://products.aspose.app/imaging/family">bezplatné online aplikace</a> Aspose.Imaging.</p>
{{< products/product-feature-blocks
featureheading="Přidejte do svých aplikací pro manipulaci s obrázky .NET možnost komprese obrázků"
featuretext="Aspose.Imaging for .NET umožňuje komprimaci obrázků, aby se snížila velikost souborů obrázků. Vynikající algoritmy komprese obrazu tohoto rozhraní .NET imaging API vám umožní snížit velikost souboru o 30 – 70 %, aniž by došlo ke snížení kvality obrazu. Tímto způsobem můžete efektivně ukládat a přenášet obrazové soubory bez obav o velikost souboru."
>}} 
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="FAQ"
>}} 
   {{< products/faq-block
 faqquery="1. Jak mohu převést soubory obrázků v .NET?"
 faqanswer="Převod obrázků, jako jsou JPG, PNG, BMP, GIF, SVG, CDR, TIFF, EMF, EPS a další v .NET, je rychlý a snadný pomocí Aspose.Imaging pro .NET API. K převodu vašich víceformátových obrázků do různých formátů souborů je zapotřebí pouze několik řádků kódování .NET."
>}} 
   {{< products/faq-block 
 faqquery="2. Jak dlouho trvá sloučení nebo převod obrázků?"
 faqanswer=".NET rozhraní API pro zpracování obrázků funguje rychle a vaše požadavky na konverzi obrázků a sloučení dokončí okamžitě."
>}} 
   {{< products/faq-block
 faqquery="3. Je bezpečné zpracovávat fotografie a obrázky pomocí .NET API?"
 faqanswer="Můžete si být jisti bezpečností svých fotografií a obrázků při jejich zpracování pomocí Aspose.Imaging for .NET API. Zajišťujeme soukromí vašich údajů a přijímáme veškerá požadovaná opatření, abychom vám poskytli bezpečnou uživatelskou zkušenost."
>}} 
   {{< products/faq-block
 faqquery="4. Mohu zpracovat obrazové soubory na Mac OS, Windows nebo Linux?"
 faqanswer="Ano, imaging API for .NET funguje napříč různými OS, frameworky a operačními prostředími. Můžete jej používat na platformě, kterou si zvolíte, a ke svému fungování nevyžaduje žádnou další instalaci softwaru."
>}} 
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper 
   popularheading="Nástroje pro manipulaci s fotografiemi a obrázky"
>}} 
   {{< products/popularapp-anchor
 anchorlink="JPEG do PDF"
moreproducts="https://products.aspose.com/imaging/en/net/conversion/jpeg-to-PDF/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PNG do PDF"
moreproducts="https://products.aspose.com/imaging/en/net/conversion/png-to-PDF/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="SVG do PDF"
moreproducts="https://products.aspose.com/imaging/en/net/conversion/svg-to-PDF/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="JPEG na PSD"
moreproducts="https://products.aspose.com/imaging/net/conversion/jpeg-to-psd/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="SVG do JPEG"
moreproducts="https://products.aspose.com/imaging/en/net/conversion/SVG-to-jpeg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="BMP na WEBP"
moreproducts="https://products.aspose.com/imaging/net/conversion/bmp-to-webp/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="GIF do SVG"
moreproducts="https://products.aspose.com/imaging/net/conversion/gif-to-svg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="GIF do JPEG"
moreproducts="https://products.aspose.com/imaging/net/conversion/gif-to-jpeg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="CDR do PNG"
moreproducts="https://products.aspose.com/imaging/net/conversion/cdr-to-png/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Sloučit JPG"
moreproducts="https://products.aspose.com/imaging/net/merge/jpg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Sloučit TIFF"
moreproducts="https://products.aspose.com/imaging/net/merge/tiff/"
>}}  
   {{< products/popularapp-anchor
 anchorlink="Sloučit PNG"
moreproducts="https://products.aspose.com/imaging/net/merge/png/"
>}} 
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Hledáte pomoc?"
bartext="Podívejte se na naše kanály podpory, kde najdete pomoc s vašimi dotazy souvisejícími s funkcemi a fungováním rozhraní API produktu Aspose."
 resourcetxt1="Docs"
 resourcelinks1="https://docs.aspose.com/imaging/net/"
 resourcetxt2="Reference API"
 resourcelinks2="https://reference.aspose.com/imaging/" 
 resourcetxt3="Znalostní báze"
 resourcelinks3="https://kb.aspose.com/imaging/net/"
 resourcetxt4="Bezplatná podpora"
 resourcelinks4="https://forum.aspose.com/c/imaging/14"
 >}}
{{< homepage/aspose/com/inner-wrapper/resources-wrapper
 resource-heading="Zdroje"
 sectionid="support"
 >}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://blog.aspose.com/"
 resourcetitle="Blogy"
 resourcealt="Blogy"
 resourceimg="/images/blog1.svg"
 resourcelistlink="https://blog.aspose.com/imaging/draw-shapes-in-csharp/"
 resourcelistlink2="https://blog.aspose.com/imaging/blur-images-in-csharp/"
 resourcelistlink3="https://blog.aspose.com/imaging/adjust-image-contrast-brightness-gamma-csharp/"
 resourcelisttext="Kreslení tvarů v C# – čáry, oblouky a obdélníky"
 resourcelisttext2="Rozostření obrázků programově v C#"
 resourcelisttext3="Upravte kontrakt obrazu, jas a gamu"
>}} 
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://docs.aspose.com/"
 resourcetitle="Dokumentace"
 resourcealt="Dokumentace"
 resourceimg="/img/docs1.svg"
 resourcelistlink="https://docs.aspose.com/imaging/net/features/"
 resourcelistlink2="https://www.nuget.org/packages/Aspose.Imaging/"
 resourcelistlink3="https://helpdesk.aspose.com/"
 resourcelisttext="Funkce Aspose.Imaging for .NET"
 resourcelisttext2="Nainstalujte balíček Aspose.Imaging pro .NET NuGet"
 resourcelisttext3="Aspose.Imaging for .NET Placená podpora Helpdesk"
>}} 
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://kb.aspose.com/"
 resourcetitle="Znalostní báze"
 resourcealt="Ukázky kódu"
 resourceimg="/images/code1.svg"
 resourcelistlink="https://kb.aspose.com/imaging/net/how-to-compress-image-size-in-csharp/"
 resourcelistlink2="https://kb.aspose.com/imaging/net/how-to-draw-graphics-in-csharp/"
 resourcelistlink3="https://kb.aspose.com/imaging/net/how-to-resize-image-in-c-sharp/"
 resourcelisttext="Jak komprimovat velikost obrázku v C#"
resourcelisttext2="Jak kreslit grafiku v C#"
resourcelisttext3="Jak změnit velikost obrázku v C#"
>}} 
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Jste připraveni začít?"
rtstext="Stáhněte si zkušební verzi zdarma"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="Zobrazit všechna rozhraní API"
>}} 
