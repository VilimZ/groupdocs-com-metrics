---
title: PDF API, skirta .NET, skirta apdoroti, redaguoti ir konvertuoti PDF dokumentus
description: Pažangi .NET PDF biblioteka PDF dokumentams generuoti ir sujungti. Konvertuokite PDF į JPG, PDF į Excel ir PDF į Word naudodami C#, ASP.NET ir VB.NET programas.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="PDF API, skirta .NET, skirta apdoroti, redaguoti ir tiksliai konvertuoti PDF dokumentus"
  inheadertext="Patirkite galingas PDF redagavimo, konvertavimo ir analizavimo galimybes nereikalaujant Adobe Acrobat. Pateikite PDF dokumentus DOC, DOCX, PPTX, XLS, JPG, PNG, GIF, SVG ir kitais formatais savo .NET programose."
  ctabtn="Atsisiųskite nemokamą bandomąją versiją"
  ctabtn="Atsisiųskite nemokamą bandomąją versiją"
  ctalink="https://releases.aspose.com/pdf/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Peržiūrėti visas API"
  bchomelink="/"
  bchome="Namai"
  bcpage="PDF"
  bclink2="Produktai"
  bclink3=".NET"
  bclink2url="/products/"
  bclink3url="/products/net/"
  >}}
{{< homepage/conholdate/com/inner-wrapper/sub-nav 
subnav1="#overview"
subnavtxt1="Apžvalga" 
subnav2="#features"
subnavtxt2="funkcijos" 
subnav3="#support"
subnavtxt3="Palaikymas" 
subnav4="#examples"
subnavtxt4="Pavyzdžiai" 
subnav5="https://purchase.aspose.com/pricing/pdf/net"
subnavtxt5="Kainodara" 
subbtn1="https://docs.aspose.com/pdf/net/"
subbtntxt1="Mokytis"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="Pirkti"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="Perkelkite PDF dokumentų apdorojimą į kitą lygį C# .NET"
   subtext="Atnaujinkite savo .NET dokumentų apdorojimo programas integruodami išsamias PDF manipuliavimo funkcijas naudodami Aspose.PDF, skirtą .NET. Šioje vietinėje bibliotekoje įdiegtos nepriekaištingos PDF failų apdorojimo galimybės, leidžiančios .NET kūrėjams ne tik generuoti, apdoroti, redaguoti ir analizuoti PDF failus, bet ir tiksliai konvertuoti PDF dokumentus. Greitai ir lengvai įterpkite tekstą, komentarus ir vaizdus į PDF dokumentus, pridėkite arba pašalinkite priedus, vandens ženklus ir žymes, padalinkite arba sujunkite PDF puslapius ir apdorokite formų laukus savo PDF failuose naudodami šią .NET skirtą PDF API."
   subtext2="Aspose.PDF, skirtas .NET, siūlantis neprilygstamą kelių platformų suderinamumą, sukurtas taip, kad veiktų sklandžiai keliose sistemose, tokiose kaip .NET Framework ir .NET Core. Be to, galite naudoti šią .NET PDF API kurdami PDF konvertavimo programas C#, ASP.NET ir VB.NET ir konvertuodami PDF į JPG, PDF į Excel, PDF į Word, PDF į PowerPoint ir kelis kitus failų formatus su aukšta raiška."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Darbo pradžia</h2>
   <p>Norėdami tinkamai nustatyti ir naudoti Aspose.PDF for .NET API, patikrinkite toliau pateiktą informaciją. Puslapyje <a href="https://docs.aspose.com/pdf/net/system-requirements/">Sistemos reikalavimai</a> rasite būtinų sąlygų, kad būtų galima sėkmingai nustatyti PDF API, sąrašą. NET</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.PDF, skirtas .NET diegimui"
>}}
<p>Norėdami savo sistemoje nustatyti Aspose.PDF for .NET, galite atsisiųsti DLL arba MSI diegimo programą tiesiai iš <a href="https://releases.aspose.com/pdf/net/">atsiuntimų skilties</a> a>. Arba galite naudoti <a href="https://www.nuget.org/packages/Aspose.PDF/">„NuGet“ paketą</a> .NET PDF API diegimui. Paketų tvarkyklės API komanda pateikta žemiau.</p>
{{< products/product-feature-blocks-snip
 snipclass="greysnipp"
 copyID="snipp1"
>}}
PM> Install-Package Aspose.PDF
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Kaip konvertuoti PDF į Word .NET ir greitai sujungti PDF failus"
featuretext="Aspose.PDF for .NET palaiko daugybę dokumentų apdorojimo funkcijų, įskaitant PDF konvertavimą į Word ir kitus failų formatus bei PDF sujungimą .NET. Naudodami šią .NET biblioteką patirkite visiškai nepriklausomą PDF dokumentų apdorojimą, nepasitikėdami jokia trečiosios šalies programine įranga."
>}}
{{< products/product-feature-blocks-col
 featurecolheading="Konvertuoti PDF į Word .NET"
>}}
<p>Atnaujinkite esamas .NET PDF konvertavimo programas integruodami PDF konvertavimo į Word funkciją. Aspose.PDF for .NET API leidžia konvertuoti PDF į DOC ir PDF į DOCX .NET dokumentų konvertavimo programose. Peržiūrėkite šias instrukcijas ir kodo fragmentą, kad padėtumėte konvertuoti PDF į Word į .NET:</p>
<ul>
   <li>Sukurkite objekto <a href="https://reference.aspose.com/pdf/net/aspose.pdf/document/">Dokumento</a> egzempliorių naudodami šaltinio PDF dokumentą.</li>
   <li>Išsaugokite jį formatu <strong>SaveFormat.Doc</strong>, iškviesdami <strong>Document.Save()</strong> metodą.</li>
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
 featurecolheading="Sujunkite PDF failus .NET"
>}}
<p>PDF failų sujungimą palaiko Aspose.PDF, skirta .NET API. Peržiūrėkite toliau pateiktas instrukcijas ir kodo fragmentą, kad greitai ir lengvai sujungtumėte PDF failus savo C# .NET programose:</p>
<ul>
   <li>Sukurkite du <a href="https://reference.aspose.com/pdf/net/aspose.pdf/document">dokumento</a> objektus, kurių kiekviename yra vienas iš įvesties PDF failų.</li>
   <li>Tada iškvieskite <a href="https://reference.aspose.com/pdf/net/aspose.pdf/pagecollection">PageCollection</a> kolekcijos metodą Pridėti dokumento objektui, prie kurio norite pridėti kitą PDF failą. .</li>
   <li>Perduokite antrojo dokumento objekto „PageCollection“ kolekciją į pirmosios „PageCollection“ kolekcijos pridėjimo metodą.</li>
   <li>Galiausiai išsaugokite išvestį PDF failą naudodami <a href="https://reference.aspose.com/pdf/net/aspose.pdf.document/save/methods/4">Išsaugoti</a> metodą.</li>
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
   <p class="col-lg-12">Jei reikia daugiau veikiančių Aspose.PDF, skirtų .NET API, pavyzdžių ir kodo pavyzdžių, apsilankykite mūsų <a href="https://github.com/aspose-pdf/Aspose.PDF-for-.NET/tree/master/Examples">GitHub pavyzdžių</a> puslapyje. Jei norite peržiūrėti, redaguoti, sujungti, skaidyti, komentuoti, palyginti ar konvertuoti PDF dokumentus, peržiūrėkite mūsų nemokamą internetinę <a href="https://products.aspose.app/pdf/family" >PDF apdorojimo programos.</a></p>
{{< products/product-feature-blocks
featureheading="Saugus PDF failų apdorojimas .NET"
featuretext="Aspose.PDF for .NET yra visiškai saugi PDF apdorojimo biblioteka, teikianti saugumo funkcijas, tokias kaip skaitmeninio parašo palaikymas, apsauga slaptažodžiu ir šifravimas. Tai užtikrina patikimą prieigą prie PDF dokumentų, jų apdorojimą ir perdavimą, tuo pačiu užkertant kelią neteisėtai prieigai ir keitimui. Be to, norint naudoti šią .NET PDF apdorojimo API, nereikia įdiegti „Adobe Acrobat“."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="DUK"
>}}
   {{< products/faq-block
 faqquery="1. Kaip konvertuoti PDF į .NET?"
 faqanswer="Konvertuoti PDF į .NET yra paprasta ir paprasta naudojant Aspose.PDF, skirtą .NET API. Tam reikia tik kelių kodo eilučių ir galite konvertuoti PDF failus į kelis failų formatus."
>}}
   {{< products/faq-block 
 faqquery="2. Kiek laiko užtrunka PDF sujungimas arba konvertavimas?"
 faqanswer=".NET PDF API veikia greitai ir greitai apdoroja dokumentų sujungimo arba konvertavimo užklausas."
>}}
   {{< products/faq-block
 faqquery="3. Ar saugu apdoroti PDF naudojant .NET PDF API?"
 faqanswer="Žinoma! Galite būti tikri dėl savo dokumentų saugumo juos apdorojant naudodami Aspose.PDF for .NET API. Užtikriname Jūsų duomenų privatumą ir imamės visų reikiamų priemonių, kad suteiktume Jums saugią vartotojo patirtį."
>}}
   {{< products/faq-block
 faqquery="4. Ar galiu apdoroti PDF „Mac OS“, „Windows“ ar „Linux“?"
 faqanswer="Taip, .NET PDF manipuliavimo API veikia įvairiose OS, sistemose ir operacinėse aplinkose. Jį galite naudoti pasirinktoje platformoje. Kad veiktų mūsų .NET PDF biblioteka, nereikia įdiegti jokios papildomos programinės įrangos."
>}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="PDF manipuliavimo įrankiai"
   >}}
   {{< products/popularapp-anchor
 anchorlink="PDF į WORD"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-word/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF į DOC"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-doc/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF į DOCX"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-docx/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF į EXCEL"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-excel/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF į XLS"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-xls/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF į XLSX"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-xlsx/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF į PPTX"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-pptx/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF į HTML"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-html/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF į BMP"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-bmp/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF į TIFF"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-tiff/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF į PNG"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-png/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF į GIF"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-gif/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF į BMP"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-bmp/"
>}}  
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Ieškote pagalbos?"
bartext="Peržiūrėkite mūsų palaikymo kanalus, kad gautumėte pagalbos dėl klausimų, susijusių su „Aspose“ produkto API funkcijomis ir darbu."
 resourcetxt1="Docs"
 resourcelinks1="https://docs.aspose.com/pdf/net/"
 resourcetxt2="API nuoroda"
 resourcelinks2="https://reference.aspose.com/pdf/" 
 resourcetxt3="Žinių bazė"
 resourcelinks3="https://kb.aspose.com/pdf/net/"
 resourcetxt4="Nemokamas palaikymas"
 resourcelinks4="https://forum.aspose.com/c/pdf/10"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-wrapper
 resource-heading="Ištekliai"
 sectionid="support"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://blog.aspose.com/"
 resourcetitle="Dienoraščiai"
 resourcealt="Dienoraščiai"
 resourceimg="/images/blog1.svg"
 resourcelistlink="https://blog.aspose.com/pdf/convert-latex-to-pdf-in-python/"
 resourcelistlink2="https://blog.aspose.com/pdf/convert-pdf-to-ppt-in-python/"
 resourcelistlink3="https://blog.aspose.com/pdf/convert-pdf-to-latex-in-python/"
 resourcelisttext="Konvertuokite LaTeX į PDF naudodami Python"
 resourcelisttext2="Konvertuoti PDF į PPT Python"
 resourcelisttext3="Konvertuokite PDF į LaTeX naudodami Python"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://docs.aspose.com/"
 resourcetitle="Dokumentacija"
 resourcealt="Dokumentacija"
 resourceimg="/img/docs1.svg"
 resourcelistlink="https://docs.aspose.com/pdf/net/key-features/"
 resourcelistlink2="https://www.nuget.org/packages/Aspose.PDF/"
 resourcelistlink3="https://helpdesk.aspose.com/"
 resourcelisttext="Aspose.PDF, skirta .NET funkcijoms"
 resourcelisttext2="Įdiekite Aspose.PDF, skirtą .NET NuGet paketui"
 resourcelisttext3="Aspose.PDF, skirta .NET mokamos pagalbos pagalbos tarnybai"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://kb.aspose.com/"
 resourcetitle="Žinių bazė"
 resourcealt="Kodo pavyzdžiai"
 resourceimg="/images/code1.svg"
 resourcelistlink="https://kb.aspose.com/words/net/how-to-insert-hyperlink-in-word-using-csharp/"
 resourcelistlink2="https://kb.aspose.com/total/python/how-to-install-python-to-run-aspose-pdf-for-python-via-net/"
 resourcelistlink3="https://kb.aspose.com/pdf/net/how-to-add-hyperlink-in-pdf-using-csharp/"
 resourcelisttext="Kaip įterpti hipersaitą į Word naudojant C#"
resourcelisttext2="Kaip įdiegti Python, kad paleistumėte Aspose.PDF for Python per .NET"
resourcelisttext3="Kaip pridėti hipersaitą į PDF naudojant C#"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Pasiruošę pradėti?"
rtstext="Atsisiųskite nemokamą bandomąją versiją"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="Peržiūrėti visas API"
>}}
