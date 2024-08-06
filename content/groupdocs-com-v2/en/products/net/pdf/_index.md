---
title: PDF API for .NET to process, edit, and convert PDF documents
description: An advanced .NET PDF library to generate and merge PDF documents. Convert PDF to JPG, PDF to Excel, and PDF to Word in C#, ASP.NET & VB.NET apps.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="PDF API for .NET to process, edit, and accurately convert PDF documents"
  inheadertext="Experience powerful PDF editing functionality, conversion, and parsing capabilities without needing Adobe Acrobat. Render PDF documents to DOC, DOCX, PPTX, XLS, JPG, PNG, GIF, SVG, and other formats in your .NET apps."
  ctabtn="Download Free Trial"
  ctalink="https://releases.aspose.com/pdf/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="View All APIs"
  bchomelink="/"
  bchome="Home"
  bcpage="PDF"
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
subnav5="https://purchase.aspose.com/pricing/pdf/net"
subnavtxt5="Pricing" 
subbtn1="https://docs.aspose.com/pdf/net/"
subbtntxt1="Learn"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="Buy"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="Take PDF document processing to the next level in C# .NET"
   subtext="Upgrade your .NET document processing applications by integrating comprehensive PDF manipulation features with the help of Aspose.PDF for .NET. This native library is loaded with immaculate PDF file processing abilities enabling .NET developers not only to generate, process, edit, and parse PDFs but accurately convert PDF documents too. Quickly and easily insert text, annotations, and images to PDF documents, add or remove attachments, watermarks, and bookmarks, split or merge PDF pages, and process form fields in your PDF files using this PDF API for .NET."
   subtext2="Offering matchless cross-platform compatibility, Aspose.PDF for .NET is designed to function seamlessly across multiple frameworks such as .NET Framework and .NET Core among others. Additionally, you can use this .NET PDF API to build PDF converter applications in C#, ASP.NET, and VB.NET and convert PDF to JPG, PDF to Excel, PDF to Word, PDF to PowerPoint, and several other file formats with high fidelity."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Getting Started</h2>
   <p>To correctly set up and use Aspose.PDF for .NET API, please check the below-given information. Please refer to the <a href="https://docs.aspose.com/pdf/net/system-requirements/">System Requirements</a> page for a list of prerequisites to successfully set up the PDF API for .NET</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.PDF for .NET Installation"
>}}
<p>To set up Aspose.PDF for .NET on your system, you can download the DLLs or the MSI Installer directly from the <a href="https://releases.aspose.com/pdf/net/">downloads section</a>. Alternatively, you can make use of the <a href="https://www.nuget.org/packages/Aspose.PDF/">NuGet package</a> for the .NET PDF API installation. The package manager API command is given below.</p>
{{< products/product-feature-blocks-snip
 snipclass="greysnipp"
 copyID="snipp1"
>}}
PM> Install-Package Aspose.PDF
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="How to Convert PDF to Word in .NET and Quickly Merge PDFs"
featuretext="Aspose.PDF for .NET supports a vast array of document processing features, including converting PDF to Word and other file formats and merging PDFs in .NET. Using this .NET library, experience fully independent PDF document processing without relying on any third-party software."
>}}
   
{{< products/product-feature-blocks-col
 featurecolheading="Convert PDF to Word in .NET"
>}}
<p>Upgrade your existing .NET PDF conversion apps by integrating PDF to Word conversion functionality. Aspose.PDF for .NET API lets you convert PDF to DOC and PDF to DOCX within your .NET document conversion apps. Please refer to the following instructions and the code snippet to help yourself convert PDF to Word in .NET:</p>
<ul>
   <li>Create an instance of <a href="https://reference.aspose.com/pdf/net/aspose.pdf/document/">Document</a> object with the source PDF document.</li>
   <li>Save it to <strong>SaveFormat.Doc</strong> format by calling <strong>Document.Save()</strong> method.</li>
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
 featurecolheading="Merge PDF Files in .NET"
>}}
<p>Merging PDF files is supported by Aspose.PDF for .NET API. Please check the below-given instructions and code snippet to quickly and easily merge PDF files in your C# .NET apps:</p>
<ul>
   <li>Create two <a href="https://reference.aspose.com/pdf/net/aspose.pdf/document">Document</a> objects, each containing one of the input PDF files.</li>
   <li>Then call the <a href="https://reference.aspose.com/pdf/net/aspose.pdf/pagecollection">PageCollection</a> collection’s Add method for the Document object you want to add the other PDF file to.</li>
   <li>Pass the PageCollection collection of the second Document object to the first PageCollection collection’s Add method.</li>
   <li>Finally, save the output PDF file using the <a href="https://reference.aspose.com/pdf/net/aspose.pdf.document/save/methods/4">Save</a> method.</li>
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
   <p class="col-lg-12">For more working examples and code samples of Aspose.PDF for .NET API, please visit our <a href="https://github.com/aspose-pdf/Aspose.PDF-for-.NET/tree/master/Examples">GitHub examples</a> page. If you are looking to view, edit, merge, split, annotate, compare, or convert PDF documents on the fly, please check out our free online <a href="https://products.aspose.app/pdf/family">PDF processing apps.</a></p>
{{< products/product-feature-blocks
featureheading="Secure PDF file processing in .NET"
featuretext="Aspose.PDF for .NET is a fully secure PDF processing library providing security features such as digital signature support, password protection, and encryption. This ensures dependable access, processing, and transmission of your PDF documents while preventing unauthorized access and modification. Furthermore, you do not need to install Adobe Acrobat to use this .NET PDF processing API."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="FAQ"
>}}
   {{< products/faq-block
 faqquery="1. How can I convert PDF in .NET?"
 faqanswer="Converting PDF in .NET is easy and straight forward using Aspose.PDF for .NET API. It only requires a few lines of code and you can convert PDF files to multiple file formats."
>}}
   {{< products/faq-block 
 faqquery="2. How long it takes to merge or convert PDF?"
 faqanswer="The .NET PDF API works fast and processes your merge or convert document requests in no time."
>}}
   {{< products/faq-block
 faqquery="3. Is it safe to process PDF using a the .NET PDF API?"
 faqanswer="Of course! You can rest assured about the security of your documents while processing them using Aspose.PDF for .NET API. We ensure the privacy of your data and take all required measures to provide you with a secure user experience."
>}}
   {{< products/faq-block
 faqquery="4. Can I process PDF on Mac OS, Windows, or Linux?"
 faqanswer="Yes, the .NET PDF manipulation API works across different OS, frameworks, and operating environments. You can use it on the platform of your choice. Our .NET PDF library does not require any additional software installation to function."
>}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="PDF Manipulation Tools"
   >}}
   {{< products/popularapp-anchor
 anchorlink="PDF to WORD"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-word/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF to DOC"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-doc/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF to DOCX"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-docx/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF to EXCEL"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-excel/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF to XLS"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-xls/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF to XLSX"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-xlsx/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF to PPTX"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-pptx/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF to HTML"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-html/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF to BMP"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-bmp/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF to TIFF"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-tiff/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF to PNG"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-png/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF to GIF"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-gif/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PDF to BMP"
 moreproducts="https://products.aspose.com/pdf/net/conversion/pdf-to-bmp/"
>}}  
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Looking for help?"
bartext="Checkout our support channels for help with your questions related to Aspose product API features and working."
 resourcetxt1="Docs"
 resourcelinks1="https://docs.aspose.com/pdf/net/"
 resourcetxt2="API Reference"
 resourcelinks2="https://reference.aspose.com/pdf/" 
 resourcetxt3="Knowledge Base"
 resourcelinks3="https://kb.aspose.com/pdf/net/"
 resourcetxt4="Free Support"
 resourcelinks4="https://forum.aspose.com/c/pdf/10"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-wrapper
 resource-heading="Resources"
 sectionid="support"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://blog.aspose.com/"
 resourcetitle="Blogs"
 resourcealt="Blogs"
 resourceimg="/images/blog1.svg"
 resourcelistlink="https://blog.aspose.com/pdf/convert-latex-to-pdf-in-python/"
 resourcelistlink2="https://blog.aspose.com/pdf/convert-pdf-to-ppt-in-python/"
 resourcelistlink3="https://blog.aspose.com/pdf/convert-pdf-to-latex-in-python/"
 resourcelisttext="Convert LaTeX to PDF in Python"
 resourcelisttext2="Convert PDF to PPT in Python"
 resourcelisttext3="Convert PDF to LaTeX in Python"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://docs.aspose.com/"
 resourcetitle="Documentation"
 resourcealt="Documentation"
 resourceimg="/img/docs1.svg"
 resourcelistlink="https://docs.aspose.com/pdf/net/key-features/"
 resourcelistlink2="https://www.nuget.org/packages/Aspose.PDF/"
 resourcelistlink3="https://helpdesk.aspose.com/"
 resourcelisttext="Aspose.PDF for .NET Features"
 resourcelisttext2="Install Aspose.PDF for .NET NuGet Package"
 resourcelisttext3="Aspose.PDF for .NET Paid Support Helpdesk"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://kb.aspose.com/"
 resourcetitle="Knowledge Base"
 resourcealt="Code Samples"
 resourceimg="/images/code1.svg"
 resourcelistlink="https://kb.aspose.com/words/net/how-to-insert-hyperlink-in-word-using-csharp/"
 resourcelistlink2="https://kb.aspose.com/total/python/how-to-install-python-to-run-aspose-pdf-for-python-via-net/"
 resourcelistlink3="https://kb.aspose.com/pdf/net/how-to-add-hyperlink-in-pdf-using-csharp/"
 resourcelisttext="How to Insert Hyperlink in Word using C#"
resourcelisttext2="How to Install Python to Run Aspose.PDF for Python via .NET"
resourcelisttext3="How to Add Hyperlink in PDF using C#"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Ready to get started?"
rtstext="Download Free Trial"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="View All APIs"
>}}
