---
title: .NET Visio Diagram API pentru a crea, edita și procesa diagrame
description: C# .NET Visio Diagram API pentru crearea, editarea și procesarea fișierelor VSD, VSX, VTX, VSDX și alte fișiere Visio. Convertiți diagramele în formate PDF, PNG și HTML.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle=".NET Visio Diagram API pentru a crea, edita, exporta și procesa diagrame"
  inheadertext="Cel mai bun API de diagramă .NET pentru a genera, manipula și converti fără probleme formate de fișiere Microsoft Visio, cum ar fi VSD, VDX, VSX, VSX, VSSX, VTX și VTSX cu fișiere de diagramă Visio bazate pe C#, ASP.NET și VB.NET procesarea aplicațiilor."
  ctabtn="Descarcare varianta scurta de prezentare gratuita"
  ctabtn="Descarcare varianta scurta de prezentare gratuita"
  ctalink="https://releases.aspose.com/diagram/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Vedeți toate API-urile"
  bchomelink="/"
  bchome="Acasă"
  bcpage="Diagramă"
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
subnav5="https://purchase.aspose.com/pricing/diagram/net"
subnavtxt5="Prețuri" 
subbtn1="https://docs.aspose.com/diagram/net/"
subbtntxt1="Învăța"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="Cumpără"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="Un API .NET cu funcții complete pentru procesarea diagramelor Microsoft Visio"
   subtext="Aspose.Diagram pentru .NET este o diagramă API Visio flexibilă și cuprinzătoare care permite dezvoltatorilor de software și aplicații să creeze aplicații puternice de procesare a fișierelor Visio în C#, ASP.NET și VB.NET. Cu ajutorul acestui API nativ pentru diagrame .NET, puteți construi aplicații mobile, soluții desktop și instrumente pentru interfețe web pentru a crea, modifica, transforma și exporta diagrame Microsoft Visio. Biblioteca Aspose.Diagram pentru .NET acceptă formate populare de fișiere Visio, cum ar fi VSD, VSDX, VTX, VDX, VSX, VSSX, VTSX, VSDM și VSSM. Puteți dezvolta rapid și ușor soluții sofisticate de conversie a diagramelor folosind acest API pentru diagrame .NET Visio și puteți converti fișierele Visio în formate de fișiere PDF, JPG, PNG, BMP, HTML, XPS, SVG și EMF."
   subtext2="Printre multe dintre caracteristicile sale avansate de procesare a fișierelor Visio, Aspose.Diagram pentru .NET permite rotirea formelor, preluarea informațiilor despre conectori și fonturi, gruparea formelor, injectarea de imagini în desene, adăugarea de noi pagini la desenele Visio și multe altele. În plus, puteți desena dreptunghiuri, polilinii, Bezier și multe alte forme pe paginile Visio."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Noțiuni de bază</h2>
   <p>Vă rugăm să verificați cerințele preliminare pe pagina <a href="https://docs.aspose.com/diagram/net/system-requirements/">Cerințe de sistem</a> înainte de a configura API-ul de diagramă .NET pentru o instalare optimizată și experiență de utilizare a API.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.Diagram pentru instalare .NET"
>}}
<p>Pentru a instala Aspose.Diagram pentru API .NET, puteți descărca DLL-urile sau programul de instalare MSI din <a href="https://releases.aspose.com/diagram/net/">secțiunea de descărcări</a>. Sau puteți utiliza <a href="https://www.nuget.org/packages/Aspose.Diagram/">pachetul NuGet</a> pentru a configura API-ul Visio diagram pentru .NET. Comanda pentru consola managerului de pachete este dată mai jos:</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp1"
>}}
PM > Install-Package Aspose.Diagram 
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Cum să creați diagrame Visio de la zero și să convertiți Visio în PDF în .NET"
featuretext="Dezvoltatorii pot crea în mod programatic diagrame MS Visio de la zero utilizând biblioteca Aspose.Diagram pentru .NET. Puteți insera fără efort pagini și forme noi sau puteți manipula diferite proprietăți de formă în fișierele diagramă pe care le creați. Conversia independentă a formatelor de diagramă VSD și VSDX Visio în fișiere PDF de înaltă fidelitate este, de asemenea, acceptată de API-ul de diagramă .NET."
>}}
{{< products/product-feature-blocks-col
featurecolheading="Creați diagrame Visio de la zero în .NET"
>}}
<p>Aspose.Diagram pentru .NET API este o soluție completă de manipulare a diagramelor care le permite dezvoltatorilor să creeze diagrame Visio încărcate cu toate elementele esențiale, cum ar fi forme, diagrame, comentarii și multe altele. Puteți utiliza API-ul diagramei .NET pentru a crea documente Visio de la zero cu ajutorul pașilor și informațiilor de mai jos:</p>
<ul>
   <li>Verificați dacă directorul pentru salvarea fișierului există.</li>
   <li>Creați un director dacă nu există.</li>
   <li>Inițializați un obiect din clasa <a href="https://reference.aspose.com/diagram/net/aspose.diagram/diagram">Diagram</a>.</li>
   <li>Salvați diagrama ca VSDX folosind <a href="https://reference.aspose.com/diagram/net/aspose.diagram.diagram/save/methods/2">Diagram.Save(String fileName, SaveFileFormat.VSDX)</a> metoda.</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp2"
>}}
// The path to the documents directory.
string dataDir = RunExamples.GetDataDir_Diagrams();
// Create a directory if it is not already present.
bool IsExists = System.IO.Directory.Exists(dataDir);
if (!IsExists)
    System.IO.Directory.CreateDirectory(dataDir);
// Initialize a new Visio
Diagram diagram = new Diagram();
dataDir = dataDir + "CreateDiagram_out.vsdx";
// Save in the VSDX format
diagram.Save(dataDir, SaveFileFormat.VSDX);
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks-col
featurecolheading="Convertiți diagramele MS Visio în PDF în .NET"
>}}
<p>Convertirea fișierelor în format PDF facilitează partajarea și accesarea acestora pe mai multe dispozitive. Aspose.Diagram pentru .NET API permite convertirea diagramelor Visio în format PDF în aplicațiile dvs. C# .NET. Puteți converti programatic VSD sau VSDX în PDF cu o calitate ridicată a conversiei. Următorii pași și informații vă vor ajuta să realizați acest lucru:</p>
<ul>
   <li>Inițializați obiectul de clasă <a href="https://apireference.aspose.com/diagram/net/aspose.diagram">Diagram</a> pentru a încărca fișierul Visio de intrare de convertit.</li>
   <li>Instanciați obiectul clasei <a href="https://reference.aspose.com/diagram/net/aspose.diagram.saving/pdfsaveoptions/">PdfSaveOptions</a>.</li>
   <li>Setați proprietățile fișierului, cum ar fi numărul de pagini și indexul paginii.</li>
   <li>Salvați fișierul de ieșire ca PDF.</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp3"
>}}
// Load Visio diagram
Aspose.Diagram.Diagram diagram = new Aspose.Diagram.Diagram("Sample.vsd");
// Declare PdfSaveOptions object
Aspose.Diagram.Saving.PdfSaveOptions saveOptions = new Aspose.Diagram.Saving.PdfSaveOptions();
// Number of pages to render
saveOptions.PageCount = 2;
// Set first page index
saveOptions.PageIndex = 1;
// Save Visio diagram to PDF
diagram.Save("PDF_out.pdf", saveOptions);
Console.WriteLine("Done");
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< /products/product-feature-blocks >}}
   <p class="col-lg-12">Mai multe exemple de lucru ale API-ului Aspose.Diagram pentru .NET sunt disponibile pe <a href="https://github.com/aspose-diagram/Aspose.Diagram-for-.NET/tree/master/Examples">Exemple GitHub </a> pagină. Oferim <a href="https://products.aspose.app/diagram/family/">aplicații online gratuite</a> de Aspose.Diagram pentru a edita, vizualiza, converti, îmbina, filigran, împărți și comprima Microsoft Fișierele diagramă Visio din mers folosind dispozitivele dvs. mobile sau desktop. Vă rugăm să nu ezitați să încercați aplicațiile online pentru manipularea diagramelor Visio de oriunde.</p>
{{< products/product-feature-blocks
featureheading="Manipulați și imprimați în mod independent fișierele Visio"
featuretext="Aspose.Diagram pentru .NET API permite accesarea și citirea datelor din fișierele Microsoft Visio, procesarea acestora și imprimarea fișierelor procesate la calitate înaltă, cu mai multe opțiuni de imprimare, folosind codificare minimă. Nu trebuie să instalați Microsoft Office sau Microsoft Visio atunci când procesați fișiere diagramă Visio cu Aspose.Diagram pentru .NET, oferindu-vă o experiență de utilizator independentă."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="FAQ"
   >}}
   {{< products/faq-block
   faqquery="1. Cum pot converti diagramele Microsoft Visio în .NET?"
   faqanswer="Convertirea diagramelor Visio în .NET este rapidă și ușoară folosind Aspose.Diagram pentru .NET API. Sunt necesare doar câteva linii de codare .NET pentru a vă converti fișierele VSD, VSDX, VSX, VTX, VDX, VSDM și alte diagrame în diferite formate de fișiere."
   >}}
   {{< products/faq-block
   faqquery="2. Cât durează convertirea sau procesarea diagramelor Visio?"
   faqanswer=".NET diagramă API funcționează rapid și completează solicitările de conversie a diagramei în cel mai scurt timp."
   >}}
   {{< products/faq-block
   faqquery="3. Este sigur să procesați diagrame Visio folosind .NET API?"
   faqanswer="Puteți fi sigur de securitatea fișierelor diagramă în timp ce le procesați folosind Aspose.Diagram pentru .NET API. Asigurăm confidențialitatea datelor dumneavoastră și luăm toate măsurile necesare pentru a vă oferi o experiență de utilizator sigură."
   >}}
   {{< products/faq-block
   faqquery="4. Pot procesa diagramele MS Visio pe Mac OS, Windows sau Linux?"
   faqanswer="Da, API-ul de diagramă pentru .NET funcționează în diferite sisteme de operare, cadre și medii de operare. Îl puteți folosi pe platforma dorită și nu necesită nicio instalare software suplimentară pentru a funcționa."
   >}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="Instrumente de manipulare a diagramelor Visio"
>}}
   {{< products/popularapp-anchor
anchorlink="VSD la VSSX"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsd-to-vssx/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSDX la VSTM"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsdx-to-vstm/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VDX la VSDX"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vdx-to-vsdx/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSDM la VSSM"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsdm-to-vssm/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSD în TIFF"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsd-to-tiff/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSDX în BMP"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsdx-to-bmp/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSDM în JPEG"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsdm-to-jpeg/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VDX în PNG"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vdx-to-png/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSD în PDF"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsd-to-pdf/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSDX în PDF"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsdx-to-pdf/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSX în PDF"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsx-to-pdf/"
>}}  
   {{< products/popularapp-anchor
anchorlink="VSTM în PDF"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vstm-to-pdf/"
>}}
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Cauți ajutor?"
bartext="Consultați canalele noastre de asistență pentru ajutor cu întrebările dvs. legate de caracteristicile API-ului produsului Aspose și de funcționare."
resourcetxt1="Docs"
resourcelinks1="https://docs.aspose.com/diagram/net/"
resourcetxt2="Referință API"
resourcelinks2="https://reference.aspose.com/diagram/" 
resourcetxt3="Bază de cunoștințe"
resourcelinks3="https://kb.aspose.com/diagram/net/"
resourcetxt4="Asistență gratuită"
resourcelinks4="https://forum.aspose.com/c/diagram/17"
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
resourcelistlink="https://blog.aspose.com/diagram/convert-image-to-visio-in-csharp/"
resourcelistlink2="https://blog.aspose.com/diagram/create-org-chart-csharp/"
resourcelistlink3="https://blog.aspose.com/diagram/find-replace-visio-text-csharp/"
resourcelisttext="Convertiți imaginea în Visio în C#"
resourcelisttext2="Creați diagramă ORG în mod programatic în C#"
resourcelisttext3="Găsiți și înlocuiți text în fișierele Visio în C#"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://docs.aspose.com/"
resourcetitle="Documentație"
resourcealt="Documentație"
resourceimg="/img/docs1.svg"
resourcelistlink="https://docs.aspose.com/diagram/net/feature-list/"
resourcelistlink2="https://www.nuget.org/packages/Aspose.Diagram/"
resourcelistlink3="https://helpdesk.aspose.com/"
resourcelisttext="Aspose.Diagram pentru caracteristici .NET"
resourcelisttext2="Instalați Aspose.Diagram pentru pachetul .NET NuGet"
resourcelisttext3="Aspose.Diagram pentru .NET Paid Support Helpdesk"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://kb.aspose.com/"
resourcetitle="Bază de cunoștințe"
resourcealt="Exemple de cod"
resourceimg="/images/code1.svg"
resourcelistlink="https://kb.aspose.com/diagram/net/how-to-add-comment-to-visio-drawings-in-c-sharp/"
resourcelistlink2="https://kb.aspose.com/diagram/net/how-to-merge-visio-files-in-csharp/"
resourcelistlink3="https://kb.aspose.com/diagram/net/how-to-convert-vsx-to-html-in-c-sharp/"
resourcelisttext="Cum să adăugați comentarii la desenele Visio în C#"
resourcelisttext2="Cum să îmbinați fișierele Visio în C#"
resourcelisttext3="Cum se convertesc VSX în HTML în C#"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Sunteți gata să începeți?"
rtstext="Descarcare varianta scurta de prezentare gratuita"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="Vedeți toate API-urile"
>}}
