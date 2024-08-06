---
title: Výkonné OCR API pro .NET pro přesné rozpoznávání textu
description: Použijte Aspose Optical Character Recognition (OCR) API pro .NET pro přesné rozpoznání a extrahování textu z obrázků, převod obrázků a PDF na text a další.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="Výkonné rozhraní .NET OCR API pro rozpoznávání textu"
  inheadertext="Integrujte pokročilé možnosti OCR do svých aplikací pomocí Aspose Optical Character Recognition API for .NET. Bezproblémově rozpoznávejte a extrahujte text z obrázků PNG, JPG, GIF a BMP, naskenovaných fotografií a souborů PDF nebo převádějte obrázky nebo soubory PDF na text."
  ctabtn="Stáhněte si zkušební verzi zdarma"
  ctabtn="Stáhněte si zkušební verzi zdarma"
  ctalink="https://releases.aspose.com/ocr/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Zobrazit všechna rozhraní API"
  bchomelink="/"
  bchome="Domov"
  bcpage="OCR"
  bclink2="produkty"
  bclink3=".NET"
  bclink2url="/products/"
  bclink3url="/products/net/"
  >}}
{{< homepage/conholdate/com/inner-wrapper/sub-nav 
subnav1="#overview" subnavtxt1="Přehled" 
subnav2="#features" subnavtxt2="Funkce" 
subnav3="#support" subnavtxt3="Podpěra, podpora" 
subnav4="#examples" subnavtxt4="Příklady" 
subnav5="https://purchase.aspose.com/pricing/ocr/net"
subnavtxt5="Ceny" 
subbtn1="https://docs.aspose.com/ocr/net/"
subbtntxt1="Učit se"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="Koupit"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle=".NET OCR engine s vynikající rychlostí a přesností"
   subtext="Aspose.OCR for .NET je pokročilé, efektivní a přesné rozhraní API pro optické rozpoznávání znaků pro snadné rozpoznávání textu v obrázcích a souborech PDF. Pomáhá vyvíjet funkce OCR pro aplikace .NET a nabízí vyšší rychlost zpracování, přesnost a komplexní sadu funkcí. Výkonný .NET OCR engine vám umožňuje provádět přesné rozpoznávání a extrakci textu ze souborů PDF a obrázků JPEG, GIF, PNG, TIFF a BMP. Pomocí rozhraní OCR API for .NET můžete vytvářet automatizovaná řešení pro převod obrázků a dokumentů PDF do formátů text, Word, Excel, XML a JSON."
   subtext2="Vývojáři si mohou vychutnat extrakci textu napříč platformami pomocí rozhraní Aspose.OCR for .NET API, protože může fungovat identicky v prostředích Windows, Mac OS a Linux. Rozhraní API podporuje 27 různých jazyků v latince a azbuce a tisíce čínských znaků a umožňuje detekovat a rozpoznávat známá písma. Navíc můžete rozpoznat text z naskenovaných fotografií pomocí vestavěné schopnosti zpracovat zašuměné, zkosené nebo otočené obrázky. Knihovna Aspose.OCR for .NET je kompletní řešení pro analýzu obrazu a extrakci textu, které by mohlo rozšířit vaše stávající aplikace nebo vám pomoci vytvořit profesionální řešení OCR od začátku."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Začínáme</h2>
   <p>Chcete-li správně nastavit a používat rozhraní .NET OCR API, zkontrolujte níže uvedené podrobnosti. Pro bezproblémovou instalaci doporučujeme prostudovat si seznam předpokladů na stránce <a href="https://docs.aspose.com/ocr/net/system-requirements/">Systémové požadavky</a> rozhraní API pro optické rozpoznávání znaků pro .NET.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.OCR pro instalaci .NET"
>}}
<p>Knihovnu OCR pro C# .NET můžete nainstalovat stažením instalačního programu MSI nebo knihoven DLL z <a href="https://releases.aspose.com/ocr/net/">části ke stažení</a>. Nebo můžete k nastavení použít <a href="https://www.nuget.org/packages/Aspose.OCR/">balíček NuGet</a>. Příkaz pro konzolu správce balíčků Visual Studio je uveden níže:</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp1"
>}}
PM > Install-Package Aspose.OCR
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Efektivně provádějte OCR na dokumentech PDF a převádějte obrázky na text"
featuretext="Aspose.OCR for .NET API je vynikající volbou pro bezproblémové provádění optického rozpoznávání znaků (OCR) pro vývojáře .NET. Použití OCR na dokumenty PDF a převod rozpoznaného textu do formátu Word vyžaduje pouze několik řádků kódu. Podobně můžete vytvářet řešení pro převod obrázků na text pomocí knihovny rozpoznávání textu pro C# .NET."
>}}
{{< products/product-feature-blocks-col
featurecolheading="Rozpoznejte a extrahujte text z dokumentů PDF v .NET"
>}}
<p>Optické rozpoznávání znaků pro naskenované dokumenty PDF je jednoduché s pomocí Aspose.OCR pro .NET. Je to jedna z nejoblíbenějších funkcí rozhraní .NET PDF document OCR API a vybavuje každého, kdo pracuje s API, všemi potřebnými nástroji k rozpoznání, extrahování a převodu textu z dokumentů PDF do různých formátů. Podívejme se na kroky potřebné k provedení OCR na dokumentech PDF a převodu extrahovaného textu z PDF do formátu Word:</p>
<ul>
   <li>Vytvořte instanci třídy <strong>AsposeOcr</strong>.</a></li>
   <li>Vytvořte objekt třídy <strong>DocumentRecognitionSettings</strong>.</li>
   <li>Zadejte jazyk OCR.</li>
   <li>Voláním metody <strong>RecognizePdf()</strong> získáte <strong>RecognitionResult</strong>. Přidejte cestu k souboru a objekt <strong>DocumentRecognitionSettings</strong> jako argumenty.</li>
   <li>Uložte text pomocí metody <strong>SaveMultipageDocument()</strong>. Přidejte cestu k výstupnímu souboru, objekty <strong>SaveFormat</strong> a <strong>RecognitionResult</strong> jako argumenty</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp2"
>}}
// This code example demonstrates how to OCR PDF documents and save the recognized text as DOCX.
// Initialize the PCR engine
AsposeOcr recognitionEngine = new AsposeOcr();
// Initialize recognition settings
DocumentRecognitionSettings recognitionSettings = new DocumentRecognitionSettings();
// Specify language for OCR. Multi-language by default
recognitionSettings.Language = Language.Eng;
// Recognize text from PDF
List<RecognitionResult> results = recognitionEngine.RecognizePdf("C:\\MyFiles\\test.pdf", recognitionSettings);
// Save the recognized text as Word (DOCX) file
AsposeOcr.SaveMultipageDocument("C:\\Files\\OCR_result.docx", SaveFormat.Docx, results);
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks-col
featurecolheading="Bez námahy převádějte obrázky na prohledávatelné PDF v .NET"
>}}
<p>Vysoce výkonné rozhraní .NET OCR API umožňuje vývojářům extrahovat prohledávatelný text z naskenovaných obrázků a fotografií různých běžně používaných obrazových formátů, jako jsou GIF, PNG, JPG, BMP a TIFF. Pokud chcete do svých aplikací .NET integrovat možnosti OCR, funkce převodu obrázků na text by je mohla posílit. Zde si projdeme kroky potřebné pro efektivní převod JPG do PDF pomocí robustního OCR API pro .NET:</p>
<ul>
   <li>Nastavte cestu k souboru vstupního obrázku pro rozpoznávání textu.</li>
   <li>Vytvořte instanci třídy <strong>AsposeOcr</strong></li>
   <li>Pomocí metody <strong>RecognizeImage</strong> rozpoznáte text ve vybraném souboru obrázku.</li>
   <li>Uložte zpracovaný soubor pomocí metody <strong>Save</strong> a přidejte název výstupního souboru a <strong>SaveFormat</strong> jako argumenty.</li>
   <li>Zajistěte nastavení výsledného souboru na prohledávatelný dokument PDF pomocí <strong>SaveFormat</strong>.</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp3"
>}}
// Set path for input image to recognize
string image = "OCR_test.jpg";
// Initialize AsposeOcr class instance
AsposeOcr api = new AsposeOcr();
// Recognize input image with RecognizeImage method
RecognitionResult result = api.RecognizeImage(image, new RecognitionSettings());
// Save output to searchable PDF file
result.Save("OCR_output.pdf", SaveFormat.Pdf);
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< /products/product-feature-blocks >}}
   <p class="col-lg-12">Stránka GitHub <a href="https://github.com/aspose-ocr/Aspose.OCR-for-.NET/tree/master/Examples">příklady</a> rozhraní API pro optické rozpoznávání znaků Aspose pro . NET obsahuje více ukázek pracovního kódu, neváhejte se na ně podívat. Poskytujeme také <a href="https://products.aspose.app/ocr/family">Bezplatné online OCR PDF a převodník obrázků na text</a>, rozpoznávání textu a extrahování aplikací. Tyto bezplatné aplikace OCR můžete používat za běhu pomocí svých mobilních zařízení.</p>
{{< products/product-feature-blocks
featureheading="Snadno použitelná knihovna .NET OCR pro extrakci textu ve fotografiích"
featuretext="Máte potíže se čtením a extrahováním textu z naskenovaných obrázků? Pokud ano, použijte Aspose.OCR for .NET, protože je to nejlepší OCR API pro analýzu obrázků a extrakci textu z naskenovaných fotografií, obrázků smartphonu a dalších. Pomocí tohoto rozhraní API můžete programově rozpoznat text v obrázcích a převést jej do různých formátů souborů. Kromě toho rozhraní API pro převod obrazu na text obsahuje pokročilé funkce, jako je kontrola pravopisu a nahrazení znaků u vizuálně vadných textů. Mohl by snadno přečíst takové texty, zkontrolovat pravopis a nahradit jakékoli zdeformované znaky z nesprávně napsaného textu na obrázku. Při spuštění obrazového OCR můžete poskytnout odkaz na obrazový soubor jako zdroj. Pro tento proces je možné naskenovat a rozpoznat text z celého obrázku nebo pouze z vybrané části obrázku. Dokonale vyvíjejte plnohodnotné aplikace pro převod obrázků na text pomocí rozhraní .NET image OCR API a snadno převádějte JPEG na text, PNG na text, BMP na text a další."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="FAQ"
>}}
   {{< products/faq-block
 faqquery="1. Jak mohu převést obrázky na text v .NET?"
 faqanswer="Převod obrázků na text v .NET je rychlý a snadný pomocí rozhraní .NET OCR API. K převodu souborů JPG, BMP, GIF, PNG, TIFF a dalších obrazových souborů do formátů PDF, Word, Excel, JSON, prostý text a XML stačí pouze několik řádků kódování .NET."
>}}
   {{< products/faq-block 
 faqquery="2. Jak dlouho trvá převod obrázků nebo souborů PDF na text?"
 faqanswer="Nejlepší OCR API pro .NET funguje rychle a vaše požadavky na rozpoznání textu, extrakci a převod dokončí okamžitě."
>}}
   {{< products/faq-block
 faqquery="3. Je bezpečné zpracovávat naskenované obrázky a soubory PDF pomocí rozhraní .NET API?"
 faqanswer="Můžete si být jisti bezpečností svých datových souborů při jejich zpracování pomocí rozhraní API pro optické rozpoznávání znaků pro .NET. Zajišťujeme soukromí vašich údajů a přijímáme veškerá požadovaná opatření, abychom vám poskytli bezpečnou uživatelskou zkušenost."
>}}
   {{< products/faq-block
 faqquery="4. Mohu zpracovávat fotografie a soubory PDF v systému Mac OS, Windows nebo Linux?"
 faqanswer="Ano, rozhraní API pro rozpoznávání textu a převod obrazu na text pro .NET funguje v různých operačních systémech, rámcích a operačních prostředích. Můžete jej používat na platformě, kterou si zvolíte, a ke svému fungování nevyžaduje žádnou další instalaci softwaru."
>}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper popularheading="Nástroje pro optické rozpoznávání znaků"
>}}
   {{< products/popularapp-anchor
 anchorlink="JPEG do TXT"
 moreproducts="https://products.aspose.com/ocr/net/conversion/jpeg-to-txt/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PNG na TXT"
 moreproducts="https://products.aspose.com/ocr/net/conversion/png-to-txt/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="GIF do TXT"
 moreproducts="https://products.aspose.com/ocr/net/conversion/gif-to-txt/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="BMP do TXT"
 moreproducts="https://products.aspose.com/ocr/net/conversion/bmp-to-txt/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="TIFF na TXT"
 moreproducts="https://products.aspose.com/ocr/net/conversion/tiff-to-txt/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="JPEG do PDF"
 moreproducts="https://products.aspose.com/ocr/net/conversion/jpeg-to-pdf"
>}} 
   {{< products/popularapp-anchor
 anchorlink="JPEG do Wordu"
 moreproducts="https://products.aspose.com/ocr/net/conversion/jpeg-to-docx"
>}} 
   {{< products/popularapp-anchor
 anchorlink="JPEG do Excelu"
 moreproducts="https://products.aspose.com/ocr/net/conversion/jpeg-to-xlsx"
>}} 
   {{< products/popularapp-anchor
 anchorlink="JPEG do XML"
 moreproducts="https://products.aspose.com/ocr/net/conversion/jpeg-to-xml"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PNG do Wordu"
 moreproducts="https://products.aspose.com/ocr/net/conversion/png-to-docx"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PNG do Excelu"
 moreproducts="https://products.aspose.com/ocr/net/conversion/png-to-xls"
>}}  
   {{< products/popularapp-anchor
 anchorlink="PNG do PDF"
 moreproducts="https://products.aspose.com/ocr/net/conversion/png-to-pdf"
>}}  
   {{< products/popularapp-anchor
 anchorlink="GIF do Wordu"
 moreproducts="https://products.aspose.com/ocr/net/conversion/gif-to-doc"
>}} 
   {{< products/popularapp-anchor
 anchorlink="GIF do PDF"
 moreproducts="https://products.aspose.com/ocr/net/conversion/gif-to-pdf"
>}}
   {{< products/popularapp-anchor
 anchorlink="BMP do Wordu"
 moreproducts="https://products.aspose.com/ocr/net/conversion/bmp-to-docx"
>}}
   {{< products/popularapp-anchor
 anchorlink="BMP do Excelu"
 moreproducts="https://products.aspose.com/ocr/net/conversion/bmp-to-xls"
>}}
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Hledáte pomoc?"
bartext="Podívejte se na naše kanály podpory, kde najdete pomoc s vašimi dotazy souvisejícími s funkcemi a fungováním rozhraní API produktu Aspose."
 resourcetxt1="Docs"
 resourcelinks1="https://docs.aspose.com/ocr/net/"
 resourcetxt2="Reference API"
 resourcelinks2="https://reference.aspose.com/ocr/net/" 
 resourcetxt3="Znalostní báze"
 resourcelinks3="https://kb.aspose.com/ocr/net/"
 resourcetxt4="Bezplatná podpora"
 resourcelinks4="https://forum.aspose.com/c/ocr/16"
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
 resourcelistlink="https://blog.aspose.com/ocr/skew-correction-in-image-processing-using-csharp/"
 resourcelistlink2="https://blog.aspose.com/ocr/convert-screenshot-to-text-with-ocr-in-csharp/"
 resourcelistlink3="https://blog.aspose.com/ocr/image-to-excel-ocr-csharp/"
 resourcelisttext="Korekce zkosení při zpracování obrazu pomocí C#"
 resourcelisttext2="Převést snímky obrazovky na text pomocí OCR v C#"
 resourcelisttext3="Převést obrázek do Excelu pomocí OCR v C#"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://docs.aspose.com/"
 resourcetitle="Dokumentace"
 resourcealt="Dokumentace"
 resourceimg="/img/docs1.svg"
 resourcelistlink="https://docs.aspose.com/ocr/net/how-to-run-the-examples/"
 resourcelistlink2="https://www.nuget.org/packages/Aspose.OCR/"
 resourcelistlink3="https://helpdesk.aspose.com/"
 resourcelisttext="Jak spustit příklady"
 resourcelisttext2="Nainstalujte Aspose.OCR pro .NET NuGet Package"
 resourcelisttext3="Aspose.OCR for .NET Placená podpora Helpdesk"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://kb.aspose.com/"
 resourcetitle="Znalostní báze"
 resourcealt="Ukázky kódu"
 resourceimg="/images/code1.svg"
 resourcelistlink="https://kb.aspose.com/ocr/net/how-to-extract-text-from-scanned-pdf-in-c-sharp/"
 resourcelistlink2="https://kb.aspose.com/ocr/net/how-to-extract-text-from-image-in-csharp/"
 resourcelisttext="Jak extrahovat text z naskenovaného PDF v C#"
resourcelisttext2="Jak extrahovat text z obrázku v C#"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Jste připraveni začít?"
rtstext="Stáhněte si zkušební verzi zdarma"
rtslink="https://releases.aspose.com/ocr/net/" 
rtslink2="https://products.aspose.com" 
rtstext2="Zobrazit všechna rozhraní API"
>}}
