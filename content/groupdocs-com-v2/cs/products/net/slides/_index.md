---
title: C# .NET PowerPoint API pro zpracování prezentačních souborů
description: Výkonné rozhraní .NET PowerPoint API pro zpracování formátů prezentačních souborů, jako jsou PPT, POT, PPS a ODP. Programově vytvářejte, upravujte a převádějte snímky.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="C# .NET PowerPoint API pro zpracování formátů prezentačních souborů"
  inheadertext="Obohaťte své prezentace .NET vývojem aplikací pro generování, zpracování a manipulaci se snímky Microsoft PowerPoint. Spravujte různé formáty prezentačních souborů včetně PPT, PPTX, POT, POTX, PPS, PPSX a ODP. Převeďte dokumenty PowerPoint do PDF, HTML, rastrových obrázků a SVG vektorů."
  ctabtn="Stáhněte si zkušební verzi zdarma"
  ctabtn="Stáhněte si zkušební verzi zdarma"
  ctalink="https://releases.aspose.com/slides/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Zobrazit všechna rozhraní API"
  bchomelink="/"
  bchome="Domov"
  bcpage="Snímky"
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
subnav5="https://purchase.aspose.com/pricing/slides/net"
subnavtxt5="Ceny" 
subbtn1="https://docs.aspose.com/slides/net/"
subbtntxt1="Učit se"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="Koupit"
>}}
   {{< products/subtext-wrapper sectionid="overview"
   subtitle="Manipulujte se snímky aplikace PowerPoint pomocí prezentačního rozhraní .NET API"
   subtext="Aspose.Slides for .NET je plně funkční a flexibilní .NET PowerPoint API, které umožňuje vývojářům softwaru a aplikací programově generovat, upravovat, manipulovat a exportovat prezentace Microsoft PowerPoint na platformě .NET. Podporuje zpracování různých oblíbených formátů souborů PowerPoint, jako jsou PPT, POT, PPTX, PPS, POTX a PPTM, a také dokumentů OpenOffice (ODP). Programátoři mohou využít pokročilé možnosti formátování a zpracování prezentací této knihovny .NET k přidávání, odstraňování, rozdělování nebo slučování snímků prezentace, použití formátování textu, správě animací a přechodů snímků, práci s obrázky, tvary, tabulkami a grafy a mnohem víc."
   subtext2="Aspose.Slides for .NET API se může pochlubit složitým vykreslovacím enginem, který vám pomůže bezvadně převádět prezentace PowerPoint do více formátů souborů, jako je PowerPoint do PDF, PowerPoint do JPG a PowerPoint do HTML."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Začínáme</h2>
   <p>Před nastavením rozhraní API pro prezentace .NET PowerPoint se podívejte na stránku <a href="https://docs.aspose.com/slides/net/system-requirements/">Systémové požadavky</a>, kde najdete nezbytné předpoklady. API nainstalujete bez problémů.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.Slides pro instalaci .NET"
>}}
<p>Můžete si přímo stáhnout DLL nebo MSI instalační program Aspose.Slides pro .NET návštěvou <a href="https://releases.aspose.com/slides/net/">sekce ke stažení</a>. K instalaci rozhraní .NET PowerPoint API můžete také použít <a href="https://www.nuget.org/packages/Aspose.Slides.Net/">balíček NuGet</a>. Příkaz pro nastavení knihovny v konzole správce balíčků je uveden níže:</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp1"
>}}
PM > Install-Package Aspose.Slides.NET
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Jak převést PowerPoint do PDF v .NET a rychle sloučit prezentace"
featuretext="Aspose.Slides for .NET je přední API pro manipulaci s prezentacemi v PowerPointu, které obsahuje skvělou sadu funkcí se schopností převádět prezentace. Bezproblémově převádějte PowerPoint do PDF a dalších formátů souborů v .NET a slučujte snímky prezentací pomocí .NET PowerPoint API."
>}}
{{< products/product-feature-blocks-col
featurecolheading="Převeďte PowerPoint do PDF v .NET"
>}}
<p>Pomocí Aspose.Slides for .NET API provádějte dokonalé prezentace v PowerPointu na PDF převody v C# .NET a přitom nastavujte různé vlastnosti výsledného PDF dokumentu. Podívejte se prosím na následující kroky a ukázkové kódování pro převod PowerPoint PPT do PDF na platformě .NET:</p>
<ul>
   <li>Chcete-li načíst zdrojový soubor prezentace, vytvořte instanci objektu třídy <a href="https://apireference.aspose.com/slides/net/aspose.slides/presentation">Presentation</a>.</li>
   <li>Inicializujte objekt třídy <a href="https://apireference.aspose.com/slides/net/aspose.slides.export/pdfoptions/">PdfOptions</a> a nastavte požadované možnosti obrázku.</li>
   <li>Nastavte požadované možnosti PDF pro výsledný soubor PDF.</li>
   <li>Převeďte prezentaci do formátu PDF pomocí metody Uložit.</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp2"
>}}
// Create an instance of the Presentation class object to load the PPT file
 Presentation presPPT = new Presentation("TestPresentation.ppt");
// Create the PdfOptions class object
PdfOptions exportPdfOptions = new PdfOptions();
// Set the JPEG quality for images inside the presentation
exportPdfOptions.JpegQuality = 90;
// Set the metafiles behavior
exportPdfOptions.SaveMetafilesAsPng = true;
// Apply the text compression level
exportPdfOptions.TextCompression = PdfTextCompression.Flate;
// Set the output PDF standard
exportPdfOptions.Compliance = PdfCompliance.Pdf15;
// Convert and Save the Presentation to PDF
presPPT.Save("PPT-to-PDF.pdf", SaveFormat.Pdf, exportPdfOptions);
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks-col
featurecolheading="Sloučit prezentace v .NET"
>}}
<p>Sloučení prezentací do jednotného dokumentu aplikace PowerPoint je prominentní funkcí Aspose.Slides for .NET API. Zkontrolujte prosím níže uvedené kroky a informace, abyste mohli rychle a snadno kombinovat více prezentací PowerPoint PPTX v rámci aplikací pro slučování dokumentů pomocí rozhraní API pro prezentace .NET:</p>
<ul>
   <li>Chcete-li načíst zdrojovou prezentaci, vytvořte instanci třídy <a href="https://apireference.aspose.com/slides/net/aspose.slides/presentation">Presentation</a>.</li>
   <li>Inicializujte samostatné objekty třídy Presentation pro požadované cílové prezentace.</li>
   <li>Ve smyčce procházejte všechny <a href="https://apireference.aspose.com/slides/net/aspose.slides/islide">snímky</a> v cílových prezentacích.</li>
   <li>Zavolejte metodu AddClone() kolekce snímků zdrojové prezentace, kde se mají kombinovat jiné prezentace.</li>
   <li>Uložte výslednou prezentaci se všemi snímky z cílových prezentací.</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp3"
>}}
// Load the source presentation
Presentation prest1 = new Presentation("prest1.pptx");
// Initialize separate Presentation class objects for the target presentations
Presentation prest2 = new Presentation("prest2.pptx");
Presentation prest3 = new Presentation("prest3.pptx");
// Loop through all target presentations slides
foreach (ISlide slide in prest2.Slides)
    prest1.Slides.AddClone(slide);
 foreach (ISlide slide in prest3.Slides)
    prest1.Slides.AddClone(slide);
// Save the resultant presentation with all the slides from the target presentations
prest1.Save("combined.pptx", SaveFormat.Pptx);
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< /products/product-feature-blocks >}}
   <p class="col-lg-12">Více pracovních příkladů a kompletní ukázky kódování Aspose.Slides for .NET API jsou k dispozici na <a href="https://github.com/aspose-slides/Aspose.Slides-for-.NET/tree/master/Examples">Příklady GitHubu</a>. Podívejte se prosím na <a href="https://products.aspose.app/slides/family">bezplatné online aplikace</a> Aspose.Slides, které vám umožní prohlížet, konvertovat, analyzovat, porovnávat, vodoznak, redigovat, rozdělujte a upravujte soubory prezentací PowerPoint odkudkoli pomocí mobilních nebo stolních zařízení.</p>
{{< products/product-feature-blocks
featureheading="Bezpečné a nezávislé .NET prezentační API"
featuretext="S Aspose.Slides pro .NET máte přístup k některým vynikajícím funkcím zabezpečení umožňujícím spolehlivé zpracování prezentací v .NET. To zahrnuje schopnost chránit prezentace heslem a podporu režimu pouze pro čtení. Při používání prezentačního API .NET navíc není nutná instalace aplikace Microsoft PowerPoint, která vám poskytuje zcela nezávislé a jedinečné uživatelské prostředí."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="FAQ"
>}}
   {{< products/faq-block
faqquery="1. Jak mohu převést soubory PowerPoint v .NET?"
 faqanswer="Převod souborů Microsoft PowerPoint v .NET je rychlý a snadný pomocí Aspose.Slides for .NET API. K převodu souborů PPT, PPTX, PPS, PPSX, POT, POTX, PPTM a ODP do různých formátů souborů je zapotřebí pouze několik řádků kódování .NET."
>}}
   {{< products/faq-block 
faqquery="2. Jak dlouho trvá sloučení nebo převod snímků aplikace PowerPoint?"
 faqanswer="Rozhraní .NET API pro manipulaci a zpracování prezentačních snímků funguje rychle a během okamžiku dokončí konverzi vašich prezentačních souborů a požadavky na sloučení."
>}}
   {{< products/faq-block
faqquery="3. Je bezpečné zpracovávat prezentace pomocí .NET API?"
 faqanswer="Můžete si být jisti bezpečností vašich PowerPoint prezentačních souborů při jejich zpracování pomocí Aspose.Slides for .NET API. Zajišťujeme soukromí vašich údajů a přijímáme veškerá požadovaná opatření, abychom vám poskytli bezpečnou uživatelskou zkušenost."
>}}
   {{< products/faq-block
faqquery="4. Mohu zpracovat PowerPointové prezentace na Mac OS, Windows nebo Linux?"
 faqanswer="Ano, rozhraní API pro zpracování prezentací PowerPoint pro .NET funguje v různých operačních systémech, rámcích a operačních prostředích. Můžete jej používat na platformě, kterou si zvolíte, a ke svému fungování nevyžaduje žádnou další instalaci softwaru."
>}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="Nástroje pro manipulaci s prezentacemi v PowerPointu"
>}}
   {{< products/popularapp-anchor
 anchorlink="PowerPoint do PDF"
 moreproducts="https://products.aspose.com/slides/net/conversion/ppt-to-pdf/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PowerPoint do JPEG"
 moreproducts="https://products.aspose.com/slides/net/conversion/ppt-to-jpeg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PowerPoint do HTML"
 moreproducts="https://products.aspose.com/slides/net/conversion/ppt-to-html/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PPTX do PDF"
 moreproducts="https://products.aspose.com/slides/net/conversion/pptx-to-pdf/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PPTX na GIF"
 moreproducts="https://products.aspose.com/slides/net/conversion/pptx-to-gif/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PPTX na PNG"
 moreproducts="https://products.aspose.com/slides/net/conversion/pptx-to-png/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Sloučit PPT"
 moreproducts="https://products.aspose.com/slides/net/merger/ppt/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Sloučit PPTX"
 moreproducts="https://products.aspose.com/slides/net/merger/pptx/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Sloučit ODP"
 moreproducts="https://products.aspose.com/slides/net/merger/odp/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Sloučit POT"
 moreproducts="https://products.aspose.com/slides/net/merger/pot/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Sloučit PPTM"
 moreproducts="https://products.aspose.com/slides/net/merger/pptm/"
>}}  
   {{< products/popularapp-anchor
 anchorlink="Sloučit PPS"
 moreproducts="https://products.aspose.com/slides/net/merger/pps/"
>}}
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Hledáte pomoc?"
bartext="Podívejte se na naše kanály podpory, kde najdete pomoc s vašimi dotazy týkajícími se funkcí API produktu Aspose a fungováním."
 resourcetxt1="Docs"
 resourcelinks1="https://docs.aspose.com/slides/net/"
 resourcetxt2="Reference API"
 resourcelinks2="https://reference.aspose.com/slides/" 
 resourcetxt3="Znalostní báze"
 resourcelinks3="https://kb.aspose.com/slides/net/"
 resourcetxt4="Bezplatná podpora"
 resourcelinks4="https://forum.aspose.com/c/slides/11"
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
 resourcelistlink="https://blog.aspose.com/slides/convert-ppt-to-video-csharp/"
 resourcelistlink2="https://blog.aspose.com/slides/encrypt-ppt-csharp/"
 resourcelistlink3="https://blog.aspose.com/slides/convert-jpg-to-ppt-csharp/"
 resourcelisttext="Převést PPT na video v C#"
 resourcelisttext2="Šifrovat PowerPoint v C#"
 resourcelisttext3="Převést JPG na PPT v C# .NET"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://docs.aspose.com/"
 resourcetitle="Dokumentace"
 resourcealt="Dokumentace"
 resourceimg="/img/docs1.svg"
 resourcelistlink="https://docs.aspose.com/slides/net/features-overview/"
 resourcelistlink2="https://www.nuget.org/packages/Aspose.Slides.Net/"
 resourcelistlink3="https://helpdesk.aspose.com/"
 resourcelisttext="Funkce Aspose.Slides for .NET"
 resourcelisttext2="Nainstalujte Aspose.Slides pro balíček .NET NuGet"
 resourcelisttext3="Aspose.Slides for .NET Placená podpora Helpdesk"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://kb.aspose.com/"
 resourcetitle="Znalostní báze"
 resourcealt="Ukázky kódu"
 resourceimg="/images/code1.svg"
 resourcelistlink="https://kb.aspose.com/slides/net/how-to-merge-slides-in-csharp/"
 resourcelistlink2="https://kb.aspose.com/slides/net/how-to-insert-signature-in-powerpoint-using-csharp/"
 resourcelistlink3="https://kb.aspose.com/slides/net/how-to-create-a-table-in-powerpoint-using-csharp/"
 resourcelisttext="Jak sloučit snímky v C#"
resourcelisttext2="Jak vložit podpis do PowerPointu pomocí C#"
resourcelisttext3="Jak vytvořit tabulku v PowerPointu pomocí C#"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Jste připraveni začít?"
rtstext="Stáhněte si zkušební verzi zdarma"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="Zobrazit všechna rozhraní API"
>}}
