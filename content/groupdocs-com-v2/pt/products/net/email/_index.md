---
title: API de processamento de e-mail .NET para manipular arquivos de e-mail do Outlook
description: Biblioteca líder de processamento de e-mail para .NET para gerenciar formatos de arquivo Thunderbird e Outlook, incluindo MSG, EML e MBOX via protocolos SMPT, POP3 e IMAP.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="API de processamento de e-mail .NET para manipular arquivos de e-mail do Outlook"
  inheadertext="Simplifique o processo de manipulação de arquivos de e-mail do Microsoft Outlook e Mozilla Thunderbird em seus aplicativos C#, ASP.NET e VB.NET. Trabalhe com formatos de arquivo MSG, EML, PST, OST, MBOX, VCF e HTML. Gerencie mensagens de e-mail e anexos programaticamente via POP3, SMTP, IMAP ou Microsoft Exchange Server."
  ctabtn="Baixar Teste Gratuito"
  ctabtn="Baixar Teste Gratuito"
  ctalink="https://releases.aspose.com/email/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Ver todas as APIs"
  bchomelink="/"
  bchome="Lar"
  bcpage="E-mail"
  bclink2="Produtos"
  bclink3=".NET"
  bclink2url="/products/"
  bclink3url="/products/net/"
  >}}
{{< homepage/conholdate/com/inner-wrapper/sub-nav 
subnav1="#overview"
subnavtxt1="Visão geral" 
subnav2="#features"
subnavtxt2="Características" 
subnav3="#support"
subnavtxt3="Apoiar" 
subnav4="#examples"
subnavtxt4="Exemplos" 
subnav5="https://purchase.aspose.com/pricing/email/net"
subnavtxt5="Preços" 
subbtn1="https://docs.aspose.com/email/net/"
subbtntxt1="Aprender"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="Comprar"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="Uma API de e-mail .NET abrangente para manipular e processar mensagens de e-mail"
   subtext="Aspose.Email for .NET é uma API de processamento de e-mail flexível, robusta e fácil de usar que permite aos usuários criar, modificar e analisar formatos populares de arquivo de e-mail, como MSG, PST, OST, EML, EMLX, MBOX, bem como como VCF, HTML e MHTML na plataforma .NET. Isso permite que os usuários trabalhem com diferentes formatos de mensagem de e-mail sem se preocupar com problemas de compatibilidade de formato. Além de acessar e gerenciar e-mails Thunderbird e Outlook, os desenvolvedores podem usar a API de e-mail .NET para manipular programaticamente anexos de e-mail, adicionar ou remover destinatários, modificar o assunto da mensagem e fazer muito mais. "
   subtext2="Além disso, a capacidade de converter mensagens de e-mail de um formato para outro em C#, ASP.NET e VB.NET faz com que essa API de processamento de e-mail .NET se destaque em uso e conjunto de recursos. Você pode facilmente enviar e receber mensagens de e-mail usando o protocolo de sua escolha entre POP3, SMTP, IMAP ou conectar-se ao Microsoft Exchange Server. Aspose.Email for .NET ajuda você a automatizar o processo de gerenciamento de e-mail com eficiência."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Começando</h2>
   <p>Verifique a página <a href="https://docs.aspose.com/email/net/system-requirements/">Requisitos do sistema</a> para obter os pré-requisitos antes de configurar o Aspose.Email para .NET de sua parte . As informações a seguir o ajudarão a configurar corretamente a API de e-mail .NET.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.Email para instalação do .NET"
>}}
<p>Para baixar as DLLs ou o instalador MSI, visite a <a href="https://releases.aspose.com/email/net/">seção de downloads</a>. Como alternativa, você pode usar o <a href="https://www.nuget.org/packages/Aspose.Email/">pacote NuGet</a> para instalação da API. O comando do gerenciador de pacotes para configurar a API de processamento de e-mail .NET é compartilhado abaixo:</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp3"
>}}
PM > Install-Package Aspose.Email
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Como converter e-mails do Outlook para HTML e abrir mensagens de e-mail sem o Outlook no .NET"
featuretext="Aspose.Email para .NET API permite a conversão programática de mensagens MSG e EML para o formato HTML. Ele também oferece suporte para acessar e abrir e-mails do Outlook em seus aplicativos .NET sem precisar do Microsoft Outlook."
>}}  
{{< products/product-feature-blocks-col
featurecolheading="Converter arquivos MSG ou EML para HTML no .NET"
>}}
<p>Transforme perfeitamente e-mails do Outlook para o formato HTML com a ajuda da biblioteca Aspose.Email for .NET. Você pode desenvolver um aplicativo de processamento de e-mail completo usando a API de e-mail .NET e incorporar a funcionalidade de conversão de e-mail para converter os formatos MSG ou EML em HTML. Consulte o trecho de código e outras informações compartilhadas abaixo para essa finalidade:</p>
<ul>
   <li>Crie uma instância do objeto de classe <a href="https://reference.aspose.com/email/net/aspose.email/mailmessage/">MailMessage</a> para acessar o arquivo MSG ou EML de origem.</li>
   <li>Aplique as opções de salvar HTML para o arquivo HTML de saída.</li>
   <li>Salve ou exporte o arquivo MSG no formato HTML usando o método Save.</li>
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
featurecolheading="Abrir e-mails em .NET sem Outlook"
>}}
<p>Você deseja abrir mensagens do Outlook em seus aplicativos de processamento de e-mail .NET sem instalar o Microsoft Outlook? Se sim, Aspose.Email para .NET API é a escolha certa para você. Ele permite que os desenvolvedores .NET acessem e abram arquivos de e-mail MSG e recuperem informações como o assunto do e-mail, endereço do remetente e anexos. Por favor, verifique as seguintes informações para saber mais:</p>
<ul>
   <li>Carregue o arquivo de e-mail MSG de origem em um objeto de classe <a href="https://reference.aspose.com/email/net/aspose.email.mapi/mapimessage/">MapiMessage</a>.</li>
   <li>Leia e exiba diferentes propriedades do arquivo MSG.</li>
   <li>Analise os <a href="https://reference.aspose.com/email/net/aspose.email.mapi/mapimessageitembase/attachments">anexos</a> e leia/exiba diferentes propriedades dos anexos no MSG arquivo.</li>
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
   <p class="col-lg-12">Para ver mais exemplos de trabalho e amostras de codificação de Aspose.Email para .NET API, visite <a href="https://github.com/aspose-email/Aspose.Email-for-.NET/tree/master/">Exemplos do GitHub</a> página. Também fornecemos <a href="https://products.aspose.app/email/family">aplicativos online gratuitos</a> para Aspose.Email para ajudá-lo a converter, comparar, visualizar, marca d'água, mesclar, editar e assine digitalmente seus arquivos de e-mail em tempo real usando seus dispositivos móveis.</p>
{{< products/product-feature-blocks
featureheading="Análise de e-mail sem dependências em .NET"
featuretext="Os desenvolvedores .NET que trabalham com vários formatos de arquivo de e-mail podem utilizar os recursos abrangentes do Aspose.Email para .NET para criar aplicativos de processamento de e-mail carregados com a capacidade de analisar e armazenar mensagens de e-mail de forma segura e independente. O Microsoft Automation ou qualquer outro software de terceiros não é necessário porque esta API de e-mail .NET é construída usando código gerenciado."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="Perguntas frequentes"
>}}
   {{< products/faq-block
 faqquery="1. Como posso converter arquivos de e-mail em .NET?"
 faqanswer="A conversão de arquivos de e-mail do Microsoft Exchange ou Thunderbird em .NET é rápida e fácil usando o Aspose.Email para .NET API. Apenas algumas linhas de codificação .NET são necessárias para converter arquivos MSG, PST, OST, EML, EMLX, MBOX e HTML em diferentes formatos de arquivo."
>}}
   {{< products/faq-block 
 faqquery="2. Quanto tempo leva para converter ou processar arquivos de e-mail?"
 faqanswer="A API .NET para manipulação e processamento de arquivos de e-mail funciona rapidamente e conclui suas solicitações de conversão de arquivo de e-mail rapidamente."
>}}
   {{< products/faq-block
 faqquery="3. É seguro processar e-mails usando a API .NET?"
 faqanswer="Você pode ter certeza da segurança de seus arquivos de mensagens de e-mail enquanto os processa usando Aspose.Email para .NET API. Asseguramos a privacidade dos seus dados e tomamos todas as medidas necessárias para lhe proporcionar uma experiência de utilizador segura."
>}}
   {{< products/faq-block
 faqquery="4. Posso processar arquivos de e-mail no Mac OS, Windows ou Linux?"
 faqanswer="Sim, a API de processamento de e-mail para .NET funciona em diferentes sistemas operacionais, estruturas e ambientes operacionais. Você pode usá-lo na plataforma de sua escolha e não requer nenhuma instalação de software adicional para funcionar."
>}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="Ferramentas de manipulação de arquivos de e-mail"
   >}}
   {{< products/popularapp-anchor
 anchorlink="MSG para PDF"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-pdf/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MSG para EML"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-eml/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MSG para HTML"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-html/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MSG para MBOX"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-mbox/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MSG para PST"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-pst/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MSG para VCF"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-vcf/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="EML para PDF"
 moreproducts="https://products.aspose.com/email/net/conversion/eml-to-pdf/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="EML para HTML"
 moreproducts="https://products.aspose.com/email/net/conversion/eml-to-html/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="EML para MSG"
 moreproducts="https://products.aspose.com/email/net/conversion/eml-to-msg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MBOX para XPS"
 moreproducts="https://products.aspose.com/email/net/conversion/mbox-to-xps/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="OST para PST"
 moreproducts="https://products.aspose.com/email/net/conversion/ost-to-pst/"
>}}  
   {{< products/popularapp-anchor
 anchorlink="PST para EML"
 moreproducts="https://products.aspose.com/email/net/conversion/pst-to-eml/"
 >}}
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Procurando ajuda?"
bartext="Confira nossos canais de suporte para obter ajuda com suas perguntas relacionadas aos recursos e funcionamento da API do produto Aspose."
 resourcetxt1="Docs"
 resourcelinks1="https://docs.aspose.com/email/net/"
 resourcetxt2="Referência da API"
 resourcelinks2="https://reference.aspose.com/email/" 
 resourcetxt3="Base de conhecimento"
 resourcelinks3="https://kb.aspose.com/email/net/"
 resourcetxt4="Suporte Gratuito"
 resourcelinks4="https://forum.aspose.com/c/email/12"  >}}
{{< homepage/aspose/com/inner-wrapper/resources-wrapper
 resource-heading="Recursos sectionid=suporte"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://blog.aspose.com/"
 resourcetitle="Blogues"
 resourcealt="Blogues"
 resourceimg="/images/blog1.svg"
 resourcelistlink="https://blog.aspose.com/email/create-mime-messages-in-csharp/"
 resourcelistlink2="https://blog.aspose.com/email/merge-multiple-mbox-files-in-csharp/"
 resourcelistlink3="https://blog.aspose.com/cells/send-excel-data-in-email-body-using-csharp-net/"
 resourcelisttext="Crie mensagens MIME em C# .NET"
 resourcelisttext2="Mesclar vários arquivos MBOX em C #"
 resourcelisttext3="Enviar dados do Excel no corpo do e-mail usando C# .NET"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://docs.aspose.com/"
 resourcetitle="Documentação"
 resourcealt="Documentação"
 resourceimg="/img/docs1.svg"
 resourcelistlink="https://docs.aspose.com/email/net/features-overview/"
 resourcelistlink2="https://www.nuget.org/packages/Aspose.Email/"
 resourcelistlink3="https://helpdesk.aspose.com/"
 resourcelisttext="Recursos do Aspose.Email para .NET"
 resourcelisttext2="Instalar Aspose.Email para pacote .NET NuGet"
 resourcelisttext3="Aspose.Email para suporte pago .NET Helpdesk"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://kb.aspose.com/"
 resourcetitle="Base de conhecimento"
 resourcealt="Amostras de código"
 resourceimg="/images/code1.svg"
 resourcelistlink="https://kb.aspose.com/email/net/how-to-send-email-in-c-sharp/"
 resourcelistlink2="https://kb.aspose.com/email/net/how-to-create-a-pst-file-in-csharp/"
 resourcelistlink3="https://kb.aspose.com/email/net/how-to-add-mapicalendar-to-pst-using-csharp/"
 resourcelisttext="Como enviar e-mail em c#"
resourcelisttext2="Como criar um arquivo PST em C #"
resourcelisttext3="Como adicionar MapiCalendar ao PST usando C #"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Pronto para começar?"
rtstext="Baixar Teste Gratuito"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="Ver todas as APIs"
>}}
