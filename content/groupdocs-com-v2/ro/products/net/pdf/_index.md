---
title: PDF API pentru .NET pentru a procesa, edita și converti documente PDF
description: O bibliotecă .NET PDF avansată pentru a genera și îmbina documente PDF. Convertiți PDF în JPG, PDF în Excel și PDF în Word în aplicațiile C#, ASP.NET și VB.NET.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="PDF API pentru .NET pentru a procesa, edita și converti cu precizie documente PDF"
  inheadertext="Experimentați funcționalitatea puternică de editare PDF, conversie și capabilități de analizare fără a avea nevoie de Adobe Acrobat. Redați documentele PDF în DOC, DOCX, PPTX, XLS, JPG, PNG, GIF, SVG și în alte formate în aplicațiile dvs. .NET."
  ctabtn="Descarcare varianta scurta de prezentare gratuita"
  ctabtn="Descarcare varianta scurta de prezentare gratuita"
  ctalink="https://releases.aspose.com/pdf/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Vedeți toate API-urile"
  bchomelink="/"
  bchome="Acasă"
  bcpage="PDF"
  bclink2="Produse"
  bclink3=".NET"
  bclink2url="/products/"
  bclink3url="/products/net/"
  >}}
{{< homepage/conholdate/com/inner-wrapper/sub-nav 
subnav1="#overview"
subnavtxt1="Prezentare generală" 
subnav2="#features"
subnavtxt2="Caracteristici" 
subnav3="#support"
subnavtxt3="A sustine" 
subnav4="#examples"
subnavtxt4="Exemple" 
subnav5="https://purchase.aspose.com/pricing/pdf/net"
subnavtxt5="Prețuri" 
subbtn1="https://docs.aspose.com/pdf/net/"
subbtntxt1="Învăța"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="Cumpără"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="Treceți procesarea documentelor PDF la nivelul următor în C# .NET"
   subtext="Actualizați aplicațiile dvs. de procesare a documentelor .NET integrând caracteristici complete de manipulare PDF cu ajutorul Aspose.PDF pentru .NET. Această bibliotecă nativă este încărcată cu abilități imaculate de procesare a fișierelor PDF, permițând dezvoltatorilor .NET nu numai să genereze, să proceseze, să editeze și să analizeze PDF-uri, ci și să convertească cu precizie documentele PDF. Inserați rapid și ușor text, adnotări și imagini în documentele PDF, adăugați sau eliminați atașamente, filigrane și marcaje, împărțiți sau îmbinați pagini PDF și procesați câmpurile de formular din fișierele dvs. PDF utilizând acest PDF API pentru .NET."
   subtext2="Oferind o compatibilitate inegalabilă între platforme, Aspose.PDF pentru .NET este proiectat să funcționeze fără probleme în mai multe cadre, cum ar fi .NET Framework și .NET Core, printre altele. În plus, puteți utiliza acest .NET PDF API pentru a crea aplicații de conversie PDF în C#, ASP.NET și VB.NET și pentru a converti PDF în JPG, PDF în Excel, PDF în Word, PDF în PowerPoint și alte câteva formate de fișiere cu mare fidelitate."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Noțiuni de bază</h2>
   <p>Pentru a configura și utiliza corect Aspose.PDF pentru .NET API, vă rugăm să verificați informațiile de mai jos. Consultați pagina <a href="https://docs.aspose.com/pdf/net/system-requirements/">Cerințe de sistem</a> pentru o listă de cerințe preliminare pentru a configura cu succes API-ul PDF pentru . NET</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.PDF pentru instalare .NET"
>}}
<p>Pentru a configura Aspose.PDF pentru .NET pe sistemul dvs., puteți descărca DLL-urile sau programul de instalare MSI direct din <a href="https://releases.aspose.com/pdf/net/">secțiunea de descărcări</ a>. Ca alternativă, puteți utiliza <a href="https://www.nuget.org/packages/Aspose.PDF/">pachetul NuGet</a> pentru instalarea .NET PDF API. Comanda API pentru managerul de pachete este dată mai jos.</p>
{{< products/product-feature-blocks-snip
 snipclass="greysnipp"
 copyID="snipp1"
>}}
PM> Install-Package Aspose.PDF
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Cum să convertiți PDF în Word în .NET și să îmbinați rapid PDF-urile"
featuretext="Aspose.PDF pentru .NET acceptă o gamă largă de funcții de procesare a documentelor, inclusiv conversia PDF în Word și alte formate de fișiere și îmbinarea PDF-urilor în .NET. Folosind această bibliotecă .NET, experimentați procesarea documentelor PDF complet independentă, fără a vă baza pe vreun software terță parte."
>}}
{{< products/product-feature-blocks-col
 featurecolheading="Convertiți PDF în Word în .NET"
>}}
<p>Actualizați aplicațiile existente de conversie PDF .NET integrând funcționalitatea de conversie PDF în Word. Aspose.PDF pentru .NET API vă permite să convertiți PDF în DOC și PDF în DOCX în aplicațiile dvs. de conversie a documentelor .NET. Consultați următoarele instrucțiuni și fragmentul de cod pentru a vă ajuta să convertiți PDF în Word în .NET:</p>
<ul>
   <li>Creați o instanță a obiectului <a href="https://reference.aspose.com/pdf/net/aspose.pdf/document/">Document</a> cu documentul PDF sursă.</li>
   <li>Salvați-l în formatul <strong>SaveFormat.Doc</strong> apelând metoda <strong>Document.Save()</strong>.</li>
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
 featurecolheading="Îmbinați fișierele PDF în .NET"
>}}
<p>Îmbinarea fișierelor PDF este acceptată de Aspose.PDF pentru .NET API. Vă rugăm să verificați instrucțiunile de mai jos și fragmentul de cod pentru a îmbina rapid și ușor fișierele PDF în aplicațiile dvs. C# .NET:</p>
<ul>
   <li>Creați două obiecte <a href="https://reference.aspose.com/pdf/net/aspose.pdf/document">Document</a>, fiecare conținând unul dintre fișierele PDF de intrare.</li>
   <li>Apoi apelați metoda Add a colecției <a href="https://reference.aspose.com/pdf/net/aspose.pdf/pagecollection">PageCollection</a> pentru obiectul Document în care doriți să adăugați celălalt fișier PDF .</li>
   <li>Treceți colecția PageCollection a celui de-al doilea obiect Document la metoda Add a primei colecții PageCollection.</li>
   <li>În cele din urmă, salvați fișierul PDF de ieșire folosind metoda <a href="https://reference.aspose.com/pdf/net/aspose.pdf.document/save/methods/4">Salvare</a>.</li>
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
   <p class="col-lg-12">Pentru mai multe exemple de lucru și exemple de cod de Aspose.PDF pentru API .NET, vă rugăm să vizitați <a href="https://github.com/aspose-pdf/Aspose.PDF-for-.NET/tree/master/Examples">Exemple GitHub</a>. Dacă doriți să vizualizați, editați, îmbinați, împărțiți, adnotați, comparați sau convertiți documente PDF din mers, vă rugăm să consultați <a href="https://products.aspose.app/pdf/family" online gratuit. >Aplicații de procesare PDF.</a></p>
{{< products/product-feature-blocks
featureheading="Procesarea securizată a fișierelor PDF în .NET"
featuretext="Aspose.PDF pentru .NET este o bibliotecă de procesare PDF complet sigură, care oferă caracteristici de securitate, cum ar fi suport pentru semnătură digitală, protecție prin parolă și criptare. Acest lucru asigură accesul, procesarea și transmiterea de încredere a documentelor dumneavoastră PDF, prevenind în același timp accesul și modificarea neautorizată. În plus, nu trebuie să instalați Adobe Acrobat pentru a utiliza acest API de procesare PDF .NET."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="FAQ"
>}}
   {{< products/faq-block
 faqquery="1. Cum pot converti PDF în .NET?"
 faqanswer="Conversia PDF în .NET este simplă și directă folosind Aspose.PDF pentru .NET API. Necesită doar câteva linii de cod și puteți converti fișiere PDF în mai multe formate de fișiere."
>}}
   {{< products/faq-block 
 faqquery="2. Cât timp durează îmbinarea sau convertirea PDF-ului?"
 faqanswer=".NET PDF API funcționează rapid și procesează cererile de îmbinare sau de conversie a documentelor în cel mai scurt timp."
>}}
   {{< products/faq-block
 faqquery="3. Este sigur să procesați PDF folosind un .NET PDF API?"
 faqanswer="Desigur! Puteți fi siguri de securitatea documentelor dumneavoastră în timp ce le procesați folosind Aspose.PDF pentru .NET API. Asigurăm confidențialitatea datelor dumneavoastră și luăm toate măsurile necesare pentru a vă oferi o experiență de utilizator sigură."
>}}
   {{< products/faq-block
 faqquery="4. Pot procesa PDF pe Mac OS, Windows sau Linux?"
 faqanswer="Da, API-ul de manipulare PDF .NET funcționează în diferite sisteme de operare, cadre și medii de operare. Îl poți folosi pe platforma la alegere. Biblioteca noastră .NET PDF nu necesită instalare suplimentară de software pentru a funcționa."
>}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="Instrumente de manipulare PDF"
   >}}
   {{< products/popularapp-anchor
 anchorlink="PDF în WORD"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-word/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF în DOC"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-doc/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF în DOCX"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-docx/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF la EXCEL"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-excel/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF în XLS"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-xls/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF în XLSX"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-xlsx/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF în PPTX"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-pptx/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF în HTML"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-html/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF în BMP"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-bmp/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF în TIFF"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-tiff/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF în PNG"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-png/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF în GIF"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-gif/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF în BMP"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-bmp/"
>}}  
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Cauți ajutor?"
bartext="Consultați canalele noastre de asistență pentru ajutor cu întrebările dvs. legate de caracteristicile API-ului produsului Aspose și de funcționare."
 resourcetxt1="Docs"
 resourcelinks1="https://docs.aspose.com/pdf/net/"
 resourcetxt2="Referință API"
 resourcelinks2="https://reference.aspose.com/pdf/" 
 resourcetxt3="Bază de cunoștințe"
 resourcelinks3="https://kb.aspose.com/pdf/net/"
 resourcetxt4="Asistență gratuită"
 resourcelinks4="https://forum.aspose.com/c/pdf/10"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-wrapper
 resource-heading="Resurse"
 sectionid="support"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://blog.aspose.com/"
 resourcetitle="Bloguri"
 resourcealt="Bloguri"
 resourceimg="/images/blog1.svg"
 resourcelistlink="https://blog.aspose.com/pdf/convert-latex-to-pdf-in-python/"
 resourcelistlink2="https://blog.aspose.com/pdf/convert-pdf-to-ppt-in-python/"
 resourcelistlink3="https://blog.aspose.com/pdf/convert-pdf-to-latex-in-python/"
 resourcelisttext="Convertiți LaTeX în PDF în Python"
 resourcelisttext2="Convertiți PDF în PPT în Python"
 resourcelisttext3="Convertiți PDF în LaTeX în Python"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://docs.aspose.com/"
 resourcetitle="Documentație"
 resourcealt="Documentație"
 resourceimg="/img/docs1.svg"
 resourcelistlink="https://docs.aspose.com/pdf/net/key-features/"
 resourcelistlink2="https://www.nuget.org/packages/Aspose.PDF/"
 resourcelistlink3="https://helpdesk.aspose.com/"
 resourcelisttext="Aspose.PDF pentru caracteristici .NET"
 resourcelisttext2="Instalați Aspose.PDF pentru pachetul .NET NuGet"
 resourcelisttext3="Aspose.PDF pentru .NET Paid Support Helpdesk"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://kb.aspose.com/"
 resourcetitle="Bază de cunoștințe"
 resourcealt="Exemple de cod"
 resourceimg="/images/code1.svg"
 resourcelistlink="https://kb.aspose.com/words/net/how-to-insert-hyperlink-in-word-using-csharp/"
 resourcelistlink2="https://kb.aspose.com/total/python/how-to-install-python-to-run-aspose-pdf-for-python-via-net/"
 resourcelistlink3="https://kb.aspose.com/pdf/net/how-to-add-hyperlink-in-pdf-using-csharp/"
 resourcelisttext="Cum să inserați hyperlink în Word folosind C#"
resourcelisttext2="Cum se instalează Python pentru a rula Aspose.PDF pentru Python prin .NET"
resourcelisttext3="Cum să adăugați hyperlink în PDF folosind C#"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Sunteți gata să începeți?"
rtstext="Descarcare varianta scurta de prezentare gratuita"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="Vedeți toate API-urile"
>}}
