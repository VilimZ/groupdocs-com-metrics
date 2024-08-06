---
title: .NET Email Processing API to manipulate Outlook email files
description: Leading email processing library for .NET to manage Thunderbird and Outlook file formats including MSG, EML, & MBOX via SMPT, POP3, and IMAP protocols.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle=".NET Email Processing API to manipulate Outlook email files"
  inheadertext="Simplify the process of manipulating Microsoft Outlook and Mozilla Thunderbird email files across your C#, ASP.NET, and VB.NET apps. Work with MSG, EML, PST, OST, MBOX, VCF, and HTML file formats. Programmatically manage email messages and attachments via POP3, SMTP, IMAP, or Microsoft Exchange Server."
  ctabtn="Download Free Trial"
  ctalink="https://releases.aspose.com/email/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="View All APIs"
  bchomelink="/"
  bchome="Home"
  bcpage="Email"
  bclink2="Products"
  bclink3=".NET"
  bclink2url="/products/"
  bclink3url="/products/net/"
  >}}
{{< homepage/conholdate/com/inner-wrapper/sub-nav 
subnav1="#overview"
subnavtxt1="Overview" 
subnav2="#features"
subnavtxt2="Features" 
subnav3="#support"
subnavtxt3="Support" 
subnav4="#examples"
subnavtxt4="Examples" 
subnav5="https://purchase.aspose.com/pricing/email/net"
subnavtxt5="Pricing" 
subbtn1="https://docs.aspose.com/email/net/"
subbtntxt1="Learn"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="Buy"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="A comprehensive .NET Email API for manipulating and processing email messages"
   subtext="Aspose.Email for .NET is a flexible, robust, and easy-to-use email processing API enabling users to create, modify, and parse popular email file formats such as MSG, PST, OST, EML, EMLX, MBOX, as well as VCF, HTML, and MHTML in the .NET platform. This allows the users to work with different email message formats without worrying about any format compatibility issues. In addition to accessing and managing Thunderbird and Outlook emails, developers can use the .NET Email API to programmatically manipulate email attachments, add or remove recipients, modify the message subject, and do much more. "
   subtext2="Furthermore, the ability to convert email messages from one format to another across C#, ASP.NET, and VB.NET makes this .NET email processing API stand out in usage and feature set. You can effortlessly send and receive email messages using the protocol of your choice among POP3, SMTP, IMAP, or connect to Microsoft Exchange Server. Aspose.Email for .NET helps you automate the email management process efficiently."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Getting Started</h2>
   <p>Please check the <a href="https://docs.aspose.com/email/net/system-requirements/">System Requirements</a> page for the prerequisites before setting up Aspose.Email for .NET at your end. The following information will help you correctly set up the .NET emailing API.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.Email for .NET Installation"
>}}
<p>To download the DLLs or the MSI installer, please visit the <a href="https://releases.aspose.com/email/net/">downloads section</a>. Alternatively, you can use the <a href="https://www.nuget.org/packages/Aspose.Email/">NuGet package</a> for API installation. The package manager command to setup the .NET email processing API is shared below:</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp3"
>}}
PM > Install-Package Aspose.Email
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="How to Convert Outlook Emails to HTML and Open Email Messages Without Outlook in .NET"
featuretext="Aspose.Email for .NET API enables programmatically converting MSG and EML messages to HTML format. It also supports accessing and opening Outlook emails within your .NET apps without needing Microsoft Outlook."
>}}  
{{< products/product-feature-blocks-col
featurecolheading="Convert MSG or EML Files to HTML in .NET"
>}}
<p>Seamlessly transform Outlook emails to HTML format with the help of Aspose.Email for .NET library. You can develop a full-featured email processing application using the .NET emailing API and incorporate the email conversion functionality to convert MSG or EML formats to HTML. Please refer to the code snippet and other information shared below for this purpose:</p>
<ul>
   <li>Instantiate the <a href="https://reference.aspose.com/email/net/aspose.email/mailmessage/">MailMessage</a> class object to access the source MSG or EML file.</li>
   <li>Apply the HTML save options for the output HTML file.</li>
   <li>Save or export the MSG file in HTML format using the Save method.</li>
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
featurecolheading="Open Emails in .NET without Outlook"
>}}
<p>Are you looking to open Outlook messages in your .NET email processing apps without installing Microsoft Outlook? If yes, Aspose.Email for .NET API is the right choice for you. It allows .NET developers to access and open MSG email files and retrieve information such as the email subject, sender address, and attachments. Please check the following information to learn more:</p>
<ul>
   <li>Load the source MSG email file into a <a href="https://reference.aspose.com/email/net/aspose.email.mapi/mapimessage/">MapiMessage</a> class object.</li>
   <li>Read and display different properties of the MSG file.</li>
   <li>Parse through the <a href="https://reference.aspose.com/email/net/aspose.email.mapi/mapimessageitembase/attachments">attachments</a> and read/display different properties of the attachments in the MSG file.</li>
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
   <p class="col-lg-12">To view more working examples and coding samples of Aspose.Email for .NET API, please visit the <a href="https://github.com/aspose-email/Aspose.Email-for-.NET/tree/master/Examples">GitHub examples</a> page. We also provide <a href="https://products.aspose.app/email/family">free online apps</a> for Aspose.Email to help you convert, compare, view, watermark, merge, edit, and digitally sign your email files on-the-fly using your mobile devices.</p>
{{< products/product-feature-blocks
featureheading="Email parsing with no dependencies in .NET"
featuretext=".NET developers working with multiple email file formats can utilize the extensive features of Aspose.Email for .NET to build email processing apps loaded with the capability to securely and independently parse and store email messages. Microsoft Automation or any other third-party software isn’t required because this .NET email API is built using managed code."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="FAQ"
>}}
   {{< products/faq-block
 faqquery="1. How can I convert email files in .NET?"
 faqanswer="Converting Microsoft Exchange or Thunderbird email files in .NET is quick and easy using Aspose.Email for .NET API. Only a few lines of .NET coding are needed to convert MSG, PST, OST, EML, EMLX, MBOX, and HTML files to different file formats."
>}}
   {{< products/faq-block 
 faqquery="2. How long it takes to convert or process email files?"
 faqanswer="The .NET API for manipulating and processing email files works fast and completes your email file conversion requests in no time."
>}}
   {{< products/faq-block
 faqquery="3. Is it safe to process emails using the .NET API?"
 faqanswer="You can be sure of the security of your email message files while processing them using Aspose.Email for .NET API. We ensure the privacy of your data and take all required measures to provide you with a secure user experience."
>}}
   {{< products/faq-block
 faqquery="4. Can I process email files on Mac OS, Windows, or Linux?"
 faqanswer="Yes, the email processing API for .NET works across different OS, frameworks, and operating environments. You can use it on the platform of your choice and it does not require any additional software installation to function."
>}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="Email File Manipulation Tools"
   >}}
   {{< products/popularapp-anchor
 anchorlink="MSG to PDF"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-pdf/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MSG to EML"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-eml/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MSG to HTML"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-html/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MSG to MBOX"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-mbox/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MSG to PST"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-pst/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MSG to VCF"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-vcf/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="EML to PDF"
 moreproducts="https://products.aspose.com/email/net/conversion/eml-to-pdf/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="EML to HTML"
 moreproducts="https://products.aspose.com/email/net/conversion/eml-to-html/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="EML to MSG"
 moreproducts="https://products.aspose.com/email/net/conversion/eml-to-msg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MBOX to XPS"
 moreproducts="https://products.aspose.com/email/net/conversion/mbox-to-xps/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="OST to PST"
 moreproducts="https://products.aspose.com/email/net/conversion/ost-to-pst/"
>}}  
   {{< products/popularapp-anchor
 anchorlink="PST to EML"
 moreproducts="https://products.aspose.com/email/net/conversion/pst-to-eml/"
 >}}
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Looking for help?"
bartext="Checkout our support channels for help with your questions related to Aspose product API features and working."
 resourcetxt1="Docs"
 resourcelinks1="https://docs.aspose.com/email/net/"
 resourcetxt2="API Reference"
 resourcelinks2="https://reference.aspose.com/email/" 
 resourcetxt3="Knowledge Base"
 resourcelinks3="https://kb.aspose.com/email/net/"
 resourcetxt4="Free Support"
 resourcelinks4="https://forum.aspose.com/c/email/12"  >}}
{{< homepage/aspose/com/inner-wrapper/resources-wrapper
 resource-heading="Resources" sectionid="support"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://blog.aspose.com/"
 resourcetitle="Blogs"
 resourcealt="Blogs"
 resourceimg="/images/blog1.svg"
 resourcelistlink="https://blog.aspose.com/email/create-mime-messages-in-csharp/"
 resourcelistlink2="https://blog.aspose.com/email/merge-multiple-mbox-files-in-csharp/"
 resourcelistlink3="https://blog.aspose.com/cells/send-excel-data-in-email-body-using-csharp-net/"
 resourcelisttext="Create MIME Messages in C# .NET"
 resourcelisttext2="Merge Multiple MBOX Files in C#"
 resourcelisttext3="Send Excel Data in Email Body using C# .NET"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://docs.aspose.com/"
 resourcetitle="Documentation"
 resourcealt="Documentation"
 resourceimg="/img/docs1.svg"
 resourcelistlink="https://docs.aspose.com/email/net/features-overview/"
 resourcelistlink2="https://www.nuget.org/packages/Aspose.Email/"
 resourcelistlink3="https://helpdesk.aspose.com/"
 resourcelisttext="Aspose.Email for .NET Features"
 resourcelisttext2="Install Aspose.Email for .NET NuGet Package"
 resourcelisttext3="Aspose.Email for .NET Paid Support Helpdesk"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://kb.aspose.com/"
 resourcetitle="Knowledge Base"
 resourcealt="Code Samples"
 resourceimg="/images/code1.svg"
 resourcelistlink="https://kb.aspose.com/email/net/how-to-send-email-in-c-sharp/"
 resourcelistlink2="https://kb.aspose.com/email/net/how-to-create-a-pst-file-in-csharp/"
 resourcelistlink3="https://kb.aspose.com/email/net/how-to-add-mapicalendar-to-pst-using-csharp/"
 resourcelisttext="How to Send Email in C#"
resourcelisttext2="How to Create a PST File in C#"
resourcelisttext3="How to Add MapiCalendar to PST using C#"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Ready to get started?"
rtstext="Download Free Trial"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="View All APIs"
>}}
