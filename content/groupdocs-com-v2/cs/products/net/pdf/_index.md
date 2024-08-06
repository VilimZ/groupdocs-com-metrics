---
title: PDF API pro .NET pro zpracování, úpravu a převod dokumentů PDF
description: Pokročilá knihovna .NET PDF pro generování a slučování dokumentů PDF. Převeďte PDF do JPG, PDF do Excelu a PDF do Wordu v aplikacích C#, ASP.NET a VB.NET.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="PDF API pro .NET pro zpracování, úpravu a přesnou konverzi PDF dokumentů"
  inheadertext="Vyzkoušejte výkonné funkce pro úpravy PDF, převod a možnosti analýzy, aniž byste potřebovali Adobe Acrobat. Vykreslujte dokumenty PDF do formátů DOC, DOCX, PPTX, XLS, JPG, PNG, GIF, SVG a dalších formátů ve vašich aplikacích .NET."
  ctabtn="Stáhněte si zkušební verzi zdarma"
  ctabtn="Stáhněte si zkušební verzi zdarma"
  ctalink="https://releases.aspose.com/pdf/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Zobrazit všechna rozhraní API"
  bchomelink="/"
  bchome="Domov"
  bcpage="PDF"
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
subnav5="https://purchase.aspose.com/pricing/pdf/net"
subnavtxt5="Ceny" 
subbtn1="https://docs.aspose.com/pdf/net/"
subbtntxt1="Učit se"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="Koupit"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="Posuňte zpracování PDF dokumentů na další úroveň v C# .NET"
   subtext="Upgradujte své aplikace pro zpracování dokumentů .NET integrací komplexních funkcí pro manipulaci s PDF s pomocí Aspose.PDF for .NET. Tato nativní knihovna je nabitá dokonalými schopnostmi zpracování souborů PDF, které umožňují vývojářům .NET nejen generovat, zpracovávat, upravovat a analyzovat soubory PDF, ale také přesně převádět dokumenty PDF. Pomocí tohoto rozhraní PDF API for .NET můžete rychle a snadno vkládat text, anotace a obrázky do dokumentů PDF, přidávat nebo odebírat přílohy, vodoznaky a záložky, rozdělovat nebo slučovat stránky PDF a zpracovávat pole formulářů ve svých souborech PDF."
   subtext2="Aspose.PDF for .NET nabízí bezkonkurenční kompatibilitu napříč platformami a je navržen tak, aby bezproblémově fungoval napříč více frameworky, jako jsou mimo jiné .NET Framework a .NET Core. Kromě toho můžete toto rozhraní .NET PDF API použít k vytváření aplikací pro převod PDF v C#, ASP.NET a VB.NET a ke konverzi PDF do JPG, PDF do Excelu, PDF do Wordu, PDF do PowerPointu a několika dalších formátů souborů pomocí vysoká kvalita reprodukce zvuku."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Začínáme</h2>
   <p>Chcete-li správně nastavit a používat Aspose.PDF pro .NET API, zkontrolujte níže uvedené informace. Na stránce <a href="https://docs.aspose.com/pdf/net/system-requirements/">Systémové požadavky</a> naleznete seznam předpokladů pro úspěšné nastavení rozhraní PDF API pro . SÍŤ</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.PDF pro instalaci .NET"
>}}
<p>Chcete-li nastavit Aspose.PDF pro .NET na vašem systému, můžete si stáhnout DLL nebo MSI Installer přímo z <a href="https://releases.aspose.com/pdf/net/">sekce ke stažení</a a>. Alternativně můžete pro instalaci .NET PDF API využít <a href="https://www.nuget.org/packages/Aspose.PDF/">balíček NuGet</a>. Příkaz rozhraní API správce balíčků je uveden níže.</p>
{{< products/product-feature-blocks-snip
 snipclass="greysnipp"
 copyID="snipp1"
>}}
PM> Install-Package Aspose.PDF
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Jak převést PDF do Wordu v .NET a rychle sloučit PDF"
featuretext="Aspose.PDF for .NET podporuje širokou škálu funkcí pro zpracování dokumentů, včetně převodu PDF do Wordu a dalších formátů souborů a slučování PDF v .NET. Pomocí této knihovny .NET zažijete plně nezávislé zpracování dokumentů PDF bez spoléhání se na software třetích stran."
>}}
{{< products/product-feature-blocks-col
 featurecolheading="Převeďte PDF do Wordu v .NET"
>}}
<p>Upgradujte své stávající aplikace pro převod PDF do formátu .NET integrací funkcí převodu PDF do Wordu. Aspose.PDF for .NET API vám umožňuje převádět PDF do DOC a PDF do DOCX v rámci vašich aplikací pro převod dokumentů .NET. Přečtěte si prosím následující pokyny a úryvek kódu, které vám pomohou převést PDF do Wordu v .NET:</p>
<ul>
   <li>Vytvořte instanci objektu <a href="https://reference.aspose.com/pdf/net/aspose.pdf/document/">Dokument</a> se zdrojovým dokumentem PDF.</li>
   <li>Uložte jej do formátu <strong>SaveFormat.Doc</strong> voláním metody <strong>Document.Save()</strong>.</li>
</ul>
{{< products/product-feature-blocks-snip
 snipclass="greysnipp"
 copyID="snipp2"
>}}
public static void ConvertPDFtoWord()
{
    // Open the source PDF document
    Document pdfDocument = new Document(_dataDir + "PDFToDOC.pdf");
    // Save the file into MS document format
    pdfDocument.Save(_dataDir + "PDFToDOC_out.doc", SaveFormat.Doc);
}
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks-col
 featurecolheading="Sloučit soubory PDF v .NET"
>}}
<p>Slučování souborů PDF podporuje Aspose.PDF for .NET API. Zkontrolujte prosím níže uvedené pokyny a úryvek kódu, abyste mohli rychle a snadno sloučit soubory PDF ve svých aplikacích C# .NET:</p>
<ul>
   <li>Vytvořte dva objekty <a href="https://reference.aspose.com/pdf/net/aspose.pdf/document">Document</a>, z nichž každý bude obsahovat jeden ze vstupních souborů PDF.</li>
   <li>Poté zavolejte metodu Add kolekce <a href="https://reference.aspose.com/pdf/net/aspose.pdf/pagecollection">PageCollection</a> pro objekt Document, do kterého chcete přidat další soubor PDF. .</li>
   <li>Předejte kolekci PageCollection druhého objektu Document metodě Add první kolekce PageCollection.</li>
   <li>Nakonec uložte výstupní soubor PDF pomocí metody <a href="https://reference.aspose.com/pdf/net/aspose.pdf.document/save/methods/4">Uložit</a>.</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp3"
>}}
// The path to the documents directory.
string dataDir = RunExamples.GetDataDir_AsposePdf_Pages();
// Open first document
Document pdfDocument1 = new Document(dataDir + "Concat1.pdf");
// Open second document
Document pdfDocument2 = new Document(dataDir + "Concat2.pdf");
// Add pages of second document to the first
pdfDocument1.Pages.Add(pdfDocument2.Pages);
dataDir = dataDir + "ConcatenatePdfFiles_out.pdf";
// Save concatenated output file
pdfDocument1.Save(dataDir);
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< /products/product-feature-blocks >}}
   <p class="col-lg-12">Další pracovní příklady a ukázky kódu Aspose.PDF pro .NET API naleznete na našem <a href="https://github.com/aspose-pdf/Aspose.PDF-for-.NET/tree/master/Examples">Příklady GitHubu</a>. Pokud chcete prohlížet, upravovat, slučovat, rozdělovat, komentovat, porovnávat nebo převádět dokumenty PDF za běhu, podívejte se na naši bezplatnou online službu <a href="https://products.aspose.app/pdf/family" >Aplikace pro zpracování PDF.</a></p>
{{< products/product-feature-blocks
featureheading="Bezpečné zpracování souborů PDF v .NET"
featuretext="Aspose.PDF for .NET je plně bezpečná knihovna pro zpracování PDF poskytující bezpečnostní funkce, jako je podpora digitálního podpisu, ochrana heslem a šifrování. To zajišťuje spolehlivý přístup, zpracování a přenos vašich dokumentů PDF a zároveň zabraňuje neoprávněnému přístupu a úpravám. K použití tohoto rozhraní API pro zpracování .NET PDF navíc nemusíte instalovat Adobe Acrobat."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="FAQ"
>}}
   {{< products/faq-block
 faqquery="1. Jak mohu převést PDF v .NET?"
 faqanswer="Převod PDF v .NET je snadný a přímočarý pomocí Aspose.PDF pro .NET API. Vyžaduje pouze několik řádků kódu a soubory PDF můžete převést do více formátů souborů."
>}}
   {{< products/faq-block 
 faqquery="2. Jak dlouho trvá sloučení nebo převod PDF?"
 faqanswer=".NET PDF API funguje rychle a zpracuje vaše požadavky na sloučení nebo převod dokumentů během okamžiku."
>}}
   {{< products/faq-block
 faqquery="3. Je bezpečné zpracovávat PDF pomocí .NET PDF API?"
 faqanswer="Samozřejmě! Můžete si být jisti bezpečností svých dokumentů při jejich zpracování pomocí Aspose.PDF for .NET API. Zajišťujeme soukromí vašich údajů a přijímáme veškerá požadovaná opatření, abychom vám poskytli bezpečnou uživatelskou zkušenost."
>}}
   {{< products/faq-block
 faqquery="4. Mohu zpracovat PDF na Mac OS, Windows nebo Linux?"
 faqanswer="Ano, rozhraní API pro manipulaci s .NET PDF funguje v různých operačních systémech, rámcích a operačních prostředích. Můžete jej použít na platformě dle vašeho výběru. Naše .NET PDF knihovna nevyžaduje ke svému fungování žádnou další instalaci softwaru."
>}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="Nástroje pro manipulaci s PDF"
   >}}
   {{< products/popularapp-anchor
 anchorlink="PDF do WORD"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-word/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF do DOC"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-doc/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF do DOCX"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-docx/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF do EXCELu"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-excel/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF do XLS"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-xls/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF do XLSX"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-xlsx/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF do PPTX"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-pptx/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF do HTML"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-html/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF do BMP"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-bmp/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF do TIFF"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-tiff/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF do PNG"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-png/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF na GIF"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-gif/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF do BMP"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-bmp/"
>}}  
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Hledáte pomoc?"
bartext="Podívejte se na naše kanály podpory, kde najdete pomoc s vašimi dotazy souvisejícími s funkcemi a fungováním rozhraní API produktu Aspose."
 resourcetxt1="Docs"
 resourcelinks1="https://docs.aspose.com/pdf/net/"
 resourcetxt2="Reference API"
 resourcelinks2="https://reference.aspose.com/pdf/" 
 resourcetxt3="Znalostní báze"
 resourcelinks3="https://kb.aspose.com/pdf/net/"
 resourcetxt4="Bezplatná podpora"
 resourcelinks4="https://forum.aspose.com/c/pdf/10"
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
 resourcelistlink="https://blog.aspose.com/pdf/convert-latex-to-pdf-in-python/"
 resourcelistlink2="https://blog.aspose.com/pdf/convert-pdf-to-ppt-in-python/"
 resourcelistlink3="https://blog.aspose.com/pdf/convert-pdf-to-latex-in-python/"
 resourcelisttext="Převeďte LaTeX do PDF v Pythonu"
 resourcelisttext2="Převést PDF na PPT v Pythonu"
 resourcelisttext3="Převeďte PDF do LaTeXu v Pythonu"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://docs.aspose.com/"
 resourcetitle="Dokumentace"
 resourcealt="Dokumentace"
 resourceimg="/img/docs1.svg"
 resourcelistlink="https://docs.aspose.com/pdf/net/key-features/"
 resourcelistlink2="https://www.nuget.org/packages/Aspose.PDF/"
 resourcelistlink3="https://helpdesk.aspose.com/"
 resourcelisttext="Funkce Aspose.PDF pro .NET"
 resourcelisttext2="Nainstalujte Aspose.PDF pro .NET NuGet Package"
 resourcelisttext3="Aspose.PDF for .NET Placená podpora Helpdesk"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://kb.aspose.com/"
 resourcetitle="Znalostní báze"
 resourcealt="Ukázky kódu"
 resourceimg="/images/code1.svg"
 resourcelistlink="https://kb.aspose.com/words/net/how-to-insert-hyperlink-in-word-using-csharp/"
 resourcelistlink2="https://kb.aspose.com/total/python/how-to-install-python-to-run-aspose-pdf-for-python-via-net/"
 resourcelistlink3="https://kb.aspose.com/pdf/net/how-to-add-hyperlink-in-pdf-using-csharp/"
 resourcelisttext="Jak vložit hypertextový odkaz do aplikace Word pomocí C#"
resourcelisttext2="Jak nainstalovat Python ke spuštění Aspose.PDF pro Python přes .NET"
resourcelisttext3="Jak přidat hypertextový odkaz do PDF pomocí C#"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Jste připraveni začít?"
rtstext="Stáhněte si zkušební verzi zdarma"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="Zobrazit všechna rozhraní API"
>}}
