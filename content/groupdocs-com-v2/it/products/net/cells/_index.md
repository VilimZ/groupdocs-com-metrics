---
title: API di elaborazione dei formati di file del foglio di calcolo Excel per C# .NET
description: Una solida libreria Excel .NET per creare, visualizzare ed elaborare fogli di calcolo Excel in C#, ASP.NET e VB.NET. Converti Excel in PDF, JPEG, HTML e altri formati.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="API di elaborazione dei formati di file del foglio di calcolo Excel per C# .NET"
  inheadertext="Carica, esegui il rendering e manipola XLS, XLSX, XLSM, XLT, ODS, CSV e altri formati di file Microsoft Excel su piattaforme .NET Core e Xamarin. Crea app per l'elaborazione di fogli di calcolo in ASP.NET e VB.NET per convertire Excel in PDF, Excel in JPG e molti altri formati."
  ctabtn="Scarica la prova gratuita"
  ctabtn="Scarica la prova gratuita"
  ctalink="https://releases.aspose.com/cells/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Visualizza tutte le API"
  bchomelink="/"
  bchome="Casa"
  bcpage="Cellule"
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
subnav5="https://purchase.aspose.com/pricing/cells/net" 
subnavtxt5="Prezzi" 
subbtn1="https://docs.aspose.com/cells/net/" 
subbtntxt1="Imparare"
subbtn2="https://purchase.aspose.com/buy" 
subbtntxt2="Acquistare"
>}}
   {{< products/subtext-wrapper 
   sectionid="overview"
   subtitle="Elaborazione di fogli di calcolo Excel ad alte prestazioni in .NET"
   subtext="Aspose.Cells per .NET è una libreria affidabile e ricca di funzionalità che consente agli sviluppatori .NET di creare, caricare, eseguire il rendering ed esportare file di fogli di calcolo Excel all'interno delle app C#, ASP.NET e VB.NET. Utilizzando questa libreria, puoi leggere, visualizzare, modificare e scrivere fogli Excel ed eseguire attività avanzate come il calcolo di formule, la gestione di grafici e tabelle pivot e la formattazione del testo nei fogli di calcolo. Inoltre, puoi anche lavorare con funzionalità come la gestione di righe, colonne e celle del foglio di lavoro, l'applicazione della formattazione condizionale, la manipolazione delle regole di convalida dei dati, gli intervalli denominati e molto altro. Aspose.Cells per .NET API supporta un'ampia gamma di formati di file noti come XLS, XLT, XLSM, XLSX, XLTX, XLTM, ODS, CSV, TSV e HTML." 
   subtext2="Non vi è alcuna dipendenza da Microsoft Excel o da qualsiasi software esterno durante l'utilizzo di Aspose.Cells per .NET, consentendo agli utenti di godere di un'esperienza di manipolazione del foglio di calcolo multipiattaforma completamente indipendente. Gli sviluppatori possono creare app intelligenti per la conversione di file Excel per convertire in modo impeccabile Excel in PDF, Excel in JPG, Excel in HTML e altri tipi di file utilizzando questa API di elaborazione di fogli di calcolo per C# .NET."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Iniziare</h2>
   <p>Si prega di controllare le seguenti informazioni per configurare e utilizzare correttamente Aspose.Cells per l'API .NET. Consulta anche la pagina <a href="https://docs.aspose.com/cells/net/system-requirements/">Requisiti di sistema</a> per un elenco di prerequisiti per configurare correttamente l'API dei documenti di Excel per .NET</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper 
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.Cells per l'installazione di .NET"
>}}
<p>Per configurare Aspose.Cells per .NET sul tuo sistema, scarica direttamente le DLL o il programma di installazione MSI dalla <a href="https://releases.aspose.com/cells/net/">sezione download</a >. In alternativa, puoi utilizzare il <a href="https://www.nuget.org/packages/Aspose.Cells/">pacchetto NuGet</a> per l'installazione dell'API di elaborazione del foglio di calcolo .NET. Di seguito viene fornito il comando del gestore pacchetti.</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp1"
>}}
PM> Install-Package Aspose.Cells
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Come convertire Excel in PDF in .NET e unire rapidamente le cartelle di lavoro di Excel"
featuretext="Aspose.Cells per .NET API consente agli sviluppatori .NET di convertire abilmente le cartelle di lavoro di Microsoft Excel in diversi formati di file. La conversione di Excel in PDF è facile utilizzando l'API Excel .NET che ti consente di convertire XLS in PDF e XLSX in PDF all'interno delle tue app di conversione file .NET. Inoltre, puoi unire le cartelle di lavoro di Excel e salvare il documento elaborato come file unificato con l'aiuto dell'API di elaborazione del foglio di calcolo .NET."
>}}
{{< products/product-feature-blocks-col
featurecolheading="Converti Excel in PDF in .NET"
>}}
<p>Aggiorna le tue app di conversione file .NET integrando la funzionalità di conversione da Excel a PDF utilizzando Aspose.Cells per la libreria .NET. Converti facilmente i file XLS e XLSX in formato PDF utilizzando una quantità minima di codice. Fare riferimento alle seguenti informazioni e al codice di esempio per convertire Excel in PDF nella piattaforma .NET:</p>
<ul>
   <li>Crea un'istanza della classe <a href="https://reference.aspose.com/net/cells/aspose.cells/workbook">Cartella di lavoro</a> e aggiungi il documento Excel che desideri convertire.</li>
   <li>Salva il documento Excel in formato PDF utilizzando il metodo <a href="https://reference.aspose.com/cells/net/aspose.cells/workbook/save/#save_3">Salva</a>. Specifica il formato PDF utilizzando l'enumerazione <a href="https://reference.aspose.com/net/cells/aspose.cells/saveformat">SaveFormat</a>.</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp2"
>}}
// Instantiate the Workbook object with the Excel file
Workbook workbook = new Workbook("SampleExcel.xls");
// Save the document in PDF format
workbook.Save("outputPDF.pdf", SaveFormat.Pdf);
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks-col 
featurecolheading="Unisci le cartelle di lavoro di MS Excel in .NET"
>}}
<p>Unisci a livello di codice più cartelle di lavoro di Excel e combinale in un unico file Excel con l'aiuto di Aspose.Cells per l'API .NET. Migliora le tue app per la fusione di documenti .NET inserendo la funzionalità di fusione delle cartelle di lavoro di MS Excel. Si prega di rivedere il frammento di codice indicato di seguito e le informazioni per la combinazione di più cartelle di lavoro:</p>
<ul>
   <li>Crea due istanze della classe <a href="https://reference.aspose.com/net/cells/aspose.cells/workbook">Cartella di lavoro</a>, una per ciascuna delle due cartelle di lavoro da combinare.</li>
   <li>Unisci le due cartelle di lavoro utilizzando il metodo <a href="https://reference.aspose.com/cells/net/aspose.cells/workbook/combine/">Combina</a></li>
   <li>Salva la cartella di lavoro Excel combinata utilizzando il metodo <a href="https://reference.aspose.com/cells/net/aspose.cells/workbook/save#save_2">Salva</a>.</li>
</ul>
{{< products/product-feature-blocks-snip 
snipclass="greysnipp" 
copyID="snipp3"
>}}
// Define the first source workbook
// Open the first excel file.
Workbook SourceBook1 = new Workbook(dataDir+ "SampleChart.xlsx");
// Define the second source workbook.
// Open the second excel file.
Workbook SourceBook2 = new Workbook(dataDir+ "SampleImage.xlsx");
// Combine the two workbooks
SourceBook1.Combine(SourceBook2);
// Save the target book file.
SourceBook1.Save("Combined.out.xlsx");
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< /products/product-feature-blocks >}}
   <p class="col-lg-12">Per verificare altri esempi funzionanti di Aspose.Cells per l'API .NET, visitare <a href="https://github.com/aspose-cells/Aspose.Cells-for-.NET/tree/master/Examples"> Esempi di GitHub</a> pagina. Puoi visualizzare, modificare, convertire, unire, dividere, annotare, filigranare, analizzare, confrontare, comprimere o cercare i documenti Excel da qualsiasi luogo utilizzando i tuoi dispositivi mobili. Controlla le <a href="https://products.aspose.app/cells/family">Aspose.Cells Free Online Apps</a> per la manipolazione immediata del foglio di calcolo Excel.</p>
{{< products/product-feature-blocks
featureheading="Controlli GUI e calcoli di formule avanzate in .NET"
featuretext="Genera rapidamente fogli di calcolo dall'aspetto professionale completi di tabelle pivot e grafici utilizzando i controlli della GUI offerti da Aspose.Cells per l'API .NET. Aiutati a creare desktop interattivi e app per fogli di calcolo Excel basate sul Web senza la necessità di codifica estesa. Oltre alle caratteristiche dell'interfaccia grafica, questa libreria per l'elaborazione di fogli di calcolo .NET supporta molte funzioni standard e avanzate, operatori e un sistema completo di calcolo delle formule in grado di gestire formule complesse."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper 
   faqtitle="FAQ"
>}}
   {{< products/faq-block
   faqquery="1. Come posso convertire documenti Excel in .NET?"
   faqanswer="La conversione di documenti Microsoft Excel in .NET è semplice e veloce utilizzando Aspose.Cells per l'API .NET. È possibile convertire i fogli di calcolo di Microsoft Excel in .NET in diversi formati di file utilizzando la codifica minima."
>}}
   {{< products/faq-block
   faqquery="2. Quanto tempo ci vuole per convertire o elaborare fogli di calcolo Excel?"
   faqanswer="L'API del foglio di calcolo .NET offre velocità di elaborazione fulminee ed esegue la conversione e l'elaborazione dei documenti molto rapidamente."
>}}
   {{< products/faq-block
   faqquery="3. È sicuro elaborare documenti MS Excel utilizzando un'API di elaborazione di fogli di calcolo .NET?"
   faqanswer="Ovviamente! Puoi essere certo della sicurezza dei tuoi documenti durante l'elaborazione utilizzando Aspose.Cells per l'API .NET. Garantiamo la privacy dei tuoi dati e adottiamo tutte le misure necessarie per offrirti un'esperienza utente sicura."
>}}
   {{< products/faq-block
   faqquery="4. Posso elaborare documenti Microsoft Excel su Mac OS, Windows o Linux?"
   faqanswer="Sì, l'API .NET funziona su diversi sistemi operativi, framework e ambienti operativi. Puoi usarlo sulla piattaforma che preferisci. La libreria di elaborazione dei documenti .NET Excel non richiede alcuna installazione di software aggiuntivo per funzionare."
>}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="Strumenti di manipolazione dei fogli di calcolo Excel"
>}}
   {{< products/popularapp-anchor
anchorlink="Da Excel a PDF"
moreproducts="https://products.aspose.com/cells/net/conversion/excel-to-pdf/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Excel in JPG"
moreproducts="https://products.aspose.com/cells/net/conversion/excel-to-jpg/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Da Excel a PNG"
moreproducts="https://products.aspose.com/cells/net/conversion/excel-to-png/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Da Excel a HTML"
moreproducts="https://products.aspose.com/cells/net/conversion/excel-to-html/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Da Excel a ODS"
moreproducts="https://products.aspose.com/cells/net/conversion/excel-to-ods/"
>}} 
   {{< products/popularapp-anchor
anchorlink="XLSX in CSV"
moreproducts="https://products.aspose.com/cells/net/conversion/xlsx-to-csv/"
>}} 
   {{< products/popularapp-anchor
anchorlink="da XLSX a XPS"
moreproducts="https://products.aspose.com/cells/net/conversion/xlsx-to-xps/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Da Excel a JSON"
moreproducts="https://products.aspose.com/cells/net/conversion/excel-to-json/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Da Excel a SVG"
moreproducts="https://products.aspose.com/cells/net/conversion/excel-to-svg/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Da Excel a TSV"
moreproducts="https://products.aspose.com/cells/net/conversion/excel-to-tsv/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Da Excel a MD"
moreproducts="https://products.aspose.com/cells/net/conversion/excel-to-md/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Da Excel a TXT"
moreproducts="https://products.aspose.com/cells/net/conversion/excel-to-txt/"
>}} 
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Cerchi aiuto?"
bartext="Dai un'occhiata ai nostri canali di supporto per assistenza con le tue domande relative alle funzionalità e al funzionamento dell'API del prodotto Aspose."
resourcetxt1="Docs"
resourcelinks1="https://docs.aspose.com/cells/net/"
resourcetxt2="Riferimento API"
resourcelinks2="https://reference.aspose.com/cells/" 
resourcetxt3="base di conoscenza"
resourcelinks3="https://kb.aspose.com/cells/net/"
resourcetxt4="Supporto gratuito"
resourcelinks4="https://forum.aspose.com/c/cells/9"
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
resourcelistlink="https://blog.aspose.com/cells/convert-csv-to-json-csharp/"
resourcelistlink2="https://blog.aspose.com/cells/adjust-row-height-column-width-in-excel-csharp/"
resourcelistlink3="https://blog.aspose.com/cells/excel-to-csv-csharp/"
resourcelisttext="Converti CSV in JSON in C#"
resourcelisttext2="Regola l'altezza della riga e la larghezza della colonna in Excel"
resourcelisttext3="Converti Excel XLS XLSX in CSV in C#"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://docs.aspose.com/"
resourcetitle="Documentazione"
resourcealt="Documentazione"
resourceimg="/img/docs1.svg"
resourcelistlink="https://docs.aspose.com/cells/net/"
resourcelistlink2="https://www.nuget.org/packages/Aspose.Cells/"
resourcelistlink3="https://helpdesk.aspose.com/"
resourcelisttext="Aspose.Cells per documenti .NET"
resourcelisttext2="Installare Aspose.Cells per il pacchetto .NET NuGet"
resourcelisttext3="Aspose.Cells per Helpdesk di supporto a pagamento .NET"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://kb.aspose.com/"
resourcetitle="base di conoscenza"
resourcealt="Esempi di codice"
resourceimg="/images/code1.svg"
resourcelistlink="https://kb.aspose.com/cells/net/how-to-insert-comment-in-excel-using-csharp/"
resourcelistlink2="https://kb.aspose.com/cells/net/how-to-create-pivot-table-in-excel-using-csharp/"
resourcelistlink3="https://kb.aspose.com/cells/net/how-to-rotate-a-cell-in-excel-using-csharp/"
resourcelisttext="Come inserire un commento in Excel usando C#"
resourcelisttext2="Come creare una tabella pivot in Excel utilizzando C#"
resourcelisttext3="Come ruotare una cella in Excel usando C#"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Pronto per iniziare?"
rtstext="Scarica la prova gratuita"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="Visualizza tutte le API"
>}}
