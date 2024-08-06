---
title: .NET 电子邮件处理 API 来操作 Outlook 电子邮件文件
description: 领先的 .NET 电子邮件处理库，可通过 SMPT、POP3 和 IMAP 协议管理 Thunderbird 和 Outlook 文件格式，包括 MSG、EML 和 MBOX。
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle=".NET 电子邮件处理 API 来操作 Outlook 电子邮件文件"
  inheadertext="简化在 C#、ASP.NET 和 VB.NET 应用程序中操作 Microsoft Outlook 和 Mozilla Thunderbird 电子邮件文件的过程。使用 MSG、EML、PST、OST、MBOX、VCF 和 HTML 文件格式。通过 POP3、SMTP、IMAP 或 Microsoft Exchange Server 以编程方式管理电子邮件和附件。"
  ctabtn="下载免费试用版"
  ctabtn="下载免费试用版"
  ctalink="https://releases.aspose.com/email/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="查看所有API"
  bchomelink="/"
  bchome="家"
  bcpage="电子邮件"
  bclink2="产品"
  bclink3=".NET"
  bclink2url="/products/"
  bclink3url="/products/net/"
  >}}
{{< homepage/conholdate/com/inner-wrapper/sub-nav 
subnav1="#overview"
subnavtxt1="概述" 
subnav2="#features"
subnavtxt2="特征" 
subnav3="#support"
subnavtxt3="支持" 
subnav4="#examples"
subnavtxt4="例子" 
subnav5="https://purchase.aspose.com/pricing/email/net"
subnavtxt5="价钱" 
subbtn1="https://docs.aspose.com/email/net/"
subbtntxt1="学习"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="买"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="用于操作和处理电子邮件的综合 .NET 电子邮件 API"
   subtext="Aspose.Email for .NET 是一个灵活、强大且易于使用的电子邮件处理 API，使用户能够创建、修改和解析流行的电子邮件文件格式，例如 MSG、PST、OST、EML、EMLX、MBOX例如 .NET 平台中的 VCF、HTML 和 MHTML。这允许用户使用不同的电子邮件格式，而不必担心任何格式兼容性问题。除了访问和管理 Thunderbird 和 Outlook 电子邮件之外，开发人员还可以使用 .NET 电子邮件 API 以编程方式操作电子邮件附件、添加或删除收件人、修改邮件主题等等。 "
   subtext2="此外，跨 C#、ASP.NET 和 VB.NET 将电子邮件从一种格式转换为另一种格式的能力使得该 .NET 电子邮件处理 API 在用法和功能集中脱颖而出。您可以使用您在 POP3、SMTP、IMAP 中选择的协议轻松发送和接收电子邮件，或连接到 Microsoft Exchange Server。 Aspose.Email for .NET 可帮助您高效地自动化电子邮件管理流程。"
   >}} 
   {{< products/product-text-blocks >}}
   <h2>入门</h2>
   <p>在您设置 Aspose.Email for .NET 之前，请检查<a href="https://docs.aspose.com/email/net/system-requirements/">系统要求</a>页面了解先决条件。以下信息将帮助您正确设置 .NET 电子邮件 API。</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="用于 .NET 安装的 Aspose.Email"
>}}
<p>要下载 DLL 或 MSI 安装程序，请访问<a href="https://releases.aspose.com/email/net/">下载部分</a>。或者，您可以使用 <a href="https://www.nuget.org/packages/Aspose.Email/">NuGet 包</a> 进行 API 安装。下面分享了用于设置 .NET 电子邮件处理 API 的包管理器命令：</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp3"
>}}
PM > Install-Package Aspose.Email
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="如何在 .NET 中将 Outlook 电子邮件转换为 HTML 并在没有 Outlook 的情况下打开电子邮件"
featuretext="Aspose.Email for .NET API 能够以编程方式将 MSG 和 EML 消息转换为 HTML 格式。它还支持在 .NET 应用程序中访问和打开 Outlook 电子邮件，而无需 Microsoft Outlook。"
>}}  
{{< products/product-feature-blocks-col
featurecolheading="在 .NET 中将 MSG 或 EML 文件转换为 HTML"
>}}
<p>借助 Aspose.Email for .NET 库，将 Outlook 电子邮件无缝转换为 HTML 格式。您可以使用 .NET 电子邮件 API 开发功能齐全的电子邮件处理应用程序，并合并电子邮件转换功能以将 MSG 或 EML 格式转换为 HTML。为此，请参阅下面共享的代码片段和其他信息：</p>
<ul>
   <li>实例化 <a href="https://reference.aspose.com/email/net/aspose.email/mailmessage/">MailMessage</a> 类对象以访问源 MSG 或 EML 文件。</li>
   <li>对输出 HTML 文件应用 HTML 保存选项。</li>
   <li>使用 Save 方法以 HTML 格式保存或导出 MSG 文件。</li>
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
featurecolheading="在 .NET 中打开电子邮件而不使用 Outlook"
>}}
<p>您是否希望在不安装 Microsoft Outlook 的情况下在 .NET 电子邮件处理应用程序中打开 Outlook 消息？如果是，Aspose.Email for .NET API 是您的正确选择。它允许 .NET 开发人员访问和打开 MSG 电子邮件文件并检索电子邮件主题、发件人地址和附件等信息。请检查以下信息以了解更多信息：</p>
<ul>
   <li>将源 MSG 电子邮件文件加载到 <a href="https://reference.aspose.com/email/net/aspose.email.mapi/mapimessage/">MapiMessage</a> 类对象中。</li>
   <li>读取并显示 MSG 文件的不同属性。</li>
   <li>解析<a href="https://reference.aspose.com/email/net/aspose.email.mapi/mapimessageitembase/attachments">附件</a>并读取/显示MSG中附件的不同属性文件。</li>
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
   <p class="col-lg-12">要查看 Aspose.Email for .NET API 的更多工作示例和编码示例，请访问 <a href="https://github.com/aspose-email/Aspose.Email-for-.NET/tree/master/">GitHub 示例</a>页面。我们还为 Aspose.Email 提供<a href="https://products.aspose.app/email/family">免费在线应用</a>，帮助您转换、比较、查看、加水印、合并、编辑和使用您的移动设备即时对您的电子邮件文件进行数字签名。</p>
{{< products/product-feature-blocks
featureheading=".NET 中不依赖任何依赖项的电子邮件解析"
featuretext="使用多种电子邮件文件格式的 .NET 开发人员可以利用 Aspose.Email for .NET 的广泛功能来构建具有安全、独立解析和存储电子邮件功能的电子邮件处理应用程序。不需要 Microsoft Automation 或任何其他第三方软件，因为此 .NET 电子邮件 API 是使用托管代码构建的。"
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="常问问题"
>}}
   {{< products/faq-block
 faqquery="1. 如何转换.NET 中的电子邮件文件？"
 faqanswer="使用 Aspose.Email for .NET API 可以快速轻松地在 .NET 中转换 Microsoft Exchange 或 Thunderbird 电子邮件文件。只需几行 .NET 编码即可将 MSG、PST、OST、EML、EMLX、MBOX 和 HTML 文件转换为不同的文件格式。"
>}}
   {{< products/faq-block 
 faqquery="2. 转换或处理电子邮件文件需要多长时间？"
 faqanswer="用于操作和处理电子邮件文件的 .NET API 运行速度快，可以立即完成您的电子邮件文件转换请求。"
>}}
   {{< products/faq-block
 faqquery="3. 使用.NET API 处理电子邮件安全吗？"
 faqanswer="使用 Aspose.Email for .NET API 处理电子邮件文件时，您可以确保电子邮件文件的安全性。我们确保您的数据隐私，并采取一切必要措施为您提供安全的用户体验。"
>}}
   {{< products/faq-block
 faqquery="4. 我可以在 Mac OS、Windows 或 Linux 上处理电子邮件文件吗？"
 faqanswer="是的，.NET 的电子邮件处理 API 可跨不同的操作系统、框架和操作环境工作。您可以在您选择的平台上使用它，并且不需要安装任何其他软件即可运行。"
>}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="电子邮件文件操作工具"
   >}}
   {{< products/popularapp-anchor
 anchorlink="味精转PDF"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-pdf/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="味精转EML"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-eml/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="味精转 HTML"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-html/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="味精至 MBOX"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-mbox/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="味精转太平洋标准时间"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-pst/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="味精 至 VCF"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-vcf/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="EML 转 PDF"
 moreproducts="https://products.aspose.com/email/net/conversion/eml-to-pdf/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="EML 到 HTML"
 moreproducts="https://products.aspose.com/email/net/conversion/eml-to-html/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="EML 到 MSG"
 moreproducts="https://products.aspose.com/email/net/conversion/eml-to-msg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MBOX 到 XPS"
 moreproducts="https://products.aspose.com/email/net/conversion/mbox-to-xps/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="OST 到 PST"
 moreproducts="https://products.aspose.com/email/net/conversion/ost-to-pst/"
>}}  
   {{< products/popularapp-anchor
 anchorlink="太平洋标准时间 (PST) 到 EML"
 moreproducts="https://products.aspose.com/email/net/conversion/pst-to-eml/"
 >}}
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="寻求帮助？"
bartext="查看我们的支持渠道，以帮助解决与 Aspose 产品 API 功能和工作相关的问题。"
 resourcetxt1="Docs"
 resourcelinks1="https://docs.aspose.com/email/net/"
 resourcetxt2="API参考"
 resourcelinks2="https://reference.aspose.com/email/" 
 resourcetxt3="知识库"
 resourcelinks3="https://kb.aspose.com/email/net/"
 resourcetxt4="免费支持"
 resourcelinks4="https://forum.aspose.com/c/email/12"  >}}
{{< homepage/aspose/com/inner-wrapper/resources-wrapper
 resource-heading="资源sectionid=支持"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://blog.aspose.com/"
 resourcetitle="博客"
 resourcealt="博客"
 resourceimg="/images/blog1.svg"
 resourcelistlink="https://blog.aspose.com/email/create-mime-messages-in-csharp/"
 resourcelistlink2="https://blog.aspose.com/email/merge-multiple-mbox-files-in-csharp/"
 resourcelistlink3="https://blog.aspose.com/cells/send-excel-data-in-email-body-using-csharp-net/"
 resourcelisttext="在 C# .NET 中创建 MIME 消息"
 resourcelisttext2="在 C# 中合并多个 MBOX 文件"
 resourcelisttext3="使用 C# .NET 在电子邮件正文中发送 Excel 数据"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://docs.aspose.com/"
 resourcetitle="文档"
 resourcealt="文档"
 resourceimg="/img/docs1.svg"
 resourcelistlink="https://docs.aspose.com/email/net/features-overview/"
 resourcelistlink2="https://www.nuget.org/packages/Aspose.Email/"
 resourcelistlink3="https://helpdesk.aspose.com/"
 resourcelisttext="Aspose.Email for .NET 功能"
 resourcelisttext2="安装 Aspose.Email for .NET NuGet 包"
 resourcelisttext3="Aspose.Email for .NET 付费支持服务台"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://kb.aspose.com/"
 resourcetitle="知识库"
 resourcealt="代码示例"
 resourceimg="/images/code1.svg"
 resourcelistlink="https://kb.aspose.com/email/net/how-to-send-email-in-c-sharp/"
 resourcelistlink2="https://kb.aspose.com/email/net/how-to-create-a-pst-file-in-csharp/"
 resourcelistlink3="https://kb.aspose.com/email/net/how-to-add-mapicalendar-to-pst-using-csharp/"
 resourcelisttext="如何用 C# 发送电子邮件"
resourcelisttext2="如何在 C# 中创建 PST 文件"
resourcelisttext3="如何使用 C# 将 MapiCalendar 添加到 PST"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="准备好开始了吗？"
rtstext="下载免费试用版"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="查看所有API"
>}}
