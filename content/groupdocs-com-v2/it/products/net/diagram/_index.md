---
title: .NET Visio Diagram API per creare, modificare ed elaborare diagrammi
description: C# .NET Visio Diagram API per la creazione, la modifica e l'elaborazione di file VSD, VSX, VTX, VSDX e altri file Visio. Converti diagrammi in formati PDF, PNG e HTML.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle=".NET Visio Diagram API per creare, modificare, esportare ed elaborare diagrammi"
  inheadertext="L'ultima API per la creazione di diagrammi .NET per generare, manipolare e convertire in modo impeccabile i formati di file Microsoft Visio come VSD, VDX, VSX, VSX, VSSX, VTX e VTSX con file di diagramma Visio basato su C#, ASP.NET e VB.NET app di elaborazione."
  ctabtn="Scarica la prova gratuita"
  ctabtn="Scarica la prova gratuita"
  ctalink="https://releases.aspose.com/diagram/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Visualizza tutte le API"
  bchomelink="/"
  bchome="Casa"
  bcpage="Diagramma"
  bclink2="Prodotti"
  bclink3=".NET"
  bclink2url="/products/"
  bclink3url="/products/net/"
  >}}
{{< homepage/conholdate/com/inner-wrapper/sub-nav 
subnav1="#overview"
subnavtxt1="Panoramica" 
subnav2="#features"
subnavtxt2="Caratteristiche" 
subnav3="#support"
subnavtxt3="Supporto" 
subnav4="#examples"
subnavtxt4="Esempi" 
subnav5="https://purchase.aspose.com/pricing/diagram/net"
subnavtxt5="Prezzi" 
subbtn1="https://docs.aspose.com/diagram/net/"
subbtntxt1="Imparare"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="Acquistare"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="Un'API .NET completa per l'elaborazione dei diagrammi di Microsoft Visio"
   subtext="Aspose.Diagram per .NET è un'API per diagrammi Visio flessibile e completa che consente agli sviluppatori di software e app di creare potenti app di elaborazione file Visio su C#, ASP.NET e VB.NET. Con l'aiuto di questa API nativa per la creazione di diagrammi .NET, puoi creare applicazioni per dispositivi mobili, soluzioni desktop e strumenti per interfacce Web per creare, modificare, trasformare ed esportare diagrammi di Microsoft Visio. La libreria Aspose.Diagram per .NET supporta i formati di file Visio più diffusi come VSD, VSDX, VTX, VDX, VSX, VSSX, VTSX, VSDM e VSSM. Puoi sviluppare rapidamente e facilmente sofisticate soluzioni di conversione dei diagrammi utilizzando questa API del diagramma .NET Visio e convertire i tuoi file Visio in formati di file PDF, JPG, PNG, BMP, HTML, XPS, SVG ed EMF."
   subtext2="Tra le numerose funzionalità avanzate di elaborazione dei file Visio, Aspose.Diagram per .NET consente di ruotare forme, recuperare informazioni su connettori e caratteri, raggruppare forme, inserire immagini nei disegni, aggiungere nuove pagine ai disegni Visio e fare molto altro. Inoltre, puoi anche disegnare rettangoli, polilinee, Bezier e molte altre forme sulle pagine di Visio."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Iniziare</h2>
   <p>Verifica i prerequisiti nella pagina <a href="https://docs.aspose.com/diagram/net/system-requirements/">Requisiti di sistema</a> prima di impostare l'API di diagrammi .NET per un'installazione ottimizzata e l'esperienza di utilizzo dell'API.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.Diagram per l'installazione di .NET"
>}}
<p>Per installare Aspose.Diagram per l'API .NET, puoi scaricare le DLL o il programma di installazione MSI dalla <a href="https://releases.aspose.com/diagram/net/">sezione download</a>. In alternativa, puoi utilizzare il <a href="https://www.nuget.org/packages/Aspose.Diagram/">pacchetto NuGet</a> per configurare l'API del diagramma di Visio per .NET. Di seguito è riportato il comando per la console del gestore pacchetti:</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp1"
>}}
PM > Install-Package Aspose.Diagram 
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Come creare diagrammi di Visio da zero e convertire Visio in PDF in .NET"
featuretext="Gli sviluppatori possono creare a livello di programmazione diagrammi MS Visio da zero utilizzando Aspose.Diagram per la libreria .NET. Puoi facilmente inserire nuove pagine e forme o manipolare diverse proprietà delle forme nei file di diagramma che crei. Anche la conversione indipendente dei formati di diagramma VSD e VSDX Visio in file PDF ad alta fedeltà è supportata dall'API di creazione di diagrammi .NET."
>}}
{{< products/product-feature-blocks-col
featurecolheading="Crea diagrammi di Visio da zero in .NET"
>}}
<p>Aspose.Diagram per .NET API è una soluzione completa per la manipolazione dei diagrammi che consente agli sviluppatori di creare diagrammi di Visio caricati con tutti gli elementi essenziali come forme, diagrammi di flusso, commenti e molto altro. È possibile utilizzare l'API del diagramma .NET per creare documenti Visio da zero con l'aiuto dei passaggi e delle informazioni indicati di seguito:</p>
<ul>
   <li>Controlla se la directory per salvare il file esiste.</li>
   <li>Crea una directory se non esiste.</li>
   <li>Inizializza un oggetto della classe <a href="https://reference.aspose.com/diagram/net/aspose.diagram/diagram">Diagram</a>.</li>
   <li>Salva il diagramma come VSDX utilizzando <a href="https://reference.aspose.com/diagram/net/aspose.diagram.diagram/save/methods/2">Diagram.Save(String fileName, SaveFileFormat.VSDX)</a> metodo.</li>
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
featurecolheading="Converti diagrammi MS Visio in PDF in .NET"
>}}
<p>La conversione dei file in formato PDF semplifica la condivisione e l'accesso a più dispositivi. Aspose.Diagram per l'API .NET consente di convertire i diagrammi di Visio in formato PDF all'interno delle app C# .NET. È possibile convertire in modo programmatico VSD o VSDX in PDF con un'elevata qualità di conversione. I seguenti passaggi e informazioni ti aiuteranno a raggiungere questo obiettivo:</p>
<ul>
   <li>Inizializza l'oggetto di classe <a href="https://apireference.aspose.com/diagram/net/aspose.diagram">Diagram</a> per caricare il file Visio di input da convertire.</li>
   <li>Crea un'istanza dell'oggetto di classe <a href="https://reference.aspose.com/diagram/net/aspose.diagram.saving/pdfsaveoptions/">PdfSaveOptions</a>.</li>
   <li>Imposta le proprietà del file come il conteggio delle pagine e l'indice delle pagine.</li>
   <li>Salva il file di output come PDF.</li>
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
   <p class="col-lg-12">Altri esempi funzionanti di Aspose.Diagram per l'API .NET sono disponibili su <a href="https://github.com/aspose-diagram/Aspose.Diagram-for-.NET/tree/master/Examples">GitHub Examples </a> pagina. Offriamo <a href="https://products.aspose.app/diagram/family/">app online gratuite</a> di Aspose.Diagram per modificare, visualizzare, convertire, unire, filigranare, dividere e comprimere Microsoft File di diagrammi di Visio al volo utilizzando i tuoi dispositivi mobili o desktop. Sentiti libero di provare le app online per manipolare i diagrammi di Visio da qualsiasi luogo.</p>
{{< products/product-feature-blocks
featureheading="Manipolare e stampare in modo indipendente i file Visio"
featuretext="Aspose.Diagram per .NET API consente di accedere e leggere i dati dai file Microsoft Visio, elaborarli e stampare i file elaborati in alta qualità con più opzioni di stampa, utilizzando una codifica minima. Non è necessario installare Microsoft Office o Microsoft Visio durante l'elaborazione dei file di diagramma di Visio con Aspose.Diagram per .NET, offrendoti un'esperienza utente indipendente."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="FAQ"
   >}}
   {{< products/faq-block
   faqquery="1. Come posso convertire i diagrammi di Microsoft Visio in .NET?"
   faqanswer="La conversione dei diagrammi di Visio in .NET è semplice e veloce utilizzando Aspose.Diagram per l'API .NET. Sono necessarie solo poche righe di codifica .NET per convertire i tuoi file VSD, VSDX, VSX, VTX, VDX, VSDM e altri diagrammi in diversi formati di file."
   >}}
   {{< products/faq-block
   faqquery="2. Quanto tempo è necessario per convertire o elaborare i diagrammi di Visio?"
   faqanswer="L'API del diagramma .NET funziona velocemente e completa le richieste di conversione del diagramma in pochissimo tempo."
   >}}
   {{< products/faq-block
   faqquery="3. È sicuro elaborare i diagrammi di Visio utilizzando l'API .NET?"
   faqanswer="Puoi essere certo della sicurezza dei tuoi file di diagramma durante l'elaborazione utilizzando Aspose.Diagram per l'API .NET. Garantiamo la privacy dei tuoi dati e adottiamo tutte le misure necessarie per offrirti un'esperienza utente sicura."
   >}}
   {{< products/faq-block
   faqquery="4. Posso elaborare i diagrammi MS Visio su Mac OS, Windows o Linux?"
   faqanswer="Sì, l'API di creazione di diagrammi per .NET funziona su diversi sistemi operativi, framework e ambienti operativi. Puoi usarlo sulla piattaforma che preferisci e non richiede alcuna installazione di software aggiuntivo per funzionare."
   >}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="Strumenti di manipolazione dei diagrammi di Visio"
>}}
   {{< products/popularapp-anchor
anchorlink="da VSD a VSSX"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsd-to-vssx/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Da VSDX a VSTM"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsdx-to-vstm/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Da VDX a VSDX"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vdx-to-vsdx/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Da VSDM a VSSM"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsdm-to-vssm/"
>}} 
   {{< products/popularapp-anchor
anchorlink="da VSD a TIFF"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsd-to-tiff/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Da VSDX a BMP"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsdx-to-bmp/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Da VSDM a JPEG"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsdm-to-jpeg/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Da VDX a PNG"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vdx-to-png/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Da VSD a PDF"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsd-to-pdf/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSDX in PDF"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsdx-to-pdf/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSX in PDF"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsx-to-pdf/"
>}}  
   {{< products/popularapp-anchor
anchorlink="VSTM in PDF"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vstm-to-pdf/"
>}}
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Cerchi aiuto?"
bartext="Dai un'occhiata ai nostri canali di supporto per assistenza con le tue domande relative alle funzionalità e al funzionamento dell'API del prodotto Aspose."
resourcetxt1="Docs"
resourcelinks1="https://docs.aspose.com/diagram/net/"
resourcetxt2="Riferimento API"
resourcelinks2="https://reference.aspose.com/diagram/" 
resourcetxt3="base di conoscenza"
resourcelinks3="https://kb.aspose.com/diagram/net/"
resourcetxt4="Supporto gratuito"
resourcelinks4="https://forum.aspose.com/c/diagram/17"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-wrapper
resource-heading="Risorse"
sectionid="support"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://blog.aspose.com/"
resourcetitle="Blog"
resourcealt="Blog"
resourceimg="/images/blog1.svg"
resourcelistlink="https://blog.aspose.com/diagram/convert-image-to-visio-in-csharp/"
resourcelistlink2="https://blog.aspose.com/diagram/create-org-chart-csharp/"
resourcelistlink3="https://blog.aspose.com/diagram/find-replace-visio-text-csharp/"
resourcelisttext="Converti immagine in Visio in C#"
resourcelisttext2="Crea organigramma a livello di codice in C#"
resourcelisttext3="Trova e sostituisci testo nei file Visio in C#"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://docs.aspose.com/"
resourcetitle="Documentazione"
resourcealt="Documentazione"
resourceimg="/img/docs1.svg"
resourcelistlink="https://docs.aspose.com/diagram/net/feature-list/"
resourcelistlink2="https://www.nuget.org/packages/Aspose.Diagram/"
resourcelistlink3="https://helpdesk.aspose.com/"
resourcelisttext="Aspose.Diagram per le funzionalità .NET"
resourcelisttext2="Installare Aspose.Diagram per il pacchetto .NET NuGet"
resourcelisttext3="Aspose.Diagram per Helpdesk di supporto a pagamento .NET"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://kb.aspose.com/"
resourcetitle="base di conoscenza"
resourcealt="Esempi di codice"
resourceimg="/images/code1.svg"
resourcelistlink="https://kb.aspose.com/diagram/net/how-to-add-comment-to-visio-drawings-in-c-sharp/"
resourcelistlink2="https://kb.aspose.com/diagram/net/how-to-merge-visio-files-in-csharp/"
resourcelistlink3="https://kb.aspose.com/diagram/net/how-to-convert-vsx-to-html-in-c-sharp/"
resourcelisttext="Come aggiungere commenti ai disegni di Visio in C#"
resourcelisttext2="Come unire i file di Visio in C#"
resourcelisttext3="Come convertire VSX in HTML in C#"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Pronto per iniziare?"
rtstext="Scarica la prova gratuita"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="Visualizza tutte le API"
>}}
