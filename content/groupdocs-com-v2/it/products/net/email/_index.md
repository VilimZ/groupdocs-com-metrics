---
title: API di elaborazione della posta elettronica .NET per manipolare i file di posta elettronica di Outlook
description: Libreria di elaborazione e-mail leader per .NET per gestire i formati di file Thunderbird e Outlook, inclusi MSG, EML e MBOX tramite i protocolli SMPT, POP3 e IMAP.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="API di elaborazione della posta elettronica .NET per manipolare i file di posta elettronica di Outlook"
  inheadertext="Semplifica il processo di manipolazione dei file e-mail di Microsoft Outlook e Mozilla Thunderbird nelle tue app C#, ASP.NET e VB.NET. Lavora con i formati di file MSG, EML, PST, OST, MBOX, VCF e HTML. Gestisci in modo programmatico messaggi e-mail e allegati tramite POP3, SMTP, IMAP o Microsoft Exchange Server."
  ctabtn="Scarica la prova gratuita"
  ctabtn="Scarica la prova gratuita"
  ctalink="https://releases.aspose.com/email/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Visualizza tutte le API"
  bchomelink="/"
  bchome="Casa"
  bcpage="E-mail"
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
subnav5="https://purchase.aspose.com/pricing/email/net"
subnavtxt5="Prezzi" 
subbtn1="https://docs.aspose.com/email/net/"
subbtntxt1="Imparare"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="Acquistare"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="Un'API di posta elettronica .NET completa per la manipolazione e l'elaborazione dei messaggi di posta elettronica"
   subtext="Aspose.Email per .NET è un'API di elaborazione della posta elettronica flessibile, robusta e facile da usare che consente agli utenti di creare, modificare e analizzare i formati di file di posta elettronica più diffusi come MSG, PST, OST, EML, EMLX, MBOX, nonché come VCF, HTML e MHTML nella piattaforma .NET. Ciò consente agli utenti di lavorare con diversi formati di messaggi di posta elettronica senza preoccuparsi di eventuali problemi di compatibilità dei formati. Oltre ad accedere e gestire le e-mail di Thunderbird e Outlook, gli sviluppatori possono utilizzare l'API di posta elettronica di .NET per manipolare in modo programmatico gli allegati e-mail, aggiungere o rimuovere destinatari, modificare l'oggetto del messaggio e molto altro ancora. "
   subtext2="Inoltre, la capacità di convertire i messaggi di posta elettronica da un formato all'altro in C#, ASP.NET e VB.NET fa risaltare questa API di elaborazione della posta elettronica .NET nell'utilizzo e nel set di funzionalità. Puoi facilmente inviare e ricevere messaggi di posta elettronica utilizzando il protocollo di tua scelta tra POP3, SMTP, IMAP o connetterti a Microsoft Exchange Server. Aspose.Email per .NET ti aiuta ad automatizzare il processo di gestione della posta elettronica in modo efficiente."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Iniziare</h2>
   <p>Si prega di controllare la pagina <a href="https://docs.aspose.com/email/net/system-requirements/">Requisiti di sistema</a> per i prerequisiti prima di configurare Aspose.Email per .NET alla fine . Le seguenti informazioni ti aiuteranno a configurare correttamente l'API di posta elettronica .NET.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.Email per l'installazione di .NET"
>}}
<p>Per scaricare le DLL o il programma di installazione MSI, visita la <a href="https://releases.aspose.com/email/net/">sezione download</a>. In alternativa, puoi utilizzare il <a href="https://www.nuget.org/packages/Aspose.Email/">pacchetto NuGet</a> per l'installazione dell'API. Il comando del gestore pacchetti per configurare l'API di elaborazione della posta elettronica .NET è condiviso di seguito:</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp3"
>}}
PM > Install-Package Aspose.Email
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Come convertire le e-mail di Outlook in HTML e aprire i messaggi e-mail senza Outlook in .NET"
featuretext="Aspose.Email per l'API .NET consente di convertire in modo programmatico i messaggi MSG ed EML in formato HTML. Supporta anche l'accesso e l'apertura delle e-mail di Outlook all'interno delle tue app .NET senza bisogno di Microsoft Outlook."
>}}  
{{< products/product-feature-blocks-col
featurecolheading="Converti file MSG o EML in HTML in .NET"
>}}
<p>Trasforma senza problemi le e-mail di Outlook in formato HTML con l'aiuto di Aspose.Email per la libreria .NET. È possibile sviluppare un'applicazione di elaborazione della posta elettronica completa utilizzando l'API di posta elettronica .NET e incorporare la funzionalità di conversione della posta elettronica per convertire i formati MSG o EML in HTML. Si prega di fare riferimento allo snippet di codice e ad altre informazioni condivise di seguito per questo scopo:</p>
<ul>
   <li>Crea un'istanza dell'oggetto di classe <a href="https://reference.aspose.com/email/net/aspose.email/mailmessage/">MailMessage</a> per accedere al file MSG o EML di origine.</li>
   <li>Applicare le opzioni di salvataggio HTML per il file HTML di output.</li>
   <li>Salva o esporta il file MSG in formato HTML utilizzando il metodo Save.</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp1"
>}}
string FilePath = @"/Users/EmailData/";
// Load the MSG or EML file
MailMessage srcEmlMessage = MailMessage.Load(FilePath + "Message.msg");
// Set the Html rendering options
HtmlSaveOptions HtmlOptions = SaveOptions.DefaultHtml;
HtmlOptions.ResourceRenderingMode= resourceRenderingMode.EmbedIntoHtml;
// Set the email message headers in  output HTML using the formatting options
HtmlOptions.HtmlFormatOptions = HtmlFormatOptions.WriteHeader |
				HtmlFormatOptions.WriteCompleteEmailAddress |
				HtmlFormatOptions.WriteCompleteFromEmailAddress;
// Convert and save the email to HTML format
srcEmlMessage.Save(FilePath + "Message.html", HtmlOptions);
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks-col
featurecolheading="Apri le email in .NET senza Outlook"
>}}
<p>Stai cercando di aprire i messaggi di Outlook nelle tue app di elaborazione della posta elettronica .NET senza installare Microsoft Outlook? Se sì, Aspose.Email per .NET API è la scelta giusta per te. Consente agli sviluppatori .NET di accedere e aprire file di posta elettronica MSG e recuperare informazioni come l'oggetto dell'e-mail, l'indirizzo del mittente e gli allegati. Si prega di controllare le seguenti informazioni per saperne di più:</p>
<ul>
   <li>Carica il file di posta elettronica MSG di origine in un oggetto di classe <a href="https://reference.aspose.com/email/net/aspose.email.mapi/mapimessage/">MapiMessage</a>.</li>
   <li>Leggere e visualizzare diverse proprietà del file MSG.</li>
   <li>Analizza gli <a href="https://reference.aspose.com/email/net/aspose.email.mapi/mapimessageitembase/attachments">allegati</a> e leggi/visualizza diverse proprietà degli allegati nel MSG file.</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp2"
>}}
// Load the MSG file
MapiMessage mapiMsg = MapiMessage.Load("message.msg");
// Display email subject
Console.WriteLine("Subject:" + mapiMsg.Subject);
// Display sender address
Console.WriteLine("From:" + mapiMsg.SenderEmailAddress);
// Display email body
Console.WriteLine("Body" + mapiMsg.Body);
// Display recipients' information
Console.WriteLine("Recipient: " + mapiMsg.Recipients);
// Display email attachments
foreach (MapiAttachment att in mapiMsg.Attachments)
{
     Console.Write("File Name: " + att.FileName);
     Console.Write("Display Name: " + att.DisplayName);
}
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< /products/product-feature-blocks >}}
   <p class="col-lg-12">Per visualizzare altri esempi funzionanti e campioni di codifica di Aspose.Email per l'API .NET, visitare <a href="https://github.com/aspose-email/Aspose.Email-for-.NET/tree/master/">Esempi GitHub</a>. Forniamo anche <a href="https://products.aspose.app/email/family">app online gratuite</a> per Aspose.Email per aiutarti a convertire, confrontare, visualizzare, filigranare, unire, modificare e firma digitalmente i tuoi file e-mail al volo utilizzando i tuoi dispositivi mobili.</p>
{{< products/product-feature-blocks
featureheading="Analisi della posta elettronica senza dipendenze in .NET"
featuretext="Gli sviluppatori .NET che lavorano con più formati di file di posta elettronica possono utilizzare le funzionalità estese di Aspose.Email per .NET per creare app di elaborazione della posta elettronica dotate della capacità di analizzare e archiviare in modo sicuro e indipendente i messaggi di posta elettronica. Microsoft Automation o qualsiasi altro software di terze parti non è necessario perché questa API di posta elettronica .NET viene creata utilizzando codice gestito."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="FAQ"
>}}
   {{< products/faq-block
 faqquery="1. Come posso convertire i file di posta elettronica in .NET?"
 faqanswer="La conversione di file di posta elettronica di Microsoft Exchange o Thunderbird in .NET è semplice e veloce utilizzando Aspose.Email per l'API .NET. Sono necessarie solo poche righe di codifica .NET per convertire i file MSG, PST, OST, EML, EMLX, MBOX e HTML in diversi formati di file."
>}}
   {{< products/faq-block 
 faqquery="2. Quanto tempo ci vuole per convertire o elaborare i file di posta elettronica?"
 faqanswer="L'API .NET per la manipolazione e l'elaborazione dei file di posta elettronica funziona rapidamente e completa le richieste di conversione dei file di posta elettronica in pochissimo tempo."
>}}
   {{< products/faq-block
 faqquery="3. È sicuro elaborare le e-mail utilizzando l'API .NET?"
 faqanswer="Puoi essere sicuro della sicurezza dei tuoi file di messaggi di posta elettronica durante l'elaborazione utilizzando Aspose.Email per .NET API. Garantiamo la privacy dei tuoi dati e adottiamo tutte le misure necessarie per offrirti un'esperienza utente sicura."
>}}
   {{< products/faq-block
 faqquery="4. Posso elaborare i file di posta elettronica su Mac OS, Windows o Linux?"
 faqanswer="Sì, l'API di elaborazione della posta elettronica per .NET funziona su diversi sistemi operativi, framework e ambienti operativi. Puoi usarlo sulla piattaforma che preferisci e non richiede alcuna installazione di software aggiuntivo per funzionare."
>}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="Strumenti per la manipolazione dei file di posta elettronica"
   >}}
   {{< products/popularapp-anchor
 anchorlink="MSG in PDF"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-pdf/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Da MSG a EML"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-eml/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MSG in HTML"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-html/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Da MSG a MBOX"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-mbox/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Da MSG a PST"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-pst/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Da MSG a VCF"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-vcf/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="EML in PDF"
 moreproducts="https://products.aspose.com/email/net/conversion/eml-to-pdf/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="EML in HTML"
 moreproducts="https://products.aspose.com/email/net/conversion/eml-to-html/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="da EML a MSG"
 moreproducts="https://products.aspose.com/email/net/conversion/eml-to-msg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Da MBOX a XPS"
 moreproducts="https://products.aspose.com/email/net/conversion/mbox-to-xps/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="da OST a PST"
 moreproducts="https://products.aspose.com/email/net/conversion/ost-to-pst/"
>}}  
   {{< products/popularapp-anchor
 anchorlink="da PST a EML"
 moreproducts="https://products.aspose.com/email/net/conversion/pst-to-eml/"
 >}}
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Cerchi aiuto?"
bartext="Dai un'occhiata ai nostri canali di supporto per assistenza con le tue domande relative alle funzionalità e al funzionamento dell'API del prodotto Aspose."
 resourcetxt1="Docs"
 resourcelinks1="https://docs.aspose.com/email/net/"
 resourcetxt2="Riferimento API"
 resourcelinks2="https://reference.aspose.com/email/" 
 resourcetxt3="base di conoscenza"
 resourcelinks3="https://kb.aspose.com/email/net/"
 resourcetxt4="Supporto gratuito"
 resourcelinks4="https://forum.aspose.com/c/email/12"  >}}
{{< homepage/aspose/com/inner-wrapper/resources-wrapper
 resource-heading="Risorse sectionid=support"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://blog.aspose.com/"
 resourcetitle="Blog"
 resourcealt="Blog"
 resourceimg="/images/blog1.svg"
 resourcelistlink="https://blog.aspose.com/email/create-mime-messages-in-csharp/"
 resourcelistlink2="https://blog.aspose.com/email/merge-multiple-mbox-files-in-csharp/"
 resourcelistlink3="https://blog.aspose.com/cells/send-excel-data-in-email-body-using-csharp-net/"
 resourcelisttext="Crea messaggi MIME in C# .NET"
 resourcelisttext2="Unisci più file MBOX in C#"
 resourcelisttext3="Invia dati Excel nel corpo dell'e-mail utilizzando C# .NET"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://docs.aspose.com/"
 resourcetitle="Documentazione"
 resourcealt="Documentazione"
 resourceimg="/img/docs1.svg"
 resourcelistlink="https://docs.aspose.com/email/net/features-overview/"
 resourcelistlink2="https://www.nuget.org/packages/Aspose.Email/"
 resourcelistlink3="https://helpdesk.aspose.com/"
 resourcelisttext="Aspose.Email per le funzionalità .NET"
 resourcelisttext2="Installa Aspose.Email per il pacchetto .NET NuGet"
 resourcelisttext3="Aspose.Email per Helpdesk di supporto a pagamento .NET"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://kb.aspose.com/"
 resourcetitle="base di conoscenza"
 resourcealt="Esempi di codice"
 resourceimg="/images/code1.svg"
 resourcelistlink="https://kb.aspose.com/email/net/how-to-send-email-in-c-sharp/"
 resourcelistlink2="https://kb.aspose.com/email/net/how-to-create-a-pst-file-in-csharp/"
 resourcelistlink3="https://kb.aspose.com/email/net/how-to-add-mapicalendar-to-pst-using-csharp/"
 resourcelisttext="Come inviare e-mail in C#"
resourcelisttext2="Come creare un file PST in C#"
resourcelisttext3="Come aggiungere MapiCalendar a PST usando C#"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Pronto per iniziare?"
rtstext="Scarica la prova gratuita"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="Visualizza tutte le API"
>}}
