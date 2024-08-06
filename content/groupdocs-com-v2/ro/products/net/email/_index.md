---
title: .NET Email Processing API pentru a manipula fișierele de e-mail Outlook
description: Bibliotecă de top de procesare a e-mailurilor pentru .NET pentru a gestiona formatele de fișiere Thunderbird și Outlook, inclusiv MSG, EML și MBOX prin protocoale SMPT, POP3 și IMAP.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle=".NET Email Processing API pentru a manipula fișierele de e-mail Outlook"
  inheadertext="Simplificați procesul de manipulare a fișierelor de e-mail Microsoft Outlook și Mozilla Thunderbird în aplicațiile dvs. C#, ASP.NET și VB.NET. Lucrați cu formatele de fișiere MSG, EML, PST, OST, MBOX, VCF și HTML. Gestionați programatic mesajele de e-mail și atașamentele prin POP3, SMTP, IMAP sau Microsoft Exchange Server."
  ctabtn="Descarcare varianta scurta de prezentare gratuita"
  ctabtn="Descarcare varianta scurta de prezentare gratuita"
  ctalink="https://releases.aspose.com/email/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Vedeți toate API-urile"
  bchomelink="/"
  bchome="Acasă"
  bcpage="E-mail"
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
subnav5="https://purchase.aspose.com/pricing/email/net"
subnavtxt5="Prețuri" 
subbtn1="https://docs.aspose.com/email/net/"
subbtntxt1="Învăța"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="Cumpără"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="Un API cuprinzător de e-mail .NET pentru manipularea și procesarea mesajelor de e-mail"
   subtext="Aspose.Email pentru .NET este un API de procesare a e-mailurilor flexibil, robust și ușor de utilizat, care permite utilizatorilor să creeze, să modifice și să analizeze formate populare de fișiere de e-mail, cum ar fi MSG, PST, OST, EML, EMLX, MBOX, precum și ca VCF, HTML și MHTML în platforma .NET. Acest lucru le permite utilizatorilor să lucreze cu diferite formate de mesaje de e-mail fără a-și face griji cu privire la problemele de compatibilitate de format. Pe lângă accesarea și gestionarea e-mailurilor Thunderbird și Outlook, dezvoltatorii pot folosi .NET Email API pentru a manipula în mod programatic atașamentele de e-mail, pentru a adăuga sau elimina destinatari, pentru a modifica subiectul mesajului și pentru a face multe altele. "
   subtext2="Mai mult, abilitatea de a converti mesajele de e-mail dintr-un format în altul prin C#, ASP.NET și VB.NET face ca acest API de procesare a e-mailului .NET să se remarce prin utilizare și setul de caracteristici. Puteți trimite și primi fără efort mesaje de e-mail utilizând protocolul la alegere dintre POP3, SMTP, IMAP sau vă puteți conecta la Microsoft Exchange Server. Aspose.Email pentru .NET vă ajută să automatizați eficient procesul de gestionare a e-mailului."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Noțiuni de bază</h2>
   <p>Vă rugăm să verificați pagina <a href="https://docs.aspose.com/email/net/system-requirements/">Cerințe de sistem</a> pentru cerințele preliminare înainte de a configura Aspose.Email pentru .NET la finalul dvs. . Următoarele informații vă vor ajuta să configurați corect API-ul de e-mail .NET.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.Email pentru instalare .NET"
>}}
<p>Pentru a descărca DLL-urile sau programul de instalare MSI, vizitați <a href="https://releases.aspose.com/email/net/">secțiunea de descărcări</a>. Ca alternativă, puteți utiliza <a href="https://www.nuget.org/packages/Aspose.Email/">pachetul NuGet</a> pentru instalarea API. Comanda managerului de pachete pentru a configura API-ul de procesare a e-mailului .NET este partajată mai jos:</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp3"
>}}
PM > Install-Package Aspose.Email
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Cum să convertiți e-mailurile Outlook în HTML și să deschideți mesajele de e-mail fără Outlook în .NET"
featuretext="Aspose.Email pentru .NET API permite conversia programatică a mesajelor MSG și EML în format HTML. De asemenea, acceptă accesarea și deschiderea e-mailurilor Outlook în aplicațiile dvs. .NET fără a avea nevoie de Microsoft Outlook."
>}}  
{{< products/product-feature-blocks-col
featurecolheading="Convertiți fișierele MSG sau EML în HTML în .NET"
>}}
<p>Transformați fără probleme e-mailurile Outlook în format HTML cu ajutorul bibliotecii Aspose.Email pentru .NET. Puteți dezvolta o aplicație completă de procesare a e-mailurilor folosind API-ul de e-mail .NET și puteți încorpora funcționalitatea de conversie a e-mailului pentru a converti formatele MSG sau EML în HTML. Vă rugăm să consultați fragmentul de cod și alte informații distribuite mai jos în acest scop:</p>
<ul>
   <li>Instanciați obiectul clasei <a href="https://reference.aspose.com/email/net/aspose.email/mailmessage/">MailMessage</a> pentru a accesa fișierul MSG sau EML sursă.</li>
   <li>Aplicați opțiunile de salvare HTML pentru fișierul HTML de ieșire.</li>
   <li>Salvați sau exportați fișierul MSG în format HTML folosind metoda Salvare.</li>
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
featurecolheading="Deschideți e-mailuri în .NET fără Outlook"
>}}
<p>Doriți să deschideți mesajele Outlook în aplicațiile dvs. de procesare a e-mailului .NET fără a instala Microsoft Outlook? Dacă da, Aspose.Email pentru .NET API este alegerea potrivită pentru tine. Permite dezvoltatorilor .NET să acceseze și să deschidă fișiere de e-mail MSG și să preia informații precum subiectul e-mailului, adresa expeditorului și atașamentele. Vă rugăm să verificați următoarele informații pentru a afla mai multe:</p>
<ul>
   <li>Încărcați fișierul de e-mail MSG sursă într-un obiect de clasă <a href="https://reference.aspose.com/email/net/aspose.email.mapi/mapimessage/">MapiMessage</a>.</li>
   <li>Citiți și afișați diferite proprietăți ale fișierului MSG.</li>
   <li>Analizați <a href="https://reference.aspose.com/email/net/aspose.email.mapi/mapimessageitembase/attachments">atașamentele</a> și citiți/afișați diferite proprietăți ale atașamentelor în MSG fişier.</li>
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
   <p class="col-lg-12">Pentru a vedea mai multe exemple de lucru și exemple de codare ale API-ului Aspose.Email pentru .NET, vă rugăm să vizitați <a href="https://github.com/aspose-email/Aspose.Email-for-.NET/tree/master/">Exemple GitHub</a>. De asemenea, oferim <a href="https://products.aspose.app/email/family">aplicații online gratuite</a> pentru Aspose.Email pentru a vă ajuta să convertiți, comparați, vizualizați, filigrane, îmbinați, editați și semnați-vă digital fișierele de e-mail din mers folosind dispozitivele dvs. mobile.</p>
{{< products/product-feature-blocks
featureheading="Analiza e-mailurilor fără dependențe în .NET"
featuretext="Dezvoltatorii .NET care lucrează cu mai multe formate de fișiere de e-mail pot utiliza caracteristicile extinse ale Aspose.Email pentru .NET pentru a crea aplicații de procesare a e-mailurilor încărcate cu capacitatea de a analiza și stoca mesaje de e-mail în mod sigur și independent. Microsoft Automation sau orice alt software terță parte nu este necesar, deoarece acest API de e-mail .NET este creat folosind cod gestionat."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="FAQ"
>}}
   {{< products/faq-block
 faqquery="1. Cum pot converti fișierele de e-mail în .NET?"
 faqanswer="Convertirea fișierelor de e-mail Microsoft Exchange sau Thunderbird în .NET este rapidă și ușoară folosind Aspose.Email pentru .NET API. Sunt necesare doar câteva linii de codare .NET pentru a converti fișierele MSG, PST, OST, EML, EMLX, MBOX și HTML în diferite formate de fișiere."
>}}
   {{< products/faq-block 
 faqquery="2. Cât timp durează convertirea sau procesarea fișierelor de e-mail?"
 faqanswer=".NET API pentru manipularea și procesarea fișierelor de e-mail funcționează rapid și completează cererile de conversie a fișierelor de e-mail în cel mai scurt timp."
>}}
   {{< products/faq-block
 faqquery="3. Este sigur să procesați e-mailuri folosind .NET API?"
 faqanswer="Puteți fi sigur de securitatea fișierelor de mesaje de e-mail în timp ce le procesați folosind Aspose.Email pentru .NET API. Asigurăm confidențialitatea datelor dumneavoastră și luăm toate măsurile necesare pentru a vă oferi o experiență de utilizator sigură."
>}}
   {{< products/faq-block
 faqquery="4. Pot procesa fișiere de e-mail pe Mac OS, Windows sau Linux?"
 faqanswer="Da, API-ul de procesare a e-mailului pentru .NET funcționează în diferite sisteme de operare, cadre și medii de operare. Îl puteți folosi pe platforma dorită și nu necesită nicio instalare software suplimentară pentru a funcționa."
>}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="Instrumente de manipulare a fișierelor prin e-mail"
   >}}
   {{< products/popularapp-anchor
 anchorlink="MSG în PDF"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-pdf/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MSG la EML"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-eml/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MSG în HTML"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-html/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MSG în MBOX"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-mbox/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MSG în PST"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-pst/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MSG în VCF"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-vcf/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="EML în PDF"
 moreproducts="https://products.aspose.com/email/net/conversion/eml-to-pdf/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="EML în HTML"
 moreproducts="https://products.aspose.com/email/net/conversion/eml-to-html/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="EML la MSG"
 moreproducts="https://products.aspose.com/email/net/conversion/eml-to-msg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MBOX la XPS"
 moreproducts="https://products.aspose.com/email/net/conversion/mbox-to-xps/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="OST în PST"
 moreproducts="https://products.aspose.com/email/net/conversion/ost-to-pst/"
>}}  
   {{< products/popularapp-anchor
 anchorlink="PST în EML"
 moreproducts="https://products.aspose.com/email/net/conversion/pst-to-eml/"
 >}}
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Cauți ajutor?"
bartext="Consultați canalele noastre de asistență pentru ajutor cu întrebările dvs. legate de caracteristicile API-ului produsului Aspose și de funcționare."
 resourcetxt1="Docs"
 resourcelinks1="https://docs.aspose.com/email/net/"
 resourcetxt2="Referință API"
 resourcelinks2="https://reference.aspose.com/email/" 
 resourcetxt3="Bază de cunoștințe"
 resourcelinks3="https://kb.aspose.com/email/net/"
 resourcetxt4="Asistență gratuită"
 resourcelinks4="https://forum.aspose.com/c/email/12"  >}}
{{< homepage/aspose/com/inner-wrapper/resources-wrapper
 resource-heading="Resurse sectionid=support"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://blog.aspose.com/"
 resourcetitle="Bloguri"
 resourcealt="Bloguri"
 resourceimg="/images/blog1.svg"
 resourcelistlink="https://blog.aspose.com/email/create-mime-messages-in-csharp/"
 resourcelistlink2="https://blog.aspose.com/email/merge-multiple-mbox-files-in-csharp/"
 resourcelistlink3="https://blog.aspose.com/cells/send-excel-data-in-email-body-using-csharp-net/"
 resourcelisttext="Creați mesaje MIME în C# .NET"
 resourcelisttext2="Îmbinați mai multe fișiere MBOX în C#"
 resourcelisttext3="Trimiteți date Excel în corpul e-mailului folosind C# .NET"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://docs.aspose.com/"
 resourcetitle="Documentație"
 resourcealt="Documentație"
 resourceimg="/img/docs1.svg"
 resourcelistlink="https://docs.aspose.com/email/net/features-overview/"
 resourcelistlink2="https://www.nuget.org/packages/Aspose.Email/"
 resourcelistlink3="https://helpdesk.aspose.com/"
 resourcelisttext="Aspose.Email pentru caracteristici .NET"
 resourcelisttext2="Instalați Aspose.Email pentru pachetul .NET NuGet"
 resourcelisttext3="Aspose.Email pentru .NET Paid Support Helpdesk"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://kb.aspose.com/"
 resourcetitle="Bază de cunoștințe"
 resourcealt="Exemple de cod"
 resourceimg="/images/code1.svg"
 resourcelistlink="https://kb.aspose.com/email/net/how-to-send-email-in-c-sharp/"
 resourcelistlink2="https://kb.aspose.com/email/net/how-to-create-a-pst-file-in-csharp/"
 resourcelistlink3="https://kb.aspose.com/email/net/how-to-add-mapicalendar-to-pst-using-csharp/"
 resourcelisttext="Cum se trimite e-mail în C#"
resourcelisttext2="Cum se creează un fișier PST în C#"
resourcelisttext3="Cum să adăugați MapiCalendar la PST folosind C#"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Sunteți gata să începeți?"
rtstext="Descarcare varianta scurta de prezentare gratuita"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="Vedeți toate API-urile"
>}}
