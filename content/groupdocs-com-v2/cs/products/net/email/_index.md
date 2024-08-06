---
title: .NET Email Processing API pro manipulaci s e-mailovými soubory aplikace Outlook
description: Přední knihovna pro zpracování e-mailu pro .NET pro správu formátů souborů Thunderbird a Outlook včetně MSG, EML a MBOX prostřednictvím protokolů SMPT, POP3 a IMAP.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle=".NET Email Processing API pro manipulaci s e-mailovými soubory aplikace Outlook"
  inheadertext="Zjednodušte proces manipulace s e-mailovými soubory aplikací Microsoft Outlook a Mozilla Thunderbird v aplikacích C#, ASP.NET a VB.NET. Práce s formáty souborů MSG, EML, PST, OST, MBOX, VCF a HTML. Programově spravujte e-mailové zprávy a přílohy přes POP3, SMTP, IMAP nebo Microsoft Exchange Server."
  ctabtn="Stáhněte si zkušební verzi zdarma"
  ctabtn="Stáhněte si zkušební verzi zdarma"
  ctalink="https://releases.aspose.com/email/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Zobrazit všechna rozhraní API"
  bchomelink="/"
  bchome="Domov"
  bcpage="E-mailem"
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
subnav5="https://purchase.aspose.com/pricing/email/net"
subnavtxt5="Ceny" 
subbtn1="https://docs.aspose.com/email/net/"
subbtntxt1="Učit se"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="Koupit"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="Komplexní rozhraní .NET Email API pro manipulaci a zpracování e-mailových zpráv"
   subtext="Aspose.Email for .NET je flexibilní, robustní a snadno použitelné rozhraní API pro zpracování e-mailů, které uživatelům umožňuje vytvářet, upravovat a analyzovat oblíbené formáty e-mailových souborů, jako jsou MSG, PST, OST, EML, EMLX, MBOX a další. jako VCF, HTML a MHTML na platformě .NET. To umožňuje uživatelům pracovat s různými formáty e-mailových zpráv bez obav z problémů s kompatibilitou formátů. Kromě přístupu k e-mailům Thunderbird a Outlook a jejich správě mohou vývojáři používat rozhraní .NET Email API k programové manipulaci s přílohami e-mailů, přidávání nebo odebírání příjemců, úpravě předmětu zprávy a mnohem více. "
   subtext2="Schopnost převádět e-mailové zprávy z jednoho formátu do jiného v prostředí C#, ASP.NET a VB.NET navíc činí toto rozhraní API pro zpracování e-mailů .NET výjimečným v použití a sadě funkcí. Můžete bez námahy odesílat a přijímat e-mailové zprávy pomocí protokolu dle vašeho výběru mezi POP3, SMTP, IMAP nebo se připojit k Microsoft Exchange Server. Aspose.Email pro .NET vám pomůže efektivně automatizovat proces správy e-mailů."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Začínáme</h2>
   <p>Před nastavením Aspose.Email pro .NET na vašem konci prosím zkontrolujte stránku <a href="https://docs.aspose.com/email/net/system-requirements/">Systémové požadavky</a>, kde jsou uvedeny nezbytné požadavky . Následující informace vám pomohou správně nastavit .NET emailing API.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.Email pro instalaci .NET"
>}}
<p>Chcete-li stáhnout knihovny DLL nebo instalační program MSI, navštivte prosím <a href="https://releases.aspose.com/email/net/">sekci ke stažení</a>. Případně můžete pro instalaci API použít <a href="https://www.nuget.org/packages/Aspose.Email/">balíček NuGet</a>. Příkaz správce balíčků pro nastavení rozhraní API pro zpracování e-mailů .NET je sdílen níže:</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp3"
>}}
PM > Install-Package Aspose.Email
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Jak převést e-maily aplikace Outlook do HTML a otevřít e-mailové zprávy bez aplikace Outlook v .NET"
featuretext="Aspose.Email for .NET API umožňuje programově převádět zprávy MSG a EML do formátu HTML. Podporuje také přístup a otevírání e-mailů aplikace Outlook ve vašich aplikacích .NET, aniž byste potřebovali Microsoft Outlook."
>}}  
{{< products/product-feature-blocks-col
featurecolheading="Převeďte MSG nebo EML soubory do HTML v .NET"
>}}
<p>Bezproblémově transformujte e-maily aplikace Outlook do formátu HTML pomocí knihovny Aspose.Email for .NET. Můžete vyvinout plnohodnotnou aplikaci pro zpracování e-mailů pomocí rozhraní API pro e-maily .NET a začlenit funkci převodu e-mailů pro převod formátů MSG nebo EML do HTML. Pro tento účel si prosím přečtěte fragment kódu a další informace sdílené níže:</p>
<ul>
   <li>Pro přístup ke zdrojovému souboru MSG nebo EML vytvořte instanci objektu třídy <a href="https://reference.aspose.com/email/net/aspose.email/mailmessage/">MailMessage</a>.</li>
   <li>Použijte volby uložení HTML pro výstupní soubor HTML.</li>
   <li>Uložte nebo exportujte soubor MSG ve formátu HTML pomocí metody Uložit.</li>
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
featurecolheading="Otevřete e-maily v .NET bez aplikace Outlook"
>}}
<p>Chcete otevírat zprávy aplikace Outlook v aplikacích pro zpracování e-mailů .NET bez instalace aplikace Microsoft Outlook? Pokud ano, Aspose.Email for .NET API je pro vás tou správnou volbou. Umožňuje vývojářům .NET přistupovat a otevírat e-mailové soubory MSG a získávat informace, jako je předmět e-mailu, adresa odesílatele a přílohy. Chcete-li se dozvědět více, zkontrolujte následující informace:</p>
<ul>
   <li>Načtěte zdrojový e-mailový soubor MSG do objektu třídy <a href="https://reference.aspose.com/email/net/aspose.email.mapi/mapimessage/">MapiMessage</a>.</li>
   <li>Číst a zobrazovat různé vlastnosti souboru MSG.</li>
   <li>Analyzujte <a href="https://reference.aspose.com/email/net/aspose.email.mapi/mapimessageitembase/attachments">přílohy</a> a čtěte/zobrazujte různé vlastnosti příloh v MSG soubor.</li>
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
   <p class="col-lg-12">Chcete-li zobrazit další pracovní příklady a ukázky kódování rozhraní Aspose.Email for .NET API, navštivte <a href="https://github.com/aspose-email/Aspose.Email-for-.NET/tree/master/">Příklady GitHubu</a>. Poskytujeme také <a href="https://products.aspose.app/email/family">bezplatné online aplikace</a> pro Aspose.Email, které vám pomohou převádět, porovnávat, zobrazovat, vodoznak, slučovat, upravovat a digitálně podepisujte své e-mailové soubory za běhu pomocí mobilních zařízení.</p>
{{< products/product-feature-blocks
featureheading="Analýza e-mailů bez závislostí v .NET"
featuretext="Vývojáři .NET pracující s více formáty e-mailových souborů mohou využívat rozsáhlé funkce Aspose.Email for .NET k vytváření aplikací pro zpracování e-mailů nabitých schopností bezpečně a nezávisle analyzovat a ukládat e-mailové zprávy. Microsoft Automation ani žádný jiný software třetích stran není vyžadován, protože toto e-mailové API .NET je vytvořeno pomocí spravovaného kódu."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="FAQ"
>}}
   {{< products/faq-block
 faqquery="1. Jak mohu převést e-mailové soubory v .NET?"
 faqanswer="Převod e-mailových souborů Microsoft Exchange nebo Thunderbird v .NET je rychlý a snadný pomocí Aspose.Email for .NET API. K převodu souborů MSG, PST, OST, EML, EMLX, MBOX a HTML do různých formátů souborů je zapotřebí pouze několik řádků kódování .NET."
>}}
   {{< products/faq-block 
 faqquery="2. Jak dlouho trvá převod nebo zpracování e-mailových souborů?"
 faqanswer="Rozhraní .NET API pro manipulaci a zpracování e-mailových souborů funguje rychle a vaše požadavky na převod e-mailových souborů dokončí okamžitě."
>}}
   {{< products/faq-block
 faqquery="3. Je bezpečné zpracovávat e-maily pomocí .NET API?"
 faqanswer="Můžete si být jisti bezpečností souborů e-mailových zpráv při jejich zpracování pomocí Aspose.Email for .NET API. Zajišťujeme soukromí vašich údajů a přijímáme veškerá požadovaná opatření, abychom vám poskytli bezpečnou uživatelskou zkušenost."
>}}
   {{< products/faq-block
 faqquery="4. Mohu zpracovat e-mailové soubory na Mac OS, Windows nebo Linux?"
 faqanswer="Ano, rozhraní API pro zpracování e-mailů pro .NET funguje v různých operačních systémech, rámcích a operačních prostředích. Můžete jej používat na platformě, kterou si vyberete, a ke svému fungování nevyžaduje žádnou další instalaci softwaru."
>}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="Nástroje pro manipulaci se soubory e-mailu"
   >}}
   {{< products/popularapp-anchor
 anchorlink="MSG do PDF"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-pdf/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MSG na EML"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-eml/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MSG do HTML"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-html/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MSG na MBOX"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-mbox/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MSG na PST"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-pst/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MSG na VCF"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-vcf/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="EML do PDF"
 moreproducts="https://products.aspose.com/email/net/conversion/eml-to-pdf/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="EML do HTML"
 moreproducts="https://products.aspose.com/email/net/conversion/eml-to-html/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="EML na MSG"
 moreproducts="https://products.aspose.com/email/net/conversion/eml-to-msg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MBOX na XPS"
 moreproducts="https://products.aspose.com/email/net/conversion/mbox-to-xps/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="OST na PST"
 moreproducts="https://products.aspose.com/email/net/conversion/ost-to-pst/"
>}}  
   {{< products/popularapp-anchor
 anchorlink="PST na EML"
 moreproducts="https://products.aspose.com/email/net/conversion/pst-to-eml/"
 >}}
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Hledáte pomoc?"
bartext="Podívejte se na naše kanály podpory, kde najdete pomoc s vašimi dotazy týkajícími se funkcí API produktu Aspose a fungováním."
 resourcetxt1="Docs"
 resourcelinks1="https://docs.aspose.com/email/net/"
 resourcetxt2="Reference API"
 resourcelinks2="https://reference.aspose.com/email/" 
 resourcetxt3="Znalostní báze"
 resourcelinks3="https://kb.aspose.com/email/net/"
 resourcetxt4="Bezplatná podpora"
 resourcelinks4="https://forum.aspose.com/c/email/12"  >}}
{{< homepage/aspose/com/inner-wrapper/resources-wrapper
 resource-heading="Zdroje sectionid=support"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://blog.aspose.com/"
 resourcetitle="Blogy"
 resourcealt="Blogy"
 resourceimg="/images/blog1.svg"
 resourcelistlink="https://blog.aspose.com/email/create-mime-messages-in-csharp/"
 resourcelistlink2="https://blog.aspose.com/email/merge-multiple-mbox-files-in-csharp/"
 resourcelistlink3="https://blog.aspose.com/cells/send-excel-data-in-email-body-using-csharp-net/"
 resourcelisttext="Vytvářejte MIME zprávy v C# .NET"
 resourcelisttext2="Sloučit více souborů MBOX v C#"
 resourcelisttext3="Odesílejte data aplikace Excel v těle e-mailu pomocí C# .NET"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://docs.aspose.com/"
 resourcetitle="Dokumentace"
 resourcealt="Dokumentace"
 resourceimg="/img/docs1.svg"
 resourcelistlink="https://docs.aspose.com/email/net/features-overview/"
 resourcelistlink2="https://www.nuget.org/packages/Aspose.Email/"
 resourcelistlink3="https://helpdesk.aspose.com/"
 resourcelisttext="Funkce Aspose.Email for .NET"
 resourcelisttext2="Nainstalujte Aspose.Email pro balíček .NET NuGet"
 resourcelisttext3="Aspose.Email for .NET Placená podpora Helpdesk"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://kb.aspose.com/"
 resourcetitle="Znalostní báze"
 resourcealt="Ukázky kódu"
 resourceimg="/images/code1.svg"
 resourcelistlink="https://kb.aspose.com/email/net/how-to-send-email-in-c-sharp/"
 resourcelistlink2="https://kb.aspose.com/email/net/how-to-create-a-pst-file-in-csharp/"
 resourcelistlink3="https://kb.aspose.com/email/net/how-to-add-mapicalendar-to-pst-using-csharp/"
 resourcelisttext="Jak poslat e-mail v C#"
resourcelisttext2="Jak vytvořit soubor PST v C#"
resourcelisttext3="Jak přidat MapiCalendar do PST pomocí C#"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Jste připraveni začít?"
rtstext="Stáhněte si zkušební verzi zdarma"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="Zobrazit všechna rozhraní API"
>}}
